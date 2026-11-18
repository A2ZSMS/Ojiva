import Image from 'next/image';
import { SiGoogle, SiMeta } from 'react-icons/si';
import { LuShieldCheck } from 'react-icons/lu';
import { CLIENT_LOGOS, GOOGLE_RATING, TESTIMONIALS } from './proof';
import styles from './whatsapp-api/WhatsAppLanding.module.css';

// First-screen trust strip: Meta BSP, DLT, then client logos once added.
export function TrustStrip({ messagingOnly = false }) {
  return <div className={styles.trustStrip}>
    <ul className={styles.trustBadges} aria-label="Ojiva AI credentials">
      <li><SiMeta className={styles.metaIcon} aria-hidden="true" /><span><strong>Official Meta BSP</strong><small>WhatsApp Business Solution Provider</small></span></li>
      {!messagingOnly && <li><LuShieldCheck aria-hidden="true" /><span><strong>DLT registered</strong><small>TRAI-compliant SMS sending</small></span></li>}
      <li><a className={styles.googleRating} href={GOOGLE_RATING.url} target="_blank" rel="noopener noreferrer"><SiGoogle aria-hidden="true" /><span><strong>{GOOGLE_RATING.rating} ★ on Google</strong><small>{GOOGLE_RATING.count} customer reviews</small></span></a></li>
    </ul>
    {CLIENT_LOGOS.length > 0 && <div className={styles.clientLogos}>
      <span>Trusted by</span>
      <ul>{CLIENT_LOGOS.map(logo => <li key={logo.name}><Image src={logo.src} alt={logo.name} width={120} height={36} loading="lazy" /></li>)}</ul>
    </div>}
  </div>;
}

// Shows nothing until a real testimonial for this page is added in proof.js.
export function Testimonials({ page }) {
  const items = TESTIMONIALS.filter(t => !t.pages || t.pages.includes(page));
  if (!items.length) return null;
  return <section className={styles.section} aria-labelledby={`${page}-testimonials-title`}>
    <div className={styles.sectionIntro}><span className={styles.eyebrow}>FROM OUR CUSTOMERS</span><h2 id={`${page}-testimonials-title`}>What businesses say<br />about working with us.</h2></div>
    <div className={styles.testimonialGrid}>{items.map(t => <figure key={t.name + t.company}>
      <blockquote>“{t.quote}”</blockquote>
      <figcaption><strong>{t.name}</strong>{t.source === 'google' ? <>★★★★★ Google review</> : <>{t.role}, {t.company}</>}</figcaption>
    </figure>)}</div>
    <p className={styles.reviewsLink}><a href={GOOGLE_RATING.url} target="_blank" rel="noopener noreferrer">Read all {GOOGLE_RATING.count} reviews on Google ↗</a></p>
  </section>;
}
