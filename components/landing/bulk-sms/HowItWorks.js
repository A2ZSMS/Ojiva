import ScrollToFormLink from './ScrollToFormLink';

const STEPS = [
  {
    num: '01',
    icon: 'bi-person-plus-fill',
    title: 'Sign Up',
    desc: 'Submit the form. Get started in less than 2 minutes — no credit card required.',
    color: '#1B48E0',
  },
  {
    num: '02',
    icon: 'bi-cloud-upload-fill',
    title: 'Upload Your Contact List',
    desc: 'Import from Excel, CSV, or integrate via API. We support all major formats.',
    color: '#16a34a',
  },
  {
    num: '03',
    icon: 'bi-send-fill',
    title: 'Send Your Campaign',
    desc: 'Choose template, schedule, and send. Track results live with real-time analytics.',
    color: '#7c3aed',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
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
            HOW IT WORKS
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
            Start Sending Bulk Text Messages in 3 Minutes
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
            Three simple steps to launch your first SMS campaign with Ojiva AI.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Connector line — runs behind cards on desktop */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '60px',
              left: '15%',
              right: '15%',
              height: '2px',
              background: 'repeating-linear-gradient(90deg, rgba(148,163,184,0.30) 0 8px, transparent 8px 16px)',
              zIndex: 0,
            }}
          />

          {STEPS.map(({ num, icon, title, desc, color }) => (
            <div
              key={num}
              style={{
                position: 'relative',
                zIndex: 1,
                background: '#ffffff',
                border: '1px solid rgba(148,163,184,0.20)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 8px 28px rgba(15,23,42,0.05)',
                transition: 'all 0.18s ease',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  boxShadow: `0 10px 24px ${color}40`,
                }}
              >
                <i className={`bi ${icon}`} />
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color,
                  marginBottom: '0.5rem',
                }}
              >
                STEP {num}
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.55rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
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
            Get Free Demo <i className="bi bi-arrow-right ms-2" />
          </ScrollToFormLink>
        </div>
      </div>
    </section>
  );
}
