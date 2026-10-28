<?php
/** Ojiva AI — shared MySQL connection for the chat and the admin panel. */

// Everything is in Indian time — PHP's dates must match MySQL's (+05:30 below)
date_default_timezone_set('Asia/Kolkata');

function ojiva_config(): array {
    static $config;
    return $config ??= (array)require dirname(__DIR__) . '/ai-config.php';
}

function ojiva_db(): PDO {
    static $pdo;
    if ($pdo) return $pdo;
    $db = ojiva_config()['db'] ?? null;
    if (!$db) throw new RuntimeException('Database is not configured in ai-config.php');
    $dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4', $db['host'], $db['port'] ?? 3306, $db['name']);
    $pdo = new PDO($dsn, $db['user'], $db['pass'], [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
    // Same collation as the tables (schema.sql). Hostinger's MariaDB otherwise
    // defaults the connection to utf8mb4_general_ci, which can't be compared
    // with the tables' utf8mb4_unicode_ci ("Illegal mix of collations").
    $pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("SET time_zone = '+05:30'");   // all times in IST
    return $pdo;
}

/** Hash of the visitor's IP — enough for rate limits, no raw IPs stored. */
function ojiva_ip_hash(): string {
    return hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '?') . '|ojiva');
}
