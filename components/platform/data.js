// ── The four channel portals — each opens inside the one Ojiva AI portal ──────
export const CHANNELS = [
  {
    id: 'sms',
    icon: '\u{1F4F1}',
    accent: '#10b981',
    accentSoft: 'rgba(16,185,129,0.12)',
    title: 'Bulk SMS portal',
    tagline: 'Reach every phone in India — instantly.',
    capabilities: ['DLT-approved templates', 'Promotional & transactional', 'OTP & 2-factor SMS', 'Sender ID management', 'Delivery & click reports', 'SMS API + bulk upload'],
    href: '/bulk-sms',
  },
  {
    id: 'rcs',
    icon: '✨',
    accent: '#6366f1',
    accentSoft: 'rgba(99,102,241,0.12)',
    title: 'RCS portal',
    tagline: 'Branded, interactive messages beyond SMS.',
    capabilities: ['Rich cards & carousels', 'Verified sender branding', 'Suggested reply buttons', 'Images, video & PDFs', 'Read receipts & analytics', 'Auto-fallback to SMS'],
    href: '/rcs',
  },
  {
    id: 'whatsapp',
    icon: '\u{1F4AC}',
    accent: '#25d366',
    accentSoft: 'rgba(37,211,102,0.14)',
    title: 'WhatsApp API portal',
    tagline: 'Automate sales & support on WhatsApp.',
    capabilities: ['Message templates', 'Chatbot & auto-replies', 'Broadcast campaigns', 'Shared team inbox', 'Green-tick verification', 'Catalog & payments'],
    href: '/whatsapp',
  },
  {
    id: 'voice',
    icon: '\u{1F4DE}',
    accent: '#f59e0b',
    accentSoft: 'rgba(245,158,11,0.14)',
    title: 'Bulk Voice Call portal',
    tagline: 'Voice broadcasts & IVR at scale.',
    capabilities: ['Voice broadcast campaigns', 'IVR & smart call flows', 'Voice OTP delivery', 'DTMF input capture', 'Missed-call solutions', 'Call reports & recordings'],
    href: '/voice',
  },
];

// ── Shared across all four portals — the "all-in-one" layer ────────────────────
export const FEATURES = [
  { icon: '\u{1F465}', title: 'One contact database', desc: 'Shared contacts, lists and segments across every channel — upload once, use everywhere.' },
  { icon: '\u{1F680}', title: 'One campaign builder', desc: 'Compose once and send over SMS, WhatsApp, RCS or Voice from the same screen.' },
  { icon: '\u{1F4CA}', title: 'Unified analytics', desc: 'Delivery, opens, clicks and replies for all four channels in a single dashboard.' },
  { icon: '\u{1F4B3}', title: 'One wallet & billing', desc: 'A single balance and one invoice for every channel — no juggling multiple vendors.' },
  { icon: '\u{1F50C}', title: 'One API & webhooks', desc: 'A single REST API and webhook layer to send on any channel and sync your CRM.' },
  { icon: '\u{1F6E1}️', title: 'Team roles & access', desc: 'Invite your team, set roles and permissions, and manage everything from one login.' },
];

// ── How the portal works — 4 steps ────────────────────────────────────────────
export const STEPS = [
  { num: '01', title: 'Log in', desc: 'One secure login to your Ojiva AI portal.' },
  { num: '02', title: 'Pick a channel', desc: 'Choose SMS, WhatsApp, RCS or Voice.' },
  { num: '03', title: 'Compose & upload', desc: 'Build your message and import contacts.' },
  { num: '04', title: 'Send & track', desc: 'Launch and watch results in real time.' },
];

export const INTEGRATIONS = [
  { icon: '\u{1F4CA}', name: 'Salesforce' },
  { icon: '\u{1F536}', name: 'HubSpot' },
  { icon: '\u{1F537}', name: 'Zoho CRM' },
  { icon: '\u{1F4CB}', name: 'Freshdesk' },
  { icon: '\u{1F4E6}', name: 'Shopify' },
  { icon: '\u{1F6D2}', name: 'WooCommerce' },
  { icon: '\u{1F4BC}', name: 'Pipedrive' },
  { icon: '\u{1F4E7}', name: 'SendGrid' },
  { icon: '\u{1F514}', name: 'Slack' },
  { icon: '\u{1F5C4}️', name: 'MySQL' },
  { icon: '\u{1F4BB}', name: 'Webhook' },
  { icon: '\u{1F4F1}', name: 'Twilio' },
];

export const API_CODE = `<span style="color:rgba(255,255,255,0.35)">// Send a message via Ojiva AI in 3 lines</span>
<span style="color:#7aaeff">const</span> ojiva = <span style="color:#7aaeff">require</span>(<span style="color:#a8ff78">'@ojiva/sdk'</span>);
<span style="color:#7aaeff">const</span> client = <span style="color:#7aaeff">new</span> ojiva.Client({ apiKey: <span style="color:#a8ff78">'YOUR_KEY'</span> });

<span style="color:#7aaeff">const</span> res = <span style="color:#7aaeff">await</span> client.sms.send({
  to:      <span style="color:#a8ff78">'+91 98765 43210'</span>,
  message: <span style="color:#a8ff78">'Your OTP is {{otp}}'</span>,
  vars:    { otp: <span style="color:#ffa56d">482910</span> },
  sender:  <span style="color:#a8ff78">'OJIVAI'</span>,
});

console.log(res.messageId);
<span style="color:rgba(255,255,255,0.35)">// → msg_01HX9K2P3FZ7KR...</span>`;
