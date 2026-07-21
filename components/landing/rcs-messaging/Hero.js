import LandingLeadForm from '../LandingLeadForm';

const RCS_SERVICES = [
  { value: '',                  label: 'Select a service' },
  { value: 'rcs-bulk',          label: 'RCS Bulk Messaging' },
  { value: 'rcs-chatbot',       label: 'RCS AI Chatbot' },
  { value: 'rcs-chatbot-combo', label: 'RCS + Chatbot Combo' },
  { value: 'rcs-api',           label: 'RCS API Integration' },
  { value: 'other',             label: 'Other' },
];

export default function Hero() {
  return (
    <section className="slp-hero" style={{ '--slp-accent': '#0891b2', background: 'linear-gradient(160deg, #ffffff 0%, #f0f7ff 45%, #e3f0fd 100%)', color: '#1e293b' }}>
      <div className="slp-hero-grid" aria-hidden="true" />
      <div className="slp-orb slp-orb--cyan" aria-hidden="true" />
      <div className="slp-orb slp-orb--2"    aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-4 g-xl-5">

          {/* Left — copy */}
          <div className="col-12 col-lg-6">
            <div className="slp-badge" style={{ background: 'rgba(8,145,178,0.10)', borderColor: 'rgba(8,145,178,0.30)', color: '#0e7490' }}>
              <span className="slp-badge-dot" style={{ background: '#0891b2', boxShadow: '0 0 6px #0891b2' }} />
              India&rsquo;s #1 RCS Messaging Platform
            </div>

            <h1 className="slp-hero-h1" style={{ color: '#0f172a' }}>
              Upgrade Your SMS to Interactive RCS Messaging.{' '}
              <span style={{ color: '#1d4ed8', WebkitTextFillColor: '#1d4ed8' }}>
                Send Rich Media, Verified &amp; Branded Messages That Convert 3× More
              </span>
            </h1>

            <p className="slp-hero-desc" style={{ color: '#475569' }}>
              Turn every text message into a powerful customer experience with RCS messaging.
              Engage, convert, and retain customers using rich communication services designed
              for modern marketing.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'grid', gap: '.85rem' }}>
              {[
                '35% higher engagement than plain SMS',
                'Verified business sender — zero spoofing',
                'Rich cards, carousels & interactive buttons',
                'Works on 2B+ devices — no app install needed',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', color: '#334155', fontSize: '1.05rem', lineHeight: 1.5 }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#0891b2', fontSize: '1.1rem', marginTop: '.15rem', flexShrink: 0 }} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="slp-proof" style={{ color: '#475569' }}>
              <i className="bi bi-shield-check" style={{ color: '#0891b2' }} aria-hidden="true" />
              <span>No credit card required · Free consultation · Reply within 2 hours</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div className="slp-form-card rcs-lead-form">
              <LandingLeadForm
                source="rcs-messaging"
                title="Book a Demo & Get Pricing"
                subtitle="30 seconds · Our expert contacts you within 2 hours"
                submitLabel="Book My Demo & Get Pricing →"
                thankYouUrl="/thank-you"
                accentColor="#0284c7"
                services={RCS_SERVICES}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sky-blue theme overrides — scoped to this page's lead form only */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rcs-lead-form .llf-bar-countdown { color: #e0f2fe; }
        .rcs-lead-form .llf-bar-countdown .bi { color: #bae6fd; }
        .rcs-lead-form .llf-bar-response { background: #f0f9ff; border-bottom-color: #bae6fd; color: #075985; }
        .rcs-lead-form .llf-dot--green { background: #0ea5e9; }
        .rcs-lead-form .llf-iw.ok { border-color: #0ea5e9; background: #f0f9ff; }
        .rcs-lead-form .llf-iw.ok .llf-ii { color: #0ea5e9; }
        .rcs-lead-form .llf-ok { color: #0ea5e9; }
        .rcs-lead-form .llf-prog-fill { background: linear-gradient(90deg, #0284c7, #0ea5e9); }
        .rcs-lead-form .llf-prog-pct { color: #0284c7; }
        .rcs-lead-form .llf-iw:focus-within { border-color: #0284c7; box-shadow: 0 0 0 3px rgba(2,132,199,0.12); }
        .rcs-lead-form .llf-iw:focus-within .llf-ii { color: #0284c7; }
        .rcs-lead-form .llf-ta:focus { border-color: #0284c7; box-shadow: 0 0 0 3px rgba(2,132,199,0.12); }
        .rcs-lead-form .llf-ck-box.on { background: #0284c7; border-color: #0284c7; }
        .rcs-lead-form .llf-ck-text a { color: #0284c7; }
        .rcs-lead-form .llf-trust .bi-patch-check-fill { color: #0ea5e9 !important; }
      ` }} />
    </section>
  );
}
