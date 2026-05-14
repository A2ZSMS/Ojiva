const INDUSTRIES = [
  {
    icon: 'bi-bag-heart-fill',
    label: 'E-Commerce',
    stat: '3×', statLabel: 'more sales',
    uses: ['Order updates & confirmations', 'Cart abandonment recovery', 'Product catalogues & promotions', 'Flash sale campaigns'],
    color: '#ec4899',
  },
  {
    icon: 'bi-mortarboard-fill',
    label: 'Education',
    stat: '60%', statLabel: 'less no-shows',
    uses: ['Admission alerts & follow-ups', 'Fee due reminders', 'Class schedule updates', 'Student engagement campaigns'],
    color: '#7C3AED',
  },
  {
    icon: 'bi-hospital-fill',
    label: 'Healthcare',
    stat: '45%', statLabel: 'faster response',
    uses: ['Appointment reminders', 'Lab report delivery', 'Prescription follow-ups', 'Health tips & alerts'],
    color: '#22c55e',
  },
  {
    icon: 'bi-bank2',
    label: 'Banking & Finance',
    stat: '99%', statLabel: 'delivery rate',
    uses: ['OTP & 2FA authentication', 'Transaction alerts', 'Loan updates & onboarding', 'EMI due reminders'],
    color: '#1B48E0',
  },
  {
    icon: 'bi-buildings-fill',
    label: 'Real Estate',
    stat: '2×', statLabel: 'more site visits',
    uses: ['Property listings & launches', 'Site visit scheduling', 'Lead nurturing & follow-ups', 'Document collection'],
    color: '#f59e0b',
  },
  {
    icon: 'bi-truck',
    label: 'Logistics & Delivery',
    stat: '80%', statLabel: 'auto-handled',
    uses: ['Live shipment tracking', 'Delivery OTP verification', 'Failed delivery alerts', 'Driver coordination'],
    color: '#06b6d4',
  },
];

export default function Industries() {
  return (
    <section className="lp-section lp-section--light">
      <div className="container">
        <div className="lp-section-label">Industry Use Cases</div>
        <h2 className="lp-section-h2">Built for every industry in India</h2>
        <p className="lp-section-p">
          From healthcare to logistics — see how Indian businesses in your
          sector are using WhatsApp to drive real results.
        </p>
        <div className="lp-industries">
          {INDUSTRIES.map(({ icon, label, stat, statLabel, uses, color }) => (
            <div
              key={label}
              className="lp-industry-card"
              style={{ "--lp-ind-color": color }}
            >
              <div className="lp-industry-top">
                <div
                  className="lp-industry-icon"
                  style={{ background: color + "15", color }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <div>
                  <h3 className="lp-industry-title">{label}</h3>
                  <div className="lp-industry-stat">
                    <span className="lp-industry-stat-num" style={{ color }}>
                      {stat}
                    </span>
                    <span className="lp-industry-stat-label">
                      {statLabel}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="lp-industry-uses">
                {uses.map((u) => (
                  <li key={u}>
                    <i className="bi bi-check2" style={{ color }} />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="#lead-form" className="lp-btn-primary">
            See a Demo for Your Industry →
          </a>
        </div>
      </div>
    </section>
  );
}
