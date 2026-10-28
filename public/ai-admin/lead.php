<?php
/** Ojiva AI admin — one lead: contact buttons, owner, status + notes, history, full chat. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();
$id = (int)($_GET['id'] ?? 0);

$q = $db->prepare('SELECT * FROM ai_chat_leads WHERE id = ?');
$q->execute([$id]);
$lead = $q->fetch();
if (!$lead) { http_response_code(404); layout_start('Not found', $user); echo '<p class="card empty">Lead not found. <a href="' . ADMIN_BASE . '">Back to all leads</a></p>'; layout_end(); exit; }

$team = team_members();

/* ── Save owner / status / follow-up date / note ── */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $status = array_key_exists($_POST['status'] ?? '', STATUSES) ? $_POST['status'] : $lead['status'];
    $date = (string)($_POST['follow_up_on'] ?? '');
    $followUp = $status === 'follow_up' && preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) ? $date : null;
    $note = trim(mb_substr((string)($_POST['note'] ?? ''), 0, 2000));
    $owner = (int)($_POST['assigned_to'] ?? 0);
    $owner = isset($team[$owner]) ? $owner : null;

    $db->beginTransaction();
    // Moving to a "spoke to them" status stamps the contact time (decided in PHP — see lib/live.php)
    $contacted = $status !== $lead['status'] && in_array($status, ['contacted', 'follow_up', 'converted', 'not_interested'], true);
    $db->prepare('UPDATE ai_chat_leads SET status = ?, follow_up_on = ?, assigned_to = ?'
        . ($contacted ? ', last_contacted_at = NOW()' : '') . ' WHERE id = ?')
        ->execute([$status, $followUp, $owner, $id]);
    $event = $db->prepare('INSERT INTO ai_lead_events (lead_id, admin_id, type, detail) VALUES (?, ?, ?, ?)');
    if ($status !== $lead['status']) {
        $event->execute([$id, $user['id'], 'status', STATUSES[$lead['status']] . ' → ' . STATUSES[$status] . ($followUp ? ' (on ' . date('d M Y', strtotime($followUp)) . ')' : '')]);
    }
    if ($owner !== ($lead['assigned_to'] === null ? null : (int)$lead['assigned_to'])) {
        $event->execute([$id, $user['id'], 'assigned', $owner ? 'Assigned to ' . $team[$owner] : 'Unassigned']);
    }
    if ($note !== '') $event->execute([$id, $user['id'], 'note', $note]);
    $db->commit();

    flash('Saved.');
    redirect('lead.php?id=' . $id);
}

$events = $db->prepare('SELECT e.*, a.name AS admin_name FROM ai_lead_events e LEFT JOIN admin_users a ON a.id = e.admin_id
    WHERE e.lead_id = ? ORDER BY e.created_at DESC, e.id DESC');
$events->execute([$id]);
$events = $events->fetchAll();

$chat = json_decode((string)$lead['transcript'], true) ?: [];
$source = array_filter([
    'Page'         => $lead['page'],
    'UTM source'   => $lead['utm_source'],
    'UTM medium'   => $lead['utm_medium'],
    'UTM campaign' => $lead['utm_campaign'],
    'UTM term'     => $lead['utm_term'],
    'UTM content'  => $lead['utm_content'],
    'Google click' => $lead['gclid'] ? 'yes (gclid)' : '',
    'Meta click'   => $lead['fbclid'] ? 'yes (fbclid)' : '',
    'First landing'=> $lead['landing_url'],
    'Referrer'     => $lead['referrer_url'],
]);

layout_start($lead['name'], $user);
?>
<p class="back"><a href="leads.php">← All leads</a></p>

<div class="grid">
  <section class="card">
    <div class="lead-head">
      <?= avatar($lead['name'], 'lg') ?>
      <div>
        <h1><?= h($lead['name']) ?></h1>
        <p class="muted">Received <?= h(fmt_time($lead['created_at'])) ?> · <?= status_pill($lead['status']) ?>
          · <?= $lead['assigned_to'] ? 'Owner: ' . h($team[$lead['assigned_to']] ?? '—') : 'Unassigned' ?></p>
      </div>
    </div>
    <p class="big-phone">+91 <?= h($lead['phone']) ?></p>
    <p class="actions">
      <a class="btn" href="<?= h(tel_link($lead['phone'])) ?>">Call now</a>
      <a class="btn btn-wa" href="<?= h(whatsapp_link($lead)) ?>" target="_blank" rel="noopener">WhatsApp</a>
    </p>
    <h2>What they need</h2>
    <p class="need-box"><?= h($lead['interest'] ?: 'No summary — see the chat below.') ?></p>

    <h2>Update</h2>
    <form method="post" class="update">
      <?= csrf_field() ?>
      <label>Assigned to
        <select name="assigned_to">
          <option value="">— Unassigned —</option>
          <?php foreach ($team as $tid => $tname): ?>
            <option value="<?= (int)$tid ?>" <?= (int)$lead['assigned_to'] === (int)$tid ? 'selected' : '' ?>><?= h($tname) ?><?= (int)$tid === (int)$user['id'] ? ' (me)' : '' ?></option>
          <?php endforeach; ?>
        </select>
      </label>
      <label>Status
        <select name="status">
          <?php foreach (STATUSES as $k => $label): ?>
            <option value="<?= h($k) ?>" <?= $lead['status'] === $k ? 'selected' : '' ?>><?= h($label) ?></option>
          <?php endforeach; ?>
        </select>
      </label>
      <label>Follow-up date <small>(for “Follow-up”)</small>
        <input type="date" name="follow_up_on" value="<?= h($lead['follow_up_on'] ?? '') ?>">
      </label>
      <label class="full">Call note
        <textarea name="note" rows="3" maxlength="2000" placeholder="What did they say? Volume, timeline, next step…"></textarea>
      </label>
      <button class="btn">Save</button>
    </form>

    <h2>History</h2>
    <ol class="timeline">
      <?php foreach ($events as $e): ?>
        <li class="ev-<?= h($e['type']) ?>">
          <small><?= h(fmt_time($e['created_at'])) ?><?= $e['admin_name'] ? ' · ' . h($e['admin_name']) : '' ?></small>
          <p><?= nl2br(h($e['detail'])) ?></p>
        </li>
      <?php endforeach; ?>
    </ol>
  </section>

  <aside>
    <section class="card">
      <h2>Chat with the AI assistant</h2>
      <?php if ($lead['session_id']): ?><p><a href="conversation.php?id=<?= (int)$lead['session_id'] ?>">Open the full conversation with times →</a></p><?php endif; ?>
      <?php if (!$chat): ?><p class="muted">No conversation saved.</p><?php endif; ?>
      <div class="chat">
        <?php foreach ($chat as $m): ?>
          <div class="bubble <?= $m['role'] === 'user' ? 'from-visitor' : 'from-ai' ?>">
            <small><?= $m['role'] === 'user' ? h($lead['name']) : 'AI assistant' ?></small>
            <p><?= chat_html($m['content']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </section>
    <?php if ($source): ?>
    <section class="card">
      <h2>Where they came from</h2>
      <dl class="meta">
        <?php foreach ($source as $k => $v): ?><dt><?= h($k) ?></dt><dd><?= h($v) ?></dd><?php endforeach; ?>
      </dl>
    </section>
    <?php endif; ?>
  </aside>
</div>
<?php layout_end();
