/* ─────────────────────────────────────────────────────────
   OJIVA COLOUR STANDARD — JS side
   Mirrors the tokens at the top of styles/globals.css.
   Full rules: styles/COLORS.md
───────────────────────────────────────────────────────── */

/* Brand */
export const BRAND = {
  blue: '#1B48E0',
  violet: '#7C3AED',
  cyan: '#00C8F8',
};

/* Decorative icons (anything that isn't a channel) — one brand tint.
   tile = icon background: a soft blue -> violet wash (the --grad-primary hues)
   with a hairline ring, so sets of icons have depth instead of a flat tint.
   bg   = flat tint for small chips/tags. */
export const ICON = {
  fg: '#1B48E0',
  bg: 'rgba(27,72,224,0.08)',
  tile: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.13) 100%)',
  fgDark: '#93C5FD',            // on dark sections
  bgDark: 'rgba(96,165,250,0.14)',
};

/* Channel colours — use ONLY when the item represents that channel.
   fill = icons, bars, dots, borders · ink = text/links on white (AA contrast) */
export const CHANNEL = {
  sms:      { fill: '#3B82F6', ink: '#1D4ED8' },
  whatsapp: { fill: '#25D366', ink: '#166534' },
  rcs:      { fill: '#0EA5E9', ink: '#0369A1' },
  voice:    { fill: '#8B5CF6', ink: '#6D28D9' },
  otp:      { fill: '#F59E0B', ink: '#B45309' },
  chatbot:  { fill: '#10B981', ink: '#047857' },
};
