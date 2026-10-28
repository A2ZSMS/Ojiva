<?php
/** Ojiva AI admin — one AI chat: the full conversation, live takeover, visitor details, review. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();
$id = (int)($_GET['id'] ?? 0);

$q = $db->prepare('SELECT s.*, l.name AS lead_name, l.phone AS lead_phone, l.status AS lead_status
    FROM ai_chat_sessions s LEFT JOIN ai_chat_leads l ON l.id = s.lead_id WHERE s.id = ?');
$q->execute([$id]);
$chat = $q->fetch();
if ($chat) $chat = live_handback_if_stale($chat);
if (!$chat) { http_response_code(404); layout_start('Not found', $user); echo '<p class="card empty">Conversation not found (chats without a lead are deleted after a while). <a href="conversations.php">Back to conversations</a></p>'; layout_end(); exit; }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    if (($_POST['action'] ?? '') === 'delete') {
        // Owner only: e.g. a visitor asks for their chat to be removed
        require_owner($user);
        $db->prepare('UPDATE ai_chat_leads SET session_id = NULL WHERE session_id = ?')->execute([$id]);
        $db->prepare('DELETE FROM ai_chat_sessions WHERE id = ?')->execute([$id]);
        flash('Conversation deleted.');
        redirect('conversations.php');
    }
    $review = in_array($_POST['review'] ?? '', ['none', 'flagged', 'reviewed'], true) ? $_POST['review'] : $chat['review'];
    $note = trim(mb_substr((string)($_POST['review_note'] ?? ''), 0, 1000));
    $db->prepare('UPDATE ai_chat_sessions SET review = ?, review_note = ? WHERE id = ?')->execute([$review, $note, $id]);
    flash('Saved.');
    redirect('conversation.php?id=' . $id);
}

$msgs = $db->prepare('SELECT m.*, u.name AS agent_name FROM ai_chat_messages m LEFT JOIN admin_users u ON u.id = m.agent_id WHERE m.session_id = ? ORDER BY m.id');
$msgs->execute([$id]);
$msgs = $msgs->fetchAll();

$usage = ['input_tokens' => 0, 'output_tokens' => 0, 'cache_read_tokens' => 0, 'cache_write_tokens' => 0];
foreach ($msgs as $m) foreach ($usage as $k => $_) $usage[$k] += (int)$m[$k];

$details = array_filter([
    'Started'       => fmt_time($chat['started_at']),
    'Last message'  => fmt_time($chat['last_message_at']),
    'First page'    => $chat['page_first'],
    'Last page'     => $chat['page_last'] !== $chat['page_first'] ? $chat['page_last'] : '',
    'Device'        => $chat['device'] === 'mobile' ? 'Phone' : 'Desktop',
    'Language'      => $chat['language'] === 'hi' ? 'Hindi' : 'English',
    'Came from ad'  => $chat['from_ad'] === 'google' ? 'Google Ads' : ($chat['from_ad'] === 'meta' ? 'Meta Ads' : ''),
    'UTM source'    => $chat['utm_source'],
    'UTM medium'    => $chat['utm_medium'],
    'UTM campaign'  => $chat['utm_campaign'],
    'Referrer'      => $chat['referrer_url'],
    'AI cost'       => '$' . number_format(ai_cost($usage), 4) . ' (approx.)',
]);

layout_start('Conversation', $user);
?>
<p class="back"><a href="conversations.php">← All conversations</a></p>

<div class="grid">
  <section class="card">
    <h1 class="h-chat"><?= h(mb_strimwidth($chat['first_question'] ?: 'Opened the chat — no message yet', 0, 120, '…')) ?></h1>
    <p class="muted"><?= (int)$chat['visitor_messages'] ?> visitor message<?= $chat['visitor_messages'] == 1 ? '' : 's' ?> · <?= h(time_ago($chat['last_message_at'])) ?></p>
    <div class="chat chat-full" data-live-chat data-session="<?= (int)$id ?>" data-last="<?= (int)($msgs ? end($msgs)['id'] : 0) ?>">
      <?php foreach ($msgs as $m): ?>
        <?php if (in_array($m['role'], ['system', 'note'], true)): ?>
          <p class="chat-event"><?= h($m['content']) ?> <small><?= h(date('h:i A', strtotime($m['created_at']))) ?></small></p>
        <?php else: ?>
        <div class="bubble <?= ['user' => 'from-visitor', 'agent' => 'from-agent'][$m['role']] ?? 'from-ai' ?><?= $m['error'] ? ' is-error' : '' ?>">
          <small><?= h(['user' => 'Visitor', 'agent' => ($m['agent_name'] ?: 'Team') . ' (team)'][$m['role']] ?? 'AI assistant') ?> · <?= h(date('h:i A', strtotime($m['created_at']))) ?><?php if ($m['latency_ms']): ?> · <?= number_format($m['latency_ms'] / 1000, 1) ?> s<?php endif; ?></small>
          <?php if ($m['error']): ?>
            <p><b>No answer was given</b> (<?= h(str_replace('_', ' ', $m['error'])) ?>). The visitor was asked to try again or talk to a person.</p>
          <?php else: ?>
            <p><?= chat_html($m['content']) ?></p>
          <?php endif; ?>
          <?php if ($m['showed_form']): ?><span class="tag tag-lead">Showed callback form</span><?php endif; ?>
        </div>
        <?php endif; ?>
      <?php endforeach; ?>
    </div>

    <?php /* Live takeover — admin.js keeps this in sync every few seconds */ ?>
    <div class="live-bar" data-live-bar data-me="<?= h(explode(' ', $user['name'])[0]) ?>">
      <p class="live-state" data-live-state>
        <?php if ($chat['mode'] === 'human'): ?><?= (int)$chat['agent_id'] === (int)$user['id'] ? 'You are replying to this visitor.' : h(live_agent_name((int)$chat['agent_id'])) . ' is replying to this visitor.' ?>
        <?php elseif ($chat['wants_human']): ?><b>The visitor asked to talk to a person.</b> Take over to reply.
        <?php else: ?>The AI is answering. Take over to reply yourself.<?php endif; ?>
      </p>
      <span class="live-dot" data-live-visitor hidden>● Visitor online</span>
      <button type="button" class="btn btn-sm" data-live-action="takeover"<?= $chat['mode'] === 'human' && (int)$chat['agent_id'] === (int)$user['id'] ? ' hidden' : '' ?>><?= $chat['mode'] === 'human' ? 'Take over from them' : 'Take over chat' ?></button>
      <button type="button" class="btn btn-sm btn-ghost" data-live-action="handback"<?= $chat['mode'] === 'human' ? '' : ' hidden' ?>>Hand back to AI</button>
    </div>
    <form class="live-reply" data-live-reply<?= $chat['mode'] === 'human' && (int)$chat['agent_id'] === (int)$user['id'] ? '' : ' hidden' ?>>
      <textarea name="text" rows="2" maxlength="2000" placeholder="Reply as <?= h(explode(' ', $user['name'])[0]) ?>… (Enter to send, Shift+Enter for a new line)" aria-label="Your reply"></textarea>
      <button class="btn btn-sm">Send</button>
    </form>
  </section>

  <aside>
    <section class="card">
      <h2>Outcome</h2>
      <?php if ($chat['lead_id']): ?>
        <p><b><?= h($chat['lead_name']) ?></b> · +91 <?= h($chat['lead_phone']) ?> · <?= status_pill($chat['lead_status']) ?></p>
        <p class="actions">
          <a class="btn btn-sm" href="lead.php?id=<?= (int)$chat['lead_id'] ?>">Open lead</a>
          <a class="btn btn-sm btn-ghost" href="<?= h(tel_link($chat['lead_phone'])) ?>">Call</a>
        </p>
      <?php elseif ($chat['form_shown']): ?>
        <p>The callback form was shown, but the visitor left without sharing details.</p>
      <?php else: ?>
        <p class="muted">No lead — the visitor only asked questions.</p>
      <?php endif; ?>
    </section>

    <section class="card">
      <h2>Review the AI's answers</h2>
      <p class="muted">Flag a wrong or unhelpful answer so the assistant can be improved.</p>
      <form method="post" class="update">
        <?= csrf_field() ?>
        <label class="full">Status
          <select name="review">
            <option value="none" <?= $chat['review'] === 'none' ? 'selected' : '' ?>>Not reviewed</option>
            <option value="flagged" <?= $chat['review'] === 'flagged' ? 'selected' : '' ?>>Flagged — answer needs fixing</option>
            <option value="reviewed" <?= $chat['review'] === 'reviewed' ? 'selected' : '' ?>>Reviewed — all good</option>
          </select>
        </label>
        <label class="full">Note
          <textarea name="review_note" rows="3" maxlength="1000" placeholder="What was wrong, and what should it have said?"><?= h($chat['review_note']) ?></textarea>
        </label>
        <button class="btn btn-sm">Save</button>
      </form>
    </section>

    <section class="card">
      <h2>Details</h2>
      <dl class="meta">
        <?php foreach ($details as $k => $v): ?><dt><?= h($k) ?></dt><dd><?= h($v) ?></dd><?php endforeach; ?>
      </dl>
    </section>

    <?php if ($user['role'] === 'owner'): ?>
    <form method="post" class="danger">
      <?= csrf_field() ?>
      <input type="hidden" name="action" value="delete">
      <label class="confirm"><input type="checkbox" required> Yes, delete it permanently</label>
      <button class="link-danger">Delete this conversation</button>
      <small>For privacy requests. The lead (if any) is kept.</small>
    </form>
    <?php endif; ?>
  </aside>
</div>
<?php layout_end();
