import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for navigation
import { useCart } from "../../cart/CartContext"; // Import useCart hook
import products from "../../data/products.json"; // Product data

const SingleProduct = () => {
  const { productId } = useParams(); // Get product ID from URL
  const { addToCart } = useCart(); // Access addToCart from the cart context
  const product = products.find((p) => p.id === parseInt(productId, 10)); // Convert productId to integer

  // Handle Add to Cart with default quantity of 1
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, // Default quantity
    });
    alert(`${product.name} added to your cart!`);
  };

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-600">Product not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 m-30">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-semibold text-green-600 mt-4">
              Price: ₵{product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">Weight: {product.weight}</p>
          </div>

          {/* Add to Cart / Buy Now Button */}
          <div className="flex gap-6 mt-6">
            <button
              className="bg-yellow-500 text-green-900 py-2 px-4 rounded-lg hover:bg-green-500 cursor-pointer"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/payment">
              <button className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-500 cursor-pointer">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
