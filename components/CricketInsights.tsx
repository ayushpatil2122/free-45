"use client";

import { FaCoins, FaVideo, FaChartLine, FaTrophy, } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function CricketInsights() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-48 md:w-80 h-48 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-20 right-20 w-6 h-6 bg-red-500 rounded-full animate-bounce shadow-lg"></div>
        <div className="hidden md:block absolute bottom-20 left-20 w-6 h-6 bg-red-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.5s" }}></div>
      </div>
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
          <path d="M6.5,2C7.9,2 9,3.1 9,4.5C9,4.7 9,4.9 8.9,5.1L20.6,16.8L21.4,16L22.1,16.7L21.4,17.4L16.8,22L16.1,21.3L16.9,20.5L5.2,8.8C5,8.9 4.8,9 4.5,9C3.1,9 2,7.9 2,6.5C2,5.1 3.1,4 4.5,4C4.8,4 5,4 5.2,4.1L8.9,0.4L9.6,1.1L6.9,3.8C7.3,3.3 7.9,3 8.5,3C8.8,3 9,3 9.2,3.1L20.9,14.8L21.7,14L22.4,14.7L21.7,15.4L15.4,21.7L14.7,21L15.5,20.2L3.8,8.5C3.4,8.1 3.1,7.5 3.1,6.9L5.8,9.6L5.1,8.9L5.8,8.2" />
        </svg>
      </div>

      <motion.h2 
        className="text-5xl font-bold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent px-2">
          Cricket Insights
        </span>
        <span className="block text-3xl mt-2 text-yellow-100 font-light">Expert Analysis & Predictions</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaTrophy className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Match Predictions</h3>
          </div>
          <p className="text-lg text-gray-300">
            Get expert cricket match predictions based on team form, player stats, and pitch conditions. Our analysts provide detailed insights to help you make informed decisions before every match.
          </p>
        </motion.div>

        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaChartLine className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Odds Analysis</h3>
          </div>
          <p className="text-lg text-gray-300">
            We analyze odds from multiple bookmakers to identify the best value bets across all cricket markets. Our comprehensive comparisons help you maximize potential returns on your cricket wagers.
          </p>
        </motion.div>

        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaVideo className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Video Previews</h3>
          </div>
          <p className="text-lg text-gray-300">
            Watch our expert video analysis covering team strategies, player form, and pitch reports. Our visual previews bring cricket insights to life with engaging commentary and statistical breakdowns.
          </p>
        </motion.div>

        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaCoins className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Toss Predictions</h3>
          </div>
          <p className="text-lg text-gray-300">
            Understand how the coin toss impacts match dynamics with our toss analysis. Learn how pitch conditions and weather factors influence decisions, helping you adjust strategy after the toss results.
          </p>
        </motion.div>

        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaChartLine className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Live Predictions</h3>
          </div>
          <p className="text-lg text-gray-300">
            Get real-time insights during matches with our live prediction updates. Our experts analyze game momentum, player performance, and situational context to provide valuable in-play betting guidance.
          </p>
        </motion.div>
        
        <motion.div 
          className="border border-yellow-400/30 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full mr-5 group-hover:bg-yellow-500/20 transition-all duration-300">
              <FaCoins className="text-3xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold">Premium Insights</h3>
          </div>
          <p className="text-lg text-gray-300">
            Unlock exclusive cricket analysis including player matchups, historical trends, and advanced statistical models. Our premium insights give you a competitive edge with specialized expert knowledge.
          </p>
        </motion.div>
      </div>
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          Get Premium Analysis
        </button>
      </motion.div>
    </div>
  );
}