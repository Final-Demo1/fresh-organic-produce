import React from "react";
import veggies6 from "../../assets/images/veggies6.png";

const About = () => {
  return (
    <div className="py-16 m-30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          {/* Image Section */}
          <div className="mb-12">
            <img
              src={veggies6}
              alt="Nature's Basket"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div>
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-8">
              About Us
            </h1>

            {/* Intro Section */}
            <div className="mb-8">
              <p className="text-lg text-green-900 leading-relaxed mb-4">
                Welcome to <span className="font-semibold">Organic Green Basket</span>,
                your trusted source for fresh, organic, and pesticide-free
                produce. At Organic Green Basket, we believe in the power of healthy,
                sustainable living.
              </p>
              <p className="text-lg text-green-900 leading-relaxed">
                Our mission is simple: to provide you with the highest quality
                fruits, vegetables, and herbs that are not only bursting with
                flavor but are also grown with respect for the environment and
                your well-being.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-green-600 mb-4">
                Why Choose Us?
              </h2>
              <ul className="list-disc pl-5 text-green-900 leading-relaxed space-y-3">
                <li>
                  <strong className="text-green-700">100% Organic:</strong> All
                  our produce is grown without synthetic fertilizers, pesticides,
                  or GMOs. We partner with local farmers who share our passion for
                  sustainable and organic farming practices.
                </li>
                <li>
                  <strong className="text-green-700">Farm-to-Table Freshness:</strong>{" "}
                  We ensure that our produce reaches you at its peak freshness,
                  straight from the farm to your doorstep.
                </li>
                <li>
                  <strong className="text-green-700">Eco-Friendly Practices:</strong>{" "}
                  From our farming techniques to our packaging, we prioritize
                  environmentally conscious methods to reduce waste and protect the
                  planet.
                </li>
              </ul>
            </div>

            {/* Our Promise Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-green-600 mb-4">
                Our Promise
              </h2>
              <p className="text-lg text-green-900 leading-relaxed">
                We are committed to helping you make healthier choices without
                compromising on taste or quality. When you shop with Organic Green
                Basket, you’re not just buying produce; you’re investing in a
                healthier future for yourself and the planet.
              </p>
            </div>

            {/* Join Our Community Section */}
            <div>
              <h2 className="text-3xl font-semibold text-green-600 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-green-900 leading-relaxed mb-6">
                Explore our wide range of seasonal offerings, discover new
                recipes, and join a growing community of individuals passionate
                about organic living. Together, we can make a positive impact—one
                meal at a time.
              </p>
              <p className="text-lg font-semibold text-green-800 mt-6">
                Let’s Grow Healthy, Together!
              </p>

              {/* Button Section */}
              <div className="mt-8 text-center">
                <a href="products"
                  className="inline-block bg-green-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-500 transition duration-300">
                  Explore our products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
