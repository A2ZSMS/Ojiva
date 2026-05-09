'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

const HOW_STEPS = [
  {
    step: '01',
    icon: '📲',
    title: 'User Enters Phone Number',
    desc: 'Your user initiates login, checkout, or account action and submits their mobile number.',
  },
  {
    step: '02',
    icon: '⚡',
    title: 'Ojiva Sends OTP Instantly',
    desc: 'Your server calls our API. We route the OTP via the fastest available channel — SMS, WhatsApp, or Voice — in under 3 seconds.',
  },
  {
    step: '03',
    icon: '✅',
    title: 'User Verifies & Proceeds',
    desc: 'The user enters the OTP. Your app calls our verify endpoint. Session granted — secure and seamless.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" aria-labelledby="otp-how-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading
              tag="How It Works"
              title="OTP Delivery in 3 Simple Steps"
              subtitle="From API call to verified user in under 3 seconds. No complex setup required."
              center
            />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.15}>
          {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
            <StaggerItem key={step} className="col-12 col-md-4">
              <div className="how-card">
                <div className="how-step">{step}</div>
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
