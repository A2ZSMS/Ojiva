import SectionHeading from '@/components/ui/SectionHeading';
import { BlurReveal, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { HOW_STEPS } from './data';

export default function HowItWorks() {
  return (
    <section className="py-5" aria-labelledby="voice-how-heading">
      <div className="container">
        <BlurReveal>
          <div className="text-center mb-5">
            <SectionHeading tag="How It Works" title="Deploy AI Voice in 24 Hours" subtitle="From script to live calls — voice automation end-to-end within a day." center />
          </div>
        </BlurReveal>
        <StaggerContainer className="row g-4" staggerDelay={0.15}>
          {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
            <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
              <div className="how-card">
                <div className="how-step voice-how-step">{step}</div>
                <div className="how-icon">{icon}</div>
                <h3 className="how-title">{title}</h3>
                <p className="how-desc">{desc}</p>
                {i < HOW_STEPS.length - 1 && <div className="how-connector">→</div>}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
