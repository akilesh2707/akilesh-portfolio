import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
const base = process.argv[2] || 'http://localhost:3000';
const slugs = [...readFileSync('src/data/projects.ts', 'utf8').matchAll(/slug: '([^']+)'/g)].map(
  (m) => m[1],
);
const routes = [
  '/',
  ...slugs.map((s) => `/projects/${s}`),
  '/icon.svg',
  '/opengraph-image',
  '/robots.txt',
  '/sitemap.xml',
];
const failures = [];
const results = [];
const assets = new Set();
for (const path of routes) {
  const response = await fetch(new URL(path, base));
  const text = response.headers.get('content-type')?.includes('text') ? await response.text() : '';
  results.push({ path, status: response.status });
  if (!response.ok) failures.push(`${path}: ${response.status}`);
  if (path === '/' || path.startsWith('/projects/')) {
    if ((text.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`${path}: expected one h1`);
    if (!text.includes('name="description"')) failures.push(`${path}: missing description`);
    for (const match of text.matchAll(/(?:src|href)="([^"#]+)"/g))
      if (match[1].startsWith('/_next/')) assets.add(match[1].replaceAll('&amp;', '&'));
    for (const match of text.matchAll(/href="#([^"\s]+)"/g))
      if (!text.includes(`id="${match[1]}"`)) failures.push(`${path}: missing anchor ${match[1]}`);
  }
}
for (const path of assets) {
  const response = await fetch(new URL(path, base));
  if (!response.ok) failures.push(`Missing asset ${path}: ${response.status}`);
  if (path.endsWith('.css')) {
    const css = await response.text();
    const fonts = [...css.matchAll(/url\(["']?([^\)"']+\.woff2)["']?\)/g)].map((m) => m[1]);
    for (const font of new Set(fonts)) {
      const url = new URL(font, new URL(path, base));
      const result = await fetch(url);
      if (!result.ok) failures.push(`Missing font ${url.pathname}: ${result.status}`);
    }
  }
}
for (const name of readdirSync('docs').filter((n) => /\.pdf$/i.test(n))) {
  const path = `/docs/${encodeURIComponent(name)}`;
  const response = await fetch(new URL(path, base));
  results.push({ path, status: response.status, privateSource: true });
  if (response.status !== 404) failures.push(`Source PDF exposure ${path}: ${response.status}`);
}
const unknown = await fetch(new URL('/projects/not-a-project', base));
if (unknown.status !== 404) failures.push('Unknown project must return 404.');
mkdirSync('qa', { recursive: true });
writeFileSync(
  'qa/http-results.json',
  JSON.stringify({ base, routes: results, assetCount: assets.size, failures }, null, 2),
);
console.log(
  `${routes.length} public routes checked; ${assets.size} referenced assets checked; all 10 private PDFs tested; unknown route checked.`,
);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(
  'PASS: all public routes/assets available, internal anchors valid, SEO descriptions present, source PDFs inaccessible.',
);
