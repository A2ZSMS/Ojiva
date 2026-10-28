/* Ojiva AI admin — live chat in the browser (no libraries).
   1. Menu badge: visitors waiting for a person, with a short beep (every page).
   2. Live page: refreshes the list of current chats.
   3. Conversation page: new messages, take over / reply / hand back. */
(() => {
  'use strict';
  const csrf = document.querySelector('meta[name="csrf"]')?.content || '';
  // On failure, reject with the HTTP status and the server's own message
  const api = (query, body) => fetch(`live-api.php${query}`, body
    ? { method: 'POST', headers: { 'X-CSRF': csrf }, body, credentials: 'same-origin' }
    : { credentials: 'same-origin' }
  ).then(async (r) => {
    if (r.ok) return r.json();
    const text = (await r.text().catch(() => '')).trim();
    let msg = text;
    try { msg = JSON.parse(text).error || text; } catch { /* plain text */ }
    return Promise.reject({ status: r.status, msg: msg.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 200) });
  });
  const failed = (what) => (e) => alert(`${what} (${e?.status || 'network'}${e?.msg ? `: ${e.msg}` : ''}). Please refresh and try again.`);
  const every = (ms, fn) => {
    let t;
    const run = async () => {
      try { await fn(); } catch { /* next round */ }
      t = setTimeout(run, document.hidden ? Math.max(ms, 10000) : ms);
    };
    run();
    return () => clearTimeout(t);
  };

  /* 1 — waiting visitors badge + sound */
  const badge = document.querySelector('[data-live-badge]');
  const baseTitle = document.title;
  let lastWaiting = Number(sessionStorage.getItem('ojiva-admin-waiting') || 0);
  const beep = () => {
    try {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.15, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.4);
    } catch { /* sound blocked until the page is clicked once */ }
  };
  if (badge) {
    every(15000, async () => {
      const { waiting } = await api('?count=1');
      badge.hidden = !waiting;
      badge.textContent = waiting;
      document.title = waiting ? `(${waiting}) Visitor waiting · ${baseTitle}` : baseTitle;
      if (waiting > lastWaiting) beep();
      lastWaiting = waiting;
      sessionStorage.setItem('ojiva-admin-waiting', String(waiting));
    });
  }

  /* 2 — live list */
  const list = document.querySelector('[data-live-list]');
  if (list) {
    every(5000, async () => {
      const r = await fetch(list.dataset.src, { credentials: 'same-origin' });
      if (r.ok) list.innerHTML = await r.text();   // server-rendered, already escaped
    });
  }

  /* 3 — one conversation */
  const chat = document.querySelector('[data-live-chat]');
  if (!chat) return;
  const id = chat.dataset.session;
  let last = Number(chat.dataset.last || 0);
  const bar = document.querySelector('[data-live-bar]');
  const state = bar.querySelector('[data-live-state]');
  const visitorDot = bar.querySelector('[data-live-visitor]');
  const takeBtn = bar.querySelector('[data-live-action="takeover"]');
  const backBtn = bar.querySelector('[data-live-action="handback"]');
  const form = document.querySelector('[data-live-reply]');
  const box = form.querySelector('textarea');

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const LABEL = { user: 'Visitor', assistant: 'AI assistant' };
  const CLASS = { user: 'from-visitor', agent: 'from-agent', assistant: 'from-ai' };

  const addMessage = (m) => {
    if (m.role === 'system' || m.role === 'note') {
      const p = el('p', 'chat-event', `${m.content} `);
      p.append(el('small', '', m.time));
      chat.append(p);
      return;
    }
    const b = el('div', `bubble ${CLASS[m.role]}${m.error ? ' is-error' : ''}`);
    const who = m.role === 'agent' ? `${m.name || 'Team'} (team)` : LABEL[m.role];
    b.append(el('small', '', `${who} · ${m.time}${m.secs ? ` · ${m.secs} s` : ''}`));
    b.append(el('p', '', m.content));
    if (m.form) b.append(el('span', 'tag tag-lead', 'Showed callback form'));
    chat.append(b);
  };

  const render = (d) => {
    const nearBottom = chat.scrollHeight - chat.scrollTop - chat.clientHeight < 120;
    for (const m of d.messages || []) {
      if (m.id <= last) continue;
      addMessage(m);
      last = m.id;
    }
    if (d.messages?.length && nearBottom) chat.scrollTop = chat.scrollHeight;

    const human = d.mode === 'human';
    state.textContent = human
      ? (d.mine ? 'You are replying to this visitor. The AI is paused.' : `${d.agent} is replying to this visitor.`)
      : (d.wantsHuman ? 'The visitor asked to talk to a person. Take over to reply.' : 'The AI is answering. Take over to reply yourself.');
    state.classList.toggle('is-alert', !human && d.wantsHuman);
    takeBtn.hidden = human && d.mine;
    takeBtn.textContent = human ? `Take over from ${d.agent}` : 'Take over chat';
    backBtn.hidden = !human;
    form.hidden = !(human && d.mine);
    visitorDot.hidden = !d.visitorOnline;
  };

  const poll = () => api(`?session=${id}&after=${last}`).then(render);
  every(3000, poll);
  chat.scrollTop = chat.scrollHeight;

  const post = (action, extra = {}) => {
    const body = new FormData();
    body.set('csrf', csrf);   // in the body too: some hosts/CDNs strip custom headers
    body.set('session', id);
    body.set('action', action);
    body.set('after', String(last));
    for (const [k, v] of Object.entries(extra)) body.set(k, v);
    return api('', body).then(render);
  };

  takeBtn.addEventListener('click', () => post('takeover').then(() => box.focus()).catch(failed('Could not take over')));
  backBtn.addEventListener('click', () => post('handback').catch(failed('Could not hand back')));

  const send = () => {
    const text = box.value.trim();
    if (!text) return;
    box.disabled = true;
    post('send', { text })
      .then(() => { box.value = ''; })
      .catch((e) => (e?.status === 409 ? alert('Someone else has this chat now. Take over again to reply.') : failed('Message not sent')(e)))
      .finally(() => { box.disabled = false; box.focus(); });
  };
  form.addEventListener('submit', (e) => { e.preventDefault(); send(); });
  box.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } });
})();
