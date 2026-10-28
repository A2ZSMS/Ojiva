<?php
/** Ojiva AI admin — download the current filter as CSV (opens in Excel). */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
[$status, $view, $q, $where, $args] = leads_filter($user);

$rows = ojiva_db()->prepare("SELECT ai_chat_leads.id, ai_chat_leads.created_at, ai_chat_leads.name, phone, interest, status, follow_up_on, last_contacted_at, a.name AS owner,
    page, utm_source, utm_medium, utm_campaign, gclid, fbclid, landing_url, referrer_url
    FROM ai_chat_leads LEFT JOIN admin_users a ON a.id = ai_chat_leads.assigned_to $where ORDER BY ai_chat_leads.created_at DESC");
$rows->execute($args);

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="ojiva-ai-chat-leads-' . date('Y-m-d') . '.csv"');
$out = fopen('php://output', 'w');
fwrite($out, "\xEF\xBB\xBF");   // BOM so Excel reads Hindi names correctly
$first = true;
while ($r = $rows->fetch()) {
    if ($first) { fputcsv($out, array_keys($r)); $first = false; }
    $r['status'] = STATUSES[$r['status']] ?? $r['status'];
    // A cell starting with = + - @ would run as a formula in Excel
    fputcsv($out, array_map(fn($v) => is_string($v) && preg_match('/^[=+\-@\t\r]/', $v) ? "'" . $v : $v, $r));
}
if ($first) fputcsv($out, ['No leads']);
fclose($out);
