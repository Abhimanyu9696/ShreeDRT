import { defineConfig } from 'astro/config';

// `site` is used for the canonical URL and Open Graph (social preview) tags.
// The site is served from the root of its domain on Cloudflare Pages, so no `base` is needed.
export default defineConfig({
  site: 'https://shreedrt.com',
});
