import Image from 'next/image';
import Link from 'next/link';
import { HeroEntrance } from '@/components/ui/Animations';

export default function Hero() {
  return (
    <section className="page-hero about-hero-enhanced" aria-labelledby="about-hero-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <HeroEntrance index={0}>
              <span className="section-tag">Our Story</span>
            </HeroEntrance>
            <HeroEntrance index={1}>
            <h1 className="page-hero-title" id="about-hero-heading">
              Built on a decade of{' '}
              <span className="about-hero-accent">messaging trust</span>
            </h1>
            </HeroEntrance>
            <HeroEntrance index={2}>
            <p className="page-hero-subtitle">
              Ojiva AI is the parent company of A2ZSMS — India&apos;s most reliable
              bulk SMS platform. We&apos;ve been the backbone of enterprise communication
              since 2015, and today we&apos;re redefining what&apos;s possible with AI.
            </p>
            </HeroEntrance>
            <HeroEntrance index={3}>
            <div className="about-hero-btns mt-4">
              <Link href="/contact" className="btn-hero-primary">
                Talk to Us
              </Link>
              <Link href="/platform" className="btn-hero-outline">
                Explore Platform →
              </Link>
            </div>
            </HeroEntrance>
          </div>

          <div className="col-12 col-lg-5 offset-lg-1">
            <HeroEntrance index={2}>
            <div className="about-brand-stack">
              <div className="about-brand-card about-brand-ojiva">
                <div className="about-brand-card-header">
                  <Image
                    src="/ojiva-logo-optimized.png"
                    alt="About Ojiva AI — India's leading enterprise AI communication platform headquartered in Bengaluru"
                    width={130}
                    height={44}
                    style={{ width: 'auto', height: '38px', objectFit: 'contain' }}
                    unoptimized
                    loading="lazy"
                  />
                  <span className="about-brand-badge">Parent Company</span>
                </div>
                <p className="about-brand-desc">AI Communication Platform</p>
                <div className="about-brand-pills">
                  <span>SMS</span>
                  <span>WhatsApp</span>
                  <span>RCS</span>
                  <span>Bulk Voice Call</span>
                </div>
              </div>

              <div className="about-brand-connector">
                <div className="about-brand-connector-line" />
                <span className="about-brand-connector-label">Owns &amp; Powers</span>
                <div className="about-brand-connector-line" />
              </div>

              <div className="about-brand-card about-brand-a2z">
                <div className="about-brand-card-header">
                  <div className="a2z-logo-text">A2ZSMS</div>
                  <span className="about-brand-badge about-brand-badge-cyan">Flagship Product</span>
                </div>
                <p className="about-brand-desc">India&apos;s #1 Bulk SMS Aggregator</p>
                <div className="about-brand-pills about-brand-pills-cyan">
                  <span>Bulk SMS</span>
                  <span>OTP &amp; Alerts</span>
                  <span>DLT Compliant</span>
                </div>
              </div>
            </div>
            </HeroEntrance>
          </div>
        </div>
      </div>
    </section>
  );
}
