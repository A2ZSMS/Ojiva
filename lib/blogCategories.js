/**
 * Canonical blog category → accent colour map.
 *
 * Single source of truth for every place that colours a blog post by
 * category (post hero, blog listing cards, related-posts sidebar). A
 * blog whose `category` field doesn't match a key here falls back to
 * the default colour and drops out of any "same category" matching —
 * which is what silently broke the Related Blogs sidebar on the
 * Hyderabad post (it used "WhatsApp Business API" instead of the
 * established "WhatsApp API").
 *
 * To add a new category: add it here first, then use the exact same
 * string in blog.json / metadata.json. `scripts/validate-blogs.mjs`
 * checks every published post's category against BLOG_CATEGORIES and
 * fails the build if one doesn't match.
 */

// Fill colours: dots, glows and text on the DARK post hero. Channel standard
// (styles/COLORS.md): RCS is sky blue, Voice is violet (lightened to read on dark).
export const BLOG_CATEGORIES = {
  'Bulk SMS':          '#1B48E0',
  'WhatsApp API':      '#25d366',
  'WhatsApp Chatbot':  '#128C7E',
  'RCS Messaging':     '#0ea5e9',
  'Voice Call':        '#a78bfa',
  'AI & Automation':   '#00c8f8',
};

export const DEFAULT_CATEGORY_COLOR = '#1B48E0';

// Ink colours: category text on WHITE/light backgrounds (WCAG AA, ≥ 4.5:1).
export const BLOG_CATEGORY_INK = {
  'Bulk SMS':          '#1D4ED8',
  'WhatsApp API':      '#166534',
  'WhatsApp Chatbot':  '#047857',
  'RCS Messaging':     '#0369A1',
  'Voice Call':        '#6D28D9',
  'AI & Automation':   '#0E7490',
};

export const DEFAULT_CATEGORY_INK = '#1D4ED8';
