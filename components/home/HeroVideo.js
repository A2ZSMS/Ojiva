'use client';

import { useEffect, useRef, useState } from 'react';

// The small CSS poster paints first. The decorative movie starts after the
// document has loaded and the browser has an idle slot, away from critical text.
export default function HeroVideo({ enabled }) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let idle;
    let timer;
    const schedule = () => {
      if (window.requestIdleCallback) {
        idle = window.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      } else {
        timer = setTimeout(() => setReady(true), 300);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => {
      window.removeEventListener('load', schedule);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      clearTimeout(timer);
    };
  }, [enabled]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let visible = true;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (visible && !document.hidden && !motion.matches) video.play().catch(() => {});
      else video.pause();
    };
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer?.observe(video);
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    sync();
    return () => {
      video.pause();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
    };
  }, [enabled, ready]);

  if (!enabled || !ready) return null;
  return <video ref={videoRef} className="hs-bg-video" src="/hero-video.mp4" poster="/hero-poster.v1.webp" muted loop playsInline preload="none" aria-hidden="true" />;
}
