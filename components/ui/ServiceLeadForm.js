import LandingLeadForm from '@/components/landing/LandingLeadForm';
import { MAKE_HOOK_SERVICE, THANK_YOU_SERVICE } from '@/lib/formConfig';

/**
 * ServiceLeadForm — reusable inline lead capture section for service pages.
 * Replaces the generic <CTA> buttons-to-/contact pattern.
 *
 * Props:
 *  source      - string passed to LandingLeadForm for lead tracking
 *  eyebrow     - small label above the heading
 *  heading     - main h2 (supports <span> highlight via JSX if needed)
 *  headingHighlight - text to render in accent colour inside heading
 *  description - paragraph text on the left
 *  perks       - string[] — bullet list of benefits
 *  stats       - [{val, lbl}] — 3-4 key metrics
 *  formTitle   - passed to LandingLeadForm
 *  formSubtitle
 *  formBadge
 *  submitLabel
 *  thankYouUrl
 */
export default function ServiceLeadForm({
  source          = 'service',
  eyebrow         = 'GET STARTED',
  heading         = 'Ready to Go Live?',
  headingHighlight = '',
  description     = 'Join 500+ businesses across India using Ojiva AI. Our team handles everything from onboarding to DLT registration — so you go live fast.',
  perks           = [
    'No setup fees, no lock-in contracts',
    'Dedicated India-based onboarding specialist',
    'DLT registration & compliance handled',
    'Go live in 24–48 hours',
    'Pay-as-you-go pricing — scales with you',
  ],
  stats           = [
    { val: '10M+', lbl: 'Messages/Day' },
    { val: '500+', lbl: 'Businesses' },
    { val: '48hr', lbl: 'Go-Live' },
  ],
  formTitle       = 'Book a Demo & Get Pricing',
  formSubtitle    = '30 seconds · Our expert contacts you within 2 hours',
  formBadge       = 'Instant Setup · No lock-in · No credit card',
  submitLabel     = 'Book My Demo & Get Pricing →',
  thankYouUrl,
}) {
  return (
    <section className="svc-form-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left: copy ── */}
          <div className="col-12 col-lg-6">
            <div className="svc-form-left">
              <p className="svc-form-eyebrow">{eyebrow}</p>
              <h2 className="svc-form-h2">
                {headingHighlight
                  ? <>{heading.replace(headingHighlight, '')} <span>{headingHighlight}</span></>
                  : heading
                }
              </h2>
              <p className="svc-form-sub">{description}</p>

              <div className="svc-form-perks">
                {perks.map(p => (
                  <div key={p} className="svc-form-perk">
                    <i className="bi bi-check-circle-fill" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className="svc-form-stats">
                {stats.map(({ val, lbl }) => (
                  <div key={lbl} className="svc-form-stat">
                    <span className="svc-form-stat-val">{val}</span>
                    <span className="svc-form-stat-lbl">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="col-12 col-lg-6">
            <LandingLeadForm
              source={source}
              title={formTitle}
              subtitle={formSubtitle}
              badge={formBadge}
              submitLabel={submitLabel}
              thankYouUrl={thankYouUrl || THANK_YOU_SERVICE}
              makeHook={MAKE_HOOK_SERVICE}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
