import WhatsAppApiLanding from '@/components/landing/WhatsAppApiLanding';

// Google Ads landing page — intentionally excluded from organic search
export const metadata = {
  title: "WhatsApp Business API India — Go Live in 48 Hours | Ojiva AI",
  description:
    "Official Meta BSP. 98% open rates. Zero setup fees. DLT compliant. Send WhatsApp messages to 500M+ users — go live in 48 hours with Ojiva AI.",
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
