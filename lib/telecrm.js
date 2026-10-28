/**
 * TeleCRM lead push — shared by every lead form and the AI chat.
 * Fire-and-forget: never blocks or fails a submission.
 */
const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
export function fireTeleCRM({ name, phone, email, company, service, source, message, volume, industry, companySize, preferredTime, subject, priority, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, gclid, fbclid, landingUrl, referrerUrl }) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  const fields = {
    name:  String(name || '').trim() || 'Unknown',
    phone: p,
    email: String(email || '').trim().toLowerCase(),
  };
  const put = (val, keys) => { if (val === undefined || val === null || val === '') return; const v = typeof val === 'number' ? val : String(val).trim(); if (v === '' && v !== 0) return; keys.forEach(k => { fields[k] = v; }); };
  put(company,       ['companyName', 'company_name', 'company', 'Company Name']);
  put(service,       ['serviceInterested', 'service_interested', 'service', 'Service Interested']);
  put(source,        ['source', 'Source']);
  put(message,       ['remark', 'Remark']);
  put(volume,        ['monthlyVolume', 'monthly_volume', 'monthly customer messaging volume']);
  put(industry,      ['Industry', 'industry']);
  put(companySize,   ['companySize', 'company_size', 'Company Size']);
  put(preferredTime, ['preferredTime', 'preferred_time', 'Preferred Time']);
  put(subject,       ['Subject', 'subject']);
  put(priority,      ['Priority', 'priority']);
  put(utmSource,     ['utmSource',   'utm_source',   'UTM Source']);
  put(utmMedium,     ['utmMedium',   'utm_medium',   'UTM Medium']);
  put(utmCampaign,   ['utmCampaign', 'utm_campaign', 'UTM Campaign']);
  put(utmTerm,       ['utmTerm',     'utm_term',     'UTM Term']);
  put(utmContent,    ['utmContent',  'utm_content',  'UTM Content']);
  put(gclid,         ['gclid',       'googleClickId','Google Click ID']);
  put(fbclid,        ['fbclid',      'metaClickId',  'Meta Click ID']);
  put(landingUrl,    ['landingUrl',  'landing_url',  'Landing URL']);
  put(referrerUrl,   ['referrerUrl', 'referrer_url', 'Referrer URL']);
  fetch(TELECRM_API, {
    method: 'POST', keepalive: true,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields }),
  }).then(r => r.text()).then(t => console.log('[TeleCRM] status OK, response:', t)).catch(e => console.error('[TeleCRM] error:', e));
}
