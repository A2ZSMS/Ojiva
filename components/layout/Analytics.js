/**
 * Analytics.js
 * ─────────────────────────────────────────────────────────
 * Centralised tracking scripts for Ojiva AI.
 * Add / remove trackers here — never touch layout.js again.
 *
 * Current integrations:
 *  ✅  Google Analytics 4  (GA4)       — G-FYZX6KFBEL
 *  ✅  Google Tag Manager (GTM)        — GTM-K2BDC8PH
 *  🔲  Google Search Console           — add verification meta tag when ready
 * ─────────────────────────────────────────────────────────
 */

import Script from 'next/script';

/* ── Config ──────────────────────────────────────────────
   Only edit values in this block.
   ───────────────────────────────────────────────────────── */
// GA4 is fired through GTM — no direct script needed
const GA_MEASUREMENT_ID = 'G-FYZX6KFBEL';

// GTM container ID — GTM-TJ8ZDFS2
const GTM_CONTAINER_ID = 'GTM-TJ8ZDFS2';

// Paste the content="" value from your Search Console <meta> tag here
const SEARCH_CONSOLE_VERIFICATION = 'vN4OHQQeiL2iCSQ2Q7Jq26BjIL168rxdI9k4RwGcjLI';
/* ─────────────────────────────────────────────────────── */

export default function Analytics() {
  // GA4 + GTM scripts are placed directly in <head> in layout.js
  // for maximum priority and GSC ownership verification compliance.
  return null;
}

/**
 * GTMNoScript — paste this inside <body> in layout.js
 * when your GTM ID is ready. Already imported & placed.
 */
export function GTMNoScript() {
  if (!GTM_CONTAINER_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="GTM"
      />
    </noscript>
  );
}

/**
 * SearchConsoleMeta — returns the verification <meta> tag.
 * Used in layout.js metadata or <head>.
 * Pass the content value from your Search Console property.
 */
export const searchConsoleVerification = SEARCH_CONSOLE_VERIFICATION
  ? SEARCH_CONSOLE_VERIFICATION
  : null;
