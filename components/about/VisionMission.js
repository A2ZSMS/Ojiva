import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp } from '@/components/ui/Animations';

export default function VisionMission() {
  return (
    <section className="section-padding bg-section" aria-labelledby="purpose-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-7">
            <SectionHeading
              tag="Purpose"
              title="Why Ojiva AI exists"
              center
            />
          </div>
        </div>
        <FadeUp>
        <div className="vision-mission-grid">
          <div className="vm-card vm-card-vision">
            <span className="vm-card-icon" aria-hidden="true">🔭</span>
            <span className="vm-card-tag">Vision</span>
            <h3>The future of enterprise communication is autonomous</h3>
            <p>
              We envision a world where businesses can engage millions of customers
              with the personalisation of a one-on-one conversation — at zero
              marginal cost per interaction.
            </p>
          </div>
          <div className="vm-card vm-card-mission">
            <span className="vm-card-icon" aria-hidden="true">🎯</span>
            <span className="vm-card-tag">Mission</span>
            <h3>Deliver the most capable AI communication engine on the market</h3>
            <p>
              To enable any enterprise to automate intelligently across every
              channel — SMS, WhatsApp, RCS, Voice — and grow without limits,
              backed by infrastructure and intelligence built over a decade.
            </p>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
