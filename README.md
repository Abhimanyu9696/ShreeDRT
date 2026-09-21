# Shree Delhi Rajasthan Transport Co. — website

Website for Shree Delhi Rajasthan Transport Co. (Deesa, Gujarat — serving India since 1965), built with [Astro](https://astro.build).
Rebuilt from an UpdraftPlus backup of the original WordPress (Astra + Elementor) site.

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/vcard-deesa/` | `src/pages/vcard-deesa.astro` — digital contact card (same URL as the old site, so existing QR codes still work) |

## Project structure

```
src/
  data/site.ts        ← company name, phones, addresses, hours, stats, FAQs  (edit content here)
  data/markets.ts     ← the six "Markets We Serve" cards
  assets/             ← images that Astro optimizes (photos, logo)
  components/         ← Header, Hero, Experience, Markets, Contact, Footer, FloatActions
  layouts/Layout.astro← <head>, SEO and social tags
  styles/global.css   ← colour/font tokens and shared styles
public/               ← files served as-is (favicon, contact-card icons, ShreeDRT.vcf)
```

## Commands

```bash
npm install        # once
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # serve the production build locally
```

Requires Node 22.12 or newer.

## Contact form

A static site can't send email by itself. Until a form service is configured, the form opens the
visitor's email app addressed to the head-office email (`src/data/site.ts`).

To make it submit directly:

1. Create a free form at [Formspree](https://formspree.io) (or Web3Forms) and copy its endpoint URL.
2. Locally: copy `.env.example` to `.env` and set `PUBLIC_FORM_ENDPOINT=<url>`.
3. On GitHub Pages: add a repository **variable** named `PUBLIC_FORM_ENDPOINT` under
   *Settings → Secrets and variables → Actions → Variables*. The deploy workflow passes it to the build.

## Deploying to GitHub Pages

1. In the repo: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
2. Push to `main` — `.github/workflows/deploy.yml` builds and publishes the site.
3. Custom domain (`shreedrt.com`): set it under *Settings → Pages* and point your DNS at GitHub.
   Without a custom domain the site is served from `https://<user>.github.io/<repo>/`; in that case
   set `base: '/<repo>'` in `astro.config.mjs`.

Any other static host (Netlify, Cloudflare Pages, cPanel) also works: run `npm run build` and upload `dist/`.
