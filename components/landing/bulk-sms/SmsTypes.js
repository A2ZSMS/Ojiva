const SMS_TYPES = [
  {
    icon: '📢',
    title: 'Promotional SMS',
    desc: 'Reach thousands of customers with offers, deals, and event campaigns. Perfect for flash sales, festive promotions, and loyalty rewards.',
    tag: 'Marketing',
    tagColor: '#60a5fa',
    tagBg: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
    note: 'Subject to DND restrictions',
  },
  {
    icon: '🔔',
    title: 'Transactional SMS',
    desc: 'Deliver critical alerts — order confirmations, payment receipts, shipping updates, and account notifications. Reaches DND numbers 24/7.',
    tag: 'DND Exempt',
    tagColor: '#34d399',
    tagBg: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
    note: 'Works on DND numbers',
  },
  {
    icon: '🔐',
    title: 'OTP SMS',
    desc: 'Lightning-fast one-time password delivery for logins, transactions, and identity verification. Sub-3 second average delivery with 99.9% success rate.',
    tag: 'Sub-3 Seconds',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.25)',
    note: 'Fastest OTP delivery in India',
  },
];

export default function SmsTypes() {
  return (
    <section className="slp-section slp-section--alt">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#34d399' }}>Message Types</p>
          <h2 className="slp-section-title">3 Types of Bulk SMS We Support</h2>
          <p className="slp-section-desc">
            Choose the right SMS type for your use case — we handle DLT registration,
            template approvals, and routing for all three.
          </p>
        </div>

        <div className="slp-type-grid">
          {SMS_TYPES.map(({ icon, title, desc, tag, tagColor, tagBg, border, note }) => (
            <div key={title} className="slp-type-card" style={{ borderColor: border }}>
              <div className="slp-type-icon">{icon}</div>
              <div className="slp-type-title">{title}</div>
              <p className="slp-type-desc">{desc}</p>
              <span className="slp-type-tag" style={{ color: tagColor, background: tagBg }}>{tag}</span>
              <p style={{ fontSize: '0.75rem', color: 'rgba(148,163,184,0.75)', marginTop: '0.75rem', marginBottom: 0 }}>
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
