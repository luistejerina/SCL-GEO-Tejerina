// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



// https://astro.build/config
export default defineConfig({
  site: 'https://maurodeoliveira.github.io',
  base: '/scl-geo', // your repository name goes here, enclosed in '/'
  publicDir: "static",
  output: "static",
    vite: {
        plugins: [tailwindcss()],
      },
});
