const RCS_FEATURES = [
  {
    icon: 'bi-patch-check',
    title: 'Verified Business Identity',
    color: '#059669', bg: 'rgba(5,150,105,0.12)',
    desc: 'Your logo, business name, and a verified tick appear on every message you send — eliminating spoofing and building instant customer trust.',
  },
  {
    icon: 'bi-image',
    title: 'Rich Cards & Carousels',
    color: '#2563eb', bg: 'rgba(37,99,235,0.12)',
    desc: 'Showcase products, services, and offers with full-width images, titles, descriptions, and CTA buttons — all inside the native messaging app.',
  },
  {
    icon: 'bi-hand-index-thumb-fill',
    title: 'Interactive CTA Buttons',
    color: '#7c3aed', bg: 'rgba(124,58,237,0.12)',
    desc: 'Add "Buy Now", "Book Appointment", "Track Order", "Call Us" buttons directly in the message. One tap drives immediate conversion.',
  },
  {
    icon: 'bi-eye',
    title: 'Real-Time Read Receipts',
    color: '#0891b2', bg: 'rgba(8,145,178,0.12)',
    desc: 'See exactly when each recipient reads your message. Optimise send timing and follow-up sequences with accurate engagement data.',
  },
  {
    icon: 'bi-reply',
    title: 'Suggested Quick Replies',
    color: '#ea580c', bg: 'rgba(234,88,12,0.12)',
    desc: 'Pre-set reply options guide customers to respond instantly — "Yes, Confirm", "Reschedule", "Need Help". Reduces friction, increases response rates.',
  },
  {
    icon: 'bi-bar-chart-line',
    title: 'Campaign Analytics',
    color: '#db2777', bg: 'rgba(219,39,119,0.12)',
    desc: 'Delivery rates, read rates, button click tracking, carousel interactions — all in real-time. Far deeper insights than SMS ever provided.',
  },
];

export default function Features() {
  return (
    <section className="slp-section slp-section--alt" style={{ background: '#ffffff', color: '#1e293b' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#7c3aed' }}>Platform Capabilities</p>
          <h2 className="slp-section-title" style={{ color: '#0f172a' }}>Rich Features That Drive Engagement</h2>
          <p className="slp-section-desc" style={{ color: '#64748b' }}>
            Everything you need to turn a plain text message into an interactive brand experience
            that customers actually engage with.
          </p>
        </div>

        <div className="slp-card-grid">
          {RCS_FEATURES.map(({ icon, title, color, bg, desc }) => (
            <div key={title} className="slp-feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaf1', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}>
              <div className="slp-feature-icon" style={{ background: bg, color }}>
                <i className={`bi ${icon}`} />
              </div>
              <div className="slp-feature-title" style={{ color: '#1e293b' }}>{title}</div>
              <p className="slp-feature-desc" style={{ color: '#64748b' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
