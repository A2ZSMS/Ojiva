'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { INDUSTRIES } from '@/lib/industries';

/**
 * /solutions hub — index page that lists every industry solution.
 * Each card is a link to /solutions/[slug] for the dedicated industry page.
 */

const WHY = [
  {
    icon: 'bi-bullseye',
    title: 'Workflows scoped to your industry',
    body: 'Templates, journeys and channel mixes shaped by patterns we see across teams in your vertical — not generic CPaaS docs.',
  },
  {
    icon: 'bi-shield-lock-fill',
    title: 'Compliance, the way regulators want',
    body: 'TRAI DLT, sector rules and data-handling expectations baked into the platform — sender IDs, templates and consent flows are first-class.',
  },
  {
    icon: 'bi-lightning-fill',
    title: 'Multi-channel from day one',
    body: 'Bulk SMS, WhatsApp Business API, RCS Messaging and AI Voice — combine them with no-code flows, the visual builder, or the REST API.',
  },
];

export default function SolutionsHub() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="service-hero" aria-labelledby="sol-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-7">
                <FadeUp>
                  <span className="eyebrow">
                    <span className="eyebrow-dot" />
                    Solutions
                  </span>
                </FadeUp>
                <FadeUp delay={0.07}>
                  <h1 id="sol-hero-heading" className="service-hero-title">
                    Communication{' '}
                    <span className="text-gradient-blue">built for your industry</span>
                  </h1>
                </FadeUp>
                <FadeUp delay={0.14}>
                  <p className="service-hero-desc">
                    Bulk SMS, WhatsApp Business API, RCS Messaging and AI Voice — combined into workflows shaped to how teams in your industry actually work.
                  </p>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary">Talk to Sales →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
                  </div>
                </FadeUp>
                <FadeUp delay={0.26}>
                  <div className="service-stats-row">
                    <div className="service-stat-item">
                      <span className="service-stat-value">{INDUSTRIES.length}</span>
                      <span className="service-stat-label">Industries Covered</span>
                    </div>
                    <div className="service-stat-item">
                      <span className="service-stat-value">4</span>
                      <span className="service-stat-label">Channels (SMS · WA · RCS · Voice)</span>
                    </div>
                    <div className="service-stat-item">
                      <span className="service-stat-value">DLT</span>
                      <span className="service-stat-label">TRAI Compliant</span>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Visual mosaic on right — industry icon tiles */}
              <div className="col-12 col-lg-5">
                <FadeUp delay={0.18}>
                  <div className="sol-hero-mosaic" aria-hidden="true">
                    {INDUSTRIES.slice(0, 8).map((ind, i) => (
                      <div
                        key={ind.slug}
                        className={`sol-mosaic-tile sol-mosaic-tile-${i % 4}`}
                        style={{ '--ind-color': ind.color }}
                        title={ind.name}
                      >
                        <i className={`bi ${ind.icon}`} />
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why industry-specific ── */}
      <section className="section-padding" aria-labelledby="sol-why-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="The approach"
                title="Why an industry-specific lens matters"
                subtitle="A bank's OTP volume, a hospital's reminder cadence, and a logistics fleet's RTO loop look nothing alike. The platform — and our solutions team — adapt to that."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="sol-why-grid" staggerDelay={0.06}>
            {WHY.map(({ icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="sol-why-card">
                  <span className="sol-why-icon">
                    <i className={`bi ${icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="sol-why-title">{title}</h3>
                  <p className="sol-why-body">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Industries grid (richer cards) ── */}
      <section className="section-padding bg-mesh-tinted" aria-labelledby="sol-grid-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="By Industry"
                title="Pick your industry"
                subtitle="A dedicated page for each industry showing the channels, use cases, compliance notes and FAQs that matter."
                center
              />
            </div>
          </FadeUp>

          <StaggerContainer className="sol-grid" staggerDelay={0.04}>
            {INDUSTRIES.map(ind => (
              <StaggerItem key={ind.slug}>
                <Link
                  href={`/solutions/${ind.slug}`}
                  className="sol-card"
                  style={{ '--ind-color': ind.color }}
                  aria-label={`${ind.name} — view solution`}
                >
                  <span className="sol-card-icon">
                    <i className={`bi ${ind.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="sol-card-name">{ind.shortName}</h3>
                  <p className="sol-card-desc">{ind.subtitle}</p>

                  <div className="sol-card-meta">
                    <span className="sol-card-chip">
                      <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
                      {ind.useCases.length} workflows
                    </span>
                    <span className="sol-card-chip">
                      <i className="bi bi-broadcast" aria-hidden="true" />
                      {ind.channelFit.length} channels
                    </span>
                  </div>

                  <span className="sol-card-arrow">
                    <span>Explore solution</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <FadeUp>
        <CTA
          title="Don't see your industry?"
          subtitle="Our solutions team works across regulated and high-volume verticals every day. Tell us about your use case and we'll show you what's possible."
          primaryLabel="Talk to Solutions"
          primaryHref="/contact"
          secondaryLabel="Book a Demo"
          secondaryHref="/book-demo"
        />
      </FadeUp>
    </>
  );
}
