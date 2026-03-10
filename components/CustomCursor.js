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

  useEffect(() => {
    // ── RAF loop for smooth ring lag ──────────────────────
    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

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

    // ── Move ──────────────────────────────────────────────
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
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
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove',   onMove);
    window.addEventListener('mouseover',   onOver);
    window.addEventListener('mouseout',    onOut);
    window.addEventListener('mousedown',   onDown);
    window.addEventListener('mouseup',     onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove',   onMove);
      window.removeEventListener('mouseover',   onOver);
      window.removeEventListener('mouseout',    onOut);
      window.removeEventListener('mousedown',   onDown);
      window.removeEventListener('mouseup',     onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

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
