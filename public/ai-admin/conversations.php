<?php
/** Ojiva AI admin — every AI chat conversation, with or without a lead. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();

const SHOW = [
    ''        => 'All',
    'lead'    => 'Became a lead',
    'missed'  => 'Saw form, left',
    'nolead'  => 'No lead',
    'flagged' => 'Flagged',
    'errors'  => 'Unanswered',
];
const PERIODS = ['' => 'Any time', 'today' => 'Today', '7' => 'Last 7 days', '30' => 'Last 30 days'];
const PER_PAGE = 30;

$show   = (string)($_GET['show'] ?? '');
$show   = array_key_exists($show, SHOW) ? $show : '';
$period = (string)($_GET['period'] ?? '');
$period = array_key_exists($period, PERIODS) ? $period : '';
$q      = trim((string)($_GET['q'] ?? ''));
$page   = trim((string)($_GET['page'] ?? ''));
$p      = max(1, (int)($_GET['p'] ?? 1));

$where = [];
$args = [];
match ($show) {
    'lead'    => $where[] = 's.lead_id IS NOT NULL',
    'missed'  => $where[] = 's.form_shown = 1 AND s.lead_id IS NULL',
    'nolead'  => $where[] = 's.lead_id IS NULL',
    'flagged' => $where[] = "s.review = 'flagged'",
    'errors'  => $where[] = "EXISTS (SELECT 1 FROM ai_chat_messages e WHERE e.session_id = s.id AND e.error <> '')",
    default   => null,
};
if ($period === 'today') $where[] = 's.last_message_at >= CURDATE()';
elseif ($period) $where[] = 's.last_message_at >= CURDATE() - INTERVAL ' . ((int)$period - 1) . ' DAY';
if ($page !== '') { $where[] = 's.page_first = ?'; $args[] = $page; }
if ($q !== '') {
    // Searches what visitors and the AI wrote
    $where[] = 'EXISTS (SELECT 1 FROM ai_chat_messages m WHERE m.session_id = s.id AND m.content LIKE ?)';
    $args[] = '%' . addcslashes($q, '%_\\') . '%';
}
$sqlWhere = $where ? 'WHERE ' . implode(' AND ', $where) : '';

$count = $db->prepare("SELECT COUNT(*) FROM ai_chat_sessions s $sqlWhere");
$count->execute($args);
$total = (int)$count->fetchColumn();
$pages = max(1, (int)ceil($total / PER_PAGE));

$list = $db->prepare("SELECT s.*, l.name AS lead_name,
      (SELECT COUNT(*) FROM ai_chat_messages e WHERE e.session_id = s.id AND e.error <> '') AS errors
    FROM ai_chat_sessions s LEFT JOIN ai_chat_leads l ON l.id = s.lead_id
    $sqlWhere ORDER BY s.last_message_at DESC LIMIT " . PER_PAGE . ' OFFSET ' . (($p - 1) * PER_PAGE));
$list->execute($args);
$rows = $list->fetchAll();

$link = fn(array $set) => '?' . http_build_query(array_filter(array_merge(['show' => $show, 'period' => $period, 'q' => $q, 'page' => $page], $set), fn($v) => $v !== '' && $v !== null && $v !== 1));

layout_start('Conversations', $user);
?>
<div class="page-head">
  <h1>Conversations</h1>
  <p class="muted">Every chat with the AI assistant, newest first. Chats that never became a lead are deleted after <?= max(30, (int)(ojiva_config()['chat_retention_days'] ?? 180)) ?> days.</p>
</div>

<form class="filters" method="get">
  <div class="tabs">
    <?php foreach (SHOW as $k => $label): ?>
      <a href="<?= h($link(['show' => $k])) ?>" class="<?= $show === $k ? 'on' : '' ?>"><?= h($label) ?></a>
    <?php endforeach; ?>
  </div>
  <?php foreach (['show' => $show, 'page' => $page] as $k => $v): if ($v !== ''): ?><input type="hidden" name="<?= $k ?>" value="<?= h($v) ?>"><?php endif; endforeach; ?>
  <input type="search" name="q" value="<?= h($q) ?>" placeholder="Search what was said, e.g. DLT, OTP, clinic">
  <select name="period" aria-label="Time period">
    <?php foreach (PERIODS as $k => $label): ?><option value="<?= h($k) ?>" <?= $period === $k ? 'selected' : '' ?>><?= h($label) ?></option><?php endforeach; ?>
  </select>
  <button class="btn btn-sm">Search</button>
  <?php if ($page !== ''): ?><a class="chip" href="<?= h($link(['page' => ''])) ?>">Page: <?= h($page) ?> ✕</a><?php endif; ?>
</form>

<?php if (!$rows): ?>
  <p class="card empty">No conversations<?= $show || $period || $q || $page ? ' match this filter' : ' yet' ?>.</p>
<?php else: ?>
<div class="card table-wrap">
<table class="leads">
  <thead><tr><th>Last message</th><th>First question</th><th>Messages</th><th>Page</th><th>Visitor</th><th>Outcome</th></tr></thead>
  <tbody>
  <?php foreach ($rows as $c): ?>
    <tr>
      <td class="nowrap"><?= h(time_ago($c['last_message_at'])) ?><small><?= h(fmt_time($c['started_at'])) ?></small></td>
      <td class="need"><a href="conversation.php?id=<?= (int)$c['id'] ?>"><?= h(mb_strimwidth($c['first_question'] ?: 'Opened the chat — no message yet', 0, 140, '…')) ?></a></td>
      <td><?= (int)$c['visitor_messages'] ?></td>
      <td class="nowrap"><?= h($c['page_first']) ?><?php if ($c['page_last'] !== $c['page_first']): ?><small>→ <?= h($c['page_last']) ?></small><?php endif; ?></td>
      <td class="nowrap">
        <span class="tag"><?= $c['device'] === 'mobile' ? 'Phone' : 'Desktop' ?></span>
        <?php if ($c['language'] === 'hi'): ?><span class="tag">हिंदी</span><?php endif; ?>
        <?php if ($c['from_ad']): ?><span class="tag tag-ad"><?= $c['from_ad'] === 'google' ? 'Google ad' : 'Meta ad' ?></span><?php endif; ?>
      </td>
      <td class="nowrap">
        <?php if ($c['lead_id']): ?><a class="tag tag-lead" href="lead.php?id=<?= (int)$c['lead_id'] ?>">Lead: <?= h($c['lead_name']) ?></a>
        <?php elseif ($c['form_shown']): ?><span class="tag tag-warn">Saw form, left</span>
        <?php else: ?><span class="muted">—</span><?php endif; ?>
        <?php if ($c['review'] === 'flagged'): ?><span class="tag tag-flag">Flagged</span><?php elseif ($c['review'] === 'reviewed'): ?><span class="tag">Reviewed</span><?php endif; ?>
        <?php if ($c['errors']): ?><span class="tag tag-flag"><?= (int)$c['errors'] ?> unanswered</span><?php endif; ?>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>
<?php if ($pages > 1): ?>
<nav class="pager">
  <?php if ($p > 1): ?><a href="<?= h($link(['p' => $p - 1])) ?>">← Newer</a><?php endif; ?>
  <span>Page <?= $p ?> of <?= $pages ?> · <?= $total ?> conversations</span>
  <?php if ($p < $pages): ?><a href="<?= h($link(['p' => $p + 1])) ?>">Older →</a><?php endif; ?>
</nav>
<?php endif; ?>
<?php endif; ?>
<?php layout_end();
