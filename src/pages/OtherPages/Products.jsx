import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import products from "../../data/products.json";

const Products = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="max-w-7xl mx-auto p-4 mt-35">
      {/* Category Tabs */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-green-600 text-white font-semibold"
                : "bg-green-200 text-gray-900 hover:bg-green-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`} // Link to single product page
            key={product.id}
            className="product-card bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-green-600 font-semibold">
              Price: ₵{product.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found in this category.</p>
      )}
    </main>
  );
};

export default Products;
