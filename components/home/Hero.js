'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const STATS = [
  { value: '98%',   label: 'Open Rates'       },
  { value: '10M+',  label: 'Messages / Day'   },
  { value: '500+',  label: 'Businesses'        },
  { value: '99.9%', label: 'Delivery Rate'     },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hs-section" aria-labelledby="hero-heading">
      {/* CSS-only gradient glows — no image/video, instant render */}
      <div className="hs-glow hs-glow-1" aria-hidden="true" />
      <div className="hs-glow hs-glow-2" aria-hidden="true" />

      <div className="container hs-container">

        {/* ══ Center Content ══ */}
        <div className="hs-left">

          {/* Badge */}
          <motion.div className="hs-badge" {...fadeUp(0)}>
            <span className="hs-badge-dot" />
            India&apos;s #1 AI Communication Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 id="hero-heading" className="hs-title" {...fadeUp(0.1)}>
            Powerful Messaging<br />
            Solutions for{' '}
            <span className="hs-title-grad">Enterprise</span>
            <br />Scale &amp; Security
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hs-subtitle" {...fadeUp(0.22)}>
            Deliver billions of messages across SMS, WhatsApp, RCS &amp; Voice —
            with end-to-end encryption, AES-256 security, and enterprise compliance
            built into every API call.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hs-actions" {...fadeUp(0.32)}>
            <Link href="/contact" className="btn-hs-primary">
              Get Started Free →
            </Link>
            <Link href="/contact" className="btn-hs-outline">
              <span className="hs-play-icon">▶</span> Book a Live Demo
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div className="hs-stats" {...fadeUp(0.44)}>
            {STATS.map(({ value, label }, i) => (
              <div key={label} className="hs-stat">
                {i > 0 && <div className="hs-stat-sep" aria-hidden="true" />}
                <span className="hs-stat-val">{value}</span>
                <span className="hs-stat-lbl">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
