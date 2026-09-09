import WhatsAppApiLanding from '@/components/landing/WhatsAppApiLanding';

// Google Ads landing page — intentionally excluded from organic search
export const metadata = {
  title: "WhatsApp Business API — Demo & Pricing | Ojiva AI",
  description:
    "Automate WhatsApp replies, follow up with leads and manage conversations in a shared inbox. Get a personalised Ojiva AI demo, setup guidance and pricing.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Page() {
  return <WhatsAppApiLanding />;
}
