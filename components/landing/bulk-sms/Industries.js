import ScrollToFormLink from './ScrollToFormLink';

const INDUSTRIES = [
  { icon: 'bi-bag-fill',         title: 'E-commerce',           desc: 'Order updates, cart reminders, promo alerts.',            color: '#1B48E0' },
  { icon: 'bi-bank',             title: 'Banking & Finance',     desc: 'Transaction alerts, OTP, EMI reminders.',                 color: '#16a34a' },
  { icon: 'bi-mortarboard-fill', title: 'Education',             desc: 'Exam schedules, fee reminders, attendance alerts.',       color: '#7c3aed' },
  { icon: 'bi-heart-pulse-fill', title: 'Healthcare',            desc: 'Appointment reminders, lab reports, health tips.',        color: '#dc2626' },
  { icon: 'bi-building-fill',    title: 'Real Estate',           desc: 'Property alerts, site visit reminders, payment updates.', color: '#d97706' },
  { icon: 'bi-airplane-fill',    title: 'Travel & Hospitality',  desc: 'Booking confirmations, itinerary updates, offers.',       color: '#0891b2' },
  { icon: 'bi-shop',             title: 'Retail & FMCG',         desc: 'Festive offers, loyalty program alerts, restock notifications.', color: '#be185d' },
];

export default function Industries() {
  return (
    <section style={{ background: '#F6F9FE', padding: '80px 0' }}>
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
            INDUSTRIES WE SERVE
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
            Bulk SMS Service for Every Industry
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Ojiva AI powers bulk SMS communication across every major industry vertical
            in India — from startups to enterprise.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.1rem',
          }}
        >
          {INDUSTRIES.map(({ icon, title, desc, color }) => (
            <div
              key={title}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(148,163,184,0.18)',
                borderRadius: '16px',
                padding: '1.5rem 1.35rem',
                transition: 'all 0.18s ease',
                position: 'relative',
                overflow: 'hidden',
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
                  background: `${color}15`,
                  color,
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                }}
              >
                <i className={`bi ${icon}`} />
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.45rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <ScrollToFormLink className="bs2-btn-primary">
            Get a Custom Solution for Your Industry <i className="bi bi-arrow-right ms-2" />
          </ScrollToFormLink>
        </div>
      </div>
    </section>
  );
}
