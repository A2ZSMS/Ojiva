import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import VoiceTypes from './VoiceTypes';
import PlatformFeatures from './PlatformFeatures';
import HowItWorks from './HowItWorks';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function VoicePageContent() {
  return (
    <>
      <Hero />
      <VoiceTypes />
      <PlatformFeatures />
      <HowItWorks />
      <Industries />
      <ExploreServices />
      <FadeUp>
        <CTA title="Let AI Answer Your Calls — 24×7, in Any Language" subtitle="Join 500+ businesses using Ojiva AI Voice. Deploy your first AI voice bot in 24 hours." primaryLabel="Get Started with Voice AI →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
