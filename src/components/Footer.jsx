import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">BuildLink</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Connecting you to a network of trusted and skilled professionals for all your construction and maintenance needs in Zimbabwe.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 flex items-center gap-2">
              <FaClock className="text-blue-500" />
              Working Hours
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-gray-400">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Sat: 9:00 AM - 1:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm sm:text-base text-gray-400">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span>123 Construction Ave, Harare</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500 flex-shrink-0" />
                <span>info@buildlink.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-blue-500 flex-shrink-0" />
                <span>(+263) 77 123 4567</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-lg"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-lg"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition text-lg"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} BuildLink. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
