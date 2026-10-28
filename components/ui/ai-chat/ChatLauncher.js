'use client';

/* AI chat bubble — the only part that loads with every page (a button and
   a few lines of CSS). The chat window itself is fetched on first hover,
   focus or tap, so page speed is unaffected. Bottom-left; Intercom's
   bubble (bottom-right) stays for talking to a person.
   Once a visitor has chatted, the window is loaded on every page (closed)
   so a team member who takes the chat over can still reach them. */

import './AiChat.css';
import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const loadPanel = () => import('./ChatPanel');
const ChatPanel = dynamic(loadPanel, { ssr: false });

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [unread, setUnread] = useState(0);
  const prefetch = useCallback(() => { loadPanel(); }, []);
  const addUnread = useCallback((n) => setUnread((u) => u + n), []);

  // A visitor who has chatted stays reachable by the team on every page
  useEffect(() => {
    let live = null;
    try { live = JSON.parse(sessionStorage.getItem('ojiva-ai-chat'))?.live; } catch { /* storage blocked */ }
    if (!live?.started) return;
    const t = setTimeout(() => setMounted(true));   // after hydration
    return () => clearTimeout(t);
  }, []);

  // Lets the CSS hide Intercom's bubble on phones while the chat is open
  useEffect(() => {
    document.body.classList.toggle('aic-open', open);
    return () => document.body.classList.remove('aic-open');
  }, [open]);

  const toggle = () => {
    setMounted(true);
    setUnread(0);
    setOpen((o) => !o);
  };

  return (
    <>
      {mounted && <ChatPanel open={open} onClose={() => setOpen(false)} onUnread={addUnread} />}
      <button
        type="button"
        className={`aic-launcher${open ? ' is-open' : ''}`}
        onClick={toggle}
        onPointerEnter={prefetch}
        onFocus={prefetch}
        aria-expanded={open}
        aria-controls="aic-panel"
        aria-label={open ? 'Close AI assistant' : unread ? `Ask Ojiva AI assistant — ${unread} new message${unread > 1 ? 's' : ''}` : 'Ask Ojiva AI assistant'}
      >
        {!open && unread > 0 && <span className="aic-badge" aria-hidden="true">{unread}</span>}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
              <path d="M12 8.2l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9z" fill="currentColor" stroke="none" />
            </svg>
            <span className="aic-launcher-label">Ask AI</span>
          </>
        )}
      </button>
    </>
  );
}
