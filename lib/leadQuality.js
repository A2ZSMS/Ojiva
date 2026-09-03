/**
 * lib/leadQuality.js
 *
 * Single source of truth for lead-quality filtering across every form.
 *
 * Two exports:
 *   validateLead(payload) → { ok, reason }
 *     Hard-blocks obvious junk BEFORE anything fires (TeleCRM/WhatsApp/Make/Web3Forms).
 *     If !ok, the form should show `reason` to the user and NOT submit.
 *
 *   scoreLead(payload) → { score, tier, sourceSuffix, remarkPrefix }
 *     Runs after validateLead passes. Assigns a 0–100 quality score.
 *       tier "high"   (≥60) → source stays as-is, no remark prefix
 *       tier "review" (30–59) → source gets "-review" suffix, remark gets "[Auto-flagged: X/100]" prefix
 *     (Anything below 30 is already caught by validateLead — never reaches scoring.)
 */

/* ── Name blocklist ──────────────────────────────────────── */
const NAME_BLOCKLIST = new Set([
  'test', 'testing', 'testuser', 'test user',
  'abc', 'xyz', 'abcd', 'abcde',
  'qwerty', 'qwertyuiop', 'asdf', 'asdfgh', 'zxcv', 'zxcvbn',
  'admin', 'administrator', 'root',
  'user', 'guest', 'sample',
  'demo', 'demo user', 'demouser',
  'hi', 'hello', 'hey', 'na', 'n/a', 'none', 'nil', 'null',
  'unknown', 'anonymous',
  'a', 'aa', 'aaa', 'aaaa',
]);

const KEYBOARD_MASH_PATTERNS = [
  /^(.)\1{3,}$/i,                                // aaaa, bbbb, 1111
  /qwerty|asdfgh|zxcvbn|qazwsx|123456|abcdef/i,  // keyboard rows
];

/* ── Message blocklist (regex, case-insensitive) ─────────── */
const WHATSAPP_UNBAN_PATTERNS = [
  /\bun[ -]?ban\b/i,
  /\bbanned\b/i,
  /\bblock(ed)?\b.{0,20}\b(whatsapp|account|number)\b/i,
  /\b(whatsapp|account|number)\b.{0,20}\bblock(ed)?\b/i,
  /\brestore\b.{0,20}\b(whatsapp|account|number)\b/i,
  /\brecover(y)?\b.{0,20}\b(whatsapp|account|number)\b/i,
  /\bnumber ban\b/i,
];

const JOB_SEEKER_PATTERNS = [
  /\b(looking|need|want|searching)\b.{0,15}\bjob\b/i,
  /\bhiring\b/i,
  /\binternship\b/i,
  /\b(my|our)\s+(resume|cv)\b/i,
  /\bcareer\s+opportun/i,
  /\b(want|like)\s+to\s+work\s+(with|for|at)\b/i,
  /\bfresher\b.{0,20}\b(job|opportunity|role)\b/i,
  /\bplease\s+(hire|consider)\s+me\b/i,
];

const WRONG_SERVICE_PATTERNS = [
  /instagram\s+followers/i,
  /youtube\s+(subscribers|views|likes)/i,
  /facebook\s+(likes|followers|page\s+likes)/i,
  /twitter\s+followers/i,
  /\bseo\b.{0,25}\b(ranking|first\s+page|top)\b/i,
  /google\s+(first\s+page|top\s+ranking|1st\s+page)/i,
  /website\s+(design|development)/i,
  /logo\s+design/i,
  /app\s+development/i,
];

const GREETING_ONLY = /^[\s.!?]*(hi|hello|hey|namaste|test|check|testing|please|thanks|thank\s+you|ok|okay|hmm|yes|no)[\s.!?]*$/i;

/* ── Email disposable-domain blocklist ────────────────────── */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com', 'tempmail.com', 'temp-mail.org', 'guerrillamail.com',
  '10minutemail.com', 'throwaway.email', 'yopmail.com', 'sharklasers.com',
  'getnada.com', 'trashmail.com', 'maildrop.cc', 'fakeinbox.com',
  'dispostable.com', 'mintemail.com', 'moakt.com', 'mytemp.email',
  'tempinbox.com', 'discard.email',
]);

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.in',
  'outlook.com', 'hotmail.com', 'live.com',
  'rediffmail.com', 'rediff.com',
  'aol.com', 'icloud.com', 'me.com',
  'protonmail.com', 'zoho.com',
]);

/* ── Company blocklist ──────────────────────────────────── */
const COMPANY_BLOCKLIST = new Set([
  'test', 'testing', 'abc', 'xyz', 'personal', 'individual',
  'self', 'me', 'myself', 'n/a', 'na', 'none', 'nil', 'null',
  'no company', 'not applicable', '-', '.', 'demo', 'sample',
]);

/* ── Helpers ─────────────────────────────────────────────── */
const norm = (s) => String(s || '').trim().toLowerCase();

function emailDomain(email) {
  const at = String(email || '').lastIndexOf('@');
  return at === -1 ? '' : email.slice(at + 1).toLowerCase().trim();
}

function isKeyboardMash(name) {
  const s = String(name || '').trim().toLowerCase();
  if (!s) return false;
  return KEYBOARD_MASH_PATTERNS.some((rx) => rx.test(s));
}

function anyMatch(text, patterns) {
  const s = String(text || '');
  return patterns.some((rx) => rx.test(s));
}

/* ── Public: validateLead ────────────────────────────────── */
export function validateLead({ name, email, company, message } = {}) {
  const n = norm(name);
  const c = norm(company);
  const m = String(message || '').trim();
  const domain = emailDomain(email);

  if (!n || n.length < 2)          return reject('Please enter your full name.');
  if (NAME_BLOCKLIST.has(n))       return reject('Please enter your real name so our team can help you better.');
  if (/\d/.test(n))                return reject('Please enter your real name (no numbers).');
  if (isKeyboardMash(n))           return reject('Please enter your real name so our team can help you better.');

  if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return reject('Please use a valid work or personal email address.');
  }

  if (c) {
    if (COMPANY_BLOCKLIST.has(c))  return reject('Please enter your real company or organisation name.');
    if (c === n)                   return reject('Please enter your company name (not your personal name).');
  }

  if (m) {
    if (anyMatch(m, WHATSAPP_UNBAN_PATTERNS))  return reject('We do not offer WhatsApp account recovery or unban services. Please contact Meta / WhatsApp support directly.');
    if (anyMatch(m, JOB_SEEKER_PATTERNS))      return reject('For career opportunities please write to careers@ojiva.ai. This form is for business enquiries only.');
    if (anyMatch(m, WRONG_SERVICE_PATTERNS))   return reject('We provide bulk SMS, WhatsApp Business API, RCS and voice messaging for businesses. Please share how these services fit your requirement.');
    if (GREETING_ONLY.test(m))                 return reject('Please share a few details about your business requirement so our team can help you better.');
  }

  return { ok: true, reason: '' };
}

function reject(reason) {
  return { ok: false, reason };
}

/* ── Public: scoreLead ───────────────────────────────────── */
export function scoreLead({ name, email, company, service, message, volume } = {}) {
  const n = norm(name);
  const c = norm(company);
  const s = String(service || '').trim();
  const m = String(message || '').trim();
  const v = String(volume || '').trim();
  const domain = emailDomain(email);

  let score = 0;

  if (c && c.length >= 3 && !COMPANY_BLOCKLIST.has(c) && c !== n) score += 25;
  if (s && s.toLowerCase() !== 'not specified')                   score += 20;
  if (m.length >= 30)                                             score += 25;
  else if (m.length >= 15)                                        score += 10;
  if (v)                                                          score += 15;
  if (domain && !FREE_EMAIL_DOMAINS.has(domain) && !DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    score += 15;
  }

  if (score > 100) score = 100;

  const tier         = score >= 60 ? 'high' : 'review';
  const sourceSuffix = tier === 'review' ? '-review' : '';
  const remarkPrefix = tier === 'review' ? `[Auto-flagged: quality ${score}/100] ` : '';

  return { score, tier, sourceSuffix, remarkPrefix };
}
