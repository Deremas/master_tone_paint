export type ProductSlug =
  | 'water-based-paint'
  | 'metal-paint'
  | 'waterproof-quartz'
  | 'putty-contextra'
  | 'tile-adhesives';

export type ProductCardData = {
  slug: ProductSlug;
  title: string;
  description: string;
  capacityLabel?: string;
  capacityValue?: string;
};

export const company = {
  name: 'Master Tone Paint PLC',
  shortName: 'Master Tone Paint',
  tagline: 'Colouring Ethiopia’s Growth.',
  location: 'Ayat Tafo, Addis Ababa, Ethiopia',
  founded: 'April 24, 2024',
  foundedDate: '2024-04-24',
  businessModel: 'Manufacturing and wholesale supply',
  shortDescription:
    'Ethiopian manufacturer of paints and finishing materials for distributors, contractors, and real estate developers.',
  phones: [{ label: 'Birtukan', number: '0911 273 068' }],
  email: '',
  vision:
    'To become a trusted brand in the Ethiopian and African construction landscape, recognized for quality construction materials and chemicals.',
  mission:
    'To manufacture quality, affordable construction materials locally for Ethiopia’s growing construction sector, while building lasting partnerships with distributors and users.',
  capacities: {
    waterBased: '20,000 L/day',
    metalPaint: '8,000 L/day',
    quartz: '11,250 L/day',
    total: '~40,000 L/day',
    machines: '5 production machines',
    site: '2,000+ m² factory'
  }
};

/** Four primary links — Hick’s Law: fewer choices, faster decisions. */
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' }
] as const;

export const stats = [
  {
    value: company.capacities.total,
    label: 'Daily production capacity',
    icon: 'capacity' as const
  },
  {
    value: company.capacities.machines,
    label: 'Mixing and dispersing lines',
    icon: 'machines' as const
  },
  {
    value: company.location,
    label: 'Factory location',
    icon: 'location' as const
  }
] as const;

export const homeHighlights = {
  hero: {
    title: company.tagline,
    description:
      'Locally manufactured paints and finishes for Ethiopia’s construction sector — quality you can trust, at prices that stay within reach.'
  },
  about: {
    title: 'Built by people who know the market.',
    paragraph:
      'Founded on 24 April 2024 by partners with nearly a decade across distribution and contracting, Master Tone manufactures paints and finishing materials in Ayat Tafo, Addis Ababa.'
  }
} as const;

export const aboutSections = {
  introduction:
    'Master Tone Paint PLC manufactures quality, affordable paints and finishing materials for Ethiopia’s construction industry.',
  whoWeAre:
    'Established on 24 April 2024, Master Tone was founded by Birtukan Atemew, Bekele Sorsa, and Habib Mohammed — partners with close to ten years across distribution and on-site contracting.',
  whatWeDo:
    'We manufacture water-based and solvent-based paints, waterproof quartz, putty and Contextra, and tile adhesives — covering wall preparation through final finish.',
  capabilities:
    'Our Ayat Tafo factory sits on more than 2,000 m² with five mixing and dispersing machines, producing close to 40,000 litres of finished product each day.',
  customers:
    'We supply wholesale distributors, construction companies, and real estate developers across Addis Ababa, with delivery from our own fleet.'
} as const;

export const foreword = {
  title: 'Colouring Ethiopia’s Growth.',
  paragraphs: [
    'For close to a decade, my partners and I have each stood at a different point of Ethiopia’s construction supply chain. As a distributor, I have supplied the sector with gypsum, paints, and plywood. One of my co-founders, Bekele Sorsa, has spent those years as a contractor on site after site, while Habib Mohammed has built the distribution of Rehamer Paints in Ethiopia. Each of us came to know the same market from a different side.',
    'Between us, we kept arriving at the same observation. Ethiopia’s construction sector is expanding at a remarkable pace, yet quality paint, manufactured locally and sold at a price the public can afford, remained harder to find than it should be. That realization became Master Tone Paint PLC, established on 24 April 2024 — to manufacture paints and finishing materials here in Ethiopia, to a standard we would trust on our own projects, and at prices that keep quality within everyone’s reach.',
    'We are only at the beginning of this journey. We invite our distributors, partners and clients to grow with us as we work to make Master Tone a trusted name in Ethiopia’s construction landscape and beyond.'
  ],
  author: 'Birtukan Atemew',
  role: 'Co-Founder, Master Tone Paint PLC'
} as const;

export const values = [
  {
    icon: 'quality' as const,
    title: 'Consistent Quality',
    text: 'Every batch is checked before it leaves the factory. Volume never comes before standard.'
  },
  {
    icon: 'price' as const,
    title: 'Affordable Price',
    text: 'Local manufacturing and our own distribution keep quality finishes within reach.'
  },
  {
    icon: 'supply' as const,
    title: 'Reliable Supply',
    text: 'Own fleet, on-site warehouse, and direct delivery to wholesalers across Addis Ababa.'
  }
] as const;

export const coreValues = [
  {
    icon: 'community' as const,
    title: 'Community-Centric',
    text: 'We serve Ethiopia’s construction needs with world-standard products at affordable prices, and grow with the distributors and resellers who rely on us.'
  },
  {
    icon: 'integrity' as const,
    title: 'Integrity',
    text: 'Every commitment on quality, delivery, or price is one we intend to keep — guided by a decade of honest dealings in the sector.'
  },
  {
    icon: 'transparency' as const,
    title: 'Transparency',
    text: 'We are open about how products are made, what they do, and how they should be used, so partners can decide with confidence.'
  },
  {
    icon: 'accountability' as const,
    title: 'Accountability',
    text: 'We do not offer products we have not first trusted ourselves. Every litre that leaves the factory is held to that standard.'
  }
] as const;

export const futureExpansion = [
  {
    icon: 'machines' as const,
    title: 'In-House Quartz Milling',
    text: 'Install milling machines to process locally sourced quartz on site — reducing reliance on purchased milled material and strengthening a more self-sufficient supply chain.'
  },
  {
    icon: 'portfolio' as const,
    title: 'Broader Product Portfolio',
    text: 'Introduce epoxy floor and protective coatings for factories, warehouses, hospitals, parking areas, and commercial spaces — so partners can source more from one local manufacturer.'
  }
] as const;

/** Five products — Miller’s Law: a short, memorable set. */
export const products: ProductCardData[] = [
  {
    slug: 'water-based-paint',
    title: 'Water-Based Paints',
    description:
      'Acrylic paints for interior and exterior walls and ceilings, available in primary colors.',
    capacityLabel: 'Daily capacity',
    capacityValue: '20,000 L/day'
  },
  {
    slug: 'metal-paint',
    title: 'Metal Paints',
    description:
      'Solvent-based paints for gates, doors, windows, railings, and exterior metalwork.',
    capacityLabel: 'Daily capacity',
    capacityValue: '8,000 L/day'
  },
  {
    slug: 'waterproof-quartz',
    title: 'Waterproof Quartz',
    description:
      'Textured protective coating for exterior walls — weather defense with a refined finish.',
    capacityLabel: 'Daily capacity',
    capacityValue: '11,250 L/day'
  },
  {
    slug: 'putty-contextra',
    title: 'Putty & Contextra',
    description:
      'Interior and exterior wall putty, plus Contextra decorative textured finishes.'
  },
  {
    slug: 'tile-adhesives',
    title: 'Tile Adhesives',
    description:
      'Adhesives formulated separately for wall and floor tiling applications.'
  }
];

/** Four inspiration images — fewer, clearer choices. */
export const galleryItems = [
  {
    title: 'Interior Finishes',
    caption: 'Clean painted interiors for homes and commercial spaces.',
    imageSlug: 'home-hero',
    imageAlt: 'Bright living space with a painted accent wall.'
  },
  {
    title: 'Metal Surfaces',
    caption: 'Protective finishes for gates and exterior metalwork.',
    imageSlug: 'gallery-gate',
    imageAlt: 'Painted metal gate in an exterior setting.'
  },
  {
    title: 'Textured Coatings',
    caption: 'Quartz and textured wall finishes for facades.',
    imageSlug: 'gallery-texture',
    imageAlt: 'Textured exterior wall coating.'
  },
  {
    title: 'Color Inspiration',
    caption: 'Paint tools and color references for project planning.',
    imageSlug: 'home-colors',
    imageAlt: 'Paint cans and brushes on a clean surface.'
  }
] as const;

export const contactTopics = [
  { value: '', label: 'Select a product or topic' },
  { value: 'water-based-paint', label: 'Water-Based Paints' },
  { value: 'metal-paint', label: 'Metal Paints' },
  { value: 'waterproof-quartz', label: 'Waterproof Quartz' },
  { value: 'putty-contextra', label: 'Putty & Contextra' },
  { value: 'tile-adhesives', label: 'Tile Adhesives' },
  { value: 'wholesale-inquiry', label: 'Wholesale inquiry' },
  { value: 'other', label: 'Other' }
] as const;

export const seo = {
  homeDescription:
    'Master Tone Paint PLC manufactures quality, affordable paints and finishing materials in Ayat Tafo, Addis Ababa.',
  aboutDescription:
    'Learn about Master Tone Paint PLC, an Ethiopian paint manufacturer founded in 2024.',
  productsDescription:
    'Water-based paints, metal paints, waterproof quartz, putty, Contextra, and tile adhesives from Master Tone.',
  galleryDescription:
    'Application inspiration for Master Tone paints and finishes.',
  contactDescription:
    'Contact Master Tone Paint for wholesale and product inquiries.'
} as const;

export const footerLinks = navigation;
