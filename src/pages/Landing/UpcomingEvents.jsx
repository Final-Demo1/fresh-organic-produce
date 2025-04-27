import React from "react";
import veggies4 from "../../assets/images/veggies4.png";

const UpcomingEvents = () => {
  return (
    <div
      className="relative bg-cover bg-center py-10 px-5 md:px-20"
      style={{
        backgroundImage: `url(${veggies4})`,
        height: "700px", // Maintains increased height
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white m-6">
        <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white/20 bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <p className="text-xl text-white font-bold mb-6">
          At Organic Green Basket, we love connecting with our clients. Though
          we're an online platform, you can meet us in person at the Tree House Restaurant Farmer's
          Market, Labone, every Wednesday and Saturday!
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 text-lg md:grid-cols-2 gap-6 text-green-400 mb-8">
          <div className="text-left ml-30">
            <h3 className="text-xl font-bold">Days</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Wednesday</li>
              <li>Saturday</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">Time</h3>
            <p className="mt-2">5:00 AM - 5:00 PM</p>
            <p>5:00 AM - 5:00 PM</p>
          </div>
        </div>

        <p className="text-xl text-white font-bold mb-6">
          Don’t miss this opportunity to connect with us and explore our fresh,
          100% organic products!
        </p>

        <div className="text-center">
          <button className="bg-white font-bold text-lg text-green-900 py-2 px-6 rounded-lg shadow-lg hover:bg-green-500">
            Get to Meet In-Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
