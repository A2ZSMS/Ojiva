export const MODULES = [
  {
    id: 'messaging',
    icon: '\u{1F4AC}',
    iconColor: 'rgba(27,72,224,0.12)',
    iconColorDot: '#1B48E0',
    accentColor: '#1B48E0',
    title: 'AI Messaging Engine',
    description: 'Deliver intelligent, personalised conversations across SMS and WhatsApp at enterprise scale. Our NLP-driven messaging engine interprets intent, routes responses, and drives engagement without human intervention.',
    capabilities: ['Two-way AI-driven SMS and WhatsApp messaging','Dynamic personalisation using CRM data','Intent detection and auto-response routing','Drip sequencing with behavioural triggers','Opt-out management and compliance handling','Multi-language support across 50+ languages'],
  },
  {
    id: 'voice',
    icon: '\u{1F399}\uFE0F',
    iconColor: 'rgba(139,92,246,0.12)',
    iconColorDot: '#8B5CF6',
    accentColor: '#8B5CF6',
    title: 'AI Voice Automation',
    description: "Deploy conversational AI voice agents for inbound qualification and outbound outreach. Ojiva AI's voice layer handles high-volume call flows with human-like naturalness and enterprise reliability.",
    capabilities: ['Inbound IVR replacement with conversational AI','Outbound voice campaigns with AI call scripts','Real-time transcription and intent capture','Intelligent escalation to live agents','DTMF and voice hybrid interaction support','Call analytics and sentiment scoring'],
  },
  {
    id: 'leads',
    icon: '\u{1F3AF}',
    iconColor: 'rgba(0,200,248,0.12)',
    iconColorDot: '#00c8f8',
    accentColor: '#00c8f8',
    title: 'AI Lead Intelligence',
    description: 'Score, enrich, and route leads with millisecond precision. Our lead AI evaluates hundreds of behavioural and firmographic signals to identify high-intent prospects and trigger the right action at the right moment.',
    capabilities: ['Real-time lead scoring using ML models','Firmographic and behavioural enrichment','Smart routing to sales teams or automated flows','Priority queuing based on conversion probability','Lead deduplication and data hygiene','Native CRM sync (Salesforce, HubSpot, Zoho)'],
  },
  {
    id: 'workflow',
    icon: '\u26A1',
    iconColor: 'rgba(16,185,129,0.12)',
    iconColorDot: '#10b981',
    accentColor: '#10b981',
    title: 'Workflow Orchestration',
    description: "Design and deploy intelligent automation pipelines that connect your CRM, APIs, and business tools. Ojiva AI's workflow engine reacts to real-time events and orchestrates complex sequences automatically.",
    capabilities: ['Visual no-code workflow builder','Event-driven trigger architecture','Conditional branching and A/B logic','CRM field updates and task creation','Webhook and REST API orchestration','Retry logic and error handling built-in'],
  },
  {
    id: 'api',
    icon: '\u{1F50C}',
    iconColor: 'rgba(249,115,22,0.12)',
    iconColorDot: '#F97316',
    accentColor: '#F97316',
    title: 'API & Integration Layer',
    description: 'Ojiva AI is built API-first. Every platform capability is accessible programmatically, enabling deep integration with your existing technology stack and custom application development.',
    capabilities: ['RESTful APIs with OpenAPI 3.0 specification','200+ pre-built integration connectors','Inbound and outbound webhook support','SDK libraries for Node.js, Python, PHP, Java','OAuth 2.0 and API key authentication','Sandbox environment for safe testing'],
  },
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
  { icon: '\u{1F5C4}\uFE0F', name: 'MySQL' },
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
<span style="color:rgba(255,255,255,0.35)">// \u2192 msg_01HX9K2P3FZ7KR...</span>`;
