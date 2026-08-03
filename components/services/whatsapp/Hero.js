import ServiceHero from '@/components/services/shared/ServiceHero';
import { METRICS } from './data';

export default function Hero() {
  return (
    <ServiceHero
      variant="whatsapp"
      badge="💬 WhatsApp Business API"
      title={<>Reach Customers on<br /><span className="sh-accent sh-accent-wa">WhatsApp Business API</span><br />at Enterprise Scale</>}
      description="Send interactive notifications, run AI chatbots, showcase product catalogues, and close more sales — all inside WhatsApp. Official Meta BSP with 98% open rates."
      ctaPrimary={{   href: '/contact',   label: 'Get WhatsApp API →' }}
      ctaSecondary={{ href: '/book-demo', label: 'Book a Demo' }}
      metrics={METRICS}
    />
  );
}
