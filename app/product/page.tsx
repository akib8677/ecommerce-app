"use client";
import client from "@/lib/algolia";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import ProductDetail from "@/components/product";

const Product: React.FC = () => {
  return (
    <InstantSearch searchClient={client} indexName="product">
      <div className="flex flex-col items-center mt-10">
        <div className="w-full max-w-md">
          <SearchBox
            searchAsYouType
            placeholder="Search for products..."
            classNames={{
              root: "flex items-center justify-center mb-4",
              form: "w-full flex",
              input:
                "w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600",
              submit:
                "px-4 py-2 rounded-r-md bg-blue-500 text-white font-bold cursor-pointer",
            }}
          />
        </div>
        <div className="container mx-auto py-6">
            <Hits hitComponent={ProductDetail} />
        </div>
      </div>
    </InstantSearch>
  );
};

export default Product;
