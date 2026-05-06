'use client';

import { useState } from 'react';
import Link from 'next/link';
import LandingLeadForm from './LandingLeadForm';

/* ─── DATA ────────────────────────────────────────────────── */

const STATS = [
  { val: '94%',   lbl: 'Read Rate'        },
  { val: '3×',    lbl: 'Higher CTR'       },
  { val: '1B+',   lbl: 'Android Users'    },
  { val: 'Verified', lbl: 'Sender ID'     },
  { val: '48 hr', lbl: 'Activation'       },
];

const COMPARE_ROWS = [
  { feature: 'Verified Brand Identity', sms: false, rcs: true  },
  { feature: 'Images & Rich Media',     sms: false, rcs: true  },
  { feature: 'Interactive Buttons',     sms: false, rcs: true  },
  { feature: 'Product Carousels',       sms: false, rcs: true  },
  { feature: 'Real-Time Read Receipts', sms: false, rcs: true  },
  { feature: 'Suggested Replies',       sms: false, rcs: true  },
  { feature: 'App Install Required',    sms: false, rcs: false },
  { feature: 'Read Rate',               sms: '45%', rcs: '94%' },
  { feature: 'Average CTR',             sms: '2-5%', rcs: '15-20%' },
  { feature: 'DLT Compliant',           sms: true,  rcs: true  },
];

const RCS_FEATURES = [
  {
    icon: 'bi-patch-check',
    title: 'Verified Business Identity',
    color: '#34d399', bg: 'rgba(52,211,153,0.12)',
    desc: 'Your logo, business name, and a verified tick appear on every message you send — eliminating spoofing and building instant customer trust.',
  },
  {
    icon: 'bi-image',
    title: 'Rich Cards & Carousels',
    color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',
    desc: 'Showcase products, services, and offers with full-width images, titles, descriptions, and CTA buttons — all inside the native messaging app.',
  },
  {
    icon: 'bi-hand-index',
    title: 'Interactive CTA Buttons',
    color: '#a78bfa', bg: 'rgba(167,139,250,0.12)',
    desc: 'Add "Buy Now", "Book Appointment", "Track Order", "Call Us" buttons directly in the message. One tap drives immediate conversion.',
  },
  {
    icon: 'bi-eye',
    title: 'Real-Time Read Receipts',
    color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',
    desc: 'See exactly when each recipient reads your message. Optimise send timing and follow-up sequences with accurate engagement data.',
  },
  {
    icon: 'bi-reply',
    title: 'Suggested Quick Replies',
    color: '#fb923c', bg: 'rgba(251,146,60,0.12)',
    desc: 'Pre-set reply options guide customers to respond instantly — "Yes, Confirm", "Reschedule", "Need Help". Reduces friction, increases response rates.',
  },
  {
    icon: 'bi-bar-chart-line',
    title: 'Campaign Analytics',
    color: '#f472b6', bg: 'rgba(244,114,182,0.12)',
    desc: 'Delivery rates, read rates, button click tracking, carousel interactions — all in real-time. Far deeper insights than SMS ever provided.',
  },
];

const USE_CASES = [
  {
    icon: '🛍️',
    title: 'Retail & E-Commerce',
    desc: 'Send product carousels with "Shop Now" buttons, flash sale announcements with countdown timers, abandoned cart recovery with product images.',
  },
  {
    icon: '🏦',
    title: 'Banking & Finance',
    desc: 'Verified transaction confirmations (no spoofing), loan offers with "Apply Now" buttons, investment opportunities with branded identity.',
  },
  {
    icon: '✈️',
    title: 'Travel & Hospitality',
    desc: 'Rich boarding passes with QR codes, hotel confirmations with property images, "Modify Booking" interactive buttons.',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Appointment cards with "Confirm/Reschedule" buttons, doctor profile rich cards, medication reminders with verified hospital branding.',
  },
  {
    icon: '🎓',
    title: 'Education & EdTech',
    desc: 'Course previews with video thumbnails, admission updates with "Apply Now" CTAs, exam result notifications with college branding.',
  },
  {
    icon: '🚚',
    title: 'Logistics',
    desc: 'Live shipment tracking cards with map previews, delivery confirmation with "Rate Experience" quick reply, address update interactive flows.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Submit Brand Details',
    desc: 'Provide your business name, logo, website, and use case. Ojiva AI handles the Google RCS brand verification submission on your behalf.',
  },
  {
    num: '02',
    title: 'Get Google-Verified',
    desc: 'Receive your verified sender ID with your business name and logo — typically approved within 3–7 business days.',
  },
  {
    num: '03',
    title: 'Build Rich Templates',
    desc: 'Use our template builder to create rich cards, carousels, and interactive buttons. Our team reviews and optimises every template for engagement.',
  },
  {
    num: '04',
    title: 'Launch with Analytics',
    desc: 'Send your first RCS campaign and watch real-time read rates, CTR, and button interactions roll in on your live dashboard.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Switched from plain SMS to RCS for our product carousel campaigns. CTR jumped from 3% to 18% overnight. The verified badge alone doubled our conversions.',
    name: 'Meera Kapoor', role: 'Head of Digital', company: 'FashionForward India',
    initials: 'MK', avatarBg: '#ede9fe', avatarColor: '#6d28d9', result: '18% CTR',
  },
  {
    quote: 'Our banking clients are thrilled — RCS messages with verified identity and interactive payment links replaced 4 separate WhatsApp templates. 40% fewer queries.',
    name: 'Arun Menon', role: 'VP Technology', company: 'FinServe Solutions',
    initials: 'AM', avatarBg: '#dcfce7', avatarColor: '#15803d', result: '40% Fewer Queries',
  },
  {
    quote: 'Appointment reminders with "Confirm/Reschedule" buttons cut our no-show rate from 28% to 6%. The ROI from RCS is 4× better than SMS for us.',
    name: 'Dr. Sunita Rao', role: 'Operations Head', company: 'HealthFirst Clinics',
    initials: 'SR', avatarBg: '#fef9c3', avatarColor: '#b45309', result: 'No-shows down 79%',
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
            <span className="slp-faq-icon"><i className="bi bi-plus" /></span>
          </div>
          <p className="slp-faq-a">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function RcsMessagingLanding({ faqs }) {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="slp-hero" style={{ '--slp-accent': '#22d3ee' }}>
        <div className="slp-hero-grid" aria-hidden="true" />
        <div className="slp-orb slp-orb--cyan" aria-hidden="true" />
        <div className="slp-orb slp-orb--2"    aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4 g-xl-5">

            {/* Left — copy */}
            <div className="col-12 col-lg-6">
              <div className="slp-badge" style={{ background: 'rgba(34,211,238,0.12)', borderColor: 'rgba(34,211,238,0.35)', color: '#67e8f9' }}>
                <span className="slp-badge-dot" style={{ background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }} />
                Google-Verified RCS Business Messaging
              </div>

              <h1 className="slp-hero-h1">
                RCS Messaging India —{' '}
                <span style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Rich Messages
                </span>{' '}
                That Get 3× More Clicks
              </h1>

              <p className="slp-hero-desc">
                Upgrade from plain SMS to RCS — verified brand identity, interactive buttons,
                product carousels, and real-time read receipts. 94% read rate. No app needed.
              </p>

              <div className="slp-trust-pills">
                {['Google Verified', '94% Read Rate', '3× Higher CTR', 'No App Download', 'DLT Compliant'].map(p => (
                  <span key={p} className="slp-trust-pill">
                    <i className="bi bi-check-circle-fill" style={{ color: '#22d3ee' }} /> {p}
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
                  source="rcs-messaging"
                  title="Get Free RCS Access"
                  subtitle="Google verification handled by us. Go live in 48 hrs."
                  submitLabel="Get Free RCS Access →"
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
                <span className="slp-stat-val" style={{ color: '#22d3ee' }}>{val}</span>
                <span className="slp-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ RCS vs SMS COMPARISON ═════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>The Upgrade</p>
            <h2 className="slp-section-title">RCS vs SMS — The Difference is Clear</h2>
            <p className="slp-section-desc">
              Your customers already live in their messaging app. RCS makes every business
              message feel like a premium branded experience.
            </p>
          </div>

          <div className="slp-compare-table-wrap" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <table className="slp-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SMS</th>
                  <th className="highlight">RCS (Ojiva AI)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(({ feature, sms, rcs }) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td>
                      {typeof sms === 'boolean'
                        ? <span className={sms ? 'slp-check' : 'slp-cross'}>{sms ? '✓' : '✕'}</span>
                        : <span style={{ color: '#94a3b8', fontWeight: 600 }}>{sms}</span>}
                    </td>
                    <td className="highlight">
                      {typeof rcs === 'boolean'
                        ? <span className={rcs ? 'slp-check' : 'slp-cross'}>{rcs ? '✓' : '✕'}</span>
                        : <span style={{ color: '#22d3ee', fontWeight: 700 }}>{rcs}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ RCS FEATURES ══════════════════════════════════════════ */}
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>Platform Capabilities</p>
            <h2 className="slp-section-title">Rich Features That Drive Engagement</h2>
            <p className="slp-section-desc">
              Everything you need to turn a plain text message into an interactive brand experience
              that customers actually engage with.
            </p>
          </div>

          <div className="slp-card-grid">
            {RCS_FEATURES.map(({ icon, title, color, bg, desc }) => (
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

      {/* ══ USE CASES ═════════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#34d399' }}>Use Cases</p>
            <h2 className="slp-section-title">RCS Messaging Across Every Industry</h2>
            <p className="slp-section-desc">
              From retail product showcases to verified banking alerts — RCS Business Messaging
              elevates customer communication in every sector.
            </p>
          </div>

          <div className="slp-industry-grid">
            {USE_CASES.map(({ icon, title, desc }) => (
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
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#60a5fa' }}>Get Started</p>
            <h2 className="slp-section-title">Go Live with RCS in 4 Simple Steps</h2>
            <p className="slp-section-desc">
              Our team manages brand verification, template setup, and API integration —
              so you can focus on your campaigns.
            </p>
          </div>

          <div className="slp-steps-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="slp-step">
                <div className="slp-step-num" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 8px 24px rgba(34,211,238,0.25)' }}>
                  {num}
                </div>
                <div className="slp-step-title">{title}</div>
                <p className="slp-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="slp-section slp-section--dark">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>Results</p>
            <h2 className="slp-section-title">What Our RCS Customers Say</h2>
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
                  <div style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, color: '#22d3ee', textAlign: 'right' }}>
                    {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section className="slp-section slp-section--alt">
        <div className="container">
          <div className="text-center mb-5">
            <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>FAQ</p>
            <h2 className="slp-section-title">RCS Messaging — Your Questions Answered</h2>
            <p className="slp-section-desc">
              Everything you need to know about RCS Business Messaging in India.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />

          <div className="text-center mt-5">
            <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Have more questions? Our RCS specialists are here to help.
            </p>
            <Link href="/contact" className="slp-btn-outline">
              Talk to Our Team <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
      <section className="slp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(96,165,250,0.10) 100%)', borderColor: 'rgba(34,211,238,0.2)' }}>
        <div className="container">
          <h2 className="slp-cta-title">Start Sending Rich RCS Messages Today</h2>
          <p className="slp-cta-desc">
            Get Google-verified and deliver brand-perfect interactive messages to 1B+ Android users.
            Ojiva AI handles the setup — you focus on the results.
          </p>
          <div className="slp-cta-actions">
            <Link href="/contact" className="slp-btn-primary" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)' }}>
              Get Free RCS Access <i className="bi bi-arrow-right" />
            </Link>
            <Link href="/rcs" className="slp-btn-outline">
              Explore RCS Features
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
