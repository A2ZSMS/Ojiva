'use client';
import { useEffect, useState } from 'react';
import { LuMessageCircle } from 'react-icons/lu';
import styles from './WhatsAppLanding.module.css';

export default function SupportChat() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (typeof window.Intercom === 'function') window.Intercom('update', { hide_default_launcher: true });
    return () => {
      if (typeof window.Intercom === 'function') window.Intercom('update', { hide_default_launcher: false });
    };
  }, []);
  function openChat() {
    if (loading) return;
    setError(false);
    const settings = { app_id: 'a5mrjdl9', api_base: 'https://api-iam.intercom.io', hide_default_launcher: true };
    if (typeof window.Intercom === 'function' && !window.Intercom.q) {
      window.Intercom('update', settings);
      window.Intercom('show');
      return;
    }
    setLoading(true);
    window.intercomSettings = settings;
    const queue = function (...args) { queue.q.push(args); };
    queue.q = [];
    window.Intercom = queue;
    queue('show');
    const script = document.createElement('script');
    script.src = 'https://widget.intercom.io/widget/a5mrjdl9';
    script.async = true;
    script.onload = () => setLoading(false);
    script.onerror = () => { script.remove(); setLoading(false); setError(true); };
    document.head.appendChild(script);
  }
  return <div><button type="button" className={styles.chatButton} onClick={openChat} disabled={loading}><LuMessageCircle aria-hidden="true" />{loading ? 'Opening chat…' : 'Chat with us'}</button>{error && <span className={styles.chatError} role="alert">Chat couldn’t load. Try again or call us.</span>}</div>;
}
