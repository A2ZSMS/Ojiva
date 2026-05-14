const TESTIMONIALS = [
  {
    quote: 'WhatsApp API transformed our customer communication. We saw a 3× increase in engagement within the first month. The setup was seamless and the support team was outstanding throughout.',
    name: 'Rahul Sharma', role: 'CEO', company: 'ShopEase Retail',
    initials: 'RS', avatarBg: '#dbeafe', avatarColor: '#1d4ed8',
    result: '3× Engagement Increase', resultColor: '#22c55e', stars: 5,
  },
  {
    quote: 'Automated appointment reminders reduced our no-shows by 60%. The AI chatbot handles patient queries even after hours — our patients absolutely love the instant response.',
    name: 'Dr. Priya Nair', role: 'Director', company: 'HealthFirst Clinic',
    initials: 'PN', avatarBg: '#dcfce7', avatarColor: '#15803d',
    result: '60% Fewer No-Shows', resultColor: '#a855f7', stars: 5,
  },
  {
    quote: 'The official WhatsApp API prevents bans and delivers 99%+ of our messages. The analytics dashboard helps us optimise every campaign. Best decision we made for our marketing.',
    name: 'Amit Patel', role: 'Marketing Head', company: 'EduConnect',
    initials: 'AP', avatarBg: '#ede9fe', avatarColor: '#6d28d9',
    result: '99%+ Delivery Rate', resultColor: '#3b82f6', stars: 5,
  },
  {
    quote: 'Our appointment no-show rate dropped from 34% to 8% after deploying WhatsApp reminders. That alone saves us ₹4L per month in lost slots.',
    name: 'Dr. Sunita Rao', role: 'Operations Head', company: 'HealthFirst Clinics',
    initials: 'SR', avatarBg: '#fef9c3', avatarColor: '#b45309',
    result: 'No-shows dropped 76%', resultColor: '#ef4444', stars: 5,
  },
  {
    quote: 'We send 2 lakh order-status messages a day. Before switching, our SMS delivery rate was 72%. Now it\'s 99.1% on WhatsApp and customer complaints dropped 40%.',
    name: 'Vikram Joshi', role: 'CTO', company: 'Zippy Logistics',
    initials: 'VJ', avatarBg: '#ffe4e6', avatarColor: '#be123c',
    result: '99.1% Delivery Rate', resultColor: '#06b6d4', stars: 5,
  },
  {
    quote: 'Within 6 weeks of going live, our WhatsApp chatbot was handling 83% of customer queries without a human agent. Our CSAT score went from 3.6 to 4.8.',
    name: 'Ananya Mehta', role: 'Customer Success Lead', company: 'EdSpark Learning',
    initials: 'AM', avatarBg: '#d1fae5', avatarColor: '#065f46',
    result: '83% Queries Auto-Resolved', resultColor: '#22c55e', stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="lp-section">
      <div className="container">
        <div className="lp-section-label">Customer Stories</div>
        <h2 className="lp-section-h2">
          Indian businesses already winning on WhatsApp
        </h2>
        <p className="lp-section-p">
          Real results. Real ROI. No vague case studies — just numbers from
          businesses like yours.
        </p>
        <div className="lp-testis">
          {TESTIMONIALS.map(
            ({
              quote,
              name,
              role,
              company,
              initials,
              avatarBg,
              avatarColor,
              result,
              resultColor,
              stars,
            }) => (
              <div key={name} className="lp-testi">
                <div className="lp-testi-top">
                  <span className="lp-stars">{"★".repeat(stars)}</span>
                  <span
                    className="lp-testi-tag"
                    style={{
                      color: resultColor,
                      background: resultColor + "18",
                    }}
                  >
                    {result}
                  </span>
                </div>
                <p className="lp-testi-q">&ldquo;{quote}&rdquo;</p>
                <div className="lp-testi-who">
                  <span
                    className="lp-avatar"
                    style={{ background: avatarBg, color: avatarColor }}
                  >
                    {initials}
                  </span>
                  <div>
                    <div className="lp-testi-name">{name}</div>
                    <div className="lp-testi-role">
                      {role} · {company}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
