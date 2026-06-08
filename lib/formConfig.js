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

/* ── Omnly WhatsApp API (via PHP proxy) ─────────────────────── */
/**
 * Proxy lives on YOUR server — authkey/wid never exposed in browser.
 * To update authkey/wid/template: edit /api/whatsapp.php on Hostinger.
 *
 * OMNLY_PROXY_SECRET — shared token validated server-side by PHP proxy.
 * Combined with origin + referer checks + rate limiting = very hard to abuse.
 * Must match the $proxy_secret value inside whatsapp.php.
 */
export const OMNLY_PROXY_URL    = process.env.NEXT_PUBLIC_OMNLY_PROXY_URL    || '/api/whatsapp.php';
export const OMNLY_PROXY_SECRET = process.env.NEXT_PUBLIC_OMNLY_PROXY_SECRET || 'oj-wp-4b7e1d9c2a5f8e3h';
