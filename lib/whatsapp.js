/**
 * Ojiva AI — WhatsApp welcome message via AiSensy
 * Sends `ojiva_lead_welcome` template to the user after form submit.
 * Fire-and-forget — never blocks the form redirect. Silently drops
 * invalid phone numbers instead of throwing.
 */

const AISENSY_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMmQ0ZmEzMTJlMDk0MjAzNGE2YWI1NiIsIm5hbWUiOiJPaml2YSBBaSIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2YTJkNGZhMzVjZGU4NTBlZjZiYTkzMTEiLCJhY3RpdmVQbGFuIjoiQkFTSUNfTU9OVEhMWSIsImlhdCI6MTc4Njk0NDg0MH0.T0UT85gOQ9g6Gj0z0NNs45iVcLkw0YJmjgJgl_0ymSI';
const AISENSY_ENDPOINT = 'https://backend.api-wa.co/campaign/ojiva-ai/api/v2';
const AISENSY_CAMPAIGN = 'ojiva_lead_welcome';

/**
 * Clean a raw phone string to E.164 without the `+` (e.g. 919876543210).
 * Handles: +919876543210, 919876543210, 09876543210, 9876543210.
 * Returns null if the number isn't a valid Indian mobile.
 */
function toIndianE164(raw) {
  let p = String(raw || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(1);   // 091… → 91…
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);   // 09… → 9…
  if (p.length === 10 && /^[6-9]/.test(p))    p = '91' + p;     // bare 10-digit → 91…
  return p.length === 12 && /^91[6-9]/.test(p) ? p : null;
}

/** First word of the name, used to personalise the template. */
function firstName(name) {
  const s = String(name || '').trim().split(/\s+/)[0];
  return s ? s.slice(0, 40) : 'there';
}

/**
 * Send WhatsApp welcome message via AiSensy.
 * @param {string} name   Customer full name (first word is used in template)
 * @param {string} phone  Raw phone number (any format)
 * @param {string} source Where the lead came from (for AiSensy analytics)
 */
export function sendWhatsApp(name, phone, source = 'website form') {
  const destination = toIndianE164(phone);
  if (!destination) return;                       // invalid phone → skip silently

  const fName = firstName(name);

  fetch(AISENSY_ENDPOINT, {
    method:  'POST',
    keepalive: true, // survive the navigation to /thank-you
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey:              AISENSY_API_KEY,
      campaignName:        AISENSY_CAMPAIGN,
      destination,
      userName:            'Ojiva Ai',
      templateParams:      [fName],
      source,
      media:               {},
      buttons:             [],
      carouselCards:       [],
      location:            {},
      attributes:          {},
      paramsFallbackValue: { FirstName: 'there' },
    }),
  }).catch(() => { /* fire-and-forget — never block the form redirect */ });
}
