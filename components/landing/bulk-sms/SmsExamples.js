'use client';
import { useState } from 'react';
import { LuArrowRight, LuMessageSquare, LuMegaphone, LuShieldCheck, LuPackageCheck } from 'react-icons/lu';
import base from '../whatsapp-api/WhatsAppLanding.module.css';
import styles from './BulkSmsLanding.module.css';
const examples = [
  { id: 'promotional', label: 'Promotional SMS', icon: LuMegaphone, title: 'Give customers a reason to come back.', description: 'Share relevant offers, new arrivals and event invitations with your marketing audience.', message: 'Your weekend plans, sorted. Explore the new collection at our store this Saturday. Show this message in store for details.', use: 'Retail offers · Events · Product launches', outcome: 'Plan an audience, prepare your message and schedule your campaign.' },
  { id: 'transactional', label: 'Transactional SMS', icon: LuPackageCheck, title: 'Keep customers informed at every step.', description: 'Send useful updates when something changes: an order is confirmed or a payment is received.', message: 'Your order #4821 is confirmed. We’ll send an update when it is dispatched. Thank you for shopping with us.', use: 'Order confirmations · Payment alerts · Refund updates', outcome: 'Connect a business event to a timely customer update.' },
  { id: 'service-explicit', label: 'Service Explicit', icon: LuMessageSquare, title: 'Stay connected with customers who opt in.', description: 'Send consent-based communication to customers who have explicitly agreed to receive it. Plan the message around the purpose of their consent.', message: 'You asked to hear about our learning programmes. The next photography workshop opens this month. Contact our team for course details.', use: 'Opt-in communication · Programme updates · Customer engagement', outcome: 'Review audience consent and template requirements before you send.' },
  { id: 'otp', label: 'OTP & verification', icon: LuShieldCheck, title: 'Make verification part of your flow.', description: 'Connect SMS verification codes to sign-in, account verification and other authentication steps in your app.', message: '482913 is your verification code. Valid for 5 minutes. Do not share this code with anyone.', use: 'Sign-in · Account verification · Authentication', outcome: 'Trigger the message through your application and review its delivery status.' },
];
export default function SmsExamples() {
  const [active, setActive] = useState(0);
  const item = examples[active];
  function onKeyDown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? examples.length - 1 : (active + (event.key === 'ArrowRight' ? 1 : -1) + examples.length) % examples.length;
    setActive(next); document.getElementById(`sms-tab-${examples[next].id}`)?.focus();
  }
  return <div>
    <div className={`${base.tabs} ${styles.smsTabs}`} role="tablist" aria-label="SMS message examples" onKeyDown={onKeyDown}>{examples.map((example, index) => <button type="button" key={example.id} id={`sms-tab-${example.id}`} role="tab" aria-selected={active === index} aria-controls="sms-example-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}><example.icon aria-hidden="true" />{example.label}</button>)}</div>
    <div className={styles.examplePanel} id="sms-example-panel" role="tabpanel" aria-labelledby={`sms-tab-${item.id}`}>
      <div><span className={base.eyebrow}>THE RIGHT MESSAGE FOR THE MOMENT</span><h3>{item.title}</h3><p>{item.description}</p><div className={styles.useLabel}>{item.use}</div><p className={styles.outcome}>{item.outcome}</p><a href="#lead-form" className={base.textLink}>Discuss this SMS use case <LuArrowRight aria-hidden="true" /></a></div>
      <div className={styles.smsPhone}><div className={styles.phoneHeader}><LuMessageSquare aria-hidden="true" /><div><strong>Your business</strong><span>SMS message preview</span></div></div><div className={styles.messageArea}><span>ILLUSTRATIVE MESSAGE</span><div className={styles.messageBubble}>{item.message}<small>10:30 AM</small></div><p>Delivered to the customer’s messaging inbox.</p></div><div className={styles.phoneFoot}>Example content. Final sender and template depend on your setup.</div></div>
    </div>
  </div>;
}
