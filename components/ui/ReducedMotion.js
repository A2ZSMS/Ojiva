'use client';

import { MotionConfig } from 'framer-motion';

/**
 * ReducedMotion — makes framer-motion honour the visitor's "reduce motion"
 * setting (Nov 2026).
 *
 * CSS animations, scroll reveals, counters and the hero video already switch
 * off for those visitors; framer-motion's JS-driven effects did not. With
 * reducedMotion="user", movement and scaling are skipped while simple fades
 * still run, so nothing pops in abruptly.
 *
 * Wrap only pages that already use framer-motion (Book Demo, Contact,
 * Support) — it must not pull the library into pages that don't need it.
 */
export default function ReducedMotion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
