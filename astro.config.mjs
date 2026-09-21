import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ppuivif.github.io',
  base: '/portfolio',
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});