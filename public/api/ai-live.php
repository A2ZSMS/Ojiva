<?php
/**
 * Ojiva AI — live chat updates for the visitor's chat window.
 *
 * The chat window polls this every few seconds while open (and while a team
 * member is handling the chat) to receive team replies and status changes.
 *
 * Request:  POST {"sessionId":"<32 hex>","after":123,"page":"/sms/","action":"poll"|"request_human"}
 * Response: {"ok":true,"mode":"ai"|"human","agent":"Priya","agentsOnline":1,
 *            "messages":[{"id":124,"role":"agent"|"system","content":"…","name":"Priya"}]}
 */
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function out($code, $data) { http_response_code($code); exit(json_encode($data, JSON_UNESCAPED_UNICODE)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'post_only']);

$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if (!$origin || !in_array(parse_url($origin, PHP_URL_HOST), ['www.ojiva.ai', 'ojiva.ai', 'localhost', '127.0.0.1'], true)) {
    out(403, ['ok' => false, 'error' => 'bad_origin']);
}

$in = json_decode(file_get_contents('php://input'), true);
$key = is_array($in) && preg_match('/^[a-f0-9]{32}$/', (string)($in['sessionId'] ?? '')) ? $in['sessionId'] : '';
if (!$key) out(400, ['ok' => false, 'error' => 'bad_session']);
$after  = max(0, (int)($in['after'] ?? 0));
$action = ($in['action'] ?? 'poll') === 'request_human' ? 'request_human' : 'poll';
$page   = is_string($in['page'] ?? null) ? $in['page'] : '';

$private = require dirname(__DIR__) . '/private-dir.php';
require_once "$private/lib/live.php";

try {
    $db = ojiva_db();
    $s = live_session($key);
    if (!$s && $action === 'poll') out(200, ['ok' => true, 'mode' => 'ai', 'agent' => '', 'messages' => []]);
    if (!$s) $s = live_session_create($key, $page);

    $s = live_handback_if_stale($s);
    $db->prepare('UPDATE ai_chat_sessions SET visitor_seen_at = NOW() WHERE id = ?')->execute([$s['id']]);

    $online = null;
    if ($action === 'request_human') {
        $online = live_agents_online();
        if (!$s['wants_human'] && $s['mode'] === 'ai') {
            $db->prepare('UPDATE ai_chat_sessions SET wants_human = 1, last_message_at = NOW() WHERE id = ?')->execute([$s['id']]);
            live_add((int)$s['id'], 'note', LIVE_TEXT['asked']);
        }
    }

    // Only what the visitor should see: team replies and status lines
    $q = $db->prepare("SELECT m.id, m.role, m.content, u.name FROM ai_chat_messages m LEFT JOIN admin_users u ON u.id = m.agent_id
        WHERE m.session_id = ? AND m.id > ? AND m.role IN ('agent','system') ORDER BY m.id LIMIT 50");
    $q->execute([$s['id'], $after]);
    $messages = array_map(fn($m) => [
        'id' => (int)$m['id'], 'role' => $m['role'], 'content' => $m['content'],
        'name' => $m['name'] ? explode(' ', trim($m['name']))[0] : '',
    ], $q->fetchAll());

    out(200, array_filter([
        'ok' => true,
        'mode' => $s['mode'],
        'agent' => $s['mode'] === 'human' ? live_agent_name((int)$s['agent_id']) : '',
        'agentsOnline' => $online,
        'messages' => $messages,
    ], fn($v) => $v !== null));
} catch (Throwable $e) {
    error_log('[ai-live] ' . $e->getMessage());
    out(500, ['ok' => false, 'error' => 'unavailable']);
}
