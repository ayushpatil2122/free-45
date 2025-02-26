"use client";

import { FaInfoCircle, FaHistory, FaChartLine, FaUsers, FaUserCheck, FaTrophy, FaStar } from "react-icons/fa";

export default function CricketPredictionsProcess() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
        How We Come Up With Our Cricket Predictions
      </h2>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Match Details */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaInfoCircle className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Match Details</h3>
          </div>
          <p className="text-lg text-gray-200">
            Before we start predicting the outcome, it’s crucial to provide adequate details regarding the time and the place of the match to help our readers organise their watching schedule. This is also important because it tells you the home and away teams, which plays an important role when placing bets on cricket matches. Moreover, researching weather conditions is often an integral part when making cricket bets.
          </p>
        </div>

        {/* Match History */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaHistory className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Match History</h3>
          </div>
          <p className="text-lg text-gray-200">
            When two teams go head-to-head, we first analyse their match history. We’ll quickly overview their recent results and comment on the possible outcome of the upcoming match. By studying the head-to-head record, we can learn much more about the overall rivalry and individual performances of certain players.
          </p>
        </div>

        {/* Season Recap */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Season Recap</h3>
          </div>
          <p className="text-lg text-gray-200">
            In some cases, we’ll analyse how both teams performed in the league in the ongoing season, which could be helpful to those who don’t usually follow those franchises. We’ll comment on their previous matches and point out important wins/losses in the season.
          </p>
        </div>

        {/* Trends */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Trends</h3>
          </div>
          <p className="text-lg text-gray-200">
            Sometimes, punters prefer certain types of bets over others when placing wagers in online bookmakers. If there’s data available on wagering trends for the match we’re reviewing, we’ll let you know what the public thinks. Please consider that trending bets aren’t always the most probable ones, as most bettors often miss essential information that can make all the difference.
          </p>
        </div>

        {/* Team Rosters and Injuries */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaUsers className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Team Rosters and Injuries</h3>
          </div>
          <p className="text-lg text-gray-200">
            One thing that cricket bettors want to know the most before playing is the roster for both teams. We’ll make a quick overview of all players who will represent the competing teams and comment if there’s anything you should know about particular players.
          </p>
        </div>

        {/* Starting XIs */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaUserCheck className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Starting XIs</h3>
          </div>
          <p className="text-lg text-gray-200">
            What’s more important than the entire team roster is the eleven players selected as match starters. This is often difficult to determine, as teams don’t usually share this type of information before the match, so the best we can do is make the list of the most probable starters.
          </p>
        </div>

        {/* Key Players */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaStar className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Key Players</h3>
          </div>
          <p className="text-lg text-gray-200">
            Like it or not, some players are more important than others, and we usually discuss those whom we consider essential for the upcoming game. Our experts will sometimes create a section called Probable Top Performers and discuss the players we think will do well in the match.
          </p>
        </div>

        {/* Predicted Winners */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaTrophy className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Predicted Winners</h3>
          </div>
          <p className="text-lg text-gray-200">
            The last part of every cricket match prediction is reserved for our final decision. Simply put, we’ll tell you which team is our favourite and is more likely to win the match. Sometimes, making such a decision is easy, especially when there’s a clear favourite.
          </p>
        </div>

        {/* Best Bet and Value Bet */}
        <div className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <FaStar className="text-4xl mr-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold">Best Bet and Value Bet</h3>
          </div>
          <p className="text-lg text-gray-200">
            Finally, we’ll provide two options for you — best bet and value bet. The best bet is usually the one that’s most likely to happen. The value bet comes with great odds but is less likely to be successful.
          </p>
        </div>
      </div>
    </div>
  );
}