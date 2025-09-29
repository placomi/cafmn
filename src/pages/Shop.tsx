import { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { products } from '../data/products';

export default function Shop() {
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    priceRange: '',
    inStock: false
  });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.color && product.color !== filters.color) return false;
      if (filters.inStock && !product.inStock) return false;

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max && (product.price < min || product.price > max)) return false;
        if (!max && product.price < min) return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const categories = [...new Set(products.map(p => p.category))];
  const colors = [...new Set(products.map(p => p.color))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <ScrollAnimation direction="up" className="mb-8" immediate={true}>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kitchen Cabinets</h1>
        <p className="text-lg text-gray-600">
          Browse our collection of premium kitchen cabinets. In stock in Burnsville, MN.
        </p>
      </ScrollAnimation>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <ScrollAnimation direction="left" className="lg:w-64" immediate={true}>
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={filters.category === ''}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="mr-2"
                  />
                  All Categories
                </label>
                {categories.map((category) => (
                  <label key={category} className="flex items-center capitalize">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={filters.category === category}
                      onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="color"
                    value=""
                    checked={filters.color === ''}
                    onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                    className="mr-2"
                  />
                  All Colors
                </label>
                {colors.map((color) => (
                  <label key={color} className="flex items-center">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={filters.color === color}
                      onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                      className="mr-2"
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value=""
                    checked={filters.priceRange === ''}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="mr-2"
                  />
                  All Prices
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="0-100"
                    checked={filters.priceRange === '0-100'}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="mr-2"
                  />
                  Under $100
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="100-150"
                    checked={filters.priceRange === '100-150'}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="mr-2"
                  />
                  $100 - $150
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="150"
                    checked={filters.priceRange === '150'}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="mr-2"
                  />
                  $150+
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                  className="mr-2"
                />
                In Stock Only
              </label>
            </div>
          </div>
        </ScrollAnimation>

        {/* Product Grid */}
        <ScrollAnimation direction="right" className="flex-1" immediate={true}>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-600">
              Showing {filteredAndSortedProducts.length} of {products.length} products
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products match your filters.</p>
              <button
                onClick={() => setFilters({ category: '', color: '', priceRange: '', inStock: false })}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
            }>
              {filteredAndSortedProducts.map((product, index) => (
                viewMode === 'grid' ? (
                  <ScrollAnimation key={product.id} direction="up" delay={index * 0.05} immediate={true}>
                    <ProductCard product={product} />
                  </ScrollAnimation>
                ) : (
                  <ScrollAnimation key={product.id} direction="up" delay={index * 0.05} immediate={true}>
                    <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={product.images[0] || '/images/placeholder-cabinet.jpg'}
                        alt={product.name}
                        className="w-48 h-32 object-cover"
                      />
                      <div className="flex-1 p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-blue-600">${product.price}</span>
                          {product.inStock && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              In Stock
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )
              ))}
            </div>
          )}
        </ScrollAnimation>
      </div>
    </div>
  );
}