const INDUSTRIES = [
  { icon: '🛒', title: 'E-Commerce & Retail',    desc: 'Order confirmations, cart recovery, flash sale alerts, delivery updates.' },
  { icon: '🎓', title: 'Education',               desc: 'Fee reminders, exam schedules, results, admissions, and class alerts.' },
  { icon: '🏗️', title: 'Real Estate',             desc: 'Lead follow-ups, site visit reminders, payment dues, new launches.' },
  { icon: '🏦', title: 'Banking & Finance',        desc: 'OTPs, transaction alerts, payment reminders, loan status updates.' },
  { icon: '🎮', title: 'Gaming & Entertainment',  desc: 'Event alerts, new content, offers, tournament invites, score updates.' },
  { icon: '🚚', title: 'Logistics',               desc: 'Shipment tracking, delivery confirmations, delay alerts, pick-ups.' },
  { icon: '🏥', title: 'Healthcare',               desc: 'Appointment reminders, lab results, doctor availability, health tips.' },
  { icon: '🛡️', title: 'Insurance',               desc: 'Premium due alerts, policy renewals, claim updates, and KYC messages.' },
  { icon: '✈️', title: 'Tours & Travel',           desc: 'Booking confirmations, itinerary updates, check-in reminders, offers.' },
];

export default function Industries() {
  return (
    <section className="bs2-section bs2-section--light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">INDUSTRIES</p>
          <h2 className="bs2-section-title">Bulk SMS for Every Industry</h2>
          <p className="bs2-section-desc">
            Ojiva AI powers bulk SMS communication across every major industry
            vertical in India — from startups to enterprise.
          </p>
        </div>

        <div className="bs2-industry-grid">
          {INDUSTRIES.map(({ icon, title, desc }) => (
            <div key={title} className="bs2-industry-card">
              <div className="bs2-industry-icon">{icon}</div>
              <div>
                <div className="bs2-industry-title">{title}</div>
                <p className="bs2-industry-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
