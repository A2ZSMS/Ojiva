import ScrollToFormLink from './ScrollToFormLink';

const SMS_TYPES = [
  {
    icon: 'bi-megaphone-fill',
    title: 'Promotional SMS Service',
    color: '#d97706',
    desc: 'Run marketing campaigns, offers & alerts. 98% open rate guaranteed.',
    features: [
      'Flash sale & offer campaigns',
      'Audience segmentation',
      'Scheduled sending',
      'Campaign analytics',
      'Opt-out management',
    ],
    tag: '98% Open Rate',
  },
  {
    icon: 'bi-bell-fill',
    title: 'Transactional SMS Service',
    color: '#16a34a',
    desc: 'Order confirmations, delivery updates, payment receipts. High priority routing.',
    features: [
      'DND-exempt delivery 24×7',
      'Order & payment alerts',
      'Shipping & delivery updates',
      'KYC & account notifications',
      'High priority routing',
    ],
    tag: 'High Priority',
  },
  {
    icon: 'bi-shield-lock-fill',
    title: 'OTP SMS Service Provider',
    color: '#7c3aed',
    desc: 'Two-factor authentication, login verification, secure OTP delivery in < 2 seconds.',
    features: [
      'Sub-2 second delivery',
      '2FA & login verification',
      'Payment OTP',
      '99.9% success rate',
      'Automatic retry on failure',
    ],
    tag: '< 2 Seconds',
  },
  {
    icon: 'bi-code-slash',
    title: 'Bulk SMS API',
    color: '#1B48E0',
    desc: 'RESTful API for developers. Integrate with CRM, ERP, or custom apps easily.',
    features: [
      'RESTful API endpoints',
      'CRM & ERP integration',
      'Webhook support',
      'SDKs for major languages',
      'Detailed API docs',
    ],
    tag: 'Developer-First',
  },
  {
    icon: 'bi-broadcast',
    title: 'SMS Gateway India',
    color: '#0891b2',
    desc: 'DLT compliant gateway with local & international routing.',
    features: [
      'Local circle routing',
      'International coverage',
      'Multi-operator support',
      'DLT compliant',
      'High throughput',
    ],
    tag: 'DLT Compliant',
  },
  {
    icon: 'bi-tools',
    title: 'SMS API Integration Service',
    color: '#be185d',
    desc: 'Dedicated support team to help you integrate SMS within 24 hours.',
    features: [
      '24-hour integration support',
      'Dedicated engineer assigned',
      'Custom integration help',
      'Free testing environment',
      'Post-launch monitoring',
    ],
    tag: '24-hour Setup',
  },
];

export default function SmsTypes() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
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
            OUR SERVICES
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
            Your One-Stop Bulk SMS Solutions Provider
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Ojiva AI is more than just a bulk SMS sender. We offer a complete ecosystem
            of bulk SMS messaging services tailored for every business need.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {SMS_TYPES.map(({ icon, title, color, desc, features, tag }) => (
            <div
              key={title}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(148,163,184,0.20)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem 1.5rem',
                transition: 'all 0.18s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(15,23,42,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                    color: '#ffffff',
                    fontSize: '1.35rem',
                    boxShadow: `0 8px 20px ${color}40`,
                  }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    borderRadius: '999px',
                    padding: '0.3rem 0.7rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.55rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}
              >
                {desc}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'grid', gap: '0.5rem', flexGrow: 1 }}>
                {features.map(f => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.86rem',
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
                  padding: '0.7rem 1rem',
                  background: color,
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                  boxShadow: `0 6px 16px ${color}40`,
                }}
              >
                Get Started <i className="bi bi-arrow-right" />
              </ScrollToFormLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
