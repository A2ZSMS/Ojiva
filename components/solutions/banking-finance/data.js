/**
 * Industry data for /solutions/banking-finance.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'banking-finance',
    name: 'Banking & Financial Services',
    shortName: 'Banking & Finance',
    icon: 'bi-bank',
    color: '#1B48E0',
    eyebrow: 'Banking & BFSI Communication',
    headline: 'SMS & WhatsApp Business API for Banks, NBFCs and Fintechs in India',
    subtitle:
      'OTP delivery, transaction alerts, EMI reminders, loan updates and KYC nudges — sent across SMS, WhatsApp, RCS and Voice with 99.9% uptime and TRAI DLT compliance.',
    intro:
      'Indian banking and financial services run on speed and trust. An OTP that does not land in three seconds breaks a payment journey. A transaction alert that arrives an hour late breaks fraud-prevention. A renewal reminder that misses a customer breaks retention. Ojiva AI gives banks, NBFCs, fintech apps, lending platforms, payment gateways and wealth managers a single multi-channel layer for every transactional, servicing and engagement touchpoint — designed from day one for TRAI DLT, RBI customer-communication expectations and the realities of the Indian telecom network. Whether your team handles a few thousand OTPs a day or millions of statements at month-end, the same APIs, dashboards and template controls scale with you, with sender-ID-level audit trails and consent enforcement baked in.',

    painPoints: [
      {
        title: 'High-volume transactional traffic that cannot fail',
        body:
          'OTPs, debit alerts, statement notifications and KYC nudges run continuously across the day. Each one needs to land in seconds, on every operator, with predictable cost. A single failed OTP can break a checkout, while a delayed fraud alert can mean a customer loses money — both translate directly to support tickets, lost revenue and regulator scrutiny.',
      },
      {
        title: 'Strict regulatory boundaries with zero margin for error',
        body:
          'TRAI DLT registration, RBI guidance on customer communication, KYC consent rules and template approval across every bank-customer touchpoint leave no room for ad-hoc messaging. Sender IDs, content templates, opt-outs and audit logs need to be ready the moment a regulator asks. Compliance failures here are not a slap on the wrist — they are blocking issues for your messaging programme.',
      },
      {
        title: 'Brand trust is built and broken in the inbox',
        body:
          'A bounced OTP, a fraud-warning sent late, a generic-looking promotional template that gets reported as spam — every one chips away at customer confidence. For regulated brands, the messaging stack is not infrastructure plumbing; it is part of the brand experience. Customers form an opinion of the bank in those few-second interactions every single day.',
      },
    ],

    channelFit: [
      {
        channel: 'sms',
        label: 'Bulk SMS',
        use: 'OTP, transaction alerts & account notifications — DLT compliant Bulk SMS',
        body:
          'The default rail for transactional banking traffic. DLT-registered sender IDs, pre-approved templates and direct telecom routing keep delivery fast and consistent across Jio, Airtel, Vi and BSNL. Used for OTP at login, debit and credit alerts, EMI due notifications, monthly statement availability and KYC document requests.',
      },
      {
        channel: 'whatsapp',
        label: 'WhatsApp API',
        use: 'Loan updates, EMI collection & KYC nudges via WhatsApp Business API',
        body:
          'WhatsApp Business API handles richer customer-servicing flows where a two-way conversation makes sense — KYC document collection, branch appointment booking, basic account servicing, and bot-to-agent handoff for live support. Templates handle proactive outreach; sessions handle responsive servicing.',
      },
      {
        channel: 'rcs',
        label: 'RCS Messaging',
        use: 'Verified branded RCS messaging for premium banking communication',
        body:
          'RCS Business Messaging adds verified sender identity, brand colours and rich cards to messages on supported Android devices. Useful for monthly statement summaries, secure link delivery for net-banking flows, and any communication where trust signalling matters.',
      },
      {
        channel: 'voice',
        label: 'Voice Call',
        use: 'IVR for collections, OTP fallback & loan-due reminder calls',
        body:
          'Outbound voice handles the highest-stakes, highest-value contact moments — collection IVR for overdue loans, fraud-alert call-back flows, and customer-verification calls that need confirmation in the moment. Multi-language support helps cover Tier-2 and Tier-3 markets.',
      },
    ],

    useCases: [
      { title: 'OTP for login, payments and KYC', body: 'Multi-channel OTP delivery so customers never get stuck at checkout, login or KYC. Configure SMS as primary with WhatsApp / Voice fallback so a single channel hiccup does not block a transaction.' },
      { title: 'Transaction & fraud alerts', body: 'Instant SMS or WhatsApp alerts for debits, credits, login attempts, card swipes and unusual activity. Templates can include amount, merchant, timestamp and a one-tap "Not me" link to a fraud-handling flow.' },
      { title: 'EMI & collection reminders', body: 'Automated reminder cadence ahead of due dates, on the due date, and through the grace period. Voice-call fallback handles the highest-value loans where direct contact converts better than messaging.' },
      { title: 'Monthly statements & re-KYC', body: 'Send statement-ready alerts with secure portal links, schedule periodic re-KYC nudges, and trigger event-based document requests directly into customer WhatsApp threads with full template safety.' },
      { title: 'New product cross-sell', body: 'Send compliant promotional offers to opted-in customers with segment-aware copy — pre-approved loan offers, credit-card upgrades, fixed-deposit renewals — separated cleanly from your transactional traffic.' },
      { title: 'Customer servicing on WhatsApp', body: 'Run an "always-on" WhatsApp servicing channel where customers can check balances, raise complaints, schedule branch visits and reach a live agent without dialling a call-centre.' },
    ],

    outcomes: [
      { label: 'Faster transaction journeys',        body: 'Cut drop-offs at OTP and KYC steps by routing across the channel a customer is most likely to receive on first try.' },
      { label: 'Lower call-centre load',             body: 'Move routine servicing — balance checks, statement requests, branch booking — out of the IVR queue and into asynchronous WhatsApp.' },
      { label: 'Improved collection contact rates',  body: 'Use a multi-channel reminder cadence so every overdue customer is reachable somewhere — not just on a single number that may not be answered.' },
      { label: 'Cleaner regulator audit trail',      body: 'Per-template approval records, per-message delivery logs and per-customer consent state make audits a query, not a fire-drill.' },
      { label: 'Brand-consistent customer touch',    body: 'Verified senders, approved templates and brand-coloured RCS messages keep every customer-facing communication visibly on-brand.' },
    ],

    bestPractices: [
      { title: 'Separate transactional and promotional sender IDs', body: 'Keep one sender ID for OTP and account-related traffic, a different one for offers. This protects deliverability and respects DLT-template categorisation.' },
      { title: 'Build OTP fallback into the customer journey, not the message', body: 'When SMS fails, the next channel should retry automatically — without the user having to ask for a new OTP. The handoff lives in your backend, not in copy.' },
      { title: 'Treat templates like product features',         body: 'Version-control templates, test changes in sandbox, and roll out per-segment. A template change is a customer-experience change.' },
      { title: 'Capture consent at the point of value',         body: 'Don\'t bury consent in a 30-page T&C. Capture it in the same screen where the customer chooses to receive a notification, with clear opt-out.' },
      { title: 'Send fraud alerts before the customer notices',  body: 'For unusual transactions, the message should arrive faster than a customer\'s heart rate spike. That requires direct connectivity, not bulk-aggregator queuing.' },
    ],

    implementation: [
      { title: 'REST API + webhooks',          body: 'A single REST API handles outbound message creation across SMS, WhatsApp, RCS and Voice. Signed webhooks deliver delivery, read and click events directly into your core banking event bus.' },
      { title: 'Core-banking integration',     body: 'Trigger messages from any event in your core or LOS — transaction posted, OTP requested, EMI due — using the API or no-code workflow builder. Integrations are typically built by the bank\'s tech team in a few sprints.' },
      { title: 'Sandbox before production',    body: 'Per-environment API keys let teams test full flows in sandbox with isolated webhooks before promoting to production. Templates can be promoted between environments with version tracking.' },
      { title: 'Compliance-first onboarding',  body: 'Sender ID and template registration support is included as part of onboarding. The Ojiva team helps map your message catalogue onto DLT categories and templates so go-live is not blocked by registration backlogs.' },
    ],

    complianceNotes:
      'TRAI DLT-ready, supports sender ID and template registration, opt-in / opt-out enforcement, and audit logs that align with RBI customer-communication expectations.',
    complianceDetail:
      'Banking communication in India sits at the intersection of TRAI rules (DLT registration, sender ID rules, opt-out enforcement) and RBI expectations (customer consent, preserved records, secure handling of customer identifiers). Ojiva AI is built so both sets of obligations are operationalised — not added as an afterthought. Sender IDs and templates are registered on the DLT platform with the right principal entity and category; transactional and promotional traffic stays cleanly separated; opt-outs are honoured at the template and customer level; per-message logs are queryable for the period your audit team requires; and customer phone numbers and OTP codes are encrypted in transit and at rest, with OTPs stored as one-time-use hashes only.',

    faqs: [
      { q: 'Is the platform DLT-registered for transactional and OTP traffic?',     a: 'Yes — sender IDs and templates are registered on the DLT platform with TRAI-aligned consent and opt-out workflows. Onboarding includes assistance with PE registration, header registration and template approval on your behalf.' },
      { q: 'Can I run multi-channel OTP fallback?',                                  a: 'Yes — configure SMS as the primary channel and WhatsApp or Voice as fallback, so OTP delivery succeeds even when one channel is degraded. Fallback is server-side, so the customer sees a single OTP request, not multiple.' },
      { q: 'Are templates pre-approved for banking use cases?',                      a: 'A library of common transactional and OTP templates is available as a starting point; we assist with template approval for your specific copy, language variants and brand voice.' },
      { q: 'How do you handle sensitive data?',                                       a: 'Customer phone numbers and OTP codes are encrypted in transit (TLS 1.3) and at rest. OTPs are stored only as one-way hashes for verification, with automatic expiry and one-time-use enforcement. Detailed security documentation is available on request.' },
      { q: 'Can large institutions deploy in private environments?',                  a: 'Yes — enterprise contracts can include dedicated infrastructure, private telecom routes, or single-tenant environments for institutions whose risk team requires data isolation. Contact sales to scope.' },
      { q: 'Will it integrate with our core banking system?',                          a: 'Yes. A REST API and signed webhooks support integration with most core banking, LOS and CRM platforms used by Indian institutions. Specific connector readiness can be confirmed with our solutions team.' },
      { q: 'What happens during a telecom outage?',                                    a: 'Messages can route across multiple operator paths and channels. If SMS to a particular operator is degraded, fallback to WhatsApp or Voice keeps the OTP / alert flowing. Delivery state is reported per attempt for retry policies.' },
      { q: 'Can promotional and transactional messages share the same account?',       a: 'Yes — they share account-level controls but use separate sender IDs, separate template categories on DLT and separate opt-out lists, so promotional opt-outs do not stop transactional alerts.' },
    ],
  };

export default industryData;
