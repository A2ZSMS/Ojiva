const TESTIMONIALS = [
  {
    stars: 5,
    quote: 'Switched to Ojiva AI for bulk SMS — delivery rate went from 72% to 99.1% overnight. The DLT registration was handled end-to-end by their team.',
    name: 'Vikram Joshi',
    role: 'CTO',
    company: 'Zippy Logistics',
    initials: 'VJ',
    avatarBg: '#fee2e2',
    avatarColor: '#be123c',
    result: '99.1% Delivery',
    resultColor: '#16a34a',
  },
  {
    stars: 5,
    quote: 'We send 2 lakh OTPs daily. Ojiva AI delivers sub-3 second avg with zero failures. Our user drop-off at login dropped from 18% to under 2%.',
    name: 'Priya Nair',
    role: 'Head of Product',
    company: 'FinNova Technologies',
    initials: 'PN',
    avatarBg: '#dcfce7',
    avatarColor: '#15803d',
    result: '2% Login Drop-off',
    resultColor: '#1B48E0',
  },
  {
    stars: 5,
    quote: 'Flash sale SMS campaigns through Ojiva AI now drive ₹40L+ in revenue every month. The scheduling and segmentation features are top-notch.',
    name: 'Rahul Sharma',
    role: 'Marketing Director',
    company: 'Nexora Commerce',
    initials: 'RS',
    avatarBg: '#dbeafe',
    avatarColor: '#1d4ed8',
    result: '₹40L+ Monthly Revenue',
    resultColor: '#7c3aed',
  },
];

export default function Testimonials() {
  return (
    <section className="bs2-section bs2-section--light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">TESTIMONIALS</p>
          <h2 className="bs2-section-title">What Our Clients Say</h2>
          <p className="bs2-section-desc">
            Real results from Indian businesses using Ojiva AI bulk SMS every day.
          </p>
        </div>

        <div className="bs2-test-grid">
          {TESTIMONIALS.map(({ stars, quote, name, role, company, initials, avatarBg, avatarColor, result, resultColor }) => (
            <div key={name} className="bs2-test-card">
              <div className="bs2-test-stars">
                {'★'.repeat(stars)}
              </div>
              <p className="bs2-test-quote">&ldquo;{quote}&rdquo;</p>
              <div className="bs2-test-meta">
                <div className="bs2-test-avatar" style={{ background: avatarBg, color: avatarColor }}>
                  {initials}
                </div>
                <div className="bs2-test-info">
                  <div className="bs2-test-name">{name}</div>
                  <div className="bs2-test-role">{role} · {company}</div>
                </div>
                <div className="bs2-test-result" style={{ color: resultColor }}>
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
