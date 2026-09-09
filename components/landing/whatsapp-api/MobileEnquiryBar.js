'use client';
import { useEffect, useState } from 'react';
import styles from './WhatsAppLanding.module.css';

export default function MobileEnquiryBar({ label = 'Get demo & pricing ↗' }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById('lead-form');
    if (!form || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  return visible ? <div className={styles.mobileBar}><span>Let’s talk about your business.</span><a href="#lead-form">{label}</a></div> : null;
}
