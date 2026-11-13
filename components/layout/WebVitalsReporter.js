'use client';

import { useEffect } from 'react';

/**
 * Real-visitor speed scores → GA4 (Nov 2026).
 *
 * Measures Core Web Vitals on each visitor's own device and sends them to GA4
 * as events named LCP, INP, CLS, FCP and TTFB:
 *   value          — the change since the last report (GA4 can sum/average it)
 *   metric_value   — the current value (ms; CLS is a unitless score)
 *   metric_rating  — 'good' | 'needs-improvement' | 'poor'
 *   metric_id      — one id per page load, to group repeat reports
 *   metric_page    — the page the visitor loaded (not a later in-app page)
 *
 * The ~2 KB library is fetched through window.__ojvLoad (layout.js), like the
 * other tracking scripts, so it never competes with page load. Late start is
 * safe: the browser hands over the measurements it already buffered.
 *
 * Nothing is sent from localhost — dev-mode timings would skew the data — the
 * scores are printed to the browser console there instead.
 * Renders nothing.
 */
export default function WebVitalsReporter() {
  useEffect(() => {
    const page = window.location.pathname;
    const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);

    const report = ({ name, value, delta, id, rating, navigationType }) => {
      if (isLocal) {
        console.log(`[web-vitals] ${name} ${Math.round(value * 1000) / 1000} (${rating}) on ${page}`);
        return;
      }
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', name, {
        value: delta,
        metric_id: id,
        metric_value: value,
        metric_delta: delta,
        metric_rating: rating,
        metric_page: page,
        navigation_type: navigationType,
      });
    };

    const start = () => {
      import('web-vitals')
        .then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
          onCLS(report);
          onINP(report);
          onLCP(report);
          onFCP(report);
          onTTFB(report);
        })
        .catch(() => { /* measuring is optional — never break the page */ });
    };

    (window.__ojvLoad || ((run) => run()))(start);
  }, []);

  return null;
}
