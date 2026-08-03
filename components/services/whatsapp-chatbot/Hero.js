import ServiceHero from '@/components/services/shared/ServiceHero';
import { METRICS } from './data';

export default function Hero() {
  return (
    <ServiceHero
      variant="whatsapp-chatbot"
      badge="🤖 WhatsApp Chatbot"
      title={<>AI WhatsApp Chatbot <span className="sh-accent-wa">Automation</span><br />That Sells, Supports &amp; Scales</>}
      description="Automate conversations with AI chatbots that handle support, qualify leads, close sales & engage millions — 24/7, in 20+ languages. No code required."
      ctaPrimary={{   href: '/contact',   label: 'Build Your Chatbot →' }}
      ctaSecondary={{ href: '/book-demo', label: 'Book a Demo' }}
      metrics={METRICS}
    />
  );
}
