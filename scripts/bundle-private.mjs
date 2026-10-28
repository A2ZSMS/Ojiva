/**
 * Copies the server-only files for the AI chat + admin panel into
 * out/_private/, so `npm run build` produces ONE folder to upload to
 * Hostinger's public_html (see public/private-dir.php).
 *
 * - Code: ojiva-private/{lib,admin,vendor} + schema.sql, setup.php
 * - Settings: ojiva-private/ai-config.production.php → _private/ai-config.php
 *   (your LIVE Claude key + Hostinger database; never the local MAMP file).
 *   Skipped with a warning if it's missing or still has placeholders.
 * - Locked: _private/.htaccess denies all web access (the root .htaccess
 *   blocks it too), and every file in it is PHP that prints nothing.
 */
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'ojiva-private';
const DEST = path.join('out', '_private');
const COPY = ['lib', 'admin', 'vendor', 'schema.sql', 'setup.php'];
const PROD_CONFIG = path.join(SRC, 'ai-config.production.php');

if (!fs.existsSync(path.join(SRC, 'vendor', 'autoload.php'))) {
  console.error('bundle-private: ojiva-private/vendor is missing — run `composer install` in ojiva-private/ first.');
  process.exit(1);
}

fs.rmSync(DEST, { recursive: true, force: true });
// Libraries' examples, tests and docs aren't needed on the server
const SKIP_DIRS = new Set(['examples', 'tests', 'test', 'fixtures', 'docs', '.github']);
const keep = (src) => !SKIP_DIRS.has(path.basename(src)) && !/\.(md|dist)$/i.test(src);
for (const item of COPY) {
  fs.cpSync(path.join(SRC, item), path.join(DEST, item), { recursive: true, filter: keep });
}
fs.writeFileSync(path.join(DEST, '.htaccess'), '# Server-only files: never served to the web\nRequire all denied\n');

let config = '';
if (fs.existsSync(PROD_CONFIG)) {
  config = fs.readFileSync(PROD_CONFIG, 'utf8');
  if (/FILL_ME|sk-ant-\.\.\./.test(config)) {
    console.warn('bundle-private: ⚠ ai-config.production.php still has FILL_ME placeholders — NOT bundled.');
    config = '';
  }
} else {
  console.warn('bundle-private: ⚠ ojiva-private/ai-config.production.php not found — settings NOT bundled.');
}
if (config) fs.writeFileSync(path.join(DEST, 'ai-config.php'), config, { mode: 0o600 });

const size = (dir) => fs.readdirSync(dir, { withFileTypes: true })
  .reduce((n, e) => n + (e.isDirectory() ? size(path.join(dir, e.name)) : fs.statSync(path.join(dir, e.name)).size), 0);
console.log(`bundle-private: out/_private ready (${(size(DEST) / 1048576).toFixed(1)} MB)${config ? ', live settings included' : ', WITHOUT live settings — the AI chat and admin will use ojiva-private/ above public_html if it exists'}`);
