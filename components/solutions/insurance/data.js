/**
 * Industry data for /solutions/insurance.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'insurance',
    name: 'Insurance',
    shortName: 'Insurance',
    icon: 'bi-shield-check',
    color: '#dc2626',
    eyebrow: 'Insurance Communication Solutions',
    headline: 'Policy Renewal Reminders, Premium Alerts & Claims Updates via WhatsApp & SMS for Insurers in India',
    subtitle:
      'Reduce lapsed policies, automate renewal reminders, send claim status updates and speed up e-KYC nudges — across SMS, WhatsApp Business API and Voice for life, health and motor insurers.',
    intro:
      'Indian insurance — life, general, health, motor — is a long-cycle, low-frequency, high-trust product. The communication layer is part of the experience: a missed renewal reminder is a lapsed customer, a confused claim status is an angry customer, an unclear KYC nudge is a stuck onboarding. Ojiva AI gives insurers, brokers, web aggregators, MGAs and bancassurance partners a single multi-channel platform for every policy-lifecycle touchpoint — quote follow-up, e-KYC nudges, policy issuance, premium reminders, renewal cadence, claim status updates and post-claim NPS. Templates are designed to carry the disclosures that regulated insurance communication requires, and per-product / per-channel separation keeps the audit story clean.',

    painPoints: [
      { title: 'Renewal lapse that compounds across the book',  body: 'A missed renewal reminder is a lapsed policy. Multiplied across a large book, lapse hurts retention, embedded value and the next year\'s sales target. The right reminder cadence is one of the cheapest retention levers available.' },
      { title: 'Claims communication that customers struggle to follow', body: 'Customers want clarity at every step of a claim — claim received, document required, surveyor assigned, settlement done. Manual phone-call updates don\'t scale, and silence between steps causes calls to come into the contact centre.' },
      { title: 'Compliance and disclosure that has to be perfect', body: 'Templates need to carry mandated disclosures, opt-outs and consent — every single time, in the right format. Errors here are not cosmetic; they\'re regulator-visible.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Premium reminders, policy issuance & renewal alerts via DLT Bulk SMS',  body: 'Default rail for transactional policy traffic — premium due / received, policy issued, KYC OTP, claim status. DLT-registered with insurance-specific template support.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Two-way WhatsApp for claim status, KYC completion & policy renewal', body: 'Where richer interactions live — quote-follow-up drips, e-KYC document collection through WhatsApp media, claims-status chatbot, post-claim NPS.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Verified branded RCS messaging for insurance policy communication',                 body: 'For supported devices, RCS adds verified insurer brand and rich card layout for premium policies, renewal offers and certificate delivery.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'Renewal reminder calls, claim update IVR & satisfaction surveys',       body: 'Outbound voice for renewal-reminder IVR on the highest-value policies, post-claim satisfaction calls, and missed-OTP recovery flows.' },
    ],

    useCases: [
      { title: 'Quote-to-policy nudge',           body: 'Drip campaign across WhatsApp + SMS to convert generated quotes into bound policies. Right-channel-right-moment cadence outperforms a generic "still interested" call from the agent.' },
      { title: 'Renewal reminders',                body: 'Pre-due, due, and grace-period reminders across multiple channels. Per-policy customisation by line-of-business — health renewals look different from motor renewals.' },
      { title: 'Claims status updates',            body: 'Lifecycle messages for claim received, document required, surveyor assigned, settlement done. Customer always knows where they are; contact-centre call volume drops.' },
      { title: 'KYC & document collection',        body: 'WhatsApp-driven document upload to complete e-KYC without portal logins. Surveyor reports, medical reports and proof-of-income docs all flow back over WhatsApp media.' },
      { title: 'Premium reminders & receipts',     body: 'Pre-due, due-day and post-due-date reminder cascade with payment links inside the message. Receipts go out immediately on payment.' },
      { title: 'Cross-sell on policy events',      body: 'Birthday upgrades, life-event-triggered offers, post-claim winback, and family-policy add-ons — all timed to events that matter, not generic promotional bursts.' },
    ],

    outcomes: [
      { label: 'Higher renewal retention',                  body: 'Multi-touch renewal reminder cadences across SMS and WhatsApp lift renewal rates compared to single-channel reminders.' },
      { label: 'Faster e-KYC and document collection',      body: 'WhatsApp document upload closes onboarding loops faster than email or portal upload, especially for less tech-fluent customers.' },
      { label: 'Lower contact-centre load on claims',        body: 'Proactive lifecycle status updates remove the most common inbound query — "what\'s the status of my claim?".' },
      { label: 'Better cross-sell conversion',               body: 'Event-triggered cross-sell on real-life moments (birthday, life event, claim-completion) outperforms generic offer broadcasts.' },
      { label: 'Cleaner regulator audit story',              body: 'Per-template approval records, per-message delivery logs and per-customer consent state make audits a query, not a fire-drill.' },
    ],

    bestPractices: [
      { title: 'Send renewal reminders before, not after',        body: 'Pre-due reminders prevent lapse. Post-due reminders are recovery. The cheapest renewal is the one that never lapsed in the first place.' },
      { title: 'Use WhatsApp for KYC document upload',             body: 'Customers struggle with portal uploads. WhatsApp media upload is universally understood and works on every smartphone.' },
      { title: 'Surface every claim-status change in real time',   body: 'A status change without notification is a contact-centre call waiting to happen. Wire every state change in the claim system to a customer message.' },
      { title: 'Keep mandated disclosures in approved templates',   body: 'Disclosure copy lives in the template, not in the campaign. Approve once, reuse forever, audit easily.' },
      { title: 'Differentiate retail vs corporate communication',   body: 'Retail customers want simplicity. Corporate intermediaries want detail. Use separate sender IDs and template sets so the voice fits the audience.' },
    ],

    implementation: [
      { title: 'Policy admin system integration', body: 'A REST API and webhooks support most policy admin systems used by Indian insurers. Policy events trigger the right messages without manual queue management.' },
      { title: 'Multi-LOB template architecture',  body: 'Per-LOB (health, motor, life, general) sender IDs and templates under one parent account. Reporting separates by line-of-business automatically.' },
      { title: 'Disclosure-ready templates',       body: 'Templates can carry the disclosures regulated insurance communication requires. Onboarding includes assistance designing approval-ready templates that meet IRDAI expectations.' },
      { title: 'Contact-centre chatbot handoff',   body: 'WhatsApp chatbots handle FAQ-style claim and renewal queries; complex queries hand off to a human agent in the contact centre with full context.' },
    ],

    complianceNotes:
      'Templates can carry the disclosures that regulated insurance communication requires. DLT registration and opt-out workflows enforced.',
    complianceDetail:
      'Insurance communication has to balance two regulators — TRAI for the messaging layer (DLT, sender IDs, opt-outs) and IRDAI for the content (disclosures, distance-marketing rules, customer-consent rules). Ojiva AI handles both: DLT registration covers transactional and promotional templates separately, opt-outs are honoured, and templates are designed to carry the disclosures IRDAI expects. Per-template audit logs make regulator-response queries tractable. For insurers running multiple lines of business under one parent organisation, per-LOB DLT registration and template separation are handled as part of onboarding.',

    faqs: [
      { q: 'Can I bring my own templates with mandated disclosures?',          a: 'Yes — templates with disclosure copy can be registered on DLT and used unchanged across SMS, WhatsApp and RCS. Onboarding includes assistance translating your existing disclosure-ready copy into approval-ready templates.' },
      { q: 'Does the platform integrate with my policy admin system?',          a: 'A REST API and webhooks support most policy admin systems used by Indian insurers. Specific connector readiness can be confirmed with our solutions team.' },
      { q: 'Can a claims chatbot handle FAQs on WhatsApp?',                     a: 'Yes — WhatsApp Business API supports interactive bots for status checks and FAQ resolution, with handoff to a human agent for complex queries. Bots can be wired to your claims system for live status.' },
      { q: 'Will it work for both retail and corporate insurance?',             a: 'Yes — the same platform supports retail customers and corporate intermediaries with separate sender IDs, templates and reporting. Voice and tone differ between the two; templates and routing handle that.' },
      { q: 'How are KYC documents handled?',                                    a: 'Documents are sent over WhatsApp media or secure links, with timestamped delivery / read receipts. Storage and retention policies can be aligned to your compliance team\'s requirements.' },
      { q: 'Can we send renewal cadences per line-of-business?',                 a: 'Yes — health renewals, motor renewals, life renewals can each have their own template, cadence and channel mix. Per-LOB reporting keeps insights separate.' },
      { q: 'How do we handle multi-state regulatory differences?',              a: 'For insurers operating across states with different regulatory nuances, per-state template variants and routing can be configured. The solutions team helps scope per-state requirements during onboarding.' },
      { q: 'Can we run cross-sell campaigns to existing customers?',             a: 'Yes — opted-in existing customers form a segment, with cross-sell templates approved separately from transactional. Event-triggered cross-sell (birthday, life event, post-claim) outperforms generic broadcasts.' },
    ],
  };

export default industryData;
