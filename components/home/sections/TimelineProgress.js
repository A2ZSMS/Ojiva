'use client';

import { useEffect, useRef } from 'react';

/**
 * TimelineProgress — lights up the "How it works" steps one by one as the
 * section scrolls through the screen, and fills the connecting line (Nov 2026).
 *
 * It renders the `.ojv-timeline` wrapper itself and only toggles state:
 *   - `.is-on` on each `.ojv-timeline-step` (styled in globals.css)
 *   - `--tl-p` (0 → 1) on the wrapper, which scales `.ojv-timeline-fill`
 *
 * Desktop (steps in one row): progress runs while the row travels from 82%
 * to 32% of the screen height, so the four steps light in sequence.
 * Phone / tablet (steps stacked): each step lights when it passes 72% of the
 * screen height.
 *
 * Deliberately NOT pinned/sticky: nothing is added to the page length and
 * normal scrolling is never taken over. Scrolling back up un-lights steps.
 * Without JS, or with "reduce motion" on, the steps keep their normal look.
 * One passive scroll listener, active only while the section is near view.
 */
const clamp = (n) => Math.min(1, Math.max(0, n));

export default function TimelineProgress({ className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const steps = [...root.querySelectorAll('.ojv-timeline-step')];
    if (!steps.length) return;

    let frame = 0;
    let near = false;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const tops = steps.map((s) => s.getBoundingClientRect().top);
      const inOneRow = Math.abs(tops[0] - tops[tops.length - 1]) < 8;

      let p = 0;
      if (inOneRow) {
        p = clamp((vh * 0.82 - root.getBoundingClientRect().top) / (vh * 0.5));
        steps.forEach((s, i) => s.classList.toggle('is-on', p >= (i + 0.6) / steps.length));
      } else {
        steps.forEach((s, i) => s.classList.toggle('is-on', tops[i] < vh * 0.72));
      }
      root.style.setProperty('--tl-p', p.toFixed(3));
    };

    const schedule = () => { if (near && !frame) frame = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([entry]) => {
      near = entry.isIntersecting;
      schedule();
    }, { rootMargin: '25% 0px 25% 0px' });

    io.observe(root);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      steps.forEach((s) => s.classList.remove('is-on'));
      root.style.removeProperty('--tl-p');
    };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
