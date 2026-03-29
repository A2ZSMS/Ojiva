import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import SmsTypes from './SmsTypes';
import Features from './Features';
import DltCompliance from './DltCompliance';
import ApiSection from './ApiSection';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function SmsPageContent() {
  return (
    <>
      <Hero />
      <SmsTypes />
      <Features />
      <DltCompliance />
      <ApiSection />
      <Industries />
      <ExploreServices />
      <FadeUp>
        <CTA title="Start Sending SMS at Scale Today" subtitle="Join 500+ businesses using Ojiva AI SMS. DLT compliant, dedicated support, live in under 24 hours." primaryLabel="Get Started Free" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
