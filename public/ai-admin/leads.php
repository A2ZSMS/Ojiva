<?php
/** Ojiva AI admin — AI chat leads: filters, search, owner, quick call/WhatsApp. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();
[$status, $view, $q, $where, $args] = leads_filter($user);
$team = team_members();

const PER_PAGE = 30;
$page = max(1, (int)($_GET['p'] ?? 1));

$count = $db->prepare("SELECT COUNT(*) FROM ai_chat_leads $where");
$count->execute($args);
$total = (int)$count->fetchColumn();
$pages = max(1, (int)ceil($total / PER_PAGE));

$list = $db->prepare("SELECT id, created_at, name, phone, interest, page, status, follow_up_on, assigned_to, session_id
    FROM ai_chat_leads $where ORDER BY created_at DESC LIMIT " . PER_PAGE . ' OFFSET ' . (($page - 1) * PER_PAGE));
$list->execute($args);
$leads = $list->fetchAll();


$link = fn(array $set) => '?' . http_build_query(array_filter(array_merge(['status' => $status, 'view' => $view, 'q' => $q], $set), fn($v) => $v !== '' && $v !== null && $v !== 1));

layout_start('Leads', $user);
?>
<div class="page-head"><h1>Leads</h1><p class="muted">Visitors who shared their name and number in the AI chat.</p></div>

<form class="filters" method="get">
  <div class="tabs">
    <a href="<?= h($link(['status' => '', 'view' => ''])) ?>" class="<?= $status || $view ? '' : 'on' ?>">All</a>
    <?php foreach (LEAD_VIEWS as $k => $label): ?>
      <a href="<?= h($link(['view' => $k, 'status' => ''])) ?>" class="<?= $view === $k ? 'on' : '' ?>"><?= h($label) ?></a>
    <?php endforeach; ?>
    <span class="tab-sep" aria-hidden="true"></span>
    <?php foreach (STATUSES as $k => $label): ?>
      <a href="<?= h($link(['status' => $k, 'view' => ''])) ?>" class="<?= $status === $k ? 'on' : '' ?>"><?= h($label) ?></a>
    <?php endforeach; ?>
  </div>
  <?php if ($status): ?><input type="hidden" name="status" value="<?= h($status) ?>"><?php endif; ?>
  <?php if ($view): ?><input type="hidden" name="view" value="<?= h($view) ?>"><?php endif; ?>
  <input type="search" name="q" value="<?= h($q) ?>" placeholder="Search name, phone or need">
  <button class="btn btn-sm">Search</button>
  <a class="btn btn-sm btn-ghost" href="export.php<?= h($link([])) ?>">Export CSV</a>
</form>

<?php if (!$leads): ?>
  <p class="card empty">No leads<?= $status || $view || $q ? ' match this filter' : ' yet. They appear here when visitors share their details in the AI chat' ?>.</p>
<?php else: ?>
<div class="card table-wrap">
<table class="leads">
  <thead><tr><th>Received</th><th>Name</th><th>Contact</th><th>What they need</th><th>Status</th><th>Owner</th><th></th></tr></thead>
  <tbody>
  <?php foreach ($leads as $l): ?>
    <tr class="<?= $l['status'] === 'new' ? 'is-new' : '' ?>">
      <td class="nowrap"><?= h(fmt_time($l['created_at'])) ?><small><?= h($l['page']) ?></small></td>
      <td><span class="person"><?= avatar($l['name']) ?><a href="lead.php?id=<?= (int)$l['id'] ?>"><?= h($l['name']) ?></a></span></td>
      <td class="nowrap">
        <span class="phone">+91 <?= h($l['phone']) ?></span>
        <span class="actions">
          <a class="btn btn-xs" href="<?= h(tel_link($l['phone'])) ?>">Call</a>
          <a class="btn btn-xs btn-wa" href="<?= h(whatsapp_link($l)) ?>" target="_blank" rel="noopener">WhatsApp</a>
        </span>
      </td>
      <td class="need"><?= h($l['interest'] ?: '—') ?></td>
      <td class="nowrap"><?= status_pill($l['status']) ?><?php if ($l['status'] === 'follow_up' && $l['follow_up_on']): ?><small class="<?= $l['follow_up_on'] <= date('Y-m-d') ? 'due' : '' ?>">on <?= h(date('d M', strtotime($l['follow_up_on']))) ?></small><?php endif; ?></td>
      <td class="nowrap"><?= $l['assigned_to'] ? h($team[$l['assigned_to']] ?? '—') : '<span class="muted">Unassigned</span>' ?></td>
      <td><a class="btn btn-sm btn-ghost" href="lead.php?id=<?= (int)$l['id'] ?>">Open</a></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>
<?php if ($pages > 1): ?>
<nav class="pager">
  <?php if ($page > 1): ?><a href="<?= h($link(['p' => $page - 1])) ?>">← Newer</a><?php endif; ?>
  <span>Page <?= $page ?> of <?= $pages ?> · <?= $total ?> leads</span>
  <?php if ($page < $pages): ?><a href="<?= h($link(['p' => $page + 1])) ?>">Older →</a><?php endif; ?>
</nav>
<?php endif; ?>
<?php endif; ?>
<?php layout_end();
