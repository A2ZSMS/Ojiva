export const SMS_TYPES = [
  { icon: '📢', title: 'Promotional SMS', color: '#1B48E0', desc: 'Target opted-in customers with flash sales, product launches, and festive offers.', points: ['Flash sales & offers', 'Event announcements', 'Product launches', 'Loyalty rewards'] },
  { icon: '🔔', title: 'Transactional SMS', color: '#0ea5e9', desc: 'Deliver critical order updates, booking confirmations, and real-time alerts instantly.', points: ['Order & shipment alerts', 'Booking confirmations', 'Payment receipts', 'Appointment reminders'] },
  { icon: '🔐', title: 'OTP & Verification', color: '#22c55e', desc: 'Ultra-fast, secure OTP delivery in under 3 seconds for login and payment flows.', points: ['Sub-3 second delivery', 'Auto-read OTP (Android)', 'Fallback routing', 'Fraud detection'] },
  { icon: '↔️', title: 'Two-Way SMS', color: '#f59e0b', desc: 'Run polls, surveys, and capture leads via SMS replies with keyword routing.', points: ['Dedicated long code', 'Keyword auto-response', 'Conversation routing', 'CRM integration'] },
];

export const FEATURES = [
  { icon: '🛡️', title: 'DLT Compliance Built-In', desc: 'Full TRAI DLT compliance with auto template matching, PE ID management, and blackout enforcement.', detail: ['Auto DLT template matching', 'PE ID & Header registration', 'TRAI blackout enforcement', 'Full audit trail'] },
  { icon: '⚡', title: 'Smart Delivery Engine', desc: 'AI-powered multi-operator routing with real-time failover. 98.4% delivery across all carriers.', detail: ['Multi-operator routing', 'Real-time DLR callbacks', 'Carrier-grade redundancy', 'International SMS (200+ countries)'] },
  { icon: '🎯', title: 'Campaign Intelligence', desc: 'Personalise at scale with merge tags, smart scheduling, and AI-optimised send times.', detail: ['Merge tag personalisation', 'Optimal send-time AI', 'Drip campaign builder', 'A/B split testing'] },
];

export const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'OTP, transaction alerts, loan updates, fraud warnings' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order tracking, cart recovery, delivery updates, flash sales' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, lab reports, medication alerts' },
  { icon: '🎓', title: 'Education', use: 'Result alerts, fee reminders, admission notifications' },
  { icon: '✈️', title: 'Travel', use: 'Booking confirmations, check-in reminders, offers' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit reminders, EMI alerts, project updates' },
  { icon: '🚗', title: 'Automotive', use: 'Service reminders, insurance renewals, EMI alerts' },
  { icon: '🏬', title: 'Retail & FMCG', use: 'Loyalty points, festive offers, new arrivals' },
];

export const METRICS = [
  { value: '10M+', label: 'SMS / Month' },
  { value: '98.4%', label: 'Delivery Rate' },
  { value: '<3s', label: 'OTP Speed' },
  { value: '500+', label: 'Enterprises' },
];

export const DLT_STATS = [
  { label: 'Template Status', val: 'APPROVED', color: '#22c55e' },
  { label: 'Sender Header', val: 'OJIVAI', color: '#1B48E0' },
  { label: 'PE ID', val: '1234567890123456', color: '#0ea5e9' },
  { label: 'DLT Operator', val: 'Jio / Airtel / BSNL', color: '#f59e0b' },
  { label: 'TRAI Compliance', val: '✓ Fully Compliant', color: '#22c55e' },
];

/* Used by DltCompliance.js for delivery analytics visual */
export const DELIVERY_ROUTES = [
  { route: 'Jio', pct: 96, count: '3.2M', color: '#1B48E0' },
  { route: 'Airtel', pct: 98, count: '2.8M', color: '#0ea5e9' },
  { route: 'BSNL', pct: 94, count: '1.4M', color: '#22c55e' },
  { route: 'Vodafone', pct: 97, count: '2.1M', color: '#f59e0b' },
];
