"use client";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Verma",
    text: "Amazing predictions! Helped me win my fantasy league multiple times. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Super accurate match insights. I never place a bet without checking this site first!",
    rating: 4.5,
  },
  {
    name: "Amit Patel",
    text: "The AI-powered analysis is next level. It's like having a cricket expert in my pocket!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
        What Our Users Say
      </h2>

      {/* Testimonials Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-4 border-yellow-400 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-700/10 transition-all duration-300 transform hover:-translate-y-2"
          >
            <p className="text-lg text-gray-200">"{testimonial.text}"</p>
            <div className="mt-6 flex items-center space-x-2">
              {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                <FaStar key={i} className="text-2xl text-yellow-400" />
              ))}
              {testimonial.rating % 1 !== 0 && (
                <FaStar className="text-2xl text-yellow-400 opacity-50" />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}