'use client';

/* SpotlightGroup — cursor-following glow + lit border on child cards.
   Cards opt in with data-spot and a <span className="spot-glow" /> child.
   One delegated pointermove listener, mouse/trackpad only. */

import './Spotlight.css';
import { useEffect, useRef } from 'react';
import { hoverMotionAllowed } from './Premium';

export function SpotlightGroup({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const group = ref.current;
    if (!group || !hoverMotionAllowed()) return;
    const move = (e) => {
      const card = e.target.closest('[data-spot]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    group.classList.add('is-live');
    group.addEventListener('pointermove', move, { passive: true });
    return () => {
      group.classList.remove('is-live');
      group.removeEventListener('pointermove', move);
    };
  }, []);

  return <div ref={ref} className={`spot-group ${className}`}>{children}</div>;
}
