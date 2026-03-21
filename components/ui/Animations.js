'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';

/* ─── Fade Up on scroll ─── */
export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Fade In (no Y shift) ─── */
export function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Slide in from left ─── */
export function SlideLeft({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Slide in from right ─── */
export function SlideRight({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scale pop ─── */
export function ScalePop({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger wrapper — animates children in sequence ─── */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger item (use inside StaggerContainer) ─── */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>{prefix}0{suffix}</span>
    </span>
  );
}

/* ─── Floating element (gentle bob animation) ─── */
export function FloatingElement({ children, amplitude = 12, duration = 4, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hover card lift ─── */
export function HoverCard({ children, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(15,23,42,0.12)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero entrance sequence ─── */
export function HeroEntrance({ children, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 3D Tilt Card — mouse-tracking perspective tilt with glare ─── */
export function TiltCard3D({
  children,
  className = '',
  style = {},
  intensity = 10,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 130, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 130, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-intensity, intensity]);

  /* glare light position follows cursor */
  const glareX = useTransform(xSpring, [-0.5, 0.5], ['15%', '85%']);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['15%', '85%']);
  const glareOpacity = useTransform(
    xSpring,
    [-0.5, 0, 0.5],
    [0.18, 0.0, 0.18]
  );
  const glareBg = useMotionTemplate`radial-gradient(ellipse at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, transparent 60%)`;

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt3d-wrap ${className}`}
      style={{ ...style, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* glare overlay */}
      <motion.span
        aria-hidden="true"
        className="tilt3d-glare"
        style={{ background: glareBg, opacity: glareOpacity }}
      />
    </motion.div>
  );
}

/* ─── Blur Reveal — fades in from blur + y-shift ─── */
export function BlurReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax Section — reduced range + GPU hint ─── */
export function ParallaxSection({ children, className = '', speed = 0.08 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Reduced amplitude (40 → max 24px) to limit layout thrashing
  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);

  return (
    <motion.div ref={ref} className={className} style={{ y, willChange: 'transform' }}>
      {children}
    </motion.div>
  );
}

/* ─── Text Reveal — fade-up the whole paragraph (performance-safe) ─── */
export function TextReveal({ text, className = '', tag: Tag = 'p' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}

/* ─── Rotate In — element rotates slightly as it enters ─── */
export function RotateIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, rotate: -3, y: 40 }}
      animate={inView ? { opacity: 1, rotate: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scroll Scale — GPU-promoted scale on scroll ─── */
export function ScrollScale({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.94, 1, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} className={className} style={{ scale, opacity, willChange: 'transform, opacity' }}>
      {children}
    </motion.div>
  );
}

/* ─── Stagger Grid — grid items enter with staggered cascade from top-left ─── */
export function StaggerGrid({ children, className = '', columns = 4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger Grid Item — individual item for StaggerGrid ─── */
export function StaggerGridItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.88, y: 20 },
        visible: {
          opacity: 1, scale: 1, y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Clip Reveal — section revealed with a wipe from left ─── */
export function ClipReveal({ children, className = '', direction = 'left' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const clipMap = {
    left:   { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right:  { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
    top:    { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
    bottom: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
  };
  const clip = clipMap[direction] || clipMap.left;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clip.from, opacity: 0 }}
      animate={inView ? { clipPath: clip.to, opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── TypeWriter — simple fade-in (avoids N motion elements per char) ─── */
export function TypeWriter({ text, className = '', speed = 0.035, tag: Tag = 'span' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: text.length * speed * 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="typewriter-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'steps(1)' }}
      >
        |
      </motion.span>
    </Tag>
  );
}

/* ─── MagneticButton — button that subtly pulls toward cursor ─── */
export function MagneticButton({ children, className = '', intensity = 0.3 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * intensity);
    y.set(dy * intensity);
  }

  function handleLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring, display: 'inline-block' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ─── DrawLine — SVG horizontal line that draws as section enters ─── */
export function DrawLine({ className = '', color = 'var(--primary)', width = '100%' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 1200 4"
      fill="none"
      style={{ width, height: '4px', display: 'block' }}
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0" y1="2" x2="1200" y2="2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/* ─── GlowCard — card with animated glow border on hover ─── */
export function GlowCard({ children, className = '', glowColor = 'rgba(0,200,248,0.25)' }) {
  return (
    <motion.div
      className={`glow-card ${className}`}
      style={{ '--glow-color': glowColor }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScrollProgress — thin progress bar at top of viewport ─── */
export function ScrollProgress({ color = 'var(--primary)' }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, background: color }}
    />
  );
}

/* ─── CountUpSection — a row of counters that animate on scroll ─── */
export function CountUpSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
