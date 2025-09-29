import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Simple mapping of product names to image files
  const getImageSrc = (productName: string) => {
    const imageMap: { [key: string]: string } = {
      'ShopItem1': '/1.-Cherry-Cabinets-.jpg',
      'ShopItem2': '/green-kitchen-cabinets-16-64484b02999d7.jpg',
      'ShopItem3': '/modern-custom-kitchen-remodel-lux-design-builds-img~6ed17ff20d15389a_14-9308-1-58408ce.jpg',
      'ShopItem4': '/Sand-Inspired-Coastal-Kitchen-4526_181112_Varma-6lFxOopwq2OA4KE6SahDWr-f18b6cf561374248a489fa576ffc7642.jpg',
      'ShopItem5': '/wood-stained-lkl-material.jpg',
      'ShopItem6': '/DesignbyNatalieKraiemPhotobyKirstenFrancis-c8c60d48cd3541a9bdb756a933aa3780.jpg'
    };
    return imageMap[productName] || '/1.-Cherry-Cabinets-.jpg';
  };

  return (
    <div className="bg-white rounded-md shadow-sharp overflow-hidden border border-neutral-200">
      <div className="relative">
        <img
          src={getImageSrc(product.name)}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        {product.inStock && (
          <span className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sharp">
            In Stock
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-wood-100 text-wood-800 text-xs font-medium rounded-md mb-2 capitalize">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-primary-950 mb-2">
            {product.name}
          </h3>
          <p className="text-primary-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-950">${product.price}</span>
          <span className="text-sm text-primary-500 font-medium">{product.material}</span>
        </div>
      </div>
    </div>
  );
}