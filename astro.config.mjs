// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



// https://astro.build/config
export default defineConfig({
  build: { incremental: true }, // until this is stable
    vite: {
        plugins: [tailwindcss()],
      },
});
