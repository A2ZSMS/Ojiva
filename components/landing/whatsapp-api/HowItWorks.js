'use client';

const HOW_STEPS = [
  {
    num: '01', icon: 'bi-send',
    title: 'Fill the form — 2 minutes',
    desc: 'Tell us your business name, phone number, and monthly volume. Our India-based team reviews your application within a few hours — no waiting days.',
  },
  {
    num: '02', icon: 'bi-key',
    title: 'Get your WhatsApp API — same day',
    desc: 'Receive your official WhatsApp API credentials and your dedicated onboarding specialist\'s WhatsApp number. Start integrating immediately.',
  },
  {
    num: '03', icon: 'bi-rocket-takeoff',
    title: 'Go live in 48 hours',
    desc: 'Your Meta Business Account gets verified, your phone number registered, and your first templates approved. Most competitors take 7–10 days. We do it in 2.',
  },
];

export default function HowItWorks() {
  return (
    <section className="lp-section lp-section--dark">
      <div className="lp-container lp-container--narrow">
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
          <a href="#lead-form" className="lp-btn-primary">
            Start Now — It's Free →
          </a>
        </div>
      </div>
    </section>
  );
}
