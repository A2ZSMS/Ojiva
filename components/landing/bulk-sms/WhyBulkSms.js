const WHY = [
  { channel: 'Email',        stat: '20%',  lbl: 'open rate',         color: '#94a3b8', best: false },
  { channel: 'Social Media', stat: '5%',   lbl: 'organic reach',     color: '#94a3b8', best: false },
  { channel: 'Bulk SMS',     stat: '98%',  lbl: 'open rate',         color: '#60a5fa', best: true  },
];

export default function WhyBulkSms() {
  return (
    <section className="slp-section slp-section--dark">
      <div className="container text-center">
        <p className="slp-eyebrow" style={{ color: '#60a5fa' }}>Channel Comparison</p>
        <h2 className="slp-section-title">Why Bulk SMS Still Wins in 2026</h2>
        <p className="slp-section-desc">
          No other marketing channel comes close to bulk SMS for open rates, speed, and reach across
          India&apos;s 1.2 billion mobile users.
        </p>

        <div className="slp-why-grid">
          {WHY.map(({ channel, stat, lbl, color, best }) => (
            <div key={channel} className={`slp-why-card${best ? ' slp-why-card--best' : ''}`}>
              {best && (
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#34d399', marginBottom: '0.5rem' }}>
                  ✅ Best Channel
                </div>
              )}
              <div className="slp-why-channel">{channel}</div>
              <div className="slp-why-stat" style={{ color }}>{stat}</div>
              <div className="slp-why-sublbl">{lbl}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(148,163,184,0.8)' }}>
          SMS messages are read within <strong style={{ color: '#e2e8f0' }}>3 minutes</strong> of receipt by 95% of recipients
        </p>
      </div>
    </section>
  );
}
