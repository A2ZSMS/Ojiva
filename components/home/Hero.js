'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECURITY_BADGES = [
  { icon: 'bi-shield-check',            label: 'E2E Encrypted' },
  { icon: 'bi-lock-fill',               label: 'AES-256'       },
  { icon: 'bi-lightning-charge-fill',   label: '2FA Secured'   },
];

const CHANNELS = [
  { icon: 'bi-chat-dots-fill',   label: 'Bulk SMS',        stat: '10M+ msgs/day',     iconBg: 'rgba(27,72,224,0.28)',  iconColor: '#4d9fff', statColor: '#4d9fff'  },
  { icon: 'bi-whatsapp',         label: 'WhatsApp API',    stat: '98% open rate',     iconBg: 'rgba(37,211,102,0.22)', iconColor: '#25D366', statColor: '#25D366'  },
  { icon: 'bi-stars',            label: 'RCS Messaging',   stat: '94% read rate',     iconBg: 'rgba(255,109,66,0.22)', iconColor: '#FF6D42', statColor: '#FF6D42'  },
  { icon: 'bi-telephone-fill',   label: 'Bulk Voice Call', stat: 'AI call automation', iconBg: 'rgba(124,58,237,0.22)', iconColor: '#a78bfa', statColor: '#a78bfa'  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hs-section" aria-labelledby="hero-heading">
      {/* Background video */}
      <div className="hs-bg-video-wrap" aria-hidden="true">
        <video className="hs-bg-video" autoPlay muted loop playsInline preload="auto">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hs-bg-video-overlay" />
      </div>

      <div className="container hs-container">
        <div className="hs-left">

          {/* Badge */}
          <motion.div className="hs-badge" {...fadeUp(0)}>
            <span className="hs-badge-dot" />
            India&apos;s #1 AI Communication Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 id="hero-heading" className="hs-title" {...fadeUp(0.1)}>
            Powerful Messaging<br />
            <span className="hs-title-cyan">Solutions for</span>{' '}
            <span className="hs-title-purple">Enterprise</span>
            <br />Scale &amp; Security
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hs-subtitle" {...fadeUp(0.18)}>
            Deliver billions of messages across SMS, WhatsApp, RCS &amp; Voice —
            with end-to-end encryption, AES-256 security, and enterprise compliance
            built into every API call.
          </motion.p>

          {/* Security badges */}
          <motion.div className="hs-sec-badges" {...fadeUp(0.26)}>
            {SECURITY_BADGES.map(({ icon, label }) => (
              <span key={label} className="hs-sec-badge">
                <i className={`bi ${icon}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Channel cards */}
          <motion.div className="hs-channels" {...fadeUp(0.34)}>
            {CHANNELS.map(({ icon, label, stat, iconBg, iconColor, statColor }) => (
              <div key={label} className="hs-channel-card">
                <div className="hs-channel-icon" style={{ background: iconBg }}>
                  <i className={`bi ${icon}`} style={{ color: iconColor }} aria-hidden="true" />
                </div>
                <div>
                  <div className="hs-channel-label">{label}</div>
                  <div className="hs-channel-stat" style={{ color: statColor }}>{stat}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="hs-actions" {...fadeUp(0.44)}>
            <Link href="/contact" className="btn-hs-primary">
              Get Started Free →
            </Link>
            <Link href="/book-demo" className="btn-hs-outline">
              <span className="hs-play-icon">▶</span> Book a Demo
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
