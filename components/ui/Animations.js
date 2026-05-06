'use client';

import {
  motion, useInView,
  useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll,
  AnimatePresence,
} from 'framer-motion';
import { useRef } from 'react';

// All framer-motion hooks kept in module graph to prevent Turbopack HMR errors.
void useMotionValue; void useSpring; void useTransform;
void useMotionTemplate; void useScroll;

/* ─────────────────────────────────────────────────────────
   CORE ANIMATIONS (6 — these actually run)
   All use scroll-triggered, once-only reveal.
   Easing is the same across all for visual consistency.
───────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1];

/* FadeUp — primary entrance, used for sections & cards */
export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* FadeIn — opacity only, no movement */
export function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* SlideLeft — slides in from left */
export function SlideLeft({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* SlideRight — slides in from right */
export function SlideRight({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* StaggerContainer — wraps a list of StaggerItems */
export function StaggerContainer({ children, className = '', staggerDelay = 0.08 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: staggerDelay } } }}
    >
      {children}
    </motion.div>
  );
}

/* StaggerItem — child of StaggerContainer */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   PASSTHROUGH STUBS
   These render children directly with no animation.
   Existing code that imports them won't break.
───────────────────────────────────────────────────────── */
export function TiltCard3D({ children, className = '', intensity, style }) {
  return <div className={className} style={style}>{children}</div>;
}

export function MagneticButton({ children, className = '', intensity }) {
  return <div className={className}>{children}</div>;
}

export function GlowCard({ children, className = '', glowColor }) {
  return <div className={className}>{children}</div>;
}

export function HoverCard({ children, className = '', style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

export function AnimatedCounter({ target, suffix = '', prefix = '', duration }) {
  return <span>{prefix}{target}{suffix}</span>;
}

export function BlurReveal({ children, delay, className = '' }) {
  return <FadeIn delay={delay} className={className}>{children}</FadeIn>;
}

export function ParallaxSection({ children, className = '', speed }) {
  return <div className={className}>{children}</div>;
}

export function TextReveal({ text, className = '', tag: Tag = 'p' }) {
  return <Tag className={className}>{text}</Tag>;
}

export function ScrollScale({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function ClipReveal({ children, className = '', direction }) {
  return <FadeUp className={className}>{children}</FadeUp>;
}

export function RotateIn({ children, delay = 0, className = '' }) {
  return <FadeUp delay={delay} className={className}>{children}</FadeUp>;
}

export function DrawLine({ className = '', color, width }) {
  return null;
}

export function ScalePop({ children, delay = 0, className = '' }) {
  return <FadeUp delay={delay} className={className}>{children}</FadeUp>;
}

export function HeroEntrance({ children, index = 0 }) {
  return <>{children}</>;
}

export function FloatingElement({ children, className = '', amplitude, duration, delay }) {
  return <div className={className}>{children}</div>;
}

export function StaggerGrid({ children, className = '', columns }) {
  return <StaggerContainer className={className}>{children}</StaggerContainer>;
}

export function StaggerGridItem({ children, className = '' }) {
  return <StaggerItem className={className}>{children}</StaggerItem>;
}

export function TypeWriter({ text, className = '', tag: Tag = 'span', speed }) {
  return <Tag className={className}>{text}</Tag>;
}

export function CountUpSection({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

/* ScrollProgress — stub (component deleted from layout) */
export function ScrollProgress({ color }) {
  return null;
}
