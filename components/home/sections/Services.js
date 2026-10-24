import Link from 'next/link';
import {
  RiWhatsappLine, RiMessage3Line, RiSmartphoneLine, RiPhoneLine,
  RiLockPasswordLine, RiRobotLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  BlurReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/Animations';
import { CHANNEL } from '@/lib/colors';

const SERVICES = [
  {
    id: 'whatsapp',
    icon: RiWhatsappLine,
    ch: CHANNEL.whatsapp,
    title: 'WhatsApp Business API',
    desc: 'Send campaigns, automate replies, and manage customer conversations on WhatsApp.',
    stat: '98% open rate',
  },
  {
    id: 'rcs',
    icon: RiMessage3Line,
    ch: CHANNEL.rcs,
    title: 'RCS Messaging',
    desc: 'Send branded messages with rich cards, carousels, and quick actions.',
    stat: '94% read rate',
  },
  {
    id: 'sms',
    icon: RiSmartphoneLine,
    ch: CHANNEL.sms,
    title: 'Bulk SMS Service',
    desc: 'Reach customers with promotional messages, alerts, and transactional SMS.',
  },
  {
    id: 'voice',
    icon: RiPhoneLine,
    ch: CHANNEL.voice,
    title: 'Bulk Voice Call',
    desc: 'Run voice campaigns with IVR, automated retries, and call reports.',
    stat: 'Zero-agent IVR',
  },
  {
    id: 'otp',
    icon: RiLockPasswordLine,
    ch: CHANNEL.otp,
    title: 'OTP & 2FA Solutions',
    desc: 'Verify customers with OTPs across SMS, WhatsApp, and Voice.',
    stat: '99.9% success',
  },
  {
    id: 'whatsapp-chatbot',
    icon: RiRobotLine,
    ch: CHANNEL.chatbot,
    title: 'WhatsApp AI Chatbot',
    desc: 'Answer questions, capture leads, and support customers with automated conversations.',
    stat: '24/7 automated',
    linkOverride: '/whatsapp-chatbot',
  },
];

export default function Services() {
  return (
    <section className="section-padding hp-sec-svc" aria-labelledby="services-heading">
      <div className="container">
        <BlurReveal>
          <SectionHeading
            id="services-heading"
            tag="Powerful Messaging Solutions"
            title="Everything You Need to Grow Your Business"
            subtitle="From WhatsApp automation to bulk messaging — powerful communication tools trusted by 500+ businesses across India."
            center
          />
        </BlurReveal>

        {/* Top-tier featured services */}
        <StaggerContainer className="ojv-svc-grid-top mt-5" staggerDelay={0.08}>
          {SERVICES.slice(0, 2).map(({ id, icon: Icon, ch: { fill: iconBg, ink }, title, desc, stat, linkOverride }, i) => (
            <StaggerItem key={`${id}-top`}>
              <Link href={linkOverride || `/${id}`} className="ojv-svc-card ojv-svc-card--featured">
                <div className="ojv-svc-card-accent" style={{ background: `linear-gradient(90deg, ${iconBg}, ${iconBg}99)` }} aria-hidden="true" />
                <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: ink }}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="ojv-svc-title">{title}</h3>
                <p className="ojv-svc-desc">{desc}</p>
                <div className="ojv-svc-footer">
                  {stat && (
                    <span className="ojv-svc-stat" style={{ color: ink, background: `${iconBg}14` }}>
                      {stat}
                    </span>
                  )}
                  <span className="ojv-svc-link" style={{ color: ink }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Supporting services grid */}
        <StaggerContainer className="ojv-svc-grid mt-4" staggerDelay={0.07}>
          {SERVICES.slice(2).map(({ id, icon: Icon, ch: { fill: iconBg, ink }, title, desc, stat, linkOverride }, i) => (
            <StaggerItem key={`${id}-${i}`}>
              <Link href={linkOverride || `/${id}`} className="ojv-svc-card">
                <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: ink }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="ojv-svc-title">{title}</h3>
                <p className="ojv-svc-desc">{desc}</p>
                <div className="ojv-svc-footer">
                  {stat && (
                    <span className="ojv-svc-stat" style={{ color: ink, background: `${iconBg}14` }}>
                      {stat}
                    </span>
                  )}
                  <span className="ojv-svc-link" style={{ color: ink }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
