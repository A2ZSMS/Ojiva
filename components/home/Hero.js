'use client';

import { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GalaxyCanvas from '@/components/home/galaxy/GalaxyCanvas';

/* ── SVG Icons ───────────────────────────────────────────── */
const SmsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="12" y2="14"/>
  </svg>
);
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);
const RcsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 12h5"/>
  </svg>
);
const VoiceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* ── Data ─────────────────────────────────────────────────── */
const CHANNELS = [
  { Icon: WhatsappIcon, label: 'WhatsApp API',  stat: '98%',  statLbl: 'open rate',  color: '#34d399', glow: 'rgba(52,211,153,0.14)',  bar: 98, badge: 'Top Channel' },
  { Icon: SmsIcon,      label: 'Bulk SMS',       stat: '10M+', statLbl: 'msgs / day', color: '#60a5fa', glow: 'rgba(96,165,250,0.14)',  bar: 82 },
  { Icon: RcsIcon,      label: 'RCS Messaging',  stat: '94%',  statLbl: 'read rate',  color: '#22d3ee', glow: 'rgba(34,211,238,0.14)',  bar: 94, badge: 'New' },
  { Icon: VoiceIcon,    label: 'AI Voice Call',  stat: 'IVR',  statLbl: 'zero-agent', color: '#818cf8', glow: 'rgba(129,140,248,0.14)', bar: 70 },
];

const METRICS = [
  { val: '10.4M', lbl: 'Msgs Today',  color: '#60a5fa', trend: '+12%'  },
  { val: '99.1%', lbl: 'Delivery',    color: '#34d399', trend: '↑ SLA' },
  { val: '98.4%', lbl: 'Open Rate',   color: '#22d3ee', trend: '+3.2%' },
];

const FEED = [
  { color: '#34d399', type: 'WhatsApp',  msg: '4.82L OTP delivered · 3s avg',    time: 'just now' },
  { color: '#60a5fa', type: 'Bulk SMS',  msg: '1.2M recipients · 99.1% success', time: '2m ago'   },
  { color: '#22d3ee', type: 'RCS Promo', msg: 'Flash sale · 94% read, 12% CTR',  time: '5m ago'   },
];

const STATS = [
  { value: '10M+',  label: 'Messages / Day' },
  { value: '500+',  label: 'Businesses'      },
  { value: '99.9%', label: 'Uptime SLA'      },
  { value: '48 hr', label: 'Go-Live Time'    },
];

const TRUST_PILLS = [
  { icon: '🔐', label: 'AES-256 Encrypted' },
  { icon: '✅', label: 'DLT Registered'    },
  { icon: '⚡', label: '48-Hr Go-Live'     },
  { icon: '🇮🇳', label: 'India Support'    },
];

const AVATARS = [
  { bg: '#dbeafe', color: '#1d4ed8', initials: 'RS' },
  { bg: '#dcfce7', color: '#15803d', initials: 'PR' },
  { bg: '#ede9fe', color: '#6d28d9', initials: 'AM' },
  { bg: '#fef9c3', color: '#b45309', initials: 'VJ' },
];

const fade = (delay = 0, y = 20) => ({
  initial:    { opacity: 0, y },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Component ────────────────────────────────────────────── */
export default function Hero() {
  // Only render video on desktop — prevents 10 MB download on mobile/tablet
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 992px)').matches);
  }, []);

  return (
    <section className="hs-section" aria-labelledby="hero-heading">

      {/* Background video — desktop only (992px+) */}
      {isDesktop && (
        <video className="hs-bg-video" src="/hero-video.mp4" autoPlay muted loop playsInline preload="none" aria-hidden="true" />
      )}
      <div className="hs-bg-overlay" aria-hidden="true" />
      <div className="hs-grid-bg"   aria-hidden="true" />

      {/* Colour orbs */}
      <div className="hs-orb hs-orb--blue"   aria-hidden="true" />
      <div className="hs-orb hs-orb--purple" aria-hidden="true" />
      <div className="hs-orb hs-orb--green"  aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="row align-items-center g-4 g-xl-5" style={{ paddingTop: '60px', paddingBottom: '80px' }}>

          {/* ══ LEFT COLUMN ══════════════════════════════ */}
          <div className="col-12 col-lg-6">

            {/* Badge */}
            <motion.div {...fade(0)}>
              <span className="hs-badge">
                <span className="hs-badge-dot" />
                India&apos;s #1 AI Communication Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 id="hero-heading" className="hs-title" {...fade(0.08)}>
              Deliver smarter<br />
              messages{' '}
              <span className="hs-title-highlight">at scale.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="hs-subtitle" {...fade(0.15)}>
              Send billions of messages across SMS, WhatsApp, RCS &amp; Voice —
              end-to-end encrypted, enterprise compliant, delivered in milliseconds.
            </motion.p>

            {/* Trust feature pills */}
            <motion.div className="hs-trust-pills" {...fade(0.20)}>
              {TRUST_PILLS.map(p => (
                <span key={p.label} className="hs-trust-pill">
                  <span className="hs-trust-pill-icon">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="hs-actions" {...fade(0.26)}>
              <Link href="/contact" className="btn-hs-primary">
                Get Started Free <ArrowRight />
              </Link>
              <Link href="/book-demo" className="btn-hs-outline">
                <span className="hs-play-icon">▶</span> Book a Demo
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div className="hs-social-proof" {...fade(0.31)}>
              <div className="hs-avatars">
                {AVATARS.map((a, i) => (
                  <span
                    key={a.initials}
                    className="hs-avatar"
                    style={{ background: a.bg, color: a.color, zIndex: AVATARS.length - i }}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <span className="hs-proof-text">
                <strong>500+</strong> businesses trust Ojiva AI
              </span>
              <span className="hs-proof-sep" />
              <span className="hs-proof-stars">★★★★★</span>
              <span className="hs-proof-score">4.9 / 5</span>
            </motion.div>

            {/* Stats */}
            <motion.div className="hs-stats" {...fade(0.36)}>
              {STATS.map(({ value, label }, i) => (
                <Fragment key={label}>
                  <div className="hs-stat">
                    <span className="hs-stat-val">{value}</span>
                    <span className="hs-stat-lbl">{label}</span>
                  </div>
                  {i < STATS.length - 1 && <span className="hs-stat-sep" />}
                </Fragment>
              ))}
            </motion.div>

          </div>

          {/* ══ RIGHT COLUMN — Galaxy (desktop only) ════ */}
          <motion.div
            className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.80, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', zIndex: 4 }}
          >
            <div className="hs-galaxy-outer">
              <GalaxyCanvas />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
