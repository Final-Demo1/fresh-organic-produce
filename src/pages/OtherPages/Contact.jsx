import React from 'react';
import market from "../../assets/images/market.png"; // Ensure the path to the image is correct

const Contact = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center m-30">
      <div className="w-full max-w-7xl flex flex-col items-center px-6">
        {/* Image Section - Positioned on top */}
        <div className="w-full mb-12">
          <img
            src={market}
            alt="Fresh Organic Produce"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section - Positioned below the image */}
        <div className="p-10 rounded-lg shadow-lg w-full max-w-4xl">
          <form action="contact">
            {/* Header */}
            <header className="pb-5 text-center">
              <h1 className="font-bold text-3xl text-green-800">Contact Us Now!</h1>
            </header>

            {/* Full Name */}
            <div className="pb-5">
              <label htmlFor="name" className="block font-medium text-lg">
                Full Name
              </label>
              <input
                className="block w-full border-2 rounded-md h-12 p-3 mt-1 text-base"
                type="text"
                id="name"
              />
            </div>

            {/* Email */}
            <div className="pb-5">
              <label htmlFor="email" className="block font-medium text-lg">
                Email
              </label>
              <input
                className="block w-full border-2 rounded-md h-12 p-3 mt-1 text-base"
                type="email"
                id="email"
              />
            </div>

            {/* Phone Number */}
            <div className="pb-5">
              <label htmlFor="phone" className="block font-medium text-lg">
                Phone Number
              </label>
              <input
                className="block w-full border-2 rounded-md h-12 p-3 mt-1 text-base"
                type="tel"
                id="phone"
              />
            </div>

            {/* Message */}
            <div className="pb-5">
              <label htmlFor="message" className="block font-medium text-lg">
                Message
              </label>
              <textarea
                className="block w-full border-2 rounded-md h-40 p-3 mt-1 text-base"
                name="message"
                id="message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="px-10 py-4 bg-green-800 text-white text-lg rounded-md hover:bg-green-500 transition"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
