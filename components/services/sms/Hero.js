import ServiceHero from '@/components/services/shared/ServiceHero';
import { METRICS } from './data';

export default function Hero() {
  return (
    <ServiceHero
      variant="sms"
      badge="📱 Bulk SMS Platform · India #1"
      title={<>India&apos;s Most<br /><span className="sh-accent sh-accent-sms">Trusted Bulk SMS</span><br />Gateway</>}
      description="Send millions of personalised SMS — promotional, transactional, OTP & two-way — through one API. DLT compliant, 98%+ delivery, under 3-second OTP."
      ctaPrimary={{   href: '/contact',   label: 'Start Sending SMS →' }}
      ctaSecondary={{ href: '/book-demo', label: 'Get API Docs' }}
      metrics={METRICS}
    />
  );
}
