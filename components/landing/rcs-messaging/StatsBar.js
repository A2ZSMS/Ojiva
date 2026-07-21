const PROMO = [
  { icon: 'bi-tag-fill',          text: <><strong>RCS Setup</strong> from ₹3,999</> },
  { icon: 'bi-calendar-check-fill', text: <><strong>1 Month</strong> platform free</> },
  { icon: 'bi-shield-fill-check', text: <>Cancel <strong>anytime</strong></> },
  { icon: 'bi-patch-check-fill',  text: <><strong>Google</strong> RCS Partner</> },
];

export default function StatsBar() {
  return (
    <div
      className="slp-stats-bar"
      style={{ background: 'linear-gradient(180deg, #eff4ff 0%, #e7eefb 100%)', borderBottom: '1px solid #d8e2f4', padding: '.85rem 0' }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '.85rem 1.75rem' }}>
          {PROMO.map(({ icon, text }, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.95rem', color: '#334155' }}>
              <i className={`bi ${icon}`} style={{ color: '#1e40af', fontSize: '1.05rem' }} aria-hidden="true" />
              {text}
            </span>
          ))}
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)', color: '#fff', fontWeight: 700, fontSize: '.9rem', padding: '.55rem 1.15rem', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(30,64,175,0.30)' }}
          >
            Get Free Demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
