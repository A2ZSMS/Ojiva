const TESTIMONIALS = [
  {
    quote: 'Switched from plain SMS to RCS for our product carousel campaigns. CTR jumped from 3% to 18% overnight. The verified badge alone doubled our conversions.',
    name: 'Meera Kapoor', role: 'Head of Digital', company: 'FashionForward India',
    initials: 'MK', avatarBg: '#ede9fe', avatarColor: '#6d28d9', result: '18% CTR',
  },
  {
    quote: 'Our banking clients are thrilled — RCS messages with verified identity and interactive payment links replaced 4 separate WhatsApp templates. 40% fewer queries.',
    name: 'Arun Menon', role: 'VP Technology', company: 'FinServe Solutions',
    initials: 'AM', avatarBg: '#dcfce7', avatarColor: '#15803d', result: '40% Fewer Queries',
  },
  {
    quote: 'Appointment reminders with "Confirm/Reschedule" buttons cut our no-show rate from 28% to 6%. The ROI from RCS is 4× better than SMS for us.',
    name: 'Dr. Sunita Rao', role: 'Operations Head', company: 'HealthFirst Clinics',
    initials: 'SR', avatarBg: '#fef9c3', avatarColor: '#b45309', result: 'No-shows down 79%',
  },
];

export default function Testimonials() {
  return (
    <section className="slp-section slp-section--dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#22d3ee' }}>Results</p>
          <h2 className="slp-section-title">What Our RCS Customers Say</h2>
        </div>

        <div className="slp-test-grid">
          {TESTIMONIALS.map(({ quote, name, role, company, initials, avatarBg, avatarColor, result }) => (
            <div key={name} className="slp-test-card">
              <div className="slp-test-stars">★★★★★</div>
              <p className="slp-test-quote">&ldquo;{quote}&rdquo;</p>
              <div className="slp-test-meta">
                <div className="slp-test-avatar" style={{ background: avatarBg, color: avatarColor }}>
                  {initials}
                </div>
                <div>
                  <p className="slp-test-name">{name}</p>
                  <p className="slp-test-role">{role} · {company}</p>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, color: '#22d3ee', textAlign: 'right' }}>
                  {result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
