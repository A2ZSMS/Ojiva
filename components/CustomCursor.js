'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  // Track raw mouse position
  const mouse = useRef({ x: -100, y: -100 });
  // Smoothed position for the ring
  const ring  = useRef({ x: -100, y: -100 });

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Skip on mobile/touch devices — saves significant CPU
    const mobile = window.matchMedia('(max-width: 767.98px)').matches
      || 'ontouchstart' in window
      || navigator.maxTouchPoints > 0;
    if (mobile) {
      setIsMobile(true);
      return;
    }

    // Apply will-change for GPU layer promotion
    if (dotRef.current)  dotRef.current.style.willChange  = 'transform';
    if (ringRef.current) ringRef.current.style.willChange = 'transform';

    // ── RAF loop for smooth ring lag ──────────────────────
    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.22);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.22);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // ── Move (passive: true = browser doesn't wait for preventDefault) ──
    const isVisible = { current: false };
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        setVisible(true);
      }
    };

    // ── Hover detection ───────────────────────────────────
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]';

    const onOver = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovered(true);
    };
    const onOut  = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovered(false);
    };

    // ── Click ─────────────────────────────────────────────
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    // ── Leave / enter window ──────────────────────────────
    const onLeave = () => { isVisible.current = false; setVisible(false); };
    const onEnter = () => { isVisible.current = true;  setVisible(true);  };

    // passive: true on mousemove/over/out prevents blocking scroll
    window.addEventListener('mousemove',    onMove, { passive: true });
    window.addEventListener('mouseover',    onOver, { passive: true });
    window.addEventListener('mouseout',     onOut,  { passive: true });
    window.addEventListener('mousedown',    onDown);
    window.addEventListener('mouseup',      onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove',    onMove);
      window.removeEventListener('mouseover',    onOver);
      window.removeEventListener('mouseout',     onOut);
      window.removeEventListener('mousedown',    onDown);
      window.removeEventListener('mouseup',      onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount once — do NOT add 'visible' here or listeners re-register on every cursor enter/leave
  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* ── Dot ─────────────────────────────────────────── */}
      <div
        ref={dotRef}
        className={[
          'cursor-dot',
          hovered  ? 'cursor-dot--hover'   : '',
          clicking ? 'cursor-dot--click'   : '',
        ].join(' ')}
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />

      {/* ── Ring ─────────────────────────────────────────── */}
      <div
        ref={ringRef}
        className={[
          'cursor-ring',
          hovered  ? 'cursor-ring--hover'  : '',
          clicking ? 'cursor-ring--click'  : '',
        ].join(' ')}
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
}
