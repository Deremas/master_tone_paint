import { readFile } from 'node:fs/promises';

const photoMap: Record<string, string> = {
  'home-hero':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-d718fcc8-5e8d-4368-8ce8-e263cc68fad2.png',
  'home-process':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-2fff35f4-ff7c-47e1-965c-57f2195fe121.png',
  'home-colors':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-93440b75-b5ec-44c9-83f7-70181075cbe9.png',
  'about-manufacturing':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-1ea18781-23f9-41a9-9cba-4d717764dfe1.png',
  'product-general':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-7586c0ed-c26c-465a-88da-4ddabd2ee0cf.png',
  'product-metal':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-de79bee1-61a4-47cb-9dd6-61b884a31e21.png',
  'product-quartz':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-1ae04235-304f-4a6a-bd53-dc6f4da4d9cd.png',
  'gallery-interior':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-824d42db-5a31-4459-ba5f-5a366a827e6d.png',
  'gallery-process':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-a9edae00-5e0e-4b27-9271-0544f75a4314.png',
  'gallery-texture':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-18a17907-1226-41a0-932a-2776d5e392dc.png',
  'gallery-gate':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-0527418a-799f-41e7-bbee-89cb9e50508e.png',
  'contact':
    'C:/Users/home/.cursor/projects/c-Users-home-Documents-BOC-Master-Tone-Paint/assets/c__Users_home_AppData_Roaming_Cursor_User_workspaceStorage_433f287eb31d98bc1a023a2d65eba20b_images_image-793377dc-d215-496c-85eb-f4183c16ad01.png'
};

export function getStaticPaths() {
  return Object.keys(photoMap).map((slug) => ({
    params: { slug }
  }));
}

export async function GET({ params }: { params: { slug?: string } }) {
  const slug = params.slug ?? '';
  const filePath = photoMap[slug];

  if (!filePath) {
    return new Response('Not found', { status: 404 });
  }

  const image = await readFile(filePath);

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
