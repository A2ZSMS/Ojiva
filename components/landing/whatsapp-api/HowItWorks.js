'use client';

function scrollToForm(e) {
  e.preventDefault();
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const HOW_STEPS = [
  {
    num: '01', icon: 'bi-pencil-square',
    title: 'Sign Up',
    desc: 'Fill out the form or chat with us on WhatsApp. Tell us your business name, phone number, and messaging volume. Our India-based team reviews your application within a few hours.',
  },
  {
    num: '02', icon: 'bi-shield-check',
    title: 'Get Verified',
    desc: 'We handle your WhatsApp Business API setup and Green Tick verification. Meta Business Account creation, phone number registration — all done for you, no technical knowledge needed.',
  },
  {
    num: '03', icon: 'bi-plug',
    title: 'Integrate',
    desc: 'Connect your CRM, website, or business systems via API in minutes. Our team provides full technical support and pre-built integrations for 80+ popular tools.',
  },
  {
    num: '04', icon: 'bi-rocket-takeoff',
    title: 'Go Live',
    desc: 'Start sending bulk messages, launch your AI chatbot, and automate customer communication. Most clients go live within 24–48 hours of signing up.',
  },
];

export default function HowItWorks() {
  return (
    <section className="lp-section lp-section--dark">
      <div className="container">
        <div className="lp-section-label lp-section-label--light">
          How It Works
        </div>
        <h2 className="lp-section-h2 lp-section-h2--light">
          From sign-up to first WhatsApp campaign in 48 hours
        </h2>
        <p
          className="lp-section-p"
          style={{ color: "rgba(148,163,184,0.85)", margin: "0 auto 2.5rem" }}
        >
          Most providers take 7–10 days. Our India-based onboarding team gets
          you live in 2.
        </p>
        <div className="lp-steps">
          {HOW_STEPS.map(({ num, icon, title, desc }, i) => (
            <div key={num} className="lp-step">
              <div className="lp-step-num">{num}</div>
              <div className="lp-step-icon">
                <i className={`bi ${icon}`} />
              </div>
              <div className="lp-step-body">
                <h3 className="lp-step-title">{title}</h3>
                <p className="lp-step-desc">{desc}</p>
              </div>
              {i < HOW_STEPS.length - 1 && (
                <div className="lp-step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="lp-hiw-cta">
          <button onClick={scrollToForm} className="lp-btn-primary" type="button">
            Get WhatsApp API Pricing →
          </button>
        </div>
      </div>
    </section>
  );
}
