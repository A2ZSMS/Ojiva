<?php
/**
 * Ojiva AI admin panel — shared code for the pages in public/ai-admin/.
 * Lives outside public_html: sessions, login, CSRF, layout and helpers.
 */
ini_set('display_errors', '0');
require_once dirname(__DIR__) . '/lib/db.php';
require_once dirname(__DIR__) . '/lib/live.php';

const ADMIN_BASE   = '/ai-admin/';
const IDLE_TIMEOUT = 8 * 3600;     // signed out after 8 hours without activity
const LOGIN_LIMIT  = 5;            // wrong passwords per 15 minutes per IP

// Claude Haiku 5.5, US$ per million tokens (cache reads 0.1×, cache writes 1.25× input)
const AI_PRICE = ['in' => 0.10, 'out' => 0.50, 'cache_read' => 0.01, 'cache_write' => 0.125];

const STATUSES = [
    'new'            => 'New',
    'contacted'      => 'Contacted',
    'follow_up'      => 'Follow-up',
    'converted'      => 'Converted',
    'not_interested' => 'Not interested',
    'junk'           => 'Junk / spam',
];

/* ── Security headers: private, never indexed, never framed ── */
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
header('X-Frame-Options: DENY');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");

$https = ($_SERVER['HTTPS'] ?? '') === 'on' || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
session_name('OJIVA_ADMIN');
session_set_cookie_params(['lifetime' => 0, 'path' => ADMIN_BASE, 'secure' => $https, 'httponly' => true, 'samesite' => 'Strict']);
session_start();

if (isset($_SESSION['uid'], $_SESSION['seen']) && time() - $_SESSION['seen'] > IDLE_TIMEOUT) {
    $_SESSION = [];
    session_regenerate_id(true);
}
$_SESSION['seen'] = time();

/* ── Helpers ── */
function h($v): string { return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); }

function redirect(string $to): never {
    header('Location: ' . $to);
    exit;
}

function csrf_token(): string {
    return $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
}
function csrf_field(): string {
    return '<input type="hidden" name="csrf" value="' . h(csrf_token()) . '">';
}
function csrf_check(): void {
    // Forms send it as a field, admin.js (live chat) as a header
    $sent = (string)($_POST['csrf'] ?? $_SERVER['HTTP_X_CSRF'] ?? '');
    if (!hash_equals(csrf_token(), $sent)) {
        http_response_code(400);
        exit('Form expired — go back, refresh the page and try again.');
    }
}

function flash(?string $msg = null): ?string {
    if ($msg !== null) { $_SESSION['flash'] = $msg; return null; }
    $m = $_SESSION['flash'] ?? null;
    unset($_SESSION['flash']);
    return $m;
}

/** The signed-in admin, or a redirect to the login page. */
function require_admin(): array {
    $uid = $_SESSION['uid'] ?? null;
    if ($uid) {
        $q = ojiva_db()->prepare('SELECT id, email, name, role, last_seen_at FROM admin_users WHERE id = ? AND is_active = 1');
        $q->execute([$uid]);
        if ($user = $q->fetch()) {
            // Anyone with the panel open counts as online for "Talk to a person"
            if (!$user['last_seen_at'] || strtotime($user['last_seen_at']) < time() - 30) {
                ojiva_db()->prepare('UPDATE admin_users SET last_seen_at = NOW() WHERE id = ?')->execute([$user['id']]);
            }
            return $user;
        }
    }
    $_SESSION = [];
    redirect(ADMIN_BASE . 'login.php');
}

/** Team management is for owners only. */
function require_owner(array $user): void {
    if ($user['role'] !== 'owner') {
        http_response_code(403);
        layout_start('Not allowed', $user);
        echo '<p class="card empty">Only an owner can manage the team.</p>';
        layout_end();
        exit;
    }
}

/** Active team members, for "assign to" menus: [id => name] */
function team_members(): array {
    return ojiva_db()->query('SELECT id, name FROM admin_users WHERE is_active = 1 ORDER BY name')->fetchAll(PDO::FETCH_KEY_PAIR);
}

/** Approximate AI cost in US$ for summed token columns. */
function ai_cost(array $t): float {
    return ((int)($t['input_tokens'] ?? 0) * AI_PRICE['in'] + (int)($t['output_tokens'] ?? 0) * AI_PRICE['out']
        + (int)($t['cache_read_tokens'] ?? 0) * AI_PRICE['cache_read'] + (int)($t['cache_write_tokens'] ?? 0) * AI_PRICE['cache_write']) / 1e6;
}

/** Privacy: chats that never became a lead (and aren't flagged) are deleted after N days. */
function purge_old_chats(): void {
    $days = max(30, (int)(ojiva_config()['chat_retention_days'] ?? 180));
    ojiva_db()->exec("DELETE FROM ai_chat_sessions WHERE lead_id IS NULL AND review <> 'flagged'
        AND last_message_at < NOW() - INTERVAL $days DAY LIMIT 500");
}

function time_ago(?string $dt): string {
    if (!$dt) return '—';
    $s = time() - strtotime($dt);
    if ($s < 60) return 'just now';
    if ($s < 3600) return floor($s / 60) . ' min ago';
    if ($s < 86400) return floor($s / 3600) . ' h ago';
    if ($s < 7 * 86400) return floor($s / 86400) . ' d ago';
    return date('d M Y', strtotime($dt));
}

function fmt_time(?string $dt): string {
    return $dt ? date('d M Y, h:i A', strtotime($dt)) : '—';
}

function status_pill(string $s): string {
    return '<span class="pill pill-' . h($s) . '">' . h(STATUSES[$s] ?? $s) . '</span>';
}

/** Chat text for display: escaped, line breaks kept, the AI's **bold** shown as bold. */
function chat_html(string $text): string {
    return preg_replace('/\*\*(.+?)\*\*/s', '<b>$1</b>', nl2br(h($text)));
}

function tel_link(string $phone): string { return 'tel:+91' . $phone; }

function whatsapp_link(array $lead): string {
    $first = explode(' ', trim($lead['name']))[0];
    $text = "Hi $first, this is the Ojiva AI team. Thanks for chatting with us on ojiva.ai — we'd like to help you with your enquiry.";
    return 'https://wa.me/91' . $lead['phone'] . '?text=' . rawurlencode($text);
}

const LEAD_VIEWS = ['mine' => 'Assigned to me', 'unassigned' => 'Unassigned', 'overdue' => 'Follow-ups due'];

/** Shared filter for the leads list and the CSV export: ?status=…&view=…&q=… */
function leads_filter(array $user): array {
    $status = array_key_exists($_GET['status'] ?? '', STATUSES) ? $_GET['status'] : '';
    $view = array_key_exists($_GET['view'] ?? '', LEAD_VIEWS) ? $_GET['view'] : '';
    $q = trim((string)($_GET['q'] ?? ''));
    $where = [];
    $args = [];
    if ($status) { $where[] = 'ai_chat_leads.status = ?'; $args[] = $status; }
    if ($view === 'mine') { $where[] = 'ai_chat_leads.assigned_to = ?'; $args[] = $user['id']; }
    if ($view === 'unassigned') { $where[] = "ai_chat_leads.assigned_to IS NULL AND ai_chat_leads.status NOT IN ('converted','not_interested','junk')"; }
    if ($view === 'overdue') { $where[] = "ai_chat_leads.status = 'follow_up' AND ai_chat_leads.follow_up_on <= CURDATE()"; }
    if ($q !== '') {
        $where[] = '(ai_chat_leads.name LIKE ? OR ai_chat_leads.phone LIKE ? OR ai_chat_leads.interest LIKE ?)';
        $like = '%' . addcslashes($q, '%_\\') . '%';
        array_push($args, $like, $like, $like);
    }
    return [$status, $view, $q, $where ? 'WHERE ' . implode(' AND ', $where) : '', $args];
}

/* ── Layout ── */

/** Initials avatar, colour picked from the name so a person always looks the same. */
function avatar(string $name, string $extra = ''): string {
    $parts = preg_split('/\s+/', trim($name)) ?: [''];
    $ini = mb_strtoupper(mb_substr($parts[0], 0, 1) . (count($parts) > 1 ? mb_substr(end($parts), 0, 1) : ''));
    return '<span class="avatar av-' . (crc32($name) % 6) . ($extra ? " $extra" : '') . '" aria-hidden="true">' . h($ini ?: '?') . '</span>';
}

const NAV_ICONS = [
    'dashboard' => '<path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"/>',
    'live'      => '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    'leads'     => '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    'chats'     => '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
    'team'      => '<path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    'logout'    => '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
];
function icon(string $name): string {
    return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . NAV_ICONS[$name] . '</svg>';
}

function layout_start(string $title, ?array $user = null): void {
    ?><!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#0b1220">
<title><?= h($title) ?> · Ojiva AI Admin</title>
<link rel="stylesheet" href="<?= ADMIN_BASE ?>admin.css?v=5">
<?php if ($user): ?>
<meta name="csrf" content="<?= h(csrf_token()) ?>">
<script src="<?= ADMIN_BASE ?>admin.js?v=2" defer></script>
<?php endif; ?>
</head>
<body class="<?= $user ? 'has-side' : 'auth' ?>">
<?php if ($user):
    $here = basename($_SERVER['SCRIPT_NAME']);
    $link = function (string $file, string $label, string $ic, array $also = [], string $extra = '') use ($here) {
        $on = in_array($here, [$file, ...$also], true);
        return '<a href="' . ADMIN_BASE . ($file === 'index.php' ? '' : $file) . '"' . ($on ? ' class="on" aria-current="page"' : '') . '>'
            . icon($ic) . '<span>' . $label . '</span>' . $extra . '</a>';
    };
?>
<aside class="side">
  <a class="brand" href="<?= ADMIN_BASE ?>"><span class="logo" aria-hidden="true">O</span><span class="brand-text">Ojiva AI<small>Admin</small></span></a>
  <nav class="side-nav" aria-label="Admin">
    <?= $link('index.php', 'Dashboard', 'dashboard') ?>
    <?= $link('live.php', 'Live', 'live', [], '<span class="nav-badge" data-live-badge hidden></span>') ?>
    <?= $link('leads.php', 'Leads', 'leads', ['lead.php']) ?>
    <?= $link('conversations.php', 'Conversations', 'chats', ['conversation.php']) ?>
    <?php if ($user['role'] === 'owner'): ?><?= $link('team.php', 'Team', 'team') ?><?php endif; ?>
  </nav>
  <div class="side-user">
    <a class="me<?= $here === 'account.php' ? ' on' : '' ?>" href="<?= ADMIN_BASE ?>account.php" title="My account">
      <?= avatar($user['name']) ?>
      <span class="me-text"><b><?= h($user['name']) ?></b><small><?= $user['role'] === 'owner' ? 'Owner' : 'Sales agent' ?></small></span>
    </a>
    <form method="post" action="<?= ADMIN_BASE ?>logout.php"><?= csrf_field() ?><button class="signout-btn" title="Sign out" aria-label="Sign out"><?= icon('logout') ?></button></form>
  </div>
</aside>
<?php endif; ?>
<main class="main">
<div class="wrap">
<?php if ($m = flash()): ?><p class="flash" role="status"><?= h($m) ?></p><?php endif;
}

function layout_end(): void {
    echo "</div>\n</main>\n</body>\n</html>";
}
