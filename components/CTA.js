import Link from 'next/link';

export default function CTA({
  title = 'Ready to transform your business communications?',
  subtitle = 'Join forward-thinking enterprises using Ojiva AI to automate workflows, qualify leads, and deliver intelligent customer experiences at scale.',
  primaryLabel = 'Request a Demo',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Platform',
  secondaryHref = '/platform',
}) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <h2 className="cta-title" id="cta-heading">{title}</h2>
            <p className="cta-subtitle mx-auto">{subtitle}</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href={primaryHref} className="btn-ojiva-primary">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="btn-ojiva-ghost">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
