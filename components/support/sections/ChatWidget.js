'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOT_REPLIES = [
  'Great question! Our team will get back to you within 1 hour for enterprise plans. 🚀',
  'I can see your account. Let me pull up the details for you right now...',
  'For urgent issues, you can also call us at +91 84310 86185. Our engineers are standing by!',
  'I\'ve flagged this to a senior engineer. You\'ll receive an email update shortly. ✅',
  'That\'s a known issue we\'re tracking. Estimated resolution: ~2 hours. We\'ll notify you.',
];

/** Animated typing dots */
function TypingDots() {
  return (
    <span className="sp-typing-dots">
      <span /><span /><span />
    </span>
  );
}

/** Live chat widget */
export default function ChatWidget() {
  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState([
    { from: 'bot', text: 'Hi! 👋 I\'m the Ojiva AI support bot. How can I help you today?' },
  ]);
  const [input, setInput]   = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef           = useRef(null);

  const sendMsg = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      setMsgs(prev => [...prev, { from: 'bot', text: reply }]);
    }, 1500);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  return (
    <div className="sp-chat-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="sp-chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="sp-chat-header">
              <div className="sp-chat-avatar">🤖</div>
              <div>
                <p className="sp-chat-name">Ojiva Support</p>
                <p className="sp-chat-status"><span className="sp-online-dot" />Online now</p>
              </div>
              <button className="sp-chat-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="sp-chat-body">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  className={`sp-chat-msg ${m.from}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <div className="sp-chat-msg bot">
                  <TypingDots />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="sp-chat-input-row">
              <input
                className="sp-chat-input"
                placeholder="Type your message…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMsg()}
              />
              <button className="sp-chat-send" onClick={sendMsg}>→</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="sp-chat-fab"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{open ? '✕' : '💬'}</span>
        {!open && <span className="sp-chat-fab-badge">1</span>}
      </motion.button>
    </div>
  );
}
