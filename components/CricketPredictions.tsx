"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const matches = [
  {
    date: "25 Feb 2025 - 22:00 IST",
    team1: "Zimbabwe",
    team2: "Ireland",
    stadium: "Harare Sports Club, Harare",
    league: "Ireland vs Zimbabwe, 3",
    flag1: "/flags/zimbabwe.png",
    flag2: "/flags/ireland.png",
  },
  {
    date: "26 Feb 2025 - 14:30 IST",
    team1: "Afghanistan",
    team2: "England",
    stadium: "Gaddafi Stadium",
    league: "Champions Trophy, 8",
    flag1: "/flags/afghanistan.png",
    flag2: "/flags/england.png",
  },
  {
    date: "26 Feb 2025 - 19:30 IST",
    team1: "Sri Lanka Masters",
    team2: "South Africa Masters",
    stadium: "Dr. DY Patil Sports Academy",
    league: "International Masters League, 04",
    flag1: "/flags/sri-lanka.png",
    flag2: "/flags/south-africa.png",
  },
];

export default function CricketPredictions() {
  const [index, setIndex] = useState(0);

  const nextMatch = () => {
    setIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const prevMatch = () => {
    setIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-2/3 border-4 border-yellow-400 rounded-xl p-8 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Cricket Predictions
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            If you’re looking for high-quality and accurate cricket predictions for international tests and major
            T20/T10 leagues, you’re in the right place.{" "}
            <span className="font-bold text-yellow-400">We have teamed up with Stake.com, making us the #1 source for cricket predictions in India!</span>
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
          <Image src="/predictionsman.png" alt="Cricket Mascot" width={250} height={250} className="rounded-lg shadow-2xl" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 relative z-10">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border border-gray-700">
          <div className="flex items-center justify-between">
            <button
              onClick={prevMatch}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaArrowLeft className="text-white" />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{matches[index].league}</h2>
              <p className="text-gray-300">{matches[index].date}</p>
            </div>
            <button
              onClick={nextMatch}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
          <div className="mt-6 flex items-center justify-around">
            <div className="flex items-center space-x-4">
              <Image src={matches[index].flag1} alt={matches[index].team1} width={50} height={50} className="rounded-full" />
              <span className="text-xl font-bold">{matches[index].team1}</span>
            </div>
            <span className="text-xl font-bold">VS</span>
            <div className="flex items-center space-x-4">
              <Image src={matches[index].flag2} alt={matches[index].team2} width={50} height={50} className="rounded-full" />
              <span className="text-xl font-bold">{matches[index].team2}</span>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-300">
            <FaMapMarkerAlt className="inline-block mr-2" />
            {matches[index].stadium}
          </div>
        </div>
      </div>
    </div>
  );
}