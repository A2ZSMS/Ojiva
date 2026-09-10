<?php
/**
 * Ojiva AI — welcome SMS for new leads.
 * The API key lives here, on the server, never in the JS bundle. The gateway
 * also sends no CORS headers, so the browser cannot call it directly.
 * Test without sending:  POST /api/send-sms.php?dry=1  {"name":"X","phone":"7550317926"}
 */
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Cache-Control: no-store');

const URL = 'https://nexus.ojiva.ai/sms/api/send-campaign';
const KEY = 'PmmVgxVrl6KX5FKXg_3EbjuHH6nt-vh-qRv54KSM6DE';
const MSG = "Hi Hi {#alp#}, \n\nThank you for your enquiry with Ojiva AI.\n\nWe provide Bulk SMS, WhatsApp API, RCS, Voice Calls & AI Chatbot solutions. Our team will contact you within 30 minutes to understand your requirements and assist you.";

function out($code, $data) { http_response_code($code); exit(json_encode($data)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'post_only']);

// Only our own pages may call this.
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if ($origin && !in_array(parse_url($origin, PHP_URL_HOST), ['www.ojiva.ai', 'ojiva.ai', 'localhost', '127.0.0.1'], true)) {
    out(403, ['ok' => false, 'error' => 'bad_origin']);
}

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) out(400, ['ok' => false, 'error' => 'bad_json']);

// Name → safe text for the DLT variable.
$name = preg_replace('/[^\p{L}\p{N} .\'-]/u', '', trim((string)($in['name'] ?? '')));
$name = trim(preg_replace('/\s+/', ' ', $name));
if ($name === '') $name = 'there';
$name = mb_substr($name, 0, 40);

// Phone → 91XXXXXXXXXX.
$p = preg_replace('/\D/', '', (string)($in['phone'] ?? ''));
$p = preg_replace('/^(0091|091|91|0)(?=[6-9]\d{9}$)/', '', $p);
if (!preg_match('/^[6-9]\d{9}$/', $p)) out(422, ['ok' => false, 'error' => 'bad_mobile']);

$body = [
    'sender_id'   => 'OJIVA',
    'template_id' => '1777178894777400694',
    'priority'    => 0,
    'dcs'         => 0,
    'messages'    => [[
        'mobile'         => '91' . $p,
        'message'        => str_replace('{#alp#}', $name, MSG),
        'transaction_id' => 'TXN-' . time() . '-' . bin2hex(random_bytes(3)),
    ]],
];

if (($_GET['dry'] ?? '') === '1') out(200, ['ok' => true, 'dry_run' => true, 'mobile' => '91' . $p, 'payload' => $body]);

// Cap abuse: this endpoint is public. 10 per IP per hour, 300 per day.
$f = @fopen(sys_get_temp_dir() . '/ojiva_sms.json', 'c+');
if ($f && flock($f, LOCK_EX)) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '?';
    $t  = time();
    $log = array_filter((array)json_decode(stream_get_contents($f), true), fn($e) => $t - $e[1] < 86400);
    if (count($log) >= 300 || count(array_filter($log, fn($e) => $e[0] === $ip && $t - $e[1] < 3600)) >= 10) {
        out(429, ['ok' => false, 'error' => 'rate_limited']);
    }
    $log[] = [$ip, $t];
    ftruncate($f, 0); rewind($f); fwrite($f, json_encode(array_values($log)));
    flock($f, LOCK_UN); fclose($f);
}

$ch = curl_init(URL);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($body),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json', 'X-API-Key: ' . KEY],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 20,
]);
$res  = curl_exec($ch);
$code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($res === false) out(502, ['ok' => false, 'error' => 'gateway_unreachable']);
out($code >= 200 && $code < 300 ? 200 : 502, [
    'ok'      => $code >= 200 && $code < 300,
    'status'  => $code,
    'mobile'  => '91' . $p,
    'gateway' => json_decode($res, true) ?? substr($res, 0, 300),
]);
