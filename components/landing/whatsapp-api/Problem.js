const COMPARISON = [
  { feature: 'Bulk Messaging',          standard: 'Not Allowed',      api: 'Unlimited Scale' },
  { feature: 'Automation & Chatbot',    standard: 'Manual Only',      api: 'Full AI Automation' },
  { feature: 'Green Tick Verified',     standard: 'Not Available',    api: 'Meta Verified' },
  { feature: 'CRM / ERP Integration',  standard: 'No Integration',   api: '80+ Tools' },
  { feature: 'Multi-Agent Support',     standard: 'Single Device',    api: 'Unlimited Agents' },
  { feature: 'Analytics & Reports',     standard: 'Basic Stats',      api: 'Real-Time Dashboard' },
  { feature: 'Meta-Approved Templates', standard: 'No Templates',     api: 'Full Library' },
  { feature: 'Ban Risk',                standard: 'High Risk',        api: 'Zero Risk' },
  { feature: 'Official Meta Support',   standard: 'No Priority',      api: 'Dedicated Support' },
];

export default function Problem() {
  return (
    <section className="lp-section">
      <div className="container">
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
            { num: "500M+", label: "Indians on WhatsApp daily",      icon: "bi-people-fill",           color: "#25d366" },
            { num: "23×",   label: "Average daily opens per user",   icon: "bi-eye-fill",              color: "#1B48E0" },
            { num: "70%",   label: "Messages read within 5 minutes", icon: "bi-lightning-charge-fill", color: "#f59e0b" },
            { num: "4–8×",  label: "Higher CTR than email links",    icon: "bi-graph-up-arrow",        color: "#7C3AED" },
          ].map(({ num, label, icon, color }) => (
            <div key={label} className="lp-pstat">
              <i className={`bi ${icon} lp-pstat-icon`} style={{ color }} />
              <span className="lp-pstat-num" style={{ color }}>{num}</span>
              <span className="lp-pstat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>
            Standard WhatsApp vs. WhatsApp Business API
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', background: '#f8fafc', color: '#475569', fontWeight: 600, borderBottom: '2px solid #e2e8f0' }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', background: '#fff1f2', color: '#be123c', fontWeight: 700, borderBottom: '2px solid #fecdd3' }}>Standard WhatsApp</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', background: '#f0fdf4', color: '#15803d', fontWeight: 700, borderBottom: '2px solid #bbf7d0' }}>Ojiva AI API ✅</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ feature, standard, api }, i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 500, color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>{feature}</td>
                    <td style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#ef4444', borderBottom: '1px solid #e2e8f0' }}>❌ {standard}</td>
                    <td style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#16a34a', fontWeight: 600, borderBottom: '1px solid #e2e8f0' }}>✅ {api}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
