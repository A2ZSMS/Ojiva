/**
 * Industry data for /solutions/travel-hospitality.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'travel-hospitality',
    name: 'Travel & Hospitality',
    shortName: 'Travel & Hospitality',
    icon: 'bi-airplane-fill',
    color: '#0891b2',
    eyebrow: 'Travel & Hospitality Solutions',
    headline: 'Booking Confirmations, Check-in Reminders & Hotel Guest Messaging via WhatsApp & SMS in India',
    subtitle:
      'Send instant booking confirmations, check-in nudges, boarding reminders and post-stay review requests — across SMS, WhatsApp Business API, RCS and Voice for airlines, hotels and OTAs.',
    intro:
      'Indian travel and hospitality is a multi-step, time-critical journey. From booking confirmation to check-in, from boarding-pass delivery to post-stay reviews, every message needs to land in seconds, often across multiple languages and time zones. Ojiva AI gives airlines, OTAs, hotels and resort chains, IRCTC integrators, bus and rail aggregators, and tour operators a single platform that handles the full lifecycle — booking confirmation, payment receipt, check-in nudge, boarding-pass delivery, itinerary change, gate / room change, post-stay review and re-booking nudge. Templates work in major Indian languages, transactional bursts during sale events are sized for, and WhatsApp two-way concierge support handles the moments where automation isn\'t enough.',

    painPoints: [
      { title: 'Time-critical alerts that cannot wait',  body: 'Gate change, flight delay, cancellation, hotel-room reassignment — these messages have to arrive in seconds. A delayed gate-change SMS is a missed flight. The platform behind it has to be sized for that bar.' },
      { title: 'Multi-language guests at scale',          body: 'Indian travellers expect content in their language. International inbound tourists expect it in theirs. Manual translation doesn\'t scale; per-language templates approved once and reused per-guest do.' },
      { title: 'Post-stay engagement that gets neglected', body: 'Reviews, loyalty enrolment and re-booking nudges often get neglected once the guest has left. The result is leaving repeat-purchase economics on the table.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Booking confirmations, check-in nudges & itinerary alerts via Bulk SMS',     body: 'Reliable rail for transactional travel touchpoints — booking confirmation, payment receipt, check-in OTP, itinerary changes. DLT-registered templates handle Indian operator delivery.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Two-way WhatsApp concierge for bookings, itinerary changes & guest support',         body: 'Where richer guest interactions live — two-way concierge support, boarding pass delivery as a media attachment, group-booking coordination, restaurant and spa reservations.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Rich boarding passes, hotel amenity cards and check-in buttons via RCS',     body: 'For supported devices, RCS adds verified sender, brand colours and rich itinerary cards. Useful for premium airline / hotel brands where in-inbox presentation matters.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'Check-in reminder calls, upsell IVR & post-stay satisfaction surveys',  body: 'Automated voice for cancellation flows, multi-language schedule-change announcements, and high-volume disruption events where SMS and WhatsApp queues are saturated.' },
    ],

    useCases: [
      { title: 'Booking confirmations',     body: 'Instant SMS + WhatsApp confirmation with PNR / booking ID, e-ticket and check-in deep link. Guest gets the message before they put the phone down.' },
      { title: 'Check-in & boarding',        body: 'Pre-flight check-in nudges, boarding-pass delivery on WhatsApp, gate-change alerts the moment the change is published. Reduces gate-counter chaos and missed boarding events.' },
      { title: 'Itinerary changes',          body: 'Schedule changes, hotel reassignments, layover updates and cancellation flows with re-booking links. Guests reach a human agent on WhatsApp if needed.' },
      { title: 'Post-stay reviews',          body: 'Day-after WhatsApp review request with a one-tap rating and follow-up promo for the next stay / next trip. Builds review volume passively and surfaces issues early.' },
      { title: 'Loyalty and re-booking',     body: 'For loyalty members, segment-targeted offers — birthday upgrades, milestone perks, dormant-member win-back. Higher engagement than a generic newsletter.' },
      { title: 'Group-booking coordination',  body: 'For weddings, corporate offsites or tour groups, a shared WhatsApp thread coordinates all participants — itinerary, room allocation, transfer details — without WhatsApp groups breaking.' },
    ],

    outcomes: [
      { label: 'Faster guest response to disruptions',     body: 'Schedule-change messages land in seconds, not minutes — guests can replan before reaching the airport / hotel desk.' },
      { label: 'Lower call-centre load during peaks',      body: 'WhatsApp self-service handles routine check-in, room-status and re-booking queries that would otherwise hit the call centre.' },
      { label: 'Higher post-stay review volume',           body: 'A simple post-stay WhatsApp request collects feedback at scale — both for issue triage and for OTA / Google review pipeline.' },
      { label: 'Better re-booking conversion',             body: 'Segment-targeted re-booking nudges to past guests outperform generic promotional blasts in both engagement and conversion.' },
      { label: 'Cleaner brand experience',                  body: 'Verified senders, branded RCS cards and consistent template voice keep every message looking like the brand, not the aggregator.' },
    ],

    bestPractices: [
      { title: 'Match channel to message urgency',          body: 'Schedule changes need SMS speed. Itinerary detail can be WhatsApp. Loyalty offers can be RCS. The right channel makes the difference between read and ignored.' },
      { title: 'Localise template variants',                body: 'Same template, multiple language variants. Trigger the right one based on the booking-channel language preference. Don\'t default everyone to English.' },
      { title: 'Use WhatsApp for boarding-pass delivery',   body: 'Boarding passes as PDF attachments on WhatsApp are easier to retrieve than email. Both channels work; WhatsApp tends to win.' },
      { title: 'Send the post-stay review while it\'s fresh', body: 'Day-after-stay is the right window. A week later, the guest has moved on and the response rate drops sharply.' },
      { title: 'Surface human handoff in concierge chat',    body: 'Bots handle the easy 80%. The remaining 20% — special requests, complaints, complex re-bookings — should hand off to a human agent quickly and visibly.' },
    ],

    implementation: [
      { title: 'PMS / GDS / OTA integration', body: 'A REST API and webhooks support most travel-tech stacks. Booking, payment and itinerary events trigger the right messaging flows. Specific connector readiness can be confirmed with our team.' },
      { title: 'Multi-property setups',        body: 'For chain hotels and multi-route airlines, per-property / per-route sender IDs, templates and reporting under one parent account.' },
      { title: 'Bot + agent handoff',          body: 'WhatsApp Business API supports bot-to-agent handoff for live concierge support. Agents see full conversation context when they pick up.' },
      { title: 'Throughput for sale spikes',   body: 'Throughput is sized for transactional bursts. Enterprise plans include dedicated routes for predictable peaks like festive sales and long-weekend bookings.' },
    ],

    complianceNotes:
      'Templates can be approved in multiple Indian languages. Transactional traffic registered on DLT for clean delivery to operator networks.',
    complianceDetail:
      'Travel communication is largely transactional but does include marketing and re-booking nudges. Ojiva AI handles both: transactional templates (booking confirmation, schedule change, check-in OTP) are registered separately from marketing templates (sale offers, loyalty perks), opt-outs are distinct, and per-template audit logs help operators support a high message-volume programme without surprises.',

    faqs: [
      { q: 'Can I send messages in multiple Indian languages?',           a: 'Yes — Unicode SMS, WhatsApp and RCS support major Indian scripts; templates can be approved per language and routed by guest preference. Useful for both domestic regional language coverage and inbound international traveller languages.' },
      { q: 'Will it integrate with our PMS or GDS?',                       a: 'A REST API and webhooks support most travel-tech stacks. Specific connector readiness for the major Indian PMS / GDS / OTA platforms can be confirmed with our team during scoping.' },
      { q: 'Can travellers reach a human via WhatsApp?',                   a: 'Yes — WhatsApp Business API supports bot-to-agent handoff for live concierge support. Agents see full conversation context, attachments and prior interactions when they pick up the chat.' },
      { q: 'How do we handle high-volume booking confirmations?',          a: 'Throughput is sized for transactional bursts. Enterprise plans include dedicated routes for predictable peaks (festive sales, long weekends, sale events) so confirmations don\'t queue up in the busy hours.' },
      { q: 'Can I send branded RCS messages?',                             a: 'Yes — RCS supports verified sender, brand colours, logos and rich cards on supported Android devices. Useful for premium airline and hotel brands where in-inbox brand presentation matters.' },
      { q: 'How are boarding passes / e-tickets delivered?',               a: 'Boarding passes and e-tickets can be delivered as PDF attachments on WhatsApp, with a deep-link to add to wallet. SMS carries the URL; WhatsApp carries the file.' },
      { q: 'Can we run loyalty-member campaigns?',                         a: 'Yes — loyalty-member segments are first-class. Birthday offers, tier-upgrade perks, dormant-member win-back and milestone celebrations can each have their own template and audience.' },
      { q: 'How do we handle disruptions (mass cancellations, weather)?',  a: 'Bulk voice and SMS broadcasts cover the affected cohort fast. WhatsApp interactive buttons let travellers self-serve re-booking, with overflow into a live agent queue.' },
    ],
  };

export default industryData;
