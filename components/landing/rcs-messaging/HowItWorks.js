const STEPS = [
  {
    num: '01',
    title: 'Submit Brand Details',
    desc: 'Provide your business name, logo, website, and use case. Ojiva AI handles the Google RCS brand verification submission on your behalf.',
  },
  {
    num: '02',
    title: 'Get Google-Verified',
    desc: 'Receive your verified sender ID with your business name and logo — typically approved within 3–7 business days.',
  },
  {
    num: '03',
    title: 'Build Rich Templates',
    desc: 'Use our template builder to create rich cards, carousels, and interactive buttons. Our team reviews and optimises every template for engagement.',
  },
  {
    num: '04',
    title: 'Launch with Analytics',
    desc: 'Send your first RCS campaign and watch real-time read rates, CTR, and button interactions roll in on your live dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section className="slp-section slp-section--alt" style={{ background: '#ffffff', color: '#1e293b' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#2563eb' }}>Get Started</p>
          <h2 className="slp-section-title" style={{ color: '#0f172a' }}>Go Live with RCS in 4 Simple Steps</h2>
          <p className="slp-section-desc" style={{ color: '#64748b' }}>
            Our team manages brand verification, template setup, and API integration —
            so you can focus on your campaigns.
          </p>
        </div>

        <div className="slp-steps-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="slp-step">
              <div className="slp-step-num" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)', boxShadow: '0 8px 24px rgba(34,211,238,0.25)' }}>
                {num}
              </div>
              <div className="slp-step-title" style={{ color: '#1e293b' }}>{title}</div>
              <p className="slp-step-desc" style={{ color: '#64748b' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
