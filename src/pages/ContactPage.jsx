import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaComments, FaPaperPlane } from "react-icons/fa";
import ContactHero from "../assets/contact-hero.jpg";
import MapPlaceholder from "../assets/map-placeholder.jpg";

export default function ContactPage() {
  return (
    <div className="w-full">
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center mt-16"
        style={{ backgroundImage: `url(${ContactHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-sm sm:text-base lg:text-lg font-light">Welcome to Buildlinks</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Contact Us</h1>
          <p className="text-base sm:text-lg lg:text-xl mt-4 max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold">Certified</span> builders, plumbers, and electricians across <span className="text-blue-400 font-semibold">Zimbabwe</span> — compare, connect, and hire with confidence.
          </p>
        </div>
      </section>

      <section className="bg-[#0c3c60] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10">
            Contact & Join Together
          </h2>
          <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
            Our contacts are always available 24/7 ready to help you with your
            services. Get in touch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-2">Location</p>
              <p className="text-xs sm:text-sm">
                1943 Street Buildlink 5 Harare, 33 Street Mutare
              </p>
            </div>
            <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <FaPhone className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-2">24/7 Service</p>
              <p className="text-xs sm:text-sm">Tel: 89 543456896</p>
              <p className="text-xs sm:text-sm">Mob: 07123454845</p>
            </div>
            <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-2">Drop a Line</p>
              <p className="text-xs sm:text-sm">Buildlinks@gmail.com</p>
            </div>
            <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <FaClock className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-2">Office Hours</p>
              <p className="text-xs sm:text-sm">
                Mon - Fri: 8am - 6pm <br /> Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md text-center hover:shadow-lg transition">
            <FaComments className="text-blue-600 text-4xl sm:text-5xl mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold">Chat with Us!</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700">
              Chat with us for any service, job you want and the job is done.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
              <FaComments />
              Let's Chat
            </button>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Reach & Get <span className="text-blue-600">Touch With Us!</span>
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Your Number"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3 h-32 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative h-[300px] sm:h-[400px] px-4 sm:px-0">
        <img
          src={MapPlaceholder}
          alt="map"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full shadow-lg flex items-center justify-center">
            <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
