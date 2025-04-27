import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashnav from '../components/DashNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* DashNav */}
        <Dashnav />

        {/* Dashboard Content */}
        <main className="p-6 bg-gray-100 flex-grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
