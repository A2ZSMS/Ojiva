'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';

const ACCESS_KEY = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'ojiva.tech@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 84310 86185' },
  {
    icon: '📍',
    label: 'Office',
    value:
      '183, 2nd Floor, G Block\nOpposite Reliance Trends, Sahakara Nagar Main Rd\nByatarayanapura, Bengaluru\nKarnataka 560092',
  },
  { icon: '🕑', label: 'Hours', value: 'Mon–Sat, 10:00 AM – 7:00 PM IST' },
];

export default function ContactForm() {
  // 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    interest: '',
    message: '',
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const formData = new FormData(e.target);
      formData.append('access_key', ACCESS_KEY);
      // Optional: set a subject line in the email you receive
      formData.append(
        'subject',
        `New Demo Request from ${form.name} — ${form.company || 'Ojiva AI'}`
      );
      // Honeypot to block spam bots
      formData.append('botcheck', '');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', size: '', interest: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <div className="row g-5 align-items-start">
      {/* ── Form ── */}
      <div className="col-12 col-lg-7">
        <div className="contact-form-wrap">
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--dark)',
              marginBottom: '0.5rem',
            }}
          >
            Request a Demo
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}
          >
            Tell us about your business and we will book a personalised
            walkthrough within one business day.
          </p>

          {/* ── Success State ── */}
          {status === 'success' ? (
            <div className="text-center py-5">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: '0.5rem',
                }}
              >
                Request received!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Our team will reach out within one business day to schedule your
                demo.
              </p>
              <button
                className="btn-ojiva-outline mt-4"
                onClick={() => setStatus('idle')}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Demo request form">
              {/* Hidden honeypot field — Web3Forms spam protection */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" />

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contact-email">
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contact-company">
                    Company *
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="form-control"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contact-size">
                    Company Size
                  </label>
                  <select
                    id="contact-size"
                    name="size"
                    className="form-select"
                    value={form.size}
                    onChange={handleChange}
                  >
                    <option value="">Select size</option>
                    <option value="1-50">1 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="201-1000">201 – 1,000 employees</option>
                    <option value="1001+">1,001+ employees</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="contact-interest">
                    Primary Interest
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    className="form-select"
                    value={form.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select a module</option>
                    <option value="AI Messaging Automation">AI Messaging Automation</option>
                    <option value="AI Voice Automation">AI Voice Automation</option>
                    <option value="Lead Intelligence & Routing">Lead Intelligence &amp; Routing</option>
                    <option value="Workflow Orchestration">Workflow Orchestration</option>
                    <option value="Full Enterprise Platform">Full Enterprise Platform</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Tell us about your use case or any specific questions..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="col-12">
                    <div
                      role="alert"
                      style={{
                        background: 'rgba(239,68,68,0.08)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        color: '#dc2626',
                        fontSize: '0.88rem',
                      }}
                    >
                      ⚠️ {errorMsg}
                    </div>
                  </div>
                )}

                <div className="col-12 mt-2">
                  <button
                    type="submit"
                    className="btn-ojiva-primary w-100"
                    style={{ padding: '0.85rem' }}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Submit Demo Request'}
                  </button>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.75rem',
                      textAlign: 'center',
                    }}
                  >
                    No spam. We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── Contact Info ── */}
      <div className="col-12 col-lg-4 offset-lg-1">
        <div className="mb-4">
          <SectionHeading
            tag="Business Inquiries"
            title="Let's talk"
            subtitle="Whether you need a demo, have a technical question, or want to discuss an enterprise deal — we're ready."
          />
        </div>

        {CONTACT_INFO.map(({ icon, label, value }) => (
          <div className="contact-info-item" key={label}>
            <div className="contact-info-icon" aria-hidden="true">
              {icon}
            </div>
            <div>
              <p className="contact-info-label">{label}</p>
              <p className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
