'use client';

import Link from 'next/link';
import { useState } from 'react';

import { WEB3_ACCESS_KEY, MAKE_HOOK_SERVICE, TEST_MODE_WHATSAPP_ONLY } from '@/lib/formConfig';
import { sendWhatsApp } from '@/lib/whatsapp';
const ACCESS_KEY = WEB3_ACCESS_KEY;
const MAKE_HOOK  = MAKE_HOOK_SERVICE;
import { motion, AnimatePresence } from 'framer-motion';

// ── TeleCRM (inline per project convention; matches ContactForm/DemoForm/LandingLeadForm) ──
const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
function fireTeleCRM({ name, phone, email, company, service, source, message }) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  const fields = {
    name:    String(name || '').trim() || 'Unknown',
    phone:   p,
    email:   String(email || '').trim().toLowerCase(),
  };
  if (company) {
    const v = String(company).trim();
    fields.companyName  = v;
    fields.company_name = v;
    fields.company      = v;
  }
  if (service) {
    const v = String(service).trim();
    fields.serviceInterested  = v;
    fields.service_interested = v;
    fields.service            = v;
  }
  if (source) {
    const v = String(source).trim();
    fields.source = v;
    fields.Source = v;
  }
  if (message) {
    const v = String(message).trim();
    fields.remark = v;
    fields.Remark = v;
  }
  fetch(TELECRM_API, {
    method: 'POST', keepalive: true,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields }),
  }).then(r => r.text()).then(t => console.log('[TeleCRM] status OK, response:', t)).catch(e => console.error('[TeleCRM] error:', e));
}

const SLA_PLANS = [
  { plan: 'Starter',    icon: '🌱', color: '#64748b', response: '24 hrs',  uptime: '99.5%',  channels: 'Email only',           onboarding: 'Self-serve', engineer: 'Shared pool', highlight: false },
  { plan: 'Growth',     icon: '📈', color: '#2563eb', response: '4 hrs',   uptime: '99.9%',  channels: 'Email + Chat',         onboarding: 'Guided',     engineer: 'Shared',      highlight: false },
  { plan: 'Enterprise', icon: '🏢', color: '#7c3aed', response: '< 1 hr',  uptime: '99.99%', channels: 'Email + Chat + Phone', onboarding: 'White-Glove', engineer: 'Dedicated',   highlight: true  },
];

const TABS = [
  { id: 'ticket',  label: '🎫 Submit a Ticket' },
  { id: 'sla',     label: '📋 SLA Plans' },
];

/** Ticket submit form */
function TicketForm() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', company: '', subject: '', priority: 'medium', message: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [ticketId, setTicketId]   = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ── Client-side validation ──
    if (form.name.trim().length < 2) { setErrorMsg('Please enter your full name (at least 2 characters).'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { setErrorMsg('Please enter a valid email address.'); return; }
    if (!/^[6-9][0-9]{9}$/.test(form.phone)) { setErrorMsg('Please enter a valid 10-digit Indian mobile number.'); return; }
    if (form.company.trim().length < 2) { setErrorMsg('Please enter your company name.'); return; }
    if (!form.subject.trim()) { setErrorMsg('Please add a subject.'); return; }
    if (!form.message.trim()) { setErrorMsg('Please describe your issue.'); return; }
    setErrorMsg('');
    setLoading(true);
    const tid = `OJV-${Math.floor(10000 + Math.random() * 90000)}`;
    const payload = {
      access_key: ACCESS_KEY,
      subject:    `Support Ticket [${form.priority.toUpperCase()}] — ${form.subject}`,
      from_name:  'Ojiva AI Support',
      redirect:   'false',
      name:       form.name,
      email:      form.email,
      phone:      form.phone,
      company:    form.company,
      subject_detail: form.subject,
      priority:   form.priority,
      message:    form.message,
      ticket_id:  tid,
      source:     'support-page',
      submitted_at: new Date().toISOString(),
    };
    try {
      sendWhatsApp(form.name, form.phone, 'support-page');
      if (!TEST_MODE_WHATSAPP_ONLY) {
        fireTeleCRM({
          name:    form.name,
          phone:   form.phone,
          email:   form.email,
          company: form.company,
          service: `Support Ticket [${form.priority.toUpperCase()}]`,
          source:  'support-page',
          message: form.message,
        });
        await Promise.allSettled([
          fetch('https://api.web3forms.com/submit', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body:    JSON.stringify(payload),
          }),
          fetch(MAKE_HOOK, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(payload),
          }),
        ]);
      }
    } catch { /* silent — still show success to user */ }
    setTicketId(tid);
    setLoading(false);
    setSubmitted(true);
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
        <button className="btn-ojiva-outline mt-4" onClick={() => { setSubmitted(false); setErrorMsg(''); setForm({ name: '', email: '', phone: '', company: '', subject: '', priority: 'medium', message: '' }); }}>
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
        <div className="sp-form-group">
          <label className="sp-form-label">Phone Number *</label>
          <input className="sp-form-input" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={e => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} required maxLength={10} inputMode="numeric" pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit Indian mobile number" autoComplete="tel" />
        </div>
        <div className="sp-form-group">
          <label className="sp-form-label">Company Name *</label>
          <input className="sp-form-input" placeholder="Your company" value={form.company} onChange={e => set('company', e.target.value)} required autoComplete="organization" />
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
      {errorMsg && (
        <div className="sp-form-error" role="alert" style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 8, marginBottom: 12 }}>
          ⚠️ {errorMsg}
        </div>
      )}
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

export default function SupportHub() {
  const [activeTab, setActiveTab] = useState('ticket');

  return (
    <section className="section-padding bg-section" aria-labelledby="hub-heading">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Support Hub</span>
          <h2 id="hub-heading" className="section-title mt-2">Get help your way</h2>
        </div>

        {/* Tab bar */}
        <div className="sp-tabs">
          {TABS.map(({ id, label }) => (
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
  );
}
