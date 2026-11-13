'use client';

import { useEffect, useRef } from 'react';

/**
 * SwipeHint — small track + thumb under a swipeable card row, showing where
 * the visitor is in the row (Nov 2026).
 *
 * Place it directly AFTER the row it describes (it reads its previous
 * sibling):
 *
 *   <div className="row g-4 m-swipe"> …cards… </div>
 *   <SwipeHint />
 *
 * The rows are plain CSS scroll-snap (`.m-swipe` / `.m-swipe-tiles` in
 * globals.css) and only scroll sideways on phones; on wider screens the row
 * is a normal grid, nothing overflows, and this hides itself.
 *
 * `dark` switches the colours for dark sections. Decorative (aria-hidden):
 * the cards themselves stay in the page and reachable for everyone.
 */
export default function SwipeHint({ dark = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const hint = ref.current;
    const row = hint?.previousElementSibling;
    const thumb = hint?.firstElementChild;
    if (!hint || !row || !thumb) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const overflow = row.scrollWidth - row.clientWidth;
      if (overflow <= 4) { hint.hidden = true; return; }   // not a swipe row at this width
      hint.hidden = false;
      const visible = row.clientWidth / row.scrollWidth;     // thumb size, 0–1
      const progress = Math.min(1, Math.max(0, row.scrollLeft / overflow));
      thumb.style.width = `${visible * 100}%`;
      // translate is relative to the thumb's own width
      thumb.style.transform = `translateX(${progress * ((1 - visible) / visible) * 100}%)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    row.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      row.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`m-swipe-hint${dark ? ' m-swipe-hint--dark' : ''}`} aria-hidden="true" hidden>
      <span />
    </div>
  );
}
