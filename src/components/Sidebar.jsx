import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure correct import from react-router-dom
import { FaHome, FaBox, FaChartBar, FaCog, FaUser } from 'react-icons/fa'; // Importing User Icon

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white flex flex-col p-4">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {/* Overview */}
          <NavLink
            to="overview"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded hover:bg-green-300 transition ${
                isActive ? 'bg-green-700' : ''
              }`
            }
          >
            <FaHome className="mr-3" /> Overview
          </NavLink>

          {/* Products */}
          <NavLink
            to="dashboard-products"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded hover:bg-green-300 transition ${
                isActive ? 'bg-green-700' : ''
              }`
            }
          >
            <FaBox className="mr-3" /> Products
          </NavLink>

          {/* Analytics */}
          <NavLink
            to="analytics"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded hover:bg-green-300 transition ${
                isActive ? 'bg-green-700' : ''
              }`
            }
          >
            <FaChartBar className="mr-3" /> Analytics
          </NavLink>

          {/* Settings */}
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded hover:bg-green-300 transition ${
                isActive ? 'bg-green-700' : ''
              }`
            }
          >
            <FaCog className="mr-3" /> Settings
          </NavLink>

          {/* User Management */}
          <NavLink
            to="users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded hover:bg-green-300 transition ${
                isActive ? 'bg-green-700' : ''
              }`
            }
          >
            <FaUser className="mr-3" /> Users
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
