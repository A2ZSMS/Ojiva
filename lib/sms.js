/**
 * Lead welcome SMS.
 *
 * One export: sendLeadSms(). It posts to the same-origin PHP proxy
 * (public/api/send-sms.php), which is the only place the gateway API key
 * exists. Never call nexus.ojiva.ai from the browser — it sends no CORS
 * headers and the request is blocked.
 */

import { SMS_ENDPOINT } from '@/lib/formConfig';

/** Any Indian mobile input → bare 10 digits, or '' when it isn't valid. */
export function normalizeIndianMobile(raw) {
  let p = String(raw || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  return /^[6-9][0-9]{9}$/.test(p) ? p : '';
}

/**
 * Send the welcome SMS for one lead.
 *
 * Always resolves — an SMS failure must never block a form submission or hide
 * a lead. Inspect the returned object when you need the outcome.
 *
 * @param {{name?: string, phone: string}} lead
 * @returns {Promise<{ok: boolean, mobile: string, error?: string, gateway?: unknown}>}
 */
export async function sendLeadSms({ name, phone }) {
  const mobile = normalizeIndianMobile(phone);
  if (!mobile) return { ok: false, error: 'invalid_mobile' };

  try {
    const res = await fetch(SMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: String(name || '').trim(), phone: mobile }),
      signal: AbortSignal.timeout(20000),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.ok) {
      return { ok: false, mobile: data?.mobile || `91${mobile}`, error: data?.error || `http_${res.status}`, gateway: data?.gateway };
    }
    return { ok: true, mobile: data.mobile || `91${mobile}`, gateway: data.gateway };
  } catch (e) {
    return { ok: false, mobile: `91${mobile}`, error: e?.name === 'TimeoutError' ? 'timeout' : 'network_error' };
  }
}
