import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.SITE_URL || process.env.SITE_URL || 'https://example.com';

  return {
    output: 'static',
    site: siteUrl
  };
});
