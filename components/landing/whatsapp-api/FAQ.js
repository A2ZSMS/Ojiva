'use client';

import { useState } from 'react';

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

export default function FAQ() {
  return (
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
  );
}
