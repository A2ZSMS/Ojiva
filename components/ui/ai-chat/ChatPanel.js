'use client';

/* AI chat window — loaded on demand by ChatLauncher.
   Talks to public/api/ai-chat.php (which holds the Claude API key) and
   shows a name + phone form when the assistant decides the visitor is ready
   for a callback. The conversation survives page changes in sessionStorage.

   Live takeover: a team member can take the chat over from the admin panel.
   While the window is open (or a person is handling the chat) it polls
   public/api/ai-live.php every few seconds for their replies. */

import { useCallback, useEffect, useRef, useState } from 'react';
import { submitChatLead } from '@/lib/chatLead';
import { getAttribution } from '@/lib/attribution';

const ENDPOINT = '/api/ai-chat.php';
const LIVE_ENDPOINT = '/api/ai-live.php';
const WAIT_FOR_PERSON_MS = 90000;   // then offer a callback instead
const STORE_KEY = 'ojiva-ai-chat';
const MAX_HISTORY = 20;   // matches MAX_TURNS in ai-chat.php
const MAX_CHARS = 500;    // matches MAX_USER_CHARS

const GREETING = 'Hi! 👋 Ask me anything about Bulk SMS, WhatsApp API, RCS or AI voice calls — features, DLT, setup or which channel fits your business.\nआप हिंदी में भी पूछ सकते हैं।';
const SUGGESTIONS = ['Which channel suits my business?', 'How does WhatsApp API work?', 'What is DLT registration?', 'Book a demo'];
const FORM_INVITE = 'Share your name and number and our team will call you back.';
const CONNECTING = 'Connecting you with our team — someone will join in a moment…';
const TEAM_BUSY = 'Our team is busy right now. Leave your name and number and we’ll call you back, or chat with us on Intercom.';

const ERRORS = {
  rate_limited: 'You’ve sent a lot of messages — please wait a few minutes, or use “Talk to a person”.',
  too_long: `Please keep your message under ${MAX_CHARS} characters.`,
  default: 'Sorry, I can’t answer right now. Please try again, or use “Talk to a person”.',
};

function readStore() {
  try { return JSON.parse(sessionStorage.getItem(STORE_KEY)) || null; } catch { return null; }
}
// One id per conversation (per browser tab), so the admin panel can show it whole
function newSessionId() {
  const b = new Uint8Array(16);
  crypto.getRandomValues(b);
  return Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}
function writeStore(state) {
  try { sessionStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch { /* private mode */ }
}

/* ── Safe text rendering: **bold**, "- " bullets, links. No raw HTML. ── */
const INLINE = /(\*\*[^*]+\*\*|https?:\/\/[^\s)]+[^\s).,!?])/g;
function inline(text, key) {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={`${key}-${i}`}>{part.slice(2, -2)}</strong>;
    if (/^https?:\/\//.test(part)) {
      const internal = /^https:\/\/(www\.)?ojiva\.ai(\/|$)/.test(part);
      const href = internal ? part.replace(/^https:\/\/(www\.)?ojiva\.ai/, '') || '/' : part;
      return <a key={`${key}-${i}`} href={href} {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>{internal ? href : part}</a>;
    }
    return part;
  });
}
function RichText({ text }) {
  const blocks = [];
  let list = null;
  text.split('\n').forEach((raw, i) => {
    const line = raw.trim();
    const bullet = line.match(/^(?:[-•*]|\d+\.)\s+(.*)$/);
    if (bullet) {
      if (!list) { list = []; blocks.push(<ul key={`ul${i}`}>{list}</ul>); }
      list.push(<li key={i}>{inline(bullet[1], i)}</li>);
      return;
    }
    list = null;
    if (line) blocks.push(<p key={i}>{inline(line, i)}</p>);
  });
  return blocks;
}

/* ── Inline lead form ── */
function LeadForm({ interest, transcript, messages, sessionId, onDone }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (busy) return;
    if (!agree) { setError('Please tick the box so our team can contact you.'); return; }
    setBusy(true);
    setError('');
    const res = await submitChatLead({ name, phone, interest, transcript, messages, sessionId });
    setBusy(false);
    if (res.ok) onDone(name.trim());
    else setError(res.error);
  };

  return (
    <form className="aic-lead" onSubmit={submit} noValidate>
      <label>
        <span>Your name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required disabled={busy} maxLength={60} />
      </label>
      <label>
        <span>Mobile number</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" autoComplete="tel-national" placeholder="10-digit mobile" required disabled={busy} maxLength={16} />
      </label>
      <label className="aic-consent">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required disabled={busy} />
        <span>I agree to the <a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and to be contacted by Ojiva AI.</span>
      </label>
      {error && <p className="aic-lead-error" role="alert">{error}</p>}
      <button type="submit" className="aic-lead-btn" disabled={busy}>{busy ? 'Sending…' : 'Request a callback'}</button>
      <p className="aic-lead-note">Our team calls within working hours. No spam.</p>
    </form>
  );
}

const NO_LIVE = { started: false, mode: 'ai', agent: '', lastId: 0, waitingSince: 0 };

function openIntercom(onClose) {
  onClose();
  if (typeof window.Intercom === 'function') window.Intercom('show');
  else window.location.href = '/contact/';
}

export default function ChatPanel({ open, onClose, onUnread }) {
  const [items, setItems] = useState(() => readStore()?.items || []);
  const [leadDone, setLeadDone] = useState(() => !!readStore()?.leadDone);
  const [sessionId] = useState(() => readStore()?.sessionId || newSessionId());
  const [live, setLive] = useState(() => ({ ...NO_LIVE, ...readStore()?.live }));
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const lastIdRef = useRef(live.lastId);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => { writeStore({ items, leadDone, sessionId, live }); }, [items, leadDone, sessionId, live]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [items, busy]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  /* ── Live takeover ── */
  const applyLive = useCallback((data) => {
    const fresh = (data.messages || []).filter((m) => m.id > lastIdRef.current);
    if (fresh.length) {
      lastIdRef.current = fresh[fresh.length - 1].id;
      setItems((cur) => [...cur, ...fresh.map((m) => (m.role === 'agent'
        ? { role: 'agent', content: m.content, name: m.name, id: m.id }
        : { role: 'notice', tone: 'info', content: m.content, id: m.id }))]);
      const replies = fresh.filter((m) => m.role === 'agent').length;
      if (replies && !openRef.current) onUnread?.(replies);
    }
    setLive((l) => ({
      ...l,
      started: true,
      mode: data.mode || l.mode,
      agent: data.agent ?? l.agent,
      lastId: lastIdRef.current,
      waitingSince: data.mode === 'human' ? 0 : l.waitingSince,
    }));
  }, [onUnread]);

  const callLive = useCallback(async (action = 'poll') => {
    const res = await fetch(LIVE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, after: lastIdRef.current, action, page: window.location.pathname }),
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || 'live');
    applyLive(data);
    return data;
  }, [sessionId, applyLive]);

  // Once the visitor has chatted, keep checking for a team member: every 4 s
  // with the window open, 10 s while a person is handling it, otherwise 20 s
  // in the background (their replies then show as an unread badge).
  const busyLive = live.mode === 'human' || !!live.waitingSince;
  useEffect(() => {
    if (!live.started) return;
    let stop = false;
    let timer;
    const tick = async () => {
      try { await callLive(); } catch { /* try again next tick */ }
      const wait = document.hidden ? 30000 : openRef.current ? 4000 : busyLive ? 10000 : 20000;
      if (!stop) timer = setTimeout(tick, wait);
    };
    tick();
    return () => { stop = true; clearTimeout(timer); };
  }, [live.started, open, busyLive, callLive]);

  // Nobody picked up in time: offer a callback or Intercom instead
  useEffect(() => {
    if (!live.waitingSince || live.mode === 'human') return;
    const left = live.waitingSince + WAIT_FOR_PERSON_MS - Date.now();
    const t = setTimeout(() => {
      setLive((l) => ({ ...l, waitingSince: 0 }));
      setItems((cur) => [...cur, {
        role: 'assistant',
        content: TEAM_BUSY,
        intercom: true,
        ...(leadDone ? {} : { form: { interest: 'Asked to talk to a person — nobody was free in time' } }),
      }]);
    }, Math.max(0, left));
    return () => clearTimeout(t);
  }, [live.waitingSince, live.mode, leadDone]);

  const talkToPerson = async () => {
    if (live.mode === 'human' || live.waitingSince) return;
    try {
      const data = await callLive('request_human');
      if (data.mode === 'human') return;
      if (data.agentsOnline > 0) {
        setLive((l) => ({ ...l, waitingSince: Date.now() }));
        setItems((cur) => [...cur, { role: 'notice', tone: 'info', content: CONNECTING }]);
        return;
      }
    } catch { /* fall back to Intercom */ }
    openIntercom(onClose);   // nobody online: same as before
  };

  // What the AI sees: alternating user/assistant text, starting with the visitor.
  // A team member's replies count as the assistant's side.
  const history = (list) => {
    const h = [];
    for (const m of list) {
      if ((m.role === 'user' && m.failed) || !['user', 'assistant', 'agent'].includes(m.role)) continue;
      const role = m.role === 'agent' ? 'assistant' : m.role;
      const content = m.role === 'agent' ? `${m.name || 'Ojiva team'} (Ojiva team): ${m.content}` : m.content;
      const prev = h[h.length - 1];
      if (prev && prev.role === role) prev.content += `\n${content}`;
      else h.push({ role, content });
    }
    for (const m of h) m.content = m.content.slice(-(m.role === 'user' ? MAX_CHARS : 3000));
    while (h.length && (h.length > MAX_HISTORY || h[0].role !== 'user')) h.shift();
    return h;
  };

  const send = async (text) => {
    const content = text.trim().slice(0, MAX_CHARS);
    if (!content || busy) return;
    const next = [...items, { role: 'user', content }];
    setItems(next);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history(next), sessionId, page: window.location.pathname, attribution: getAttribution() }),
        signal: AbortSignal.timeout(40000),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'default');
      setLive((l) => ({ ...l, started: true, ...(data.human ? { mode: 'human' } : {}) }));
      if (data.human) return;   // a person is replying — their answer arrives via polling
      const showForm = data.showForm && !leadDone;
      setItems((cur) => [...cur, {
        role: 'assistant',
        content: data.reply || FORM_INVITE,
        ...(showForm ? { form: { interest: data.interest || '' } } : {}),
      }]);
    } catch (err) {
      // Drop the unanswered message from what the API sees, so turns still alternate.
      setItems((cur) => [
        ...cur.map((m, i) => (i === cur.length - 1 && m.role === 'user' ? { ...m, failed: true } : m)),
        { role: 'notice', content: ERRORS[err.message] || ERRORS.default },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const onLead = (index, name) => {
    setLeadDone(true);
    setItems((cur) => [
      ...cur.map((m, i) => (i === index ? { ...m, form: undefined } : m)),
      { role: 'notice', tone: 'success', content: `Thanks${name ? `, ${name.split(' ')[0]}` : ''}! Our team will call you shortly.` },
    ]);
  };

  const human = live.mode === 'human';
  const transcript = items.filter((m) => m.role === 'user').map((m) => m.content).join(' | ').slice(0, 600);
  // Whole chat (both sides) for the admin panel
  const conversation = items.filter((m) => ['user', 'assistant', 'agent'].includes(m.role)).map((m) => (
    m.role === 'agent' ? { role: 'assistant', content: `${m.name || 'Ojiva team'} (Ojiva team): ${m.content}` } : { role: m.role, content: m.content }
  ));

  return (
    <div id="aic-panel" className={`aic-panel${open ? ' is-open' : ''}${human ? ' is-human' : ''}`} role="dialog" aria-modal="false" aria-label="Ojiva AI assistant" hidden={!open}>
      <header className="aic-head">
        <span className="aic-avatar" aria-hidden="true">{human ? (live.agent || 'O').slice(0, 1).toUpperCase() : 'AI'}</span>
        <div className="aic-title">
          <strong>{human ? `${live.agent || 'Ojiva team'} · Ojiva AI` : 'Ojiva AI Assistant'}</strong>
          <small>{human ? 'A real person is replying' : live.waitingSince ? 'Connecting you with our team…' : 'Replies in English or हिंदी'}</small>
        </div>
        {!human && (
          <button type="button" className="aic-person" onClick={talkToPerson} disabled={!!live.waitingSince}>
            {live.waitingSince ? 'Connecting…' : 'Talk to a person'}
          </button>
        )}
        <button type="button" className="aic-close" onClick={onClose} aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>

      <div className="aic-list" ref={listRef} aria-live="polite">
        <div className="aic-msg aic-bot"><RichText text={GREETING} /></div>
        {!items.length && (
          <div className="aic-chips">
            {SUGGESTIONS.map((s) => <button key={s} type="button" onClick={() => send(s)}>{s}</button>)}
          </div>
        )}
        {items.map((m, i) => (
          m.role === 'notice' ? (
            <p key={i} className={`aic-notice${m.tone ? ` is-${m.tone}` : ''}`}>{m.content}</p>
          ) : (
            <div key={i} className={`aic-msg ${m.role === 'user' ? 'aic-user' : m.role === 'agent' ? 'aic-bot aic-agent' : 'aic-bot'}`}>
              {m.role === 'agent' && <span className="aic-from">{m.name || 'Ojiva team'} · Ojiva team</span>}
              {m.role === 'user' ? <p>{m.content}</p> : <RichText text={m.content} />}
              {m.form && !leadDone && <LeadForm interest={m.form.interest} transcript={transcript} messages={conversation} sessionId={sessionId} onDone={(name) => onLead(i, name)} />}
              {m.intercom && <button type="button" className="aic-intercom" onClick={() => openIntercom(onClose)}>Chat on Intercom</button>}
            </div>
          )
        ))}
        {busy && !human && <div className="aic-msg aic-bot aic-typing" aria-label="Assistant is typing"><span /><span /><span /></div>}
      </div>

      <form className="aic-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          maxLength={MAX_CHARS}
          placeholder={human ? `Message ${live.agent || 'our team'}…` : 'Type your question…'}
          aria-label="Your message"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); } }}
        />
        <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
        </button>
      </form>
      <p className="aic-foot">{human ? 'You’re chatting with the Ojiva AI team.' : 'AI answers can be wrong — our team confirms all details.'}</p>
    </div>
  );
}
