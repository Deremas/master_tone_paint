import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const file = path.join(process.cwd(), "public", "assets", "master-tone-paint.svg");
  const body = await fs.readFile(file);
  return new Response(body, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
