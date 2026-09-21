# Shree Delhi Rajasthan Transport Co. — website

Website for Shree Delhi Rajasthan Transport Co. (Deesa, Gujarat — serving India since 1965), built with [Astro](https://astro.build).
Rebuilt from an UpdraftPlus backup of the original WordPress (Astra + Elementor) site.

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/vCard/` | `src/pages/vCard.astro` — digital contact card. The URL is case-sensitive: `shreedrt.com/vCard` |
| `/vcard-deesa/` | Old WordPress address — redirects to `/vCard/` (see `public/_redirects`), so existing QR codes still work |

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
3. On Cloudflare: add an environment variable named `PUBLIC_FORM_ENDPOINT` to the project
   (*Settings → Variables and Secrets*, or *Environment variables* on Pages) and redeploy. It is read at
   **build** time, so a change only takes effect after a new build.

## Deploying to Cloudflare

This is a static site (`npm run build` → `dist/`), so it deploys to Cloudflare Pages straight from GitHub.

1. In the Cloudflare dashboard: *Workers & Pages → Create → Pages → Connect to Git*, and pick this repo.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** picked up automatically from `.node-version` (Astro 7 needs Node 22.12+).
     If a build fails on the Node version, add the environment variable `NODE_VERSION=22`.
3. Every push to `main` builds and publishes to `https://<project>.pages.dev`.
4. Custom domain (`shreedrt.com`): *Custom domains → Set up a domain* in the Pages project. If the domain's
   DNS is not on Cloudflare yet, Cloudflare will ask you to switch the domain's nameservers to it
   (done at wherever the domain is registered).

No `base` setting is needed — the site is served from the root of `*.pages.dev` and of the custom domain.
`site` in `astro.config.mjs` is `https://shreedrt.com`, which is used for canonical and social-preview URLs.
