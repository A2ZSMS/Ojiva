'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const BENEFITS = [
  { icon: '🎯', text: 'Live walkthrough built around your channels & use case' },
  { icon: '💰', text: 'Custom pricing based on your actual message volume'      },
  { icon: '🧠', text: 'Direct Q&A with a certified Ojiva AI solutions expert'   },
  { icon: '🗺️', text: '30-day implementation roadmap ready before you leave'    },
];

/* ── Platform preview card (left panel visual) ──────── */
function PreviewCard() {
  return (
    <div className="dbp-preview-card">
      <div className="dbp-preview-header">
        <span className="dbp-preview-dot green" />
        <span className="dbp-preview-dot amber" />
        <span className="dbp-preview-dot red" />
        <span className="dbp-preview-title">Campaign — Q1 Re-engage</span>
      </div>

      <div className="dbp-preview-channels">
        {[
          { icon: '📱', label: 'SMS',       val: '14.2K', color: '#10b981' },
          { icon: '💬', label: 'WhatsApp',  val: '8.9K',  color: '#25d366' },
          { icon: '🎙️', label: 'AI Voice',  val: '2.3K',  color: '#f59e0b' },
        ].map(({ icon, label, val, color }) => (
          <div key={label} className="dbp-ch-chip" style={{ '--cc': color }}>
            <span>{icon}</span>
            <div>
              <span className="dbp-ch-val">{val}</span>
              <span className="dbp-ch-label">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dbp-preview-metrics">
        {[
          { label: 'Delivered', pct: 98.2, color: '#22c55e' },
          { label: 'Opened',    pct: 67.4, color: '#00c8f8' },
          { label: 'Clicked',   pct: 41.8, color: '#1B48E0' },
        ].map(({ label, pct, color }) => (
          <div key={label} className="dbp-metric-row">
            <div className="dbp-metric-top">
              <span className="dbp-metric-label">{label}</span>
              <span className="dbp-metric-val" style={{ color }}>{pct}%</span>
            </div>
            <div className="dbp-metric-bar">
              <div className="dbp-metric-fill" style={{ width: `${pct}%`, background: color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="dbp-preview-footer">
        <span className="dbp-preview-live-dot" />
        <span>Live data · Updated just now</span>
      </div>
    </div>
  );
}

/* ── Left panel ─────────────────────────────────────── */
export default function LeftPanel() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const anim   = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="dbp-left" ref={ref}>
      {/* Background layers */}
      <div className="dbp-bg-mesh" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-a" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-b" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-c" aria-hidden="true" />

      <div className="dbp-left-inner">
        {/* Logo */}
        <motion.div {...anim(0)} className="dbp-logo-wrap">
          <Image src="/ojiva-logo-white.webp" alt="Ojiva AI — Book a Free Demo" width={130} height={130} loading="eager" />
        </motion.div>

        {/* Badge */}
        <motion.div {...anim(0.08)} className="dbp-badge">
          <span className="dbp-badge-dot" />
          Free · 30 minutes · No commitment
        </motion.div>

        {/* Headline */}
        <motion.div {...anim(0.14)}>
          <h1 className="dbp-headline">
            See Ojiva AI<br />
            <span className="dbp-headline-grad">live in action</span>
          </h1>
          <p className="dbp-subline">
            A personalised walkthrough around your channels, your volume, and your goals.
          </p>
        </motion.div>

        {/* Platform preview card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <PreviewCard />
        </motion.div>

        {/* Benefits */}
        <motion.ul {...anim(0.35)} className="dbp-benefits">
          {BENEFITS.map(({ icon, text }, i) => (
            <li key={i} className="dbp-benefit">
              <span className="dbp-benefit-icon">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </motion.ul>

        {/* Stats strip */}
        <motion.div {...anim(0.48)} className="dbp-stats">
          {[
            { v: '500+', l: 'Companies' },
            { v: '98%',  l: 'Satisfaction' },
            { v: '< 2h', l: 'Response' },
          ].map(({ v, l }) => (
            <div key={l} className="dbp-stat">
              <span className="dbp-stat-val">{v}</span>
              <span className="dbp-stat-lbl">{l}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote {...anim(0.58)} className="dbp-quote">
          <div className="dbp-quote-stars">★★★★★</div>
          <p>&ldquo;Best 30 minutes we&apos;ve ever invested. The team already knew our industry and showed us exactly what we needed.&rdquo;</p>
          <footer>
            <div className="dbp-quote-av">SC</div>
            <div>
              <strong>Sarah Chen</strong>
              <span> · Head of Growth, FinNova Technologies</span>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </div>
  );
}
