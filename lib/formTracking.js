/**
 * Form analytics — shared by every lead form.
 *
 * trackFormError(form, fields)
 *   Sends a GA4 `form_validation_error` event when a visitor presses submit
 *   but a field fails validation. Shows which fields stop people, so a drop
 *   in leads can be traced to the form instead of guessed at.
 *   Never throws and never blocks the form.
 */
export function trackFormError(form, fields) {
  if (!fields?.length) return;
  trackEvent('form_validation_error', { form_name: form, error_fields: fields.join(',') });
}

/**
 * trackEvent(name, params)
 *   Any GA4 event (e.g. popup_shown / popup_closed / popup_submit), with the
 *   current page attached. Same never-throw rule as above.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  const payload = { ...params, page_path: window.location.pathname };
  try {
    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
    else if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...payload });
  } catch { /* analytics must never break a form */ }
}
