import WhatsAppApiLanding from '@/components/landing/WhatsAppApiLanding';

// Google Ads landing page — intentionally excluded from organic search
export const metadata = {
  title: "WhatsApp Business API Provider in Bangalore",
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
