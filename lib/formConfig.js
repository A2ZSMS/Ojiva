/**
 * Central config for all lead/contact forms across Ojiva AI.
 * Update here — changes apply everywhere automatically.
 */

/* ── Web3Forms ──────────────────────────────────────────────── */
export const WEB3_ACCESS_KEY = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';

/* ── Make.com webhooks ──────────────────────────────────────── */

/**
 * Service pages, Contact Us, Book Demo, Support
 * → WhatsApp, SMS, RCS, OTP, Voice, Chatbot service pages
 * → /contact, /book-demo, /support
 */
export const MAKE_HOOK_SERVICE = 'https://hook.eu1.make.com/k7g2w86wl5lgio3rb478xlnu42r74t4s';

/**
 * Ad landing pages only
 * → /whatsapp-api-service, /bulk-sms, /rcs-messaging
 */
export const MAKE_HOOK_LANDING = 'https://hook.eu1.make.com/oaum1wrp22fic8clfnz1y3aejoxo954e';

/* ── Thank-you URLs ─────────────────────────────────────────── */
export const THANK_YOU_LANDING = '/whatsapp-api-service/thank-you';
export const THANK_YOU_SERVICE = '/thank-you';

/* ── Lead welcome SMS ───────────────────────────────────────── */

/**
 * Same-origin PHP proxy at public/api/send-sms.php.
 *
 * It is NOT a direct call to nexus.ojiva.ai on purpose: that host sends no
 * CORS headers (a browser fetch to it fails before leaving the page), and its
 * API key must never ship inside the JS bundle. The proxy holds the key.
 *
 * PHP does not run under `next dev`. To test locally:
 *     npm run build && php -S 127.0.0.1:8080 -t out
 */
export const SMS_ENDPOINT = '/api/send-sms.php';

/**
 * ⚠️ TESTING SWITCH — set back to `false` to restore the full lead pipeline.
 *
 * While true, every form fires ONLY the welcome SMS. TeleCRM, the OpenAI Ads
 * pixel, Web3Forms and Make.com are all skipped, so test submissions create no
 * CRM leads, no emails and no ad conversions.
 *
 * Enabled 2026-09-10 for SMS testing.
 */
export const TEST_MODE_SMS_ONLY = false;
