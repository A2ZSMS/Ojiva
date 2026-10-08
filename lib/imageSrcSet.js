/**
 * Responsive srcset for local WebP images.
 *
 * scripts/image-variants.mjs (postbuild) writes 320/640/1024 px copies of every
 * /image/*.webp and /solutions/*.webp into the export. In production this
 * returns a srcset that lets the browser pick the smallest copy that fits;
 * in `next dev` (no variants exist) it returns undefined, so <img> falls back
 * to the original file.
 */
const WIDTHS = [320, 640, 1024];

export function srcSetFor(src) {
  if (process.env.NODE_ENV !== 'production' || typeof src !== 'string') return undefined;
  const m = src.match(/^\/(image|solutions)\/([^/]+\.webp)$/);
  if (!m) return undefined;
  const [, dir, file] = m;
  return [...WIDTHS.map((w) => `/${dir}/w${w}/${file} ${w}w`), `${src} 1600w`].join(', ');
}
