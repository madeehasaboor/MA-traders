import React from 'react';
import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker, HiGlobe } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">M.A.Mobeen Traders</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium corrugated packaging solutions for all industries. Quality, innovation, and sustainability at the core of everything we do.
            </p>
                          <div className="flex space-x-4">
                <a href="https://mamobeen.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <HiGlobe className="w-5 h-5" />
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                Corrugated Box Board
              </li>
              <li className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                Corrugated Trays
              </li>
              <li className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                Corrugated Rolls
              </li>
              <li className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                Custom Packaging
              </li>
              <li className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                Industrial Solutions
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
                             <div className="flex items-center space-x-3">
                 <HiPhone className="w-5 h-5 text-primary-400" />
                 <span className="text-gray-300">+92 300 4403664</span>
               </div>
                             <div className="flex items-center space-x-3">
                 <HiMail className="w-5 h-5 text-primary-400" />
                 <span className="text-gray-300">abdulsaboormalik10@gmail.com</span>
               </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Manufacturing Plant, Industrial Zone</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 M.A.Mobeen Traders. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
