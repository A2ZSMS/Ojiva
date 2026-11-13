/**
 * Ico — renders a Bootstrap line icon in place of an emoji (Nov 2026).
 *
 * Emojis look different on every phone and read as casual, so icon-style
 * emojis across the site are drawn with the site's own icon font instead.
 * Data files keep their readable `icon: '📱'` values; this maps them here.
 *
 *   <Ico e="📱" />            → <i class="bi bi-phone ojv-ico" />
 *   <Ico e={item.icon} />     → same, from a data array
 *
 * Safe fallbacks: an emoji that is not in the map is shown as-is, and a
 * non-string value (an SVG/React icon) is returned untouched.
 *
 * Emojis inside mock chat messages are left alone on purpose — real WhatsApp
 * and RCS messages contain them.
 *
 * The `bi-*` names below are plain strings so scripts/subset-icons.mjs picks
 * them up and keeps them in the trimmed icon font.
 */
const MAP = {
  // Channels & devices
  '📱': 'bi-phone',
  '📲': 'bi-phone-vibrate',
  '💬': 'bi-chat-dots',
  '✨': 'bi-stars',
  '🎙': 'bi-mic',
  '📞': 'bi-telephone-fill',
  '📵': 'bi-telephone-x',
  '📧': 'bi-envelope',
  '📨': 'bi-envelope-paper',
  '📬': 'bi-envelope-check',
  '📭': 'bi-inbox',
  '📢': 'bi-megaphone',
  '🔔': 'bi-bell',
  '📡': 'bi-broadcast',
  '🤖': 'bi-robot',
  '👤': 'bi-person-fill',
  // Industries
  '🏦': 'bi-bank',
  '🛒': 'bi-cart3',
  '🛍': 'bi-bag',
  '🏬': 'bi-shop',
  '🏥': 'bi-hospital',
  '🎓': 'bi-mortarboard',
  '✈': 'bi-airplane',
  '🏠': 'bi-house-door',
  '🚗': 'bi-car-front',
  '🏭': 'bi-building-gear',
  '🏢': 'bi-building',
  '🎮': 'bi-controller',
  // Product & platform
  '📊': 'bi-bar-chart-line',
  '📈': 'bi-graph-up-arrow',
  '📋': 'bi-clipboard-check',
  '🔗': 'bi-link-45deg',
  '🔌': 'bi-plug',
  '🧩': 'bi-puzzle',
  '🎛': 'bi-sliders',
  '⚙': 'bi-gear',
  '🔧': 'bi-wrench-adjustable',
  '🧪': 'bi-ui-checks',
  '☁': 'bi-cloud',
  '📦': 'bi-box-seam',
  '🧠': 'bi-cpu',
  '💡': 'bi-lightbulb',
  '🔍': 'bi-search',
  '🔄': 'bi-arrow-repeat',
  '↔': 'bi-arrow-left-right',
  '⏱': 'bi-stopwatch',
  // Security & compliance
  '🔒': 'bi-lock-fill',
  '🔐': 'bi-shield-lock-fill',
  '🛡': 'bi-shield-check',
  '⚖': 'bi-patch-check',
  // Business
  '💰': 'bi-cash-coin',
  '💳': 'bi-credit-card',
  '🎯': 'bi-bullseye',
  '🚀': 'bi-rocket-takeoff',
  '⚡': 'bi-lightning-charge-fill',
  '🔥': 'bi-fire',
  '⭐': 'bi-star-fill',
  '🤝': 'bi-people-fill',
  '🌱': 'bi-flower1',
  '🎫': 'bi-ticket-perforated',
  '🔭': 'bi-binoculars',
  // Places, time, learning
  '🌐': 'bi-globe2',
  '🌍': 'bi-globe-asia-australia',
  '🗺': 'bi-map',
  '📍': 'bi-geo-alt',
  '🕐': 'bi-clock',
  '🕑': 'bi-clock',
  '📅': 'bi-calendar-event',
  '📖': 'bi-book',
  '📚': 'bi-journal-text',
  '🎬': 'bi-play-btn',
  // Status
  '✅': 'bi-check-circle-fill',
  '❌': 'bi-x-circle',
  '⚠': 'bi-exclamation-triangle-fill',
};

// Emojis often carry an invisible "variation selector" (U+FE0F) — drop it
// so '🎙️' and '🎙' find the same entry.
const clean = (s) => s.replace(/️/g, '').trim();

export default function Ico({ e, className = '', style }) {
  if (typeof e !== 'string') return e ?? null;
  const name = MAP[clean(e)];
  if (!name) return e;
  return (
    <i
      className={`bi ${name} ojv-ico${className ? ` ${className}` : ''}`}
      style={style}
      aria-hidden="true"
    />
  );
}
