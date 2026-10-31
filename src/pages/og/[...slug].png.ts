import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { site, home } from '../../data/site';
import { getProjects, locales } from '../../i18n';

const strip = (html: string) => html.replace(/<[^>]+>/g, '');
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// English images at /og/<slug>.png, Indonesian at /og/id/<slug>.png.
export const getStaticPaths = (() =>
  locales.flatMap((locale) => {
    const prefix = locale === 'en' ? '' : `${locale}/`;
    return [
      { params: { slug: `${prefix}home` }, props: { kicker: home[locale].kicker, hook: strip(home[locale].hook), accent: '#A07BFF' } },
      ...getProjects(locale).map((p) => ({ params: { slug: `${prefix}${p.slug}` }, props: { kicker: p.opener.kicker, hook: strip(p.opener.hook), accent: p.accent } })),
    ];
  })) satisfies GetStaticPaths;

/** Greedy word wrap; SVG text has no wrapping of its own. */
function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > max) { lines.push(line); line = word; }
    else line = line ? `${line} ${word}` : word;
  }
  return [...lines, line];
}

export const GET: APIRoute = async ({ props }) => {
  const { kicker, hook, accent } = props as { kicker: string; hook: string; accent: string };
  const lines = wrap(hook, 26).slice(0, 4);
  const grid = Array.from({ length: 26 }, (_, i) => `<line x1="${i * 47}" y1="400" x2="${i * 47}" y2="630"/>`).join('')
    + Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${400 + i * 23}" x2="1200" y2="${400 + i * 23}"/>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171B36"/><stop offset="1" stop-color="#0C0E1C"/></linearGradient>
    <radialGradient id="glow" cx="1" cy="0" r="0.8"><stop offset="0" stop-color="${accent}" stop-opacity=".35"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <linearGradient id="fade" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <mask id="m"><rect y="400" width="1200" height="230" fill="url(#fade)"/></mask>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g stroke="rgba(255,255,255,.13)" mask="url(#m)">${grid}</g>
  <text x="72" y="110" fill="${accent}" font-family="JetBrains Mono, Menlo, monospace" font-weight="700" font-size="24" letter-spacing="3">${esc(kicker.toUpperCase())}</text>
  ${lines.map((l, i) => `<text x="72" y="${200 + i * 72}" fill="${accent}" font-family="Bricolage Grotesque, Helvetica, Arial, sans-serif" font-weight="800" font-size="64">${esc(l)}</text>`).join('')}
  <text x="72" y="560" fill="#F3F4FB" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="30">${esc(`${site.name} · ${site.title}`)}</text>
</svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
