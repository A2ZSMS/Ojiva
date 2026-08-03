import ServiceHero from '@/components/services/shared/ServiceHero';
import { METRICS } from './data';

export default function Hero() {
  return (
    <ServiceHero
      variant="rcs"
      badge="✨ RCS Business Messaging"
      title={<><span className="sh-accent sh-accent-rcs">RCS Business Messaging</span><br />Next Generation Platform</>}
      description="Go beyond plain text SMS. Send rich cards, swipeable carousels, suggested action buttons, and verified branded messages — all in the native Android Messages app. 3x higher CTR than SMS."
      ctaPrimary={{   href: '/contact',   label: 'Upgrade to RCS →' }}
      ctaSecondary={{ href: '/book-demo', label: 'See Live Demo' }}
      metrics={METRICS}
    />
  );
}
