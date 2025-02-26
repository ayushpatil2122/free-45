"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            CricTips
          </h3>
          <p className="text-gray-300">
            Your go-to source for cricket predictions, news, and updates.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            IPL 2025 NEWS
          </h3>
          <ul className="text-gray-300 space-y-2">
            {["CSK", "DC", "GT", "KKR", "LSG", "MI", "PBKS", "RR", "RCB", "SRH"].map((team, index) => (
              <li key={index} className="hover:text-yellow-400 transition">
                {team}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Player NEWS
          </h3>
          <ul className="text-gray-300 space-y-2">
            {[
              "Rohit Sharma",
              "Hardik Pandya",
              "Shubman Gill",
              "Suryakumar Yadav",
              "Rishabh Pant",
              "Jos Buttler",
              "Babar Azam",
              "Rinku Singh",
              "Jasprit Bumrah",
              "Axar Patel",
            ].map((player, index) => (
              <li key={index} className="hover:text-yellow-400 transition">
                {player}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            TEAM NEWS
          </h3>
          <ul className="text-gray-300 space-y-2">
            {[
              "India",
              "Australia",
              "England",
              "Sri Lanka",
              "Pakistan",
              "South Africa",
              "Bangladesh",
              "Afghanistan",
            ].map((team, index) => (
              <li key={index} className="hover:text-yellow-400 transition">
                {team}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            COMPANY
          </h3>
          <ul className="text-gray-300 space-y-2">
            {[
              "About Us",
              "Contact Us",
              "Terms & Conditions",
              "Privacy Policy",
              "Responsible Gambling",
            ].map((item, index) => (
              <li key={index} className="hover:text-yellow-400 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 relative z-10">
        <p>&copy; {new Date().getFullYear()} CricTips. All rights reserved.</p>
      </div>
    </footer>
  );
}