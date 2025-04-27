import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../cart/CartContext"; // Importing Cart Context

const Navbar = () => {
  const { totalItems } = useCart(); // Access total items from the cart context
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup for a brief period when totalItems changes
  useEffect(() => {
    if (totalItems > 0) {
      setShowPopup(true);
      const timeout = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-green-700 text-white shadow-lg z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <p className="border-2 p-3 rounded-lg font-serif">
          <span className="text-2xl">Organic</span> <br />
          <span className="text-green-400">Green</span> Basket
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-green-500 transition ${isActive ? "text-green-300 underline" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-green-500 transition ${isActive ? "text-green-300 underline" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `hover:text-green-500 transition ${isActive ? "text-green-300 underline" : ""}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-green-500 transition ${isActive ? "text-green-300 underline" : ""}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/payment"
          className={({ isActive }) =>
            `hover:text-green-500 transition ${isActive ? "text-green-300 underline" : ""}`
          }
        >
          Payment
        </NavLink>
      </ul>

      {/* WhatsApp Icon, Login Link, and Cart Icon */}
      <div className="flex items-center gap-6">
        <a
          href="https://wa.me/2337899876"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-white text-4xl transition"
        >
          <FaWhatsapp />
        </a>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative text-white hover:text-green-500 transition">
          <FaShoppingCart className="text-4xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-sm text-white rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Login Link */}
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-green-800 font-semibold rounded-lg shadow-md hover:bg-green-500 transition text-lg"
        >
          Login
        </Link>
      </div>

      {/* Mobile Hamburger Menu Placeholder */}
      <div className="md:hidden">
        <button className="text-2xl text-white">&#9776;</button>
      </div>

      {/* Popup for Added to Cart */}
      {showPopup && (
        <div className="fixed top-16 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Item added to your cart!
        </div>
      )}
    </nav>
  );
};

export default Navbar;
