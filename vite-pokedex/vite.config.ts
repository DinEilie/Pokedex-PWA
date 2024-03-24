import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Pokedex - By Din Eilie',
        short_name: 'Pokedex',
        description: 'An awesome pokedex application',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pokemon.ico',
            sizes: '128x128',
            type: 'icon',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
