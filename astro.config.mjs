import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site-url.mjs';

// Sitio 100 % estático: Astro genera HTML y CSS, sin JavaScript de framework.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    // Para añadir valenciano: locales: ['es', 'va'] y crear src/i18n/va.ts + src/pages/va/
    locales: ['es'],
    defaultLocale: 'es',
  },
});
