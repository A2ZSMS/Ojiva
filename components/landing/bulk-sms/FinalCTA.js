import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="slp-cta-section">
      <div className="container">
        <h2 className="slp-cta-title">Ready to Send Bulk SMS at Scale?</h2>
        <p className="slp-cta-desc">
          Join 500+ Indian businesses delivering 10M+ messages every day with Ojiva AI.
          No setup fees. DLT compliant. Go live in 48 hours.
        </p>
        <div className="slp-cta-actions">
          <Link href="/contact" className="slp-btn-primary">
            Start Free Trial <i className="bi bi-arrow-right" />
          </Link>
          <Link href="/pricing" className="slp-btn-outline">
            View Pricing
          </Link>
          <Link href="/book-demo" className="slp-btn-outline">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
