/**
 * Ojiva AI — WhatsApp confirmation utility
 * Sends ojiva_enquiry_confirmation template to the user after form submit.
 * Fire-and-forget — never blocks the form redirect.
 */

const OMNLY_AUTHKEY    = 'd97b19e0a49d493f';
const OMNLY_WID        = '36624';
const OMNLY_TEMPLATE   = 'ojiva_enquiry_confirmation';
const OMNLY_API        = 'https://panel.omnly.in/restapi/bulkwp_json.php';

/**
 * Clean phone to 10-digit Indian mobile number.
 * Handles: +919876543210, 919876543210, 09876543210, 9876543210
 */
function cleanPhone(raw) {
  let p = String(raw || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  return p.length === 10 && /^[6-9]/.test(p) ? p : null;
}

/**
 * Send WhatsApp confirmation message.
 * @param {string} name  - Customer name (used as template param 1)
 * @param {string} phone - Raw phone number (any format)
 */
export async function sendWhatsApp(name, phone) {
  const mobile = cleanPhone(phone);
  if (!mobile) return; // invalid number — skip silently

  const safeName = String(name || 'Customer').trim().slice(0, 100) || 'Customer';

  await fetch(OMNLY_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      version:         '1.0',
      authkey:         OMNLY_AUTHKEY,
      encrpt:          '0',
      wid:             OMNLY_WID,
      country_code:    '91',
      type:            'media',
      dynamic_content: '1',
      is_fallback:     0,
      messages: [{
        dest:         [mobile],
        param:        { '1': safeName },
        headerValues: { headerFileName: '', headerData: '' },
      }],
    }),
  });
}
