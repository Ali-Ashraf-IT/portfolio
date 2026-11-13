# Ali Ashraf — Portfolio

Personal portfolio and CV of Ali Ashraf, System Engineer (IT Operations).
Live site: https://ali-ashraf-it.github.io/portfolio/

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS. Static output, no server needed.

## Edit the content
All text, projects, skills and CV content live in one file: `src/data/portfolio.ts`.
To add a project, copy one object in `projects` and change it. Empty fields are hidden.
Screenshots go in `public/projects/`, the photo in `public/ali.jpg`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
```

## Check before publishing
```bash
npm run verify     # type-check + lint + build
```

## Update the CV PDF (Windows, uses Microsoft Edge)
```bash
npm run build
npm run preview    # keep running in another terminal
npm run cv:pdf     # writes public/Ashraf_CV.pdf from the /cv page
npm run build
```

## Deploy
**GitHub Pages (current):** every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: repository Settings > Pages > Source: **GitHub Actions**.

**Vercel (alternative):** import the repository, set the environment variable `BASE_PATH=/` and `SITE_URL=https://<your-domain>`, build command `npm run build`, output directory `dist`.
