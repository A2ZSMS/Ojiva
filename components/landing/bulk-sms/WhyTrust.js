import ScrollToFormLink from './ScrollToFormLink';

const BULLETS = [
  {
    stat: '₹0.15',
    statLabel: 'per SMS',
    title: 'Lowest Bulk SMS Cost',
    desc: 'Starting at just ₹0.15/SMS with no hidden charges.',
    color: '#1B48E0',
  },
  {
    stat: '99.9%',
    statLabel: 'uptime',
    title: 'Uptime Guarantee',
    desc: 'Your messages always go through — every time.',
    color: '#16a34a',
  },
  {
    stat: '100%',
    statLabel: 'DLT',
    title: 'DLT Compliant',
    desc: 'Full compliance with TRAI regulations. No blocked messages.',
    color: '#7c3aed',
  },
  {
    stat: 'Live',
    statLabel: 'tracking',
    title: 'Real-Time Analytics',
    desc: 'Track delivery, opens, and click-throughs live.',
    color: '#d97706',
  },
  {
    stat: '<10',
    statLabel: 'minutes',
    title: 'Instant Activation',
    desc: 'Start sending in under 10 minutes after sign-up.',
    color: '#0891b2',
  },
];

export default function WhyTrust() {
  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #023c86 0%, #0070b2 100%)',
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
          top: '-80px',
          right: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left: Copy + Bullets ── */}
          <div className="col-12 col-lg-7">
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#a5cffa',
                marginBottom: '0.85rem',
              }}
            >
              WHY OJIVA AI
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#ffffff' }}>
                Why Businesses Trust Ojiva AI as Their Bulk SMS Provider
              </span>
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#e2e8f0',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              <span style={{ color: '#e2e8f0' }}>
                Five reasons 500+ Indian businesses choose Ojiva AI over every other SMS gateway.
              </span>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '1.75rem' }}>
              {BULLETS.map(({ stat, statLabel, title, desc, color }) => (
                <div
                  key={title}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.20)',
                    borderRadius: '12px',
                    padding: '1.1rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '0.55rem' }}>
                    <span style={{ fontSize: '1.45rem', fontWeight: 900, color, letterSpacing: '-0.02em', lineHeight: 1 }}>
                      {stat}
                    </span>
                    <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#94a3b8' }}>
                      {statLabel}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <ScrollToFormLink
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.85rem 1.65rem',
                background: '#ffffff',
                color: '#023c86',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
              }}
            >
              Get Started <i className="bi bi-arrow-right" />
            </ScrollToFormLink>
          </div>

          {/* ── Right: Illustration ── */}
          <div className="col-12 col-lg-5">
            <div
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '24px',
                padding: '1.5rem',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 16px 50px rgba(0,0,0,0.20)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dgyb9gbwi/images/w_426,h_473,c_scale/f_auto,q_auto/v1760694157/bulk-sms-provider/bulk-sms-provider.png"
                alt="Why choose Ojiva AI bulk SMS service"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', background: '#ffffff' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
