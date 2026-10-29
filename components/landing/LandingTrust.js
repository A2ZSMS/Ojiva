'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SiGoogle, SiMeta, SiWhatsapp } from 'react-icons/si';
import { LuShieldCheck } from 'react-icons/lu';
import { CLIENT_LOGOS, GOOGLE_RATING, TESTIMONIALS } from './proof';
import styles from './whatsapp-api/WhatsAppLanding.module.css';

const WHATSAPP_NUMBER = '918431086185';

// First-screen trust strip: Meta BSP, DLT, then client logos once added.
export function TrustStrip() {
  return <div className={styles.trustStrip}>
    <ul className={styles.trustBadges} aria-label="Ojiva AI credentials">
      <li><SiMeta className={styles.metaIcon} aria-hidden="true" /><span><strong>Official Meta BSP</strong><small>WhatsApp Business Solution Provider</small></span></li>
      <li><LuShieldCheck aria-hidden="true" /><span><strong>DLT registered</strong><small>TRAI-compliant SMS sending</small></span></li>
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

// WhatsApp chat button. `header` sits next to the header CTA; `float` is
// fixed bottom-right and hides while the lead form is on screen, so it
// never covers the form's submit button.
export function WhatsAppButton({ message, source, variant = 'float' }) {
  const [formInView, setFormInView] = useState(false);
  useEffect(() => {
    const form = document.getElementById('lead-form');
    if (variant !== 'float' || !form || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting));
    observer.observe(form);
    return () => observer.disconnect();
  }, [variant]);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  function track() {
    const payload = { event_category: 'landing', event_label: `${source}-${variant}` };
    if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', payload);
    else if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: 'whatsapp_click', ...payload });
  }
  if (variant === 'float' && formInView) return null;
  return <a className={variant === 'header' ? styles.whatsappHeader : styles.whatsappFloat} href={href} target="_blank" rel="noopener noreferrer" onClick={track} aria-label="Chat with us on WhatsApp">
    <SiWhatsapp aria-hidden="true" /><span>{variant === 'header' ? 'WhatsApp' : 'Chat on WhatsApp'}</span>
  </a>;
}
