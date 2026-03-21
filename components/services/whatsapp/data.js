export const WA_TYPES = [
  { icon: '📋', title: 'Template Messages', color: '#25D366', desc: 'Send pre-approved, structured messages for notifications, alerts, and marketing — fully Meta-compliant.', points: ['Order & shipment alerts','Appointment reminders','Payment confirmations','Marketing campaigns'] },
  { icon: '🎛️', title: 'Interactive Messages', color: '#128C7E', desc: 'Engage customers with buttons, lists, and quick replies that drive action without leaving WhatsApp.', points: ['Reply buttons (up to 3)','List menus (up to 10)','Quick reply flows','CTA URL buttons'] },
  { icon: '🛍️', title: 'Product Catalogs', color: '#075E54', desc: 'Showcase your product catalogue inside WhatsApp — let customers browse and buy.', points: ['In-chat browsing','Add to cart','Order management','Payment integration'] },
  { icon: '🤖', title: 'AI Chatbot Flows', color: '#34B7F1', desc: 'Deploy intelligent AI bots that handle FAQs, qualify leads, and escalate to agents seamlessly.', points: ['NLP responses','Lead qualification','Human handoff','Multi-language'] },
];

export const HOW_STEPS = [
  { step: '01', icon: '✅', title: 'Get Meta Verified', desc: 'We handle your WABA creation and Meta Business Manager verification end-to-end.' },
  { step: '02', icon: '📋', title: 'Submit Templates', desc: 'Create and submit message templates for Meta approval with our guidance.' },
  { step: '03', icon: '🔗', title: 'Connect via API', desc: 'Integrate our WhatsApp API into your CRM or app using REST API or SDK.' },
  { step: '04', icon: '📊', title: 'Send & Analyse', desc: 'Launch campaigns, monitor read rates, and optimise with real-time analytics.' },
];

export const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'Account alerts, loan updates, fraud warnings, statement delivery, KYC verification' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order tracking, delivery updates, abandoned cart recovery, product catalogues' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, lab reports, prescription updates, doctor consultations' },
  { icon: '🎓', title: 'Education', use: 'Admissions, results, fee reminders, course updates, parent communication' },
  { icon: '✈️', title: 'Travel & Hospitality', use: 'Booking confirmations, check-in reminders, itinerary updates, exclusive offers' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit scheduling, property updates, EMI alerts, agent follow-ups' },
  { icon: '🚗', title: 'Automotive', use: 'Service reminders, insurance renewal, test drive follow-ups, EMI alerts' },
  { icon: '🏬', title: 'Retail & D2C', use: 'New arrivals, flash sales, loyalty rewards, personalised recommendations' },
];

export const METRICS = [
  { value: '5M+', label: 'WhatsApp Messages/Month' },
  { value: '98%', label: 'Message Open Rate' },
  { value: '<2s', label: 'Delivery Latency' },
  { value: 'Official', label: 'Meta BSP Partner' },
];

export const BSP_STATS = [
  { label: 'BSP Status', val: '✅ Official Meta BSP', color: '#25D366' },
  { label: 'Green Tick', val: '✅ Verified', color: '#25D366' },
  { label: 'Daily Limit', val: '10M messages/day', color: '#128C7E' },
  { label: 'Quality Rating', val: '🟢 High', color: '#22c55e' },
  { label: 'Template Approval', val: 'Avg. 2–4 hours', color: '#0ea5e9' },
];

export const CHATBOT_LOG = [
  { from: 'user', msg: 'I want to track my order' },
  { from: 'bot', msg: 'Sure! Please share your Order ID or mobile number.' },
  { from: 'user', msg: 'ORD-38821' },
  { from: 'bot', msg: '📦 Your order is out for delivery! ETA: Today 4–6 PM. Track here →' },
];
