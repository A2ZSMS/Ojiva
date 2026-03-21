import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerGrid, StaggerGridItem } from '@/components/ui/Animations';

const SERVICES = [
  { href: '/sms', icon: '📱', title: 'Bulk SMS Service', desc: 'DLT compliant SMS with 98% delivery rate.', color: '#1B48E0' },
  { href: '/whatsapp-chatbot', icon: '🤖', title: 'WhatsApp Chatbot', desc: 'AI-powered 24/7 customer automation.', color: '#128C7E' },
  { href: '/rcs', icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender.', color: '#FF6D42' },
  { href: '/voice', icon: '📞', title: 'AI Voice Calls', desc: 'IVR, OBD & conversational AI bots.', color: '#7C3AED' },
];

export default function ExploreServices() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Combine WhatsApp with our other channels for a true omnichannel experience." center />
        </div>
        <StaggerGrid className="row g-4">
          {SERVICES.map(({ href, icon, title, desc, color }) => (
            <StaggerGridItem key={href} className="col-12 col-sm-6 col-lg-3">
              <Link href={href} className="service-cross-card">
                <span className="scc-icon" style={{ background: `${color}14`, color }}>{icon}</span>
                <h3 className="scc-title">{title}</h3>
                <p className="scc-desc">{desc}</p>
                <span className="scc-arrow" style={{ color }}>Explore →</span>
              </Link>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
