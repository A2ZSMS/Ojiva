<?php
/** Ojiva AI admin — chats happening now; jump in on any of them. Refreshes itself (admin.js). */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();

$rows = $db->query("SELECT s.id, s.first_question, s.page_last, s.device, s.language, s.from_ad, s.form_shown, s.lead_id,
      s.mode, s.wants_human, s.last_message_at, s.visitor_seen_at, s.visitor_messages, u.name AS agent,
      (SELECT content FROM ai_chat_messages m WHERE m.session_id = s.id AND m.role IN ('user','assistant','agent') ORDER BY m.id DESC LIMIT 1) AS last_text,
      (SELECT role FROM ai_chat_messages m WHERE m.session_id = s.id AND m.role IN ('user','assistant','agent') ORDER BY m.id DESC LIMIT 1) AS last_role
    FROM ai_chat_sessions s LEFT JOIN admin_users u ON u.id = s.agent_id
    WHERE s.mode = 'human' OR s.last_message_at > NOW() - INTERVAL 30 MINUTE OR s.visitor_seen_at > NOW() - INTERVAL 1 MINUTE
    ORDER BY (s.wants_human = 1 AND s.mode = 'ai') DESC, s.mode = 'human' DESC, s.last_message_at DESC
    LIMIT 50")->fetchAll();

$online = $db->query('SELECT name FROM admin_users WHERE is_active = 1 AND last_seen_at > NOW() - INTERVAL ' . LIVE_ONLINE_WINDOW . ' SECOND ORDER BY name')->fetchAll(PDO::FETCH_COLUMN);

function live_rows(array $rows): void {
    if (!$rows) { echo '<p class="card empty">No one is chatting right now. This page updates by itself.</p>'; return; }
    echo '<div class="card table-wrap"><table class="leads live-table"><thead><tr><th>Status</th><th>Chat</th><th>Last message</th><th>Visitor</th><th></th></tr></thead><tbody>';
    foreach ($rows as $c) {
        $here = $c['visitor_seen_at'] && strtotime($c['visitor_seen_at']) > time() - 20;
        $waiting = $c['wants_human'] && $c['mode'] === 'ai';
        $who = ['user' => 'Visitor', 'assistant' => 'AI', 'agent' => 'Team'][$c['last_role']] ?? '';
        echo '<tr class="' . ($waiting ? 'is-waiting' : '') . '"><td class="nowrap">';
        if ($waiting) echo '<span class="tag tag-flag">Wants a person</span>';
        elseif ($c['mode'] === 'human') echo '<span class="tag tag-lead">' . h(explode(' ', (string)$c['agent'])[0]) . ' is replying</span>';
        else echo '<span class="tag">AI answering</span>';
        echo $here ? '<small class="online">● Visitor online</small>' : '<small>' . h(time_ago($c['last_message_at'])) . '</small>';
        echo '</td><td class="need"><a href="conversation.php?id=' . (int)$c['id'] . '">' . h(mb_strimwidth($c['first_question'] ?: '(no message yet)', 0, 100, '…')) . '</a>';
        echo '<small>' . h($c['page_last']) . ' · ' . (int)$c['visitor_messages'] . ' msg</small></td>';
        echo '<td class="need">' . ($who ? '<b>' . $who . ':</b> ' : '') . h(mb_strimwidth(str_replace('**', '', (string)$c['last_text']), 0, 120, '…')) . '</td><td class="nowrap">';
        echo '<span class="tag">' . ($c['device'] === 'mobile' ? 'Phone' : 'Desktop') . '</span>';
        if ($c['language'] === 'hi') echo ' <span class="tag">हिंदी</span>';
        if ($c['from_ad']) echo ' <span class="tag tag-ad">' . ($c['from_ad'] === 'google' ? 'Google ad' : 'Meta ad') . '</span>';
        if ($c['lead_id']) echo ' <span class="tag tag-lead">Lead</span>';
        elseif ($c['form_shown']) echo ' <span class="tag tag-warn">Saw form</span>';
        echo '</td><td><a class="btn btn-sm' . ($waiting ? '' : ' btn-ghost') . '" href="conversation.php?id=' . (int)$c['id'] . '">' . ($waiting ? 'Join chat' : 'Open') . '</a></td></tr>';
    }
    echo '</tbody></table></div>';
}

// admin.js asks for just the table every few seconds
if (isset($_GET['fragment'])) { live_rows($rows); exit; }

layout_start('Live', $user);
?>
<div class="page-head">
  <h1>Live now</h1>
  <p class="muted">Chats from the last 30 minutes. Open one to read along, take it over and reply as yourself, then hand it back to the AI.
    Online in the panel: <b><?= h(implode(', ', $online) ?: '—') ?></b></p>
</div>
<div data-live-list data-src="live.php?fragment=1"><?php live_rows($rows); ?></div>
<?php layout_end();
