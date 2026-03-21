import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { HOW_STEPS } from './data';

export default function HowItWorks() {
  return (
    <section className="py-5" aria-labelledby="rcs-how-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="How It Works" title="Get Verified & Start Sending Rich RCS in Days" subtitle="We handle Google verification, branding setup, and API integration — you focus on campaigns." center />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.15}>
          {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
            <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
              <div className="how-card">
                <div className="how-step rcs-how-step">{step}</div>
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
