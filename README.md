# Akilesh S — System / Signal / Flow

A source-backed personal portfolio built with Next.js App Router, React, TypeScript and Tailwind CSS. Includes a complete editorial homepage, nine statically generated case studies, project-specific architecture illustrations, offline keyword search, light/dark/system themes and accessible interactive diagrams.

## Run locally

Use Node.js 20.9+ and pnpm. Node.js 22 LTS or newer is recommended.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm lint
pnpm typecheck
pnpm audit:content
pnpm build
pnpm start
```

Fonts (Bricolage Grotesque, Geist and Geist Mono) are self-hosted through Fontsource packages. No runtime font request, analytics service, external AI API or database is required.

## Maintain the content

- `src/data/projects.ts`: architecture, status, evidence, capabilities, stack and validation boundaries for every case study.
- `src/data/profile.ts`: identity, education, navigation, skills, achievements and conceptual methodology.
- `src/components/`: presentation grouped by responsibility.
- `src/components/layout/experience.tsx`: reveal, progress and pointer lifecycle.
- `src/app/projects/[slug]/page.tsx`: shared case-study presentation, pre-rendered for all documented projects.

A real portrait can be placed at `public/images/photo.jpg`; the build then uses an optimized Next.js image. The intentional AS monogram is used until a real photo is supplied. Do not create a synthetic portrait.

## Deploy to Vercel

Import this directory as a Next.js project. Use the default Vercel Next.js build/runtime. Set `SITE_URL` to the final HTTPS origin for canonical metadata and sitemap links; the automatic Vercel production hostname is used when available. No production domain is hardcoded. Without an origin, the local sitemap is intentionally empty. No secrets are required.

## Source confidentiality

`docs/` is private authoring material and is never served by the application. PDF files are ignored in `.gitignore`; all source documents and the master specification are excluded from Vercel upload. Keep them out of `public/`. Do not add PDF download links, private repository links, backend endpoints, applicant records or client screenshots.

The résumé establishes personal claims. Individual project documents establish project-specific claims. `SOURCE_AUDIT.md` records the implementation's source mapping and honest status boundaries. The offline command menu searches local content and is not an LLM.

## Interaction and accessibility

A persistent Reduce motion override is available in the theme menu, in addition to the operating system preference.

The native command dialog supports Cmd/Ctrl+K, Escape, Tab, arrow selection and Enter. Theme preferences persist in localStorage and follow OS changes in system mode. A View Transition is used when supported. Native smooth scrolling, IntersectionObserver and one bounded canvas avoid large animation dependencies. Visuals never contain the only copy. Motion preferences are observed both in CSS and in JavaScript; touch devices retain ordinary pointer semantics.
