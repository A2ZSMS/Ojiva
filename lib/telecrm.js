const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';

// Lead Source → "Website" (5th option in TeleCRM Lead Source dropdown)
const LEAD_SOURCE_WEBSITE = 5;

// Service Interested option IDs (order matches TeleCRM field editor)
// 1=WhatsApp API, 2=Bulk SMS, 3=RCS Messaging, 4=OTP Service,
// 5=AI Voice, 6=WhatsApp Chatbot, 7=Book Demo, 8=General Enquiry
const SERVICE_MAP = {
  'whatsapp-api':     1,
  'whatsapp':         1,
  'bulk-sms':         2,
  'sms':              2,
  'rcs':              3,
  'rcs-messaging':    3,
  'otp':              4,
  'voice':            5,
  'chatbot':          6,
  'whatsapp-chatbot': 6,
  'book-demo':        7,
  'contact-us':       8,
};

function cleanPhone(raw) {
  let p = String(raw || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  return p.length === 10 && /^[6-9]/.test(p) ? '91' + p : null;
}

export async function sendToTeleCRM(name, phone, email, source) {
  const mobile = cleanPhone(phone);
  if (!mobile) return;
  await fetch(TELECRM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TELECRM_TOKEN}`,
    },
    body: JSON.stringify({
      fields: {
        name:               String(name  || '').trim().slice(0, 100) || 'Unknown',
        phone:              mobile,
        email:              String(email || '').trim().toLowerCase(),
        lead_source:        LEAD_SOURCE_WEBSITE,
        service_interested: SERVICE_MAP[source] ?? 8,
      },
    }),
  });
}
