'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '@/components/ui/CTA';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SYSTEM_STATUSES = [
  { name: 'SMS Gateway',       status: 'operational', uptime: '99.98%' },
  { name: 'WhatsApp API',      status: 'operational', uptime: '99.97%' },
  { name: 'RCS Platform',      status: 'operational', uptime: '99.95%' },
  { name: 'Voice AI Engine',   status: 'operational', uptime: '99.99%' },
  { name: 'Dashboard & UI',    status: 'operational', uptime: '100%'   },
  { name: 'REST API',          status: 'degraded',    uptime: '99.91%' },
  { name: 'Webhooks',          status: 'operational', uptime: '99.96%' },
  { name: 'Analytics Engine',  status: 'operational', uptime: '99.94%' },
];

const CATEGORIES = [
  { id: 'all',         label: 'All Topics',   icon: '🔍' },
  { id: 'api',         label: 'API & Dev',    icon: '🔌' },
  { id: 'billing',     label: 'Billing',      icon: '💳' },
  { id: 'sms',         label: 'SMS & RCS',    icon: '📱' },
  { id: 'whatsapp',    label: 'WhatsApp',     icon: '💬' },
  { id: 'account',     label: 'Account',      icon: '👤' },
];

const FAQS = [
  { q: 'How quickly will I get a response?',          category: 'all',     a: 'Starter plans receive a response within 24 hours. Growth plans within 4 hours. Enterprise clients enjoy a guaranteed 1-hour response time, 24/7.' },
  { q: 'Do you offer onboarding assistance?',          category: 'account', a: 'Yes. Growth plans include guided onboarding sessions. Enterprise plans include white-glove onboarding with a dedicated engineer assigned to your team from day one.' },
  { q: 'What is your uptime SLA?',                     category: 'all',     a: 'We guarantee 99.5% uptime on Starter, 99.9% on Growth, and 99.99% on Enterprise — all backed by financially binding SLA agreements.' },
  { q: 'Can I upgrade my support plan anytime?',       category: 'billing', a: 'Absolutely. You can upgrade your support tier at any time from your account dashboard. Changes take effect immediately, and billing is prorated.' },
  { q: 'Is there a self-service knowledge base?',      category: 'all',     a: "Yes — docs.ojiva.ai has a full API reference, integration tutorials, video walkthroughs, and a searchable changelog. It's available 24/7 to all users." },
  { q: 'How do I get a sandbox API key?',              category: 'api',     a: 'Log into your dashboard, navigate to Settings → Developer → API Keys, and click "Generate Sandbox Key". It activates immediately with full test mode access.' },
  { q: 'Why is my SMS delivery rate lower than usual?', category: 'sms',    a: 'Delivery rates can dip due to DLT template issues, operator filtering, or number blacklisting. Check our status page and review your DLT registration in the dashboard.' },
  { q: 'How do I connect WhatsApp Business API?',      category: 'whatsapp',a: 'As an official Meta BSP, we handle verification. Submit your business details in the dashboard under Services → WhatsApp and our team completes setup within 24–48 hours.' },
  { q: 'How do I change my billing email?',            category: 'billing', a: 'Go to Account → Billing → Billing Contact and update your email. All future invoices will be sent to the new address immediately.' },
  { q: 'Can I get webhook retry notifications?',       category: 'api',     a: 'Yes. Enable "Webhook Failure Alerts" in Settings → Webhooks. You will receive email and in-platform notifications on any failed delivery or retry attempt.' },
  { q: 'What is a DLT registration?',                  category: 'sms',     a: 'DLT (Distributed Ledger Technology) registration is mandatory in India for sending commercial SMS. Ojiva AI assists with full DLT registration support as part of your onboarding.' },
  { q: 'How do I reset my 2FA authenticator?',         category: 'account', a: 'Open a priority support ticket and our security team will verify your identity and reset 2FA within 30 minutes. Enterprise clients can call the direct support line.' },
];

const CHANNELS = [
  { icon: '📧', label: 'Email Support',   value: 'ojiva.tech@gmail.com', href: 'mailto:ojiva.tech@gmail.com',  desc: 'Response within 4 hrs on standard, 1 hr enterprise', badge: 'Always Open',    badgeColor: '#16a34a' },
  { icon: '💬', label: 'Live Chat',       value: 'In-Platform Chat',     href: '/contact',                      desc: 'Real-time chat with our engineering team',            badge: 'Mon – Sat',      badgeColor: '#2563eb' },
  { icon: '📞', label: 'Phone Support',   value: '+91 84310 86185',      href: 'tel:+918431086185',             desc: 'Direct line to engineers — enterprise clients only',  badge: '10 AM – 7 PM',  badgeColor: '#d97706' },
  { icon: '📚', label: 'Documentation',   value: 'docs.ojiva.ai',        href: 'https://docs.ojiva.ai',         desc: 'Full API reference, guides & tutorials',              badge: '24/7 Self-Serve', badgeColor: '#7c3aed' },
];

const SLA_PLANS = [
  { plan: 'Starter',    icon: '🌱', color: '#64748b', response: '24 hrs',  uptime: '99.5%',  channels: 'Email only',           onboarding: 'Self-serve', engineer: 'Shared pool', highlight: false },
  { plan: 'Growth',     icon: '📈', color: '#2563eb', response: '4 hrs',   uptime: '99.9%',  channels: 'Email + Chat',         onboarding: 'Guided',     engineer: 'Shared',      highlight: false },
  { plan: 'Enterprise', icon: '🏢', color: '#7c3aed', response: '< 1 hr',  uptime: '99.99%', channels: 'Email + Chat + Phone', onboarding: 'White-Glove', engineer: 'Dedicated',   highlight: true  },
];

const QUICK_LINKS = [
  { icon: '📖', title: 'API Reference',        desc: 'Full REST API docs',              href: 'https://docs.ojiva.ai', color: '#2563eb' },
  { icon: '🎬', title: 'Video Tutorials',      desc: 'Step-by-step walkthroughs',       href: '/contact',              color: '#7c3aed' },
  { icon: '🔄', title: 'Changelog',            desc: 'Platform updates & releases',     href: '/contact',              color: '#16a34a' },
  { icon: '🧩', title: 'Integrations Guide',   desc: 'Connect your tech stack',         href: '/platform',             color: '#d97706' },
  { icon: '🛡️', title: 'Security Docs',        desc: 'AES-256, GDPR & compliance',     href: '/contact',              color: '#dc2626' },
  { icon: '🚀', title: 'Quick Start Guide',    desc: 'Live in under 10 minutes',        href: '/contact',              color: '#0891b2' },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const statusColor = { operational: '#16a34a', degraded: '#d97706', outage: '#dc2626' };
const statusLabel = { operational: 'Operational', degraded: 'Degraded', outage: 'Outage' };

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

/** Animated typing dots */
function TypingDots() {
  return (
    <span className="sp-typing-dots">
      <span /><span /><span />
    </span>
  );
}

/** Live chat widget */
function ChatWidget() {
  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState([
    { from: 'bot', text: 'Hi! 👋 I\'m the Ojiva AI support bot. How can I help you today?' },
  ]);
  const [input, setInput]   = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef           = useRef(null);

  const BOT_REPLIES = [
    'Great question! Our team will get back to you within 1 hour for enterprise plans. 🚀',
    'I can see your account. Let me pull up the details for you right now...',
    'For urgent issues, you can also call us at +91 84310 86185. Our engineers are standing by!',
    'I\'ve flagged this to a senior engineer. You\'ll receive an email update shortly. ✅',
    'That\'s a known issue we\'re tracking. Estimated resolution: ~2 hours. We\'ll notify you.',
  ];

  const sendMsg = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      setMsgs(prev => [...prev, { from: 'bot', text: reply }]);
    }, 1500);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  return (
    <div className="sp-chat-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="sp-chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="sp-chat-header">
              <div className="sp-chat-avatar">🤖</div>
              <div>
                <p className="sp-chat-name">Ojiva Support</p>
                <p className="sp-chat-status"><span className="sp-online-dot" />Online now</p>
              </div>
              <button className="sp-chat-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="sp-chat-body">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  className={`sp-chat-msg ${m.from}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <div className="sp-chat-msg bot">
                  <TypingDots />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="sp-chat-input-row">
              <input
                className="sp-chat-input"
                placeholder="Type your message…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMsg()}
              />
              <button className="sp-chat-send" onClick={sendMsg}>→</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="sp-chat-fab"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{open ? '✕' : '💬'}</span>
        {!open && <span className="sp-chat-fab-badge">1</span>}
      </motion.button>
    </div>
  );
}

/** FAQ with search + category filter */
function FaqSection() {
  const [search, setSearch]     = useState('');
  const [active, setActive]     = useState('all');
  const [openIdx, setOpenIdx]   = useState(null);

  const filtered = FAQS.filter(f => {
    const matchCat = active === 'all' || f.category === active;
    const matchSrch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSrch;
  });

  return (
    <section className="section-padding bg-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-tag">FAQ</span>
          <h2 id="faq-heading" className="section-title mt-2">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">Search across {FAQS.length} common questions.</p>
        </div>

        {/* Search bar */}
        <div className="sp-faq-search-wrap">
          <span className="sp-faq-search-icon">🔍</span>
          <input
            className="sp-faq-search"
            placeholder="Search questions, e.g. 'API key' or 'billing'…"
            value={search}
            onChange={e => { setSearch(e.target.value); setOpenIdx(null); }}
          />
          {search && (
            <button className="sp-faq-clear" onClick={() => { setSearch(''); setOpenIdx(null); }}>✕</button>
          )}
        </div>

        {/* Category pills */}
        <div className="sp-faq-cats">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`sp-faq-cat${active === c.id ? ' active' : ''}`}
              onClick={() => { setActive(c.id); setOpenIdx(null); }}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="sp-faq-count">
          {filtered.length === 0 ? 'No results found.' : `Showing ${filtered.length} of ${FAQS.length} questions`}
        </p>

        {/* FAQ accordion */}
        <div className="sp-faq-list">
          <AnimatePresence>
            {filtered.map((f, i) => (
              <motion.div
                key={f.q}
                className={`sp-faq-item${openIdx === i ? ' open' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <div className="sp-faq-q">
                  <span>{f.q}</span>
                  <motion.span
                    className="sp-faq-chevron"
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    ▾
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.p
                      className="sp-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/** Ticket submit form */
function TicketForm() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', priority: 'medium', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [ticketId, setTicketId]   = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTicketId(`OJV-${Math.floor(10000 + Math.random() * 90000)}`);
      setSubmitted(true);
    }, 1800);
  };

  if (submitted) {
    return (
      <motion.div
        className="sp-ticket-success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="sp-ticket-success-icon">✅</div>
        <h3>Ticket Submitted!</h3>
        <p>Your ticket ID is <strong>{ticketId}</strong></p>
        <p className="sp-ticket-success-sub">We&apos;ll respond to <strong>{form.email}</strong> within the SLA window for your plan.</p>
        <div className="sp-ticket-tracker">
          {['Received', 'In Review', 'Assigned', 'Resolved'].map((s, i) => (
            <div key={s} className={`sp-tracker-step${i === 0 ? ' active' : ''}`}>
              <div className="sp-tracker-dot">{i === 0 ? '✓' : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <button className="btn-ojiva-outline mt-4" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', priority: 'medium', message: '' }); }}>
          Submit Another Ticket
        </button>
      </motion.div>
    );
  }

  return (
    <form className="sp-ticket-form" onSubmit={handleSubmit} noValidate>
      <div className="sp-form-row">
        <div className="sp-form-group">
          <label className="sp-form-label">Full Name *</label>
          <input className="sp-form-input" placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} required />
        </div>
        <div className="sp-form-group">
          <label className="sp-form-label">Email Address *</label>
          <input className="sp-form-input" type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} required />
        </div>
      </div>
      <div className="sp-form-row">
        <div className="sp-form-group" style={{ flex: 2 }}>
          <label className="sp-form-label">Subject *</label>
          <input className="sp-form-input" placeholder="Brief description of the issue" value={form.subject} onChange={e => set('subject', e.target.value)} required />
        </div>
        <div className="sp-form-group">
          <label className="sp-form-label">Priority</label>
          <select className="sp-form-input" value={form.priority} onChange={e => set('priority', e.target.value)}>
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High — Production Down</option>
          </select>
        </div>
      </div>
      <div className="sp-form-group">
        <label className="sp-form-label">Describe your issue *</label>
        <textarea className="sp-form-input sp-form-textarea" placeholder="Please include any error messages, steps to reproduce, and your account ID…" rows={5} value={form.message} onChange={e => set('message', e.target.value)} required />
      </div>
      <div className="sp-form-footer">
        <span className="sp-form-note">🔒 Your data is encrypted end-to-end.</span>
        <motion.button
          type="submit"
          className="btn-ojiva-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? (
            <span className="sp-btn-loading"><span className="sp-spinner" /> Submitting…</span>
          ) : (
            'Submit Ticket →'
          )}
        </motion.button>
      </div>
    </form>
  );
}

/** System status board */
function StatusBoard() {
  const allOk = SYSTEM_STATUSES.every(s => s.status === 'operational');
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="sp-status-board">
      <div className={`sp-status-overall${allOk ? ' ok' : ' warn'}`}>
        <span className={`sp-status-overall-dot${pulse ? ' pulse' : ''}`} />
        <strong>{allOk ? 'All Systems Operational' : 'Partial Degradation'}</strong>
        <span className="sp-status-ts">Updated: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST</span>
      </div>
      <div className="sp-status-grid">
        {SYSTEM_STATUSES.map(({ name, status, uptime }) => (
          <motion.div
            key={name}
            className="sp-status-row"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span className="sp-status-name">{name}</span>
            <span className="sp-status-uptime">{uptime}</span>
            <span className="sp-status-pill" style={{ background: `${statusColor[status]}20`, color: statusColor[status] }}>
              <span className="sp-status-pill-dot" style={{ background: statusColor[status] }} />
              {statusLabel[status]}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const SUPPORT_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('ticket');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SUPPORT_FAQ_SCHEMA) }} />

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="sp-hero" aria-labelledby="support-hero-heading">
        <div className="sp-hero-bg" aria-hidden="true" />
        <div className="container">
          <motion.div
            className="sp-hero-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sp-hero-badge">
              <span className="sp-hero-dot" />
              Support Center
            </div>
            <h1 id="support-hero-heading" className="sp-hero-title">
              We&apos;re here to help you
              <span className="sp-hero-grad"> succeed</span>
            </h1>
            <p className="sp-hero-sub">
              From API questions to enterprise deployments — our engineers ensure
              your success on the Ojiva AI platform.
            </p>

            {/* Quick-access stats */}
            <div className="sp-hero-stats">
              {[
                { icon: '⚡', val: '< 1 hr',  lab: 'Enterprise Response' },
                { icon: '🛡️', val: '99.99%', lab: 'Uptime SLA' },
                { icon: '🔔', val: '24/7',    lab: 'Priority Support' },
                { icon: '🏢', val: '500+',    lab: 'Enterprise Clients' },
              ].map(({ icon, val, lab }) => (
                <div key={lab} className="sp-hero-stat">
                  <span className="sp-hero-stat-icon">{icon}</span>
                  <span className="sp-hero-stat-val">{val}</span>
                  <span className="sp-hero-stat-lab">{lab}</span>
                </div>
              ))}
            </div>

            {/* Quick search */}
            <div className="sp-hero-search-wrap">
              <span className="sp-hero-search-icon">🔍</span>
              <input
                className="sp-hero-search"
                placeholder="What do you need help with? e.g. 'setup WhatsApp API'…"
                onFocus={e => e.target.closest('.sp-hero-search-wrap').classList.add('focused')}
                onBlur={e => e.target.closest('.sp-hero-search-wrap').classList.remove('focused')}
              />
              <button className="sp-hero-search-btn">Search</button>
            </div>

            {/* Popular searches */}
            <div className="sp-popular-tags">
              <span>Popular:</span>
              {['API Key Setup', 'DLT Registration', 'WhatsApp BSP', 'Webhook Guide', 'OTP Delivery'].map(t => (
                <button key={t} className="sp-popular-tag">{t}</button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. QUICK LINKS ═══════════════════════════ */}
      <section className="section-padding" aria-label="Quick access resources">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Resources</span>
            <h2 className="section-title mt-2">Everything at your fingertips</h2>
          </div>
          <div className="sp-quick-grid">
            {QUICK_LINKS.map(({ icon, title, desc, href, color }, i) => (
              <motion.a
                key={title}
                href={href}
                className="sp-quick-card"
                style={{ '--ql-color': color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <span className="sp-quick-icon">{icon}</span>
                <h3 className="sp-quick-title">{title}</h3>
                <p className="sp-quick-desc">{desc}</p>
                <span className="sp-quick-arrow">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SYSTEM STATUS ═════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="status-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-12 col-lg-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">System Status</span>
              <h2 id="status-heading" className="section-title mt-2">
                Real-Time Platform <span className="text-grad">Health</span>
              </h2>
              <p className="section-subtitle">
                Live status for all Ojiva AI services. We update every 60 seconds and notify enterprise clients of any incidents instantly.
              </p>
              <Link href="/contact" className="btn-ojiva-primary mt-3">
                Subscribe to Alerts →
              </Link>
            </motion.div>
            <motion.div
              className="col-12 col-lg-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <StatusBoard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 4. CONTACT CHANNELS ══════════════════════ */}
      <section className="section-padding" aria-labelledby="channels-heading">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Get in Touch</span>
            <h2 id="channels-heading" className="section-title mt-2">Multiple ways to reach us</h2>
            <p className="section-subtitle mx-auto">Choose the channel that fits your urgency and plan level.</p>
          </div>
          <div className="sp-channels-grid">
            {CHANNELS.map(({ icon, label, value, href, desc, badge, badgeColor }, i) => (
              <motion.a
                key={label}
                href={href}
                className="sp-channel-card"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="sp-channel-top">
                  <span className="sp-channel-icon">{icon}</span>
                  <span className="sp-channel-badge" style={{ background: `${badgeColor}20`, color: badgeColor }}>{badge}</span>
                </div>
                <h3 className="sp-channel-label">{label}</h3>
                <p className="sp-channel-value">{value}</p>
                <p className="sp-channel-desc">{desc}</p>
                <span className="sp-channel-arrow">Go →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. SUPPORT HUB (Tabs) ════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="hub-heading">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Support Hub</span>
            <h2 id="hub-heading" className="section-title mt-2">Get help your way</h2>
          </div>

          {/* Tab bar */}
          <div className="sp-tabs">
            {[
              { id: 'ticket',  label: '🎫 Submit a Ticket' },
              { id: 'sla',     label: '📋 SLA Plans' },
            ].map(({ id, label }) => (
              <button
                key={id}
                className={`sp-tab${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
                {activeTab === id && (
                  <motion.span className="sp-tab-underline" layoutId="tabUnderline" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'ticket' && (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="sp-tab-panel"
              >
                <div className="row g-5 align-items-start">
                  <div className="col-12 col-lg-4">
                    <h3 className="sp-ticket-side-title">Submit a Support Ticket</h3>
                    <p className="sp-ticket-side-desc">Describe your issue and we'll assign an engineer from the right team within minutes.</p>
                    <ul className="sp-ticket-side-list">
                      <li>⚡ Average first reply: <strong>47 minutes</strong></li>
                      <li>✅ Resolution rate: <strong>97.4%</strong></li>
                      <li>🔒 All data encrypted end-to-end</li>
                      <li>📬 Email + in-platform updates</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-8">
                    <TicketForm />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sla' && (
              <motion.div
                key="sla"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="sp-tab-panel"
              >
                <div className="sp-sla-cards">
                  {SLA_PLANS.map(({ plan, icon, color, response, uptime, channels, onboarding, engineer, highlight }, i) => (
                    <motion.div
                      key={plan}
                      className={`sp-sla-card${highlight ? ' highlight' : ''}`}
                      style={{ '--sla-color': color }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ y: -6 }}
                    >
                      {highlight && <div className="sp-sla-popular">Most Popular</div>}
                      <div className="sp-sla-icon">{icon}</div>
                      <h3 className="sp-sla-plan">{plan}</h3>
                      <div className="sp-sla-rows">
                        {[
                          { label: 'Response Time',   val: response },
                          { label: 'Uptime SLA',       val: uptime },
                          { label: 'Channels',         val: channels },
                          { label: 'Onboarding',       val: onboarding },
                          { label: 'Account Engineer', val: engineer },
                        ].map(({ label, val }) => (
                          <div key={label} className="sp-sla-row">
                            <span className="sp-sla-row-label">{label}</span>
                            <span className="sp-sla-row-val">{val}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className={highlight ? 'btn-ojiva-primary' : 'btn-ojiva-outline'} style={{ marginTop: 'auto', display: 'block', textAlign: 'center' }}>
                        Get Started →
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ 6. FAQ ═══════════════════════════════════ */}
      <FaqSection />

      {/* ══ 7. CTA ═══════════════════════════════════ */}
      <CTA
        title="Need enterprise-grade support?"
        subtitle="Talk to our solutions team and let us build a support plan tailored to your team's size, stack, and SLA requirements."
        primaryLabel="Contact Enterprise Team"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />

      {/* ══ Floating Chat Widget ══════════════════════ */}
      <ChatWidget />
    </>
  );
}
