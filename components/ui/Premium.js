'use client';

/* ─────────────────────────────────────────────────────────
   PREMIUM MICRO-INTERACTIONS — dependency-free on purpose
   (no framer-motion animation engine, no CSS file) so pages
   that use them pay only a few hundred bytes.
   - Magnetic: element drifts toward the cursor (mouse/trackpad only)
   - CountUp:  number counts up once when scrolled into view
   Both render their final state in the static HTML (SEO + LCP safe)
   and do nothing on touch devices or with prefers-reduced-motion.
───────────────────────────────────────────────────────── */

import { useEffect, useLayoutEffect, useRef } from 'react';

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
const REDUCED = '(prefers-reduced-motion: reduce)';

export function hoverMotionAllowed() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia(REDUCED).matches;
}

const MAGNETIC_STYLE = {
  display: 'inline-flex',
  transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
};

/* Magnetic — wraps a button/link; pulls it a few px toward the cursor */
export function Magnetic({ children, className = '', strength = 0.3, max = 12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hoverMotionAllowed()) return;
    let rect = null;
    let raf = 0;
    const clamp = (v) => Math.max(-max, Math.min(max, v));
    const enter = () => { rect = el.getBoundingClientRect(); };
    const move = (e) => {
      if (!rect) rect = el.getBoundingClientRect();
      const x = clamp((e.clientX - (rect.left + rect.width / 2)) * strength);
      const y = clamp((e.clientY - (rect.top + rect.height / 2)) * strength);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.transform = `translate3d(${x}px, ${y}px, 0)`; });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      rect = null;
      el.style.transform = '';
    };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    return () => {
      leave();
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [strength, max]);

  return (
    <span ref={ref} className={`magnetic ${className}`} style={MAGNETIC_STYLE}>
      {children}
    </span>
  );
}

/* CountUp — final value is in the HTML; below-the-fold numbers count up once */
export function CountUp({ value, decimals = 0, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const format = (n) => `${prefix}${n.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  useIsoLayoutEffect(() => {
    const el = ref.current;
    const node = el?.firstChild;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia(REDUCED).matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return; // already visible: keep final

    node.nodeValue = format(0);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        node.nodeValue = format(value * (1 - Math.pow(1 - t, 4))); // ease-out
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { rootMargin: '0px 0px -40px 0px' });
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      node.nodeValue = format(value);
    };
  }, [value, decimals, prefix, suffix, duration]);

  return <span ref={ref} className="count-up">{format(value)}</span>;
}
