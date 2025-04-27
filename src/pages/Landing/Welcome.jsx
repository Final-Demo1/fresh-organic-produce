import React from 'react';
import veggies3 from '../../assets/images/veggies3.png';

export const Welcome = () => {
  return (
    <section className="relative flex items-center justify-between p-10 m-10 overflow-hidden 
    bg-green-600 rounded-xl shadow-lg">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Text Section */}
      <div className="relative z-10 space-y-10 m-10 text-white animate-fade-in">
        <p className="text-4xl font-bold animate-slide-in-left">
          Health is Wealth!
        </p>
        <p className="text-3xl font-semibold">
          Welcome to <br />
          Organic <span className="text-green-400">Green</span> Basket!
        </p>
        <p className="text-xl font-semibold">
          We value your health knowing that it is your greatest wealth <br /> Fresh from farm to table
        </p>
        <a href="about"
          className="inline-block px-4 py-2 mt-4 text-lg font-medium text-green-900 bg-white rounded hover:bg-green-300 transition duration-300">
          Here is <span className="font-bold">Our Story</span>
        </a>
      </div>

      {/* Image Section */}
      <div className="relative z-10 m-10">
        <img
          src={veggies3}
          alt="vegetables"
          className="rounded-lg shadow-lg w-80 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};
