# ojiva-private — server-only files for the AI chat and admin panel

Everything here runs on the server only. The build bundles it into
`out/_private/` (locked) — see "Deploying" below.

| File | What it is | In git? |
|---|---|---|
| `composer.json` / `composer.lock` | Anthropic PHP SDK + Guzzle (HTTP client) | yes |
| `vendor/` | Installed libraries (`composer install`) | no |
| `ai-config.php` | Local test settings (MAMP) | **no** |
| `ai-config.production.php` | Live settings: Claude key + Hostinger MySQL — bundled by the build | **no** |
| `schema.sql` | MySQL tables: leads, lead history, admin users, login attempts | yes |
| `setup.php` | Creates the tables and admin users (command line) | yes |
| `lib/db.php` | Shared MySQL connection | yes |
| `admin/bootstrap.php` | Admin panel login, security and layout | yes |

## What gets stored

- **Every conversation** (`ai_chat_sessions` + `ai_chat_messages`): each visitor
  question and AI answer with time, page, device, language, ad source, reply
  speed and token cost. Chats that never became a lead are deleted after
  `chat_retention_days` (default 180) unless flagged for review.
- **Leads** (`ai_chat_leads`), linked to their conversation.

## Admin panel (`/ai-admin/`)

| Page | For |
|---|---|
| Live | Chats from the last 30 minutes, refreshing itself; visitors who pressed "Talk to a person" first. Menu badge + beep when someone is waiting |
| Dashboard | Chats/leads today, 7 and 30 days; chat → lead rate; 14-day chart; top pages; Hindi / phone / ad share; AI reply time and cost; what needs attention |
| Leads | Filter by status, "Assigned to me", "Unassigned", "Follow-ups due"; search; CSV export |
| Lead | Call / WhatsApp, owner, status, follow-up date, call notes, history, the chat |
| Conversations | Every chat; filter: became a lead / saw the form but left / flagged / unanswered; search what was said |
| Conversation | Full chat with times; **Take over** to reply as yourself (the AI pauses), **Hand back to AI** when done; flag a wrong AI answer with a note; owners can delete (privacy requests) |
| Team (owners) | Add people, Owner or Sales agent role, switch off, reset passwords |
| Your name (bottom of the sidebar) | Change your own password |

## Live takeover

- A visitor's chat window checks for team replies every 4 s while open, 10–20 s
  in the background (only for visitors who have chatted). Plain polling, so it
  works on shared hosting.
- "Talk to a person" in the chat: if anyone has the admin panel open (seen in
  the last 2 minutes) the visitor waits for them; nobody joins in 90 s → they
  get the callback form and an Intercom button. Nobody online → Intercom, as before.
- If the team member's conversation page is closed for 3 minutes, the chat goes
  back to the AI automatically and the visitor is told.

## What happens with a chat lead

1. The visitor shares name + mobile in the chat.
2. `ai-lead.php` saves it in `ai_chat_leads` with the AI's one-line summary,
   the whole conversation, the page and UTM/ad-click details.
3. The usual pipeline then runs: welcome SMS, TeleCRM, email, Make.com.
4. The team works it at `/ai-admin/`: call or WhatsApp in one tap, set the
   status (New → Contacted → Follow-up → Converted / Not interested / Junk),
   pick a follow-up date and add call notes. Every change is kept in the
   lead's history with who made it. Export to CSV from the list.

## Deploying (one folder)

`npm run build` puts **everything** in `out/`: the website, the AI chat
(`/api/`), the admin panel (`/ai-admin/`) and these server files in
`out/_private/` (blocked from the web by two `.htaccess` rules; every file in
it is PHP that prints nothing). Upload the contents of `out/` to
`public_html` — nothing else.

Live settings come from `ojiva-private/ai-config.production.php` (never
committed): the Claude key and the Hostinger database. Fill it in once; the
build copies it to `out/_private/ai-config.php`. While it still has `FILL_ME`
placeholders the build leaves it out and warns.

`public/private-dir.php` decides where the server files are: the local
`ojiva-private/` when testing on localhost, the bundled `_private/` on the live
site, or (older setup) `ojiva-private/` one level above `public_html`.

### First time only

1. PHP **8.3 or newer** (hPanel → Advanced → PHP Configuration).
2. hPanel → Databases → create a MySQL database + user; phpMyAdmin → Import `schema.sql`.
3. Fill in `ojiva-private/ai-config.production.php`.
4. Create the first (owner) login:
   `php ojiva-private/setup.php admin-sql you@ojiva.ai "Your Name"` → run the
   printed line in phpMyAdmin → SQL.
5. `npm run build`, upload `out/` to `public_html`, sign in at
   https://www.ojiva.ai/ai-admin/ and add your team on the Team page.

If an older `ojiva-private/` folder exists next to `public_html`, the bundled
one wins once it has settings; the old folder can then be deleted.

Changing the key or database password later: edit
`ai-config.production.php`, rebuild, upload.

## Local test (MAMP)

```bash
php ojiva-private/setup.php            # tables in the local `ojiva-ai` database
npm run build && php -S 127.0.0.1:8080 -t out
```

Open http://localhost:8080 for the chat and http://localhost:8080/ai-admin/
for the panel. Leads from `localhost` are saved to the local database only —
no CRM entry, email or SMS is sent.
