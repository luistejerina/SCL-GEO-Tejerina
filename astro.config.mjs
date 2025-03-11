// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://luistejerina.github.io',
  // your repository name goes here, enclosed in '/'
  base: 'SCL-GEO-Tejerina',
  prefetch: false,
  output:'static',
  vite: {
      plugins: [tailwindcss()],
    },
  integrations: [icon()],
});