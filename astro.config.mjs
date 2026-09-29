// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://freimoser.github.io',
  base: '/balkonkraftwerk-ratgeber',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
});
