export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  location?: string;
  year?: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  approach: string;
  services: string[];
  deliverables: string[];
  stats: {
    duration: string;
    deliverableCount: number;
    servicesCount: number;
    satisfaction: string;
  };
  videos: {
    title: string;
    path: string;
  }[];
  gallery?: string[];
};

export const portfolioData: PortfolioItem[] = [
  {
    id: '01',
    slug: 'zuleika',
    title: 'Zuleika – Ribbon Collection',
    client: 'Zuleika',
    category: 'Jewellery Campaign',
    image: '/portfolio/zuleika/newdec2.jpg',
    location: 'Kathmandu',
    year: '2025',
    tagline: 'Elegance Redefined Through Light and Form',
    description: 'Zuleika by Gahanagriha represents the pinnacle of contemporary jewellery design in Nepal. Our collaboration focused on capturing the intricate details and luxurious essence of their Ribbon Collection through sophisticated product photography and dynamic video content.',
    challenge: 'The challenge was to showcase the delicate craftsmanship and lustrous quality of fine jewellery while maintaining an authentic, approachable brand identity that resonates with modern consumers.',
    solution: 'We developed a visual language that balances elegance with accessibility, using controlled lighting to highlight the intricate details of each piece while creating lifestyle content that demonstrates how Zuleika jewellery complements everyday moments.',
    approach: 'Our approach combined studio product photography with lifestyle videography, creating a comprehensive visual library that works across digital platforms. We emphasized natural movements and real interactions to showcase the jewellery in authentic contexts.',
    services: ['Product Photography', 'Lifestyle Videography', 'Social Media Content', 'Creative Direction', 'Post-Production'],
    deliverables: ['Product Images', 'Social Media Videos', 'Campaign Assets', 'Brand Guidelines'],
    stats: {
      duration: '3 months',
      deliverableCount: 45,
      servicesCount: 5,
      satisfaction: '100%',
    },
    videos: [
      {
        title: 'Ribbon Ring Showcase',
        path: '/portfoliovideos/Zuleika/ribbon ring.mov',
      },
      {
        title: 'What Do You Have',
        path: '/portfoliovideos/Zuleika/what do you have.mov',
      },
      {
        title: 'Collection Highlight',
        path: '/portfoliovideos/Zuleika/zuleika_by_gahanagriha_1765804717_3788166807468467768_2219775734.mp4',
      },
      {
        title: 'Brand Story',
        path: '/portfoliovideos/Zuleika/zuleika_by_gahanagriha_1768739211_3812783134769937293_2219775734.mp4',
      },
    ],
    gallery: [
      '/portfolio/zuleika/newdec2.jpg',
      '/portfolio/zuleika/The Toast Duo.jpg',
    ],
  },
  {
    id: '02',
    slug: 'hifuture',
    title: 'HiFuture – Tech Innovation',
    client: 'HiFuture',
    category: 'Product Videography',
    image: '/portfolio/zuleika/The Toast Duo.jpg', // Using placeholder, update with actual HiFuture image
    location: 'Studio',
    year: '2025',
    tagline: 'Where Technology Meets Lifestyle',
    description: 'HiFuture is a cutting-edge wearable technology brand pushing the boundaries of smartwatch innovation. Our collaboration focused on creating compelling product videos that showcase the Ultra 3 Pro\'s advanced features and sleek design.',
    challenge: 'Communicating complex technical features in an engaging, visually appealing way while highlighting the product\'s premium build quality and user-friendly interface.',
    solution: 'We created dynamic product videos that combine close-up detail shots with lifestyle scenarios, demonstrating both the technical capabilities and everyday utility of the HiFuture Ultra 3 Pro.',
    approach: 'Using a combination of macro photography and motion graphics, we crafted videos that feel both premium and accessible. Each video tells a specific story about the product\'s capabilities while maintaining visual consistency.',
    services: ['Product Videography', 'Motion Graphics', 'Sound Design', 'Color Grading', 'Creative Concept'],
    deliverables: ['Product Launch Videos', 'Feature Highlight Reels', 'Social Media Cuts', 'E-commerce Assets'],
    stats: {
      duration: '2 months',
      deliverableCount: 32,
      servicesCount: 5,
      satisfaction: '98%',
    },
    videos: [
      {
        title: 'HiFuture Ultra 3 Pro',
        path: '/portfoliovideos/HiFuture/HiFuture Ultra 3 Pro v3.mov',
      },
      {
        title: 'Product Mix',
        path: '/portfoliovideos/HiFuture/mix v1.mov',
      },
    ],
  },
  {
    id: '03',
    slug: 'elevations',
    title: 'Elevations – Product Excellence',
    client: 'Elevations',
    category: 'Product Imagery',
    image: '/portfolio/elevations/elevations2 copy.jpg',
    location: 'Studio',
    year: '2024',
    tagline: 'Elevating Everyday Objects Through Visual Storytelling',
    description: 'Elevations is a lifestyle brand that curates thoughtfully designed products for modern living. Our collaboration spanned multiple product categories, creating a cohesive visual identity that emphasizes quality, functionality, and aesthetic appeal.',
    challenge: 'Creating a unified visual language across diverse product categories—from lighting to organizational tools—while maintaining each product\'s unique character and appeal.',
    solution: 'We developed a clean, minimalist photography style with consistent lighting and composition that allows each product to shine while building a recognizable brand aesthetic. The approach emphasizes texture, form, and practical beauty.',
    approach: 'Each product was photographed in carefully styled environments that suggest use cases without overwhelming the product itself. We used natural light combined with studio lighting to create warm, inviting imagery that feels both professional and approachable.',
    services: ['Product Photography', 'Lifestyle Videography', 'Set Design', 'Art Direction', 'Retouching'],
    deliverables: ['Product Catalog', 'E-commerce Images', 'Lifestyle Videos', 'Marketing Materials', 'Social Content'],
    stats: {
      duration: '4 months',
      deliverableCount: 68,
      servicesCount: 5,
      satisfaction: '100%',
    },
    videos: [
      {
        title: 'Yeelight Unboxing',
        path: '/portfoliovideos/elevations/Yeelight unboxing.mov',
      },
      {
        title: 'Pegboard Organization',
        path: '/portfoliovideos/elevations/pegboard new.mov',
      },
      {
        title: 'Statement Chair',
        path: '/portfoliovideos/elevations/statement chair final.mov',
      },
      {
        title: 'Product Showcase',
        path: '/portfoliovideos/elevations/v2.mov',
      },
      {
        title: 'Weekly Planner',
        path: '/portfoliovideos/elevations/weekly planner2.mov',
      },
    ],
  },
  {
    id: '04',
    slug: 'memomama',
    title: 'Memomama – Artisan Crafts',
    client: 'Memomama',
    category: 'Brand Content',
    image: '/portfolio/elevations/elevations2 copy.jpg', // Using placeholder, update with actual Memomama image
    location: 'Kathmandu',
    year: '2024',
    tagline: 'Celebrating Local Craftsmanship and Community',
    description: 'Memomama is a social enterprise that empowers local artisans by bringing their handcrafted products to a wider audience. Our collaboration focused on authentic storytelling that honors the makers while showcasing the quality and uniqueness of their creations.',
    challenge: 'Balancing commercial product photography with authentic storytelling that respects and celebrates the artisans\' craft and cultural heritage.',
    solution: 'We created a documentary-style approach that weaves together product showcases with glimpses of the making process and the artisans themselves, creating an emotional connection between consumers and creators.',
    approach: 'Our photography and videography emphasize natural light, authentic environments, and real moments. We worked closely with artisans to ensure their stories were told with respect and accuracy while creating commercially viable content.',
    services: ['Documentary Photography', 'Brand Videography', 'Storytelling', 'Social Impact Content', 'Community Engagement'],
    deliverables: ['Brand Story Videos', 'Product Photography', 'Artisan Profiles', 'Social Media Campaign', 'Website Content'],
    stats: {
      duration: '3 months',
      deliverableCount: 38,
      servicesCount: 5,
      satisfaction: '100%',
    },
    videos: [
      {
        title: 'Brand Story',
        path: '/portfoliovideos/memomama/memomama.np_1752149752_3673620478939437380_66415070523.mp4',
      },
      {
        title: 'The Locals',
        path: '/portfoliovideos/memomama/the locals.mov',
      },
    ],
  },
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioData.find((item) => item.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, limit: number = 3): PortfolioItem[] => {
  return portfolioData
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit);
};
