import React, { useState } from "react";
import { FaBell, FaChevronDown, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashnav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Dashboard Branding */}
      <div className="text-2xl font-bold text-green-600">
        <span className="px-3 py-1 rounded-md bg-green-100">Dashboard</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-6">
        {/* Home Button */}
        <Link to="/" className="px-4 py-2 bg-green-800 text-white font-medium rounded-md shadow hover:bg-green-600 transition"> Home
        </Link>

        {/* Notifications Icon */}
        <button className="relative text-green-900 hover:text-green-600">
          <FaBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            3
          </span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-green-900 hover:text-green-600 px-3 py-2 font-medium rounded-md bg-green-50 hover:bg-green-100 transition shadow-sm"
            onClick={toggleDropdown}
          >
            <FaUserCircle className="w-8 h-8" />
            <span>Elizabeth Ama Asare</span>
            <FaChevronDown className="w-5 h-5" />
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-200"
                onClick={() => alert("Go to Settings")}
              >
                Settings
              </button>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-200"
                onClick={() => alert("Logout Clicked")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Dashnav;
