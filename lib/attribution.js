/**
 * lib/attribution.js
 *
 * Attribution capture with smart fallback:
 *   1. UTM params in the URL win.
 *   2. If UTMs are missing but an ad click-ID is present (gclid / fbclid /
 *      msclkid / oaiqid), infer utm_source + utm_medium from the click-ID.
 *   3. If neither is present, infer from document.referrer — Google, Bing,
 *      ChatGPT, Facebook, LinkedIn, YouTube etc. all get recognised.
 *   4. If there is no referrer either, tag it "direct / none".
 *
 * First-touch wins across the session: once we have a value, a later
 * same-session pageview without params does not overwrite it.
 *
 * Also holds `fireOpenAiLeadCreated()` — the thin wrapper that fires the
 * OpenAI Ads pixel `lead_created` conversion event on successful leads.
 */

const KEY = 'ojiva.attribution.v1';

const CAPTURED_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid',    // Google Ads
  'fbclid',   // Meta
  'msclkid',  // Microsoft/Bing Ads
  'oaiqid',   // OpenAI Ads (best-guess; safe either way)
];

/* ── Referrer → (source, medium) rules ─────────────────────
 * Longest / most specific hostname patterns first. */
const REFERRER_RULES = [
  { host: /(^|\.)chatgpt\.com$/i,                 source: 'chatgpt',   medium: 'referral' },
  { host: /(^|\.)openai\.com$/i,                  source: 'openai',    medium: 'referral' },
  { host: /(^|\.)perplexity\.ai$/i,               source: 'perplexity',medium: 'referral' },
  { host: /(^|\.)claude\.ai$/i,                   source: 'claude',    medium: 'referral' },
  { host: /(^|\.)gemini\.google\.com$/i,          source: 'gemini',    medium: 'referral' },
  { host: /(^|\.)copilot\.microsoft\.com$/i,      source: 'copilot',   medium: 'referral' },

  { host: /(^|\.)google\.[a-z.]+$/i,              source: 'google',    medium: 'organic'  },
  { host: /(^|\.)bing\.com$/i,                    source: 'bing',      medium: 'organic'  },
  { host: /(^|\.)duckduckgo\.com$/i,              source: 'duckduckgo',medium: 'organic'  },
  { host: /(^|\.)yahoo\.com$/i,                   source: 'yahoo',     medium: 'organic'  },

  { host: /(^|\.)facebook\.com$/i,                source: 'facebook',  medium: 'social'   },
  { host: /(^|\.)instagram\.com$/i,               source: 'instagram', medium: 'social'   },
  { host: /(^|\.)linkedin\.com$/i,                source: 'linkedin',  medium: 'social'   },
  { host: /(^|\.)twitter\.com$/i,                 source: 'twitter',   medium: 'social'   },
  { host: /(^|\.)x\.com$/i,                       source: 'x',         medium: 'social'   },
  { host: /(^|\.)youtube\.com$/i,                 source: 'youtube',   medium: 'social'   },
  { host: /(^|\.)reddit\.com$/i,                  source: 'reddit',    medium: 'social'   },
  { host: /(^|\.)pinterest\.com$/i,               source: 'pinterest', medium: 'social'   },
  { host: /(^|\.)t\.co$/i,                        source: 'twitter',   medium: 'social'   },
  { host: /(^|\.)wa\.me$/i,                       source: 'whatsapp',  medium: 'referral' },
  { host: /(^|\.)web\.whatsapp\.com$/i,           source: 'whatsapp',  medium: 'referral' },
  { host: /(^|\.)t\.me$/i,                        source: 'telegram',  medium: 'referral' },
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

function classifyReferrer(referrer) {
  if (!referrer) return null;
  try {
    const u = new URL(referrer);
    const host = u.hostname;
    // Skip self-referrals (internal navigation)
    if (typeof window !== 'undefined' && host === window.location.hostname) return null;
    for (const rule of REFERRER_RULES) {
      if (rule.host.test(host)) return { source: rule.source, medium: rule.medium };
    }
    // Unknown referrer → tag by domain
    return { source: host.replace(/^www\./, ''), medium: 'referral' };
  } catch { return null; }
}

function inferFromClickIds(stored) {
  if (stored.gclid)   return { source: 'google',   medium: 'cpc' };
  if (stored.fbclid)  return { source: 'facebook', medium: 'cpc' };
  if (stored.msclkid) return { source: 'bing',     medium: 'cpc' };
  if (stored.oaiqid)  return { source: 'chatgpt',  medium: 'cpc' };
  return null;
}

/**
 * Call once on page load — captures URL params + fills in source/medium
 * via click-ID → referrer → direct fallback. First-touch wins.
 */
export function captureAttributionFromUrl() {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = readStore();
    let changed  = false;

    // 1. Raw params (first-touch wins)
    CAPTURED_PARAMS.forEach((k) => {
      const v = params.get(k);
      if (v && !stored[k]) {
        stored[k] = v.slice(0, 250);
        changed = true;
      }
    });

    // 2. First landing + referrer + timestamp (write once)
    if (!stored._first_landing_url) {
      stored._first_landing_url = window.location.href.slice(0, 500);
      changed = true;
    }
    if (!stored._first_referrer && typeof document !== 'undefined') {
      stored._first_referrer = (document.referrer || '').slice(0, 500);
      changed = true;
    }
    if (!stored._first_captured_at) {
      stored._first_captured_at = new Date().toISOString();
      changed = true;
    }

    // 3. Source/medium fallback chain
    if (!stored.utm_source) {
      const fromClick    = inferFromClickIds(stored);
      const fromReferrer = fromClick ? null : classifyReferrer(stored._first_referrer);
      const inferred     = fromClick || fromReferrer || { source: 'direct', medium: 'none' };
      stored.utm_source = inferred.source;
      stored.utm_medium = stored.utm_medium || inferred.medium;
      changed = true;
    } else if (!stored.utm_medium) {
      // Have utm_source but no medium — default based on presence of click-ID
      const fromClick = inferFromClickIds(stored);
      stored.utm_medium = fromClick ? fromClick.medium : 'referral';
      changed = true;
    }

    if (changed) writeStore(stored);
  } catch {}
}

/** Read the stored attribution — safe to call anywhere. */
export function getAttribution() {
  return readStore();
}

/**
 * Fire the OpenAI Ads pixel `lead_created` conversion event.
 * No-ops if the pixel SDK isn't loaded yet.
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
    console.warn('[OpenAI Ads] measure error:', e);
  }
}
