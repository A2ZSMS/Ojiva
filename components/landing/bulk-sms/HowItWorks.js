import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    icon: 'bi-person-plus-fill',
    title: 'Sign Up',
    desc: 'Create your free Ojiva AI account in 2 minutes. No credit card required.',
    color: '#1B48E0',
  },
  {
    num: '02',
    icon: 'bi-shield-check-fill',
    title: 'DLT Registration',
    desc: 'Our team handles TRAI DLT entity registration, sender ID, and template approvals for you.',
    color: '#16a34a',
  },
  {
    num: '03',
    icon: 'bi-people-fill',
    title: 'Upload Contacts',
    desc: 'Import your customer list via CSV/Excel or connect via REST API to your CRM or app.',
    color: '#7c3aed',
  },
  {
    num: '04',
    icon: 'bi-send-fill',
    title: 'Go Live!',
    desc: 'Send your first campaign, track real-time delivery, and watch your engagement soar.',
    color: '#d97706',
  },
];

export default function HowItWorks() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">GET STARTED</p>
          <h2 className="bs2-section-title">Get Started in 4 Easy Steps</h2>
          <p className="bs2-section-desc">
            We handle the complexity — DLT registration, sender IDs, template
            approvals — so you can start sending bulk SMS in India within 48 hours.
          </p>
        </div>

        <div className="bs2-steps-grid">
          {STEPS.map(({ num, icon, title, desc, color }, idx) => (
            <div key={num} className="bs2-step">
              {idx < STEPS.length - 1 && <div className="bs2-step-connector" />}
              <div className="bs2-step-icon-wrap" style={{ background: `${color}14`, border: `2px solid ${color}30` }}>
                <i className={`bi ${icon}`} style={{ color, fontSize: '1.4rem' }} />
              </div>
              <div className="bs2-step-num" style={{ color }}>{num}</div>
              <div className="bs2-step-title">{title}</div>
              <p className="bs2-step-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link href="/contact" className="bs2-btn-primary">
            Start Your Journey <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
