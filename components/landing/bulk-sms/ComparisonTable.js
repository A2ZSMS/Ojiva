const ROWS = [
  { feature: 'Open Rate',             email: '20%',          sms: '98%',                  best: 'sms' },
  { feature: 'Delivery Speed',        email: '1–24 hours',   sms: 'Under 3 seconds',      best: 'sms' },
  { feature: 'Cost Per Message',      email: '₹0.50–₹2',     sms: 'From ₹0.15',           best: 'sms' },
  { feature: 'DND Numbers',           email: 'Not applicable', sms: 'Transactional exempt', best: 'sms' },
  { feature: 'Customer Engagement',   email: 'Low',           sms: 'High (read in 3 min)', best: 'sms' },
  { feature: 'Delivery Tracking',     email: 'Limited',       sms: 'Real-time dashboard',  best: 'sms' },
  { feature: 'Opt-Out Compliance',    email: 'Manual',        sms: 'Auto DND management',  best: 'sms' },
  { feature: 'Personalization',       email: 'Basic merge',   sms: 'Dynamic variables',    best: 'sms' },
  { feature: 'Dedicated Support',     email: '✗',             sms: '24/7 expert team',     best: 'sms' },
];

export default function ComparisonTable() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">CHANNEL COMPARISON</p>
          <h2 className="bs2-section-title">Email &amp; Cold Calls vs. Ojiva AI Bulk SMS</h2>
          <p className="bs2-section-desc">
            See exactly why 500+ Indian businesses choose bulk SMS over email and cold calling
            for customer communication.
          </p>
        </div>

        <div className="bs2-table-wrap">
          <table className="bs2-cmp-table">
            <thead>
              <tr>
                <th className="bs2-th-feature">Feature</th>
                <th className="bs2-th-other">
                  <span className="bs2-th-label bs2-th-label--other">📧 Email / Cold Calls</span>
                </th>
                <th className="bs2-th-sms">
                  <span className="bs2-th-label bs2-th-label--sms">📱 Ojiva AI Bulk SMS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ feature, email, sms }) => (
                <tr key={feature} className="bs2-cmp-row">
                  <td className="bs2-td-feature">{feature}</td>
                  <td className="bs2-td-other">
                    <span className="bs2-td-bad">{email}</span>
                  </td>
                  <td className="bs2-td-sms">
                    <span className="bs2-td-good">
                      <i className="bi bi-check-circle-fill" /> {sms}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
