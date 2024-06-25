"use client";

import ProductDetail from "@/components/product/ProductCard";
import Filters from "@/components/product/Filter";
import { fetchSearchResults } from "@/utils/algolia/fetchData";
import { useState, useEffect, FormEvent } from "react";


const Product: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [initialResults, setInitialResults] = useState<any[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialResults = await fetchSearchResults("");
      setInitialResults(initialResults);
      setResults(initialResults);
    };

    fetchInitialData();
  }, [query]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const searchResults = await fetchSearchResults(query);
    const filteredResults = applyFilters(searchResults);
    setResults(filteredResults);
  };

  const applyFilters = (products: any[]) => {
    return products.filter(product =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.rating.rate >= minRating
    );
  };

  const handleFilterChange = () => {
    const filteredResults = applyFilters(initialResults);
    setResults(filteredResults);
  };


  return (
    <div className="flex">
      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minRating={minRating}
        setMinRating={setMinRating}
        applyFilters={handleFilterChange}
      />
      <div className="flex-1 p-6">
        <form onSubmit={handleSearch} className="flex items-center space-x-4 p-4 mx-auto max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-70 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
