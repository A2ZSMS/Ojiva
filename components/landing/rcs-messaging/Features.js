const RCS_FEATURES = [
  {
    icon: 'bi-patch-check',
    title: 'Verified Business Identity',
    color: '#34d399', bg: 'rgba(52,211,153,0.12)',
    desc: 'Your logo, business name, and a verified tick appear on every message you send — eliminating spoofing and building instant customer trust.',
  },
  {
    icon: 'bi-image',
    title: 'Rich Cards & Carousels',
    color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',
    desc: 'Showcase products, services, and offers with full-width images, titles, descriptions, and CTA buttons — all inside the native messaging app.',
  },
  {
    icon: 'bi-hand-index',
    title: 'Interactive CTA Buttons',
    color: '#a78bfa', bg: 'rgba(167,139,250,0.12)',
    desc: 'Add "Buy Now", "Book Appointment", "Track Order", "Call Us" buttons directly in the message. One tap drives immediate conversion.',
  },
  {
    icon: 'bi-eye',
    title: 'Real-Time Read Receipts',
    color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',
    desc: 'See exactly when each recipient reads your message. Optimise send timing and follow-up sequences with accurate engagement data.',
  },
  {
    icon: 'bi-reply',
    title: 'Suggested Quick Replies',
    color: '#fb923c', bg: 'rgba(251,146,60,0.12)',
    desc: 'Pre-set reply options guide customers to respond instantly — "Yes, Confirm", "Reschedule", "Need Help". Reduces friction, increases response rates.',
  },
  {
    icon: 'bi-bar-chart-line',
    title: 'Campaign Analytics',
    color: '#f472b6', bg: 'rgba(244,114,182,0.12)',
    desc: 'Delivery rates, read rates, button click tracking, carousel interactions — all in real-time. Far deeper insights than SMS ever provided.',
  },
];

export default function Features() {
  return (
    <section className="slp-section slp-section--alt">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>Platform Capabilities</p>
          <h2 className="slp-section-title">Rich Features That Drive Engagement</h2>
          <p className="slp-section-desc">
            Everything you need to turn a plain text message into an interactive brand experience
            that customers actually engage with.
          </p>
        </div>

        <div className="slp-card-grid">
          {RCS_FEATURES.map(({ icon, title, color, bg, desc }) => (
            <div key={title} className="slp-feature-card">
              <div className="slp-feature-icon" style={{ background: bg, color }}>
                <i className={`bi ${icon}`} />
              </div>
              <div className="slp-feature-title">{title}</div>
              <p className="slp-feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
