'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LandingLeadForm from './LandingLeadForm';

/* ─── DATA ────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    quote: 'Switched from WATI — onboarding was 10× faster and the India support team actually picks up. Lead response time dropped from 4 hours to under 60 seconds.',
    name: 'Rahul Sharma', role: 'Head of Growth', company: 'FinNova Technologies',
    initials: 'RS', avatarBg: '#dbeafe', avatarColor: '#1d4ed8',
    result: '+38% Conversions', resultColor: '#22c55e', stars: 5,
  },
  {
    quote: 'We\'re a D2C brand doing ₹2Cr/month. WhatsApp campaigns through Ojiva AI now drive 40% of our revenue. No other channel comes close to that 94% read rate.',
    name: 'Priya Nair', role: 'Marketing Director', company: 'Nexora Commerce',
    initials: 'PN', avatarBg: '#dcfce7', avatarColor: '#15803d',
    result: '40% Revenue from WhatsApp', resultColor: '#a855f7', stars: 5,
  },
  {
    quote: 'We replaced 3 SDRs with Ojiva AI\'s WhatsApp chatbot. Same pipeline, 60% lower cost. The chatbot qualifies leads better — and it never calls in sick.',
    name: 'Marcus D\'Souza', role: 'VP of Sales', company: 'ProScale SaaS',
    initials: 'MD', avatarBg: '#ede9fe', avatarColor: '#6d28d9',
    result: '60% Cost Reduction', resultColor: '#3b82f6', stars: 5,
  },
  {
    quote: 'Our appointment no-show rate dropped from 34% to 8% after deploying Ojiva AI\'s WhatsApp reminders. That alone saves us ₹4L per month in lost slots.',
    name: 'Dr. Sunita Rao', role: 'Operations Head', company: 'HealthFirst Clinics',
    initials: 'SR', avatarBg: '#fef9c3', avatarColor: '#b45309',
    result: 'No-shows dropped 76%', resultColor: '#ef4444', stars: 5,
  },
  {
    quote: 'We send 2 lakh order-status messages a day. Before Ojiva AI, our SMS delivery rate was 72%. Now it\'s 99.1% on WhatsApp and customer complaints dropped 40%.',
    name: 'Vikram Joshi', role: 'CTO', company: 'Zippy Logistics',
    initials: 'VJ', avatarBg: '#ffe4e6', avatarColor: '#be123c',
    result: '99.1% Delivery Rate', resultColor: '#06b6d4', stars: 5,
  },
  {
    quote: 'Within 6 weeks of going live, our WhatsApp chatbot was handling 83% of customer queries without a human agent. Our CSAT score went from 3.6 to 4.8.',
    name: 'Ananya Mehta', role: 'Customer Success Lead', company: 'EdSpark Learning',
    initials: 'AM', avatarBg: '#d1fae5', avatarColor: '#065f46',
    result: '83% Queries Auto-Resolved', resultColor: '#22c55e', stars: 5,
  },
];

const BENEFITS = [
  {
    icon: 'bi-broadcast',
    title: 'Send to 10,00,000+ Contacts Instantly',
    desc: 'Stop sending 500 emails and hoping. Blast promotional, transactional, and interactive WhatsApp messages to your entire list in one click — with 98% guaranteed open rate.',
    color: '#25d366', bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: 'bi-robot',
    title: 'Automate Replies 24/7 — Zero Coding',
    desc: 'Your sales team sleeps. Your WhatsApp bot doesn\'t. Set up keyword triggers, qualify leads, take orders, and route hot prospects to live agents — all without writing a line of code.',
    color: '#1B48E0', bg: 'rgba(27,72,224,0.12)',
  },
  {
    icon: 'bi-image',
    title: 'Rich Catalogues, Buttons & PDFs',
    desc: 'Plain text is dead. Send product catalogues, interactive CTA buttons, quick-reply menus, images, videos, and PDF brochures — the kind of messages that actually get responses.',
    color: '#7C3AED', bg: 'rgba(124,58,237,0.12)',
  },
  {
    icon: 'bi-shield-check',
    title: 'No DLT Required. 100% Meta Compliant.',
    desc: 'Unlike SMS, WhatsApp does NOT need TRAI DLT registration. We handle all Meta template approvals for you. Go live in 48 hours with zero regulatory headaches.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Sub-3 Second Delivery. 99.9% Uptime.',
    desc: 'Transactional OTPs, order updates, and payment reminders delivered in under 3 seconds. Our enterprise-grade infrastructure guarantees 99.9% uptime with zero message drops.',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.12)',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'See Exactly What\'s Working — Live',
    desc: 'Delivery receipts, read rates, click-throughs, reply rates, and campaign ROI all on a single live dashboard. Know which campaign made money and which one to cut.',
    color: '#ec4899', bg: 'rgba(236,72,153,0.12)',
  },
];

const MESSAGE_TYPES = [
  {
    icon: 'bi-key-fill',
    title: 'OTP & Authentication',
    desc: 'Deliver one-time passwords in under 3 seconds. Higher read rates than SMS — no more "OTP not received" support tickets.',
    example: '🔐 Your Ojiva AI OTP is 482913. Valid for 10 minutes. Do not share.',
    color: '#1B48E0', bg: 'rgba(27,72,224,0.08)',
  },
  {
    icon: 'bi-bag-check-fill',
    title: 'Order & Shipment Updates',
    desc: 'Automated order confirmations, dispatch alerts, and delivery tracking links. Reduce "where is my order?" calls by 60%.',
    example: '📦 Your order #OJ8821 has been shipped! Track here: ojiva.ai/track/8821',
    color: '#25d366', bg: 'rgba(37,211,102,0.08)',
  },
  {
    icon: 'bi-calendar-check-fill',
    title: 'Appointment Reminders',
    desc: 'Cut no-shows by up to 76% with automated reminders 24 hrs and 1 hr before appointments. Patients can confirm or reschedule in one tap.',
    example: '📅 Reminder: Your appointment with Dr. Rao is tomorrow at 10:30 AM. Reply YES to confirm.',
    color: '#7C3AED', bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: 'bi-credit-card-fill',
    title: 'Payment Links & Alerts',
    desc: 'Send clickable Razorpay/Instamojo payment links, EMI reminders, and payment confirmations directly on WhatsApp.',
    example: '💳 Your invoice ₹4,200 is due. Pay now: rzp.io/l/ojiva8821 — offer expires tonight.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: 'bi-megaphone-fill',
    title: 'Promotions & Campaigns',
    desc: 'Run flash sales, festival offers, and re-engagement campaigns with image carousels, CTAs, and quick-reply buttons that drive 4–8× higher CTR than email.',
    example: '🎉 FLASH SALE! 40% off till midnight. Shop now 👉 [View Catalogue] [Get Coupon]',
    color: '#ec4899', bg: 'rgba(236,72,153,0.08)',
  },
  {
    icon: 'bi-headset',
    title: 'Live Support & Chatbot',
    desc: 'Handle FAQs, returns, and complaints with an AI chatbot. Route complex issues to a human agent — all inside WhatsApp, the app your customers already use.',
    example: '👋 Hi Rahul! How can I help today? [Track Order] [Return Item] [Talk to Agent]',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.08)',
  },
];

const INDUSTRIES = [
  {
    icon: 'bi-bag-heart-fill',
    label: 'E-commerce & D2C',
    stat: '4.8×', statLabel: 'higher CTR vs email',
    uses: ['Cart abandonment recovery', 'Order & delivery updates', 'Flash sale campaigns', 'Product catalogues'],
    color: '#ec4899',
  },
  {
    icon: 'bi-hospital-fill',
    label: 'Healthcare & Clinics',
    stat: '76%', statLabel: 'fewer no-shows',
    uses: ['Appointment reminders', 'Lab report delivery', 'Prescription follow-ups', 'Health tips & offers'],
    color: '#22c55e',
  },
  {
    icon: 'bi-bank2',
    label: 'Banking & Finance',
    stat: '99%', statLabel: 'OTP delivery rate',
    uses: ['OTP & 2FA authentication', 'EMI due reminders', 'Loan approval alerts', 'Statement delivery'],
    color: '#1B48E0',
  },
  {
    icon: 'bi-buildings-fill',
    label: 'Real Estate',
    stat: '3×', statLabel: 'more site visit bookings',
    uses: ['New property launches', 'Site visit reminders', 'EMI calculator links', 'Document collection'],
    color: '#f59e0b',
  },
  {
    icon: 'bi-mortarboard-fill',
    label: 'EdTech & Education',
    stat: '85%', statLabel: 'message open rate',
    uses: ['Admission enquiry follow-ups', 'Fee due reminders', 'Class schedule updates', 'Result notifications'],
    color: '#7C3AED',
  },
  {
    icon: 'bi-truck',
    label: 'Logistics & Delivery',
    stat: '60%', statLabel: 'fewer WISMO calls',
    uses: ['Real-time shipment tracking', 'Delivery OTP verification', 'Failed delivery alerts', 'Driver assignment'],
    color: '#06b6d4',
  },
];

const COMPARE_ROWS = [
  { feature: 'Official Meta BSP',             ojiva: true,  wati: true,  interakt: true,  aisensy: true  },
  { feature: 'India-Based Support (IST)',      ojiva: true,  wati: false, interakt: true,  aisensy: true  },
  { feature: '48-Hour Go-Live',               ojiva: true,  wati: false, interakt: false, aisensy: false },
  { feature: 'No DLT Registration Needed',    ojiva: true,  wati: true,  interakt: true,  aisensy: true  },
  { feature: 'No Per-Agent Fees',             ojiva: true,  wati: false, interakt: false, aisensy: false },
  { feature: 'Transparent Meta Rate Card',    ojiva: true,  wati: false, interakt: false, aisensy: false },
  { feature: 'Bulk Broadcast Campaigns',      ojiva: true,  wati: true,  interakt: true,  aisensy: true  },
  { feature: 'No-code Chatbot Builder',       ojiva: true,  wati: true,  interakt: true,  aisensy: true  },
  { feature: 'Dedicated Onboarding Specialist', ojiva: true, wati: false, interakt: false, aisensy: false },
];

const HOW_STEPS = [
  {
    num: '01', icon: 'bi-send',
    title: 'Fill the form — 2 minutes',
    desc: 'Tell us your business name, phone number, and monthly volume. Our India-based team reviews your application within a few hours — no waiting days.',
  },
  {
    num: '02', icon: 'bi-key',
    title: 'Get your WhatsApp API — same day',
    desc: 'Receive your official WhatsApp API credentials and your dedicated onboarding specialist\'s WhatsApp number. Start integrating immediately.',
  },
  {
    num: '03', icon: 'bi-rocket-takeoff',
    title: 'Go live in 48 hours',
    desc: 'Your Meta Business Account gets verified, your phone number registered, and your first templates approved. Most competitors take 7–10 days. We do it in 2.',
  },
];

const INTEGRATIONS = [
  { name: 'Shopify', icon: 'bi-shop' },
  { name: 'WooCommerce', icon: 'bi-wordpress' },
  { name: 'Razorpay', icon: 'bi-credit-card' },
  { name: 'HubSpot', icon: 'bi-funnel' },
  { name: 'Zoho CRM', icon: 'bi-diagram-3' },
  { name: 'Salesforce', icon: 'bi-cloud' },
  { name: 'Leadsquared', icon: 'bi-graph-up' },
  { name: 'Instamojo', icon: 'bi-wallet2' },
  { name: 'Zapier', icon: 'bi-lightning' },
  { name: 'Google Sheets', icon: 'bi-table' },
  { name: 'REST API', icon: 'bi-code-slash' },
  { name: 'Webhook', icon: 'bi-globe' },
];

const TRUST_ITEMS = [
  { icon: 'bi-patch-check-fill', title: 'Official Meta BSP', desc: 'Authorised Meta Business Service Provider. Direct API access — not a reseller or aggregator.', color: '#25d366' },
  { icon: 'bi-shield-lock-fill', title: 'AES-256 Encryption', desc: 'All messages and customer data encrypted at rest and in transit. Enterprise-grade security by default.', color: '#1B48E0' },
  { icon: 'bi-building-check', title: 'ISO 27001 Aligned', desc: 'Our security practices follow ISO 27001 information security management standards.', color: '#7C3AED' },
  { icon: 'bi-person-lock', title: 'GDPR & DPDP Ready', desc: 'Fully compliant with India\'s Digital Personal Data Protection Act and GDPR requirements.', color: '#f59e0b' },
  { icon: 'bi-server', title: 'India Data Residency', desc: 'Customer data stored on servers in India. No cross-border data transfer without consent.', color: '#06b6d4' },
  { icon: 'bi-clock-history', title: '99.9% Uptime SLA', desc: 'Enterprise SLA with real-time monitoring, auto-failover, and 24/7 incident response team.', color: '#ec4899' },
];

const FAQS = [
  {
    q: 'Is WhatsApp Business API different from the free WhatsApp Business app?',
    a: 'Yes — completely different products. The free app supports 1 device and manual messaging only. The WhatsApp Business API (also called Cloud API) enables automated bulk messaging, chatbots, multi-agent shared inbox, and CRM integration at any scale. Ojiva AI gives you full API access with a verified business phone number.',
  },
  {
    q: 'Do I need TRAI DLT registration for WhatsApp messaging in India?',
    a: 'No — this is a common misconception. DLT registration is required for SMS in India, not WhatsApp. WhatsApp operates under Meta\'s own compliance framework. You need a Meta Business Account and approved message templates — both of which Ojiva AI handles for you during onboarding.',
  },
  {
    q: 'How is Ojiva AI different from WATI, Interakt, or AiSensy?',
    a: 'Three key differences: (1) India-based support team available in IST hours — not US-timezone ticketing. (2) 48-hour go-live vs the 7–10 days competitors typically take. (3) Fully transparent pricing — we show you Meta\'s base rate plus our margin, with no hidden per-agent or per-seat fees. We\'re built specifically for the Indian SMB and enterprise market.',
  },
  {
    q: 'What\'s the actual cost per WhatsApp message in India?',
    a: 'Meta charges a base rate per conversation (not per message) — currently ₹0.58–₹0.86 per 24-hour conversation window depending on message type (utility, marketing, authentication). Ojiva AI adds a transparent platform fee on top. We\'ll share your exact custom rate card during onboarding based on your monthly volume. No surprises.',
  },
  {
    q: 'Can I use my existing business phone number?',
    a: 'Yes, if it\'s not already registered on WhatsApp. You\'ll need to port it to the WhatsApp Business API — our team handles the entire verification process. If you\'d prefer a new dedicated number, we can provision one for you.',
  },
  {
    q: 'How long does Meta template approval take?',
    a: 'Meta typically approves templates in 1–24 hours. Our team writes and submits templates that follow Meta\'s best practices, so we have a very high first-submission approval rate. For urgent campaigns, we prioritize template review in our onboarding queue.',
  },
  {
    q: 'Can I send bulk promotional messages on WhatsApp without getting banned?',
    a: 'Yes — with a verified WhatsApp Business API account and approved message templates. Bulk messaging on the API is fully permitted by Meta for marketing purposes, as long as you send to opted-in contacts and follow template guidelines. Ojiva AI\'s compliance team guides you through the process to ensure your account stays healthy.',
  },
  {
    q: 'What kind of businesses use WhatsApp Business API?',
    a: 'Businesses of all sizes — from funded startups to enterprises with 10M+ customers. E-commerce brands for order updates and cart recovery, healthcare clinics for appointment reminders, banks and NBFCs for OTP and alerts, EdTechs for admission follow-ups, logistics companies for shipment tracking, and real estate developers for property launches.',
  },
];

/* ─── SMALL COMPONENTS ─────────────────────────────────── */

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`lp-faq-item${open ? ' open' : ''}`}>
      <button className="lp-faq-q" onClick={() => setOpen(o => !o)} type="button">
        <span>{q}</span>
        <span className="lp-faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="lp-faq-a">{a}</div>}
    </div>
  );
}

function CheckIcon({ yes }) {
  return yes
    ? <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '1rem' }}>✓</span>
    : <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.9rem' }}>✗</span>;
}

/* ─── MAIN COMPONENT ───────────────────────────────────── */

export default function WhatsAppApiLanding() {
  return (
    <div className="lp-page">
      {/* ── Sticky Header ── */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" aria-label="Ojiva AI Home">
            <Image
              src="/ojiva-logo-optimized.png"
              alt="Ojiva AI"
              width={90}
              height={26}
              priority
              unoptimized
              style={{ height: "auto" }}
            />
          </Link>
          <div className="lp-header-right">
            <a href="#lead-form" className="lp-header-cta">
              Get Free Access →
            </a>
          </div>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section className="lp-hero">
        <div className="lp-hero-bg" aria-hidden="true">
          <div className="lp-hero-orb lp-hero-orb--1" />
          <div className="lp-hero-orb lp-hero-orb--2" />
          <div className="lp-hero-orb lp-hero-orb--3" />
        </div>
        <div className="lp-container">
          <div className="lp-hero-grid">
            {/* Left */}
            <div className="lp-hero-left">
              <div className="lp-bsp-badge">
                <span className="lp-bsp-dot" />
                Official Meta Business Partner · India
              </div>
              <h1 className="lp-hero-h1">
                Official WhatsApp Business API Provider
                <br />
                <span className="lp-hero-highlight">Automate Sales &</span>
                <br />
                Support Instantly
              </h1>
              <p className="lp-hero-desc">
                Stop losing leads to slow replies. Get Official WhatsApp
                Business API with AI Chatbot, Multi-Agent Support, and CRM
                Integration all in one platform.
              </p>

              <div className="lp-hero-facts">
                {[
                  {
                    icon: "bi-check-circle-fill",
                    text: "98% open rate vs 18% email",
                    color: "#22c55e",
                  },
                  {
                    icon: "bi-check-circle-fill",
                    text: "No DLT registration needed",
                    color: "#22c55e",
                  },
                  {
                    icon: "bi-check-circle-fill",
                    text: "Zero setup fees — ever",
                    color: "#22c55e",
                  },
                  {
                    icon: "bi-check-circle-fill",
                    text: "India-based support team (IST)",
                    color: "#22c55e",
                  },
                  {
                    icon: "bi-check-circle-fill",
                    text: "500+ businesses already live",
                    color: "#22c55e",
                  },
                ].map(({ icon, text, color }) => (
                  <div key={text} className="lp-hero-fact">
                    <i className={`bi ${icon}`} style={{ color }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="lp-hero-proof">
                <div className="lp-proof-stars">
                  ★★★★★ <span>4.9/5</span>
                </div>
                <span className="lp-proof-divider" />
                <span className="lp-proof-text">
                  500+ businesses across India trust Ojiva AI
                </span>
              </div>

              <div className="lp-badges">
                {[
                  {
                    icon: "bi-patch-check-fill",
                    label: "Meta Verified Partner",
                    color: "#22c55e",
                  },
                  {
                    icon: "bi-shield-lock-fill",
                    label: "AES-256 Encrypted",
                    color: "#3b82f6",
                  },
                  {
                    icon: "bi-clock-fill",
                    label: "48-Hr Go-Live",
                    color: "#a855f7",
                  },
                  {
                    icon: "bi-headset",
                    label: "IST Support Hours",
                    color: "#f59e0b",
                  },
                ].map(({ icon, label, color }) => (
                  <div key={label} className="lp-badge">
                    <i className={`bi ${icon}`} style={{ color }} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <a href="#lead-form" className="lp-demo-btn">
                <i className="bi bi-camera-video" /> Watch a 3-Min Demo — Free
              </a>
            </div>

            {/* Right — Form */}
            <div className="lp-hero-right" id="lead-form">
              <div className="lp-form-wrapper">
                <div className="lp-form-badge">
                  <i
                    className="bi bi-lightning-charge-fill"
                    style={{ color: "#22c55e" }}
                  />
                  <span>Free setup · No DLT needed · No credit card</span>
                </div>
                <LandingLeadForm source="whatsapp-api-service" />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ══ PROBLEM ══ */}
      <section className="lp-section lp-section--light">
        <div className="lp-container lp-container--narrow">
          <div className="lp-section-label">Why WhatsApp</div>
          <h2 className="lp-section-h2">Stop Losing Leads to Channels Nobody Reads</h2>
          <p className="lp-section-p">See why 500M+ Indians are on WhatsApp and why smart businesses are switching.</p>

          {/* Bar chart comparison */}
          <div className="lp-bars">
            {[
              { ch: "Email", rate: "18%", pct: 18, color: "#ef4444", bg: "rgba(239,68,68,0.08)", icon: "📧" },
              { ch: "SMS",   rate: "45%", pct: 45, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", icon: "📱" },
              { ch: "WhatsApp", rate: "98%", pct: 98, color: "#25d366", bg: "rgba(37,211,102,0.08)", icon: "💬", best: true },
            ].map(({ ch, rate, pct, color, bg, icon, best }) => (
              <div key={ch} className={`lp-bar-row${best ? " lp-bar-row--best" : ""}`} style={{ background: bg }}>
                <div className="lp-bar-meta">
                  <span className="lp-bar-icon">{icon}</span>
                  <span className="lp-bar-ch">{ch}</span>
                  {best && <span className="lp-bar-badge">Best</span>}
                </div>
                <div className="lp-bar-track">
                  <div className="lp-bar-fill" style={{ width: `${pct}%`, background: color }} />
                </div>
                <span className="lp-bar-rate" style={{ color }}>{rate}</span>
                <span className="lp-bar-note">avg. open rate</span>
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="lp-pstats">
            {[
              { num: "500M+", label: "Indians on WhatsApp daily",     icon: "bi-people-fill",      color: "#25d366" },
              { num: "23×",   label: "Average daily opens per user",  icon: "bi-eye-fill",         color: "#1B48E0" },
              { num: "70%",   label: "Messages read within 5 minutes",icon: "bi-lightning-charge-fill", color: "#f59e0b" },
              { num: "4–8×",  label: "Higher CTR than email links",   icon: "bi-graph-up-arrow",   color: "#7C3AED" },
            ].map(({ num, label, icon, color }) => (
              <div key={label} className="lp-pstat">
                <i className={`bi ${icon} lp-pstat-icon`} style={{ color }} />
                <span className="lp-pstat-num" style={{ color }}>{num}</span>
                <span className="lp-pstat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU CAN SEND ══ */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-label">Message Types</div>
          <h2 className="lp-section-h2">
            6 types of messages your business can send today
          </h2>
          <p className="lp-section-p">
            From OTPs to full product catalogues — the WhatsApp Business API
            handles every communication your business needs.
          </p>
          <div className="lp-msgtypes">
            {MESSAGE_TYPES.map(({ icon, title, desc, example, color, bg }) => (
              <div key={title} className="lp-msgtype-card">
                <div
                  className="lp-msgtype-icon"
                  style={{ background: bg, color }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <h3 className="lp-msgtype-title">{title}</h3>
                <p className="lp-msgtype-desc">{desc}</p>
                <div
                  className="lp-msgtype-bubble"
                  style={{ borderLeftColor: color }}
                >
                  <span className="lp-msgtype-bubble-label">
                    Example message
                  </span>
                  <p className="lp-msgtype-bubble-text">{example}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="#lead-form" className="lp-btn-primary">
              Send Your First WhatsApp Campaign →
            </a>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="lp-section lp-section--light">
        <div className="lp-container">
          <div className="lp-section-label">What You Get</div>
          <h2 className="lp-section-h2">
            Everything your business needs to win on WhatsApp
          </h2>
          <p className="lp-section-p">
            Not just API access — a complete WhatsApp growth stack built for
            Indian businesses.
          </p>
          <div className="lp-features">
            {BENEFITS.map(({ icon, title, desc, color, bg }) => (
              <div key={title} className="lp-feature-card">
                <div
                  className="lp-feature-icon"
                  style={{ background: bg, color }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <h3 className="lp-feature-title">{title}</h3>
                <p className="lp-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRY USE CASES ══ */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-label">Industry Use Cases</div>
          <h2 className="lp-section-h2">Built for every industry in India</h2>
          <p className="lp-section-p">
            From healthcare to logistics — see how Indian businesses in your
            sector are using WhatsApp to drive real results.
          </p>
          <div className="lp-industries">
            {INDUSTRIES.map(({ icon, label, stat, statLabel, uses, color }) => (
              <div
                key={label}
                className="lp-industry-card"
                style={{ "--lp-ind-color": color }}
              >
                <div className="lp-industry-top">
                  <div
                    className="lp-industry-icon"
                    style={{ background: color + "15", color }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>
                  <div>
                    <h3 className="lp-industry-title">{label}</h3>
                    <div className="lp-industry-stat">
                      <span className="lp-industry-stat-num" style={{ color }}>
                        {stat}
                      </span>
                      <span className="lp-industry-stat-label">
                        {statLabel}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="lp-industry-uses">
                  {uses.map((u) => (
                    <li key={u}>
                      <i className="bi bi-check2" style={{ color }} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="#lead-form" className="lp-btn-primary">
              See a Demo for Your Industry →
            </a>
          </div>
        </div>
      </section>


      {/* ══ HOW IT WORKS ══ */}
      <section className="lp-section lp-section--dark">
        <div className="lp-container lp-container--narrow">
          <div className="lp-section-label lp-section-label--light">
            How It Works
          </div>
          <h2 className="lp-section-h2 lp-section-h2--light">
            From sign-up to first WhatsApp campaign in 48 hours
          </h2>
          <p
            className="lp-section-p"
            style={{ color: "rgba(148,163,184,0.85)", margin: "0 auto 2.5rem" }}
          >
            Most providers take 7–10 days. Our India-based onboarding team gets
            you live in 2.
          </p>
          <div className="lp-steps">
            {HOW_STEPS.map(({ num, icon, title, desc }, i) => (
              <div key={num} className="lp-step">
                <div className="lp-step-num">{num}</div>
                <div className="lp-step-icon">
                  <i className={`bi ${icon}`} />
                </div>
                <div className="lp-step-body">
                  <h3 className="lp-step-title">{title}</h3>
                  <p className="lp-step-desc">{desc}</p>
                </div>
                {i < HOW_STEPS.length - 1 && (
                  <div className="lp-step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="lp-hiw-cta">
            <a href="#lead-form" className="lp-btn-primary">
              Start Now — It's Free →
            </a>
          </div>
        </div>
      </section>

      {/* ══ MID-PAGE FORM ══ */}
      <section className="lp-midform-section">
        <div className="lp-container">
          <div className="lp-midform-grid">
            <div className="lp-midform-left">
              <div
                className="lp-section-label"
                style={{ marginBottom: "1rem" }}
              >
                Get Started Now
              </div>
              <h2 className="lp-midform-h2">
                Ready to send your first WhatsApp campaign?
              </h2>
              <p className="lp-midform-sub">
                Join 500+ Indian businesses already using Ojiva AI. Free setup,
                no DLT, live in 48 hours.
              </p>
              <div className="lp-midform-perks">
                {[
                  "Official Meta Business Service Provider",
                  "48-hour go-live — fastest in India",
                  "India-based support team (IST)",
                  "No setup fees, no DLT registration",
                  "Dedicated onboarding specialist",
                  "Cancel anytime — no lock-in",
                ].map((p) => (
                  <div key={p} className="lp-midform-perk">
                    <i
                      className="bi bi-check-circle-fill"
                      style={{ color: "#22c55e" }}
                    />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lp-midform-right">
              <div className="lp-form-wrapper lp-form-wrapper--light">
                <div className="lp-form-badge lp-form-badge--dark">
                  <i
                    className="bi bi-lightning-charge-fill"
                    style={{ color: "#22c55e" }}
                  />
                  <span>Free setup · No DLT needed · No credit card</span>
                </div>
                <LandingLeadForm source="whatsapp-api-service-mid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="lp-section lp-section--light">
        <div className="lp-container">
          <div className="lp-section-label">Customer Stories</div>
          <h2 className="lp-section-h2">
            Indian businesses already winning on WhatsApp
          </h2>
          <p className="lp-section-p">
            Real results. Real ROI. No vague case studies — just numbers from
            businesses like yours.
          </p>
          <div className="lp-testis">
            {TESTIMONIALS.map(
              ({
                quote,
                name,
                role,
                company,
                initials,
                avatarBg,
                avatarColor,
                result,
                resultColor,
                stars,
              }) => (
                <div key={name} className="lp-testi">
                  <div className="lp-testi-top">
                    <span className="lp-stars">{"★".repeat(stars)}</span>
                    <span
                      className="lp-testi-tag"
                      style={{
                        color: resultColor,
                        background: resultColor + "18",
                      }}
                    >
                      {result}
                    </span>
                  </div>
                  <p className="lp-testi-q">&ldquo;{quote}&rdquo;</p>
                  <div className="lp-testi-who">
                    <span
                      className="lp-avatar"
                      style={{ background: avatarBg, color: avatarColor }}
                    >
                      {initials}
                    </span>
                    <div>
                      <div className="lp-testi-name">{name}</div>
                      <div className="lp-testi-role">
                        {role} · {company}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ══ INTEGRATIONS ══ */}
      <section className="lp-section lp-section--light">
        <div className="lp-container lp-container--narrow">
          <div className="lp-section-label">Integrations</div>
          <h2 className="lp-section-h2">
            Connects with the tools you already use
          </h2>
          <p className="lp-section-p">
            Native integrations with India's most popular e-commerce, CRM, and
            payment platforms — plus a REST API and Webhooks for custom setups.
          </p>
          <div className="lp-integrations">
            {INTEGRATIONS.map(({ name, icon }) => (
              <div key={name} className="lp-integration-chip">
                <i className={`bi ${icon}`} />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className="lp-integ-note">
            Don't see your tool? We support any platform via REST API &amp;
            Webhooks.
          </p>
        </div>
      </section>

      {/* ══ SECURITY & TRUST ══ */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-label">Security & Compliance</div>
          <h2 className="lp-section-h2">
            Enterprise-grade security. 100% compliant.
          </h2>
          <p className="lp-section-p">
            When you send 10 million messages a day, security isn't optional.
            Every layer of Ojiva AI's infrastructure is built for compliance and
            data protection.
          </p>
          <div className="lp-trust-grid">
            {TRUST_ITEMS.map(({ icon, title, desc, color }) => (
              <div key={title} className="lp-trust-card">
                <div
                  className="lp-trust-icon"
                  style={{ background: color + "15", color }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <h3 className="lp-trust-title">{title}</h3>
                <p className="lp-trust-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="lp-section lp-section--light">
        <div className="lp-container lp-container--narrow">
          <div className="lp-section-label">FAQ</div>
          <h2 className="lp-section-h2">
            Everything you need to know before signing up
          </h2>
          <p className="lp-section-p">
            Straight answers to the questions every Indian business asks us.
          </p>
          <div className="lp-faqs">
            {FAQS.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
          {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#64748b", marginBottom: "0.75rem" }}>
              Still have questions? Our team replies in minutes.
            </p>
            <a href="tel:+918431086185" className="lp-btn-outline">
              <i className="bi bi-telephone-fill" /> Call +91-843-108-6185
            </a>
          </div> */}
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="lp-final">
        <div className="lp-final-bg" aria-hidden="true" />
        <div className="lp-container lp-container--narrow">
          <h2 className="lp-final-h2">
            Your competitors are already on WhatsApp.
          </h2>
          <p className="lp-final-sub">
            500M+ Indians check WhatsApp 23× a day. Every day you wait is leads
            your competitor is closing. Get your official WhatsApp Business API
            live in 48 hours — for free.
          </p>
          <div className="lp-final-actions">
            <a
              href="#lead-form"
              className="lp-btn-primary lp-btn-primary--white"
            >
              Get Free WhatsApp API Access →
            </a>
            <a href="#lead-form" className="lp-btn-ghost">
              See a Live Demo First
            </a>
          </div>
          <div className="lp-final-trust">
            {[
              { icon: "bi-patch-check-fill", label: "Official Meta BSP" },
              { icon: "bi-lock-fill", label: "No credit card" },
              { icon: "bi-clock-fill", label: "Live in 48 hours" },
              { icon: "bi-shield-check", label: "No DLT required" },
            ].map(({ icon, label }) => (
              <span key={label} className="lp-final-trust-item">
                <i className={`bi ${icon}`} /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp-foot">
        <div className="lp-container">
          <p>
            © {new Date().getFullYear()} Ojiva AI ·{" "}
            <Link href="/privacy">Privacy Policy</Link> ·{" "}
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
