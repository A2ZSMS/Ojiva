/**
 * Lead capture for the AI chat assistant (components/ui/ai-chat).
 *
 * Saved first to MySQL with the whole conversation (public/api/ai-lead.php →
 * ai_chat_leads, worked from /ai-admin/), then the same pipeline as the
 * website forms: lead-quality check → welcome SMS → TeleCRM → Web3Forms
 * email + Make.com. Stays inside the chat (no thank-you
 * redirect); pushes an `ai_chat_lead` dataLayer event so it can be set up as
 * its own conversion in GTM.
 */
import { WEB3_ACCESS_KEY, MAKE_HOOK_SERVICE, TEST_MODE_SMS_ONLY } from '@/lib/formConfig';
import { validateLead } from '@/lib/leadQuality';
import { sendLeadSms, normalizeIndianMobile } from '@/lib/sms';
import { getAttribution, fireOpenAiLeadCreated } from '@/lib/attribution';
import { fireTeleCRM } from '@/lib/telecrm';

const SOURCE = 'ai-chat';
const SAVE_ENDPOINT = '/api/ai-lead.php';

/**
 * @param {{name: string, phone: string, interest?: string, transcript?: string,
 *          messages?: {role: string, content: string}[], sessionId?: string}} lead
 * @returns {Promise<{ok: boolean, error?: string}>} error is visitor-facing text
 */
export async function submitChatLead({ name, phone, interest = '', transcript = '', messages = [], sessionId = '' }) {
  const cleanName = String(name || '').trim();
  const mobile = normalizeIndianMobile(phone);
  const check = validateLead({ name: cleanName });
  if (!check.ok) return { ok: false, error: check.reason };
  if (!mobile) return { ok: false, error: 'Please enter a valid 10-digit Indian mobile number.' };

  const message = [interest && `AI chat summary: ${interest}`, transcript && `Visitor asked: ${transcript}`]
    .filter(Boolean).join('\n').slice(0, 1000);
  const page = typeof window === 'undefined' ? '' : window.location.pathname;
  const payload = {
    name: cleanName,
    phone: mobile,
    email: '',
    company: '',
    service: 'AI Chat Enquiry',
    message,
    source: SOURCE,
    page,
    submitted_at: new Date().toISOString(),
  };

  // The admin panel's copy. A database hiccup must not lose the lead, so the
  // CRM pipeline below still runs when this fails.
  let saved = false;
  try {
    const res = await fetch(SAVE_ENDPOINT, {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: cleanName, phone: mobile, interest, messages, page, sessionId, attribution: getAttribution() }),
      signal: AbortSignal.timeout(15000),
    });
    saved = res.ok;
    if (!saved) console.warn('[AI chat] lead not saved to database:', res.status);
  } catch (e) {
    console.warn('[AI chat] lead not saved to database:', e);
  }

  // Testing on this computer must not create real CRM leads or send SMS.
  // (The local database above still gets the lead, so the admin panel can be tried.)
  if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) {
    console.warn('[AI chat] local test — CRM/SMS/email NOT sent:', payload);
    return saved ? { ok: true } : { ok: false, error: 'Could not save to the local database. Is MySQL running?' };
  }

  // Fire-and-forget, like the forms: a slow SMS gateway must never lose a lead.
  const sms = sendLeadSms({ name: cleanName, phone: mobile });
  sms.then((r) => { if (!r.ok) console.warn('[SMS] not sent:', r.error); });
  if (TEST_MODE_SMS_ONLY) {
    const r = await sms;
    return r.ok ? { ok: true } : { ok: false, error: 'Test mode: the SMS could not be sent.' };
  }

  const attr = getAttribution();
  fireTeleCRM({
    name: cleanName,
    phone: mobile,
    service: payload.service,
    source: SOURCE,
    message,
    utmSource: attr.utm_source,
    utmMedium: attr.utm_medium,
    utmCampaign: attr.utm_campaign,
    utmTerm: attr.utm_term,
    utmContent: attr.utm_content,
    gclid: attr.gclid,
    fbclid: attr.fbclid,
    landingUrl: attr._first_landing_url,
    referrerUrl: attr._first_referrer,
  });

  try {
    const [w, m] = await Promise.allSettled([
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3_ACCESS_KEY, subject: 'Lead — ojiva.ai AI chat', from_name: 'Ojiva AI Chat', redirect: 'false', ...payload }),
        signal: AbortSignal.timeout(15000),
      }).then((r) => r.json()),
      fetch(MAKE_HOOK_SERVICE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      }),
    ]);
    if ((w.status === 'fulfilled' && w.value?.success) || (m.status === 'fulfilled' && m.value?.ok)) {
      fireOpenAiLeadCreated();
      window.dataLayer?.push({ event: 'ai_chat_lead', lead_source: SOURCE, page });
      return { ok: true };
    }
  } catch { /* fall through */ }
  return { ok: false, error: 'Something went wrong. Please try again or call us.' };
}
