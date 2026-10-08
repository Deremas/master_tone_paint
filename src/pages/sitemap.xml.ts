const paths = ['/', '/about/', '/products/', '/gallery/', '/contact/'];

export async function GET({ site: astroSite }: { site?: URL }) {
  const siteUrl = astroSite?.toString() ?? 'https://example.com';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const url = new URL(path, siteUrl).toString();
    return `  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>${path === '/' ? '1.0' : '0.8'}</priority></url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
