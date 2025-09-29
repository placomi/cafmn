import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Check, Truck, Shield } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { businessConfig } from '../config/business';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-blue-600 hover:text-blue-700">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm breadcrumbs mb-6">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/shop" className="text-gray-500 hover:text-blue-600">Shop</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <Link
        to="/shop"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage] || '/images/placeholder-cabinet.jpg'}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image || '/images/placeholder-cabinet.jpg'}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center justify-between mb-6">
            <div className="text-3xl font-bold text-blue-600">${product.price}</div>
            {product.inStock && (
              <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Check className="h-4 w-4 mr-1" />
                In Stock in Burnsville
              </div>
            )}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-24">Style:</span>
              <span className="text-gray-600">{product.style}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-24">Color:</span>
              <span className="text-gray-600">{product.color}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-24">Material:</span>
              <span className="text-gray-600">{product.material}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-24">Size:</span>
              <span className="text-gray-600">
                {product.dimensions.width}" W x {product.dimensions.height}" H x {product.dimensions.depth}" D
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="h-4 w-4 mr-2 text-green-600" />
              Same-day pickup available in Burnsville
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2 text-blue-600" />
              5-year warranty included
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-900 mb-2">Need Installation?</h3>
            <p className="text-orange-800 text-sm mb-3">
              Professional installation available. Get a free quote for your project.
            </p>
            <Link
              to="/installation"
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors text-sm font-medium"
            >
              Request Installation Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'features'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('pickup')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pickup'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Local Pickup Info
            </button>
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pickup' && (
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">Local Pickup Information</h3>
              <p className="text-gray-600 mb-4">
                Pick up your cabinets directly from our {businessConfig.address.city} warehouse. Same-day pickup available for in-stock items.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Pickup Location:</h4>
                <p className="text-gray-600 mb-2">{businessConfig.address.fullAddress}</p>
                <h4 className="font-semibold mb-2">Pickup Hours:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Monday - Friday: {businessConfig.hours.monday}</li>
                  <li>Saturday: {businessConfig.hours.saturday}</li>
                  <li>Sunday: {businessConfig.hours.sunday}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}