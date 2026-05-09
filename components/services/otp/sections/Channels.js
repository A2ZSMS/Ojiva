'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

const OTP_CHANNELS = [
  {
    icon: '📱',
    title: 'SMS OTP',
    color: '#1B48E0',
    desc: 'The fastest, most universal channel. Reaches every mobile in India with no app required. Ideal for banking, e-commerce, and high-volume use cases.',
    points: [
      'Sub-3 second delivery via direct telecom routes',
      'DLT registered transactional template',
      'Automatic fallback if primary route fails',
      'Supports 6–8 digit configurable OTP length',
    ],
  },
  {
    icon: '💬',
    title: 'WhatsApp OTP',
    color: '#25D366',
    desc: 'Higher open rates than SMS. Delivered inside WhatsApp with branded sender name. Perfect for consumer apps, fintech, and e-commerce with WhatsApp-first audiences.',
    points: [
      'Meta-verified delivery with read receipts',
      'Branded business name & logo in notification',
      'Works even without cellular signal (Wi-Fi)',
      'Supports rich-text OTP message templates',
    ],
  },
  {
    icon: '🎙️',
    title: 'Voice OTP',
    color: '#a78bfa',
    desc: 'For users who cannot read SMS — elderly users, feature phones, or international numbers. A text-to-speech call reads the OTP aloud twice for clarity.',
    points: [
      'AI TTS reads OTP in English, Hindi & regional languages',
      'DTMF confirmation option available',
      'Ideal for accessibility & elderly users',
      'Automatic retry if call not answered',
    ],
  },
];

export default function Channels() {
  return (
    <section className="section-padding bg-section" aria-labelledby="otp-channels-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading
              tag="OTP Channels"
              title="Send OTP on Any Channel"
              subtitle="One API, three delivery channels. Automatic fallback ensures your OTP always reaches the user."
              center
            />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.12}>
          {OTP_CHANNELS.map(({ icon, title, color, desc, points }) => (
            <StaggerItem key={title} className="col-12 col-md-4">
              <div className="service-type-card">
                <div
                  className="cb-card-accent"
                  style={{ height: '4px', background: `linear-gradient(90deg, ${color}, ${color}88)`, marginBottom: '1.25rem', borderRadius: '2px' }}
                />
                <div
                  className="service-type-icon"
                  style={{ background: `${color}14`, borderColor: `${color}30`, fontSize: '1.8rem', marginBottom: '1rem' }}
                >
                  {icon}
                </div>
                <h3 className="service-type-title">{title}</h3>
                <p className="service-type-desc">{desc}</p>
                <ul className="service-type-points">
                  {points.map((p) => (
                    <li key={p}><span style={{ color }}>✓</span> {p}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
