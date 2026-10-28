-- Ojiva AI — AI chat leads + admin panel.
-- Run once: `php ojiva-private/setup.php` (local / SSH), or import this file
-- in phpMyAdmin on the hosting. Safe to re-run (IF NOT EXISTS).

CREATE TABLE IF NOT EXISTS ai_chat_leads (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name          VARCHAR(80)  NOT NULL,
  phone         CHAR(10)     NOT NULL COMMENT 'Indian mobile, 10 digits',
  interest      VARCHAR(400) NOT NULL DEFAULT '' COMMENT 'AI summary of the need',
  transcript    MEDIUMTEXT   NULL COMMENT 'JSON [{role, content}] of the chat',
  page          VARCHAR(255) NOT NULL DEFAULT '',
  utm_source    VARCHAR(120) NOT NULL DEFAULT '',
  utm_medium    VARCHAR(120) NOT NULL DEFAULT '',
  utm_campaign  VARCHAR(160) NOT NULL DEFAULT '',
  utm_term      VARCHAR(160) NOT NULL DEFAULT '',
  utm_content   VARCHAR(160) NOT NULL DEFAULT '',
  gclid         VARCHAR(255) NOT NULL DEFAULT '',
  fbclid        VARCHAR(255) NOT NULL DEFAULT '',
  landing_url   VARCHAR(500) NOT NULL DEFAULT '',
  referrer_url  VARCHAR(500) NOT NULL DEFAULT '',
  user_agent    VARCHAR(255) NOT NULL DEFAULT '',
  ip_hash       CHAR(64)     NOT NULL DEFAULT '',
  status        ENUM('new','contacted','follow_up','converted','not_interested','junk') NOT NULL DEFAULT 'new',
  follow_up_on  DATE NULL,
  last_contacted_at DATETIME NULL,
  assigned_to   INT UNSIGNED NULL COMMENT 'admin_users.id',
  session_id    INT UNSIGNED NULL COMMENT 'ai_chat_sessions.id of the chat it came from',
  PRIMARY KEY (id),
  KEY idx_assigned (assigned_to, status),
  KEY idx_status_created (status, created_at),
  KEY idx_phone (phone),
  KEY idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Everything the team does with a lead: status changes, call notes.
CREATE TABLE IF NOT EXISTS ai_lead_events (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id     INT UNSIGNED NOT NULL,
  admin_id    INT UNSIGNED NULL,
  type        ENUM('created','status','note','repeat','assigned') NOT NULL,
  detail      TEXT NOT NULL,
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_lead (lead_id, created_at),
  CONSTRAINT fk_event_lead FOREIGN KEY (lead_id) REFERENCES ai_chat_leads (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS admin_users (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email          VARCHAR(190) NOT NULL,
  name           VARCHAR(80)  NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  role           ENUM('owner','agent') NOT NULL DEFAULT 'agent' COMMENT 'owner: also manages the team',
  is_active      TINYINT(1)   NOT NULL DEFAULT 1,
  last_seen_at   DATETIME NULL COMMENT 'admin panel open — counts as online for live chat',
  created_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_at  DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Failed admin logins, for lock-out after repeated wrong passwords.
CREATE TABLE IF NOT EXISTS admin_login_attempts (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ip_hash       CHAR(64) NOT NULL,
  attempted_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_ip_time (ip_hash, attempted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Every AI chat conversation, lead or not. One row per browser tab session.
CREATE TABLE IF NOT EXISTS ai_chat_sessions (
  id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
  session_key      CHAR(32)     NOT NULL COMMENT 'random id from the browser',
  started_at       DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_message_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  visitor_messages SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  first_question   VARCHAR(500) NOT NULL DEFAULT '',
  page_first       VARCHAR(255) NOT NULL DEFAULT '',
  page_last        VARCHAR(255) NOT NULL DEFAULT '',
  utm_source       VARCHAR(120) NOT NULL DEFAULT '',
  utm_medium       VARCHAR(120) NOT NULL DEFAULT '',
  utm_campaign     VARCHAR(160) NOT NULL DEFAULT '',
  from_ad          ENUM('','google','meta') NOT NULL DEFAULT '',
  referrer_url     VARCHAR(500) NOT NULL DEFAULT '',
  device           ENUM('desktop','mobile') NOT NULL DEFAULT 'desktop',
  language         ENUM('en','hi') NOT NULL DEFAULT 'en' COMMENT 'hi = visitor wrote in Devanagari',
  form_shown       TINYINT(1)   NOT NULL DEFAULT 0,
  lead_id          INT UNSIGNED NULL,
  mode             ENUM('ai','human') NOT NULL DEFAULT 'ai' COMMENT 'human = a team member took over',
  agent_id         INT UNSIGNED NULL COMMENT 'admin_users.id handling the chat',
  agent_seen_at    DATETIME NULL COMMENT 'agent heartbeat — stale means hand back to AI',
  wants_human      TINYINT(1)   NOT NULL DEFAULT 0 COMMENT 'visitor pressed Talk to a person',
  visitor_seen_at  DATETIME NULL COMMENT 'visitor heartbeat while the chat is open',
  review           ENUM('none','flagged','reviewed') NOT NULL DEFAULT 'none',
  review_note      VARCHAR(1000) NOT NULL DEFAULT '',
  ip_hash          CHAR(64)     NOT NULL DEFAULT '',
  user_agent       VARCHAR(255) NOT NULL DEFAULT '',
  PRIMARY KEY (id),
  UNIQUE KEY uq_session_key (session_key),
  KEY idx_last (last_message_at),
  KEY idx_lead (lead_id),
  KEY idx_review (review),
  KEY idx_live (mode, last_message_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Each visitor question and AI answer, with speed and cost.
CREATE TABLE IF NOT EXISTS ai_chat_messages (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  session_id    INT UNSIGNED NOT NULL,
  role          ENUM('user','assistant','agent','system','note') NOT NULL
                COMMENT 'agent = team member, system = shown to visitor, note = internal only',
  agent_id      INT UNSIGNED NULL,
  content       TEXT NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  showed_form   TINYINT(1) NOT NULL DEFAULT 0,
  error         VARCHAR(40) NOT NULL DEFAULT '' COMMENT 'set when the visitor got no AI answer',
  latency_ms    INT UNSIGNED NULL,
  input_tokens  INT UNSIGNED NULL,
  output_tokens INT UNSIGNED NULL,
  cache_read_tokens  INT UNSIGNED NULL,
  cache_write_tokens INT UNSIGNED NULL,
  PRIMARY KEY (id),
  KEY idx_session (session_id, id),
  KEY idx_created (created_at),
  FULLTEXT KEY ft_content (content),
  CONSTRAINT fk_msg_session FOREIGN KEY (session_id) REFERENCES ai_chat_sessions (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
