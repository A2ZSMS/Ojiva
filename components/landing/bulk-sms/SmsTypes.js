import Link from 'next/link';

const SMS_TYPES = [
  {
    icon: '📤',
    title: 'Bulk SMS Service',
    color: '#1B48E0',
    bg: 'rgba(27,72,224,0.08)',
    border: 'rgba(27,72,224,0.18)',
    desc: 'Send millions of messages instantly to your entire customer base across all Indian networks.',
    features: [
      'Multi-operator smart routing',
      'CSV / Excel contact upload',
      'Custom sender ID',
      'Real-time delivery reports',
      'Supports Unicode & Hindi',
    ],
    tag: 'Most Popular',
    tagColor: '#1B48E0',
  },
  {
    icon: '🔔',
    title: 'Transactional SMS',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.18)',
    desc: 'Deliver critical business alerts — orders, payments, shipments. Reaches DND numbers 24/7.',
    features: [
      'DND-exempt delivery 24×7',
      'Order & payment alerts',
      'Shipping & delivery updates',
      'Account & KYC notifications',
      '99.9% delivery guarantee',
    ],
    tag: 'DND Exempt',
    tagColor: '#16a34a',
  },
  {
    icon: '📢',
    title: 'Promotional SMS',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.18)',
    desc: 'Run high-impact marketing campaigns — flash sales, offers, and seasonal promotions.',
    features: [
      'Flash sale & offer campaigns',
      'Audience segmentation',
      'Scheduled sending',
      'Campaign analytics & CTR',
      'Opt-out management',
    ],
    tag: 'Marketing',
    tagColor: '#d97706',
  },
  {
    icon: '🔐',
    title: 'OTP SMS — Get Alerts',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.18)',
    desc: 'Lightning-fast one-time passwords for login, 2FA, and payment verification.',
    features: [
      'Sub-3 second delivery',
      '2FA & login verification',
      'Payment OTP',
      '99.9% success rate',
      'Automatic retry on failure',
    ],
    tag: 'Sub-3 Seconds',
    tagColor: '#7c3aed',
  },
];

export default function SmsTypes() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">OUR SERVICES</p>
          <h2 className="bs2-section-title">Bulk SMS Service for Every Business Need</h2>
          <p className="bs2-section-desc">
            From promotional campaigns to critical OTPs — we have the right SMS
            type for the right moment.
          </p>
        </div>

        <div className="bs2-type-grid">
          {SMS_TYPES.map(({ icon, title, color, bg, border, desc, features, tag, tagColor }) => (
            <div key={title} className="bs2-type-card" style={{ borderTopColor: color }}>
              <div className="bs2-type-top" style={{ background: bg, borderColor: border }}>
                <div className="bs2-type-icon-wrap" style={{ background: color }}>
                  <span>{icon}</span>
                </div>
                <span className="bs2-type-tag" style={{ color: tagColor, background: `${tagColor}18`, border: `1px solid ${tagColor}40` }}>{tag}</span>
              </div>
              <div className="bs2-type-body">
                <h3 className="bs2-type-title">{title}</h3>
                <p className="bs2-type-desc">{desc}</p>
                <ul className="bs2-type-features">
                  {features.map(f => (
                    <li key={f}>
                      <i className="bi bi-check-circle-fill" style={{ color }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bs2-type-footer">
                <Link href="/contact" className="bs2-type-link" style={{ color }}>
                  Get Started <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
