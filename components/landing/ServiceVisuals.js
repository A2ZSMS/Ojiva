'use client';
import { useState } from 'react';
import { LuUsers, LuArrowRight, LuSend, LuMessageSquare } from 'react-icons/lu';
import styles from './ServiceVisuals.module.css';
export function WhatsAppJourney() {
  const [step, setStep] = useState(0);
  const stages = [
    ['Customer asks', 'Hi, can you help me choose a plan?', LuMessageSquare],
    ['Automatic reply', 'Of course. Tell us what your business needs and we’ll guide you.', LuArrowRight],
    ['Team takes over', 'Requirement captured → Your team follows up.', LuUsers],
  ];
  const [label, copy, Icon] = stages[step];
  return <div className={styles.conversation} aria-label="Interactive WhatsApp enquiry and team handoff"><div className={styles.caption}><strong>TRY THE WORKFLOW</strong><span>Step {step + 1} of 3</span></div><div className={styles.journeyProgress}>{stages.map(([name], index) => <button type="button" key={name} className={step === index ? styles.activeStage : ''} onClick={() => setStep(index)}>{index + 1}. {name}</button>)}</div><div className={styles.stageCard}><Icon aria-hidden="true" /><div><strong>{label}</strong><p>{copy}</p></div></div><button type="button" className={styles.nextButton} onClick={() => setStep((step + 1) % stages.length)}>{step === 2 ? 'Replay workflow' : 'Show next step'} <LuArrowRight aria-hidden="true" /></button></div>;
}
export function SmsCampaignPreview() {
  const [step, setStep] = useState(0);
  const steps = [['Choose audience', 'Start with the customers and purpose for this campaign.'], ['Review template', 'Check the sender, message and personalised details before sending.'], ['Follow delivery', 'See delivered, pending and failed statuses after the campaign runs.']];
  const [title, helper] = steps[step];
  return <div className={styles.campaign}><div className={styles.campaignTop}><strong>Try the campaign workflow</strong><small>Illustrative dashboard · Step {step + 1} of 3</small></div><div className={styles.campaignBody}><div className={styles.workspace}><span>EXAMPLE CAMPAIGN</span><h3>Order confirmations</h3><div className={styles.progress}>{steps.map(([name], index) => <button type="button" key={name} className={step === index ? styles.activeProgress : ''} onClick={() => setStep(index)}>{String(index + 1).padStart(2, '0')} {name}</button>)}</div><div className={styles.stageCard}><LuSend aria-hidden="true" /><div><strong>{title}</strong><p>{helper}</p></div></div><table className={styles.rows}><caption className="visually-hidden">Example message delivery statuses</caption><thead><tr><th scope="col">Message</th><th scope="col">Template</th><th scope="col">Status</th></tr></thead><tbody><tr><td>Order #4821</td><td>Confirmation</td><td>Delivered</td></tr><tr><td>Order #4822</td><td>Confirmation</td><td>Pending</td></tr><tr><td>Order #4823</td><td>Confirmation</td><td>Failed</td></tr></tbody></table></div><div className={styles.message}><span>WHAT YOUR CUSTOMER RECEIVES</span><blockquote>Your order #4821 is confirmed. We’ll update you when it is dispatched. Thank you for shopping with us.</blockquote><p>One prepared template. Customer-specific details. Delivery status to help your team follow up.</p><button type="button" className={styles.nextButton} onClick={() => setStep((step + 1) % steps.length)}>{step === 2 ? 'Replay workflow' : 'Show next step'} <LuArrowRight aria-hidden="true" /></button></div></div><p className={styles.foot}>Sample content and statuses for explanation. Ask for a demo of the actual dashboard, reporting and sending options.</p></div>;
}
