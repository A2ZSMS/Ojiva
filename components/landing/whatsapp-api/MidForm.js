import LandingLeadForm from '../LandingLeadForm';

export default function MidForm() {
  return (
    <section className="lp-midform-section">
      <div className="lp-container">
        <div className="lp-midform-grid">

          {/* LEFT — content */}
          <div className="lp-midform-left">
            <div className="lp-midform-badge">
              <i className="bi bi-whatsapp" style={{ color: "#25d366" }} />
              <span>Official Meta BSP · India</span>
            </div>

            <h2 className="lp-midform-h2">
              500+ Businesses Already Live.<br />
              <span className="lp-midform-h2-accent">You're Next.</span>
            </h2>

            <p className="lp-midform-sub">
              From DLT registration to your first campaign — our India-based
              team handles everything. Most clients are sending messages
              within <strong style={{ color: "#4ade80" }}>48 hours</strong> of signing up.
            </p>

            {/* Stats row */}
            <div className="lp-midform-stats">
              {[
                { val: "10M+", lbl: "Messages/Day" },
                { val: "98%",  lbl: "Open Rate" },
                { val: "48hr", lbl: "Go-Live" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="lp-midform-stat">
                  <span className="lp-midform-stat-val">{val}</span>
                  <span className="lp-midform-stat-lbl">{lbl}</span>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className="lp-midform-perks">
              {[
                "Official Meta Business Service Provider",
                "48-hour go-live — fastest in India",
                "India-based support team (IST)",
                "No setup fees, no DLT registration",
                "Dedicated onboarding specialist",
                "Cancel anytime — no lock-in",
              ].map((p) => (
                <div key={p} className="lp-midform-perk">
                  <i className="bi bi-check-circle-fill" style={{ color: "#4ade80" }} />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* Mini testimonial */}
            <div className="lp-midform-quote">
              <p className="lp-midform-quote-text">
                "Switched from WATI — onboarding was 10× faster and the India
                support team actually picks up."
              </p>
              <div className="lp-midform-quote-author">
                <div className="lp-midform-quote-avatar">RS</div>
                <div>
                  <p className="lp-midform-quote-name">Rahul Sharma</p>
                  <p className="lp-midform-quote-role">Head of Growth · FinNova Technologies</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lp-midform-right">
            <div className="lp-form-wrapper lp-form-wrapper--light">
              <div className="lp-form-badge lp-form-badge--dark">
                <i className="bi bi-lightning-charge-fill" style={{ color: "#22c55e" }} />
                <span>Instant Setup · No DLT needed · No lock-in</span>
              </div>
              <LandingLeadForm source="whatsapp-api-service-mid" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
