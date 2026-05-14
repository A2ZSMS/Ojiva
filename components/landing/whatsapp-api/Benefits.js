const BENEFITS = [
  {
    icon: 'bi-broadcast',
    title: 'Bulk Messaging at Scale',
    desc: 'Send thousands of personalised messages instantly — promotions, updates, alerts — with a 98% open rate. Reach your entire customer base in minutes, not hours.',
    color: '#25d366', bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: 'bi-bell-fill',
    title: 'Automated Notifications',
    desc: 'Order confirmations, payment receipts, OTP deliveries, and appointment alerts — all automated without any manual work. Set it once, run it forever.',
    color: '#1B48E0', bg: 'rgba(27,72,224,0.12)',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Green Tick Verified Profile',
    desc: 'Get the official Meta green tick verification badge on your business profile. Build instant trust and credibility — customers know they\'re talking to the real brand.',
    color: '#25d366', bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: 'bi-plug-fill',
    title: 'Easy API Integration',
    desc: 'Connect your CRM, ERP, e-commerce store, or any business tool in minutes. 80+ native integrations — Salesforce, HubSpot, Shopify, Razorpay, Zoho, and more.',
    color: '#7C3AED', bg: 'rgba(124,58,237,0.12)',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Real-Time Analytics',
    desc: 'Track delivery rates, read receipts, click-throughs, and campaign ROI on a live dashboard. Know exactly what\'s working and optimise every campaign in real time.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
  },
  {
    icon: 'bi-image-fill',
    title: 'Rich Media Templates',
    desc: 'Send images, videos, PDFs, carousels, and interactive buttons — not just plain text. Rich media templates drive 3× higher engagement than text-only messages.',
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
