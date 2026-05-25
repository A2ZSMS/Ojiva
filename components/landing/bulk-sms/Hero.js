import LandingLeadForm from '../LandingLeadForm';

const BULLETS = [
  'Lowest Bulk SMS Cost — Starting at just ₹0.15/SMS',
  '99.9% Uptime Guarantee — Your messages always go through',
  'DLT Compliant — Full compliance with TRAI regulations',
  'Real-Time Analytics — Track delivery & engagement live',
  'Instant Activation — Start sending in under 10 minutes',
];

const STATS = [
  { val: '₹0.15',  lbl: 'Starting Price' },
  { val: '99.9%',  lbl: 'Uptime'         },
  { val: '<2s',    lbl: 'OTP Delivery'   },
];

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

export default function Hero() {
  return (
    <section
      className="bs2-hero"
      style={{
        background: 'linear-gradient(135deg, #1E5BB8 0%, #1B48E0 50%, #0a4dc4 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
      }}
    >
      {/* Subtle decorative orbs for depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-50px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left copy ── */}
          <div className="col-12 col-lg-6">
            <div
              className="bs2-hero-badge"
              style={{
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.24)',
                color: '#ffffff',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            >
              <span className="bs2-hero-badge-dot" style={{ background: '#34d399' }} />
              India&apos;s Most Reliable Bulk SMS Provider — DLT Registered
            </div>

            <h1 className="bs2-hero-h1">
              <span style={{ color: '#ffffff' }}>
                The Most Reliable{' '}
                <span style={{ color: '#a5cffa' }}>Bulk SMS Service</span> in India
              </span>
            </h1>

            <p className="bs2-hero-desc" style={{ color: '#e2e8f0' }}>
              <span style={{ color: '#e2e8f0' }}>
                Looking for a cost-effective bulk message provider to scale your
                business communication? Ojiva AI delivers enterprise-grade bulk SMS
                solutions at the most competitive bulk SMS cost in India. Whether
                you need promotional SMS service, transactional SMS service, or OTP
                SMS provider solutions — we&apos;ve got you covered.
              </span>
            </p>

            <ul className="bs2-hero-bullets" style={{ listStyle: 'none', padding: 0 }}>
              {BULLETS.map(b => (
                <li
                  key={b}
                  style={{
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    marginBottom: '0.55rem',
                  }}
                >
                  <span
                    className="bs2-check"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(52,211,153,0.22)',
                      color: '#a7f3d0',
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: '#ffffff' }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="bs2-hero-stats" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {STATS.map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="bs2-hero-stat"
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.30)',
                    borderRadius: '12px',
                    padding: '0.85rem 1.1rem',
                    minWidth: '110px',
                    boxShadow: '0 8px 22px rgba(0,0,0,0.12)',
                  }}
                >
                  <span
                    className="bs2-hero-stat-val"
                    style={{ color: '#0f172a', fontWeight: 900, fontSize: '1.4rem', display: 'block' }}
                  >
                    {val}
                  </span>
                  <span
                    className="bs2-hero-stat-lbl"
                    style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right form ── */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div id="lead-form" className="bs2-form-card" style={{ scrollMarginTop: '90px' }}>
              <LandingLeadForm
                source="bulk-sms"
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
