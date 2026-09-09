'use client';

/**
 * NotFoundFinder — the useful half of the 404 page.
 *
 *  1. Reads the URL the visitor actually tried (Apache serves 404.html at the
 *     original address, so window.location still holds it).
 *  2. Fuzzy-matches it against every page + blog and shows the closest hits
 *     ("Did you mean…"). Common slips are auto-fixed first: /blog/ → /blogs/,
 *     .html suffixes, capitals, trailing slashes.
 *  3. Live client-side search over the same index — the site has no search
 *     elsewhere, and this costs zero network requests.
 *  4. Logs a `page_not_found` event to GA4 with the bad path + referrer, so the
 *     team can see which inbound links are broken. GA4 only — never the
 *     Make/TeleCRM hooks, so it can't pollute the lead pipeline.
 */

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { LuSearch, LuCornerDownRight, LuCopy, LuCheck, LuSparkles } from 'react-icons/lu';
import styles from './not-found.module.css';

/* ── URL normalisation ─────────────────────────────────────── */
const normPath = (s) => {
  let p = String(s || '').toLowerCase().split(/[?#]/)[0];
  p = p.replace(/\.(html?|php|aspx?)$/i, '').replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  return p || '/';
};

// Prefix slips people commonly make. Checked before fuzzy matching.
const PREFIX_FIXES = [
  [/^\/blog\//, '/blogs/'],
  [/^\/article(s)?\//, '/blogs/'],
  [/^\/post(s)?\//, '/blogs/'],
  [/^\/solution\//, '/solutions/'],
  [/^\/industry\//, '/solutions/'],
  [/^\/industries\//, '/solutions/'],
  [/^\/service(s)?\//, '/'],
  [/^\/product(s)?\//, '/'],
];

/* ── Similarity ───────────────────────────────────────────── */
const tokensOf = (s) => normPath(s).split(/[\/\-_\s.]+/).filter((t) => t.length > 1);
const bigrams  = (s) => {
  const t = String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
  const set = new Set();
  for (let i = 0; i < t.length - 1; i++) set.add(t.slice(i, i + 2));
  return set;
};
const dice = (a, b) => {
  if (!a.size || !b.size) return 0;
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return (2 * n) / (a.size + b.size);
};

function scoreEntry(path, entry) {
  const p = normPath(path);
  const h = normPath(entry.href);
  if (p === h) return 1;
  const pLast = p.split('/').pop() || p;
  const hLast = h.split('/').pop() || h;
  const bg = dice(bigrams(pLast), bigrams(hLast));
  const pt = new Set(tokensOf(p));
  const ht = new Set([...tokensOf(h), ...tokensOf(entry.title)]);
  let overlap = 0;
  for (const t of pt) if (ht.has(t)) overlap++;
  const tok = pt.size ? overlap / pt.size : 0;
  return 0.6 * bg + 0.4 * tok;
}

function suggestFor(path, index) {
  const p = normPath(path);
  const byHref = new Map(index.map((e) => [normPath(e.href), e]));

  // 1. Exact after normalisation (e.g. /Contact.html → /contact)
  if (byHref.has(p)) return [{ ...byHref.get(p), score: 1, fixed: true }];

  // 2. Known prefix slips
  for (const [rx, repl] of PREFIX_FIXES) {
    if (rx.test(p)) {
      const fixed = normPath(p.replace(rx, repl));
      if (byHref.has(fixed)) return [{ ...byHref.get(fixed), score: 1, fixed: true }];
    }
  }

  // 3. Fuzzy
  return index
    .map((e) => ({ ...e, score: scoreEntry(p, e) }))
    .filter((e) => e.score >= 0.28 && normPath(e.href) !== '/')
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function searchIndex(q, index) {
  const query = q.trim().toLowerCase();
  if (query.length < 2) return [];
  const qTokens = query.split(/\s+/).filter(Boolean);
  return index
    .map((e) => {
      const hay = `${e.title} ${e.href} ${e.tags || ''}`.toLowerCase();
      const hayTokens = new Set(hay.split(/[\s\/\-_&,]+/));
      let s = 0;
      if (e.title.toLowerCase().startsWith(query)) s += 3;
      if (hay.includes(query)) s += 2;
      for (const t of qTokens) {
        if (hayTokens.has(t)) s += 1;
        else if ([...hayTokens].some((w) => w.startsWith(t))) s += 0.5;
      }
      return { ...e, s };
    })
    .filter((e) => e.s > 0)
    .sort((a, b) => b.s - a.s || a.title.localeCompare(b.title))
    .slice(0, 7);
}

/* ── Component ───────────────────────────────────────────── */
export default function NotFoundFinder({ index }) {
  const [tried, setTried]       = useState('');
  const [fromHost, setFromHost] = useState('');
  const [copied, setCopied]     = useState(false);
  const [q, setQ]               = useState('');

  useEffect(() => {
    try {
      const path = window.location.pathname + window.location.search;
      setTried(path);

      // Where did they come from? Only show if it's another site.
      try {
        const ref = document.referrer;
        if (ref) {
          const host = new URL(ref).hostname.replace(/^www\./, '');
          if (host && host !== window.location.hostname.replace(/^www\./, '')) setFromHost(host);
        }
      } catch {}

      // Telemetry → GA4 (and GTM dataLayer as a fallback). Never the lead hooks.
      const payload = {
        page_path:     path,
        page_referrer: document.referrer || '(direct)',
        page_title:    '404 — Page Not Found',
      };
      if (typeof window.gtag === 'function') window.gtag('event', 'page_not_found', payload);
      else if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: 'page_not_found', ...payload });
    } catch {}
  }, []);

  const suggestions = useMemo(() => (tried ? suggestFor(tried, index) : []), [tried, index]);
  const results     = useMemo(() => searchIndex(q, index), [q, index]);
  const best        = suggestions[0];
  const confident   = best && best.score >= 0.9;

  const copyPath = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className={styles.finder}>
      {/* What they typed */}
      {tried && (
        <div className={styles.tried}>
          <span className={styles.triedLabel}>You tried</span>
          <code className={styles.triedPath} title={tried}>{tried}</code>
          <button type="button" className={styles.copyBtn} onClick={copyPath} aria-label="Copy this URL">
            {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          {fromHost && <span className={styles.fromHost}>via <b>{fromHost}</b> — that link may be out of date</span>}
        </div>
      )}

      {/* Did you mean */}
      {suggestions.length > 0 && (
        <div className={styles.suggestions} role="region" aria-label="Suggested pages">
          <p className={styles.suggestTitle}>
            <LuSparkles aria-hidden="true" />
            {confident ? 'Looks like you meant' : 'Did you mean'}
          </p>
          <ol className={styles.suggestList}>
            {suggestions.map((s, i) => (
              <li key={s.href}>
                <Link href={s.href} className={`${styles.suggestion} ${i === 0 && confident ? styles.suggestionBest : ''}`}>
                  <LuCornerDownRight aria-hidden="true" />
                  <span className={styles.suggestText}>
                    <strong>{s.title}</strong>
                    <small>{s.href}</small>
                  </span>
                  <em className={styles.suggestGroup}>{s.group}</em>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Search */}
      <div className={styles.search}>
        <label htmlFor="nf-search" className={styles.searchLabel}>
          <LuSearch aria-hidden="true" />
          <span>Search every page and article</span>
        </label>
        <input
          id="nf-search"
          type="search"
          className={styles.searchInput}
          placeholder="e.g. WhatsApp pricing, DLT registration, RCS…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        <div className={styles.results} aria-live="polite">
          {q.trim().length >= 2 && results.length === 0 && (
            <p className={styles.empty}>Nothing matched “{q.trim()}”. Try a shorter word, or <Link href="/contact/">ask our team</Link>.</p>
          )}
          {results.length > 0 && (
            <ul className={styles.resultList}>
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className={styles.result}>
                    <span className={styles.resultText}>
                      <strong>{r.title}</strong>
                      <small>{r.href}</small>
                    </span>
                    <em className={styles.resultGroup}>{r.group}</em>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
