import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import {
  SmsHeroVisual,
  RcsHeroVisual,
  VoiceHeroVisual,
  WhatsappHeroVisual,
  ChatbotHeroVisual,
} from '@/components/services/shared/HeroVisuals';

/**
 * ServiceHero — shared hero for /sms, /rcs, /voice, /whatsapp, /whatsapp-chatbot.
 *
 * The 5 service Hero components were structurally identical but each used
 * its own class prefix + own HeroVisual. This wraps that pattern so every
 * service page becomes a small data-only Hero.
 *
 * Class prefixes are preserved 1:1 with the original files (whatsapp uses
 * `wa-`, chatbot uses `cb-`, chatbot has no glow divs, etc.) so no CSS
 * needs to change.
 *
 * Props:
 *   variant  — 'sms' | 'rcs' | 'voice' | 'whatsapp' | 'whatsapp-chatbot'
 *   badge    — text/emoji for the pill above the H1
 *   title    — JSX for the H1 body (include your own <br/> and <span class="sh-accent…">)
 *   description
 *   ctaPrimary   — { href, label }
 *   ctaSecondary — { href, label }
 *   metrics      — [{ value, label }]
 */
const VARIANTS = {
  'sms':              { headingId: 'sms-hero-heading',  glow: 'sms',   badgeClass: 'sms-badge',   primaryClass: 'sms-btn-primary border-0',   Visual: SmsHeroVisual },
  'rcs':              { headingId: 'rcs-hero-heading',  glow: 'rcs',   badgeClass: 'rcs-badge',   primaryClass: 'rcs-btn-primary border-0',   Visual: RcsHeroVisual },
  'voice':            { headingId: 'voice-hero-heading',glow: 'voice', badgeClass: 'voice-badge', primaryClass: 'voice-btn-primary border-0', Visual: VoiceHeroVisual },
  'whatsapp':         { headingId: 'wa-hero-heading',   glow: 'wa',    badgeClass: 'wa-badge',    primaryClass: 'cb-btn-primary border-0',    Visual: WhatsappHeroVisual },
  'whatsapp-chatbot': { headingId: 'cb-hero',           glow: null,    badgeClass: 'cb-badge',    primaryClass: 'cb-btn-primary',             Visual: ChatbotHeroVisual },
};

export default function ServiceHero({
  variant,
  badge,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  metrics = [],
}) {
  const cfg = VARIANTS[variant];
  if (!cfg) throw new Error(`ServiceHero: unknown variant "${variant}"`);
  const { headingId, glow, badgeClass, primaryClass, Visual } = cfg;

  return (
    <section className="service-hero" aria-labelledby={headingId}>
      {glow && <div className={`service-hero-glow ${glow}-glow-1`} />}
      {glow && <div className={`service-hero-glow ${glow}-glow-2`} />}
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <div className={`service-badge ${badgeClass}`}>{badge}</div>
              </HeroEntrance>
              <HeroEntrance index={1}>
                <h1 id={headingId} className="service-hero-title">{title}</h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
                <p className="service-hero-desc">{description}</p>
              </HeroEntrance>
              <HeroEntrance index={3}>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href={ctaPrimary.href} className={`btn-hero-primary ${primaryClass}`}>
                    {ctaPrimary.label}
                  </Link>
                  <Link href={ctaSecondary.href} className="btn-hero-outline">
                    {ctaSecondary.label}
                  </Link>
                </div>
              </HeroEntrance>
              <HeroEntrance index={4}>
                <div className="service-stats-row">
                  {metrics.map(({ value, label }) => (
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
                    <Visual />
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
