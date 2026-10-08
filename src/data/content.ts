export type ProductSlug = 'general-paint' | 'metal-paint' | 'decorative-quartz-coating';

export type PhotoSlug =
  | 'home-hero'
  | 'home-process'
  | 'home-colors'
  | 'about-manufacturing'
  | 'product-general'
  | 'product-metal'
  | 'product-quartz'
  | 'gallery-interior'
  | 'gallery-process'
  | 'gallery-texture'
  | 'gallery-gate'
  | 'contact';

export type ProductCardData = {
  slug: ProductSlug;
  title: string;
  description: string;
  imageSlug: PhotoSlug;
  imageAlt: string;
  capacityLabel?: string;
  capacityValue?: string;
};

export type GalleryCardData = {
  title: string;
  caption: string;
  imageSlug: PhotoSlug;
  imageAlt: string;
};

export const company = {
  name: 'Master Tone Paint',
  location: 'Ayat, Addis Ababa, Ethiopia',
  founded: 'April 24, 2024',
  foundedDate: '2024-04-24',
  businessModel: 'Wholesale / B2B manufacturing',
  shortDescription:
    'Master Tone Paint manufactures general paint, metal paint, and decorative quartz wall coatings for wholesale customers in Addis Ababa.',
  phone: '',
  email: '',
  capacities: {
    paintTotal: '28,000 L/day',
    quartz: '11,250 L/day',
    machines: '3 production machines'
  }
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/products/', label: 'Products' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' }
] as const;

export const stats = [
  { value: company.capacities.paintTotal, label: 'Paint manufacturing capacity' },
  { value: company.capacities.quartz, label: 'Decorative quartz capacity' },
  { value: company.capacities.machines, label: 'Production equipment' },
  { value: company.location, label: 'Manufacturing location' }
] as const;

export const homeHighlights = {
  hero: {
    title: 'Bringing Color and Quality to Every Surface.',
    description:
      'Master Tone Paint manufactures general paint, metal paint, and decorative quartz wall coatings, providing paint and finishing solutions for wholesale customers.'
  },
  about: {
    title: 'Paint and Decorative Coating Manufacturing in Addis Ababa.',
    paragraphOne:
      'Master Tone Paint was established on April 24, 2024 and operates from Ayat, Addis Ababa, where it serves wholesale customers with a focused paint and coating range.',
    paragraphTwo:
      'The company currently produces general paint, metal paint, and decorative quartz wall coatings with a small, direct manufacturing setup built around reliable wholesale supply.'
  }
} as const;

export const homeApplications = [
  {
    title: 'Painted Walls',
    caption: 'Premium interior finishes for homes and businesses.',
    imageSlug: 'home-process',
    imageAlt: 'Painter applying light blue paint to a wall.'
  },
  {
    title: 'Metal Finishes',
    caption: 'Clean paint applications for metal surfaces and gates.',
    imageSlug: 'product-metal',
    imageAlt: 'Painted metal gate in a clean residential setting.'
  },
  {
    title: 'Decorative Quartz Textures',
    caption: 'Textured wall finishes with visual depth and character.',
    imageSlug: 'product-quartz',
    imageAlt: 'Architectural exterior with a textured decorative finish.'
  }
] as const;

export const aboutSections = {
  introduction:
    'Master Tone Paint is a paint and decorative coating manufacturer based in Ayat, Addis Ababa, serving wholesale customers with general paint, metal paint and decorative quartz wall coatings.',
  whoWeAre:
    'Founded on April 24, 2024, the company focuses on manufacturing and wholesale supply rather than retail presentation. Its work is centered on the products builders, distributors, and trade buyers ask for most often.',
  capabilities:
    'The factory operates two paint manufacturing machines and one decorative quartz coating machine, with a total paint output capacity of 28,000 liters per day and a decorative quartz capacity of 11,250 liters per day.',
  products:
    'The product range is intentionally focused: general paint, metal paint, and decorative quartz wall coatings for architectural and finishing applications.',
  wholesale:
    'Business customers can inquire about available products, supply requirements, and the best way to discuss ongoing wholesale needs.'
} as const;

export const products: ProductCardData[] = [
  {
    slug: 'general-paint',
    title: 'General Paint',
    description: 'General paint products for applicable interior, exterior and building finishing requirements.',
    imageSlug: 'product-general',
    imageAlt: 'Beautifully painted interior wall in a bright living space.',
    capacityLabel: 'Daily capacity',
    capacityValue: '20,000 L/day'
  },
  {
    slug: 'metal-paint',
    title: 'Metal Paint',
    description: 'Paint products developed for suitable metal surfaces and finishing applications.',
    imageSlug: 'product-metal',
    imageAlt: 'Painted metal gate and structure in a clean exterior setting.',
    capacityLabel: 'Daily capacity',
    capacityValue: '8,000 L/day'
  },
  {
    slug: 'decorative-quartz-coating',
    title: 'Decorative Quartz Coating',
    description: 'Decorative textured wall coatings that bring depth, character, and distinctive finishes to architectural surfaces.',
    imageSlug: 'product-quartz',
    imageAlt: 'Textured architectural exterior finish with a quartz-like surface.',
    capacityLabel: 'Daily capacity',
    capacityValue: '11,250 L/day'
  }
];

export const galleryItems: GalleryCardData[] = [
  {
    title: 'Interior Finishes',
    caption: 'Painted walls with a warm residential feel.',
    imageSlug: 'home-hero',
    imageAlt: 'Bright contemporary living room with a painted accent wall.'
  },
  {
    title: 'Painting Process',
    caption: 'A closer look at the application stage.',
    imageSlug: 'home-process',
    imageAlt: 'Painter rolling fresh paint onto a wall inside a bright room.'
  },
  {
    title: 'Color Inspiration',
    caption: 'Paint samples, brushes and color tools.',
    imageSlug: 'home-colors',
    imageAlt: 'Paint tins and brushes arranged on a clean white background.'
  },
  {
    title: 'Painted Walls',
    caption: 'A clean wall finish with a soft modern look.',
    imageSlug: 'gallery-interior',
    imageAlt: 'Modern living room with a painted accent wall and natural light.'
  },
  {
    title: 'Metal Surfaces',
    caption: 'Coated gates and exterior metal structures.',
    imageSlug: 'gallery-gate',
    imageAlt: 'Modern metal gate finished in a deep blue tone.'
  },
  {
    title: 'Decorative Textures',
    caption: 'Textured architectural surfaces with visual depth.',
    imageSlug: 'gallery-texture',
    imageAlt: 'Close-up of a textured exterior wall finish.'
  },
  {
    title: 'Surface Details',
    caption: 'A broader look at painted and finished surfaces.',
    imageSlug: 'gallery-process',
    imageAlt: 'Contemporary interior with color-forward paint applications.'
  },
  {
    title: 'Architectural Inspiration',
    caption: 'Simple geometry and surface texture in a modern setting.',
    imageSlug: 'about-manufacturing',
    imageAlt: 'Textured architectural exterior in a modern residential style.'
  }
];

export const contactImage = {
  imageSlug: 'contact',
  imageAlt: 'Light-filled interior with a fresh painted surface.'
} as const;

export const contactTopics = [
  { value: '', label: 'Select a product or topic' },
  { value: 'general-paint', label: 'General Paint' },
  { value: 'metal-paint', label: 'Metal Paint' },
  { value: 'decorative-quartz', label: 'Decorative Quartz Coating' },
  { value: 'wholesale-inquiry', label: 'Wholesale inquiry' },
  { value: 'other', label: 'Other / General question' }
] as const;

export const seo = {
  homeDescription:
    'Master Tone Paint manufactures general paint, metal paint, and decorative quartz wall coatings for wholesale customers in Ayat, Addis Ababa.',
  aboutDescription:
    'Learn about Master Tone Paint, a paint and decorative coating manufacturer based in Ayat, Addis Ababa.',
  productsDescription:
    'Explore the paint and decorative quartz coating products manufactured by Master Tone Paint.',
  galleryDescription:
    'Browse paint application inspiration, decorative textures, and architectural finishes.',
  contactDescription:
    'Contact Master Tone Paint for product information, wholesale inquiries, and decorative coating requirements.'
} as const;

export const footerLinks = navigation;
