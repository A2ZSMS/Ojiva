'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ACCESS_KEY = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';

const SERVICES = [
  { id: 'sms',      icon: '📱', label: 'Bulk SMS'       },
  { id: 'whatsapp', icon: '💬', label: 'WhatsApp API'   },
  { id: 'rcs',      icon: '✨', label: 'RCS'            },
  { id: 'voice',    icon: '📞', label: 'Bulk Voice'     },
  { id: 'leads',    icon: '🎯', label: 'Leads'          },
  { id: 'workflow', icon: '⚡', label: 'Workflow'       },
];

const INDUSTRIES = [
  'E-commerce & Retail',
  'Banking & Finance',
  'Healthcare',
  'Education & EdTech',
  'Travel & Hospitality',
  'Real Estate',
  'Logistics & Delivery',
  'SaaS & Technology',
  'Other',
];

/* ── Label-above field wrapper ─────────────────────────── */
function Field({ label, required, optional, children }) {
  return (
    <div className="cfn-field">
      <span className="cfn-label">
        {required && <span className="cfn-req" aria-label="required">*</span>}
        {label}
        {optional && <span className="cfn-opt"> (optional)</span>}
      </span>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [status,   setStatus]   = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [agreed,   setAgreed]   = useState(false);
  const [selected, setSelected] = useState([]);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', industry: '', message: '',
  });

  function handleChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function toggleService(id) {
    setSelected(p => p.includes(id) ? p.filter(s => s !== id) : [...p, id]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agreed) { setErrorMsg('Please accept the terms to continue.'); return; }
    setStatus('loading'); setErrorMsg('');
    try {
      const fd = new FormData(e.target);
      fd.append('access_key', ACCESS_KEY);
      fd.append('subject', `Contact: ${form.name} — ${form.company || 'Ojiva AI'}`);
      fd.append('botcheck', '');
      fd.append('services', selected.join(', ') || 'Not specified');
      fd.append('privacy_consent', 'Agreed');
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', company: '', industry: '', message: '' });
        setSelected([]); setAgreed(false);
      } else { setStatus('error'); setErrorMsg(data.message || 'Something went wrong.'); }
    } catch { setStatus('error'); setErrorMsg('Network error. Please try again.'); }
  }

  /* ── Success ── */
  if (status === 'success') {
    return (
      <div className="contact-page-grid">
        {/* Sidebar left */}
        <div className="contact-info-col"><ContactSidebar /></div>
        {/* Form right */}
        <div className="contact-form-col">
          <motion.div className="cfn-success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.div className="cfn-success-icon"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: 'backOut' }}
            >✓</motion.div>
            <h3>Message sent!</h3>
            <p>We&apos;ll get back to you within one business day.</p>
            <Link href="/book-demo" className="btn-ojiva-primary mt-3 d-inline-flex align-items-center gap-2">
              🚀 Book a Full Demo
            </Link>
            <button className="btn-ojiva-ghost mt-2 d-block mx-auto" onClick={() => setStatus('idle')}>
              Send another message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="contact-page-grid">

      {/* ── Sidebar LEFT ── */}
      <div className="contact-info-col"><ContactSidebar /></div>

      {/* ── Form RIGHT ── */}
      <div className="contact-form-col">
        <motion.div
          className="cfn-outer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative blobs */}
          <div className="cfn-blob cfn-blob-1" aria-hidden="true" />
          <div className="cfn-blob cfn-blob-2" aria-hidden="true" />

          {/* White card */}
          <div className="cfn-card">

            {/* Header */}
            <div className="cfn-head">
              <span className="cfn-tag">Get In Touch</span>
              <h1 className="cfn-title">Contact Ojiva AI — Book a Free Demo</h1>
              <p className="cfn-sub">
                Fill in your details and our team will respond within one business day.{' '}
                <Link href="/book-demo" className="cfn-demo-link">Book a live demo →</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" aria-hidden="true" />

              <div className="row g-3">

                {/* Row 1: Name + Company */}
                <div className="col-12 col-md-6">
                  <Field label="Full Name" required>
                    <input name="name" type="text" className="cfn-input"
                      placeholder="Enter your full name"
                      value={form.name} onChange={handleChange} required autoComplete="name" />
                  </Field>
                </div>
                <div className="col-12 col-md-6">
                  <Field label="Company" optional>
                    <input name="company" type="text" className="cfn-input"
                      placeholder="Company name"
                      value={form.company} onChange={handleChange} autoComplete="organization" />
                  </Field>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="col-12 col-md-6">
                  <Field label="Work Email" required>
                    <input name="email" type="email" className="cfn-input"
                      placeholder="Enter your work email"
                      value={form.email} onChange={handleChange} required autoComplete="email" />
                  </Field>
                </div>
                <div className="col-12 col-md-6">
                  <Field label="Phone Number" required>
                    <div className="cfn-phone-wrap">
                      <span className="cfn-phone-prefix">+91</span>
                      <input name="phone" type="tel" className="cfn-phone-input"
                        placeholder="10-digit mobile number"
                        value={form.phone} onChange={handleChange} required
                        maxLength={10} inputMode="numeric" autoComplete="tel" />
                    </div>
                  </Field>
                </div>

                {/* Services chips */}
                <div className="col-12">
                  <Field label="Services Interested" required>
                    <div className="cf-chips-row" role="group" aria-label="Select services">
                      {SERVICES.map(({ id, icon, label }) => (
                        <button key={id} type="button"
                          className={`cf-chip${selected.includes(id) ? ' on' : ''}`}
                          onClick={() => toggleService(id)}
                          aria-pressed={selected.includes(id)}
                        >
                          <span aria-hidden="true">{icon}</span> {label}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                {/* Industry */}
                <div className="col-12 col-md-6">
                  <Field label="Industry" optional>
                    <select name="industry" className="cfn-select"
                      value={form.industry} onChange={handleChange}
                    >
                      <option value="">Select industry</option>
                      {INDUSTRIES.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <div className="col-12">
                  <Field label="Message" optional>
                    <textarea name="message" className="cfn-input cfn-textarea"
                      placeholder="Tell us about your requirements…"
                      value={form.message} onChange={handleChange} rows={3} />
                  </Field>
                </div>

                {/* Consent */}
                <div className="col-12">
                  <label className={`cf-consent${agreed ? ' checked' : ''}`} htmlFor="cfn-agree">
                    <input id="cfn-agree" type="checkbox" className="cf-consent-input"
                      checked={agreed} onChange={e => { setAgreed(e.target.checked); setErrorMsg(''); }} />
                    <span className="cf-consent-box" aria-hidden="true">{agreed ? '✓' : ''}</span>
                    <span className="cf-consent-text">
                      I authorize Ojiva AI to send notifications via SMS/Messages/Promotional/Informational messages and agree to the{' '}
                      <a href="/terms" className="cf-consent-link">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="cf-consent-link">Privacy Policy</a>.{' '}
                      <span style={{ color: '#dc2626' }}>*</span>
                    </span>
                  </label>
                </div>

                {errorMsg && (
                  <div className="col-12">
                    <motion.div className="cf-error" role="alert"
                      initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
                      ⚠️ {errorMsg}
                    </motion.div>
                  </div>
                )}

                {/* Submit */}
                <div className="col-12">
                  <button type="submit" className="cfn-submit-btn" disabled={status === 'loading'}>
                    {status === 'loading'
                      ? <><span className="contact-spinner" aria-hidden="true" /> Sending…</>
                      : 'Send Message →'
                    }
                  </button>
                  <p className="cfn-privacy">
                    We respect your inbox. Our team will reach out with a tailored plan within one business day.
                  </p>
                </div>

              </div>
            </form>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

function ContactSidebar() {
  return (
    <div className="contact-info-sidebar">

      {/* ── Contact Details Card ── */}
      <div className="cf-info-card">
        <div className="cf-info-card-header">
          <div className="cf-info-card-dot" />
          <span>Contact Information</span>
        </div>

        <div className="cf-info-list">
          <a href="mailto:ojiva.tech@gmail.com" className="cf-info-row">
            <div className="cf-info-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="cf-info-label">Email</p>
              <p className="cf-info-value">ojiva.tech@gmail.com</p>
            </div>
          </a>

          <a href="tel:+918431086185" className="cf-info-row">
            <div className="cf-info-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="cf-info-label">Phone</p>
              <p className="cf-info-value">+91 84310 86185</p>
            </div>
          </a>

          <div className="cf-info-row no-link">
            <div className="cf-info-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="cf-info-label">Office</p>
              <p className="cf-info-value">183, 2nd Floor, G Block<br />Byatarayanapura, Bengaluru 560092</p>
            </div>
          </div>

          <div className="cf-info-row no-link">
            <div className="cf-info-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="cf-info-label">Working Hours</p>
              <p className="cf-info-value">Mon – Sat · 10 AM – 7 PM IST</p>
            </div>
          </div>
        </div>

        {/* Book demo CTA inside the card */}
        <div className="cf-info-card-footer">
          <Link href="/book-demo" className="btn-ojiva-primary d-block text-center">
            Book a Free Demo →
          </Link>
          <p className="cf-info-card-note">30 min · Free · No commitment</p>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="contact-trust-strip">
        <div className="contact-trust-item"><span>⚡</span> Response within 24 hrs</div>
        <div className="contact-trust-item"><span>🔒</span> Your data stays private</div>
        <div className="contact-trust-item"><span>🤝</span> No commitment required</div>
      </div>

    </div>
  );
}
