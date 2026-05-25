const ROWS = [
  { feature: 'Starting Price',         ojiva: '₹0.15/SMS',          msg91: '₹0.18/SMS',        textlocal: '₹0.22/SMS',     twilio: '₹0.35/SMS' },
  { feature: 'DLT Compliance',         ojiva: 'Full',               msg91: 'Full',             textlocal: 'Full',          twilio: 'Partial' },
  { feature: 'Free Trial',             ojiva: 'Yes',                msg91: 'Yes',              textlocal: 'Limited',       twilio: 'No' },
  { feature: 'Setup Time',             ojiva: '<10 minutes',        msg91: '1-2 days',         textlocal: '2-3 days',      twilio: '1 week' },
  { feature: 'API Integration Time',   ojiva: '<24 hours',          msg91: '2-3 days',         textlocal: '3-5 days',      twilio: '1 week' },
  { feature: 'Indian Support Team',    ojiva: 'Yes — 24/7',         msg91: 'Yes',              textlocal: 'Yes',           twilio: 'No' },
  { feature: 'OTP Delivery Speed',     ojiva: '< 2 seconds',        msg91: '3-5 seconds',      textlocal: '4-6 seconds',   twilio: '3-5 seconds' },
  { feature: 'Uptime SLA',             ojiva: '99.9%',              msg91: '99.5%',            textlocal: '99%',           twilio: '99.9%' },
  { feature: 'Local Circle Routing',   ojiva: 'Yes',                msg91: 'Yes',              textlocal: 'Partial',       twilio: 'No' },
];

export default function ComparisonTable() {
  return (
    <section className="bs2-section bs2-section--white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">COMPETITOR COMPARISON</p>
          <h2 className="bs2-section-title">How Ojiva AI Compares</h2>
          <p className="bs2-section-desc">
            See exactly how Ojiva AI stacks up against other bulk SMS providers in India —
            on price, speed, compliance, and support.
          </p>
        </div>

        <div className="bs2-table-wrap">
          <table className="bs2-cmp-table">
            <thead>
              <tr>
                <th className="bs2-th-feature">Feature</th>
                <th className="bs2-th-sms">
                  <span className="bs2-th-label bs2-th-label--sms">⭐ Ojiva AI</span>
                </th>
                <th className="bs2-th-other">
                  <span className="bs2-th-label bs2-th-label--other">MSG91</span>
                </th>
                <th className="bs2-th-other">
                  <span className="bs2-th-label bs2-th-label--other">Textlocal</span>
                </th>
                <th className="bs2-th-other">
                  <span className="bs2-th-label bs2-th-label--other">Twilio</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ feature, ojiva, msg91, textlocal, twilio }) => (
                <tr key={feature} className="bs2-cmp-row">
                  <td className="bs2-td-feature">{feature}</td>
                  <td className="bs2-td-sms">
                    <span className="bs2-td-good">
                      <i className="bi bi-check-circle-fill" /> {ojiva}
                    </span>
                  </td>
                  <td className="bs2-td-other">
                    <span className="bs2-td-bad">{msg91}</span>
                  </td>
                  <td className="bs2-td-other">
                    <span className="bs2-td-bad">{textlocal}</span>
                  </td>
                  <td className="bs2-td-other">
                    <span className="bs2-td-bad">{twilio}</span>
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
