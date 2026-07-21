const PROBLEMS = [
  {
    icon: 'bi-eye-slash-fill',
    title: 'Plain SMS Gets Ignored',
    desc: "Generic plain-text SMS has <20% click-through. Customers don't trust unknown numbers — they delete without reading.",
    stat: '<20%',
    statLbl: 'Click Rate',
  },
  {
    icon: 'bi-shield-exclamation',
    title: 'No Sender Verification',
    desc: 'Unverified SMS numbers lead to spoofing, spam, and customers blocking your messages permanently.',
    stat: '67%',
    statLbl: 'Marked as Spam',
  },
  {
    icon: 'bi-slash-circle-fill',
    title: 'No Rich Media in SMS',
    desc: "Plain SMS can't show product images, videos, or interactive buttons. You lose every visual upsell opportunity.",
    stat: '3×',
    statLbl: 'Missed Engagement',
  },
];

const SOLUTIONS = [
  {
    icon: 'bi-stars',
    title: 'Rich Visual Messages',
    desc: 'Send carousels, product images, video previews, and PDF files directly in the message. Engage like never before.',
    stat: '35%',
    statLbl: 'Higher Engagement',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Verified Business Sender',
    desc: 'Your brand logo, name, and verified badge appear on every message. Zero spoofing — 100% customer trust.',
    stat: '100%',
    statLbl: 'Verified',
  },
  {
    icon: 'bi-hand-index-thumb-fill',
    title: 'Interactive Buttons & CTAs',
    desc: 'Add quick-reply buttons, URL buttons, call buttons, and location sharing — drive action right inside the message.',
    stat: '5×',
    statLbl: 'More Clicks',
  },
];

function Card({ icon, title, desc, stat, statLbl, accent }) {
  const chipBg  = accent === 'red' ? '#fee2e2' : '#ede9fe';
  const iconClr = accent === 'red' ? '#ef4444' : '#7c3aed';
  const statClr = accent === 'red' ? '#dc2626' : '#7c3aed';
  const border  = accent === 'red' ? '#f6e6e6' : '#eceaf6';
  return (
    <div className="col-12 col-md-4">
      <div style={{ height: '100%', background: '#fff', border: `1px solid ${border}`, borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
        <div style={{ width: 46, height: 46, borderRadius: 12, background: chipBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.1rem' }}>
          <i className={`bi ${icon}`} style={{ color: iconClr, fontSize: '1.3rem' }} aria-hidden="true" />
        </div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', marginBottom: '.6rem' }}>{title}</h3>
        <p style={{ color: '#64748b', fontSize: '.95rem', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>{desc}</p>
        <div style={{ borderTop: `1px solid ${border}`, paddingTop: '.9rem' }}>
          <span style={{ color: statClr, fontWeight: 800, fontSize: '1.15rem' }}>{stat}</span>{' '}
          <span style={{ color: '#94a3b8', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' }}>{statLbl}</span>
        </div>
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="slp-section" style={{ background: 'linear-gradient(180deg, #f7f6fd 0%, #f1f3fb 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ display: 'inline-block', background: 'rgba(124,58,237,0.10)', color: '#7c3aed', fontWeight: 700, fontSize: '.72rem', letterSpacing: '.06em', padding: '.45rem .95rem', borderRadius: '999px', textTransform: 'uppercase' }}>
            Why Switch to RCS Messaging?
          </span>
          <h2 className="slp-section-title" style={{ color: '#1e1b2e', marginTop: '1.1rem' }}>
            The Problem &amp; Our Solution
          </h2>
          <p className="slp-section-desc" style={{ color: '#64748b' }}>
            Upgrade from SMS to RCS messaging for richer, high-converting customer engagement.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#dc2626', fontWeight: 700, fontSize: '.8rem', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>
          <i className="bi bi-x-circle-fill" aria-hidden="true" /> Problems with Plain SMS
        </div>
        <div className="row g-4 mb-5">
          {PROBLEMS.map(p => <Card key={p.title} {...p} accent="red" />)}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#7c3aed', fontWeight: 700, fontSize: '.8rem', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '1.1rem' }}>
          <i className="bi bi-check-circle-fill" aria-hidden="true" /> RCS Solution
        </div>
        <div className="row g-4">
          {SOLUTIONS.map(s => <Card key={s.title} {...s} accent="purple" />)}
        </div>
      </div>
    </section>
  );
}
