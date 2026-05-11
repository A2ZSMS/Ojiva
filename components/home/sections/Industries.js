'use client';

import { motion } from 'framer-motion';

/* ── Industry data ────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: 'bi-bank2',
    label: 'Banking &\nFinance',
    bg: '#e8f0fe',
    color: '#1B48E0',
    desc: 'OTP, alerts & KYC',
  },
  {
    icon: 'bi-cart3',
    label: 'E-commerce',
    bg: '#fef3c7',
    color: '#d97706',
    desc: 'Orders & promos',
  },
  {
    icon: 'bi-heart-pulse',
    label: 'Healthcare',
    bg: '#fee2e2',
    color: '#dc2626',
    desc: 'Appointments & reports',
  },
  {
    icon: 'bi-mortarboard',
    label: 'Education',
    bg: '#ede9fe',
    color: '#7c3aed',
    desc: 'Admissions & alerts',
  },
  {
    icon: 'bi-house',
    label: 'Real Estate',
    bg: '#d1fae5',
    color: '#059669',
    desc: 'Lead nurturing',
  },
  {
    icon: 'bi-truck',
    label: 'Logistics',
    bg: '#ffedd5',
    color: '#ea580c',
    desc: 'Delivery tracking',
  },
  {
    icon: 'bi-umbrella',
    label: 'Insurance',
    bg: '#cffafe',
    color: '#0891b2',
    desc: 'Renewals & claims',
  },
  {
    icon: 'bi-airplane',
    label: 'Travel',
    bg: '#e0f2fe',
    color: '#0284c7',
    desc: 'Bookings & updates',
  },
  {
    icon: 'bi-bag-heart',
    label: 'Retail',
    bg: '#fce7f3',
    color: '#db2777',
    desc: 'Offers & loyalty',
  },
  {
    icon: 'bi-three-dots',
    label: '& Many More',
    bg: '#f3f4f6',
    color: '#6b7280',
    desc: 'Any business',
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Component ────────────────────────────────────────────── */
export default function Industries() {
  return (
    <section className="ind-section">
      <div className="container">

        {/* Header */}
        <motion.div className="ind-header" {...fade(0)}>
          <span className="ind-tag">FOR EVERY INDUSTRY</span>
          <h2 className="ind-heading">
            Built for<br />
            <span className="ind-heading-accent">Every Business</span>
          </h2>
          <p className="ind-sub">
            From startups to enterprises — if you have customers, Ojiva AI is for you.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.label}
              className="ind-card"
              {...fade(0.04 * i)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div
                className="ind-icon-wrap"
                style={{ background: ind.bg }}
              >
                <i
                  className={`bi ${ind.icon} ind-icon`}
                  style={{ color: ind.color }}
                />
              </div>
              <span className="ind-label">
                {ind.label.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < ind.label.split('\n').length - 1 && <br />}</span>
                ))}
              </span>
              <span className="ind-desc">{ind.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div className="ind-tagline" {...fade(0.45)}>
          <span className="ind-check">
            <i className="bi bi-check-circle-fill" />
          </span>
          <span>
            Any business. Any industry.&nbsp;
            <strong>Ojiva AI is for you.</strong>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
