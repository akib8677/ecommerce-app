import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductDetailProps {
  hit: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ hit }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full p-2" src={hit.image} alt={hit.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{hit.title}</div>
        <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis line-clamp-3">
          {hit.description}
        </p>
        <p className="text-gray-900 text-lg font-bold mt-2">${hit.price}</p>
        <div className="flex items-center mt-2">
          <div className="text-gray-700 text-sm">
            {hit.rating.rate} ({hit.rating.count} reviews)
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
