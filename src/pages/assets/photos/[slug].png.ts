import fs from "node:fs/promises";
import path from "node:path";

const allowed = new Set([
  "home-hero", "home-process", "home-colors", "about-manufacturing",
  "product-general", "product-metal", "product-quartz", "gallery-interior",
  "gallery-process", "gallery-texture", "gallery-gate", "contact",
]);

export async function getStaticPaths() {
  return [...allowed].map((slug) => ({ params: { slug } }));
}

export async function GET({ params }: { params: { slug?: string } }) {
  const slug = params.slug ?? "";
  if (!allowed.has(slug)) return new Response("Not found", { status: 404 });
  const file = path.join(process.cwd(), "public", "assets", "photos", `${slug}.png`);
  try {
    const body = await fs.readFile(file);
    return new Response(body, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" } });
  } catch {
    const fallback = path.join(process.cwd(), "public", "assets", "master-tone-paint.jpg");
    try {
      const body = await fs.readFile(fallback);
      return new Response(body, { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" } });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }
}
