const USE_CASES = [
  {
    icon: '🛍️',
    title: 'Retail & E-Commerce',
    desc: 'Send product carousels with "Shop Now" buttons, flash sale announcements with countdown timers, abandoned cart recovery with product images.',
  },
  {
    icon: '🏦',
    title: 'Banking & Finance',
    desc: 'Verified transaction confirmations (no spoofing), loan offers with "Apply Now" buttons, investment opportunities with branded identity.',
  },
  {
    icon: '✈️',
    title: 'Travel & Hospitality',
    desc: 'Rich boarding passes with QR codes, hotel confirmations with property images, "Modify Booking" interactive buttons.',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Appointment cards with "Confirm/Reschedule" buttons, doctor profile rich cards, medication reminders with verified hospital branding.',
  },
  {
    icon: '🎓',
    title: 'Education & EdTech',
    desc: 'Course previews with video thumbnails, admission updates with "Apply Now" CTAs, exam result notifications with college branding.',
  },
  {
    icon: '🚚',
    title: 'Logistics',
    desc: 'Live shipment tracking cards with map previews, delivery confirmation with "Rate Experience" quick reply, address update interactive flows.',
  },
];

export default function UseCases() {
  return (
    <section className="slp-section slp-section--dark" style={{ background: 'linear-gradient(180deg, #edf6ff 0%, #e4f1fd 100%)', color: '#1e293b' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#059669' }}>Use Cases</p>
          <h2 className="slp-section-title" style={{ color: '#0f172a' }}>RCS Messaging Across Every Industry</h2>
          <p className="slp-section-desc" style={{ color: '#64748b' }}>
            From retail product showcases to verified banking alerts — RCS Business Messaging
            elevates customer communication in every sector.
          </p>
        </div>

        <div className="slp-industry-grid">
          {USE_CASES.map(({ icon, title, desc }) => (
            <div key={title} className="slp-industry-card" style={{ background: '#ffffff', border: '1px solid #dbe8f6', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}>
              <div className="slp-industry-icon">{icon}</div>
              <div>
                <div className="slp-industry-title" style={{ color: '#1e293b' }}>{title}</div>
                <p className="slp-industry-desc" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
