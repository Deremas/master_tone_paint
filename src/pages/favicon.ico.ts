const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#123b35"/><circle cx="32" cy="32" r="20" fill="#e8b04a"/><path d="M23 41c9-3 13-10 16-21 6 7 8 14 3 21-5 8-16 7-19 0Z" fill="#f5e7c8"/></svg>`;

export function GET() {
  return new Response(favicon, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
