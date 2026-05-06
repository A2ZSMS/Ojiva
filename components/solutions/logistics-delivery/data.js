/**
 * Industry data for /solutions/logistics-delivery.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'logistics-delivery',
    name: 'Logistics & Delivery',
    shortName: 'Logistics & Delivery',
    icon: 'bi-truck',
    color: '#f59e0b',
    eyebrow: 'Logistics & Last-Mile Delivery Solutions',
    headline: 'Real-Time Shipment Tracking & Delivery OTP via WhatsApp & SMS for Logistics in India',
    subtitle:
      'Cut RTO rates, send live out-for-delivery alerts, confirm OTP at handover and let customers reschedule via WhatsApp — for 3PLs, e-commerce logistics and hyperlocal delivery fleets.',
    intro:
      'Indian logistics and last-mile delivery operates at scale where small percentage improvements translate into significant margin. A 2% reduction in RTO across a million orders is real money. A faster pickup-to-delivery message lifecycle is real CX. Ojiva AI gives 3PL operators, e-commerce in-house logistics teams, hyperlocal delivery platforms, quick-commerce companies and B2B logistics aggregators a single multi-channel layer for every shipment touchpoint — pickup confirmation, hub-in / hub-out, out-for-delivery, OTP at handover, delivery confirmation with photo proof, return / reschedule flow and rider-customer call masking. Built to handle festive-season peaks without dropping messages, with template hygiene that keeps delivery rates clean across operators.',

    painPoints: [
      { title: 'High RTO that eats unit economics',          body: 'Returns to origin destroy the unit economics on lower-AOV orders. The biggest driver — "buyer not available" failures — is exactly what pre-delivery confirmation messages prevent. Even a small reduction compounds across volume.' },
      { title: 'Low driver-customer trust at the doorstep',  body: 'Customers want to know who is at the door. A verified-sender notification just before delivery, with rider name and number, builds confidence and reduces refused deliveries.' },
      { title: 'Volume spikes that strain the messaging stack', body: 'Festive seasons, sale events and quarter-end peaks need a stack that scales without queueing. Throughput, route diversity and operator routing all need to be sized for the worst hour, not the average.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Pickup confirmation, shipment tracking & delivery OTP via Bulk SMS', body: 'Default rail for high-volume transactional logistics traffic — pickup confirmed, hub events, out-for-delivery, OTP at handover, delivered confirmation. DLT-registered with route diversity for peak handling.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Real-time WhatsApp delivery alerts, reschedule flows & rider–customer connect',    body: 'Where buyer interaction lives — reschedule flows with interactive buttons, two-way chat for delivery questions, photo proof of delivery sent directly to the buyer.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Rich RCS delivery cards with live tracking links and confirmed-delivery badges',         body: 'For supported devices, RCS adds verified sender, brand colours, rich delivery cards with map, ETA and rider details. Useful for premium logistics brands where the doorstep experience starts in the inbox.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'Delivery confirmation IVR, OTP fallback calls & post-delivery feedback',  body: 'Outbound voice for delivery-confirmation IVR (especially COD), and number-masked rider-customer connect that hides personal numbers on both sides while preserving call records.' },
    ],

    useCases: [
      { title: 'Pickup-to-delivery alerts',         body: 'Automated lifecycle messages for pickup, hub-in, hub-out, out-for-delivery and delivered. Buyer always knows where the package is without asking.' },
      { title: 'OTP at delivery',                    body: 'Single-channel or multi-channel OTP at the moment of handover for high-value packages. Multi-channel fallback (SMS → WhatsApp → Voice) keeps delivery moving even when one channel is degraded.' },
      { title: 'Reschedule on WhatsApp',             body: 'Customer can reschedule a missed delivery via interactive buttons, reducing failed second attempts and RTO. Rider gets the new slot without back-and-forth via dispatch.' },
      { title: 'Rider–customer call masking',         body: 'Voice connect that hides personal numbers on both sides, with call recording for audit. Protects driver privacy and customer privacy equally.' },
      { title: 'Photo proof of delivery',            body: 'Rider app captures a photo of the delivered package; the platform sends it to the buyer over WhatsApp as soon as the delivery is marked complete. Reduces dispute volume sharply.' },
      { title: 'Return-pickup coordination',         body: 'For returns and exchanges, the buyer schedules the pickup directly via WhatsApp button, the rider gets the new task automatically, and confirmation lands when the return is collected.' },
    ],

    outcomes: [
      { label: 'Lower RTO percentages',                    body: 'Pre-delivery confirmation flows reduce "buyer not available" failures and protect margins on COD and first-attempt orders.' },
      { label: 'Higher first-attempt delivery success',    body: 'Same-day reminder + reschedule-button + voice fallback combine to push first-attempt success rates up.' },
      { label: 'Reduced dispute volume on POD',            body: 'Photo-proof of delivery sent to the buyer eliminates "I never received it" disputes.' },
      { label: 'Better driver privacy and CX',             body: 'Number-masked rider-customer voice connect protects both parties while preserving call records for audit.' },
      { label: 'Scaling without breakages on peak days',    body: 'Festive-season throughput sized for worst-hour handles Diwali / EoSS / sale events without messages dropping or queueing.' },
    ],

    bestPractices: [
      { title: 'Confirm COD intent before pickup',        body: 'For COD orders, a same-day WhatsApp confirmation before pickup is the single highest-leverage RTO-reduction step.' },
      { title: 'Send out-for-delivery with rider details', body: 'Rider name + photo + masked number in the out-for-delivery message dramatically increases doorstep-acceptance rates.' },
      { title: 'Use interactive reschedule for missed attempts', body: 'A WhatsApp message with "reschedule" / "leave at gate" / "cancel" buttons converts more missed attempts into successful deliveries than a voice IVR does.' },
      { title: 'Capture photo POD on every delivery',     body: 'A timestamped, geotagged photo POD sent to the buyer is the cheapest insurance against dispute volume.' },
      { title: 'Pre-warm festive routes',                  body: 'Coordinate with operators ahead of festive seasons to ensure dedicated routes are warm and ready. Don\'t discover capacity issues on Diwali eve.' },
    ],

    implementation: [
      { title: 'WMS / OMS integration',     body: 'A REST API and webhooks let your warehouse / order-management system trigger lifecycle events. Specific connector readiness for popular Indian logistics-tech stacks can be confirmed with our team.' },
      { title: 'Number masking setup',       body: 'Voice number-masking for rider-customer connect is provisioned per project, with per-call audit and recording where consent allows.' },
      { title: 'Multi-channel OTP at delivery', body: 'OTP API at delivery handles channel selection automatically based on the buyer\'s reachability profile. Multi-channel fallback keeps delivery moving.' },
      { title: 'Peak-season scoping',         body: 'For festive / sale-event peaks, throughput and dedicated-route capacity are scoped in advance with the solutions team. Sandbox dry-runs validate the load.' },
    ],

    complianceNotes:
      'DLT-registered for transactional flows. Number-masking voice connects are designed with privacy and recording-consent in mind.',
    complianceDetail:
      'Logistics communication is overwhelmingly transactional and subject to standard TRAI DLT requirements. Where it gets nuanced is in voice number-masking — Ojiva AI provisions number masking with per-call audit, with recording-consent flows where applicable. For high-volume operations with multiple business entities (e.g., logistics arm of an e-commerce parent), per-entity DLT registration and template separation are handled as part of onboarding.',

    faqs: [
      { q: 'Can the platform handle festive-season peaks?',                                a: 'Yes — throughput is sized for high transactional bursts. Enterprise plans add dedicated routes for predictable spikes like Diwali, EoSS and sale-event peaks. Sandbox dry-runs validate capacity before the season.' },
      { q: 'Is rider–customer call masking supported?',                                     a: 'Yes — voice connects can mask both numbers, route calls through a single business number, and capture call records. Per-call audit logs are queryable.' },
      { q: 'Can customers reschedule via WhatsApp?',                                        a: 'Yes — WhatsApp interactive buttons let buyers confirm, reschedule, leave-at-gate, or cancel without contacting support. Rider gets the updated slot automatically.' },
      { q: 'How does delivery proof work?',                                                 a: 'Photo proofs and OTP confirmations can be captured by the rider app and sent to the customer immediately. Timestamped, geotagged POD records reduce dispute volume sharply.' },
      { q: 'Can we white-label the messages with our brand?',                              a: 'Yes — registered DLT sender IDs, RCS verified sender and WhatsApp Business profiles all carry your brand. Per-project sender IDs are common for multi-brand logistics operators.' },
      { q: 'How does multi-channel OTP at delivery work?',                                  a: 'A single OTP API call routes across SMS / WhatsApp / Voice based on the buyer\'s reachability profile. Multi-channel fallback keeps delivery moving even when one channel is degraded for a specific user.' },
      { q: 'Can we run separate flows per fleet / per zone?',                               a: 'Yes — flows can be scoped per fleet, per zone, per city or per project. Templates and reporting follow the same scoping so each business unit sees its own metrics.' },
      { q: 'How are returns handled differently from forward shipments?',                  a: 'Reverse-logistics flows can use a separate template set and a separate sender ID. Buyer schedules pickup via WhatsApp, rider gets the task, confirmation lands on collection.' },
    ],
  };

export default industryData;
