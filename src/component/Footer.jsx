import React from "react";
import { Coffee, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Logo & Info */}
        <div className="space-y-4" data-aos="fade-right">
          <h2 className="text-2xl font-bold text-rose-600 flex"> 
            <Coffee size={30} className="text-red-600 mr-2" /> Coffee
          </h2>
          <p className="text-gray-400 text-sm">
            Creating a catchy tagline <br /> coffee shop business growth.
          </p>
          <p className="text-gray-300 text-sm flex">  <Phone size={20} /> +8801742-527137</p>
        </div>

        {/* Categories */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg ">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:underline">Ashley Seekers Art</li>
            <li className="hover:underline">Merchandise</li>
            <li className="hover:underline">Gift Certificates</li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg ">INFORMATION</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:underline">Coffee Beans</li>
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">Blog</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-4" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-lg">FOLLOW US</h3>
          <div className="flex space-x-4 text-gray-400">
            <FaFacebook className="hover:text-rose-500 cursor-pointer text-xl" />
            <FaXTwitter className="hover:text-rose-500 cursor-pointer text-xl" />
            <FaInstagram className="hover:text-rose-500 cursor-pointer text-xl" />
            <FaLinkedin className="hover:text-rose-500 cursor-pointer text-xl" />
            <FaYoutube className="hover:text-rose-500 cursor-pointer text-xl" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div 
        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
        data-aos="zoom-in" 
        data-aos-delay="400"
      >
        Copyright © 2025 Coffee. All rights reserved. Present by <span className="text-rose-500">MacCreative</span>.
      </div>
    </footer>
  );
};

export default Footer;
