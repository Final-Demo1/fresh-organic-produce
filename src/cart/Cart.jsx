import React from "react";
import { useCart } from "../cart/CartContext"; // Import the useCart hook
import { useAuth } from "../pages/auth/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart(); // Use the custom hook
  const { isAuthenticated } = useAuth(); // Check if user is authenticated
  const navigate = useNavigate(); // To programmatically navigate

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    if (isAuthenticated) {
      // If the user is authenticated, proceed to payment
      navigate("/payment");
    } else {
      // If the user is not authenticated, redirect to login page
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 m-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Product</th>
                  <th className="py-4 px-6 text-left">Price</th>
                  <th className="py-4 px-6 text-left">Quantity</th>
                  <th className="py-4 px-6 text-left">Subtotal</th>
                  <th className="py-4 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-4 px-6 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4 rounded-md"
                      />
                      {item.name}
                    </td>
                    <td className="py-4 px-6">₵{item.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value, 10))
                        }
                        className="w-16 text-center border rounded-md"
                      />
                    </td>
                    <td className="py-4 px-6">
                      ₵{(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-green-800">
                Total: ₵{totalPrice.toFixed(2)}
              </h2>
              <button
                onClick={handleProceedToCheckout} // Proceed to checkout on click
                className="px-8 py-4 bg-green-800 text-white text-lg rounded-md hover:bg-green-600 transition cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-2xl text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
