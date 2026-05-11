export default function FinalCTA() {
  return (
    <section className="lp-final">
      <div className="lp-final-bg" aria-hidden="true" />
      <div className="lp-container lp-container--narrow">
        <h2 className="lp-final-h2">
          Your competitors are already on WhatsApp.
        </h2>
        <p className="lp-final-sub">
          500M+ Indians check WhatsApp 23× a day. Every day you wait is leads
          your competitor is closing. Get your official WhatsApp Business API
          live in 48 hours — with zero lock-in.
        </p>
        <div className="lp-final-actions">
          <a
            href="#lead-form"
            className="lp-btn-primary lp-btn-primary--white"
          >
            Get WhatsApp API Pricing →
          </a>
          <a href="#lead-form" className="lp-btn-ghost">
            See a Live Demo First
          </a>
        </div>
        <div className="lp-final-trust">
          {[
            { icon: "bi-patch-check-fill", label: "Official Meta BSP" },
            { icon: "bi-lock-fill", label: "No lock-in" },
            { icon: "bi-clock-fill", label: "Live in 48 hours" },
            { icon: "bi-shield-check", label: "No DLT required" },
          ].map(({ icon, label }) => (
            <span key={label} className="lp-final-trust-item">
              <i className={`bi ${icon}`} /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
