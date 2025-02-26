"use client";

import { FaCoins, FaVideo, FaChartLine, FaTrophy } from "react-icons/fa";

export default function CricketInsights() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
        Cricket Insights and Predictions
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaTrophy className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Who Will Win Today’s Cricket Matches?</h3>
          </div>
          <p className="text-lg text-gray-200">
            If you’re a cricket lover, you’re probably interested in match prediction today. In other words, our readers often want to get more tips just before they bet, and that’s why we make sure to feature all our predictions and analyses for matches that take place first.
          </p>
        </div>

        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Odds Analysis</h3>
          </div>
          <p className="text-lg text-gray-200">
            Different bookmakers offer different odds on cricket matches. We manually check every single market we present on our predictions ensuring they are the best value in the market. A section of our website is dedicated to bookies, meaning you can explore various popular online betting sites.
          </p>
        </div>

        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaVideo className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Video Preview</h3>
          </div>
          <p className="text-lg text-gray-200">
            From time to time, we’ll feature a video preview of upcoming cricket matches. In those reviews, we’ll briefly discuss everything that you’ll find in our written match predictions.
          </p>
        </div>

        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaCoins className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Toss Predictions</h3>
          </div>
          <p className="text-lg text-gray-200">
            The coin toss is an essential part of every cricket match. Even though there’s a 50% chance to get a coin toss right, we can still speculate on what would happen in different scenarios. Many bettors change their cricket wagering strategy after the toss, which is why it’s a vital part of cricket wagering.
          </p>
        </div>

        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Live Game Predictions and Tips</h3>
          </div>
          <p className="text-lg text-gray-200">
            Betting on live cricket matches is an exciting activity that can help you make a quick profit. It also comes with higher risk, which is why it’s essential to get proper guidance when placing live bets. Our team is equipped with the knowledge to provide live game predictions and tips, so make sure to check out available in-play content before starting your live betting session.
          </p>
        </div>
      </div>
    </div>
  );
}