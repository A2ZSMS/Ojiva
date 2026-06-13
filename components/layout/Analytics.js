/**
 * Analytics.js
 * ─────────────────────────────────────────────────────────
 * Centralised tracking scripts for Ojiva AI.
 * Edit IDs in this file only — never touch layout.js for analytics.
 *
 * Current integrations:
 *  ✅  Google Analytics 4  (GA4)       — G-FYZX6KFBEL
 *  ✅  Google Tag Manager (GTM)        — GTM-TJ8ZDFS2  (inline in layout.js <head>)
 *  ✅  Google Search Console           — vN4OHQQeiL2iCSQ2Q7Jq26BjIL168rxdI9k4RwGcjLI
 *  ✅  Meta Pixel                      — 1051828620576144
 *
 * ⚠️  DO NOT REMOVE OR COMMENT OUT these scripts — they track all site traffic.
 *     If you think there are duplicate hits, check inside GTM container first.
 * ─────────────────────────────────────────────────────────
 */

import Script from 'next/script';

/* ── Config — only edit values here ─────────────────────── */
const GA_MEASUREMENT_ID           = 'G-FYZX6KFBEL';
const GTM_CONTAINER_ID            = 'GTM-TJ8ZDFS2';
const SEARCH_CONSOLE_VERIFICATION = 'vN4OHQQeiL2iCSQ2Q7Jq26BjIL168rxdI9k4RwGcjLI';
const META_PIXEL_ID               = '1051828620576144';
/* ─────────────────────────────────────────────────────── */

/**
 * Analytics — renders GA4 + Meta Pixel scripts via Next.js Script (afterInteractive).
 * Already placed in layout.js <body>. DO NOT delete this component or its usage.
 */
export default function Analytics() {
  return (
    <>
      {/* ── Google Analytics 4 ── */}
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${GA_MEASUREMENT_ID}',{page_path:window.location.pathname});
          `,
        }}
      />

      {/* ── Meta Pixel ── */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
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
