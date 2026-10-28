<?php
/**
 * Ojiva AI — one-time setup (command line only).
 *
 *   php ojiva-private/setup.php                       create the tables
 *   php ojiva-private/setup.php admin you@ojiva.ai "Your Name"
 *                                                     add/reset an owner admin (asks for a password)
 *   (more team members: Team page in the admin panel)
 *   php ojiva-private/setup.php admin-sql you@ojiva.ai "Your Name"
 *                                                     print the SQL to add an admin in phpMyAdmin
 */
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__ . '/lib/db.php';

[$cmd, $email, $name] = array_pad(array_slice($argv, 1), 3, '');

function ask_password(): string {
    echo 'Password (min 10 characters): ';
    if (DIRECTORY_SEPARATOR === '/') system('stty -echo');
    $pw = trim((string)fgets(STDIN));
    if (DIRECTORY_SEPARATOR === '/') system('stty echo');
    echo "\n";
    if (strlen($pw) < 10) { fwrite(STDERR, "Too short.\n"); exit(1); }
    return $pw;
}

if ($cmd === '') {
    $sql = file_get_contents(__DIR__ . '/schema.sql');
    foreach (array_filter(array_map('trim', explode(';', preg_replace('/^--.*$/m', '', $sql)))) as $stmt) ojiva_db()->exec($stmt);

    // Upgrades for databases created by an earlier version of schema.sql
    $has = ojiva_db()->prepare('SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?');
    $add = [
        ['ai_chat_leads', 'assigned_to', "ADD COLUMN assigned_to INT UNSIGNED NULL COMMENT 'admin_users.id' AFTER last_contacted_at, ADD KEY idx_assigned (assigned_to, status)"],
        ['ai_chat_leads', 'session_id',  "ADD COLUMN session_id INT UNSIGNED NULL COMMENT 'ai_chat_sessions.id of the chat it came from' AFTER assigned_to"],
        ['admin_users',   'role',        "ADD COLUMN role ENUM('owner','agent') NOT NULL DEFAULT 'agent' COMMENT 'owner: also manages the team' AFTER password_hash"],
        ['admin_users',   'last_seen_at', "ADD COLUMN last_seen_at DATETIME NULL COMMENT 'admin panel open — counts as online for live chat' AFTER is_active"],
        ['ai_chat_sessions', 'mode',     "ADD COLUMN mode ENUM('ai','human') NOT NULL DEFAULT 'ai' COMMENT 'human = a team member took over' AFTER lead_id,
            ADD COLUMN agent_id INT UNSIGNED NULL COMMENT 'admin_users.id handling the chat' AFTER mode,
            ADD COLUMN agent_seen_at DATETIME NULL COMMENT 'agent heartbeat — stale means hand back to AI' AFTER agent_id,
            ADD COLUMN wants_human TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'visitor pressed Talk to a person' AFTER agent_seen_at,
            ADD COLUMN visitor_seen_at DATETIME NULL COMMENT 'visitor heartbeat while the chat is open' AFTER wants_human,
            ADD KEY idx_live (mode, last_message_at)"],
        ['ai_chat_messages', 'agent_id', "ADD COLUMN agent_id INT UNSIGNED NULL AFTER role"],
    ];
    foreach ($add as [$table, $column, $ddl]) {
        $has->execute([$table, $column]);
        if (!$has->fetchColumn()) { ojiva_db()->exec("ALTER TABLE $table $ddl"); echo "Added $table.$column\n"; }
    }
    $type = ojiva_db()->query("SELECT COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'ai_lead_events' AND COLUMN_NAME = 'type'")->fetchColumn();
    if (!str_contains((string)$type, "'assigned'")) {
        ojiva_db()->exec("ALTER TABLE ai_lead_events MODIFY type ENUM('created','status','note','repeat','assigned') NOT NULL");
        echo "Updated ai_lead_events.type\n";
    }
    $role = ojiva_db()->query("SELECT COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'ai_chat_messages' AND COLUMN_NAME = 'role'")->fetchColumn();
    if (!str_contains((string)$role, "'note'")) {
        ojiva_db()->exec("ALTER TABLE ai_chat_messages MODIFY role ENUM('user','assistant','agent','system','note') NOT NULL
            COMMENT 'agent = team member, system = shown to visitor, note = internal only'");
        echo "Updated ai_chat_messages.role\n";
    }
    // Someone must be able to manage the team: the first admin becomes owner
    if (!ojiva_db()->query("SELECT COUNT(*) FROM admin_users WHERE role = 'owner'")->fetchColumn()) {
        ojiva_db()->exec("UPDATE admin_users SET role = 'owner' ORDER BY id LIMIT 1");
    }
    echo "Tables ready.\n";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '') {
    fwrite(STDERR, "Usage: php setup.php $cmd you@ojiva.ai \"Your Name\"\n");
    exit(1);
}
$hash = password_hash(ask_password(), PASSWORD_DEFAULT);

if ($cmd === 'admin-sql') {
    printf("INSERT INTO admin_users (email, name, password_hash, role) VALUES ('%s', '%s', '%s', 'owner');\n",
        addslashes(strtolower($email)), addslashes($name), $hash);
    exit;
}
if ($cmd === 'admin') {
    ojiva_db()->prepare("INSERT INTO admin_users (email, name, password_hash, role) VALUES (?, ?, ?, 'owner')
        ON DUPLICATE KEY UPDATE name = VALUES(name), password_hash = VALUES(password_hash), role = 'owner', is_active = 1")
        ->execute([strtolower($email), $name, $hash]);
    echo "Admin $email saved.\n";
    exit;
}
fwrite(STDERR, "Unknown command: $cmd\n");
exit(1);
