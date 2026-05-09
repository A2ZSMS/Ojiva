'use client';

import LandingLeadForm from '../LandingLeadForm';

export default function Hero() {
  return (
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
  );
}
