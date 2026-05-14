const MESSAGE_TYPES = [
  {
    icon: 'bi-key-fill',
    title: 'OTP & Authentication',
    desc: 'Deliver one-time passwords in under 3 seconds. Higher read rates than SMS — no more "OTP not received" support tickets.',
    example: '🔐 Your Ojiva AI OTP is 482913. Valid for 10 minutes. Do not share.',
    color: '#1B48E0', bg: 'rgba(27,72,224,0.08)',
  },
  {
    icon: 'bi-bag-check-fill',
    title: 'Order & Shipment Updates',
    desc: 'Automated order confirmations, dispatch alerts, and delivery tracking links. Reduce "where is my order?" calls by 60%.',
    example: '📦 Your order #OJ8821 has been shipped! Track here: ojiva.ai/track/8821',
    color: '#25d366', bg: 'rgba(37,211,102,0.08)',
  },
  {
    icon: 'bi-calendar-check-fill',
    title: 'Appointment Reminders',
    desc: 'Cut no-shows by up to 76% with automated reminders 24 hrs and 1 hr before appointments. Patients can confirm or reschedule in one tap.',
    example: '📅 Reminder: Your appointment with Dr. Rao is tomorrow at 10:30 AM. Reply YES to confirm.',
    color: '#7C3AED', bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: 'bi-credit-card-fill',
    title: 'Payment Links & Alerts',
    desc: 'Send clickable Razorpay/Instamojo payment links, EMI reminders, and payment confirmations directly on WhatsApp.',
    example: '💳 Your invoice ₹4,200 is due. Pay now: rzp.io/l/ojiva8821 — offer expires tonight.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: 'bi-megaphone-fill',
    title: 'Promotions & Campaigns',
    desc: 'Run flash sales, festival offers, and re-engagement campaigns with image carousels, CTAs, and quick-reply buttons that drive 4–8× higher CTR than email.',
    example: '🎉 FLASH SALE! 40% off till midnight. Shop now 👉 [View Catalogue] [Get Coupon]',
    color: '#ec4899', bg: 'rgba(236,72,153,0.08)',
  },
  {
    icon: 'bi-headset',
    title: 'Live Support & Chatbot',
    desc: 'Handle FAQs, returns, and complaints with an AI chatbot. Route complex issues to a human agent — all inside WhatsApp, the app your customers already use.',
    example: '👋 Hi Rahul! How can I help today? [Track Order] [Return Item] [Talk to Agent]',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.08)',
  },
];

export default function MessageTypes() {
  return (
    <section className="lp-section lp-section--light">
      <div className="container">
        <div className="lp-section-label">Message Types</div>
        <h2 className="lp-section-h2">
          6 types of messages your business can send today
        </h2>
        <p className="lp-section-p">
          From OTPs to full product catalogues — the WhatsApp Business API
          handles every communication your business needs.
        </p>
        <div className="lp-msgtypes">
          {MESSAGE_TYPES.map(({ icon, title, desc, example, color, bg }) => (
            <div key={title} className="lp-msgtype-card">
              <div
                className="lp-msgtype-icon"
                style={{ background: bg, color }}
              >
                <i className={`bi ${icon}`} />
              </div>
              <h3 className="lp-msgtype-title">{title}</h3>
              <p className="lp-msgtype-desc">{desc}</p>
              <div
                className="lp-msgtype-bubble"
                style={{ borderLeftColor: color }}
              >
                <span className="lp-msgtype-bubble-label">
                  Example message
                </span>
                <p className="lp-msgtype-bubble-text">{example}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="#lead-form" className="lp-btn-primary">
            Send Your First WhatsApp Campaign →
          </a>
        </div>
      </div>
    </section>
  );
}
