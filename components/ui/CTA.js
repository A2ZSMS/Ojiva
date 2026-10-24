import Link from 'next/link';
import { FadeUp } from './Animations';
import { Magnetic } from './Premium';

export default function CTA({
  title = 'Ready to transform your business communications?',
  subtitle = 'Join forward-thinking enterprises using Ojiva AI to automate workflows, qualify leads, and deliver intelligent customer experiences at scale.',
  primaryLabel = 'Request a Demo',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Platform',
  secondaryHref = '/platform',
  trustItems = ['Free 14-day trial', 'No credit card required', 'Standard setup in 48 hours'],
}) {
  return (
    <section className="cta-section-v2" data-nav-dark aria-labelledby="cta-heading">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">

            {/* Eyebrow badge */}
            <FadeUp delay={0}>
              <div className="cta-eyebrow">
                <span className="cta-eyebrow-dot" />
                500+ businesses already growing with Ojiva AI
              </div>
            </FadeUp>

            {/* Title */}
            <FadeUp delay={0.1}>
              <h2 className="cta-title" id="cta-heading">{title}</h2>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.2}>
              <p className="cta-subtitle mx-auto">{subtitle}</p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="cta-actions">
                <Magnetic>
                {/* display: contents (globals.css), so it never scaled — no hover motion needed */}
                <div className="cta-btn-wrap">
                  <Link href={primaryHref} className="btn-cta-primary">
                    {primaryLabel}
                    <span className="btn-cta-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
                </Magnetic>

                {secondaryLabel && <Magnetic>
                {/* hover/press scale: .rv-press in Reveal.css */}
                <div className="rv-press">
                  <Link href={secondaryHref} className="btn-cta-ghost">
                    {secondaryLabel}
                  </Link>
                </div>
                </Magnetic>}
              </div>
            </FadeUp>

            {/* Trust line */}
            {trustItems.length > 0 && <FadeUp delay={0.4}>
              <p className="cta-trust">
                {trustItems.map((item) => <span key={item}>✓ {item}</span>)}
              </p>
            </FadeUp>}
          </div>
        </div>
      </div>
    </section>
  );
}
