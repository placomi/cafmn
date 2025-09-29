import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ShopItem1',
    price: 89,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Modern',
    color: 'Cherry',
    material: 'Wood',
    dimensions: { width: 18, height: 30, depth: 0.75 },
    images: ['/1.-Cherry-Cabinets-.jpg'],
    inStock: true,
    stockCount: 50,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      'Finish': 'Natural',
      'Hardware': 'Standard',
      'Installation': 'Professional',
      'Warranty': '1 Year'
    }
  },
  {
    id: '2',
    name: 'ShopItem2',
    price: 125,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Shaker',
    color: 'Espresso',
    material: 'Oak',
    dimensions: { width: 24, height: 36, depth: 24 },
    images: ['/green-kitchen-cabinets-16-64484b02999d7.jpg'],
    inStock: true,
    stockCount: 25,
    features: ['Full extension drawers', 'Soft-close doors', 'Dovetail construction'],
    specifications: {
      'Finish': 'Espresso Stain',
      'Hardware': 'Oil Rubbed Bronze',
      'Installation': 'Frameless',
      'Warranty': '5 Years'
    }
  },
  {
    id: '3',
    name: 'ShopItem3',
    price: 145,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Modern',
    color: 'Gray',
    material: 'Wood',
    dimensions: { width: 30, height: 36, depth: 24 },
    images: ['/modern-custom-kitchen-remodel-lux-design-builds-img~6ed17ff20d15389a_14-9308-1-58408ce.jpg'],
    inStock: true,
    stockCount: 15,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      'Finish': 'Standard',
      'Hardware': 'Standard',
      'Installation': 'Professional',
      'Warranty': '1 Year'
    }
  },
  {
    id: '4',
    name: 'ShopItem4',
    price: 165,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Traditional',
    color: 'Coastal',
    material: 'Wood',
    dimensions: { width: 36, height: 42, depth: 24 },
    images: ['/Sand-Inspired-Coastal-Kitchen-4526_181112_Varma-6lFxOopwq2OA4KE6SahDWr-f18b6cf561374248a489fa576ffc7642.jpg'],
    inStock: true,
    stockCount: 12,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      'Finish': 'Standard',
      'Hardware': 'Standard',
      'Installation': 'Professional',
      'Warranty': '1 Year'
    }
  },
  {
    id: '5',
    name: 'ShopItem5',
    price: 110,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Rustic',
    color: 'Wood Stain',
    material: 'Wood',
    dimensions: { width: 21, height: 30, depth: 12 },
    images: ['/wood-stained-lkl-material.jpg'],
    inStock: true,
    stockCount: 30,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      'Finish': 'Standard',
      'Hardware': 'Standard',
      'Installation': 'Professional',
      'Warranty': '1 Year'
    }
  },
  {
    id: '6',
    name: 'ShopItem6',
    price: 135,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'cabinet',
    style: 'Contemporary',
    color: 'White',
    material: 'Wood',
    dimensions: { width: 24, height: 30, depth: 24 },
    images: ['/DesignbyNatalieKraiemPhotobyKirstenFrancis-c8c60d48cd3541a9bdb756a933aa3780.jpg'],
    inStock: true,
    stockCount: 40,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      'Finish': 'Standard',
      'Hardware': 'Standard',
      'Installation': 'Professional',
      'Warranty': '1 Year'
    }
  }
];

export const reviews = [
  {
    id: '1',
    customerName: 'Customer 1',
    rating: 5,
    review: 'Testimonial 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2024-08-15',
    project: 'Kitchen Project'
  },
  {
    id: '2',
    customerName: 'Customer 2',
    rating: 5,
    review: 'Testimonial 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2024-07-22',
    project: 'Kitchen Project'
  },
  {
    id: '3',
    customerName: 'Customer 3',
    rating: 5,
    review: 'Testimonial 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2024-09-01',
    project: 'Kitchen Project'
  }
];