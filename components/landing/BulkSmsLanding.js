'use client';

import { useState } from 'react';
import Link from 'next/link';
import LandingLeadForm from './LandingLeadForm';

/* ─── DATA ────────────────────────────────────────────────── */

const STATS = [
  { val: '10M+',  lbl: 'Messages / Day'  },
  { val: '500+',  lbl: 'Businesses'       },
  { val: '99%',   lbl: 'Delivery Rate'    },
  { val: '48 hr', lbl: 'Go-Live Time'     },
  { val: 'DLT',   lbl: 'Registered'       },
];

const WHY = [
  { channel: 'Email',        stat: '20%',  lbl: 'open rate',         color: '#94a3b8', best: false },
  { channel: 'Social Media', stat: '5%',   lbl: 'organic reach',     color: '#94a3b8', best: false },
  { channel: 'Bulk SMS',     stat: '98%',  lbl: 'open rate',         color: '#60a5fa', best: true  },
];

const SMS_TYPES = [
  {
    icon: '📢',
    title: 'Promotional SMS',
    desc: 'Reach thousands of customers with offers, deals, and event campaigns. Perfect for flash sales, festive promotions, and loyalty rewards.',
    tag: 'Marketing',
    tagColor: '#60a5fa',
    tagBg: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
    note: 'Subject to DND restrictions',
  },
  {
    icon: '🔔',
    title: 'Transactional SMS',
    desc: 'Deliver critical alerts — order confirmations, payment receipts, shipping updates, and account notifications. Reaches DND numbers 24/7.',
    tag: 'DND Exempt',
    tagColor: '#34d399',
    tagBg: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
    note: 'Works on DND numbers',
  },
  {
    icon: '🔐',
    title: 'OTP SMS',
    desc: 'Lightning-fast one-time password delivery for logins, transactions, and identity verification. Sub-3 second average delivery with 99.9% success rate.',
    tag: 'Sub-3 Seconds',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.25)',
    note: 'Fastest OTP delivery in India',
  },
];

const FEATURES = [
  { icon: 'bi-shield-check',    title: 'DLT Compliant',          color: '#34d399', bg: 'rgba(52,211,153,0.12)',   desc: 'Fully TRAI DLT registered — zero legal risk with pre-approved sender IDs and message templates.' },
  { icon: 'bi-code-slash',      title: 'REST API & SDKs',         color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',   desc: 'Integrate with your app in minutes. SDKs for PHP, Python, Node.js, Java, and 10+ languages.' },
  { icon: 'bi-bar-chart-line',  title: 'Real-Time Analytics',     color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',   desc: 'Live delivery reports, CTR tracking, campaign-level analytics, and ROI dashboards.' },
  { icon: 'bi-calendar-event',  title: 'Campaign Scheduling',     color: '#a78bfa', bg: 'rgba(167,139,250,0.12)',  desc: 'Schedule SMS campaigns for any future date and time. Perfect for festive season timing.' },
  { icon: 'bi-people',          title: 'Contact Management',      color: '#fb923c', bg: 'rgba(251,146,60,0.12)',   desc: 'Upload CSV/Excel lists, create segments by city, age, or custom fields, manage opt-outs.' },
  { icon: 'bi-translate',       title: 'Multilingual Unicode',    color: '#f472b6', bg: 'rgba(244,114,182,0.12)',  desc: 'Send SMS in Hindi, Tamil, Telugu, Bengali, Marathi, and 10+ regional languages with Unicode support.' },
  { icon: 'bi-arrow-left-right', title: 'Two-Way Messaging',      color: '#34d399', bg: 'rgba(52,211,153,0.12)',   desc: 'Receive inbound replies from customers. Use for polls, confirmations, and opt-in campaigns.' },
  { icon: 'bi-person-badge',    title: 'Custom Sender ID',        color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',   desc: 'Send from your brand name (e.g. OJIVAI) instead of a random number — builds trust instantly.' },
];

const INDUSTRIES = [
  { icon: '🛒', title: 'E-Commerce & Retail',    desc: 'Order confirmations, delivery updates, cart abandonment, flash sale alerts, and return notifications.' },
  { icon: '🏦', title: 'Finance & Banking',       desc: 'OTPs, transaction alerts, payment reminders, KYC updates, and loan application status.' },
  { icon: '🏥', title: 'Healthcare',              desc: 'Appointment reminders, prescription alerts, lab test results, doctor availability, and health tips.' },
  { icon: '🎓', title: 'Education & EdTech',      desc: 'Fee reminders, exam schedules, result notifications, admission updates, and class alerts.' },
  { icon: '🚚', title: 'Logistics & Delivery',    desc: 'Shipment tracking, delivery confirmations, delay alerts, and pick-up notifications.' },
  { icon: '🏗️', title: 'Real Estate',             desc: 'Lead nurturing, property updates, site visit reminders, payment due alerts, and new launch alerts.' },
];

const STEPS = [
  {
    num: '01',
    title: 'Sign Up & Get Verified',
    desc: 'Fill the form and our team completes your DLT sender ID registration and entity verification within 48 hours.',
  },
  {
    num: '02',
    title: 'Upload Contacts or Connect API',
    desc: 'Import your customer list via CSV, Excel, or connect directly to your CRM, e-commerce, or custom app via REST API.',
  },
  {
    num: '03',
    title: 'Launch & Track Campaigns',
    desc: 'Create your message, schedule or send instantly, and monitor live delivery rates, CTR, and campaign ROI from your dashboard.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Switched to Ojiva AI for bulk SMS — delivery rate went from 72% to 99.1% overnight. The DLT registration was handled end-to-end by their team.',
    name: 'Vikram Joshi', role: 'CTO', company: 'Zippy Logistics',
    initials: 'VJ', avatarBg: '#ffe4e6', avatarColor: '#be123c', result: '99.1% Delivery',
  },
  {
    quote: 'We send 2 lakh OTPs daily. Ojiva AI delivers sub-3 second avg with zero failures. Our user drop-off at login went from 18% to under 2%.',
    name: 'Priya Nair', role: 'Head of Product', company: 'FinNova Technologies',
    initials: 'PN', avatarBg: '#dcfce7', avatarColor: '#15803d', result: '2% Login Drop-off',
  },
  {
    quote: 'Flash sale SMS campaigns through Ojiva AI now drive ₹40L+ in revenue every month. The scheduling and segmentation features are top-notch.',
    name: 'Rahul Sharma', role: 'Marketing Director', company: 'Nexora Commerce',
    initials: 'RS', avatarBg: '#dbeafe', avatarColor: '#1d4ed8', result: '₹40L+ Monthly Revenue',
  },
];

/* ─── FAQ Accordion ───────────────────────────────────────── */
function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="slp-faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`slp-faq-item${open === i ? ' open' : ''}`}>
          <div className="slp-faq-q" onClick={() => setOpen(open === i ? null : i)} role="button" aria-expanded={open === i}>
            <span>{faq.q}</span>
            <span className="slp-faq-icon">
              <i className="bi bi-plus" />
            </span>
          </div>
          <p className="slp-faq-a">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function BulkSmsLanding({ faqs }) {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="slp-hero">
        <div className="slp-hero-grid" aria-hidden="true" />
        <div className="slp-orb slp-orb--1" aria-hidden="true" />
        <div className="slp-orb slp-orb--2" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4 g-xl-5">

            {/* Left — copy */}
            <div className="col-12 col-lg-6">
              <div className="slp-badge">
                <span className="slp-badge-dot" />
                India&apos;s #1 Bulk SMS Provider — DLT Registered
              </div>

              <h1 className="slp-hero-h1">
                Send Bulk SMS to{' '}
                <span className="slp-hero-highlight">1.2 Billion</span>{' '}
                Indian Mobiles
              </h1>

              <p className="slp-hero-desc">
                India&apos;s most trusted bulk SMS service provider — 99% delivery rate,
                sub-3 second OTP, DLT compliant, 10M+ messages every day. Trusted by 500+ businesses.
              </p>

              <div className="slp-trust-pills">
                {['DLT Registered', '99% Delivery', 'AES-256 Encrypted', '48-Hr Go-Live', '24/7 Support'].map(p => (
                  <span key={p} className="slp-trust-pill">
                    <i className="bi bi-check-circle-fill" /> {p}
                  </span>
                ))}
              </div>

              <div className="slp-proof">
                <span className="slp-proof-stars">★★★★★</span>
                <span>Trusted by <strong style={{ color: '#e2e8f0' }}>500+ businesses</strong> across India</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="slp-form-card" style={{ width: '100%', maxWidth: '420px' }}>
                <LandingLeadForm
                  source="bulk-sms"
                  title="Get Free Bulk SMS Trial"
                  subtitle="Go live in 48 hours. No credit card required."
                  submitLabel="Start Free Trial →"
                  thankYouUrl="/book-demo"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS BAR ═════════════════════════════════════════════ */}
      <div className="slp-stats-bar">
        <div className="container">
          <div className="slp-stats-inner">
            {STATS.map(({ val, lbl }) => (
              <div key={lbl} className="slp-stat">
                <span className="slp-stat-val">{val}</span>
                <span className="slp-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ WHY BULK SMS ══════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container text-center">
          <p className="slp-eyebrow" style={{ color: '#60a5fa' }}>Channel Comparison</p>
          <h2 className="slp-section-title">Why Bulk SMS Still Wins in 2026</h2>
          <p className="slp-section-desc">
            No other marketing channel comes close to bulk SMS for open rates, speed, and reach across
            India&apos;s 1.2 billion mobile users.
          </p>

          <div className="slp-why-grid">
            {WHY.map(({ channel, stat, lbl, color, best }) => (
              <div key={channel} className={`slp-why-card${best ? ' slp-why-card--best' : ''}`}>
                {best && (
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#34d399', marginBottom: '0.5rem' }}>
                    ✅ Best Channel
                  </div>
                )}
                <div className="slp-why-channel">{channel}</div>
                <div className="slp-why-stat" style={{ color }}>{stat}</div>
                <div className="slp-why-sublbl">{lbl}</div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(148,163,184,0.8)' }}>
            SMS messages are read within <strong style={{ color: '#e2e8f0' }}>3 minutes</strong> of receipt by 95% of recipients
          </p>
        </div>
      </section>

      {/* ══ 3 TYPES OF SMS ════════════════════════════════════════ */}
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#34d399' }}>Message Types</p>
            <h2 className="slp-section-title">3 Types of Bulk SMS We Support</h2>
            <p className="slp-section-desc">
              Choose the right SMS type for your use case — we handle DLT registration,
              template approvals, and routing for all three.
            </p>
          </div>

          <div className="slp-type-grid">
            {SMS_TYPES.map(({ icon, title, desc, tag, tagColor, tagBg, border, note }) => (
              <div key={title} className="slp-type-card" style={{ borderColor: border }}>
                <div className="slp-type-icon">{icon}</div>
                <div className="slp-type-title">{title}</div>
                <p className="slp-type-desc">{desc}</p>
                <span className="slp-type-tag" style={{ color: tagColor, background: tagBg }}>{tag}</span>
                <p style={{ fontSize: '0.75rem', color: 'rgba(148,163,184,0.75)', marginTop: '0.75rem', marginBottom: 0 }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES GRID ═════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>Platform Features</p>
            <h2 className="slp-section-title">Everything Your Bulk SMS Campaign Needs</h2>
            <p className="slp-section-desc">
              Built for Indian businesses — from startups sending 10,000 messages to enterprises
              sending 10 million messages a day.
            </p>
          </div>

          <div className="slp-card-grid">
            {FEATURES.map(({ icon, title, color, bg, desc }) => (
              <div key={title} className="slp-feature-card">
                <div className="slp-feature-icon" style={{ background: bg, color }}>
                  <i className={`bi ${icon}`} />
                </div>
                <div className="slp-feature-title">{title}</div>
                <p className="slp-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ════════════════════════════════════════════ */}
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>Industries</p>
            <h2 className="slp-section-title">Built for Every Indian Business</h2>
            <p className="slp-section-desc">
              From fintech to healthcare, logistics to e-commerce — Ojiva AI powers bulk SMS
              campaigns across every major industry vertical in India.
            </p>
          </div>

          <div className="slp-industry-grid">
            {INDUSTRIES.map(({ icon, title, desc }) => (
              <div key={title} className="slp-industry-card">
                <div className="slp-industry-icon">{icon}</div>
                <div>
                  <div className="slp-industry-title">{title}</div>
                  <p className="slp-industry-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#60a5fa' }}>Get Started</p>
            <h2 className="slp-section-title">Go Live in 48 Hours — Here&apos;s How</h2>
            <p className="slp-section-desc">
              No complex setup. No long contracts. Our team handles everything so you can start
              sending bulk SMS in India as fast as possible.
            </p>
          </div>

          <div className="slp-steps-grid">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="slp-step">
                <div className="slp-step-num">{num}</div>
                <div className="slp-step-title">{title}</div>
                <p className="slp-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#34d399' }}>Social Proof</p>
            <h2 className="slp-section-title">Trusted by 500+ Indian Businesses</h2>
          </div>

          <div className="slp-test-grid">
            {TESTIMONIALS.map(({ quote, name, role, company, initials, avatarBg, avatarColor, result }) => (
              <div key={name} className="slp-test-card">
                <div className="slp-test-stars">★★★★★</div>
                <p className="slp-test-quote">&ldquo;{quote}&rdquo;</p>
                <div className="slp-test-meta">
                  <div className="slp-test-avatar" style={{ background: avatarBg, color: avatarColor }}>
                    {initials}
                  </div>
                  <div>
                    <p className="slp-test-name">{name}</p>
                    <p className="slp-test-role">{role} · {company}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textAlign: 'right' }}>
                    {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>FAQ</p>
            <h2 className="slp-section-title">Frequently Asked Questions</h2>
            <p className="slp-section-desc">
              Everything you need to know about Ojiva AI&apos;s bulk SMS service in India.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />

          <div className="text-center mt-5">
            <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Have more questions? We&apos;re happy to help.
            </p>
            <Link href="/contact" className="slp-btn-outline">
              Talk to Our Team <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
      <section className="slp-cta-section">
        <div className="container">
          <h2 className="slp-cta-title">Ready to Send Bulk SMS at Scale?</h2>
          <p className="slp-cta-desc">
            Join 500+ Indian businesses delivering 10M+ messages every day with Ojiva AI.
            No setup fees. DLT compliant. Go live in 48 hours.
          </p>
          <div className="slp-cta-actions">
            <Link href="/contact" className="slp-btn-primary">
              Start Free Trial <i className="bi bi-arrow-right" />
            </Link>
            <Link href="/pricing" className="slp-btn-outline">
              View Pricing
            </Link>
            <Link href="/book-demo" className="slp-btn-outline">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
