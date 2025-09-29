export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'shaker' | 'modern' | 'traditional' | 'custom' | 'cabinet';
  style: string;
  color: string;
  material: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
  inStock: boolean;
  stockCount?: number;
  features: string[];
  specifications: Record<string, string>;
}

export interface CustomOrderRequest {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  kitchenLayout?: File;
  preferredStyle: string;
  budget: string;
  timeline: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  inquiryType: 'quote' | 'custom' | 'installation' | 'general';
  message: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  date: string;
  project?: string;
}