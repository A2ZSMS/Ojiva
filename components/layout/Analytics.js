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
const GA_MEASUREMENT_ID = '';

// GTM container ID — GTM-K2BDC8PH
const GTM_CONTAINER_ID = 'GTM-K2BDC8PH';

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

      {/* ══════════════════════════════════════════════
          2. Google Tag Manager (GTM)
             Strategy "beforeInteractive" loads the GTM
             snippet as early as possible in <head>,
             matching Google's placement recommendation.
             The noscript fallback lives in layout.js
             immediately after <body> via <GTMNoScript />.
         ════════════════════════════════════════════ */}
      {GTM_CONTAINER_ID && (
        <>
          {/* GTM <head> script — loads as high in <head> as possible */}
          <Script id="gtm-head" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
            `}
          </Script>
        </>
      )}
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
