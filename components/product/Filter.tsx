import { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  priceRange: [number, number];
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
  minRating: number;
  setMinRating: Dispatch<SetStateAction<number>>;
  applyFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  priceRange, setPriceRange, minRating, setMinRating, applyFilters
}) => {
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Price Range:</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Minimum Rating:</label>
        <input
          type="range"
          min="0"
          max="5"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-gray-600">{minRating} stars</div>
      </div>
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
