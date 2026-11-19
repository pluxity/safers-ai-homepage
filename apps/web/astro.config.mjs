// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // 다국어: 한국어(기본)는 주소 그대로(/services), 영어는 /en을 붙인다(/en/services).
  // 번역 문구는 src/i18n/의 ko.ts, en.ts에 있다. (Astro i18n은 주소만 담당)
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': 'http://localhost:4000',
      },
    },
  },
});
