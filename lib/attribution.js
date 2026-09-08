/**
 * lib/attribution.js
 *
 * Attribution capture — reads UTM parameters + ad click IDs from the URL
 * on landing, stores them in sessionStorage so they survive navigation,
 * and hands them back to the form handlers on submit.
 *
 * Also holds the tiny wrapper that fires the OpenAI Ads pixel
 * `lead_created` event once a real lead is created.
 */

const KEY = 'ojiva.attribution.v1';

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  // Ad click IDs — helpful when a partner strips UTMs but keeps click IDs
  'gclid',    // Google Ads
  'fbclid',   // Meta
  'msclkid',  // Microsoft Ads
  'oaiqid',   // OpenAI Ads (best-guess param name; safe to keep either way)
];

function readStore() {
  try {
    if (typeof window === 'undefined') return {};
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function writeStore(obj) {
  try {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(KEY, JSON.stringify(obj));
  } catch {}
}

/**
 * Call once on page load — captures UTMs / click IDs from the URL and
 * writes them into sessionStorage. First-touch wins: if a value is
 * already stored we don't overwrite (so a later same-session pageview
 * without UTMs doesn't blow the attribution away).
 */
export function captureAttributionFromUrl() {
  if (typeof window === 'undefined') return;
  try {
    const params  = new URLSearchParams(window.location.search);
    const stored  = readStore();
    let changed   = false;
    UTM_PARAMS.forEach((k) => {
      const v = params.get(k);
      if (v && !stored[k]) {
        stored[k] = v.slice(0, 250); // sanity cap
        changed = true;
      }
    });
    if (changed) {
      stored._first_landing_url = stored._first_landing_url || window.location.href.slice(0, 500);
      stored._first_referrer    = stored._first_referrer    || (document.referrer || '').slice(0, 500);
      stored._first_captured_at = stored._first_captured_at || new Date().toISOString();
      writeStore(stored);
    }
  } catch {}
}

/** Read the stored attribution — safe to call anywhere. */
export function getAttribution() {
  return readStore();
}

/**
 * Fire the OpenAI Ads pixel `lead_created` conversion event.
 * Safe to call — no-ops if the pixel SDK isn't loaded yet.
 */
export function fireOpenAiLeadCreated({ eventId } = {}) {
  try {
    if (typeof window === 'undefined' || typeof window.oaiq !== 'function') return;
    window.oaiq(
      'measure',
      'lead_created',
      { type: 'customer_action' },
      { event_id: eventId || `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}` },
    );
  } catch (e) {
    // Non-fatal — never let a tracking error break the form submission
    console.warn('[OpenAI Ads] measure error:', e);
  }
}
