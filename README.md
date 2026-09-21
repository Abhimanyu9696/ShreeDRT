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

A static site can't send email by itself, so the form posts to [Web3Forms](https://web3forms.com), which
emails each enquiry to the address the access key was created with (`info@shreedrt.com`).

- The access key is `formAccessKey` in `src/data/site.ts`. Web3Forms access keys are meant to be public.
- To change where enquiries go, create a new access key at web3forms.com for the new address and replace it.
- If `formAccessKey` is left empty, the form falls back to opening the visitor's email app.
- Spam protection: a hidden `botcheck` field (Web3Forms honeypot). Enquiry email subject and sender name are the
  hidden `subject` / `from_name` fields in `src/components/Contact.astro`.

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
4. Custom domain (`shreedrt.com`): in the Pages project, *Custom domains → Set up a domain*. The domain is
   registered with Cloudflare, so its DNS is already there and Cloudflare adds the record for you.
   Also add `www.shreedrt.com` if you want it to work (and redirect it to the bare domain).

No `base` setting is needed — the site is served from the root of `*.pages.dev` and of the custom domain.
`site` in `astro.config.mjs` is `https://shreedrt.com`, which is used for canonical and social-preview URLs.
