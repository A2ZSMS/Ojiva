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
const ENABLED  = true;
const MIN_SHOW = 900;   // ms
const FADE_OUT = 400;   // ms

export default function PageLoader() {
  const timerRef = useRef(null);
  const [show,   setShow]   = useState(ENABLED);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!ENABLED) return;

    // Start fade-out after MIN_SHOW ms
    timerRef.current = setTimeout(() => {
      setFading(true);
      // Fully unmount after fade completes
      timerRef.current = setTimeout(() => {
        setShow(false);
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
