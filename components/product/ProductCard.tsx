import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

type Product = {
  objectID: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductDetailProps = {
  product: Product;
};

const ProductCard: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg flex flex-col items-center p-2">
      <Link href={`/product/${product.objectID}`}>
        <div key={product.objectID}>
          <img
            className="w-full p-2 h-80 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2 line-clamp-3">
              {product.title}
            </div>
            <p className="text-gray-700 text-base line-clamp-3">
              {product.description}
            </p>
            <p className="text-gray-900 text-lg font-bold mt-2">
              ${product.price}
            </p>
            <div className="flex items-center justify-center mt-2">
              <div className="text-gray-700 text-sm">
                {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
