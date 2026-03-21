export const RCS_FEATURES = [
  { icon: '\u{1F0CF}', title: 'Rich Cards', color: '#8B5CF6', desc: 'Visually stunning card messages with images, titles, descriptions, and action buttons.', points: ['Hero image + body text', 'Up to 4 action buttons', 'Deep link & call actions', 'Native app rendering'] },
  { icon: '\u{1F3A0}', title: 'Card Carousels', color: '#6D28D9', desc: 'Swipeable horizontal carousels to showcase products — like a mobile storefront.', points: ['Up to 10 cards', 'Individual CTA buttons', 'Product showcase', 'Horizontal scroll UX'] },
  { icon: '\u{1F4AC}', title: 'Suggested Replies', color: '#7C3AED', desc: 'Guide customers with pre-set reply chips that make interaction effortless.', points: ['Tap-to-reply chips', 'Dynamic quick actions', 'Conversation flows', 'Zero-friction UX'] },
  { icon: '\u2705', title: 'Verified Sender', color: '#5B21B6', desc: 'Display your brand name, logo, and verified checkmark — eliminating fraud.', points: ['Google-verified brand ID', 'Official brand logo', 'Verified checkmark', 'Anti-phishing protection'] },
];

export const INDUSTRIES = [
  { icon: '\u{1F3E6}', title: 'Banking & Finance', use: 'Account alerts with balance cards, loan offers, credit card promotions, fraud alerts' },
  { icon: '\u{1F6D2}', title: 'E-Commerce', use: 'Product carousels, order tracking cards, cart recovery with images, flash sales' },
  { icon: '\u{1F3E5}', title: 'Healthcare', use: 'Appointment cards with directions, health reports, doctor profiles, reminders' },
  { icon: '\u{1F393}', title: 'Education', use: 'Course cards, fee payment links, event invitations, result notifications' },
  { icon: '\u2708\uFE0F', title: 'Travel & Hospitality', use: 'Boarding pass cards, hotel confirmations, itinerary carousels, upgrade offers' },
  { icon: '\u{1F3E0}', title: 'Real Estate', use: 'Property image cards, site visit scheduling, project updates, pricing carousels' },
  { icon: '\u{1F697}', title: 'Automotive', use: 'Vehicle showcase carousels, test drive booking, service cards, comparisons' },
  { icon: '\u{1F3AD}', title: 'Entertainment & OTT', use: 'New release carousels, subscription cards, watchlist suggestions, promos' },
];

export const HOW_STEPS = [
  { step: '01', icon: '\u{1F50D}', title: 'Brand Verification', desc: 'We register and verify your brand with Google\'s RCS platform.' },
  { step: '02', icon: '\u{1F3A8}', title: 'Design Messages', desc: 'Use our drag-and-drop RCS builder for rich cards and carousels.' },
  { step: '03', icon: '\u{1F517}', title: 'Integrate via API', desc: 'Connect via REST API or trigger from your CRM/marketing stack.' },
  { step: '04', icon: '\u{1F4CA}', title: 'Measure & Optimise', desc: 'Track card impressions, button clicks, and conversions.' },
];

export const METRICS = [
  { value: '3\u00D7', label: 'Higher CTR vs SMS' },
  { value: '60%', label: 'Avg. Read Rate' },
  { value: 'Free', label: 'For End Users' },
  { value: 'Google', label: 'Verified Platform' },
];

export const RCS_VS_SMS = [
  { feature: 'Rich images & media', rcs: true, sms: false },
  { feature: 'Branded sender + logo', rcs: true, sms: false },
  { feature: 'Verified checkmark', rcs: true, sms: false },
  { feature: 'Action buttons', rcs: true, sms: false },
  { feature: 'Card carousels', rcs: true, sms: false },
  { feature: 'Read receipts', rcs: true, sms: false },
  { feature: 'Works on Android', rcs: true, sms: false },
  { feature: 'DLT compliance required', rcs: false, sms: true },
];

