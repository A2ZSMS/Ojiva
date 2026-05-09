const TESTIMONIALS = [
  {
    quote: 'Switched to Ojiva AI for bulk SMS — delivery rate went from 72% to 99.1% overnight. The DLT registration was handled end-to-end by their team.',
    name: 'Vikram Joshi', role: 'CTO', company: 'Zippy Logistics',
    initials: 'VJ', avatarBg: '#ffe4e6', avatarColor: '#be123c', result: '99.1% Delivery',
  },
  {
    quote: 'We send 2 lakh OTPs daily. Ojiva AI delivers sub-3 second avg with zero failures. Our user drop-off at login went from 18% to under 2%.',
    name: 'Priya Nair', role: 'Head of Product', company: 'FinNova Technologies',
    initials: 'PN', avatarBg: '#dcfce7', avatarColor: '#15803d', result: '2% Login Drop-off',
  },
  {
    quote: 'Flash sale SMS campaigns through Ojiva AI now drive ₹40L+ in revenue every month. The scheduling and segmentation features are top-notch.',
    name: 'Rahul Sharma', role: 'Marketing Director', company: 'Nexora Commerce',
    initials: 'RS', avatarBg: '#dbeafe', avatarColor: '#1d4ed8', result: '₹40L+ Monthly Revenue',
  },
];

export default function Testimonials() {
  return (
    <section className="slp-section slp-section--alt">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#34d399' }}>Social Proof</p>
          <h2 className="slp-section-title">Trusted by 500+ Indian Businesses</h2>
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
                <div style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, color: '#34d399', textAlign: 'right' }}>
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
