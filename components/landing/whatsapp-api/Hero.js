'use client';

import LandingLeadForm from '../LandingLeadForm';

export default function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-hero-bg" aria-hidden="true">
        <div className="lp-hero-orb lp-hero-orb--1" />
        <div className="lp-hero-orb lp-hero-orb--2" />
        <div className="lp-hero-orb lp-hero-orb--3" />
      </div>
      <div className="lp-container">
        <div className="lp-hero-grid">
          {/* Left */}
          <div className="lp-hero-left">
            <div className="lp-bsp-badge">
              <span className="lp-bsp-dot" />
              Official Meta Business Partner · India
            </div>
            <h1 className="lp-hero-h1">
              Official WhatsApp Business API Provider
              <br />
              <span className="lp-hero-highlight">Automate Sales &</span>
              <br />
              Support Instantly
            </h1>
            <p className="lp-hero-desc">
              Stop losing leads to slow replies. Get Official WhatsApp
              Business API with AI Chatbot, Multi-Agent Support, and CRM
              Integration all in one platform.
            </p>

            <div className="lp-hero-facts">
              {[
                {
                  icon: "bi-check-circle-fill",
                  text: "98% open rate vs 18% email",
                  color: "#22c55e",
                },
                {
                  icon: "bi-check-circle-fill",
                  text: "No DLT registration needed",
                  color: "#22c55e",
                },
                {
                  icon: "bi-check-circle-fill",
                  text: "Zero setup fees — ever",
                  color: "#22c55e",
                },
                {
                  icon: "bi-check-circle-fill",
                  text: "India-based support team (IST)",
                  color: "#22c55e",
                },
                {
                  icon: "bi-check-circle-fill",
                  text: "500+ businesses already live",
                  color: "#22c55e",
                },
              ].map(({ icon, text, color }) => (
                <div key={text} className="lp-hero-fact">
                  <i className={`bi ${icon}`} style={{ color }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="lp-hero-proof">
              <div className="lp-proof-stars">
                ★★★★★ <span>4.9/5</span>
              </div>
              <span className="lp-proof-divider" />
              <span className="lp-proof-text">
                500+ businesses across India trust Ojiva AI
              </span>
            </div>

            <div className="lp-badges">
              {[
                {
                  icon: "bi-patch-check-fill",
                  label: "Meta Verified Partner",
                  color: "#22c55e",
                },
                {
                  icon: "bi-shield-lock-fill",
                  label: "AES-256 Encrypted",
                  color: "#3b82f6",
                },
                {
                  icon: "bi-clock-fill",
                  label: "48-Hr Go-Live",
                  color: "#a855f7",
                },
                {
                  icon: "bi-headset",
                  label: "IST Support Hours",
                  color: "#f59e0b",
                },
              ].map(({ icon, label, color }) => (
                <div key={label} className="lp-badge">
                  <i className={`bi ${icon}`} style={{ color }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a href="#lead-form" className="lp-demo-btn">
              <i className="bi bi-camera-video" /> Watch a 3-Min Demo — Free
            </a>
          </div>

          {/* Right — Form */}
          <div className="lp-hero-right" id="lead-form">
            <div className="lp-form-wrapper">
              <div className="lp-form-badge">
                <i
                  className="bi bi-lightning-charge-fill"
                  style={{ color: "#22c55e" }}
                />
                <span>Free setup · No DLT needed · No credit card</span>
              </div>
              <LandingLeadForm source="whatsapp-api-service" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
