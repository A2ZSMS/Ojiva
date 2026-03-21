'use client';

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { AnimatedCounter } from '../ui/Animations';
import {
  RiMessage2Line,
  RiWhatsappLine,
  RiChat3Line,
  RiPhoneLine,
  RiShieldCheckLine,
  RiLockLine,
  RiFlashlightLine,
} from 'react-icons/ri';

const STATS = [
  { value: 10,   suffix: 'M+', label: 'Messages Delivered' },
  { value: 98,   suffix: '%',  label: 'Delivery Rate'       },
  { value: 99.9, suffix: '%',  label: 'Platform Uptime'     },
  { value: 3,    suffix: 'B+', label: 'API Calls / Year'    },
];

const CHANNELS = [
  { label: 'Bulk SMS',       color: '#1B48E0', icon: RiMessage2Line,  stat: '10M+ msgs/day',      bg: 'rgba(27,72,224,0.18)'  },
  { label: 'WhatsApp API',   color: '#25D366', icon: RiWhatsappLine,  stat: '98% open rate',      bg: 'rgba(37,211,102,0.15)' },
  { label: 'RCS Messaging',  color: '#FF6D42', icon: RiChat3Line,     stat: '94% read rate',      bg: 'rgba(255,109,66,0.15)' },
  { label: 'Bulk Voice Call', color: '#7C3AED', icon: RiPhoneLine,     stat: 'AI call automation', bg: 'rgba(124,58,237,0.15)' },
];

const ACTIVITY = [
  { icon: '📱', msg: '2,847 SMS delivered to Mumbai campaign',  time: '2s ago',  color: '#1B48E0' },
  { icon: '💬', msg: 'WhatsApp flow triggered for 512 leads',   time: '8s ago',  color: '#25D366' },
  { icon: '📞', msg: 'AI voice call qualified 23 prospects',    time: '15s ago', color: '#7C3AED' },
  { icon: '✨', msg: 'RCS campaign: 94% read rate achieved',    time: '31s ago', color: '#FF6D42' },
];

const SECURITY_BADGES = [
  { icon: RiShieldCheckLine, label: 'E2E Encrypted' },
  { icon: RiLockLine,        label: 'AES-256' },
  { icon: RiFlashlightLine,  label: '2FA Secured' },
];

/* ── Animation variants ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const cardVariants = {
  hidden:  { opacity: 0, y: 22, scale: 0.94 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: 0.3 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── 3-D tilt hook for the dashboard panel ── */
function useDashboardTilt(intensity = 14) {
  const ref   = useRef(null);
  const mx    = useMotionValue(0);
  const my    = useMotionValue(0);
  const xSp   = useSpring(mx, { stiffness: 110, damping: 18 });
  const ySp   = useSpring(my, { stiffness: 110, damping: 18 });
  const rotX  = useTransform(ySp, [-0.5, 0.5], [intensity, -intensity]);
  const rotY  = useTransform(xSp, [-0.5, 0.5], [-intensity, intensity]);
  const glX   = useTransform(xSp, [-0.5, 0.5], ['15%', '85%']);
  const glY   = useTransform(ySp, [-0.5, 0.5], ['15%', '85%']);
  const glOp  = useTransform(xSp, [-0.5, 0, 0.5], [0.2, 0.0, 0.2]);
  const glBg  = useMotionTemplate`radial-gradient(ellipse at ${glX} ${glY}, rgba(255,255,255,0.15) 0%, transparent 58%)`;

  function onMove(e) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return { ref, rotX, rotY, glBg, glOp, onMove, onLeave };
}

export default function Hero() {
  const tilt = useDashboardTilt(14);

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      {/* ── Background video / image layer ── */}
      <div className="hero-media" aria-hidden="true">
        {/*
          VIDEO: Drop a hero-video.mp4 into public/ and uncomment the <video> below.
          The poster image shows until the video loads.

          <video
            className="hero-video"
            autoPlay muted loop playsInline
            preload="none"
            poster="/hero-bg.png"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        */}
        {/* IMAGE fallback (loads fast, no 404) */}
        <img
          src="/hero-bg.png"
          alt=""
          className="hero-video"
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      {/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="hero-split">

          {/* ── LEFT COLUMN ── */}
          <div className="hero-left">
            <motion.div className="hero-badge" {...fadeUp(0)}>
              <span className="dot" />
              India&apos;s #1 AI Communication Platform
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="hero-title"
              {...fadeUp(0.1)}
            >
              <span className="hero-title-top">Powerful Messaging</span>
              {/* <br /> */}
              <span className="highlight">Solutions for</span>{' '}
              <span className="highlight-alt">Enterprise</span>
              <br />
              <span className="hero-title-bottom">Scale & Security</span>
            </motion.h1>

            <motion.p className="hero-description" {...fadeUp(0.22)}>
              Deliver billions of messages across SMS, WhatsApp, RCS & Voice — with
              end-to-end encryption, AES-256 security, and enterprise compliance built into
              every API call.
            </motion.p>

            {/* Security trust badges */}
            <motion.div className="hero-security-badges" {...fadeUp(0.3)}>
              {SECURITY_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="hero-sec-badge">
                  <Icon size={14} />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Channel Cards */}
            <div className="hero-channel-cards">
              {CHANNELS.map(({ label, color, icon: Icon, stat, bg }, i) => (
                <motion.div
                  key={label}
                  className="hero-channel-card"
                  style={{ '--ch-color': color, '--ch-bg': bg }}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    background: bg,
                    borderColor: color,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="hcc-icon">
                    <Icon size={18} />
                  </span>
                  <span className="hcc-label">{label}</span>
                  <span className="hcc-stat">{stat}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className="hero-actions" {...fadeUp(0.42)}>
              <Link href="/contact" className="btn-hero-primary btn-hero-primary--animated">
                Get Started Free →
              </Link>
              <Link href="/contact" className="btn-hero-outline">
                <span className="play-icon">▶</span> Book a Demo
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.54 } },
              }}
            >
              {STATS.map(({ value, suffix, label }) => (
                <motion.div
                  key={label}
                  className="hero-stat"
                  variants={{
                    hidden:  { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                >
                  <div className="hero-stat-value">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="hero-stat-label">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — 3-D Dashboard ── */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top floating chip */}
            <motion.div
              className="hero-float-chip"
              style={{ top: '0.5rem', right: '-0.5rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.9, duration: 0.4, ease: 'backOut' },
                scale:   { delay: 0.9, duration: 0.4, ease: 'backOut' },
                y:       { delay: 1.3, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span style={{ color: '#22c55e' }}>●</span> Live Platform
            </motion.div>

            {/* 3-D tilt wrapper on the dashboard */}
            <motion.div
              ref={tilt.ref}
              className="hero-dashboard-tilt-wrap"
              style={{
                rotateX: tilt.rotX,
                rotateY: tilt.rotY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={tilt.onMove}
              onMouseLeave={tilt.onLeave}
            >
              <div className="hero-dashboard">
                {/* Window chrome */}
                <div className="dashboard-header">
                  <div className="dashboard-dots">
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#ffbd2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <span className="dashboard-title">Ojiva AI — Live Dashboard</span>
                  <span className="dashboard-live">
                    <span className="live-dot" />
                    Live
                  </span>
                </div>

                {/* Metrics row */}
                <div className="dashboard-metrics">
                  {[
                    { label: 'Sent Today',  value: '1.24M', delta: '+12%',  pos: true },
                    { label: 'Delivered',   value: '98.4%', delta: '+0.3%', pos: true },
                    { label: 'Conversions', value: '8,432', delta: '+38%',  pos: true },
                  ].map(({ label, value, delta, pos }) => (
                    <div key={label} className="metric-tile">
                      <span className="metric-label">{label}</span>
                      <span className="metric-value">{value}</span>
                      <span className={`metric-delta ${pos ? 'positive' : 'negative'}`}>{delta}</span>
                    </div>
                  ))}
                </div>

                {/* Channel breakdown bars */}
                <div className="dashboard-channels">
                  {[
                    { name: 'Bulk SMS',     pct: 88, color: '#1B48E0', sent: '482K' },
                    { name: 'WhatsApp API', pct: 96, color: '#25D366', sent: '318K' },
                    { name: 'RCS',          pct: 94, color: '#FF6D42', sent: '226K' },
                    { name: 'Bulk Voice Call', pct: 91, color: '#7C3AED', sent: '214K' },
                  ].map(({ name, pct, color, sent }) => (
                    <div key={name} className="dash-channel-row">
                      <span className="dash-channel-name" style={{ color }}>{name}</span>
                      <div className="dash-bar-wrap">
                        <div className="dash-bar" style={{ width: `${pct}%`, background: color }} />
                      </div>
                      <span className="dash-channel-val">{sent}</span>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="dashboard-activity">
                  <span className="chart-label">Real-Time Activity</span>
                  {ACTIVITY.map(({ icon, msg, time, color }) => (
                    <div key={msg} className="activity-row">
                      <span className="activity-icon" style={{ color }}>{icon}</span>
                      <span className="activity-msg">{msg}</span>
                      <span className="activity-time">{time}</span>
                    </div>
                  ))}
                </div>

                {/* Encryption badge inside dashboard */}
                <div className="dashboard-security-bar">
                  <RiLockLine size={12} />
                  <span>AES-256 Encrypted · TLS 1.3 · E2E Secure</span>
                </div>
              </div>

              {/* Glare overlay */}
              <motion.span
                aria-hidden="true"
                className="dashboard-glare"
                style={{ background: tilt.glBg, opacity: tilt.glOp }}
              />
            </motion.div>

            {/* Bottom floating chip */}
            <motion.div
              className="hero-float-chip"
              style={{ bottom: '1rem', left: '-0.75rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 1.05, duration: 0.4, ease: 'backOut' },
                scale:   { delay: 1.05, duration: 0.4, ease: 'backOut' },
                y:       { delay: 1.6, duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              🔒 Enterprise-Grade Security
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Trusted-by strip */}
      <div className="hero-trusted">
        <div className="container">
          <p className="trusted-label">TRUSTED BY 500+ LEADING BRANDS</p>
          <div className="trusted-logos">
            {[
              'Salesforce', 'HubSpot', 'Shopify', 'Zendesk', 'Stripe',
              'WhatsApp', 'Twilio', 'Slack', 'Salesforce', 'HubSpot',
              'Shopify', 'Zendesk', 'Stripe', 'WhatsApp', 'Twilio', 'Slack',
            ].map((name, i) => (
              <span key={i} className="trusted-logo-item">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
