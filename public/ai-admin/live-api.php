<?php
/**
 * Ojiva AI admin — live chat actions, called by admin.js.
 *
 *   GET  live-api.php?count=1                → {waiting, live}   (menu badge, every page)
 *   GET  live-api.php?session=ID&after=N     → new messages + who has the chat
 *   POST live-api.php {action: takeover|handback|send, session, text}
 *
 * While the agent's conversation page is open it polls here, which also
 * keeps the chat theirs; if they close it, the AI takes over again after
 * LIVE_HANDBACK_AFTER seconds.
 */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

header('Content-Type: application/json; charset=utf-8');
function json_out(array $data, int $code = 200): never { http_response_code($code); exit(json_encode($data, JSON_UNESCAPED_UNICODE)); }

$user = require_admin();

// Signed-in admins get the real reason if something fails (shown by admin.js)
set_exception_handler(function (Throwable $e) {
    error_log('[live-api] ' . $e->getMessage());
    json_out(['error' => 'Server error: ' . $e->getMessage()], 500);
});

$db = ojiva_db();

/* ── Menu badge: visitors waiting for a person, chats happening now ── */
if (isset($_GET['count'])) {
    $r = $db->query("SELECT SUM(wants_human = 1 AND mode = 'ai') AS waiting,
        SUM(last_message_at > NOW() - INTERVAL 10 MINUTE OR visitor_seen_at > NOW() - INTERVAL 1 MINUTE) AS live
      FROM ai_chat_sessions WHERE last_message_at > NOW() - INTERVAL 1 DAY")->fetch();
    json_out(['waiting' => (int)$r['waiting'], 'live' => (int)$r['live']]);
}

$id = (int)($_GET['session'] ?? $_POST['session'] ?? 0);
$q = $db->prepare('SELECT * FROM ai_chat_sessions WHERE id = ?');
$q->execute([$id]);
$s = $q->fetch();
if (!$s) json_out(['error' => 'not_found'], 404);
$s = live_handback_if_stale($s);
$mine = $s['mode'] === 'human' && (int)$s['agent_id'] === (int)$user['id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $action = $_POST['action'] ?? '';
    if ($action === 'takeover') {
        live_set_mode($id, 'human', (int)$user['id'], sprintf(LIVE_TEXT['joined'], live_agent_name((int)$user['id'])));
    } elseif ($action === 'handback' && $s['mode'] === 'human') {
        live_set_mode($id, 'ai', null, LIVE_TEXT['back']);
    } elseif ($action === 'send') {
        $text = trim(mb_substr((string)($_POST['text'] ?? ''), 0, 2000));
        if ($text === '') json_out(['error' => 'empty'], 422);
        if (!$mine) json_out(['error' => 'not_yours'], 409);   // take over first
        live_add($id, 'agent', $text, (int)$user['id']);
    } else {
        json_out(['error' => 'bad_action'], 400);
    }
    $q->execute([$id]);
    $s = $q->fetch();
    $mine = $s['mode'] === 'human' && (int)$s['agent_id'] === (int)$user['id'];
}

// The agent's open page is their heartbeat
if ($mine) $db->prepare('UPDATE ai_chat_sessions SET agent_seen_at = NOW() WHERE id = ?')->execute([$id]);

$after = max(0, (int)($_GET['after'] ?? $_POST['after'] ?? 0));
$m = $db->prepare('SELECT m.id, m.role, m.content, m.created_at, m.error, m.latency_ms, m.showed_form, u.name
    FROM ai_chat_messages m LEFT JOIN admin_users u ON u.id = m.agent_id WHERE m.session_id = ? AND m.id > ? ORDER BY m.id LIMIT 100');
$m->execute([$id, $after]);

$visitorOnline = $s['visitor_seen_at'] && strtotime($s['visitor_seen_at']) > time() - 20;
json_out([
    'mode'          => $s['mode'],
    'agent'         => $s['agent_id'] ? live_agent_name((int)$s['agent_id']) : '',
    'mine'          => $mine,
    'wantsHuman'    => (bool)$s['wants_human'],
    'visitorOnline' => $visitorOnline,
    'messages'      => array_map(fn($r) => [
        'id'      => (int)$r['id'],
        'role'    => $r['role'],
        'content' => $r['error'] ? 'No answer was given (' . str_replace('_', ' ', $r['error']) . ').' : $r['content'],
        'name'    => $r['name'] ? explode(' ', trim($r['name']))[0] : '',
        'time'    => date('h:i A', strtotime($r['created_at'])),
        'secs'    => $r['latency_ms'] ? number_format($r['latency_ms'] / 1000, 1) : '',
        'form'    => (bool)$r['showed_form'],
        'error'   => (bool)$r['error'],
    ], $m->fetchAll()),
]);
