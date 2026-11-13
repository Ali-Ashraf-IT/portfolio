// Astro configuration.
// SITE and BASE decide where the site is hosted.
// GitHub Pages project site: https://ali-ashraf-it.github.io/portfolio  (base "/portfolio")
// Vercel or a custom domain: set BASE to "/" and SITE to your domain.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL ?? 'https://ali-ashraf-it.github.io';
const BASE = process.env.BASE_PATH ?? '/portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
