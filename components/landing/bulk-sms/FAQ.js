'use client';

import { useState } from 'react';
import Link from 'next/link';

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

export default function FAQ({ faqs }) {
  return (
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
  );
}
