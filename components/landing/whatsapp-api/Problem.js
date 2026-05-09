export default function Problem() {
  return (
    <section className="lp-section lp-section--light">
      <div className="lp-container lp-container--narrow">
        <div className="lp-section-label">Why WhatsApp</div>
        <h2 className="lp-section-h2">Stop Losing Leads to Channels Nobody Reads</h2>
        <p className="lp-section-p">See why 500M+ Indians are on WhatsApp and why smart businesses are switching.</p>

        {/* Bar chart comparison */}
        <div className="lp-bars">
          {[
            { ch: "Email", rate: "18%", pct: 18, color: "#ef4444", bg: "rgba(239,68,68,0.08)", icon: "📧" },
            { ch: "SMS",   rate: "45%", pct: 45, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", icon: "📱" },
            { ch: "WhatsApp", rate: "98%", pct: 98, color: "#25d366", bg: "rgba(37,211,102,0.08)", icon: "💬", best: true },
          ].map(({ ch, rate, pct, color, bg, icon, best }) => (
            <div key={ch} className={`lp-bar-row${best ? " lp-bar-row--best" : ""}`} style={{ background: bg }}>
              <div className="lp-bar-meta">
                <span className="lp-bar-icon">{icon}</span>
                <span className="lp-bar-ch">{ch}</span>
                {best && <span className="lp-bar-badge">Best</span>}
              </div>
              <div className="lp-bar-track">
                <div className="lp-bar-fill" style={{ width: `${pct}%`, background: color }} />
              </div>
              <span className="lp-bar-rate" style={{ color }}>{rate}</span>
              <span className="lp-bar-note">avg. open rate</span>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="lp-pstats">
          {[
            { num: "500M+", label: "Indians on WhatsApp daily",     icon: "bi-people-fill",      color: "#25d366" },
            { num: "23×",   label: "Average daily opens per user",  icon: "bi-eye-fill",         color: "#1B48E0" },
            { num: "70%",   label: "Messages read within 5 minutes",icon: "bi-lightning-charge-fill", color: "#f59e0b" },
            { num: "4–8×",  label: "Higher CTR than email links",   icon: "bi-graph-up-arrow",   color: "#7C3AED" },
          ].map(({ num, label, icon, color }) => (
            <div key={label} className="lp-pstat">
              <i className={`bi ${icon} lp-pstat-icon`} style={{ color }} />
              <span className="lp-pstat-num" style={{ color }}>{num}</span>
              <span className="lp-pstat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
