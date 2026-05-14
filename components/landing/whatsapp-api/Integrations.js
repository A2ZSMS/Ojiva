const INTEGRATIONS = [
  { name: 'Shopify', icon: 'bi-shop' },
  { name: 'WooCommerce', icon: 'bi-wordpress' },
  { name: 'Razorpay', icon: 'bi-credit-card' },
  { name: 'HubSpot', icon: 'bi-funnel' },
  { name: 'Zoho CRM', icon: 'bi-diagram-3' },
  { name: 'Salesforce', icon: 'bi-cloud' },
  { name: 'Leadsquared', icon: 'bi-graph-up' },
  { name: 'Instamojo', icon: 'bi-wallet2' },
  { name: 'Zapier', icon: 'bi-lightning' },
  { name: 'Google Sheets', icon: 'bi-table' },
  { name: 'REST API', icon: 'bi-code-slash' },
  { name: 'Webhook', icon: 'bi-globe' },
];

export default function Integrations() {
  return (
    <section className="lp-section lp-section--light">
      <div className="container">
        <div className="lp-section-label">Integrations</div>
        <h2 className="lp-section-h2">
          Connects with the tools you already use
        </h2>
        <p className="lp-section-p">
          Native integrations with India's most popular e-commerce, CRM, and
          payment platforms — plus a REST API and Webhooks for custom setups.
        </p>
        <div className="lp-integrations">
          {INTEGRATIONS.map(({ name, icon }) => (
            <div key={name} className="lp-integration-chip">
              <i className={`bi ${icon}`} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <p className="lp-integ-note">
          Don't see your tool? We support any platform via REST API &amp;
          Webhooks.
        </p>
      </div>
    </section>
  );
}
