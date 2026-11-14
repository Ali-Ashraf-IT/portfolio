# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static personal portfolio + CV for Ali Ashraf, built with Astro 7, TypeScript and Tailwind CSS 4 (via `@tailwindcss/vite`). Deployed to GitHub Pages at `https://ali-ashraf-it.github.io/portfolio/`. The site is live, so avoid unrequested changes to content or URLs.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321/portfolio/ (note the /portfolio base)
npm run build     # static output to dist/
npm run check     # astro check (type-check .astro + .ts)
npm run lint      # eslint .
npm run verify    # check + lint + build; run before publishing
```

There is no test suite. Windows-only helper scripts (PowerShell, Microsoft Edge):
- `npm run og` renders `scripts/og.html` to `public/og.png`.
- `npm run cv:pdf` prints the `/cv` page to `public/Ashraf_CV.pdf`. It needs `npm run preview` running in another terminal. Rebuild afterwards so `dist/` picks up the new PDF.

## Architecture

- **All content is in `src/data/portfolio.ts`**: `profile`, skills, CV text and the `projects` array (typed by `Project`). Pages and components only render this data; empty fields (`''`, `[]`) are intentionally hidden in the UI. Change copy there, not in the `.astro` files.
- `src/pages/projects/[slug].astro` generates one case-study page per entry in `projects` via `getStaticPaths`, and links to the next project cyclically. Adding a project object adds a route automatically.
- `src/pages/cv.astro` is a standalone print-styled HTML page (own `<head>`, not wrapped in `Base`). It is the source for the downloadable PDF, so changing CV content means regenerating `public/Ashraf_CV.pdf`.
- `src/layouts/Base.astro` owns the head, SEO/OG/JSON-LD, the pre-paint theme script (dark is the default, stored in `localStorage` as `theme`), and the `[data-reveal]` IntersectionObserver.
- Styling: Tailwind 4 plus custom classes (`tile`, `chip`, `btn`, tokens like `signal`, `glow`, `muted`) in `src/styles/global.css`. Fonts are self-hosted via `@fontsource` (no Google requests).

## Base path gotcha

`astro.config.mjs` sets `base` from `BASE_PATH` (default `/portfolio`) and `site` from `SITE_URL`. Every internal link and public asset must be built as `` `${base}/...` `` where `const base = import.meta.env.BASE_URL.replace(/\/$/, '')`. Hard-coded `/foo` paths work on Vercel (`BASE_PATH=/`) but break on GitHub Pages. `public/robots.txt` hard-codes the sitemap URL and must be edited by hand if the domain changes.

## Assets and deployment

- Project screenshots go in `public/projects/<name>/`, referenced by relative filename in the data file. The photo is `public/ali.jpg`.
- `.gitignore` deliberately excludes private material: root-level `*.json` (n8n exports can contain keys and webhook URLs), `*.mp4` (host demos on YouTube and use the `video` id field), `CV.pdf` (old CV with home address) and `CASE_STUDIES.md`. Never commit these.
- Every push to `main` triggers `.github/workflows/deploy.yml` (`npm ci`, `npm run build`, Pages deploy). CI does not run `check` or `lint`, so run `npm run verify` locally first.
- `docs/design-direction.md` and `docs/project-inventory.md` hold design intent and the project inventory.
- The content rule from `portfolio.ts`: only state facts that can be backed up (CV, exports, GitHub code); leave `results` empty until there are real numbers.
