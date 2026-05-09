const COMPARE_ROWS = [
  { feature: 'Verified Brand Identity', sms: false, rcs: true  },
  { feature: 'Images & Rich Media',     sms: false, rcs: true  },
  { feature: 'Interactive Buttons',     sms: false, rcs: true  },
  { feature: 'Product Carousels',       sms: false, rcs: true  },
  { feature: 'Real-Time Read Receipts', sms: false, rcs: true  },
  { feature: 'Suggested Replies',       sms: false, rcs: true  },
  { feature: 'App Install Required',    sms: false, rcs: false },
  { feature: 'Read Rate',               sms: '45%', rcs: '94%' },
  { feature: 'Average CTR',             sms: '2-5%', rcs: '15-20%' },
  { feature: 'DLT Compliant',           sms: true,  rcs: true  },
];

export default function Comparison() {
  return (
    <section className="slp-section slp-section--dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>The Upgrade</p>
          <h2 className="slp-section-title">RCS vs SMS — The Difference is Clear</h2>
          <p className="slp-section-desc">
            Your customers already live in their messaging app. RCS makes every business
            message feel like a premium branded experience.
          </p>
        </div>

        <div className="slp-compare-table-wrap" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <table className="slp-compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>SMS</th>
                <th className="highlight">RCS (Ojiva AI)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(({ feature, sms, rcs }) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  <td>
                    {typeof sms === 'boolean'
                      ? <span className={sms ? 'slp-check' : 'slp-cross'}>{sms ? '✓' : '✕'}</span>
                      : <span style={{ color: '#94a3b8', fontWeight: 600 }}>{sms}</span>}
                  </td>
                  <td className="highlight">
                    {typeof rcs === 'boolean'
                      ? <span className={rcs ? 'slp-check' : 'slp-cross'}>{rcs ? '✓' : '✕'}</span>
                      : <span style={{ color: '#22d3ee', fontWeight: 700 }}>{rcs}</span>}
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
