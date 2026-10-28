<?php
/**
 * Ojiva AI — stores each AI chat turn (visitor question + AI answer) for the
 * admin panel's Conversations pages. Called by public/api/ai-chat.php.
 *
 * Never throws: the visitor's answer matters more than the log.
 */
require_once __DIR__ . '/db.php';

/**
 * @param array{
 *   session_key: string, page: string, attribution: array, question: string,
 *   answer: string, showed_form: bool, error: string, latency_ms: ?int,
 *   usage: ?object
 * } $t
 */
function ojiva_log_chat_turn(array $t): void {
    try {
        $db = ojiva_db();
        $clip = fn($v, $n) => mb_substr(trim((string)$v), 0, $n);
        $a = $t['attribution'];
        $ua = (string)($_SERVER['HTTP_USER_AGENT'] ?? '');
        $from = !empty($a['gclid']) ? 'google' : (!empty($a['fbclid']) ? 'meta' : '');
        $hindi = preg_match('/\p{Devanagari}/u', $t['question']) ? 'hi' : 'en';

        // One row per conversation; the first turn fills in where the visitor came from.
        $db->prepare("INSERT INTO ai_chat_sessions
              (session_key, first_question, page_first, page_last, utm_source, utm_medium, utm_campaign, from_ad,
               referrer_url, device, language, ip_hash, user_agent, visitor_messages, form_shown)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
            ON DUPLICATE KEY UPDATE
              last_message_at = NOW(),
              first_question = IF(first_question = '', VALUES(first_question), first_question),
              page_last = VALUES(page_last),
              visitor_messages = visitor_messages + 1,
              language = IF(language = 'hi', 'hi', VALUES(language)),
              form_shown = form_shown OR VALUES(form_shown)")
           ->execute([
               $t['session_key'], $clip($t['question'], 500), $clip($t['page'], 255), $clip($t['page'], 255),
               $clip($a['utm_source'] ?? '', 120), $clip($a['utm_medium'] ?? '', 120), $clip($a['utm_campaign'] ?? '', 160), $from,
               $clip($a['_first_referrer'] ?? '', 500), preg_match('/Mobi|Android|iPhone/i', $ua) ? 'mobile' : 'desktop', $hindi,
               ojiva_ip_hash(), $clip($ua, 255), $t['showed_form'] ? 1 : 0,
           ]);
        $q = $db->prepare('SELECT id FROM ai_chat_sessions WHERE session_key = ?');
        $q->execute([$t['session_key']]);
        $sid = (int)$q->fetchColumn();

        $msg = $db->prepare('INSERT INTO ai_chat_messages
              (session_id, role, content, showed_form, error, latency_ms, input_tokens, output_tokens, cache_read_tokens, cache_write_tokens)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
        $msg->execute([$sid, 'user', $t['question'], 0, '', null, null, null, null, null]);
        $u = $t['usage'];
        $msg->execute([
            $sid, 'assistant', $t['answer'], $t['showed_form'] ? 1 : 0, $t['error'], $t['latency_ms'],
            $u->inputTokens ?? null, $u->outputTokens ?? null, $u->cacheReadInputTokens ?? null, $u->cacheCreationInputTokens ?? null,
        ]);
    } catch (Throwable $e) {
        error_log('[ai-chat log] ' . $e->getMessage());
    }
}
