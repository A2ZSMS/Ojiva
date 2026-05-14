const BENEFITS = [
  {
    icon: 'bi-broadcast',
    title: 'Send to 10,00,000+ Contacts Instantly',
    desc: 'Stop sending 500 emails and hoping. Blast promotional, transactional, and interactive WhatsApp messages to your entire list in one click — with 98% guaranteed open rate.',
    color: '#25d366', bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: 'bi-robot',
    title: 'Automate Replies 24/7 — Zero Coding',
    desc: 'Your sales team sleeps. Your WhatsApp bot doesn\'t. Set up keyword triggers, qualify leads, take orders, and route hot prospects to live agents — all without writing a line of code.',
    color: '#1B48E0', bg: 'rgba(27,72,224,0.12)',
  },
  {
    icon: 'bi-image',
    title: 'Rich Catalogues, Buttons & PDFs',
    desc: 'Plain text is dead. Send product catalogues, interactive CTA buttons, quick-reply menus, images, videos, and PDF brochures — the kind of messages that actually get responses.',
    color: '#7C3AED', bg: 'rgba(124,58,237,0.12)',
  },
  {
    icon: 'bi-shield-check',
    title: 'No DLT Required. 100% Meta Compliant.',
    desc: 'Unlike SMS, WhatsApp does NOT need TRAI DLT registration. We handle all Meta template approvals for you. Go live in 48 hours with zero regulatory headaches.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Sub-3 Second Delivery. 99.9% Uptime.',
    desc: 'Transactional OTPs, order updates, and payment reminders delivered in under 3 seconds. Our enterprise-grade infrastructure guarantees 99.9% uptime with zero message drops.',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.12)',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'See Exactly What\'s Working — Live',
    desc: 'Delivery receipts, read rates, click-throughs, reply rates, and campaign ROI all on a single live dashboard. Know which campaign made money and which one to cut.',
    color: '#ec4899', bg: 'rgba(236,72,153,0.12)',
  },
];

export default function Benefits() {
  return (
    <section className="lp-section">
      <div className="container">
        <div className="lp-section-label">What You Get</div>
        <h2 className="lp-section-h2">
          Everything your business needs to win on WhatsApp
        </h2>
        <p className="lp-section-p">
          Not just API access — a complete WhatsApp growth stack built for
          Indian businesses.
        </p>
        <div className="lp-features">
          {BENEFITS.map(({ icon, title, desc, color, bg }) => (
            <div key={title} className="lp-feature-card">
              <div
                className="lp-feature-icon"
                style={{ background: bg, color }}
              >
                <i className={`bi ${icon}`} />
              </div>
              <h3 className="lp-feature-title">{title}</h3>
              <p className="lp-feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
