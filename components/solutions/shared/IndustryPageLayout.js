'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { CHANNEL_TO_URL } from '@/lib/industries';

/* ── Slug → image-file prefix map ── */
const IMG_PREFIX = {
  'travel-hospitality': 'travel',
  'insurance':          'insurance',
  'real-estate':        'realestate',
  'healthcare':         'healthcare',
  'banking-finance':    'finance',
  'ecommerce-retail':   'retail',
  'education':          'education',
  'logistics-delivery': 'logistics',
};

/* ── Channel metadata (icon + brand colour) ── */
const CHANNEL_META = {
  sms:      { icon: 'bi-chat-dots-fill',   color: '#1B48E0', bg: 'rgba(27,72,224,0.10)'   },
  whatsapp: { icon: 'bi-whatsapp',         color: '#25D366', bg: 'rgba(37,211,102,0.10)'  },
  rcs:      { icon: 'bi-stars',            color: '#FF6D42', bg: 'rgba(255,109,66,0.10)'  },
  voice:    { icon: 'bi-telephone-fill',   color: '#7C3AED', bg: 'rgba(124,58,237,0.10)'  },
};

/* ── Integration logos for trust bar ── */
const INTEGRATIONS = [
  { name: 'Salesforce',  abbr: 'Sf', color: '#00A1E0' },
  { name: 'HubSpot',     abbr: 'Hs', color: '#FF7A59' },
  { name: 'Shopify',     abbr: 'Sh', color: '#96BF48' },
  { name: 'Razorpay',    abbr: 'Rp', color: '#3395FF' },
  { name: 'Zoho',        abbr: 'Zh', color: '#E42527' },
  { name: 'Zapier',      abbr: 'Zp', color: '#FF4A00' },
];

/* ── Channel-specific CSS visual mockups (no external images) ── */
function ChannelMockup({ channel, use, indColor }) {
  const meta = CHANNEL_META[channel] || CHANNEL_META.sms;

  if (channel === 'whatsapp') {
    return (
      <div className="ind-lp-mockup ind-lp-mockup--wa">
        <div className="ind-lp-mock-topbar">
          <div className="ind-lp-mock-avatar" style={{ background: meta.bg, color: meta.color }}>
            <i className={`bi ${meta.icon}`} />
          </div>
          <div>
            <div className="ind-lp-mock-name">Business WhatsApp</div>
            <div className="ind-lp-mock-online">● Online</div>
          </div>
        </div>
        <div className="ind-lp-mock-chat">
          <div className="ind-lp-bubble ind-lp-bubble--in">Hi! I'd like more info about your services.</div>
          <div className="ind-lp-bubble ind-lp-bubble--out">Sure! Here's our complete brochure 📄</div>
          <div className="ind-lp-bubble ind-lp-bubble--out" style={{ opacity: 0.85 }}>Tap below to schedule a call 👇</div>
          <button className="ind-lp-wa-btn" style={{ color: meta.color, borderColor: `${meta.color}40` }}>
            📅 &nbsp;Schedule a Call
          </button>
        </div>
        <div className="ind-lp-mock-footer-bar">
          <span style={{ color: meta.color }}><i className="bi bi-check2-all" /></span>
          Delivered · Read · 98% open rate
        </div>
      </div>
    );
  }

  if (channel === 'sms') {
    return (
      <div className="ind-lp-mockup ind-lp-mockup--sms">
        <div className="ind-lp-sms-notify" style={{ borderLeftColor: meta.color }}>
          <div className="ind-lp-sms-notify-icon" style={{ color: meta.color }}>
            <i className={`bi ${meta.icon}`} />
          </div>
          <div>
            <div className="ind-lp-sms-from">OJIVA-AI · Just now</div>
            <div className="ind-lp-sms-body">Your appointment is confirmed for tomorrow at 10 AM. Reply C to confirm or R to reschedule.</div>
          </div>
        </div>
        <div className="ind-lp-sms-stats">
          <div className="ind-lp-sms-stat">
            <span style={{ color: meta.color }}>10M+</span>
            <span>Msgs/day</span>
          </div>
          <div className="ind-lp-sms-stat">
            <span style={{ color: meta.color }}>99.9%</span>
            <span>Uptime SLA</span>
          </div>
          <div className="ind-lp-sms-stat">
            <span style={{ color: meta.color }}>DLT</span>
            <span>Compliant</span>
          </div>
        </div>
        <div className="ind-lp-sms-tags">
          <span style={{ background: `${meta.color}12`, color: meta.color }}>
            <i className="bi bi-check2-circle" /> Transactional
          </span>
          <span style={{ background: `${meta.color}12`, color: meta.color }}>
            <i className="bi bi-megaphone" /> Promotional
          </span>
          <span style={{ background: `${meta.color}12`, color: meta.color }}>
            <i className="bi bi-shield-lock" /> OTP
          </span>
        </div>
      </div>
    );
  }

  if (channel === 'rcs') {
    return (
      <div className="ind-lp-mockup ind-lp-mockup--rcs">
        <div className="ind-lp-rcs-wrap">
          <div className="ind-lp-rcs-banner" style={{ background: `linear-gradient(135deg, ${meta.color}18, ${meta.color}35)` }}>
            <i className={`bi ${meta.icon}`} style={{ color: meta.color, fontSize: '2.2rem' }} />
            <span className="ind-lp-rcs-verified">
              <i className="bi bi-patch-check-fill" style={{ color: meta.color }} />
              Verified Sender
            </span>
          </div>
          <div className="ind-lp-rcs-content">
            <p className="ind-lp-rcs-text">Explore our latest offers with rich cards, carousels &amp; interactive buttons.</p>
          </div>
          <div className="ind-lp-rcs-btns">
            <button className="ind-lp-rcs-btn" style={{ color: meta.color }}>View Offers</button>
            <button className="ind-lp-rcs-btn" style={{ color: meta.color }}>Contact Us</button>
          </div>
        </div>
        <div className="ind-lp-rcs-stat-row">
          <span style={{ color: meta.color }}><i className="bi bi-bar-chart-fill" /> 94% read rate</span>
          <span style={{ color: meta.color }}><i className="bi bi-image" /> Rich Media</span>
        </div>
      </div>
    );
  }

  /* voice fallback */
  return (
    <div className="ind-lp-mockup ind-lp-mockup--voice">
      <div className="ind-lp-voice-ring" style={{ background: `${meta.color}18` }}>
        <div className="ind-lp-voice-icon-wrap" style={{ background: `${meta.color}22`, color: meta.color }}>
          <i className={`bi ${meta.icon}`} />
        </div>
      </div>
      <div className="ind-lp-voice-label">AI Voice Bot</div>
      <div className="ind-lp-voice-waves">
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} className="ind-lp-voice-bar" style={{ '--bar-i': i, background: meta.color }} />
        ))}
      </div>
      <div className="ind-lp-voice-desc">{use}</div>
      <div className="ind-lp-voice-chips">
        <span style={{ background: `${meta.color}12`, color: meta.color }}>IVR</span>
        <span style={{ background: `${meta.color}12`, color: meta.color }}>OBD</span>
        <span style={{ background: `${meta.color}12`, color: meta.color }}>AI Voice</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Main layout
════════════════════════════════════════════════════ */
export default function IndustryPageLayout({ industry }) {
  if (!industry) return null;

  const {
    name, headline, subtitle, icon, color, eyebrow,
    intro, painPoints,
    channelFit, useCases, outcomes, bestPractices,
    complianceNotes, complianceDetail, faqs,
    slug,
  } = industry;

  /* Image prefix for /solutions/{prefix}{n}.png */
  const imgPrefix = IMG_PREFIX[slug] || slug;

  /* Feature-row bullet points: pull from useCases + bestPractices pool */
  const allBullets = [
    ...(useCases || []).map(u => ({ title: u.title, short: u.body.split('.')[0] })),
    ...(bestPractices || []).map(b => ({ title: b.title, short: b.body.split('.')[0] })),
  ];
  const getRowBullets = (idx) => allBullets.slice(idx * 3, idx * 3 + 3);

  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="ind-lp-hero" style={{ '--ind-color': color }} aria-labelledby="ind-lp-h1">
        {/* Dot grid overlay */}
        <div className="ind-lp-hero-grid" aria-hidden="true" />
        {/* Industry-colour radial glow */}
        <div
          className="ind-lp-hero-glow"
          style={{ background: `radial-gradient(ellipse 65% 80% at 12% 55%, ${color}28 0%, transparent 62%)` }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row align-items-center g-5">

            {/* Left — copy */}
            <div className="col-12 col-lg-6">
              <FadeUp>
                <span className="ind-lp-eyebrow-badge" style={{ borderColor: `${color}55` }}>
                  <span className="ind-lp-badge-pulse" style={{ background: color }} />
                  <i className={`bi ${icon}`} aria-hidden="true" style={{ color }} /> {eyebrow}
                </span>
              </FadeUp>

              <FadeUp delay={0.07}>
                <h1 id="ind-lp-h1" className="ind-lp-h1">
                  {headline.includes(' — ') ? (
                    <>
                      {headline.split(' — ')[0]}
                      <span className="ind-lp-h1-accent" style={{ color }}>
                        {' — '}{headline.split(' — ').slice(1).join(' — ')}
                      </span>
                    </>
                  ) : headline}
                </h1>
              </FadeUp>

              <FadeUp delay={0.12}>
                <p className="ind-lp-subtitle">{subtitle}</p>
              </FadeUp>

              {/* Trust badges */}
              <FadeUp delay={0.16}>
                <div className="ind-lp-trust-badges">
                  {['DLT Ready', '99.9% Uptime', 'AES-256', 'Meta BSP'].map(b => (
                    <span key={b} className="ind-lp-trust-badge">
                      <i className="bi bi-shield-check" aria-hidden="true" />
                      {b}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.20}>
                <ul className="ind-lp-hero-bullets">
                  {useCases.slice(0, 4).map(uc => (
                    <li key={uc.title}>
                      <i className="bi bi-check-circle-fill" style={{ color }} aria-hidden="true" />
                      <span><strong>{uc.title}</strong> — {uc.body.split('.')[0]}.</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.26}>
                <div className="ind-lp-hero-ctas">
                  <Link href="/contact" className="btn-hero-primary">Get Started →</Link>
                  <Link href="/book-demo" className="btn-hero-outline ind-lp-demo-btn">Book a Demo</Link>
                </div>
              </FadeUp>
            </div>

            {/* Right — dark glassmorphism card */}
            <div className="col-12 col-lg-6">
              <FadeUp delay={0.15}>
                <div className="ind-lp-hero-visual">
                  {/* Floating chips */}
                  {useCases[0] && (
                    <div className="ind-lp-float ind-lp-float--tl" style={{ borderColor: `${color}40` }}>
                      <i className="bi bi-check2-circle" style={{ color }} /> {useCases[0].title}
                    </div>
                  )}
                  {useCases[1] && (
                    <div className="ind-lp-float ind-lp-float--br" style={{ borderColor: `${color}40` }}>
                      <i className="bi bi-check2-circle" style={{ color }} /> {useCases[1].title}
                    </div>
                  )}

                  {/* Main card */}
                  <div className="ind-lp-hero-card">
                    <div className="ind-lp-hero-card-icon" style={{ background: `${color}22`, color }}>
                      <i className={`bi ${icon}`} aria-hidden="true" />
                    </div>
                    <div className="ind-lp-hero-card-title">{name} Solutions</div>
                    <div className="ind-lp-hero-card-channels">
                      {channelFit.map(cf => {
                        const m = CHANNEL_META[cf.channel];
                        return m ? (
                          <span
                            key={cf.channel}
                            className="ind-lp-channel-pill"
                            style={{ background: `${m.color}18`, color: m.color, border: `1px solid ${m.color}30` }}
                          >
                            <i className={`bi ${m.icon}`} aria-hidden="true" /> {cf.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                    <div className="ind-lp-hero-stats">
                      <div className="ind-lp-hero-stat">
                        <strong style={{ color }}>500+</strong><span>Businesses</span>
                      </div>
                      <div className="ind-lp-hero-stat">
                        <strong style={{ color }}>10M+</strong><span>Msgs/day</span>
                      </div>
                      <div className="ind-lp-hero-stat">
                        <strong style={{ color }}>99.9%</strong><span>Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. TRUST BAR
      ══════════════════════════════════════════ */}
      <div className="ind-lp-trust-bar">
        <div className="container">
          <p className="ind-lp-trust-label">Trusted by 500+ businesses across India</p>
          <div className="ind-lp-trust-logos">
            {INTEGRATIONS.map(({ name: n, abbr, color: c }) => (
              <div key={n} className="ind-lp-trust-logo">
                <span
                  className="ind-lp-trust-abbr"
                  style={{ background: `${c}18`, color: c, borderColor: `${c}30` }}
                >
                  {abbr}
                </span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          INTRO (SEO body paragraph)
      ══════════════════════════════════════════ */}
      {intro && (
        <section className="ind-lp-intro-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-7">
                <FadeUp>
                  <span className="ind-lp-intro-eyebrow" style={{ background: `${color}14`, color }}>
                    Overview
                  </span>
                  <p className="ind-lp-intro-body">{intro}</p>
                </FadeUp>
              </div>
              <div className="col-12 col-lg-5">
                <FadeUp>
                  <div className="ind-lp-intro-stats">
                    <div className="ind-lp-intro-stat" style={{ '--ind-color': color }}>
                      <span className="ind-lp-intro-stat-num" style={{ color }}>10M+</span>
                      <span className="ind-lp-intro-stat-label">Messages / Day</span>
                    </div>
                    <div className="ind-lp-intro-stat" style={{ '--ind-color': color }}>
                      <span className="ind-lp-intro-stat-num" style={{ color }}>500+</span>
                      <span className="ind-lp-intro-stat-label">Businesses Served</span>
                    </div>
                    <div className="ind-lp-intro-stat" style={{ '--ind-color': color }}>
                      <span className="ind-lp-intro-stat-num" style={{ color }}>48h</span>
                      <span className="ind-lp-intro-stat-label">Go-Live Time</span>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
          <div className="ind-lp-intro-watermark" aria-hidden="true">
            <i className={`bi ${icon}`} />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          PAIN POINTS
      ══════════════════════════════════════════ */}
      {painPoints && painPoints.length > 0 && (
        <section className="ind-lp-pain-section" aria-labelledby="ind-lp-pain-h">
          <div className="container">
            <FadeUp>
              <div className="text-center">
                <span className="ind-lp-intro-eyebrow" style={{ background: `${color}14`, color }}>
                  The Challenge
                </span>
                <h2 id="ind-lp-pain-h" className="ind-lp-feat-h2 text-center mt-2 mb-0">
                  What {name} teams tell us they struggle with
                </h2>
              </div>
            </FadeUp>
            <StaggerContainer className="ind-lp-pain-grid" staggerDelay={0.07}>
              {painPoints.map(({ title, body }, i) => (
                <StaggerItem key={title}>
                  <div className="ind-lp-pain-card" style={{ '--ind-color': color, borderLeftColor: color }}>
                    <div className="ind-lp-pain-step" style={{ color, borderColor: `${color}35` }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="ind-lp-pain-icon" style={{ background: `${color}14`, color }}>
                      <i className="bi bi-exclamation-circle" aria-hidden="true" />
                    </div>
                    <h3 className="ind-lp-pain-title">{title}</h3>
                    <p className="ind-lp-pain-body">{body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          3–5. FEATURE ROWS (one per channel, max 3)
      ══════════════════════════════════════════ */}
      {channelFit.slice(0, 3).map((cf, idx) => {
        const meta = CHANNEL_META[cf.channel] || CHANNEL_META.sms;
        const isFlipped = idx % 2 === 1;
        const bullets = getRowBullets(idx);

        return (
          <section
            key={cf.channel}
            className={`ind-lp-feat-row${isFlipped ? ' ind-lp-feat-row--flip' : ''}`}
            aria-labelledby={`feat-${cf.channel}`}
          >
            <div className="container">
              <div className={`row align-items-center g-5${isFlipped ? ' flex-lg-row-reverse' : ''}`}>

                {/* Text */}
                <div className="col-12 col-lg-6">
                  <SlideLeft>
                    <span
                      className="ind-lp-feat-tag"
                      style={{ background: meta.bg, color: meta.color }}
                    >
                      <i className={`bi ${meta.icon}`} aria-hidden="true" /> {cf.label}
                    </span>

                    <h2 id={`feat-${cf.channel}`} className="ind-lp-feat-h2">{cf.use}</h2>
                    <p className="ind-lp-feat-body">{cf.body}</p>

                    {bullets.length > 0 && (
                      <ul className="ind-lp-feat-bullets">
                        {bullets.map(b => (
                          <li key={b.title}>
                            <i className="bi bi-check-circle-fill" style={{ color: meta.color }} aria-hidden="true" />
                            <span>{b.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      href={CHANNEL_TO_URL[cf.channel] || '/contact'}
                      className="ind-lp-feat-cta"
                      style={{ background: meta.color }}
                    >
                      Explore {cf.label} →
                    </Link>
                  </SlideLeft>
                </div>

                {/* Visual — real industry image */}
                <div className="col-12 col-lg-6">
                  <SlideRight>
                    <div
                      className="ind-lp-feat-img-wrap"
                      style={{ borderColor: `${meta.color}35`, boxShadow: `0 20px 60px ${meta.color}18, 0 4px 20px rgba(0,0,0,0.10)` }}
                    >
                      <img
                        src={`/solutions/${imgPrefix}${idx + 1}.webp`}
                        alt={`${name} ${cf.label} — ${cf.use}`}
                        className="ind-lp-feat-img"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        width="600"
                        height="400"
                      />
                    </div>
                  </SlideRight>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════════
          6. USE CASES GRID
      ══════════════════════════════════════════ */}
      <section className="ind-lp-uc-section" aria-labelledby="ind-lp-uc-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="How it works"
                title={`Key workflows for ${name} teams`}
                subtitle="Each workflow ships in days — no custom dev needed. Use no-code flows, the visual builder, or REST API."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="ind-lp-uc-grid" staggerDelay={0.06}>
            {useCases.map(({ title, body }, i) => (
              <StaggerItem key={title}>
                <div className="ind-lp-uc-card" style={{ '--ind-color': color }}>
                  <div className="ind-lp-uc-accent-bar" style={{ background: color }} />
                  <div className="ind-lp-uc-inner">
                    <span className="ind-lp-uc-num" style={{ background: `${color}18`, color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="ind-lp-uc-title">{title}</h3>
                    <p className="ind-lp-uc-body">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. WHY CHOOSE (outcomes)
      ══════════════════════════════════════════ */}
      <section className="ind-lp-why-section" aria-labelledby="ind-lp-why-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="Why Ojiva AI"
                title={`Why ${name} teams choose Ojiva AI`}
                subtitle="The results that move the needle — across SMS, WhatsApp, RCS and Voice."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="ind-lp-why-grid" staggerDelay={0.05}>
            {outcomes.map(({ label, body }) => (
              <StaggerItem key={label}>
                <div className="ind-lp-why-card" style={{ '--ind-color': color }}>
                  <div className="ind-lp-why-top-bar" style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }} />
                  <div className="ind-lp-why-inner">
                    <div className="ind-lp-why-icon" style={{ background: `${color}15`, color }}>
                      <i className="bi bi-check2-all" aria-hidden="true" />
                    </div>
                    <h3 className="ind-lp-why-title">{label}</h3>
                    <p className="ind-lp-why-body">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. COMPLIANCE CARD
      ══════════════════════════════════════════ */}
      <section className="ind-lp-compliance" aria-labelledby="ind-lp-comp-h">
        <div className="container">
          <FadeUp>
            <div
              className="ind-lp-comp-card"
              style={{ '--ind-color': color, borderColor: `${color}30`, boxShadow: `0 24px 64px ${color}12` }}
            >
              <div className="ind-lp-comp-left">
                <div className="ind-lp-comp-icon-wrap" style={{ background: `${color}15`, color }}>
                  <i className="bi bi-shield-check-fill" aria-hidden="true" />
                </div>
                <div className="ind-lp-comp-badges">
                  <span className="ind-lp-comp-badge" style={{ color, borderColor: `${color}30` }}>
                    <i className="bi bi-patch-check-fill" /> GDPR
                  </span>
                  <span className="ind-lp-comp-badge" style={{ color, borderColor: `${color}30` }}>
                    <i className="bi bi-patch-check-fill" /> DLT
                  </span>
                  <span className="ind-lp-comp-badge" style={{ color, borderColor: `${color}30` }}>
                    <i className="bi bi-patch-check-fill" /> AES-256
                  </span>
                  <span className="ind-lp-comp-badge" style={{ color, borderColor: `${color}30` }}>
                    <i className="bi bi-patch-check-fill" /> ISO 27001
                  </span>
                </div>
              </div>
              <div className="ind-lp-comp-body-wrap">
                <span className="ind-lp-comp-eyebrow" id="ind-lp-comp-h" style={{ color }}>
                  <i className="bi bi-shield-fill-check" aria-hidden="true" />
                  Compliance &amp; Security
                </span>
                <p className="ind-lp-comp-body">{complianceNotes}</p>
                {complianceDetail && (
                  <p className="ind-lp-comp-detail">{complianceDetail}</p>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════ */}
      <FAQAccordion
        faqs={faqs}
        title={`${name} — Frequently asked questions`}
        subtitle={`Common questions from ${name.toLowerCase()} teams evaluating Ojiva AI.`}
        id={`solutions-${industry.slug}-faq`}
        accentColor={color}
      />

      {/* ══════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════ */}
      <FadeUp>
        <CTA
          title={`Ready to scale communication in ${name}?`}
          subtitle="Talk to our solutions team — no obligation, no sales pressure."
          primaryLabel="Book a Demo"
          primaryHref="/book-demo"
          secondaryLabel="Talk to Sales"
          secondaryHref="/contact"
        />
      </FadeUp>
    </>
  );
}
