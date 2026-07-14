import Link from 'next/link';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
import RelatedGuides from '@/components/ui/RelatedGuides';

/**
 * Presentational layout for Bengaluru channel landing pages (/bangalore/*).
 *
 * All COPY lives in per-channel data files (components/bangalore/data/*) and is
 * fully unique per channel — this component only provides consistent structure,
 * mirroring how the /solutions pages share IndustryPageLayout.
 */
export default function BangaloreChannelPage({ data }) {
  const {
    badge, h1, definition, heroDesc, stats = [],
    why, features = [], industries = [], compliance, local,
    faqs = [], faqSubtitle, leadForm = {}, relatedGuideSlugs, nationalUrl, nationalLabel,
  } = data;

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" aria-labelledby="blr-hero-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 760, margin: '0 auto' }}>
            <span className="section-tag">{badge}</span>
            <h1 id="blr-hero-heading" className="page-hero-title mt-3">{h1}</h1>
            {/* Definition block — direct 40-55 word answer for featured snippets / AI Overviews */}
            <p className="lead mt-3" style={{ fontWeight: 500 }}>{definition}</p>
            <p className="text-muted">{heroDesc}</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
              <Link href="/contact/" className="btn-hero-primary border-0">Talk to Our Bengaluru Team →</Link>
              <Link href="/book-demo/" className="btn-hero-outline">Book a Free Demo</Link>
            </div>
            {stats.length > 0 && (
              <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
                {stats.map(({ val, lbl }) => (
                  <div key={lbl} className="text-center">
                    <div className="h4 fw-bold mb-0">{val}</div>
                    <div className="small text-muted">{lbl}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Why this channel in Bengaluru ── */}
      {why && (
        <section className="section-padding" aria-labelledby="blr-why-heading">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="text-center mb-4">
              <span className="eyebrow"><span className="eyebrow-dot" />Local Expertise</span>
              <h2 id="blr-why-heading" className="section-title mt-2">{why.title}</h2>
            </div>
            {why.paragraphs.map((p, i) => (
              <p key={i} className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* ── Features ── */}
      {features.length > 0 && (
        <section className="section-padding bg-section" aria-labelledby="blr-features-heading">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow"><span className="eyebrow-dot" />What You Get</span>
              <h2 id="blr-features-heading" className="section-title mt-2">{data.featuresTitle}</h2>
            </div>
            <div className="row g-4">
              {features.map(({ icon, title, body }) => (
                <div className="col-md-6 col-lg-4" key={title}>
                  <div className="feature-card h-100">
                    <i className={`bi ${icon} fs-3 mb-2 d-block`} style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <h3 className="h6 fw-semibold">{title}</h3>
                    <p className="small text-muted mb-0">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Industries ── */}
      {industries.length > 0 && (
        <section className="section-padding" aria-labelledby="blr-industries-heading">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow"><span className="eyebrow-dot" />Use Cases</span>
              <h2 id="blr-industries-heading" className="section-title mt-2">{data.industriesTitle}</h2>
            </div>
            <div className="row g-4">
              {industries.map(({ name, body }) => (
                <div className="col-md-6" key={name}>
                  <div className="feature-card h-100">
                    <h3 className="h6 fw-semibold">{name}</h3>
                    <p className="small text-muted mb-0">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Compliance ── */}
      {compliance && (
        <section className="section-padding bg-section" aria-labelledby="blr-compliance-heading">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="text-center mb-4">
              <span className="eyebrow"><span className="eyebrow-dot" />Compliance</span>
              <h2 id="blr-compliance-heading" className="section-title mt-2">{compliance.title}</h2>
            </div>
            {compliance.paragraphs.map((p, i) => (
              <p key={i} className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* ── Local presence ── */}
      {local && (
        <section className="section-padding" aria-labelledby="blr-local-heading">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="text-center mb-4">
              <span className="eyebrow"><span className="eyebrow-dot" />Local Support</span>
              <h2 id="blr-local-heading" className="section-title mt-2">{local.title}</h2>
            </div>
            {local.paragraphs.map((p, i) => (
              <p key={i} className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>{p}</p>
            ))}
            <p className="small text-muted mt-3">
              Registered office: 183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar,
              Bengaluru, Karnataka 560092 · <a href="tel:+918431086185">+91 84310 86185</a> ·{' '}
              <Link href={nationalUrl}>{nationalLabel}</Link> · <Link href="/bangalore/">All Bengaluru services</Link>
            </p>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && <FAQ faqs={faqs} subtitle={faqSubtitle} />}

      {/* ── Related blog guides ── */}
      {relatedGuideSlugs?.length > 0 && <RelatedGuides slugs={relatedGuideSlugs} />}

      {/* ── Lead form ── */}
      <ServiceLeadForm {...leadForm} />
    </>
  );
}
