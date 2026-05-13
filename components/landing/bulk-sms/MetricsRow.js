const METRICS = [
  { val: '98%',    lbl: 'Open Rate',          icon: '📬', color: '#1B48E0' },
  { val: '30%',    lbl: 'CTR vs 2% Email',    icon: '📈', color: '#16a34a' },
  { val: '<3s',    lbl: 'OTP Delivery',        icon: '⚡', color: '#7c3aed' },
  { val: '10M+',   lbl: 'Messages / Day',      icon: '📱', color: '#d97706' },
  { val: '99.9%',  lbl: 'Uptime SLA',          icon: '🛡️', color: '#0891b2' },
  { val: '500+',   lbl: 'Businesses Served',   icon: '🏢', color: '#be185d' },
];

export default function MetricsRow() {
  return (
    <section className="bs2-metrics-bar">
      <div className="container">
        <div className="bs2-metrics-grid">
          {METRICS.map(({ val, lbl, icon, color }) => (
            <div key={lbl} className="bs2-metric-card">
              <div className="bs2-metric-icon" style={{ color }}>{icon}</div>
              <div className="bs2-metric-val" style={{ color }}>{val}</div>
              <div className="bs2-metric-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
