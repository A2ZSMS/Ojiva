<?php
/**
 * Ojiva AI — saves a lead from the AI chat into MySQL (ai_chat_leads),
 * with the whole conversation, so the team can follow up from /ai-admin/.
 *
 * Request:  POST {"name","phone","interest","messages":[{role,content}],"page","sessionId","attribution":{...}}
 * The lead is linked both ways with its conversation in ai_chat_sessions.
 * Response: {"ok":true,"id":123}
 *
 * The same phone within 30 minutes updates the earlier lead instead of
 * creating a duplicate.
 */
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function out($code, $data) { http_response_code($code); exit(json_encode($data)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'post_only']);

$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if (!$origin || !in_array(parse_url($origin, PHP_URL_HOST), ['www.ojiva.ai', 'ojiva.ai', 'localhost', '127.0.0.1'], true)) {
    out(403, ['ok' => false, 'error' => 'bad_origin']);
}

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) out(400, ['ok' => false, 'error' => 'bad_json']);

$clean = fn($v, $max) => mb_substr(trim(preg_replace('/\s+/u', ' ', (string)$v)), 0, $max);

$name = $clean(preg_replace('/[^\p{L}\p{M} .\'-]/u', '', (string)($in['name'] ?? '')), 80);
if (mb_strlen($name) < 2) out(422, ['ok' => false, 'error' => 'bad_name']);

$phone = preg_replace('/\D/', '', (string)($in['phone'] ?? ''));
$phone = preg_replace('/^(0091|091|91|0)(?=[6-9]\d{9}$)/', '', $phone);
if (!preg_match('/^[6-9]\d{9}$/', $phone)) out(422, ['ok' => false, 'error' => 'bad_mobile']);

$transcript = [];
foreach (array_slice((array)($in['messages'] ?? []), -40) as $m) {
    if (!is_array($m) || !in_array($m['role'] ?? '', ['user', 'assistant'], true)) continue;
    $transcript[] = ['role' => $m['role'], 'content' => mb_substr((string)($m['content'] ?? ''), 0, 3000)];
}
$a = is_array($in['attribution'] ?? null) ? $in['attribution'] : [];
$sessionKey = preg_match('/^[a-f0-9]{32}$/', (string)($in['sessionId'] ?? '')) ? $in['sessionId'] : '';

$private = require dirname(__DIR__) . '/private-dir.php';
require_once "$private/lib/db.php";

try {
    $db = ojiva_db();
    $ip = ojiva_ip_hash();

    // At most 5 leads per visitor per hour
    $n = $db->prepare('SELECT COUNT(*) FROM ai_chat_leads WHERE ip_hash = ? AND created_at > NOW() - INTERVAL 1 HOUR');
    $n->execute([$ip]);
    if ($n->fetchColumn() >= 5) out(429, ['ok' => false, 'error' => 'rate_limited']);

    $fields = [
        'name'         => $name,
        'phone'        => $phone,
        'interest'     => $clean($in['interest'] ?? '', 400),
        'transcript'   => json_encode($transcript, JSON_UNESCAPED_UNICODE),
        'page'         => $clean($in['page'] ?? '', 255),
        'utm_source'   => $clean($a['utm_source'] ?? '', 120),
        'utm_medium'   => $clean($a['utm_medium'] ?? '', 120),
        'utm_campaign' => $clean($a['utm_campaign'] ?? '', 160),
        'utm_term'     => $clean($a['utm_term'] ?? '', 160),
        'utm_content'  => $clean($a['utm_content'] ?? '', 160),
        'gclid'        => $clean($a['gclid'] ?? '', 255),
        'fbclid'       => $clean($a['fbclid'] ?? '', 255),
        'landing_url'  => $clean($a['_first_landing_url'] ?? '', 500),
        'referrer_url' => $clean($a['_first_referrer'] ?? '', 500),
        'user_agent'   => $clean($_SERVER['HTTP_USER_AGENT'] ?? '', 255),
        'ip_hash'      => $ip,
    ];

    $session = null;
    if ($sessionKey) {
        $q = $db->prepare('SELECT id FROM ai_chat_sessions WHERE session_key = ?');
        $q->execute([$sessionKey]);
        $session = $q->fetchColumn() ?: null;
    }
    $link = function (int $leadId) use ($db, $session) {
        if (!$session) return;
        $db->prepare('UPDATE ai_chat_leads SET session_id = ? WHERE id = ?')->execute([$session, $leadId]);
        $db->prepare('UPDATE ai_chat_sessions SET lead_id = ? WHERE id = ?')->execute([$leadId, $session]);
    };

    $dup = $db->prepare('SELECT id FROM ai_chat_leads WHERE phone = ? AND created_at > NOW() - INTERVAL 30 MINUTE ORDER BY id DESC LIMIT 1');
    $dup->execute([$phone]);
    if ($id = $dup->fetchColumn()) {
        $db->prepare('UPDATE ai_chat_leads SET name = ?, interest = ?, transcript = ? WHERE id = ?')
           ->execute([$fields['name'], $fields['interest'], $fields['transcript'], $id]);
        $db->prepare("INSERT INTO ai_lead_events (lead_id, type, detail) VALUES (?, 'repeat', 'Submitted the chat form again')")->execute([$id]);
        $link((int)$id);
        out(200, ['ok' => true, 'id' => (int)$id]);
    }

    $cols = array_keys($fields);
    $db->prepare(sprintf('INSERT INTO ai_chat_leads (%s) VALUES (%s)', implode(',', $cols), implode(',', array_fill(0, count($cols), '?'))))
       ->execute(array_values($fields));
    $id = (int)$db->lastInsertId();
    $db->prepare("INSERT INTO ai_lead_events (lead_id, type, detail) VALUES (?, 'created', 'Lead from AI chat')")->execute([$id]);
    $link($id);
    out(200, ['ok' => true, 'id' => $id]);
} catch (Throwable $e) {
    error_log('[ai-lead] ' . $e->getMessage());
    out(500, ['ok' => false, 'error' => 'db_error']);
}
