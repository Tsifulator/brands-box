// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://brands-box.com',
  // Remote placeholder imagery (swapped for real lookbook/IG photography later)
  image: {
    domains: ['picsum.photos'],
  },
});
