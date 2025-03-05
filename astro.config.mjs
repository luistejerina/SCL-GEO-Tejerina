// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://maurodeoliveira.github.io',

  // your repository name goes here, enclosed in '/'
  base: 'scl-geo',
  prefetch: false,
  output:'static',

  vite: {
      plugins: [tailwindcss()],
    },
  integrations: [],
});