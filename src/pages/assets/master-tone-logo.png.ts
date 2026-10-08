import { readFile } from 'node:fs/promises';

const logoPath =
  'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-3f4d9901-3ff2-44ea-ada3-aab14b3bc70e.png';

export async function GET() {
  const logo = await readFile(logoPath);

  return new Response(logo, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
