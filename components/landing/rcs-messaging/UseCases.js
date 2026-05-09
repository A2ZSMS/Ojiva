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
    <section className="slp-section slp-section--dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#34d399' }}>Use Cases</p>
          <h2 className="slp-section-title">RCS Messaging Across Every Industry</h2>
          <p className="slp-section-desc">
            From retail product showcases to verified banking alerts — RCS Business Messaging
            elevates customer communication in every sector.
          </p>
        </div>

        <div className="slp-industry-grid">
          {USE_CASES.map(({ icon, title, desc }) => (
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
