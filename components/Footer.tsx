"use client";

import { useState } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaTelegram, 
  FaArrowRight, 
  FaBaseballBall,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e : any) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing to our newsletter!");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900  text-white pt-20 pb-8 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="hidden lg:block absolute top-20 right-20 w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 pb-16 border-b border-gray-700/50">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <FaBaseballBall className="text-gray-900 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                CricTips
              </h2>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Your premium destination for the most accurate cricket predictions, in-depth analysis, and exclusive cricket news. Join thousands of fans who trust our expert insights.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                  <FaMapMarkerAlt className="text-yellow-400" />
                </div>
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                  <FaPhone className="text-yellow-400" />
                </div>
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                  <FaEnvelope className="text-yellow-400" />
                </div>
                <span className="text-gray-300">info@crictips.com</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-4">COMPANY</h4>
                <ul className="space-y-3">
                  {["About Us", "Contact Us", "Careers", "Terms & Conditions", "Privacy Policy"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                        <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">RESOURCES</h4>
                <ul className="space-y-3">
                  {["Cricket News", "Match Predictions", "Fantasy Tips", "Live Scores", "Responsible Gambling"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                        <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest cricket predictions, match analysis, and exclusive offers straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, color: "hover:bg-blue-400" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                { icon: <FaYoutube />, color: "hover:bg-red-600" },
                { icon: <FaTelegram />, color: "hover:bg-blue-500" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">IPL 2025</span>
              <div className="ml-2 px-2 py-1 text-xs bg-yellow-400 text-gray-900 rounded">TEAMS</div>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                { name: "CSK", full: "Chennai Super Kings" },
                { name: "MI", full: "Mumbai Indians" },
                { name: "RCB", full: "Royal Challengers" },
                { name: "KKR", full: "Kolkata Knight Riders" },
                { name: "DC", full: "Delhi Capitals" },
                { name: "GT", full: "Gujarat Titans" },
                { name: "LSG", full: "Lucknow Super Giants" },
                { name: "PBKS", full: "Punjab Kings" },
                { name: "RR", full: "Rajasthan Royals" },
                { name: "SRH", full: "Sunrisers Hyderabad" }
              ].map((team, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 group flex items-center text-sm">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                      <span className="font-bold mr-1">{team.name}</span>
                      <span className="hidden md:inline text-xs text-gray-500">{team.full}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Teams */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">INTERNATIONAL</span>
              <div className="ml-2 px-2 py-1 text-xs bg-yellow-400 text-gray-900 rounded">TEAMS</div>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "India",
                "Australia",
                "England",
                "New Zealand",
                "South Africa",
                "Pakistan",
                "Sri Lanka",
                "West Indies",
                "Bangladesh",
                "Afghanistan"
              ].map((team, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 group flex items-center text-sm">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{team}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Star Players */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">PLAYER</span>
              <div className="ml-2 px-2 py-1 text-xs bg-yellow-400 text-gray-900 rounded">PROFILES</div>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "Virat Kohli",
                "Rohit Sharma",
                "Jos Buttler",
                "Kane Williamson",
                "Steve Smith",
                "Babar Azam",
                "Ben Stokes",
                "Jasprit Bumrah",
                "Rashid Khan",
                "Rishabh Pant"
              ].map((player, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 group flex items-center text-sm">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{player}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tournaments */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">CRICKET</span>
              <div className="ml-2 px-2 py-1 text-xs bg-yellow-400 text-gray-900 rounded">TOURNAMENTS</div>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "IPL 2025",
                "T20 World Cup",
                "ODI World Cup",
                "The Ashes",
                "Big Bash League",
                "PSL",
                "Caribbean Premier League",
                "ICC Champions Trophy",
                "World Test Championship",
                "The Hundred"
              ].map((tournament, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 group flex items-center text-sm">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{tournament}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} <span className="text-yellow-400 font-medium">CricTips</span>. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Responsible Gambling</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 text-gray-500 text-xs text-center">
          <p>CricTips is for entertainment purposes only. Please gamble responsibly.</p>
        </div>
      </div>
    </footer>
  );
}