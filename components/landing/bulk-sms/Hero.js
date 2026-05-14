import LandingLeadForm from '../LandingLeadForm';

const BULLETS = [
  '100% DLT compliant & TRAI registered',
  '98% open rate — best in class',
  'Instant delivery for OTP & critical alerts',
  'Promotional SMS for mass marketing campaigns',
  'AI-integrated bulk messaging workflows',
];

const STATS = [
  { val: '100%',  lbl: 'DLT Compliant' },
  { val: '98.2%', lbl: 'Open Rate'     },
  { val: '24/7',  lbl: 'Support'       },
];

export default function Hero() {
  return (
    <section className="bs2-hero">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">

          {/* ── Left copy ── */}
          <div className="col-12 col-lg-6">
            <div className="bs2-hero-badge">
              <span className="bs2-hero-badge-dot" />
              India&apos;s #1 Bulk SMS Provider — DLT Registered
            </div>

            <h1 className="bs2-hero-h1">
              Bulk SMS Service Provider in India —{' '}
              <span className="bs2-hero-highlight">Fast &amp; Reliable SMS Gateway</span>
            </h1>

            <p className="bs2-hero-desc">
              Enterprise-grade Transactional &amp; Promotional Bulk SMS Service
              delivering 10M+ messages daily. Sub-3 second OTP delivery, 99%
              delivery rate, and full TRAI DLT compliance.
            </p>

            <ul className="bs2-hero-bullets">
              {BULLETS.map(b => (
                <li key={b}>
                  <span className="bs2-check">✓</span> {b}
                </li>
              ))}
            </ul>

            <div className="bs2-hero-stats">
              {STATS.map(({ val, lbl }) => (
                <div key={lbl} className="bs2-hero-stat">
                  <span className="bs2-hero-stat-val">{val}</span>
                  <span className="bs2-hero-stat-lbl">{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right form ── */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div className="bs2-form-card">
              <LandingLeadForm
                source="bulk-sms"
                title="Book a Demo & Get Pricing"
                subtitle="30 seconds · Our expert contacts you within 2 hours"
                submitLabel="Book My Demo & Get Pricing →"
                thankYouUrl="/thank-you"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
