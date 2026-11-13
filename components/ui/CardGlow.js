'use client';

import { useEffect } from 'react';
import { hoverMotionAllowed } from './Premium';

/**
 * CardGlow — makes the soft glow on cards follow the cursor (Nov 2026).
 *
 * The glow itself is pure CSS (the `::after` layer in globals.css, section
 * "Card hover system"). This only tells the hovered card where the pointer
 * is, through two CSS variables (--mx / --my). Without it the glow still
 * appears, centred near the top of the card.
 *
 * One passive listener for the whole page, at most one update per frame,
 * and none at all on touch devices or with "reduce motion" on.
 * Keep SELECTOR in step with the card list in globals.css.
 * Renders nothing.
 */
const SELECTOR = [
  '.service-type-card', '.industry-card', '.how-card', '.pricing-card',
  '.pf-portal-card', '.pf-tool-card', '.about-infra-card',
  '.sp-channel-card', '.sp-sla-card', '.vm-card', '.why-card-v3',
].join(',');

export default function CardGlow() {
  useEffect(() => {
    if (!hoverMotionAllowed()) return;

    let frame = 0;
    let last = null;
    const update = () => {
      frame = 0;
      if (!last) return;
      const card = last.target instanceof Element ? last.target.closest(SELECTOR) : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${last.clientX - r.left}px`);
      card.style.setProperty('--my', `${last.clientY - r.top}px`);
    };
    const onMove = (e) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
