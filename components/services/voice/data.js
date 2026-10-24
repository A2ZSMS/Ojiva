export const VOICE_TYPES = [
  { icon: '📞', title: 'Outbound Calling', color: '#6D28D9', desc: 'Launch massive outbound voice campaigns for lead gen, reminders, surveys, and follow-ups.', points: ['Bulk outbound dialer','Scheduled campaigns','CRM-triggered calls','Agent live transfer'] },
  { icon: '🎛️', title: 'IVR Systems', color: '#6D28D9', desc: 'Multi-level IVR menus with DTMF and voice that route customers to the right department.', points: ['Drag-and-drop builder','Multi-level menus','DTMF + voice input','Real-time routing'] },
  { icon: '🤖', title: 'AI Voice Bot', color: '#6D28D9', desc: 'NLP-powered AI agents that hold real conversations and resolve queries — 24×7, zero wait.', points: ['Natural language understanding','Multilingual (10+)','Human handoff on demand','Conversation analytics'] },
  { icon: '📵', title: 'Missed Call Service', color: '#6D28D9', desc: 'Capture leads and trigger instant callbacks — zero cost to the caller, maximum reach.', points: ['Virtual numbers','Instant callback','Lead capture + CRM','SMS acknowledgement'] },
];

export const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'Loan collection, KYC verification, EMI reminders, fraud alert calls' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order confirmation calls, delivery alerts, return initiation, surveys' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, post-consultation follow-ups, lab results' },
  { icon: '🎓', title: 'Education', use: 'Admissions follow-up, fee reminders, exam alerts, parent comms' },
  { icon: '✈️', title: 'Travel & Hospitality', use: 'Booking confirmations, check-in reminders, feedback collection' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit reminders, property updates, broker lead distribution' },
  { icon: '🚗', title: 'Automotive', use: 'Test drive follow-ups, service reminders, insurance renewal calls' },
  { icon: '🏭', title: 'BFSI & Collections', use: 'NPA alerts, payment reminders, settlement calls, compliance recording' },
];

export const HOW_STEPS = [
  { step: '01', icon: '📋', title: 'Design Call Flow', desc: 'Use our visual IVR builder or provide a script for AI voice bots.' },
  { step: '02', icon: '☁️', title: 'Get Virtual Number', desc: 'We provision dedicated DID/toll-free numbers — instantly available.' },
  { step: '03', icon: '🔗', title: 'Connect via API/CRM', desc: 'Trigger calls from CRM, API, or schedule bulk campaigns.' },
  { step: '04', icon: '📊', title: 'Analyse Every Call', desc: 'AI summaries, recordings, pickup rates, and real-time optimisation.' },
];

export const METRICS = [
  { value: '99.9%', label: 'Call Connect Rate' },
  { value: '24×7', label: 'AI Availability' },
  { value: '10+', label: 'Languages' },
];

export const VOICEBOT_STATS = [
  { label: 'Languages', val: 'Hi, En, Ta, Te, Kn +', color: '#C2410C' },
  { label: 'Accuracy', val: '95%+ intent match', color: '#166534' },
  { label: 'Avg. Resolution', val: '2:45 mins (bot-only)', color: '#0369A1' },
  { label: 'Escalation Rate', val: '<28% to human', color: '#6D28D9' },
  { label: 'Availability', val: '24×7 · 365 days', color: '#C2410C' },
];

export const CAMPAIGN_STATS = [
  { label: 'Campaign', val: 'EMI_Reminder_Dec', icon: '📢' },
  { label: 'Total Dialled', val: '12,400', icon: '📞' },
  { label: 'Connected', val: '10,831 (87.3%)', icon: '✅' },
  { label: 'Promised to Pay', val: '4,210 (38.9%)', icon: '💰' },
  { label: 'Avg. Duration', val: '2:34 mins', icon: '⏱️' },
];
