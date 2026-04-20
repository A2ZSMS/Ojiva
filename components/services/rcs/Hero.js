import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import { METRICS } from './data';
import { RcsHeroVisual } from '@/components/services/shared/HeroVisuals';

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="rcs-hero-heading">
      <div className="service-hero-glow rcs-glow-1" />
      <div className="service-hero-glow rcs-glow-2" />
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <div className="service-badge rcs-badge">✨ RCS Business Messaging</div>
              </HeroEntrance>
              <HeroEntrance index={1}>
                <h1 id="rcs-hero-heading" className="service-hero-title">
                  <span className="sh-accent sh-accent-rcs">RCS Business Messaging</span><br />Next Generation Platform
                </h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
                <p className="service-hero-desc">
                  Go beyond plain text SMS. Send rich cards, swipeable carousels, suggested action buttons, and verified branded messages — all in the native Android Messages app. 3x higher CTR than SMS.
                </p>
              </HeroEntrance>
              <HeroEntrance index={3}>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href="/contact" className="btn-hero-primary rcs-btn-primary border-0">Upgrade to RCS →</Link>
                  <Link href="/book-demo" className="btn-hero-outline">See Live Demo</Link>
                </div>
              </HeroEntrance>
              <HeroEntrance index={4}>
                <div className="service-stats-row">
                  {METRICS.map(({ value, label }) => (
                    <div key={label} className="service-stat-item">
                      <span className="service-stat-value">{value}</span>
                      <span className="service-stat-label">{label}</span>
                    </div>
                  ))}
                </div>
              </HeroEntrance>
            </div>
            <div className="col-12 col-lg-6">
              <HeroEntrance index={2}>
                <FloatingElement amplitude={6} duration={6}>
                  <div className="service-visual-wrap">
                    <RcsHeroVisual />
                  </div>
                </FloatingElement>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
