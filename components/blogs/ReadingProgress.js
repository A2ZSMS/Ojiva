'use client';

import { useEffect, useRef } from 'react';

/**
 * ReadingProgress — thin brand-gradient bar at the very top of a blog post
 * that fills as the visitor reads (Nov 2026).
 *
 * Progress is measured against the article column (`.blog-article`), not the
 * whole page, so the bar reaches 100% at the end of the article rather than
 * at the bottom of the footer.
 *
 * One passive scroll listener, at most one update per frame; the bar is moved
 * with a transform, so it never triggers layout. Styles: `.reading-progress`
 * in globals.css. Decorative only (aria-hidden).
 */
export default function ReadingProgress({ target = '.blog-article' }) {
  const bar = useRef(null);

  useEffect(() => {
    const article = document.querySelector(target);
    const el = bar.current;
    if (!article || !el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const start = rect.top + window.scrollY - 120;            // just before the article reaches the top
      const end = rect.bottom + window.scrollY - window.innerHeight;
      const span = Math.max(1, end - start);
      const p = Math.min(1, Math.max(0, (window.scrollY - start) / span));
      el.style.transform = `scaleX(${p})`;
      el.style.opacity = p > 0 ? '1' : '0';
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return <div ref={bar} className="reading-progress" aria-hidden="true" />;
}
