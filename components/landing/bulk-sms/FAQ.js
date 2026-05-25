'use client';

import { useState } from 'react';
import ScrollToFormLink from './ScrollToFormLink';

/* PDF FAQs — locked content per spec */
const PDF_FAQS = [
  {
    q: 'What is the bulk SMS cost at Ojiva AI?',
    a: 'Our bulk SMS pricing India starts at just ₹0.15 per SMS for high-volume plans.',
  },
  {
    q: 'Are you a registered bulk SMS provider?',
    a: 'Yes, Ojiva AI is a fully DLT-compliant SMS service provider India.',
  },
  {
    q: 'Do you offer SMS gateway India?',
    a: 'Yes, we provide SMS gateway India with local circle routing for maximum delivery.',
  },
  {
    q: 'Can I integrate bulk SMS API?',
    a: 'Absolutely. We offer Bulk SMS API with easy SMS API integration service.',
  },
  {
    q: 'What is a transactional SMS service?',
    a: 'Transactional SMS service is used for critical alerts like OTPs, order confirmations, and payment receipts.',
  },
  {
    q: 'Do you offer promotional SMS service?',
    a: 'Yes, our promotional SMS service is perfect for marketing campaigns and offers.',
  },
  {
    q: 'How do I buy bulk SMS?',
    a: 'Simply sign up and buy bulk SMS credits based on your volume. No minimum commitment.',
  },
  {
    q: 'Are you a bulk message provider in Bangalore?',
    a: 'Yes, we are a trusted bulk SMS service provider in Bangalore with local support.',
  },
];

function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              background: '#ffffff',
              border: `1.5px solid ${isOpen ? 'rgba(27,72,224,0.30)' : 'rgba(148,163,184,0.20)'}`,
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.18s ease',
              boxShadow: isOpen ? '0 6px 24px rgba(27,72,224,0.08)' : 'none',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '1rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: isOpen ? '#1B48E0' : '#0f172a',
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isOpen ? 'rgba(27,72,224,0.12)' : 'rgba(148,163,184,0.12)',
                  color: isOpen ? '#1B48E0' : '#64748b',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'all 0.18s ease',
                }}
              >
                <i className="bi bi-plus-lg" />
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 1.15rem 1.15rem',
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.7,
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-start g-4 g-xl-5">

          {/* ── Left: Heading + Illustration ── */}
          <div className="col-12 col-lg-5">
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1B48E0',
                marginBottom: '0.85rem',
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Questions About Bulk SMS Service
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Everything you need to know about Ojiva AI&apos;s bulk SMS service in India.
            </p>

            <div
              style={{
                background: 'linear-gradient(135deg, #eef2ff 0%, #f4f7ff 100%)',
                borderRadius: '20px',
                padding: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dgyb9gbwi/images/w_800,h_754,c_scale/f_auto,q_auto/v1743761912/faq/faq.png"
                alt="Frequently asked questions about bulk SMS"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </div>

            <div style={{ paddingTop: '0.5rem' }}>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '0.85rem' }}>
                Have more questions? We&apos;re happy to help.
              </p>
              <ScrollToFormLink className="bs2-btn-primary">
                Talk to Our Team <i className="bi bi-arrow-right ms-2" />
              </ScrollToFormLink>
            </div>
          </div>

          {/* ── Right: Accordion ── */}
          <div className="col-12 col-lg-7">
            <FaqAccordion faqs={PDF_FAQS} />
          </div>

        </div>
      </div>
    </section>
  );
}
