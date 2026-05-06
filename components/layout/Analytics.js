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
const SEARCH_CONSOLE_VERIFICATION = ''; // leave empty to disable
/* ─────────────────────────────────────────────────────── */

export default function Analytics() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          1. Google Analytics 4 (GA4)
             Strategy "afterInteractive" loads after
             hydration so it never blocks rendering.
         ════════════════════════════════════════════ */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* GTM <head> script is placed directly in layout.js <head> for
          maximum priority. Only the noscript fallback is handled here
          via GTMNoScript exported below. */}
    </>
  );
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
