'use client';

import LandingLeadForm from '../LandingLeadForm';

export default function Hero() {
  return (
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
  );
}
