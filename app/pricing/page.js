import PricingPage from '@/components/pricing/PricingPage';
import {
  buildMetadata,
  breadcrumbSchema,
  productSchema,
  faqSchema,
} from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Bulk SMS, WhatsApp API & RCS Pricing Plans India',
  description:
    'Transparent pricing for Bulk SMS from ₹0.15/msg, WhatsApp Business API, RCS Messaging & AI Voice. No hidden fees. Free 14-day trial. Pay-as-you-go & enterprise plans.',
  path: '/pricing',
  keywords: [
    'bulk SMS pricing India',
    'WhatsApp API pricing India',
    'RCS messaging pricing',
    'CPaaS pricing India',
    'SMS gateway cost India',
    'bulk SMS rates India',
    'WhatsApp Business API cost',
    'OTP SMS price India',
    'AI voice call pricing',
    'Ojiva AI pricing',
    'enterprise messaging pricing India',
  ],
});

// FAQs intentionally avoid quoting specific per-message prices — those can
// change. Refer visitors to the pricing tabs above for current rates.
const PRICING_FAQS = [
  {
    q: 'How is Ojiva AI pricing structured?',
    a: 'Pricing is pay-as-you-go and channel-wise — separate plans for Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice. Each channel offers tiered plans (Starter, Business, Enterprise) with progressively lower per-message cost as volume grows. See the channel tabs above for current rates.',
  },
  {
    q: 'Is GST included in the pricing?',
    a: 'All listed prices are exclusive of GST. 18% GST is added at invoicing as per Indian tax regulations. GST-compliant invoices are provided, and your GSTIN can be added to the account for input tax credit.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept UPI, major credit and debit cards (Visa, Mastercard, RuPay), net banking, and NEFT/RTGS. Enterprise customers can pay via invoice with negotiated terms.',
  },
  {
    q: 'Can I switch plans or channels at any time?',
    a: 'Yes. Upgrade, downgrade, or add new channels from your dashboard at any time. Changes apply immediately and there are no long-term lock-ins.',
  },
  {
    q: 'Do you offer volume discounts?',
    a: 'Yes — every channel has a Business tier with lower per-message pricing for high-volume senders, and an Enterprise option with custom rates for very large volumes. Contact sales to request enterprise pricing.',
  },
  {
    q: 'Do you offer custom enterprise contracts?',
    a: 'Yes. For high-volume senders, regulated industries (banking, healthcare, insurance), or organisations needing private deployments, we offer custom enterprise contracts with negotiated rates, SLAs, and compliance support. Contact sales for a quote.',
  },
];

// Schema offers describe the channel-wise plan structure WITHOUT pinning
// specific per-message prices in JSON-LD (those live on the pricing page UI
// and can change). We expose the plan labels + free-text descriptions so the
// schema is informative but not stale.
const PRICING_OFFERS = [
  {
    name: 'Bulk SMS plans',
    price: '0',
    priceCurrency: 'INR',
    description: 'Channel-wise plans for transactional, promotional and OTP SMS. See pricing page for current per-message rates.',
    url: '/pricing/',
  },
  {
    name: 'WhatsApp Business API plans',
    price: '0',
    priceCurrency: 'INR',
    description: 'Plans for WhatsApp Business API conversations. Official Meta BSP. See pricing page for current rates.',
    url: '/pricing/',
  },
  {
    name: 'RCS Business Messaging plans',
    price: '0',
    priceCurrency: 'INR',
    description: 'Plans for RCS rich card messaging on verified senders. See pricing page for current rates.',
    url: '/pricing/',
  },
  {
    name: 'AI Voice Call plans',
    price: '0',
    priceCurrency: 'INR',
    description: 'Per-minute plans for IVR, OBD and AI voice automation. See pricing page for current rates.',
    url: '/pricing/',
  },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home',    url: 'https://www.ojiva.ai/' },
  { name: 'Pricing', url: 'https://www.ojiva.ai/pricing/' },
]);

const product = productSchema({
  name: 'Ojiva AI Communication Platform — Pricing',
  description:
    'Pay-as-you-go and enterprise pricing for Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice Calls in India.',
  url: '/pricing/',
  offers: PRICING_OFFERS,
});

const faq = faqSchema(PRICING_FAQS);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <PricingPage faqs={PRICING_FAQS} />
    </>
  );
}
