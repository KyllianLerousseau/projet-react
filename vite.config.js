import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      filename: 'manifest.webmanifest', 
      registerType: 'autoUpdate',
      scope: '/',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png',
        'favicon.ico'
      ],
      manifest: {
        name: 'Sommet',
        short_name: 'Sommet',
        description: 'Une application de dépassement de soi',
        theme_color: '#222222',
        background_color: '#111111',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',  
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', 
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
