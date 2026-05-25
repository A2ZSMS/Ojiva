import LandingLeadForm from '../LandingLeadForm';

const SMS_TYPE_OPTIONS = [
  { value: '',              label: 'Select SMS Type' },
  { value: 'promotional',   label: 'Promotional SMS' },
  { value: 'transactional', label: 'Transactional SMS' },
  { value: 'otp',           label: 'OTP SMS' },
  { value: 'api',           label: 'API Integration' },
];

const VOLUME_OPTIONS = [
  { value: '',               label: 'Select monthly volume' },
  { value: '<5000',          label: 'Below 5,000 SMS' },
  { value: '5000-25000',     label: '5,000 – 25,000 SMS' },
  { value: '25000-100000',   label: '25,000 – 1 Lakh SMS' },
  { value: '>100000',        label: 'Above 1 Lakh SMS' },
];

export default function FinalCTA() {
  return (
    <section
      style={{
        background: 'radial-gradient(at top left, #0a4d6f 0%, transparent 55%), radial-gradient(at bottom right, #023c86 0%, transparent 55%), linear-gradient(135deg, #062F44 0%, #0a3a5a 100%)',
        padding: '90px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.18), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.18), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left: Copy ── */}
          <div className="col-12 col-lg-6">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '1.2rem',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
              Test Bulk SMS Marketing Service !!
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {/* Span needed because globals.css forces h2 color via !important */}
              <span style={{ color: '#ffffff' }}>Turn Every Message Into Revenue</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                color: '#e2e8f0',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '540px',
              }}
            >
              <span style={{ color: '#e2e8f0' }}>
                Join 500+ Indian businesses delivering 10M+ messages every day with Ojiva AI.
                Fill the form and our expert will contact you within 2 hours with custom pricing.
              </span>
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.7rem' }}>
              {[
                'Lowest bulk SMS cost — starting at ₹0.15/SMS',
                'No setup fees · No minimum commitment',
                'DLT compliant · Go live in under 10 minutes',
                'Free demo · Free consultation',
              ].map(b => (
                <li
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.95rem',
                    color: '#ffffff',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(52,211,153,0.20)',
                      color: '#a7f3d0',
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    <i className="bi bi-check-lg" />
                  </span>
                  <span style={{ color: '#ffffff' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Form ── */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div className="bs2-form-card">
              <LandingLeadForm
                source="bulk-sms-final-cta"
                title="Claim Your Free Demo & Pricing"
                subtitle="Takes 30 seconds · No credit card · Our expert calls you back"
                submitLabel="Get My Free Setup →"
                scarcityText={<>Only <strong>5 DLT registration spots left this month</strong> — grab yours before they&apos;re gone 🔥</>}
                thankYouUrl="/thank-you"
                services={SMS_TYPE_OPTIONS}
                serviceLabel="SMS Type"
                volumeOptions={VOLUME_OPTIONS}
                volumeLabel="Monthly SMS Requirement"
                messageLabel="Your Requirement"
                accentColor="#1B48E0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
