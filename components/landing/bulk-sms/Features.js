const FEATURES = [
  { icon: 'bi-shield-check',    title: 'DLT Compliant',          color: '#34d399', bg: 'rgba(52,211,153,0.12)',   desc: 'Fully TRAI DLT registered — zero legal risk with pre-approved sender IDs and message templates.' },
  { icon: 'bi-code-slash',      title: 'REST API & SDKs',         color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',   desc: 'Integrate with your app in minutes. SDKs for PHP, Python, Node.js, Java, and 10+ languages.' },
  { icon: 'bi-bar-chart-line',  title: 'Real-Time Analytics',     color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',   desc: 'Live delivery reports, CTR tracking, campaign-level analytics, and ROI dashboards.' },
  { icon: 'bi-calendar-event',  title: 'Campaign Scheduling',     color: '#a78bfa', bg: 'rgba(167,139,250,0.12)',  desc: 'Schedule SMS campaigns for any future date and time. Perfect for festive season timing.' },
  { icon: 'bi-people',          title: 'Contact Management',      color: '#fb923c', bg: 'rgba(251,146,60,0.12)',   desc: 'Upload CSV/Excel lists, create segments by city, age, or custom fields, manage opt-outs.' },
  { icon: 'bi-translate',       title: 'Multilingual Unicode',    color: '#f472b6', bg: 'rgba(244,114,182,0.12)',  desc: 'Send SMS in Hindi, Tamil, Telugu, Bengali, Marathi, and 10+ regional languages with Unicode support.' },
  { icon: 'bi-arrow-left-right', title: 'Two-Way Messaging',      color: '#34d399', bg: 'rgba(52,211,153,0.12)',   desc: 'Receive inbound replies from customers. Use for polls, confirmations, and opt-in campaigns.' },
  { icon: 'bi-person-badge',    title: 'Custom Sender ID',        color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',   desc: 'Send from your brand name (e.g. OJIVAI) instead of a random number — builds trust instantly.' },
];

export default function Features() {
  return (
    <section className="slp-section slp-section--dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="slp-eyebrow" style={{ color: '#a78bfa' }}>Platform Features</p>
          <h2 className="slp-section-title">Everything Your Bulk SMS Campaign Needs</h2>
          <p className="slp-section-desc">
            Built for Indian businesses — from startups sending 10,000 messages to enterprises
            sending 10 million messages a day.
          </p>
        </div>

        <div className="slp-card-grid">
          {FEATURES.map(({ icon, title, color, bg, desc }) => (
            <div key={title} className="slp-feature-card">
              <div className="slp-feature-icon" style={{ background: bg, color }}>
                <i className={`bi ${icon}`} />
              </div>
              <div className="slp-feature-title">{title}</div>
              <p className="slp-feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
