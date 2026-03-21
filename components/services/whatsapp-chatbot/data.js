/* ── DATA ── */
export const METRICS = [
  { value: '70%', label: 'Queries Auto-Resolved' },
  { value: '24/7', label: 'Always-On Support' },
  { value: '<3s', label: 'Response Time' },
  { value: '500+', label: 'Businesses Trust Us' },
];

export const BOT_FEATURES = [
  { icon: '🧠', title: 'AI-Powered NLP', color: '#7C3AED', desc: 'Understand intent with NLP. Our AI learns from every conversation.', points: ['Intent recognition', 'Entity extraction', 'Sentiment analysis', 'Self-learning'] },
  { icon: '🔧', title: 'No-Code Builder', color: '#1B48E0', desc: 'Design complex flows with drag-and-drop. No developers needed.', points: ['Visual editor', 'Conditional branching', 'Quick reply menus', 'A/B testing'] },
  { icon: '🎯', title: 'Lead Qualification', color: '#25D366', desc: 'Auto qualify, score, and route leads — inside WhatsApp.', points: ['Lead scoring', 'CRM integration', 'Smart routing', 'Follow-up triggers'] },
  { icon: '🌍', title: 'Multi-Language', color: '#FF6D42', desc: 'Engage in 20+ languages with auto-detection.', points: ['20+ languages', 'Auto-detection', 'Hindi, Tamil +', 'Regional routing'] },
];

export const USE_CASES = [
  { icon: '🛒', title: 'E-Commerce', desc: 'Cart recovery, order updates, product upsells.', color: '#25D366', points: ['Cart recovery (30%+)', 'Order tracking', 'AI recommendations', 'Reorder flows'] },
  { icon: '🏥', title: 'Healthcare', desc: 'Appointments, reminders, lab reports, queries.', color: '#0EA5E9', points: ['Appointment booking', 'Lab reports', 'Symptom checker', 'Consultations'] },
  { icon: '🏦', title: 'Banking', desc: 'Balance checks, loans, KYC & fraud alerts.', color: '#7C3AED', points: ['Balance & statements', 'Loan tracking', 'KYC collection', 'Fraud alerts'] },
  { icon: '🎓', title: 'Education', desc: 'Admissions, results, fees & parent engagement.', color: '#F59E0B', points: ['Admission enquiries', 'Fee reminders', 'Exam results', 'Parent comms'] },
  { icon: '🏠', title: 'Real Estate', desc: 'Qualify leads, schedule visits, share brochures.', color: '#EF4444', points: ['Lead qualification', 'Site visit booking', 'Brochure sharing', 'EMI calculator'] },
  { icon: '✈️', title: 'Travel', desc: 'Bookings, itineraries, check-in & concierge.', color: '#1B48E0', points: ['Booking confirms', 'Itinerary sharing', 'Check-in reminders', 'Feedback'] },
];

export const HOW_STEPS = [
  { step: '01', icon: '📋', title: 'Design Your Bot', desc: 'Use our no-code flow builder to design conversation flows.' },
  { step: '02', icon: '🔗', title: 'Connect WhatsApp', desc: 'Link your WhatsApp Business number via Meta BSP integration.' },
  { step: '03', icon: '🧪', title: 'Test & Refine', desc: 'Test flows in our sandbox and optimize before launch.' },
  { step: '04', icon: '🚀', title: 'Go Live & Scale', desc: 'Launch to millions. Monitor in real-time with AI improvements.' },
];

export const COMPARISON = [
  { feature: 'Response Time', chatbot: 'Instant (<3s)', manual: '5–30 min', winner: 'bot' },
  { feature: 'Availability', chatbot: '24/7/365', manual: '8–10 hrs/day', winner: 'bot' },
  { feature: 'Cost per Query', chatbot: '₹0.5 – ₹2', manual: '₹50 – ₹200', winner: 'bot' },
  { feature: 'Scalability', chatbot: 'Unlimited', manual: '3–4 chats/agent', winner: 'bot' },
  { feature: 'Consistency', chatbot: '100% consistent', manual: 'Varies', winner: 'bot' },
  { feature: 'Languages', chatbot: '20+ languages', manual: '1–2', winner: 'bot' },
  { feature: 'Lead Scoring', chatbot: 'Auto-scored', manual: 'Manual', winner: 'bot' },
  { feature: 'Complex Empathy', chatbot: 'Handoff', manual: 'Human touch', winner: 'human' },
];

export const HANDOFF_MSGS = [
  { from: 'user', msg: 'I want to return my order, it arrived damaged' },
  { from: 'bot', msg: "I'm sorry to hear that! 😔 Let me connect you with a specialist." },
  { from: 'system', msg: '🔄 Transferring to Agent Priya (Returns Specialist)...' },
  { from: 'agent', msg: "Hi! I'm Priya from returns. I see your order. Let me process a replacement right away. 🙌" },
];
