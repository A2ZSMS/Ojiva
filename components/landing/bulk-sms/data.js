export const SMS_TYPE_OPTIONS = [
  { value: '', label: 'Select a service' },
  { value: 'promotional', label: 'Promotional SMS' },
  { value: 'transactional', label: 'Transactional SMS' },
  { value: 'service-explicit', label: 'Service Explicit SMS' },
  { value: 'smpp', label: 'SMPP Connectivity' },
  { value: 'reseller-panel', label: 'SMS Reseller Panel' },
  { value: 'otp', label: 'OTP SMS' },
  { value: 'api', label: 'API Integration' },
];
export const VOLUME_OPTIONS = [
  { value: '', label: 'Select monthly volume' },
  { value: '<5000', label: 'Below 5,000 SMS' },
  { value: '5000-25000', label: '5,000 – 25,000 SMS' },
  { value: '25000-100000', label: '25,000 – 1 Lakh SMS' },
  { value: '>100000', label: 'Above 1 Lakh SMS' },
];
export const SMS_FAQS = [
  { q: 'Which SMS service is right for my business?', a: 'Start with the purpose of the message: promotional campaigns, transactional confirmations, consent-based Service Explicit messages or OTP verification. We also provide SMPP connectivity and a reseller panel. Share a sample message and your expected volume. Our team will help you choose the appropriate setup.' },
  { q: 'What is Service Explicit SMS?', a: 'Service Explicit messaging is intended for communication based on a customer’s explicit consent. Share your intended message, audience and consent process so our team can review the appropriate template and setup requirements.' },
  { q: 'Do you provide SMPP connectivity?', a: 'Yes. We provide SMPP for businesses connecting their messaging application or gateway. Share your expected traffic, peak throughput and delivery-report requirements so we can confirm the connection details and commercial plan.' },
  { q: 'Can I offer SMS services to my own customers?', a: 'Yes. Our SMS reseller panel is for agencies and businesses offering SMS services to their customers. Request a panel walkthrough to review customer account management, available controls, credits and your reseller pricing requirements.' },
  { q: 'How is Bulk SMS pricing calculated?', a: 'Pricing depends on your message type, volume, message length and setup requirements. Request a quote that separates message credits, applicable taxes, onboarding and integration costs. We’ll discuss the plan that fits your expected usage.' },
  { q: 'Can you help with DLT onboarding?', a: 'Our team can guide you through the business details, sender ID and message-template preparation for your SMS setup. Share your current registration status so we can identify the next steps.' },
  { q: 'Can I send SMS from my CRM or website?', a: 'Yes. Discuss your API integration requirements with our team, including the events that should trigger a message, template variables and delivery-status updates. We’ll review compatibility with your existing tools.' },
  { q: 'What can I see in delivery reports?', a: 'Review the delivery status returned for your messages and investigate failed or pending sends. SMS delivery status does not tell you whether someone read the message. Ask us to demonstrate the reporting available for your setup.' },
  { q: 'How soon can I start sending?', a: 'The timeline depends on your registration, sender and template readiness, plus any integration work. We’ll review these with you and confirm an onboarding plan before you start.' },
];
