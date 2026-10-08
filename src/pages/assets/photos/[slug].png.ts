import { readFile } from 'node:fs/promises';
import path from 'node:path';

const photoSlugs = [
  'home-hero',
  'home-process',
  'home-colors',
  'about-manufacturing',
  'product-general',
  'product-metal',
  'product-quartz',
  'gallery-interior',
  'gallery-process',
  'gallery-texture',
  'gallery-gate',
  'contact'
] as const;

export function getStaticPaths() {
  return photoSlugs.map((slug) => ({
    params: { slug }
  }));
}

export async function GET({ params }: { params: { slug?: string } }) {
  const slug = params.slug ?? '';
  if (!photoSlugs.includes(slug as (typeof photoSlugs)[number])) {
    return new Response('Not found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'public', 'assets', 'photos', `${slug}.png`);
  const body = await readFile(filePath);

  return new Response(body as any, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}

