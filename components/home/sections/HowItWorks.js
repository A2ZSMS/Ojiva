import {
  RiPlugLine, RiFlowChart, RiBrainLine, RiRocketLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  ClipReveal,
  RotateIn,
} from '@/components/ui/Animations';

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect in 10 Minutes',
    desc: 'Connect your CRM and messaging channels using integrations or the API.',
    icon: RiPlugLine,
  },
  {
    step: '02',
    title: 'Build Your First Flow',
    desc: 'Choose your audience, create messages, and set up your campaign flow.',
    icon: RiFlowChart,
  },
  {
    step: '03',
    title: 'AI Takes Over',
    desc: 'Automate replies, follow-ups, and lead routing across your channels.',
    icon: RiBrainLine,
  },
  {
    step: '04',
    title: 'Watch Results Roll In',
    desc: 'Review delivery, conversations, and campaign performance in one place.',
    icon: RiRocketLine,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding hp-sec-hiw" aria-labelledby="how-heading">
      <div className="container">
        <ClipReveal direction="left">
          <SectionHeading
            id="how-heading"
            tag="Get Started in Minutes"
            title="From Sign-Up to Revenue in 4 Steps"
            subtitle="Connect your channels, build a flow, and measure the results."
            center
          />
        </ClipReveal>

        <div className="ojv-timeline mt-5">
          {/* Connecting line */}
          <div className="ojv-timeline-line" aria-hidden="true" />
          {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }, i) => (
            <RotateIn key={step} delay={i * 0.12}>
              <div className="ojv-timeline-step">
                <div className="ojv-timeline-node">
                  <span className="ojv-timeline-num">{step}</span>
                  <div className="ojv-timeline-icon"><Icon size={20} aria-hidden="true" /></div>
                </div>
                <div className="ojv-timeline-body">
                  <h3 className="ojv-timeline-title">{title}</h3>
                  <p className="ojv-timeline-desc">{desc}</p>
                </div>
              </div>
            </RotateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
