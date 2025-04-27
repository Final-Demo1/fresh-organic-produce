import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaDollarSign, FaChartLine, FaBoxOpen, FaClipboardList, FaRegCalendarAlt } from 'react-icons/fa';
import { Line } from 'react-chartjs-2'; // Importing Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Overview = () => {
  // Sales Trend Chart Data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Trend',
        data: [5000, 7000, 8000, 9500, 12000, 14000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Trend Over the Last 6 Months',
      },
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Sales Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Total Sales Card */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaDollarSign className="text-green-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold text-green-700">$120,000</p>
        </motion.div>

        {/* Sales Growth Card */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaChartLine className="text-green-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">Sales Growth</h2>
          <p className="text-2xl font-bold text-green-700">+15%</p>
        </motion.div>

        {/* Products Sold Card */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaBoxOpen className="text-green-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">Products Sold</h2>
          <p className="text-2xl font-bold text-green-700">450 Units</p>
        </motion.div>

      </div>

      {/* Sales Trend Chart */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Sales Trend Over the Last 6 Months</h3>
        <div className="h-60 bg-green-100 rounded-lg">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          
          {/* Recent Transaction 1 */}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div>
              <p className="text-sm text-gray-600">Order #12345</p>
              <p className="text-lg font-semibold text-gray-800">Product A</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-lg font-bold text-green-700">$500</p>
            </div>
          </motion.li>

          {/* Recent Transaction 2 */}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div>
              <p className="text-sm text-gray-600">Order #12346</p>
              <p className="text-lg font-semibold text-gray-800">Product B</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-lg font-bold text-yellow-600">$200</p>
            </div>
          </motion.li>

          {/* Recent Transaction 3 */}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div>
              <p className="text-sm text-gray-600">Order #12347</p>
              <p className="text-lg font-semibold text-gray-800">Product C</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-lg font-bold text-green-700">$800</p>
            </div>
          </motion.li>

          {/* Recent Transaction 4 */}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div>
              <p className="text-sm text-gray-600">Order #12348</p>
              <p className="text-lg font-semibold text-gray-800">Product D</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Cancelled</p>
              <p className="text-lg font-bold text-red-600">$0</p>
            </div>
          </motion.li>

        </ul>
      </div>

      {/* Monthly Revenue Section */}
      <div className="mt-8 bg-green-5 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* January */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaRegCalendarAlt className="text-green-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">January</h2>
            <p className="text-2xl font-bold text-green-700">$15,000</p>
          </motion.div>

          {/* February */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FaRegCalendarAlt className="text-green-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">February</h2>
            <p className="text-2xl font-bold text-green-700">$18,500</p>
          </motion.div>

          {/* March */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FaRegCalendarAlt className="text-green-600 text-3xl mb-4" />
            <h2 className="text-xl font-semibold">March</h2>
            <p className="text-2xl font-bold text-green-700">$20,000</p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Overview;
