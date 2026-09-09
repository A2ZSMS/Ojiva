import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuHouse, LuMessageCircle, LuSearch } from 'react-icons/lu';
import { buildMetadata } from '@/lib/metadata';
import styles from './not-found.module.css';

export const metadata = buildMetadata({
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist. Explore Ojiva AI services or return home.',
  path: '/404',
});

const destinations = [
  { href: '/website-development/', label: 'Website development', copy: 'Create a website that guides visitors to the right next step.' },
  { href: '/whatsapp-api-service/', label: 'WhatsApp API', copy: 'Build customer conversations and follow-ups at scale.' },
  { href: '/bulk-sms/', label: 'Bulk SMS', copy: 'Send promotional, transactional and OTP messages reliably.' },
  { href: '/rcs-messaging/', label: 'RCS messaging', copy: 'Give mobile conversations richer, clearer actions.' },
];

export default function NotFound() {
  return <section className={styles.page} aria-labelledby="not-found-title">
    <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
    <div className={styles.content}>
      <Link href="/" className={styles.logo} aria-label="Ojiva AI home"><Image src="/ojiva-logo-white.webp" alt="Ojiva AI" width={104} height={42} priority /></Link>
      <div className={styles.code}><span>4</span><i>0</i><span>4</span></div>
      <p className={styles.eyebrow}>THE PAGE MOVED</p>
      <h1 id="not-found-title">Let’s get you back<br /><em>on the right path.</em></h1>
      <p className={styles.lede}>The link you followed may be outdated, or the address may have a small mistake. Choose a destination below and continue exploring Ojiva AI.</p>
      <div className={styles.actions}><Link href="/" className={styles.primary}><LuHouse aria-hidden="true" /> Back to home</Link><Link href="/contact/" className={styles.secondary}><LuMessageCircle aria-hidden="true" /> Talk to our team</Link></div>
      <div className={styles.destinations}><div className={styles.destinationHeading}><span><LuSearch aria-hidden="true" /> FIND YOUR WAY</span><small>Popular Ojiva AI pages</small></div><div className={styles.destinationGrid}>{destinations.map(item => <Link href={item.href} key={item.href} className={styles.destination}><strong>{item.label}<LuArrowRight aria-hidden="true" /></strong><span>{item.copy}</span></Link>)}</div></div>
    </div>
  </section>;
}
