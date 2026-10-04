import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)],
  );
}
const errors = [];
const source = files('src');
const publicFiles = files('public');
const copy = source
  .filter((p) => /\.(tsx?|css)$/.test(p))
  .map((p) => ({ p, text: readFileSync(p, 'utf8') }));
for (const { p, text } of copy) {
  if (/\[ADD:|\bTODO\b|\bFIXME\b|example\.com|your@email/i.test(text))
    errors.push(`Unresolved content marker: ${p}`);
  if (
    /AKIA[0-9A-Z]{16}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|mongodb\+srv:\/\/[^\s]+:[^\s]+@|sk-[A-Za-z0-9]{30,}/.test(
      text,
    )
  )
    errors.push(`Possible secret: ${p}`);
  if (
    /Aadhaar|three-sports-academy-7n02|scamcheck-production-4b8e|scamcheck-ml\.onrender|3sportsacademy-cmd|6380202390/.test(
      text,
    )
  )
    errors.push(`Unnecessary private/internal detail: ${p}`);
  if (/<a[^>]*href=["'](?:\/docs\/|[^"']*\.pdf)/.test(text))
    errors.push(`Source-document link: ${p}`);
}
for (const p of publicFiles)
  if (/\.pdf$|\.env|\.pem$|\.key$/i.test(p)) errors.push(`Private file in public assets: ${p}`);
const projects = readFileSync('src/data/projects.ts', 'utf8');
for (const name of [
  'SentinelX',
  'QueueZero AI',
  'ScamCheck',
  'INFRAguard AI',
  'FARMIGLE',
  'OncoTwin AI',
  'ChipX',
  '3 Sports Academy',
  'StyleSense AI',
])
  if (!projects.includes(`name: '${name}'`)) errors.push(`Missing project: ${name}`);
for (const name of ['LLS Project', 'OOP & DSA Projects', 'PYTHON LAB Project'])
  if (copy.some((c) => c.text.includes(name))) errors.push(`Excluded project: ${name}`);
if (!readFileSync('.gitignore', 'utf8').includes('docs/*.pdf'))
  errors.push('Private PDFs must be ignored by source control.');
if (!readFileSync('.vercelignore', 'utf8').includes('docs/'))
  errors.push('Private docs must be excluded from deployment upload.');
if (!existsSync('src/app/icon.svg')) errors.push('Missing favicon.');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `PASS: ${source.length} source files and ${publicFiles.length} public assets checked. All nine projects present. No unresolved content markers, source-PDF links, exposed credentials or sensitive client details.`,
);
