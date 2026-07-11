import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { STEPS } from './data';

export default function HowItWorks() {
  return (
    <section className="section-padding bg-section" aria-labelledby="how-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-7">
            <SectionHeading
              tag="How it works"
              title="From login to launch in minutes"
              subtitle="One workflow across every channel — no separate tools, no separate logins."
              center
            />
          </div>
        </div>

        <StaggerContainer className="pf-steps" staggerDelay={0.06}>
          {STEPS.map((s) => (
            <StaggerItem className="pf-step" key={s.num}>
              <span className="pf-step-num">{s.num}</span>
              <h3 className="pf-step-title">{s.title}</h3>
              <p className="pf-step-desc">{s.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
