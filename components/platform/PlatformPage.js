import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import ModuleDetails from './ModuleDetails';
import Integrations from './Integrations';
import ApiSection from './ApiSection';

export default function PlatformPageContent() {
  return (
    <>
      <Hero />
      <ModuleDetails />
      <hr className="gradient-divider" />
      <Integrations />
      <ApiSection />

      <FadeUp>
      <CTA
        title="Built to integrate with your existing stack"
        subtitle="Ojiva AI connects to your CRM, helpdesk, data warehouse, and custom APIs — enterprise support and white-glove onboarding included."
        primaryLabel="Talk to an Engineer"
        secondaryLabel="View Documentation"
        secondaryHref="/support"
      />
      </FadeUp>
    </>
  );
}
