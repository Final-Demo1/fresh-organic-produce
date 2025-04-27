import React from 'react';
import peppervid from '../assets/images/peppervid.mp4'

const DiscoverySection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={peppervid.mp4}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Beauty of Nature
        </h1>
        <p className="text-lg md:text-2xl">
          Explore breathtaking landscapes, vibrant wildlife, and the wonders of the world.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 rounded-lg text-lg hover:bg-green-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DiscoverySection;
