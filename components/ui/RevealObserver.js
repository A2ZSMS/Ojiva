'use client';

/* RevealObserver — the only JavaScript behind every scroll reveal
   (FadeUp, SlideLeft, StaggerContainer… in Animations.js). Mounted once in
   the root layout; re-scans on client-side navigation.
   - Blocks whose trigger starts below the fold are armed (hidden, no
     transition) and revealed once when they enter the viewport.
   - Anything already on screen, or above it, is never touched.
   - Skipped entirely on slow / save-data connections and reduced motion. */

import './Reveal.css';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const DEFAULT_MARGIN = 60;

function motionAllowed() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!c) return true;
  const et = c.effectiveType || '';
  return !(c.saveData || et === '2g' || et === 'slow-2g' || et === '3g');
}

function reveal(el) {
  el.setAttribute('data-rv', 'shown');
  let timer = 0;
  const done = (e) => {
    if (e && e.target !== el) return;
    clearTimeout(timer);
    el.removeEventListener('transitionend', done);
    // Back to the element's own styles once the entrance has finished
    if (el.getAttribute('data-rv') === 'shown') el.removeAttribute('data-rv');
  };
  el.addEventListener('transitionend', done);
  timer = setTimeout(done, 3000);
}

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || !motionAllowed()) return;

    const members = new Map();   // trigger element -> elements it reveals
    const observers = new Map(); // margin -> IntersectionObserver
    const vh = window.innerHeight;

    for (const el of document.querySelectorAll('[data-reveal]:not([data-rv])')) {
      const trigger = el.hasAttribute('data-reveal-member')
        ? el.closest('[data-reveal-group]') || el
        : el;
      if (!members.has(trigger)) {
        if (trigger.getBoundingClientRect().top <= vh) { members.set(trigger, null); continue; }
        members.set(trigger, []);
      }
      const list = members.get(trigger);
      if (!list) continue; // trigger already on screen — leave visible
      el.setAttribute('data-rv', 'armed');
      list.push(el);
    }

    const onEnter = (entries, io) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        members.get(entry.target)?.forEach(reveal);
      }
    };
    for (const [trigger, list] of members) {
      if (!list) continue;
      const margin = Number(trigger.getAttribute('data-rv-margin')) || DEFAULT_MARGIN;
      if (!observers.has(margin)) {
        observers.set(margin, new IntersectionObserver(onEnter, { rootMargin: `-${margin}px` }));
      }
      observers.get(margin).observe(trigger);
    }

    return () => {
      observers.forEach((io) => io.disconnect());
      // Never leave anything hidden once nobody is watching it
      members.forEach((list) => list?.forEach((el) => {
        if (el.getAttribute('data-rv') === 'armed') el.removeAttribute('data-rv');
      }));
    };
  }, [pathname]);

  return null;
}
