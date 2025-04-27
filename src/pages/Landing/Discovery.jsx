import React from "react";

const Discovery = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Video element */}
      <video
        src="/peppervid.mp4" // Use the public folder path
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
          Discover the Freshness <br /> of Our <br /> Organic Farm Produce
        </h1>
      </div>
    </div>
  );
};

export default Discovery;
