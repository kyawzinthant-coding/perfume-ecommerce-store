import { Product, Category, Brand, Review, User } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Midnight Elegance',
    brand: 'Aura Collection',
    category: 'Women',
    price: 89.99,
    originalPrice: 109.99,
    description:
      'A captivating blend of night-blooming jasmine and deep vanilla, perfect for evening sophistication.',
    image:
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 124,
    scentNotes: {
      top: ['Bergamot', 'Pink Pepper'],
      heart: ['Jasmine', 'Rose', 'Lily of the Valley'],
      base: ['Vanilla', 'Sandalwood', 'Musk'],
    },
    featured: true,
    onSale: true,
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    brand: 'Coastal Scents',
    category: 'Unisex',
    price: 75.0,
    description:
      'Fresh and invigorating with notes of sea salt and citrus, capturing the essence of ocean waves.',
    image:
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=500',
    inStock: true,
    stockQuantity: 22,
    rating: 4.6,
    reviewCount: 89,
    scentNotes: {
      top: ['Lemon', 'Sea Salt', 'Mint'],
      heart: ['Lavender', 'Eucalyptus'],
      base: ['Driftwood', 'Ambergris'],
    },
    featured: true,
    new: true,
  },
  {
    id: '3',
    name: 'Royal Oud',
    brand: 'Heritage',
    category: 'Men',
    price: 125.0,
    description:
      'A rich and luxurious fragrance with precious oud wood and warm spices for the discerning gentleman.',
    image:
      'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=500',
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 156,
    scentNotes: {
      top: ['Saffron', 'Cardamom'],
      heart: ['Rose', 'Oud Wood'],
      base: ['Amber', 'Leather', 'Patchouli'],
    },
    featured: true,
  },
  {
    id: '4',
    name: 'Cherry Blossom Dreams',
    brand: 'Garden Poetry',
    category: 'Women',
    price: 68.0,
    description:
      'Delicate and romantic with cherry blossom petals and soft musk, inspired by Japanese gardens.',
    image:
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=500',
    inStock: true,
    stockQuantity: 18,
    rating: 4.7,
    reviewCount: 92,
    scentNotes: {
      top: ['Cherry Blossom', 'Yuzu'],
      heart: ['Peony', 'Lotus'],
      base: ['White Musk', 'Cedarwood'],
    },
    new: true,
  },
  {
    id: '5',
    name: 'Urban Legend',
    brand: 'Metropolitan',
    category: 'Men',
    price: 95.0,
    description:
      'Bold and contemporary with metallic notes and dark woods, perfect for the modern urban explorer.',
    image:
      'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=500',
    inStock: true,
    stockQuantity: 12,
    rating: 4.5,
    reviewCount: 67,
    scentNotes: {
      top: ['Grapefruit', 'Black Pepper'],
      heart: ['Vetiver', 'Geranium'],
      base: ['Ebony', 'Tonka Bean'],
    },
  },
  {
    id: '6',
    name: 'Golden Hour',
    brand: 'Sunset Collection',
    category: 'Unisex',
    price: 82.0,
    description:
      'Warm and radiant with golden amber and honey notes, capturing the magic of sunset.',
    image:
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500',
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviewCount: 143,
    scentNotes: {
      top: ['Mandarin', 'Honey'],
      heart: ['Orange Blossom', 'Tuberose'],
      base: ['Amber', 'Benzoin', 'Vanilla'],
    },
  },
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Women',
    slug: 'women',
    description: 'Elegant fragrances for women',
  },
  {
    id: '2',
    name: 'Men',
    slug: 'men',
    description: 'Sophisticated scents for men',
  },
  {
    id: '3',
    name: 'Unisex',
    slug: 'unisex',
    description: 'Versatile fragrances for everyone',
  },
];

export const mockBrands: Brand[] = [
  { id: '1', name: 'Aura Collection', slug: 'aura-collection' },
  { id: '2', name: 'Coastal Scents', slug: 'coastal-scents' },
  { id: '3', name: 'Heritage', slug: 'heritage' },
  { id: '4', name: 'Garden Poetry', slug: 'garden-poetry' },
  { id: '5', name: 'Metropolitan', slug: 'metropolitan' },
  { id: '6', name: 'Sunset Collection', slug: 'sunset-collection' },
];

export const mockUser: User = {
  id: '1',
  email: 'demo@aura.com',
  firstName: 'Demo',
  lastName: 'User',
  avatar:
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
};

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    productId: '1',
    rating: 5,
    comment:
      'Absolutely love this fragrance! It lasts all day and receives so many compliments.',
    createdAt: '2024-01-15T10:30:00Z',
    user: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      avatar:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  },
  {
    id: '2',
    userId: '2',
    productId: '1',
    rating: 4,
    comment: 'Beautiful scent, very elegant. Perfect for special occasions.',
    createdAt: '2024-01-10T14:20:00Z',
    user: {
      firstName: 'Emily',
      lastName: 'Davis',
    },
  },
];
