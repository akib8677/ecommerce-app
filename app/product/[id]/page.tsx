import { fetchProductById } from "@/utils/algolia/fetchData";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
  const { id } = params;

  const product: any = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="">
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {product.title}
          </h1>
          <p className="text-2xl text-red-500 font-bold mt-2 mb-4">
            ${product.price}{" "}
            {product.originalPrice && (
              <span className="line-through text-gray-500">
                ${product.originalPrice}
              </span>
            )}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg">
              {product.rating.rate}⭐
            </span>
            <span className="ml-2 text-gray-700 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <span className="mr-2 text-gray-700 font-medium">Color:</span>
              <span className="w-6 h-6 rounded-full bg-gray-700 inline-block"></span>
            </div>
            <div className="flex flex-wrap mb-4 items-center">
              <span className="mr-2 text-gray-700 font-medium">Size:</span>
              <button className="border rounded-full px-4 py-2 mr-2 hover:bg-gray-200 focus:outline-none">
                S
              </button>
              <button className="border rounded-full px-4 py-2 mr-2 hover:bg-gray-200 focus:outline-none">
                M
              </button>
              <button className="border rounded-full px-4 py-2 mr-2 hover:bg-gray-200 focus:outline-none">
                L
              </button>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2 text-gray-700 font-medium">Inseam:</span>
              <button className="border rounded-full px-4 py-2 mr-2 hover:bg-gray-200 focus:outline-none">
                Regular
              </button>
              <button className="border rounded-full px-4 py-2 mr-2 hover:bg-gray-200 focus:outline-none">
                Long
              </button>
            </div>
            <button className="bg-blue-600 text-white rounded-full px-6 py-2 mt-4 hover:bg-blue-700">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
