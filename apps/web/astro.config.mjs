// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      // 개발 중 /api 요청을 api 서버(4000)로 넘긴다. 배포에서는 nginx가 같은 일을 한다.
      proxy: {
        '/api': 'http://localhost:4000',
      },
    },
  },
});
