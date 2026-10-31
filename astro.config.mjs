// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set SITE_URL to the real domain once deployed (also update public/robots.txt).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://dimas-portfolio.vercel.app',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  integrations: [sitemap()],
});
