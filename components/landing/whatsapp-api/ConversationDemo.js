'use client';
import { useState } from 'react';
import { LuArrowRight, LuCheck, LuMessageCircle, LuCalendarDays, LuHeadphones, LuChevronLeft, LuEllipsis, LuSend, LuWorkflow } from 'react-icons/lu';
import styles from './WhatsAppLanding.module.css';
const scenarios = [
  { id: 'sales', label: 'Capture a lead', icon: LuMessageCircle, tag: 'WHEN INTEREST TURNS INTO AN ENQUIRY', title: 'Meet your next customer.\nStart with a helpful reply.', description: 'Help interested customers find what they need. Collect their requirements, then connect them with your sales team.', incoming: 'Hi! I’m interested in your services. Can you help?', reply: 'Absolutely! What would you like to do today?', choices: ['Explore services', 'Get pricing', 'Talk to sales'], response: 'Get pricing', followup: 'Happy to help. Tell us a little about your business and our team will guide you.', steps: ['Enquiry received', 'Requirement captured', 'Sales team takes over'], result: 'A clearer starting point for your sales team.' },
  { id: 'appointments', label: 'Book an appointment', icon: LuCalendarDays, tag: 'MAKE THE NEXT STEP EASY', title: 'Less back-and-forth.\nA clearer path to booking.', description: 'Guide people through an appointment request, collect their preferred time and let your team confirm the details.', incoming: 'Hello! Can I book a consultation?', reply: 'Of course. When would you prefer to speak with us?', choices: ['This week', 'Next week', 'Talk to the team'], response: 'This week', followup: 'Great. Share your preferred day and our team will confirm an available time.', steps: ['Booking requested', 'Preference collected', 'Team confirms a time'], result: 'An appointment request with the details your team needs.' },
  { id: 'support', label: 'Support a customer', icon: LuHeadphones, tag: 'HELP THAT KEEPS THE CONTEXT', title: 'Quick answers.\nA human when it matters.', description: 'Guide customers to common answers and pass more involved questions to a person, with the conversation ready to continue.', incoming: 'Hi, I need some help with my order.', reply: 'We’re here to help. What can we do for you?', choices: ['Track my order', 'Change an order', 'Talk to support'], response: 'Talk to support', followup: 'Let’s connect you with our support team. Please share your order number so they can help.', steps: ['Question received', 'Details collected', 'Support team takes over'], result: 'Your customer can continue without starting over.' },
];
export default function ConversationDemo() {
  const [selected, setSelected] = useState(0);
  const [advanced, setAdvanced] = useState(false);
  const scenario = scenarios[selected];
  function choose(index) { setSelected(index); setAdvanced(false); }
  function navigate(event) {
    const key = event.key;
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return;
    event.preventDefault();
    const next = key === 'Home' ? 0 : key === 'End' ? scenarios.length - 1 : (selected + (key === 'ArrowRight' ? 1 : -1) + scenarios.length) % scenarios.length;
    choose(next);
    document.getElementById(`wa-tab-${scenarios[next].id}`)?.focus();
  }
  return (
    <div className={styles.demo}>
      <div className={styles.tabs} role="tablist" aria-label="Explore a WhatsApp use case" onKeyDown={navigate}>{scenarios.map((item, index) => <button key={item.id} id={`wa-tab-${item.id}`} type="button" role="tab" aria-selected={selected === index} aria-controls="wa-demo-panel" tabIndex={selected === index ? 0 : -1} onClick={() => choose(index)}><item.icon aria-hidden="true" />{item.label}</button>)}</div>
      <div className={styles.demoGrid} id="wa-demo-panel" role="tabpanel" aria-labelledby={`wa-tab-${scenario.id}`}>
        <div className={styles.demoCopy}><span className={styles.eyebrow}>{scenario.tag}</span><h3>{scenario.title}</h3><p>{scenario.description}</p><ol className={styles.flowSteps}>{scenario.steps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol><a href="#lead-form" className={styles.textLink}>Show me this for my business <LuArrowRight aria-hidden="true" /></a></div>
        <div className={styles.demoVisual}>
          <div className={styles.phone}>
            <div className={styles.phoneTop}><LuChevronLeft aria-hidden="true" /><span className={styles.businessAvatar}><LuMessageCircle aria-hidden="true" /></span><div><strong>Your business</strong><small>WhatsApp conversation</small></div><LuEllipsis aria-hidden="true" /></div>
            <div className={styles.chatBody}><span className={styles.chatDate}>EXAMPLE CONVERSATION</span><div className={styles.customerMessage}>{scenario.incoming}<small>10:30</small></div><div className={styles.businessMessage}>{scenario.reply}<small>10:30 <LuCheck aria-hidden="true" /></small></div><div className={styles.quickReplies}>{scenario.choices.map(choice => <span key={choice}>{choice}</span>)}</div>
              {!advanced ? <button className={styles.tryReply} type="button" onClick={() => setAdvanced(true)}>Try “{scenario.response}” <LuArrowRight aria-hidden="true" /></button> : <div className={styles.followup} aria-live="polite"><div className={styles.customerMessage}>{scenario.response}<small>10:31</small></div><div className={styles.businessMessage}>{scenario.followup}<small>10:31 <LuCheck aria-hidden="true" /></small></div><button type="button" className={styles.replay} onClick={() => setAdvanced(false)}>Replay example</button></div>}
            </div><div className={styles.chatComposer} aria-hidden="true"><span>Message</span><LuSend /></div>
          </div><div className={styles.demoResult}><span><LuWorkflow aria-hidden="true" /></span><div><strong>From message to next step</strong><p>{scenario.result}</p></div></div>
          <p className={styles.exampleNote}>Illustrative workflow. Your setup is tailored to your business.</p>
        </div>
      </div>
    </div>
  );
}
