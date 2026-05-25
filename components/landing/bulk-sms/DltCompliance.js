import ScrollToFormLink from './ScrollToFormLink';

const FEATURES = [
  {
    icon: 'bi-shield-check',
    title: 'Principal Entity Registration',
    desc: 'We help you register on all major DLT platforms — Jio, Airtel, Vi, BSNL.',
  },
  {
    icon: 'bi-file-earmark-check',
    title: 'Pre-Approved Templates',
    desc: 'Header & content template approval handled end-to-end by our team.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Sender ID Approval',
    desc: 'Custom 6-character sender ID approved across all 4 telecom operators.',
  },
  {
    icon: 'bi-bank',
    title: 'TCCCPR 2018 Compliant',
    desc: 'Full compliance with TRAI regulations — zero blocked messages, zero penalties.',
  },
];

export default function DltCompliance() {
  return (
    <section className="bs2-section bs2-section--light">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left: Copy + Features ── */}
          <div className="col-12 col-lg-7">
            <p className="bs2-eyebrow">DLT COMPLIANCE</p>
            <h2 className="bs2-section-title" style={{ textAlign: 'left' }}>
              100% DLT Compliant. Zero Blocked Messages.
            </h2>
            <p className="bs2-section-desc" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
              Ojiva AI is a TRAI-registered SMS service provider with full DLT
              compliance. We handle the complete DLT registration, sender ID
              approval, and template pre-approval — so you can focus on your campaigns.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    gap: '0.85rem',
                    padding: '1rem',
                    background: '#ffffff',
                    border: '1px solid rgba(148,163,184,0.20)',
                    borderRadius: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(22,163,74,0.10)',
                      color: '#16a34a',
                      flexShrink: 0,
                      fontSize: '1.1rem',
                    }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                      {title}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <ScrollToFormLink className="bs2-btn-primary">
                Get DLT Registration Help <i className="bi bi-arrow-right ms-2" />
              </ScrollToFormLink>
            </div>
          </div>

          {/* ── Right: Compliance Badge Card ── */}
          <div className="col-12 col-lg-5">
            <div
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f4f7ff 100%)',
                border: '2px solid rgba(22,163,74,0.20)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(15,23,42,0.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(22,163,74,0.10)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                  color: '#ffffff',
                  fontSize: '2.4rem',
                  marginBottom: '1rem',
                  boxShadow: '0 10px 30px rgba(22,163,74,0.32)',
                }}
              >
                <i className="bi bi-patch-check-fill" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                TRAI Registered Entity
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Fully compliant SMS service provider India.
                Verified across all 4 major DLT platforms.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {[
                  { lbl: 'DLT Status', val: 'Registered' },
                  { lbl: 'TCCCPR',     val: 'Compliant'  },
                  { lbl: 'Platforms',  val: '4 / 4'      },
                  { lbl: 'Penalties',  val: 'Zero'       },
                ].map(({ lbl, val }) => (
                  <div
                    key={lbl}
                    style={{
                      padding: '0.75rem',
                      background: '#ffffff',
                      borderRadius: '10px',
                      border: '1px solid rgba(148,163,184,0.18)',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {lbl}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#16a34a' }}>
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
