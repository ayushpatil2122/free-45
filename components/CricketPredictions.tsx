"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const matches = [
  {
    id: 1,
    date: "25 Feb 2025 - 22:00 IST",
    team1: "Zimbabwe",
    team2: "Ireland",
    stadium: "Harare Sports Club, Harare",
    league: "Ireland vs Zimbabwe",
    series: "3rd ODI",
    odds1: 2.10,
    odds2: 1.75,
  },
  {
    id: 2,
    date: "26 Feb 2025 - 14:30 IST",
    team1: "Afghanistan",
    team2: "England",
    stadium: "Gaddafi Stadium, Lahore",
    league: "Champions Trophy",
    series: "Match 8",
    odds1: 3.25,
    odds2: 1.40,
  },
  {
    id: 3,
    date: "26 Feb 2025 - 19:30 IST",
    team1: "Sri Lanka Masters",
    team2: "South Africa Masters",
    stadium: "Dr. DY Patil Sports Academy, Mumbai",
    league: "International Masters League",
    series: "Match 04",
    odds1: 1.95,
    odds2: 1.85,
  },
];

export default function CricketPredictions() {
  const [index, setIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  useEffect(() => {
    let interval : any
    if (isAutoplay) {
      interval = setInterval(() => {
        nextMatch();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, index]);

  const nextMatch = () => {
    setIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const prevMatch = () => {
    setIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  const handleMatchHover = () => {
    setIsAutoplay(false);
  };

  const handleMatchLeave = () => {
    setIsAutoplay(true);
  };

  return (
    <div className="relative bg-gray-900 text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-48 md:w-80 h-48 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="hidden md:block absolute top-20 right-20 w-6 h-6 bg-red-500 rounded-full shadow-lg animate-ping opacity-40"></div>
        <div className="hidden md:block absolute bottom-20 left-20 w-6 h-6 bg-red-500 rounded-full shadow-lg animate-ping opacity-40" style={{ animationDuration: "3s", animationDelay: "1.5s" }}></div>
      </div>

      <div className="absolute top-10 right-10 opacity-10 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="white">
          <rect x="30" y="10" width="4" height="80" rx="2" />
          <rect x="48" y="10" width="4" height="80" rx="2" />
          <rect x="66" y="10" width="4" height="80" rx="2" />
          <rect x="25" y="16" width="50" height="4" rx="2" />
          <rect x="25" y="36" width="50" height="4" rx="2" />
          <rect x="25" y="56" width="50" height="4" rx="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-2/3 border border-yellow-400/30 rounded-xl p-8 md:p-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-2xl hover:border-yellow-400/60 transition-all duration-300">
            <motion.h1 
              className="text-5xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Cricket Predictions
              </span>
            </motion.h1>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-4"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
            <motion.p 
              className="mt-4 text-lg text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Get high-quality and accurate cricket predictions for international tests and major
              T20/T10 leagues from our team of cricket experts and data analysts.{" "}
              <span className="font-bold text-yellow-300">
                We have teamed up with Stake.com, making us the #1 source for cricket predictions in India!
              </span>
            </motion.p>
            
            <motion.button 
              className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaTrophy className="mr-2" />
              View All Predictions
            </motion.button>
          </div>
          
          <motion.div 
            className="md:w-1/3 mt-8 md:mt-0 flex justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Upcoming Matches
            </span>
          </h2>
          
          <div 
            className="relative rounded-xl overflow-hidden"
            onMouseEnter={handleMatchHover}
            onMouseLeave={handleMatchLeave}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 z-20">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: isAutoplay ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear", repeat: isAutoplay ? Infinity : 0 }}
              ></motion.div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={matches[index].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                      <FaTrophy className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{matches[index].league}</h3>
                      <p className="text-yellow-300 font-medium">{matches[index].series}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 md:mt-0">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                      <FaCalendarAlt className="text-yellow-400" />
                    </div>
                    <p className="text-gray-300">{matches[index].date}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-col items-center mb-6 md:mb-0">
                    <div className="w-20 h-20 relative mb-4 transform transition-transform duration-300 hover:scale-110">
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1">{matches[index].team1}</h4>
                    <span className="px-4 py-1 bg-gray-700 rounded-full text-yellow-400 font-medium">
                      Odds: {matches[index].odds1}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center my-4 md:my-0">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                      <span className="text-3xl font-bold text-white">VS</span>
                    </div>
                    <button className="mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full text-sm hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      View Prediction
                    </button>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 relative mb-4 transform transition-transform duration-300 hover:scale-110">
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1">{matches[index].team2}</h4>
                    <span className="px-4 py-1 bg-gray-700 rounded-full text-yellow-400 font-medium">
                      Odds: {matches[index].odds2}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8 text-gray-300 bg-gray-800/50 py-3 px-6 rounded-full">
                  <FaMapMarkerAlt className="text-yellow-400 mr-2" />
                  <span>{matches[index].stadium}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button
              onClick={prevMatch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-yellow-500 text-gray-300 hover:text-gray-900 rounded-full transition-all duration-300 z-10"
              aria-label="Previous match"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            
            <button
              onClick={nextMatch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-yellow-500 text-gray-300 hover:text-gray-900 rounded-full transition-all duration-300 z-10"
              aria-label="Next match"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {matches.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  i === index ? "bg-yellow-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Show match ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}