#!/usr/bin/env node
// Compare production build assets, never development-mode bundles. Gzip sizes
// are estimates; actual hosting compression and request timing need a live test.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'out/index.html'), 'utf8');
const paths = [...new Set([...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+)/g)].map((match) => match[1]))];
const assets = paths.filter((url) => existsSync(resolve(root, `out${url}`))).map((url) => {
  const bytes = readFileSync(resolve(root, `out${url}`));
  return { path: url, bytes: bytes.length, gzip: gzipSync(bytes).length };
});
const sum = (extension, key) => assets.filter((asset) => asset.path.endsWith(extension)).reduce((total, asset) => total + asset[key], 0);
console.log(JSON.stringify({
  htmlBytes: Buffer.byteLength(html),
  jsBytes: sum('.js', 'bytes'),
  cssBytes: sum('.css', 'bytes'),
  jsGzip: sum('.js', 'gzip'),
  cssGzip: sum('.css', 'gzip'),
  assets,
}, null, 2));
