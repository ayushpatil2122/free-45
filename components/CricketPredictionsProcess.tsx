"use client";

import { useEffect, useRef } from "react";
import { 
  FaInfoCircle, 
  FaHistory, 
  FaChartLine, 
  FaUsers, 
  FaUserCheck, 
  FaTrophy, 
  FaStar,
  FaCloudSun
} from "react-icons/fa";

export default function CricketPredictionsProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const steps = [
    {
      icon: <FaInfoCircle className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Match Details",
      description: "We analyze venue, time, and weather conditions to help you organize your viewing schedule and make informed bets. Home/away status and weather play crucial roles in predicting cricket outcomes."
    },
    {
      icon: <FaHistory className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Match History",
      description: "By studying head-to-head records and recent results, we uncover patterns in the rivalry and highlight key player performances that could influence the upcoming match."
    },
    {
      icon: <FaChartLine className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Season Recap",
      description: "We analyze both teams' performance throughout the current season, highlighting significant wins/losses and form trends that casual followers might have missed."
    },
    {
      icon: <FaCloudSun className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Betting Trends",
      description: "We examine current wagering patterns while cautioning that popular bets aren't always the most statistically sound. Our experts identify where public sentiment might be overlooking crucial factors."
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Team Rosters & Injuries",
      description: "Get comprehensive analysis of available players for both teams, with special attention to injuries, rest periods, and player rotation strategies that could impact performance."
    },
    {
      icon: <FaUserCheck className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Starting XIs",
      description: "Our experts predict the most likely starting eleven players for each team, based on recent selection patterns, fitness levels, and tactical considerations."
    },
    {
      icon: <FaStar className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Key Players",
      description: "We spotlight match-winning talents whose performance will likely determine the outcome, analyzing their current form and history against the opposition."
    },
    {
      icon: <FaTrophy className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Predicted Winners",
      description: "Based on comprehensive analysis, we provide our expert prediction on which team has the statistical advantage going into the match."
    },
    {
      icon: <FaStar className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Best Bet & Value Bet",
      description: "We offer two betting recommendations: a safer 'best bet' with higher probability and a 'value bet' with attractive odds but moderate risk."
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div> */}
        {/* <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-600 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div> */}
        <div className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 md:w-72 h-40 md:h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
        
        {/* Cricket ball animation */}
        <div className="hidden lg:block absolute top-20 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg animate-bounce"></div>
      </div>

      {/* Main title with enhanced styling */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-sm">
          Our Cricket Prediction Process
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
          The science and art behind our expert cricket match forecasts
        </p>
        <div className="absolute w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
      </div>

      {/* Content Container with Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out border border-yellow-500/30 p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:bg-gray-700/20 hover:border-yellow-400/60 hover:shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-2"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-gray-800/50 shadow-inner border border-yellow-500/20">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <div className="mt-16 text-center">
        <div className="inline-block p-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
        <p className="mt-8 text-gray-400 italic text-sm">Backed by expert analysis and years of cricket knowledge</p>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}