export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Queen Bed - Beige',
    category: 'Beds',
    price: 89900,
    description:
      'A premium upholstered queen bed in an elegant beige finish, designed to bring comfort, sophistication, and timeless beauty to your bedroom.',
    image:
      'https://images.unsplash.com/photo-1708448325735-6f366d0c42d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '2',
    name: 'Modern King Bed - Grey',
    category: 'Beds',
    price: 119900,
    description:
      'A spacious and stylish king-size bed with a padded headboard and luxurious grey upholstery, perfect for a refined modern bedroom.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '3',
    name: 'Classic Bed Frame - Velvet Green',
    category: 'Beds',
    price: 109900,
    description:
      'A luxurious velvet-finish bed frame in deep green, crafted to make a bold statement while offering exceptional comfort and support.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '4',
    name: 'Premium 3-Seater Sofa - Cream',
    category: 'Sofas',
    price: 129900,
    description:
      'A beautifully designed 3-seater sofa in a soft cream tone, combining plush comfort with a clean, contemporary silhouette.',
    image:
      'https://images.unsplash.com/photo-1681394949029-fb3d12e96650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '5',
    name: 'Modern L-Shaped Sofa - Olive Green',
    category: 'Sofas',
    price: 159900,
    description:
      'A spacious olive green L-shaped sofa designed for stylish family living, offering both modern elegance and everyday comfort.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '6',
    name: 'Elegant 2-Seater Sofa - Grey',
    category: 'Sofas',
    price: 74900,
    description:
      'A compact yet luxurious 2-seater sofa in a modern grey tone, ideal for apartments, offices, or intimate living spaces.',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false,
  },
  {
    id: '7',
    name: 'Modern TV Stand - Walnut Finish',
    category: 'TV Stands',
    price: 44900,
    description:
      'A sleek TV stand in a rich walnut finish, featuring clean lines and ample storage to keep your entertainment space neat and elegant.',
    image:
      'https://images.unsplash.com/photo-1616627456852-2db43a0f0d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false,
  },
  {
    id: '8',
    name: 'Luxury TV Console - White & Wood',
    category: 'TV Stands',
    price: 59900,
    description:
      'A premium TV console with a refined white and wood finish, blending modern design with practical storage for contemporary interiors.',
    image:
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '9',
    name: '6-Seater Dining Table - Natural Wood',
    category: 'Dining Tables',
    price: 99900,
    description:
      'A stylish 6-seater dining table crafted in a natural wood finish, perfect for warm family gatherings and elegant dining spaces.',
    image:
      'https://images.unsplash.com/photo-1639601476610-cdb22ae2d9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true,
  },
  {
    id: '10',
    name: 'Modern Marble Dining Table',
    category: 'Dining Tables',
    price: 139900,
    description:
      'A luxurious dining table featuring a marble-inspired top and a strong modern base, designed to elevate any dining room.',
    image:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false,
  },
  {
    id: '11',
    name: '4-Seater Compact Dining Set',
    category: 'Dining Tables',
    price: 79900,
    description:
      'A compact dining set designed for modern homes, combining practicality, elegance, and comfort in a beautifully balanced design.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false,
  },
  {
    id: '12',
    name: 'Tufted Queen Bed - Charcoal',
    category: 'Beds',
    price: 94900,
    description:
      'A sophisticated charcoal queen bed with a tufted headboard, offering a luxurious statement piece for elegant bedroom styling.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false,
  },
];

export const categories = [
  'All',
  'Beds',
  'Sofas',
  'TV Stands',
  'Dining Tables',
];