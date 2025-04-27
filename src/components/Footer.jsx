import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Section */}
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p className="flex items-center gap-2">
            <FiPhoneCall /> +233 789 9876
          </p>
          <p className="flex items-center gap-2">
            <FiMail /> organic_greenbasket@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineLocationMarker /> Find us on the map
          </p>
        </section>

        {/* Social Links Section */}
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline">
            <FaFacebookF /> Facebook </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline">
            <FaInstagram /> Instagram </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline">
            <FaTwitter /> Twitter </a>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="font-bold text-lg mb-2">About Us</h2>
          <p>Organic Green Basket: Delivering 100% organic, <br />chemical-free farm produce straight to your table. <br />Experience the pure taste of nature, grown with <br />care and love!







</p>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-white text-green-200 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Organic Green Basket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
