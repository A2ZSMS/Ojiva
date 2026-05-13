import Link from 'next/link';

const FEATURES = [
  { icon: 'bi-megaphone-fill',     title: 'Mass Promotional SMS',        desc: 'Reach millions with flash sales, seasonal offers, and loyalty campaigns in one click.' },
  { icon: 'bi-people-fill',        title: 'Audience-Segment Sender',     desc: 'Target by city, age group, purchase history, or custom fields for higher relevance.' },
  { icon: 'bi-toggle-on',          title: 'Opt-in / Opt-Out Tracking',   desc: 'Auto-manage DND and opt-out lists to stay TRAI compliant at all times.' },
  { icon: 'bi-bar-chart-fill',     title: 'App-Tier Analytics',           desc: 'Real-time delivery, click-through, and conversion dashboards in your platform.' },
  { icon: 'bi-link-45deg',         title: 'URL Shortener & Tracking',    desc: 'Short branded links with click tracking — see exactly who clicked your SMS.' },
  { icon: 'bi-robot',              title: 'AI Template Management',       desc: 'AI-generated DLT-ready templates approved faster with smart content suggestions.' },
];

export default function FullFeatures() {
  return (
    <section className="bs2-section bs2-section--light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">PLATFORM FEATURES</p>
          <h2 className="bs2-section-title">Everything You Need to Scale with Bulk SMS</h2>
          <p className="bs2-section-desc">
            From campaign creation to delivery analytics — your complete bulk SMS toolkit,
            all on one platform.
          </p>
        </div>

        <div className="bs2-ff-grid">
          {/* Left: Feature cards */}
          <div className="bs2-ff-cards">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="bs2-ff-card">
                <div className="bs2-ff-icon">
                  <i className={`bi ${icon}`} />
                </div>
                <div>
                  <div className="bs2-ff-title">{title}</div>
                  <p className="bs2-ff-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual mockup */}
          <div className="bs2-ff-visual">
            <div className="bs2-ff-phone">
              <div className="bs2-ff-phone-top">
                <div className="bs2-ff-phone-dot" />
                <div className="bs2-ff-phone-dot" />
                <div className="bs2-ff-phone-dot" />
              </div>
              <div className="bs2-ff-phone-screen">
                <div className="bs2-ff-screen-label">Promotional SMS</div>
                <div className="bs2-ff-msg">
                  <div className="bs2-ff-msg-from">OJIVAI</div>
                  <div className="bs2-ff-msg-text">
                    🎉 Exclusive 40% OFF on all orders today!
                    Use code <strong>FLASH40</strong>. Hurry — offer ends at midnight.
                    Shop now: ojiva.ai/sale
                  </div>
                  <div className="bs2-ff-msg-time">Delivered · 0.8s</div>
                </div>
                <div className="bs2-ff-stats-mini">
                  <div className="bs2-ff-stats-mini-item">
                    <span className="bs2-ff-stats-mini-val" style={{ color: '#16a34a' }}>98.6%</span>
                    <span className="bs2-ff-stats-mini-lbl">Delivered</span>
                  </div>
                  <div className="bs2-ff-stats-mini-item">
                    <span className="bs2-ff-stats-mini-val" style={{ color: '#1B48E0' }}>34%</span>
                    <span className="bs2-ff-stats-mini-lbl">CTR</span>
                  </div>
                  <div className="bs2-ff-stats-mini-item">
                    <span className="bs2-ff-stats-mini-val" style={{ color: '#7c3aed' }}>2.4s</span>
                    <span className="bs2-ff-stats-mini-lbl">Avg Speed</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact" className="bs2-btn-primary mt-4 d-inline-flex">
              Start Free Trial <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
