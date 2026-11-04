/**
 * Lead capture for the lead popup (components/ui/lead-popup).
 *
 * Same pipeline as the website forms: basic name/mobile check → welcome SMS
 * → TeleCRM → Web3Forms email + Make.com (service hook). The popup redirects
 * to the service thank-you page on success, so the existing Google Ads / GA4
 * thank-you conversion counts popup leads too.
 *
 * On localhost nothing is sent (no CRM lead, SMS, email or Make run): the
 * payload is logged and { ok: true, test: true } is returned, so the popup can
 * be tried safely on a dev machine.
 */
import { WEB3_ACCESS_KEY, MAKE_HOOK_SERVICE, TEST_MODE_SMS_ONLY } from '@/lib/formConfig';
import { sendLeadSms, normalizeIndianMobile } from '@/lib/sms';
import { getAttribution, fireOpenAiLeadCreated } from '@/lib/attribution';
import { fireTeleCRM } from '@/lib/telecrm';

/**
 * @param {{name: string, phone: string, service?: string, serviceLabel?: string, source: string}} lead
 * @returns {Promise<{ok: boolean, test?: boolean, error?: string}>} error is visitor-facing text
 */
export async function submitPopupLead({ name, phone, service = '', serviceLabel = '', source }) {
  const cleanName = String(name || '').trim();
  const mobile = normalizeIndianMobile(phone);
  if (cleanName.length < 2) return { ok: false, error: 'Please enter your name.' };
  if (!mobile) return { ok: false, error: 'Please enter a 10-digit mobile number.' };

  const page = window.location.pathname;
  const payload = {
    name: cleanName,
    phone: mobile,
    email: '',
    company: '',
    service: service || 'not-sure',
    message: `Popup lead from ${page}`,
    source,
    page,
    submitted_at: new Date().toISOString(),
  };

  // Testing on this computer must not create real CRM leads or send SMS.
  if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) {
    console.warn('[Popup] local test — CRM/SMS/email NOT sent:', payload);
    return { ok: true, test: true };
  }

  // Fire-and-forget, like the forms: a slow SMS gateway must never lose a lead.
  const sms = sendLeadSms({ name: cleanName, phone: mobile });
  sms.then((r) => { if (!r.ok) console.warn('[SMS] not sent:', r.error); });
  if (TEST_MODE_SMS_ONLY) {
    const r = await sms;
    return r.ok ? { ok: true, test: true } : { ok: false, error: 'Test mode: the SMS could not be sent.' };
  }

  const attr = getAttribution();
  fireTeleCRM({
    name: cleanName,
    phone: mobile,
    service: serviceLabel || 'General Enquiry',
    source,
    message: payload.message,
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
        body: JSON.stringify({ access_key: WEB3_ACCESS_KEY, subject: `Lead — ojiva.ai popup (${page})`, from_name: 'Ojiva AI Popup', redirect: 'false', ...payload }),
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
      return { ok: true };
    }
  } catch { /* fall through */ }
  return { ok: false, error: 'Something went wrong. Please try again or call us.' };
}
