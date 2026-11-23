import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sanik60.github.io',
  base: '/mehrzad-website',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fa: 'fa', tr: 'tr', ar: 'ar', ru: 'ru', de: 'de' },
      },
    }),
  ],
});
