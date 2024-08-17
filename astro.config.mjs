import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';
import { VitePWA } from "vite-plugin-pwa";
import wyw from '@wyw-in-js/vite';
import node from "@astrojs/node";
import federation from "@originjs/vite-plugin-federation";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  prefetch:true,
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), Unocss({
    injectReset: true // or a path to the reset file
  }), vue()],
  vite: {
    resolve: {
      alias: {
        'custom-loader': new URL('./custom-loader.mjs', import.meta.url).toString()
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: 'custom-loader',
            setup(build) {
              build.onResolve({ filter: /^http:\/\/|https:\/\// }, args => ({
                path: args.path,
                namespace: 'custom-loader'
              }));

              build.onLoad({ filter: /^http:\/\/|https:\/\//, namespace: 'custom-loader' }, async args => ({
                contents: await fetch(args.path).then(res => res.text()),
                loader: 'js'
              }));
            }
          }
        ]
      }
    },
    ssr: {
      noExternal: ['path-to-regexp'],
    },
    plugins: [federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['react']
    }),VitePWA({
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
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
      strategies: 'injectManifest',
      filename: 'sw.ts',
      injectRegister: 'auto',
      srcDir: 'src',
    }), wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react']
      }
    })]
  }
});
