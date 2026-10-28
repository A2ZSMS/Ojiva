<?php
/**
 * Ojiva AI — live chat takeover, shared by the visitor endpoints
 * (public/api/ai-chat.php, ai-live.php) and the admin panel.
 *
 * A chat is in mode 'ai' (Claude answers) or 'human' (a team member took
 * over from the admin panel). Nothing is pushed: both sides poll every few
 * seconds, which works on plain shared hosting.
 */
require_once __DIR__ . '/db.php';

const LIVE_HANDBACK_AFTER = 180;  // seconds without the agent's page open → AI takes over again
const LIVE_ONLINE_WINDOW  = 120;  // admin panel seen this recently = online for live chat

const LIVE_TEXT = [
    'joined'   => '%s from Ojiva AI has joined the chat.',
    'back'     => 'The AI assistant is back to help you.',
    'stepped'  => 'Our team member stepped away. The AI assistant can help you meanwhile.',
    'asked'    => 'Visitor asked to talk to a person.',
];

function live_session(string $key): ?array {
    $q = ojiva_db()->prepare('SELECT * FROM ai_chat_sessions WHERE session_key = ?');
    $q->execute([$key]);
    return $q->fetch() ?: null;
}

/** A visitor can ask for a person before typing anything, so create the row if needed. */
function live_session_create(string $key, string $page): array {
    $ua = (string)($_SERVER['HTTP_USER_AGENT'] ?? '');
    ojiva_db()->prepare('INSERT IGNORE INTO ai_chat_sessions (session_key, page_first, page_last, device, ip_hash, user_agent, visitor_messages)
        VALUES (?, ?, ?, ?, ?, ?, 0)')
        ->execute([$key, mb_substr($page, 0, 255), mb_substr($page, 0, 255), preg_match('/Mobi|Android|iPhone/i', $ua) ? 'mobile' : 'desktop',
                   ojiva_ip_hash(), mb_substr($ua, 0, 255)]);
    return live_session($key);
}

function live_add(int $sessionId, string $role, string $content, ?int $agentId = null): int {
    $db = ojiva_db();
    $db->prepare('INSERT INTO ai_chat_messages (session_id, role, agent_id, content) VALUES (?, ?, ?, ?)')
       ->execute([$sessionId, $role, $agentId, $content]);
    $id = (int)$db->lastInsertId();
    if ($role === 'user') {
        $db->prepare("UPDATE ai_chat_sessions SET last_message_at = NOW(), visitor_messages = visitor_messages + 1,
            first_question = IF(first_question = '', ?, first_question) WHERE id = ?")->execute([mb_substr($content, 0, 500), $sessionId]);
    } elseif ($role === 'agent') {
        $db->prepare('UPDATE ai_chat_sessions SET last_message_at = NOW() WHERE id = ?')->execute([$sessionId]);
    }
    return $id;
}

/** If the agent closed their page and went quiet, give the chat back to the AI. Returns the fresh row. */
function live_handback_if_stale(array $s): array {
    if ($s['mode'] === 'human' && (!$s['agent_seen_at'] || strtotime($s['agent_seen_at']) < time() - LIVE_HANDBACK_AFTER)) {
        live_set_mode((int)$s['id'], 'ai', null, LIVE_TEXT['stepped']);
        $s['mode'] = 'ai';
        $s['agent_id'] = null;
    }
    return $s;
}

function live_set_mode(int $sessionId, string $mode, ?int $agentId, string $visitorText): void {
    // Decided in PHP, not SQL: comparing a sent value with fixed text inside the
    // query fails on MariaDB when their collations differ (Hostinger).
    $human = $mode === 'human';
    ojiva_db()->prepare('UPDATE ai_chat_sessions SET mode = ?, agent_id = ?, agent_seen_at = ' . ($agentId ? 'NOW()' : 'NULL')
        . ($human ? ', wants_human = 0' : '') . ' WHERE id = ?')
        ->execute([$mode, $agentId, $sessionId]);
    live_add($sessionId, 'system', $visitorText, $agentId);
}

function live_agents_online(): int {
    return (int)ojiva_db()->query('SELECT COUNT(*) FROM admin_users WHERE is_active = 1 AND last_seen_at > NOW() - INTERVAL ' . LIVE_ONLINE_WINDOW . ' SECOND')->fetchColumn();
}

function live_agent_name(?int $id): string {
    if (!$id) return '';
    $q = ojiva_db()->prepare('SELECT name FROM admin_users WHERE id = ?');
    $q->execute([$id]);
    return explode(' ', trim((string)$q->fetchColumn()))[0];
}
