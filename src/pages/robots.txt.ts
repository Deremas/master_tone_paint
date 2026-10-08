export async function GET({ site: astroSite }: { site?: URL }) {
  const siteUrl = astroSite?.toString() ?? 'https://example.com';
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
