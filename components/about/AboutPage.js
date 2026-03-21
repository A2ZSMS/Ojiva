import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import MetricsStrip from './MetricsStrip';
import Journey from './Journey';
import VisionMission from './VisionMission';
import Infrastructure from './Infrastructure';
import Values from './Values';

export default function AboutPageContent() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <Journey />
      <hr className="gradient-divider" />
      <VisionMission />
      <Infrastructure />
      <hr className="gradient-divider" />
      <Values />
      <FadeUp>
      <CTA
        title="Ready to see Ojiva AI in action?"
        subtitle="Book a personalised walkthrough with one of our platform engineers and see how Ojiva AI can transform your communication stack."
        primaryLabel="Schedule a Demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
      </FadeUp>
    </>
  );
}
