import ScrollToFormLink from './ScrollToFormLink';

const HIGHLIGHTS = [
  { icon: 'bi-bar-chart-fill', title: 'Live Delivery Analytics', desc: 'Real-time delivery, open & click-through rates updated every second.' },
  { icon: 'bi-graph-up-arrow', title: 'Campaign Performance',    desc: 'Compare campaigns side-by-side. See what works, what doesn’t.' },
  { icon: 'bi-link-45deg',     title: 'URL Shortener + Tracking', desc: 'Branded short links with click attribution per recipient.' },
  { icon: 'bi-people-fill',    title: 'Audience Segmentation',    desc: 'Slice your list by city, behavior, or custom fields.' },
];

export default function DashboardPreview() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left: SendGun illustration ── */}
          <div className="col-12 col-lg-6">
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #eef2ff 0%, #f4f7ff 100%)',
                borderRadius: '24px',
                padding: '2rem',
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dgyb9gbwi/images/w_1024,h_891,c_scale/f_auto,q_auto/v1760607774/sms-sendgun/sms-sendgun.png"
                alt="Ojiva AI Bulk SMS dashboard preview"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                }}
              />
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div className="col-12 col-lg-6">
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
              DASHBOARD PREVIEW
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
              See Your Campaigns. Track Every Message.
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              A clean, intuitive dashboard built for marketers and developers alike — real-time
              delivery reports, click analytics, and campaign performance, all in one place.
            </p>

            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.75rem' }}>
              {HIGHLIGHTS.map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(27,72,224,0.10)',
                      color: '#1B48E0',
                      flexShrink: 0,
                      fontSize: '1rem',
                    }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
                      {title}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <ScrollToFormLink className="bs2-btn-primary">
              Get Started <i className="bi bi-arrow-right ms-2" />
            </ScrollToFormLink>
          </div>
        </div>
      </div>
    </section>
  );
}
