// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import relativeLinks from 'astro-relative-links';



// https://astro.build/config
export default defineConfig({
  site: 'https://maurodeoliveira.github.io',
  base: '/scl-geo', // your repository name goes here, enclosed in '/'
  integrations: [relativeLinks()],
  output: "static",
    vite: {
        plugins: [tailwindcss()],
      },
});
