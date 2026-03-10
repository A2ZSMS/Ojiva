'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedCounter, FloatingElement } from './Animations';

const STATS = [
  { value: 10, suffix: 'M+', label: 'Messages Delivered' },
  { value: 98, suffix: '%', label: 'Delivery Rate' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
  { value: 3, suffix: 'B+', label: 'API Calls / Year' },
];

const MODULES = [
  { icon: '💬', label: 'AI Messaging', color: 'rgba(37,99,235,0.1)', active: true },
  { icon: '🎙️', label: 'AI Voice', color: 'rgba(6,182,212,0.1)', active: false },
  { icon: '🎯', label: 'Lead Intel', color: 'rgba(139,92,246,0.1)', active: false },
  { icon: '⚡', label: 'Workflows', color: 'rgba(34,197,94,0.1)', active: false },
];

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">

      {/* ── Background blobs ── */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* ── Left: Copy ── */}
          <div className="col-12 col-lg-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-badge">
                <span className="dot" />
                AI-Powered Communication Platform
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Automate Every
              <br />
              <span className="highlight">Business Conversation</span>
              <br />
              at Scale
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Ojiva AI orchestrates intelligent SMS, WhatsApp, Voice, and Lead workflows
              so your teams spend time closing deals — not managing queues.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/contact" className="btn-ojiva-primary">
                Book a Free Demo
              </Link>
              <Link href="/platform" className="btn-ojiva-outline">
                Explore Platform →
              </Link>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {['SOC 2 Compliant', 'GDPR Ready', 'Enterprise SLA', '24/7 Support'].map((t) => (
                <span key={t} className="trust-chip">{t}</span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {STATS.map(({ value, suffix, label }) => (
                <div key={label} className="hero-stat">
                  <div className="hero-stat-value">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="hero-stat-label">{label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right: Live Dashboard ── */}
          <div className="col-12 col-lg-6">
            <motion.div
              className="hero-dashboard"
              initial={{ opacity: 0, x: 60, rotateY: 8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* Dashboard Header */}
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="dashboard-title">Ojiva AI Platform</span>
                <span className="dashboard-live">
                  <span className="live-dot" /> Live
                </span>
              </div>

              {/* Module Tabs */}
              <div className="dashboard-tabs">
                {MODULES.map(({ icon, label, color, active }) => (
                  <div key={label} className={`dashboard-tab ${active ? 'active' : ''}`}>
                    <span className="tab-icon" style={{ background: color }}>{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Metric Row */}
              <div className="dashboard-metrics">
                {[
                  { label: 'Messages Today', value: '24,819', delta: '+12%', positive: true },
                  { label: 'Leads Routed', value: '1,204', delta: '+8%', positive: true },
                  { label: 'Avg. Response', value: '1.2s', delta: '-34%', positive: true },
                ].map(({ label, value, delta, positive }) => (
                  <div key={label} className="metric-tile">
                    <span className="metric-label">{label}</span>
                    <span className="metric-value">{value}</span>
                    <span className={`metric-delta ${positive ? 'positive' : 'negative'}`}>{delta}</span>
                  </div>
                ))}
              </div>

              {/* Chart Bar Visual */}
              <div className="dashboard-chart">
                <span className="chart-label">Message Volume · 7-day trend</span>
                <div className="chart-bars">
                  {[65, 80, 55, 90, 72, 95, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className="chart-bar"
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.07, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <div className="chart-days">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="dashboard-activity">
                {[
                  { icon: '💬', msg: 'WhatsApp campaign sent to 3,200 contacts', time: '2m ago', color: '#22c55e' },
                  { icon: '🎯', msg: 'Lead score updated: Acme Corp → Hot', time: '5m ago', color: '#3b82f6' },
                  { icon: '🎙️', msg: 'AI voice call completed — 94% intent match', time: '9m ago', color: '#a855f7' },
                ].map(({ icon, msg, time, color }) => (
                  <div key={msg} className="activity-row">
                    <span className="activity-icon" style={{ color }}>{icon}</span>
                    <span className="activity-msg">{msg}</span>
                    <span className="activity-time">{time}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Floating badges */}
            <FloatingElement amplitude={10} duration={3.5} delay={0} className="float-badge float-badge-1">
              <div className="hero-float-chip">
                <span>⚡</span> 99.9% Uptime
              </div>
            </FloatingElement>
            <FloatingElement amplitude={8} duration={4} delay={1} className="float-badge float-badge-2">
              <div className="hero-float-chip">
                <span>🔒</span> SOC 2 Certified
              </div>
            </FloatingElement>

          </div>
        </div>
      </div>
    </section>
  );
}
