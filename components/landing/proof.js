// Real customer proof for the Google Ads landing pages. The strip and the
// testimonials section only show what is listed here. Never add sample or
// invented clients — ads that show made-up reviews break Google Ads
// misrepresentation policy.

// Google Business Profile rating. Update the numbers when the profile changes.
export const GOOGLE_RATING = {
  rating: '5.0',
  count: 25,
  url: 'https://maps.google.com/?cid=6370079837246955189',
};

// Logos of clients who agreed to be shown. Put the files in
// public/image/clients/ (webp or svg, roughly 160×48).
// e.g. { name: 'Acme Foods', src: '/image/clients/acme-foods.webp' }
export const CLIENT_LOGOS = [];

// Real testimonials. `pages` picks the landing pages that show it:
// 'whatsapp', 'sms', 'rcs' (leave out for all three). Google reviews use
// `source: 'google'` and are quoted word for word from the profile; never
// use reviews written by Ojiva staff.
// e.g. { quote: '…', name: 'Priya Rao', role: 'Operations Head', company: 'Acme Foods', pages: ['whatsapp'] }
export const TESTIMONIALS = [
  {
    quote: 'I had a great experience with their SMS and WhatsApp services. The team was responsive, and everything worked smoothly.',
    name: 'Surya AN',
    source: 'google',
    pages: ['whatsapp', 'sms'],
  },
  {
    quote: 'We have been using SMS service for quite sometime now! Excellent service. The interface is clean and easy to use, message delivery is fast!',
    name: 'Kunal Taswala',
    source: 'google',
    pages: ['sms'],
  },
];
