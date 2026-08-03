import ServiceHero from '@/components/services/shared/ServiceHero';
import { METRICS } from './data';

export default function Hero() {
  return (
    <ServiceHero
      variant="voice"
      badge="📞 Bulk Voice Call"
      title={<>Bulk Voice Call &amp; IVR <span className="sh-accent sh-accent-voice">Automation</span><br />for India</>}
      description="From outbound dialers to AI-powered voice bots — handle millions of customer calls automatically, 24x7, in 10+ languages. Reduce call centre costs by 60%."
      ctaPrimary={{   href: '/contact',   label: 'Start Automating Calls →' }}
      ctaSecondary={{ href: '/book-demo', label: 'Hear a Demo Call' }}
      metrics={METRICS}
    />
  );
}
