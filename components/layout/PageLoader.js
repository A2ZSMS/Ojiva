'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════
   FIRST-LOAD SPLASH SCREEN — easy config
   ─────────────────────────────────────────────────────────
   ENABLED   → false to turn off completely
   MIN_SHOW  → how long (ms) the loader stays visible
   FADE_OUT  → how long (ms) the fade-out takes
═══════════════════════════════════════════════════════════ */
const MIN_SHOW = 400;   // ms — reduced from 900
const FADE_OUT = 250;   // ms — reduced from 400

export default function PageLoader() {
  const timerRef = useRef(null);
  // Skip loader on repeat visits within the same browser session
  const shouldShow = typeof window !== 'undefined' && !sessionStorage.getItem('ojiva_loaded');
  const [show,   setShow]   = useState(shouldShow);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!shouldShow) return;

    // Start fade-out after MIN_SHOW ms
    timerRef.current = setTimeout(() => {
      setFading(true);
      // Fully unmount after fade completes
      timerRef.current = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('ojiva_loaded', '1');
      }, FADE_OUT);
    }, MIN_SHOW);

    return () => clearTimeout(timerRef.current);
  }, []); // ← empty deps: runs once on first mount only

  if (!show) return null;

  return (
    <div
      className="pg-loader"
      style={{ '--fade-out': `${FADE_OUT}ms` }}
      aria-hidden="true"
      data-fading={fading ? '' : undefined}
    >
      {/* Top progress bar */}
      <div className="pg-loader-bar" />

      {/* Centred logo */}
      <div className="pg-loader-body">
        <div className="pg-loader-logo-wrap">
          <div className="pg-loader-ring" />
          <Image
            src="/ojiva-logo-white.png"
            alt="Ojiva AI"
            width={70}
            height={70}
            priority
            unoptimized
            className="pg-loader-logo"
          />
        </div>
        <div className="pg-loader-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
