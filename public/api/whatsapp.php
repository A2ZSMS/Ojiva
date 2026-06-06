<?php
/**
 * Ojiva AI — WhatsApp Proxy
 * ─────────────────────────────────────────────────────────────────────
 * Acts as a server-side proxy for the Omnly WhatsApp API.
 * The authkey and wid never reach the browser — they live here only.
 *
 * Called by: LandingLeadForm, ContactForm, DemoForm (after success)
 * Payload expected: { "name": "...", "phone": "9xxxxxxxxx" }
 * ─────────────────────────────────────────────────────────────────────
 */

/* ── CORS — allow only your domain ─────────────────────────────── */
$allowed_origins = ['https://www.ojiva.ai', 'https://ojiva.ai'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

/* Handle preflight */
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

/* ── Secrets — never exposed to browser ────────────────────────── */
$authkey       = 'd97b19e0a49d493f';
$wid           = '31904';
$template_name = 'ojiva_enquiry_confirmation'; // update if template name changes

/* ── Read request body ──────────────────────────────────────────── */
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name  = isset($input['name'])  ? trim(htmlspecialchars($input['name'])) : 'Customer';
$phone = isset($input['phone']) ? preg_replace('/\D/', '', $input['phone']) : '';

/* ── Clean phone number to 10 digits ───────────────────────────── */
// Remove leading 91 (country code) or 0
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

/* ── Build Omnly payload ────────────────────────────────────────── */
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

/* ── Call Omnly API ─────────────────────────────────────────────── */
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
    echo json_encode(['success' => false, 'error' => 'cURL error: ' . $error]);
    exit;
}

/* ── Return Omnly response ──────────────────────────────────────── */
http_response_code($http_code);
echo $response;
