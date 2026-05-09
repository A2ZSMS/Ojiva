const INDUSTRIES = [
  { icon: '🛒', title: 'E-Commerce & Retail',    desc: 'Order confirmations, delivery updates, cart abandonment, flash sale alerts, and return notifications.' },
  { icon: '🏦', title: 'Finance & Banking',       desc: 'OTPs, transaction alerts, payment reminders, KYC updates, and loan application status.' },
  { icon: '🏥', title: 'Healthcare',              desc: 'Appointment reminders, prescription alerts, lab test results, doctor availability, and health tips.' },
  { icon: '🎓', title: 'Education & EdTech',      desc: 'Fee reminders, exam schedules, result notifications, admission updates, and class alerts.' },
  { icon: '🚚', title: 'Logistics & Delivery',    desc: 'Shipment tracking, delivery confirmations, delay alerts, and pick-up notifications.' },
  { icon: '🏗️', title: 'Real Estate',             desc: 'Lead nurturing, property updates, site visit reminders, payment due alerts, and new launch alerts.' },
];

export default function Industries() {
  return (
    <section className="slp-section slp-section--alt">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>Industries</p>
          <h2 className="slp-section-title">Built for Every Indian Business</h2>
          <p className="slp-section-desc">
            From fintech to healthcare, logistics to e-commerce — Ojiva AI powers bulk SMS
            campaigns across every major industry vertical in India.
          </p>
        </div>

        <div className="slp-industry-grid">
          {INDUSTRIES.map(({ icon, title, desc }) => (
            <div key={title} className="slp-industry-card">
              <div className="slp-industry-icon">{icon}</div>
              <div>
                <div className="slp-industry-title">{title}</div>
                <p className="slp-industry-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
