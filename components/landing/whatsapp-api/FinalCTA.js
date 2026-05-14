export default function FinalCTA() {
  return (
    <section className="lp-final">
      <div className="lp-final-bg" aria-hidden="true" />
      <div className="container">
        <h2 className="lp-final-h2">
          Your Competitors Are Already on WhatsApp. Are You?
        </h2>
        <p className="lp-final-sub">
          Every day you wait, a competitor steals your customer. 500M+ Indians
          check WhatsApp 23× a day. Get your official WhatsApp Business API
          live in 24–48 hours — with zero lock-in.
        </p>
        <div className="lp-final-actions">
          <a
            href="#lead-form"
            className="lp-btn-primary lp-btn-primary--white"
          >
            Get Free Setup + 1 Month Free →
          </a>
          <a href="#lead-form" className="lp-btn-ghost">
            See a Live Demo First
          </a>
        </div>
        <div className="lp-final-trust">
          {[
            { icon: "bi-patch-check-fill", label: "Free Setup Included" },
            { icon: "bi-lock-fill", label: "No Lock-in" },
            { icon: "bi-clock-fill", label: "Live in 24–48 Hours" },
            { icon: "bi-person-check-fill", label: "Dedicated Account Manager" },
            { icon: "bi-shield-check", label: "Official Meta BSP" },
            { icon: "bi-x-circle-fill", label: "Cancel Anytime" },
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
