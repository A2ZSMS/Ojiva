'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What is WhatsApp Business API?',
    a: 'WhatsApp Business API is the official enterprise solution from Meta that enables businesses to send bulk messages, automate responses, integrate with CRMs, and manage multi-agent support at scale. Unlike the free WhatsApp Business App, the API supports high-volume messaging, chatbots, and full business system integration.',
  },
  {
    q: 'What is the difference between WhatsApp Business App and WhatsApp Business API?',
    a: 'The WhatsApp Business App is designed for small businesses with manual messaging on a single device. The WhatsApp Business API is built for scale — it supports bulk messaging to thousands of contacts, AI chatbot automation, multi-agent shared inbox, CRM integration, and Green Tick verification. The API is what growing Indian businesses need.',
  },
  {
    q: 'How long does WhatsApp Business API setup take?',
    a: 'We typically complete the full setup within 24–48 hours. This includes Meta Business verification, phone number registration, and template approval. Most competitors take 7–10 days — our India-based onboarding team moves faster because we handle everything for you.',
  },
  {
    q: 'Can I send promotional messages on WhatsApp Business API?',
    a: 'Yes. The WhatsApp Business API fully supports marketing messages including offers, product launches, flash sales, and re-engagement campaigns. All marketing templates require Meta approval, which our team handles for you. You can send to opted-in contacts without any risk of getting banned.',
  },
  {
    q: 'What are the messaging limits on WhatsApp Business API?',
    a: 'WhatsApp uses a tier-based messaging system. You start at 1,000 unique contacts per day and scale to unlimited as your quality rating improves. Our team guides you through the tier upgrade process so you can scale messaging volume as your business grows.',
  },
  {
    q: 'Do I need a new phone number for WhatsApp Business API?',
    a: 'You can use your existing business number or get a new dedicated number. The number must not be currently registered on WhatsApp. Our team handles the entire verification and porting process — you do not need to do anything technical.',
  },
  {
    q: 'What support do you provide after setup?',
    a: 'You get a dedicated account manager, 24/7 technical support via WhatsApp, email, and phone, help with template creation and approval, campaign strategy guidance, and full API integration assistance. Our India-based support team is available in IST hours — not US-timezone ticketing.',
  },
  {
    q: 'What are the pricing details for WhatsApp Business API?',
    a: 'There is a one-time setup fee plus a monthly platform fee. Per-message charges follow Meta\'s conversation-based pricing model — currently ₹0.58–₹0.86 per 24-hour conversation window depending on message type. Setup starts from ₹2,999 only. Contact us for a customised quote based on your monthly volume.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`lp-faq-item${open ? ' open' : ''}`}>
      <button className="lp-faq-q" onClick={() => setOpen(o => !o)} type="button">
        <span>{q}</span>
        <span className="lp-faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="lp-faq-a">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="lp-section lp-section--light">
      <div className="container">
        <div className="lp-section-label">FAQ</div>
        <h2 className="lp-section-h2">
          Everything you need to know before signing up
        </h2>
        <p className="lp-section-p">
          Straight answers to the questions every Indian business asks us.
        </p>
        <div className="lp-faqs">
          {FAQS.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
