const TRUST_ITEMS = [
  { icon: 'bi-patch-check-fill', title: 'Official Meta BSP', desc: 'Authorised Meta Business Service Provider. Direct API access — not a reseller or aggregator.', color: '#25d366' },
  { icon: 'bi-shield-lock-fill', title: 'AES-256 Encryption', desc: 'All messages and customer data encrypted at rest and in transit. Enterprise-grade security by default.', color: '#1B48E0' },
  { icon: 'bi-building-check', title: 'ISO 27001 Aligned', desc: 'Our security practices follow ISO 27001 information security management standards.', color: '#7C3AED' },
  { icon: 'bi-person-lock', title: 'GDPR & DPDP Ready', desc: 'Fully compliant with India\'s Digital Personal Data Protection Act and GDPR requirements.', color: '#f59e0b' },
  { icon: 'bi-server', title: 'India Data Residency', desc: 'Customer data stored on servers in India. No cross-border data transfer without consent.', color: '#06b6d4' },
  { icon: 'bi-clock-history', title: '99.9% Uptime SLA', desc: 'Enterprise SLA with real-time monitoring, auto-failover, and 24/7 incident response team.', color: '#ec4899' },
];

export default function Trust() {
  return (
    <section className="lp-section">
      <div className="container">
        <div className="lp-section-label">Security & Compliance</div>
        <h2 className="lp-section-h2">
          Enterprise-grade security. 100% compliant.
        </h2>
        <p className="lp-section-p">
          When you send 10 million messages a day, security isn't optional.
          Every layer of Ojiva AI's infrastructure is built for compliance and
          data protection.
        </p>
        <div className="lp-trust-grid">
          {TRUST_ITEMS.map(({ icon, title, desc, color }) => (
            <div key={title} className="lp-trust-card">
              <div
                className="lp-trust-icon"
                style={{ background: color + "15", color }}
              >
                <i className={`bi ${icon}`} />
              </div>
              <h3 className="lp-trust-title">{title}</h3>
              <p className="lp-trust-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
