<?php
/**
 * Ojiva AI — WhatsApp Proxy  (v2 — hardened)
 * ─────────────────────────────────────────────────────────────────────
 * Three-layer security:
 *   1. Origin + Referer check  — blocks naive curl/Postman attacks
 *   2. Shared proxy token      — X-Proxy-Token header must match $proxy_secret
 *   3. Per-IP rate limiting    — max 10 requests per IP per hour
 *
 * authkey and wid NEVER leave this file (server-side only).
 * Called by: LandingLeadForm, ContactForm, DemoForm (after success)
 * Payload expected: { "name": "...", "phone": "9xxxxxxxxx" }
 * ─────────────────────────────────────────────────────────────────────
 */

/* ── Secrets — never exposed to browser ────────────────────────── */
$authkey       = 'd97b19e0a49d493f';
$wid           = '36624';
$template_name = 'ojiva_enquiry_confirmation'; // update if template changes
$proxy_secret  = 'oj-wp-4b7e1d9c2a5f8e3h';   // must match OMNLY_PROXY_SECRET in formConfig.js

/* ── Rate limiting config ───────────────────────────────────────── */
$rate_limit_max    = 10;    // max requests per IP per window
$rate_limit_window = 3600;  // window in seconds (1 hour)

/* ══════════════════════════════════════════════════════════════════
   CORS — always send these so the browser preflight passes
   ══════════════════════════════════════════════════════════════════ */
$allowed_origins = [
    'https://www.ojiva.ai',
    'https://ojiva.ai',
    'http://localhost:3000',
    'http://localhost:3001',
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    header('Access-Control-Allow-Origin: https://www.ojiva.ai');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Proxy-Token');
header('Content-Type: application/json');

/* Handle preflight OPTIONS */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/* Only allow POST */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

/* ══════════════════════════════════════════════════════════════════
   LAYER 1 — Origin + Referer check
   Blocks naive curl/Postman that don't set these headers.
   ══════════════════════════════════════════════════════════════════ */
$valid_hosts  = ['ojiva.ai', 'www.ojiva.ai', 'localhost'];
$origin_host  = parse_url($origin, PHP_URL_HOST);
$referer      = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$referer_host = parse_url($referer, PHP_URL_HOST);

$origin_ok  = $origin_host  && in_array($origin_host,  $valid_hosts);
$referer_ok = $referer_host && in_array($referer_host, $valid_hosts);

if (!$origin_ok && !$referer_ok) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Forbidden']);
    exit;
}

/* ══════════════════════════════════════════════════════════════════
   LAYER 2 — Shared secret token
   JS sends X-Proxy-Token header with OMNLY_PROXY_SECRET.
   Uses hash_equals() to prevent timing attacks.
   ══════════════════════════════════════════════════════════════════ */
$token_header = isset($_SERVER['HTTP_X_PROXY_TOKEN']) ? $_SERVER['HTTP_X_PROXY_TOKEN'] : '';
if (!hash_equals($proxy_secret, $token_header)) {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit;
}

/* ══════════════════════════════════════════════════════════════════
   LAYER 3 — Per-IP rate limiting (file-based, works on shared hosting)
   Max 10 requests per IP per hour to prevent WhatsApp credit abuse.
   ══════════════════════════════════════════════════════════════════ */
$ip       = isset($_SERVER['HTTP_X_FORWARDED_FOR'])
              ? trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0])
              : ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
$ip_clean = preg_replace('/[^0-9a-fA-F:.]/', '', $ip);
$rl_file  = sys_get_temp_dir() . '/ojiva_rl_' . md5($ip_clean) . '.json';

$now  = time();
$hits = [];

if (file_exists($rl_file)) {
    $hits = json_decode(file_get_contents($rl_file), true) ?: [];
}

// Remove timestamps outside the current window
$hits = array_values(array_filter($hits, function ($t) use ($now, $rate_limit_window) {
    return ($now - $t) < $rate_limit_window;
}));

if (count($hits) >= $rate_limit_max) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

// Record this request
$hits[] = $now;
file_put_contents($rl_file, json_encode($hits), LOCK_EX);

/* ══════════════════════════════════════════════════════════════════
   Read + validate request body
   ══════════════════════════════════════════════════════════════════ */
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name  = isset($input['name'])  ? trim(strip_tags($input['name'])) : 'Customer';
$phone = isset($input['phone']) ? preg_replace('/\D/', '', $input['phone']) : '';

// Limit name length to prevent injection
if (strlen($name) > 100) { $name = substr($name, 0, 100); }
if (!$name) { $name = 'Customer'; }

/* ── Clean phone number to 10 digits ───────────────────────────── */
// Remove leading country code (+91 / 91) or leading zero
if (strlen($phone) === 12 && substr($phone, 0, 2) === '91') {
    $phone = substr($phone, 2);
}
if (strlen($phone) === 11 && substr($phone, 0, 1) === '0') {
    $phone = substr($phone, 1);
}

if (strlen($phone) !== 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid phone number']);
    exit;
}

/* ══════════════════════════════════════════════════════════════════
   Build Omnly payload and call API
   ══════════════════════════════════════════════════════════════════ */
$payload = [
    'version'         => '1.0',
    'authkey'         => $authkey,
    'encrpt'          => '0',
    'wid'             => $wid,
    'country_code'    => '91',
    'type'            => 'media',
    'dynamic_content' => '1',
    'is_fallback'     => 0,
    'messages'        => [
        [
            'dest'         => [$phone],
            'param'        => ['1' => $name],
            'headerValues' => [
                'headerFileName' => '',
                'headerData'     => '',
            ],
        ],
    ],
];

$ch = curl_init('https://panel.omnly.in/restapi/bulkwp_json.php');
curl_setopt($ch, CURLOPT_POST,           true);
curl_setopt($ch, CURLOPT_POSTFIELDS,     json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER,     ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT,        10);
$response  = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error     = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(502);
    echo json_encode(['success' => false, 'error' => 'Gateway error']);
    exit;
}

/* ── Return Omnly response ──────────────────────────────────────── */
http_response_code($http_code);
echo $response;
