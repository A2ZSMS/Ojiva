<?php
/**
 * Ojiva AI — server-only secrets.
 * Copy to ai-config.php in this same folder and fill in the key.
 * This folder must sit OUTSIDE public_html, so nobody can download it.
 */
return [
    // From https://platform.claude.com → API keys
    'anthropic_api_key' => 'sk-ant-...',
    // Optional: the Claude Console workspace this key belongs to
    'anthropic_workspace_id' => '',
    // MySQL — on the hosting use the database, user and password from hPanel → Databases
    'db' => ['host' => 'localhost', 'port' => 3306, 'name' => 'ojiva-ai', 'user' => 'root', 'pass' => ''],
    // AI chats that never became a lead are deleted after this many days (min 30)
    'chat_retention_days' => 180,
];
