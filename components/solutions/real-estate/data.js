/**
 * Industry data for /solutions/real-estate.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    icon: 'bi-houses-fill',
    color: '#0ea5e9',
    eyebrow: 'Real Estate & Property Solutions',
    headline: 'WhatsApp Marketing & SMS Platform for Real Estate Developers & Brokers in India',
    subtitle:
      'Deliver brochures instantly, automate site-visit reminders, send EMI alerts and keep buyers warm through the long post-booking cycle — using WhatsApp Business API and Bulk SMS.',
    intro:
      'Indian real estate is a long-cycle, high-value sale. The gap between first enquiry and registration can run months; between registration and possession, years. Across that span, every buyer touchpoint matters — the brochure delivery on enquiry day, the site-visit reminder, the EMI receipt, the construction-progress update, the possession-date confirmation. Ojiva AI gives developers, brokerages, REITs, plotted-development sales teams and project marketing agencies a single multi-channel layer to keep buyers warm and informed across SMS, WhatsApp Business API, RCS and Voice. Templates are DLT-registered, sales-team WhatsApp threads route through one business number (not personal), and per-project, per-stage segmentation handles the difference between a fresh enquiry and a registered booking.',

    painPoints: [
      { title: 'Long sales cycles that drop off in silence',         body: 'Real-estate deals take months. Buyers go quiet, sales teams move on, and what started as a hot enquiry quietly evaporates. Without an automated nurture cadence, your CAC works much harder than it needs to.' },
      { title: 'Documentation flow that needs constant chase',       body: 'Booking forms, agreements, payment receipts, KYC documents, possession papers — every step needs documents to flow back and forth. Manual chase via phone burns sales-team hours and frustrates buyers.' },
      { title: 'Site visits that don\'t convert because of no-shows', body: 'A scheduled site visit that doesn\'t happen wastes a sales-team afternoon and signals an uninterested buyer. The right reminder, on the right channel, dramatically reduces no-shows and protects sales-team utilisation.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Site-visit reminders, EMI alerts & booking confirmations via Bulk SMS',     body: 'Reliable rail for transactional touchpoints — site-visit reminders, booking confirmation, EMI due / received, possession-stage updates. DLT-registered templates keep deliverability healthy.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Brochure delivery, lead nurturing & two-way buyer chat on WhatsApp API',  body: 'Where the actual conversation happens. Brochure PDF, walkthrough video, pricing sheet, document collection, sales-team chat — all run on the WhatsApp Business API number, not personal phones.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Rich project carousels & verified developer identity via RCS Messaging',          body: 'For supported devices, RCS lets the developer brand show up with verified sender, brand colours, and rich project carousels — useful for premium project marketing.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'Site-visit confirmation IVR, satisfaction surveys & possession reminders',     body: 'Outbound voice for the touchpoints that need a human voice — site-visit confirmation IVR, post-booking feedback calls, possession-handover satisfaction surveys.' },
    ],

    useCases: [
      { title: 'Site-visit nudges',                  body: 'Confirm the visit on WhatsApp the day before, SMS reminder day-of, voice fallback if the buyer hasn\'t responded. Buyers can reschedule from the message itself with a tap.' },
      { title: 'Brochure & pricing share',            body: 'Send a WhatsApp message with brochure PDF, walkthrough video and current pricing the moment a fresh enquiry lands. Sales team gets a buyer who is already informed by the time they call.' },
      { title: 'Construction & possession updates',   body: 'Quarterly progress updates with photos, milestones and possession-date communication. Builds trust through the long gap between booking and handover.' },
      { title: 'EMI & payment reminders',             body: 'Pre-due, due, and overdue reminders across SMS and WhatsApp, with a voice-call fallback for the highest-value follow-ups. Receipts and acknowledgements automatically once payment lands.' },
      { title: 'Document collection on WhatsApp',     body: 'KYC documents, agreement signatures and proof-of-payment collected directly through WhatsApp media uploads. Eliminates the email-attachment back-and-forth.' },
      { title: 'Post-handover engagement',            body: 'Even after possession, the relationship continues — society maintenance, future-project pre-launch invitations, referral nudges. Stay in touch without spamming.' },
    ],

    outcomes: [
      { label: 'Higher site-visit show-up rates',          body: 'Multi-touch reminders across WhatsApp and SMS reduce no-shows and protect sales-team utilisation.' },
      { label: 'Faster document turnaround',                body: 'Document collection on WhatsApp closes the loop faster than email-attachment chase, especially for KYC and signed agreements.' },
      { label: 'Better buyer trust through long cycles',    body: 'Quarterly construction updates with photos and milestones build confidence through the long gap between booking and possession.' },
      { label: 'Sales-team WhatsApp without personal numbers', body: 'A single WhatsApp Business number handles all buyer chat, with per-buyer routing to the assigned sales agent. Personal numbers stay personal.' },
      { label: 'Cleaner referral pipeline',                  body: 'Happy buyers refer others. A polite post-possession nudge, with an easy referral-share link, surfaces a referral pipeline that would otherwise stay invisible.' },
    ],

    bestPractices: [
      { title: 'Send the brochure within minutes of enquiry capture',  body: 'The first 15 minutes are when the buyer is most engaged. A WhatsApp brochure delivery in that window outperforms a 24-hour-later sales call.' },
      { title: 'Time site-visit reminders to the visit window',         body: 'Day-before reminder for confirmation, day-of reminder for show-up, follow-up after no-show to reschedule. Don\'t spam — three touches max.' },
      { title: 'Use per-project sender IDs',                            body: 'Each project should have its own DLT sender ID and templates. Cross-project messaging and audit get cleaner; brand presentation stays project-specific.' },
      { title: 'Keep sales-team WhatsApp on a business number',         body: 'Personal-number WhatsApp doesn\'t scale and doesn\'t leave your control when an agent leaves. WhatsApp Business API on one number, with per-agent routing, does both.' },
      { title: 'Don\'t over-message during construction',              body: 'Quarterly construction-progress updates are appreciated. Weekly ones aren\'t. Match cadence to milestone, not to internal sales urgency.' },
    ],

    implementation: [
      { title: 'Connect your CRM / lead-capture',  body: 'A webhook from your lead-capture / CRM can trigger a WhatsApp template the moment a new lead is created — no manual hand-off needed.' },
      { title: 'WhatsApp Business API on one number', body: 'WhatsApp Business API runs on a single business number. Internal routing assigns each conversation to a sales agent, with full audit trail and supervisor visibility.' },
      { title: 'Multi-project architecture',         body: 'Per-project sender IDs, templates and reporting under one parent account. Per-project user roles for sales teams.' },
      { title: 'Document handling',                  body: 'WhatsApp media and RCS attachments support PDFs, images and videos with delivery tracking. Storage and retention policies can be aligned to your compliance requirements.' },
    ],

    complianceNotes:
      'DLT-ready for transactional reminders. Promotional traffic respects opt-out and template-approval rules under TRAI guidelines.',
    complianceDetail:
      'Real-estate communication mixes regulated transactional flows (booking confirmation, EMI receipt, possession notification) with promotional flows (project launch, pre-launch invitations, referral asks). Ojiva AI separates them at the DLT-template level, keeps opt-outs distinct between the two, and provides per-template audit logs that can be filtered by project, sender ID or campaign. For developers running multi-state operations, per-state DLT considerations are handled as part of onboarding.',

    faqs: [
      { q: 'Can leads from a portal flow straight into a WhatsApp drip?',                       a: 'Yes — a webhook from your lead-capture / CRM can trigger a WhatsApp template the moment the lead is created. The brochure, walkthrough video and pricing can be sent automatically before the sales team even calls.' },
      { q: 'Can sales teams chat on WhatsApp without giving out personal numbers?',             a: 'Yes — WhatsApp Business API runs on a single business number. Internal routing assigns each conversation to a sales agent, with supervisor visibility and an audit trail that survives agent churn.' },
      { q: 'How are documents shared securely?',                                                a: 'WhatsApp media and RCS attachments support PDFs, images and videos with delivery tracking. KYC and signed agreements can be collected through the same channel with timestamped receipts.' },
      { q: 'Can I send updates only to buyers who paid the booking amount?',                     a: 'Yes — segment by stage in the funnel (enquiry, site-visited, booked, registered, under-construction, possession) and target only buyers in a specific milestone group.' },
      { q: 'Will the platform scale across multiple projects?',                                  a: 'Yes — multi-project setups are common; per-project sender IDs, templates and analytics keep reporting clean. Sales-team users can be scoped to one or many projects.' },
      { q: 'Can I run pre-launch campaigns to past buyers?',                                    a: 'Yes — past buyers who consented to marketing can be a segment. Pre-launch RCS or WhatsApp campaigns to that audience often outperform paid digital, with much better economics.' },
      { q: 'How do I track whether a buyer opened the brochure?',                                a: 'Webhook events report delivery, read and click for trackable links inside the message. The CRM can show "opened brochure twice" before a sales agent dials the buyer.' },
      { q: 'Are there templates pre-approved for real-estate use cases?',                       a: 'A starter library of common real-estate templates (site-visit confirmation, brochure delivery, EMI reminder, possession update) is available. Custom templates with your project copy can be approved as part of onboarding.' },
    ],
  };

export default industryData;
