# Mehrzad Travel website

Multilingual incoming-tourism website (EN, FA, TR, AR, RU, DE), built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://sanik60.github.io/mehrzad-website/

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/mehrzad-website/
npm run build    # outputs to dist/
```

Every push to `main` rebuilds and redeploys the site automatically (`.github/workflows/deploy.yml`).

## Where things live

| What | File |
| --- | --- |
| Brand name, WhatsApp number, email, demo banner | `src/config.ts` |
| Menu, buttons and page text in all 6 languages | `src/i18n.ts` |
| Tours | `src/data/tours.ts` |
| Hotels | `src/data/hotels.ts` |
| Cities (airports, borders, sights) | `src/data/destinations.ts` |
| Travel services and health treatments | `src/data/services.ts` |
| Blog posts | `src/content/blog/<lang>/<slug>.md` |
| Styles | `src/styles/global.css` |

Content fields take one value per language, e.g. `{ en: '…', fa: '…', de: '…' }`. English is required; any missing language falls back to English and shows a "not translated yet" note. A blog post needs an English file; other languages are optional.

## Before launch

- Replace the placeholders in `src/config.ts` (WhatsApp number, email) and set `demoContent: false`.
- Replace the sample hotels with real partner hotels.
- Add real photos (WebP) in place of the gradient placeholders.
- Add translations for Turkish, Arabic, Russian and German content.
- Health tourism: the secure medical-document upload needs a backend and is not part of this static site.
