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

## Back office

Content is edited at **https://app.pagescms.org** (Pages CMS): sign in with GitHub, open `sanik60/mehrzad-website`, edit, save. Each save is a commit, and the site redeploys in about a minute. The editing screens are defined in `.pages.yml`.

| Back office section | File |
| --- | --- |
| Site settings (brand, WhatsApp, email, demo bar) | `src/content/settings.json` |
| Tours | `src/content/tours.json` |
| Hotels | `src/content/hotels.json` |
| Cities | `src/content/destinations.json` |
| Travel services / Health treatments | `src/content/services.json`, `src/content/treatments.json` |
| Blog (one section per language) | `src/content/blog/<lang>/<slug>.md` |
| Uploaded photos | `public/images/` |

Menu and button text in all 6 languages is in `src/i18n.ts` (code, not in the back office).

Every text has a box per language; English is required and empty languages show English with a "not translated yet" note. A blog translation must use the same URL name as the English article. Adding a new city also needs one line in the city lists in `.pages.yml`.

## Before launch

- In the back office, Site settings: set the real WhatsApp number and email, and untick the demo bar.
- Replace the sample hotels with real partner hotels.
- Add real photos (WebP) in place of the gradient placeholders.
- Add translations for Turkish, Arabic, Russian and German content.
- Health tourism: the secure medical-document upload needs a backend and is not part of this static site.
