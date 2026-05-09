const STEPS = [
  {
    num: '01',
    title: 'Sign Up & Get Verified',
    desc: 'Fill the form and our team completes your DLT sender ID registration and entity verification within 48 hours.',
  },
  {
    num: '02',
    title: 'Upload Contacts or Connect API',
    desc: 'Import your customer list via CSV, Excel, or connect directly to your CRM, e-commerce, or custom app via REST API.',
  },
  {
    num: '03',
    title: 'Launch & Track Campaigns',
    desc: 'Create your message, schedule or send instantly, and monitor live delivery rates, CTR, and campaign ROI from your dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section className="slp-section slp-section--dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#60a5fa' }}>Get Started</p>
          <h2 className="slp-section-title">Go Live in 48 Hours — Here&apos;s How</h2>
          <p className="slp-section-desc">
            No complex setup. No long contracts. Our team handles everything so you can start
            sending bulk SMS in India as fast as possible.
          </p>
        </div>

        <div className="slp-steps-grid">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="slp-step">
              <div className="slp-step-num">{num}</div>
              <div className="slp-step-title">{title}</div>
              <p className="slp-step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
