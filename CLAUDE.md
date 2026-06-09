# tangmc0210.github.io

Personal academic homepage — **Astro 6 + Tailwind CSS v4**, deployed to GitHub Pages as a
user site at https://tangmc0210.github.io.

## Toolchain
- Node 22 (via fnm) + npm. This is a JS project — **no Python / mamba** here.

## Commands
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — build to `dist/` (treat exit code as source of truth)
- `npm run preview` — serve the built `dist/`

## Where the content lives (edit these, not the components)
- `src/data/site.ts` — name, role, tagline, email, social links
- `src/data/publications.ts` — papers (author lists, venue, year, DOI)
- `src/data/research.ts` — research highlight cards (PRISM / SPRINTseq)
- `src/data/awards.ts` — honors & awards

## Layout
- `src/components/*.astro` — section components (Hero, About, Research, …)
- `src/layouts/Layout.astro` — page shell, `<head>`/SEO, theme-flash guard
- `src/styles/global.css` — design tokens (colors, fonts, light/dark themes)
- `public/` — static assets (`avatar.svg` placeholder, `favicon.svg`)

## Conventions
- Day-to-day updates = edit `src/data/*.ts`, then `git push` (CI rebuilds & redeploys).
- NEVER put private data on the site: phone number, ID/student number, home address, ID scans.

## Deploy
- GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main`.
- One-time setup: repo **Settings → Pages → Source = "GitHub Actions"**.
