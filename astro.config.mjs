import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';
import { VitePWA } from "vite-plugin-pwa";
import wyw from '@wyw-in-js/vite';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), Unocss({
    injectReset: true // or a path to the reset file
  }), vue()],
  vite: {
    plugins: [VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Astro PWA Starter",
        // Change this to your website's name.
        short_name: "Astro PWA Starter",
        // Change this to your website's short name.
        description: "Astro PWA Starter is an opionated Astro starter for building robust static websites.",
        // Change this to your websites description.
        theme_color: "#30E130",
        // Change this to your primary color.
        background_color: "#ffffff",
        // Change this to your background color.
        display: "minimal-ui",
        icons: [{
          src: "/favicons/favicon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        }, {
          src: "/favicons/favicon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }, {
          src: "/favicons/favicon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        }]
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null
      }
    }), wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react']
      }
    })]
  }
});