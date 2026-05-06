/**
 * Industry data for /solutions/healthcare.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'healthcare',
    name: 'Healthcare',
    shortName: 'Healthcare',
    icon: 'bi-heart-pulse-fill',
    color: '#16a34a',
    eyebrow: 'Healthcare Patient Communication',
    headline: 'Patient Communication Platform — Appointment Reminders, Lab Alerts & OTP for Hospitals in India',
    subtitle:
      'Reduce no-shows by 40%, automate "report ready" alerts, send medication reminders and run post-discharge follow-ups — all via SMS, WhatsApp Business API and Voice.',
    intro:
      'Indian healthcare runs on appointments, reports and follow-ups. Front-desk staff at hospitals and clinics spend hours every day on routine confirmation calls and "is the report ready" enquiries — work that automation can absorb completely. Ojiva AI gives multi-specialty hospitals, single-doctor clinics, dental and eye-care chains, diagnostic labs, IVF centres and home-healthcare providers a single platform for every patient-communication touchpoint. Appointment reminders go out over SMS and WhatsApp at the right interval, lab reports trigger a "ready" notification with a secure link the moment they\'re signed off, medication and refill nudges keep adherence high, and post-discharge or post-procedure follow-up flows close the loop on outcomes. Templates are designed with patient-data sensitivity in mind — patients are reminded what they need to know without exposing diagnostic detail over open channels.',

    painPoints: [
      { title: 'No-shows and late arrivals waste clinical capacity', body: 'A missed appointment is a clinician hour gone. Across a multi-specialty unit, daily no-show rates compound into measurable revenue loss and patient backlog. The right reminder, at the right time, on the right channel, dramatically reduces them.' },
      { title: 'Front-desk teams stuck on manual phone follow-ups',  body: 'Staff time spent confirming appointments, calling about lab readiness, or chasing follow-ups is staff time not spent helping patients in the building. This is exactly the work asynchronous messaging absorbs best.' },
      { title: 'Patient data and consent need careful handling',     body: 'Healthcare communication has to balance helpfulness with privacy. A reminder should mention "your report is ready" — not the diagnostic detail. A vaccination drive should target the right age band — not the wrong one. The templates need to be designed with this in mind.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Appointment reminders, OTP for portal login & lab-ready alerts via SMS', body: 'Reliable rail for time-sensitive patient touchpoints — appointment confirmation, reschedule reminders, OTP for patient-portal login, "your report is ready" alerts. DLT-registered templates handle Indian operator nuances.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Two-way appointment booking, prescription pickup & patient follow-ups on WhatsApp',  body: 'Where richer patient interactions belong — interactive appointment confirmation buttons, prescription pickup notifications, post-procedure check-ins, and a chat-based "ask the front desk" flow that frees the phone line.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Branded hospital RCS messages with verified sender identity',                          body: 'For supported devices, RCS adds the hospital brand, verified sender mark and rich cards. Useful for branded appointment reminders and secure document delivery where patients value the trust signal.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'IVR appointment confirmation, vaccination drives & post-discharge wellness calls', body: 'Automated voice for the patient cohorts that prefer it — older patients, vaccination camp invites, post-discharge wellness checks and missed-OTP recovery. Multi-language support helps clinics serving multiple linguistic communities.' },
    ],

    useCases: [
      { title: 'Appointment reminders',          body: 'SMS or WhatsApp nudges 24 hours and 1 hour before, with a confirm / reschedule action. Reduce no-shows and let patients reschedule without calling the front desk.' },
      { title: 'Lab report ready alerts',        body: 'Notify patients the moment a report is signed off, with a secure link to view or download from your patient portal. Drop the "is my report ready" call volume to near-zero.' },
      { title: 'Medication & refill nudges',      body: 'Scheduled reminders to take medication on a multi-day course, refill a prescription before it runs out, or book the next consultation. Especially useful for chronic-disease management.' },
      { title: 'Post-discharge & post-procedure follow-up', body: 'Day-1, day-3 and day-7 wellness check-ins after a discharge or procedure. Pick up red-flag symptoms early and route patients back to the right clinician.' },
      { title: 'Vaccination & camp drives',      body: 'High-volume voice and SMS broadcasts for community drives, screening camps and public-health programmes. WhatsApp confirmation buttons let invitees register their slot.' },
      { title: 'Patient feedback & NPS',          body: 'Day-after-visit feedback request via WhatsApp with a one-tap rating. Capture issues early, route compliments to the team, and build review volume on Google / Practo passively.' },
    ],

    outcomes: [
      { label: 'Lower appointment no-show rates',          body: 'Multi-touch reminder cadences across SMS and WhatsApp meaningfully reduce missed appointments — and the front-desk burden of confirming them.' },
      { label: 'Reduced "is my report ready" call volume', body: 'Auto-trigger of report-ready alerts removes one of the most common inbound queries to the front desk.' },
      { label: 'Better medication adherence',              body: 'Scheduled nudges for chronic-disease patients improve adherence, which directly improves clinical outcomes.' },
      { label: 'Higher review and NPS volume',             body: 'A single post-visit WhatsApp request collects feedback at scale — a new pipeline of organic reviews.' },
      { label: 'Front-desk hours freed up',                body: 'Routine confirmation, reschedule and report-ready calls disappear from the queue, letting staff focus on patients in the building.' },
    ],

    bestPractices: [
      { title: 'Time reminders to your patient mix',        body: 'Younger patients need 1-hour reminders. Older patients need 24-hour reminders. Mixed clinics should send both. Test the mix per specialty.' },
      { title: 'Keep diagnostic detail off open channels',   body: 'A message can say "your report is ready" or "your appointment is at 3pm with Dr X" — but never share specific diagnostic findings or sensitive results in the message body.' },
      { title: 'Use interactive buttons for confirmation',   body: 'WhatsApp interactive buttons for confirm / reschedule / cancel get higher response than asking the patient to call back.' },
      { title: 'Localise templates by language',             body: 'For multi-lingual catchments, send the same reminder in the patient\'s preferred language. Hindi, Tamil, Telugu, Kannada, Marathi, Bengali templates can all be approved.' },
      { title: 'Close the loop on red flags',               body: 'Post-discharge wellness check-ins should route any "not feeling well" answer immediately to a clinician, not into a generic support queue.' },
    ],

    implementation: [
      { title: 'HIS / EMR integration',  body: 'A REST API and webhooks let your hospital information system, EMR or appointment-booking platform trigger messages on the right events. Specific connector readiness can be confirmed with our team.' },
      { title: 'Multi-branch architecture', body: 'Multi-branch hospital chains can have per-branch sender IDs, per-branch templates, and per-branch reporting under one parent account, with role-based access for branch admins.' },
      { title: 'Patient-portal OTP',       body: 'OTP for patient-portal login is a single API call. Multi-channel fallback (SMS → WhatsApp → Voice) keeps login success rates high even when one channel is degraded.' },
      { title: 'Template approval support', body: 'Healthcare templates often need iteration through DLT and WhatsApp template approval. Onboarding includes assistance designing approval-ready templates that respect patient privacy.' },
    ],

    complianceNotes:
      'Patient identifiers and health context are handled with template-level safeguards. Templates can be designed to share status without exposing diagnostic details over open channels.',
    complianceDetail:
      'Healthcare communication needs to balance two things: helpful, timely information for the patient, and careful handling of any data that could identify them or their medical condition. Ojiva AI supports this by keeping diagnostic detail out of message bodies (a "report ready" alert points to a secure portal — it does not contain the report), enforcing template-level review before any content goes live, supporting per-patient consent and opt-out (so a patient can opt out of campaign messaging without losing access to clinical reminders), and providing per-message audit trails for the duration your compliance team requires. For institutions with stricter data-handling policies, enterprise contracts can include private deployments with data isolation.',

    faqs: [
      { q: 'Can patients confirm or reschedule from the message itself?',         a: 'Yes — WhatsApp interactive buttons and RCS suggested replies let patients confirm, reschedule, or cancel without calling the clinic. The action triggers a webhook back to your HIS / appointment-booking system in real time.' },
      { q: 'How are reminders timed?',                                             a: 'Reminders can be scheduled relative to the appointment (e.g., 24 hours before, 1 hour before, on the day) and triggered automatically from your booking system via API or webhook. Different specialties can use different cadences.' },
      { q: 'Can it integrate with our hospital information system?',                a: 'Yes — a REST API and webhooks let your HIS / EMR trigger messages on appointment, report and discharge events. Specific connector readiness for the major Indian HIS platforms can be confirmed with our team.' },
      { q: 'Are patient OTPs handled securely?',                                    a: 'OTPs are encrypted in transit and at rest, stored only as one-way hashes for verification, and automatically expire. Multi-channel OTP fallback (SMS → WhatsApp → Voice) keeps patient-portal logins working even when one channel is degraded.' },
      { q: 'Is the platform suitable for chains with multiple branches?',           a: 'Yes — multi-branch setups can have per-branch sender IDs, templates and reporting under one parent account, with role-based access for branch admins and a consolidated view for HQ.' },
      { q: 'Can we send reminders in regional languages?',                          a: 'Yes — Unicode SMS supports major Indian scripts. WhatsApp and RCS templates can be approved in Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati and other regional languages, sent based on patient-language preference.' },
      { q: 'How is patient feedback collected?',                                    a: 'A single WhatsApp message after the visit with a 1-5 rating button collects NPS at scale. Negative scores can be routed to your patient-relations team for follow-up; positive scores can be invited to leave a Google or Practo review.' },
      { q: 'Can it support vaccination or screening camp drives?',                  a: 'Yes — bulk voice and SMS broadcasts can reach a wide cohort quickly, with WhatsApp confirmation buttons letting invitees register their slot. Useful for school health drives, community vaccination campaigns and corporate health camps.' },
    ],
  };

export default industryData;
