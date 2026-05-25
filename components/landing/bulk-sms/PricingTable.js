import ScrollToFormLink from './ScrollToFormLink';

const PLANS = [
  {
    name: 'Starter',
    volume: 'Below 5,000 SMS',
    price: '₹0.20',
    suffix: '/SMS',
    desc: 'Perfect for small businesses & startups',
    color: '#1B48E0',
    bg: 'rgba(27,72,224,0.06)',
    border: 'rgba(27,72,224,0.20)',
    features: [
      'All 4 SMS types included',
      'Real-time delivery reports',
      'Web dashboard access',
      'Email support',
      'DLT registration help',
    ],
    badge: null,
  },
  {
    name: 'Growth',
    volume: '5,000 – 25,000 SMS',
    price: '₹0.18',
    suffix: '/SMS',
    desc: 'For scaling teams',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.06)',
    border: 'rgba(22,163,74,0.20)',
    features: [
      'Everything in Starter',
      'Campaign scheduling',
      'API access',
      'Priority routing',
      'Phone + email support',
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    volume: '25,000 – 1 Lakh SMS',
    price: '₹0.16',
    suffix: '/SMS',
    desc: 'For e-commerce & SaaS',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.20)',
    features: [
      'Everything in Growth',
      'Advanced analytics dashboard',
      'Multi-user accounts',
      'Custom sender IDs',
      'Dedicated account manager',
    ],
    badge: null,
  },
  {
    name: 'Enterprise',
    volume: 'Above 1 Lakh SMS',
    price: '₹0.15',
    suffix: '/SMS',
    desc: 'High-volume, custom routing',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.06)',
    border: 'rgba(217,119,6,0.20)',
    features: [
      'Everything in Business',
      'Custom routing rules',
      'White-label dashboard',
      '24/7 dedicated support',
      'SLA-backed uptime',
    ],
    badge: 'Best Value',
  },
];

export default function PricingTable() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">PRICING</p>
          <h2 className="bs2-section-title">Transparent Pricing. No Hidden Fees.</h2>
          <p className="bs2-section-desc">
            Simple, volume-based pricing for every business size. No setup fees.
            No minimum commitment.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
        >
          {PLANS.map(({ name, volume, price, suffix, desc, color, bg, border, features, badge }) => (
            <div
              key={name}
              style={{
                background: '#ffffff',
                border: `2px solid ${border}`,
                borderRadius: '18px',
                padding: '1.75rem 1.35rem 1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: badge ? '0 12px 36px rgba(15,23,42,0.10)' : '0 2px 8px rgba(15,23,42,0.04)',
                transform: badge === 'Most Popular' ? 'translateY(-8px)' : 'none',
              }}
            >
              {badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: color,
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {badge}
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    color,
                    marginBottom: '0.5rem',
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: '#64748b',
                    marginBottom: '0.75rem',
                  }}
                >
                  {volume}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                  <span
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 900,
                      color: '#0f172a',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {price}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                    {suffix}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', marginBottom: 0 }}>
                  {desc}
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'grid', gap: '0.55rem', flexGrow: 1 }}>
                {features.map(f => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      color: '#334155',
                      lineHeight: 1.5,
                    }}
                  >
                    <i className="bi bi-check-circle-fill" style={{ color, fontSize: '0.95rem', marginTop: '2px', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <ScrollToFormLink
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: badge ? color : 'transparent',
                  color: badge ? '#fff' : color,
                  border: `2px solid ${color}`,
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                Get Started <i className="bi bi-arrow-right" />
              </ScrollToFormLink>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          All plans include DLT registration support, sender ID setup, and free template approval.
        </p>
      </div>
    </section>
  );
}
