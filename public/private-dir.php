<?php
/**
 * Where the server-only files are (Claude API key, database login, PHP
 * libraries). Used by /api/ and /ai-admin/. Outputs nothing if opened.
 *
 * 1. OJIVA_PRIVATE_DIR environment variable, if set.
 * 2. Testing on this computer: the project's ojiva-private/ (local MAMP settings).
 * 3. Live site: _private/ next to this file — bundled into out/ by
 *    `npm run build` (scripts/bundle-private.mjs) and blocked from the web.
 * 4. Older setup: ojiva-private/ one level above public_html.
 */
$local = in_array($_SERVER['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1'], true);
if (getenv('OJIVA_PRIVATE_DIR')) return getenv('OJIVA_PRIVATE_DIR');
if ($local && is_dir(dirname(__DIR__) . '/ojiva-private')) return dirname(__DIR__) . '/ojiva-private';
if (is_file(__DIR__ . '/_private/ai-config.php')) return __DIR__ . '/_private';
return dirname(__DIR__) . '/ojiva-private';
