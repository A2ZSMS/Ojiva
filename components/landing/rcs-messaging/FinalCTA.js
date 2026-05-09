import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="slp-cta-section" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(96,165,250,0.10) 100%)', borderColor: 'rgba(34,211,238,0.2)' }}>
      <div className="container">
        <h2 className="slp-cta-title">Start Sending Rich RCS Messages Today</h2>
        <p className="slp-cta-desc">
          Get Google-verified and deliver brand-perfect interactive messages to 1B+ Android users.
          Ojiva AI handles the setup — you focus on the results.
        </p>
        <div className="slp-cta-actions">
          <Link href="/contact" className="slp-btn-primary" style={{ background: 'linear-gradient(135deg, #22d3ee, #0ea5e9)' }}>
            Get Free RCS Access <i className="bi bi-arrow-right" />
          </Link>
          <Link href="/rcs" className="slp-btn-outline">
            Explore RCS Features
          </Link>
          <Link href="/book-demo" className="slp-btn-outline">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
