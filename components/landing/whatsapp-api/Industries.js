const INDUSTRIES = [
  {
    icon: 'bi-bag-heart-fill',
    label: 'E-commerce & D2C',
    stat: '4.8×', statLabel: 'higher CTR vs email',
    uses: ['Cart abandonment recovery', 'Order & delivery updates', 'Flash sale campaigns', 'Product catalogues'],
    color: '#ec4899',
  },
  {
    icon: 'bi-hospital-fill',
    label: 'Healthcare & Clinics',
    stat: '76%', statLabel: 'fewer no-shows',
    uses: ['Appointment reminders', 'Lab report delivery', 'Prescription follow-ups', 'Health tips & offers'],
    color: '#22c55e',
  },
  {
    icon: 'bi-bank2',
    label: 'Banking & Finance',
    stat: '99%', statLabel: 'OTP delivery rate',
    uses: ['OTP & 2FA authentication', 'EMI due reminders', 'Loan approval alerts', 'Statement delivery'],
    color: '#1B48E0',
  },
  {
    icon: 'bi-buildings-fill',
    label: 'Real Estate',
    stat: '3×', statLabel: 'more site visit bookings',
    uses: ['New property launches', 'Site visit reminders', 'EMI calculator links', 'Document collection'],
    color: '#f59e0b',
  },
  {
    icon: 'bi-mortarboard-fill',
    label: 'EdTech & Education',
    stat: '85%', statLabel: 'message open rate',
    uses: ['Admission enquiry follow-ups', 'Fee due reminders', 'Class schedule updates', 'Result notifications'],
    color: '#7C3AED',
  },
  {
    icon: 'bi-truck',
    label: 'Logistics & Delivery',
    stat: '60%', statLabel: 'fewer WISMO calls',
    uses: ['Real-time shipment tracking', 'Delivery OTP verification', 'Failed delivery alerts', 'Driver assignment'],
    color: '#06b6d4',
  },
];

export default function Industries() {
  return (
    <section className="lp-section lp-section--light">
      <div className="lp-container">
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
