# Ojiva AI — Colour Standard

One palette for the whole site. Every colour below is defined once:

- **CSS:** tokens in `:root` at the top of `styles/globals.css`; final rules in the
  "OJIVA COLOUR STANDARD — final layer" block at the end of that file.
- **JS** (components that colour items in code): `lib/colors.js` (`BRAND`, `ICON`, `CHANNEL`).

Don't type new hex values into components. Pick from this list.

---

## 1. Brand

| Token | Value | Use |
|---|---|---|
| `--brand-blue` | `#1B48E0` | Main brand colour: links, icons, active states, prices |
| `--brand-violet` | `#7C3AED` | Secondary accent, only paired with blue (gradients, small highlights) |
| `--brand-cyan` | `#00C8F8` | Logo and highlights on **dark** backgrounds only. Never small text on white |
| `--logo-gradient` | cyan → blue | The logo only |

## 2. Gradients (only these three)

| Token | Value | Use |
|---|---|---|
| `--grad-primary` | `#2563EB → #7C3AED` (135°) | **Every primary button.** Same as the home banner's "Talk to Sales" |
| `--grad-text-light` | `#1B48E0 → #6D28D9` | Highlighted words in headings on **white/light** sections (`.text-grad`) |
| `--grad-text-dark` | `#00C8F8 → #818CF8 → #A78BFA` | Highlighted words on **dark navy** sections and heroes |

Highlighted words: use `<span className="text-grad">…</span>`. It switches to the dark
gradient automatically inside `h1` heroes and dark sections. No italics, no other
gradients, at most one highlighted phrase per heading.

## 3. Buttons

- **Primary** (one per view, the main action): `.btn-ojiva-primary` → `--grad-primary`, white text.
  The header "Book a Demo" (`a.nav-cta`) uses the same gradient in its pill shape.
- **Secondary**: outline style (`.btn-ojiva-outline`, `.btn-hs-outline` on dark).
- Channel pages (SMS, WhatsApp, RCS, Voice) use the **same** primary button. The channel
  colour goes in the hero's key phrase, badge and glow, not the button.
- Real "chat on WhatsApp" actions may use WhatsApp green (`.ty-wa-btn`).

## 4. Channel colours: only when the item *is* that channel

| Channel | Fill (icons, bars, dots, borders) | Ink (text/links on white, AA) |
|---|---|---|
| SMS | `--ch-sms` `#3B82F6` | `--ch-sms-ink` `#1D4ED8` |
| WhatsApp | `--ch-whatsapp` `#25D366` | `--ch-whatsapp-ink` `#166534` |
| RCS | `--ch-rcs` `#0EA5E9` | `--ch-rcs-ink` `#0369A1` |
| Voice | `--ch-voice` `#8B5CF6` | `--ch-voice-ink` `#6D28D9` |
| OTP | `--ch-otp` `#F59E0B` | `--ch-otp-ink` `#B45309` |
| WhatsApp Chatbot | `--ch-chatbot` `#10B981` | `--ch-chatbot-ink` `#047857` |

Rules:
- Fill colours never carry small text on white (green, sky and amber fail contrast). Use the ink.
- On a channel's own page, its feature cards use that one channel colour, not a rainbow.
- RCS is **sky blue**, not orange.

## 5. Decorative icons (anything that isn't a channel)

| Token | Value | Use |
|---|---|---|
| `--icon-fg` on `--icon-tile` | `#1B48E0` on a soft blue → violet wash (`ICON.tile` in JS), with a hairline brand ring | Icon tiles on light sections |
| `--icon-bg` | `rgba(27,72,224,0.08)` | Flat tint for small chips/tags next to those icons |
| `--icon-fg-dark` / `--icon-bg-dark` | `#93C5FD` on `rgba(96,165,250,0.14)` | Icon tiles on dark sections |

Industries, "Why Ojiva", security, values, quick links and similar sets all use this one tint.

**Exception:** each industry page (`/solutions/*`) keeps its own accent colour (set in its
`data.js`). It must be the readable shade: Healthcare `#15803D`, Logistics `#B45309`,
Real Estate `#0369A1`, Travel `#0E7490`, E-commerce `#C2410C`. On that page's dark hero
card it is lightened automatically.

## 6. Neutrals and text

| Token | Value | Use |
|---|---|---|
| `--text-primary` | `#0D1117` | Headings/body on light |
| `--text-secondary` | `#334155` | Body copy |
| `--text-muted` | `#64748B` | Captions (≥14px). For 12px text use `#5B6B80` or darker |
| `--bg-white` / `--bg-light` / `--bg-subtle` | `#FFF` / `#F6F9FD` / `#EDF2FA` | Section backgrounds (alternate) |
| `--dark` | `#060C18` | Dark sections and heroes |
| `--text-on-dark` / `--text-on-dark-muted` | `#FFF` / `rgba(203,213,240,0.88)` | Text on dark |

## 6b. Section rhythm

Light (`--bg-light`) and white (`--bg-white`) sections alternate between dark ones; two
neighbouring sections never share a background. On the homepage this is set in the
"Homepage section rhythm" rule of the final layer in `globals.css`.

## 6c. Motion

Hover micro-motion only (icon tiles lift and tilt slightly, card accents and "Learn more"
arrows move). Transform-only, nothing loops, and it is off under `prefers-reduced-motion`.
No animation libraries for decoration.

## 7. Status

Success `#166534` text (fill `#22C55E`) · Warning `#B45309` text (fill `#F59E0B`; on its own 8% tint use `#92400E`, `#B45309` lands at 4.49 : 1) ·
Error `--danger` `#DC2626` (text `#B91C1C` on tints).

## 8. Contrast rule (WCAG AA)

- Normal text ≥ **4.5 : 1**; large text (≥24px, or ≥18.7px bold) and icons ≥ **3 : 1**.
- Coloured text on a tinted chip: keep the tint light (≈8% alpha, hex `14`) and use the ink colour.

## 9. Exceptions (left as they are on purpose)

- **Home banner** (`components/home/Hero.js`, galaxy orbit): untouched by request.
- **Forms** and the ad landing pages (`/bulk-sms`, `/whatsapp-api-service`, `/rcs-messaging`,
  `/website-development`, which have their own CSS modules): untouched.
- **Illustrative mockups** (phone/dashboard visuals in service heroes): may use any channel
  fill colours; they're pictures, not reading text.
- **Third-party logos** and footer social icons keep their real brand colours.

## Quick examples

```css
.my-card-icon { background: var(--icon-bg); color: var(--icon-fg); }
.my-cta       { background: var(--grad-primary); color: #fff; }
.my-wa-label  { color: var(--ch-whatsapp-ink); }
```

```js
import { CHANNEL, ICON } from '@/lib/colors';
<span style={{ background: `${CHANNEL.rcs.fill}14`, color: CHANNEL.rcs.ink }}>RCS</span>
```
