'use client';

import FAQ from '@/components/services/whatsapp-chatbot/FAQ';

const PRICING_FAQS = [
  {
    q: 'Is there a free trial? Do I need a credit card?',
    a: 'Yes — all plans include a 14-day free trial with no credit card required. You get access to all features on the Business plan during the trial so you can evaluate the full platform.',
  },
  {
    q: 'How does pay-as-you-go billing work?',
    a: 'With pay-as-you-go, you only pay for messages sent. There are no monthly minimums or subscription fees. Simply add credits to your wallet and they deduct per message sent. Unused credits roll over indefinitely.',
  },
  {
    q: 'Can I switch plans or channels at any time?',
    a: 'Absolutely. You can upgrade, downgrade, or add new channels from your dashboard at any time. Changes take effect immediately. If you upgrade mid-cycle, billing is prorated.',
  },
  {
    q: 'Are there volume discounts for large-scale campaigns?',
    a: 'Yes. Businesses sending over 1 lakh messages per month qualify for volume discounts. Contact our sales team to receive a custom quote tailored to your monthly volume and channel mix.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, NEFT/RTGS, credit & debit cards (Visa, Mastercard, RuPay), and bank transfers. Enterprise customers can also pay via invoice with 30-day net terms.',
  },
];

export default function FAQSection({ faqs }) {
  // Prefer FAQs from page-level (page.js emits matching JSON-LD) but fall back
  // to component-internal copy so the file stays self-contained.
  const renderFaqs = (faqs && faqs.length) ? faqs : PRICING_FAQS;

  return (
    <FAQ faqs={renderFaqs} subtitle="Everything you need to know about Ojiva AI billing and plans." />
  );
}
