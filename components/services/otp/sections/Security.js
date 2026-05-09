'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

const SECURITY_ITEMS = [
  {
    icon: '🔐',
    title: 'AES-256 Encryption',
    desc: 'Every OTP is generated and transmitted with AES-256-GCM encryption — the same standard used by global banks.',
  },
  {
    icon: '🔒',
    title: 'TLS 1.3 in Transit',
    desc: 'All API calls travel over TLS 1.3. No OTP is ever sent over plain HTTP. MITM attacks are structurally prevented.',
  },
  {
    icon: '🛡️',
    title: 'IP Whitelisting',
    desc: 'Lock your API key to specific IP addresses. Only your servers can trigger OTP sends — no unauthorized access.',
  },
  {
    icon: '📋',
    title: 'TRAI DLT Registered',
    desc: 'All transactional OTP routes are DLT-registered per TRAI mandate. Zero non-compliant delivery risk.',
  },
];

export default function Security() {
  return (
    <section className="section-padding" aria-labelledby="otp-security-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading
              tag="Security First"
              title="Enterprise-Grade OTP Security"
              subtitle="Every OTP delivery is encrypted, compliant, and protected against spoofing and replay attacks."
              center
            />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.1}>
          {SECURITY_ITEMS.map(({ icon, title, desc }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon" style={{ background: 'rgba(27,72,224,0.08)' }}>
                  {icon}
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
