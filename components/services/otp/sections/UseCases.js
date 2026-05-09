'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

const USE_CASES = [
  { icon: '🏦', title: 'Banking & Finance', desc: 'Secure login, fund transfers, and transaction confirmations. TRAI & RBI compliant OTP delivery.' },
  { icon: '🛒', title: 'E-commerce', desc: 'Account signup, checkout verification, and order confirmation OTP flows at any scale.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Patient login, prescription access, and teleconsultation authentication with encrypted OTP.' },
  { icon: '🎓', title: 'Education', desc: 'Student onboarding, exam portal access, and parent verification with instant OTP.' },
  { icon: '💳', title: 'Fintech & Payments', desc: 'Wallet top-ups, UPI confirmations, and KYC verification via compliant OTP APIs.' },
  { icon: '🎮', title: 'Gaming & Apps', desc: 'Phone-based registration, anti-fraud 2FA, and account recovery via SMS and WhatsApp OTP.' },
];

export default function UseCases() {
  return (
    <section className="section-padding" aria-labelledby="otp-usecases-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading
              tag="Use Cases"
              title="OTP for Every Industry"
              subtitle="From banking to gaming — secure verification drives trust across every sector."
              center
            />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-3" staggerDelay={0.08}>
          {USE_CASES.map(({ icon, title, desc }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-md-4">
              <div className="industry-card">
                <span className="industry-icon">{icon}</span>
                <h3 className="industry-title">{title}</h3>
                <p className="industry-use">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
