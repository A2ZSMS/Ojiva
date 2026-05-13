const TOOLS = [
  { name: 'Salesforce',  color: '#00A1E0', icon: '☁️' },
  { name: 'HubSpot',     color: '#FF7A59', icon: '🔶' },
  { name: 'Shopify',     color: '#96BF48', icon: '🛍️' },
  { name: 'WooCommerce', color: '#7F54B3', icon: '🛒' },
  { name: 'Zapier',      color: '#FF4A00', icon: '⚡' },
  { name: 'Magento',     color: '#EE672F', icon: '🧲' },
  { name: 'Zoho CRM',    color: '#E42527', icon: '📊' },
  { name: 'Freshdesk',   color: '#25C16F', icon: '🎫' },
  { name: 'REST API',    color: '#1B48E0', icon: '🔌' },
  { name: 'Webhooks',    color: '#0891b2', icon: '🪝' },
];

export default function Integrations() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">INTEGRATIONS</p>
          <h2 className="bs2-section-title">Works With Your Favourite Tools</h2>
          <p className="bs2-section-desc">
            Connect Ojiva AI bulk SMS to the tools you already use — CRMs,
            e-commerce platforms, automation tools, and more via REST API.
          </p>
        </div>

        <div className="bs2-integrations-grid">
          {TOOLS.map(({ name, color, icon }) => (
            <div key={name} className="bs2-integration-card">
              <div className="bs2-integration-icon" style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}>
                <span style={{ fontSize: '1.6rem' }}>{icon}</span>
              </div>
              <div className="bs2-integration-name">{name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="bs2-section-desc" style={{ fontSize: '0.85rem' }}>
            + 50 more integrations available via REST API & Webhooks
          </p>
        </div>
      </div>
    </section>
  );
}
