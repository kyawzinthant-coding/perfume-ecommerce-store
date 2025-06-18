export interface Product {
  id: string;
  name: string;
  brand_name: string;
  category_name: string;
  price: number;
  size_ml: string;
  created_at: string;
  originalPrice?: number;
  description: string;
  image_url: string;
  images?: string[];
  gender_affinity: string;
  review_count: number;
  slug: string;
  inStock: boolean;
  stock_quantity: number;
  rating: number;
  reviewCount: number;

  top_notes: string;
  middle_notes: string;
  base_notes: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Category {
  id: string;
  name: string;
  is_active: number;
  image_url?: string;
}

export interface Brand {
  id: string;
  name: string;
  is_active: number;
  image_url?: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}
