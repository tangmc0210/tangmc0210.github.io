# tangmc0210.github.io

Personal academic homepage of **Tang Mingchuan (唐明川)** — Ph.D. candidate at BIOPIC, Peking University.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages → https://tangmc.me.
The original https://tangmc0210.github.io address redirects to this primary domain.

## Develop

```sh
npm install      # first time only
npm run dev      # local preview at http://localhost:4321
npm run build    # production build → dist/
```

## Editing content

Most updates only touch `src/data/`:

| File | What |
| --- | --- |
| `src/data/site.ts` | name, tagline, email, social links |
| `src/data/publications.ts` | papers (authors, venue, DOI) |
| `src/data/research.ts` | research highlight cards |
| `src/data/awards.ts` | honors & awards |

Change a file, commit, and push to `main` — GitHub Actions rebuilds and redeploys.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) deploys on every push to `main`.
One-time setup: repo **Settings → Pages → Source → "GitHub Actions"**.
