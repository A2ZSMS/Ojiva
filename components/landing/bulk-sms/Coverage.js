const CITIES = [
  { name: 'Bangalore',  highlight: true  },
  { name: 'Mumbai',     highlight: false },
  { name: 'Delhi NCR',  highlight: false },
  { name: 'Pune',       highlight: false },
  { name: 'Hyderabad',  highlight: false },
  { name: 'Chennai',    highlight: false },
  { name: 'Kolkata',    highlight: false },
  { name: 'Ahmedabad',  highlight: false },
  { name: 'Jaipur',     highlight: false },
  { name: 'Lucknow',    highlight: false },
  { name: 'Kochi',      highlight: false },
  { name: 'Chandigarh', highlight: false },
];

const TELECOM = [
  { name: 'Airtel',         color: '#E40000' },
  { name: 'Jio',            color: '#0F3CC9' },
  { name: 'Vodafone Idea',  color: '#EE2624' },
  { name: 'BSNL',           color: '#003F87' },
];

export default function Coverage() {
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
            PAN-INDIA COVERAGE
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#0f172a' }}>Leading Bulk SMS Service Provider in Bangalore &amp; Across India</span>
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
            Ojiva AI is a premier bulk SMS service provider in India, with a strong
            presence in Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai, and all
            major cities. Our bulk SMS service India network ensures high-speed
            delivery across all telecom circles — Airtel, Jio, Vodafone Idea, and BSNL.
          </p>
        </div>

        {/* City Tag Cloud */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            maxWidth: '900px',
            margin: '0 auto 2.5rem',
          }}
        >
          {CITIES.map(({ name, highlight }) => (
            <span
              key={name}
              style={{
                padding: '0.55rem 1.1rem',
                background: highlight ? 'rgba(27,72,224,0.10)' : '#f8fafc',
                border: highlight ? '1.5px solid rgba(27,72,224,0.35)' : '1.5px solid rgba(148,163,184,0.22)',
                borderRadius: '999px',
                fontSize: '0.92rem',
                fontWeight: highlight ? 800 : 600,
                color: highlight ? '#1B48E0' : '#334155',
                transition: 'all 0.18s ease',
                cursor: 'default',
              }}
            >
              {highlight && <i className="bi bi-geo-alt-fill" style={{ marginRight: '0.35rem' }} />}
              {name}
            </span>
          ))}
        </div>

        {/* Telecom Operators */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(148,163,184,0.20)',
            borderRadius: '16px',
            padding: '1.5rem 1.25rem',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 4px 14px rgba(15,23,42,0.05)',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: '#64748b',
              marginBottom: '1rem',
            }}
          >
            Direct routing across all 4 telecom circles
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.75rem',
            }}
          >
            {TELECOM.map(({ name, color }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color,
                }}
              >
                <i className="bi bi-broadcast-pin" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
