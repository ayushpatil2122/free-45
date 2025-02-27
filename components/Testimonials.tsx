"use client";

import { useState, useEffect } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Verma",
    text: "Amazing predictions! Helped me win my fantasy league multiple times. Their expert analysis gives you the edge to make smart decisions based on real data.",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    role: "Fantasy Cricket Champion"
  },
  {
    name: "Priya Sharma",
    text: "Super accurate match insights. I never place a bet without checking this site first! The detailed player analysis has transformed my approach to cricket betting.",
    rating: 4.5,
    avatar: "/api/placeholder/80/80",
    role: "Cricket Enthusiast"
  },
  {
    name: "Amit Patel",
    text: "The AI-powered analysis is next level. It's like having a cricket expert in my pocket! Their predictions have an uncanny accuracy that keeps me coming back.",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    role: "Professional Bettor"
  },
  {
    name: "Sunita Kapoor",
    text: "Their detailed breakdown of player matchups has completely changed how I view cricket betting. Worth every penny of my subscription!",
    rating: 5,
    avatar: "/api/placeholder/80/80",
    role: "Sports Analyst"
  },
  {
    name: "Mohammed Khan",
    text: "As someone who's followed cricket for decades, I'm impressed by the depth of analysis. Their predictions have a remarkable success rate.",
    rating: 4.5,
    avatar: "/api/placeholder/80/80",
    role: "Lifelong Cricket Fan"
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleDotClick = (index : any) => {
    setActiveTestimonial(index);
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <div className="relative bg-gray-900 text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        {/* <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div> */}
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="hidden lg:block absolute top-20 right-40 w-16 h-2 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full transform rotate-45 shadow-lg"></div>
        <div className="hidden lg:block absolute top-24 right-36 w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg animate-pulse"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-sm">
          What Our Users Say
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
          Join thousands of cricket fans who trust our predictions
        </p>
        <div className="absolute w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full mt-6"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Featured testimonial */}
          <div className="relative mx-auto max-w-4xl border border-yellow-500/30 p-8 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm overflow-hidden">
            {/* Large quote icon */}
            <FaQuoteRight className="absolute top-8 right-8 text-6xl text-yellow-500/10" />
            
            {/* Testimonial content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar and info */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400/50 overflow-hidden shadow-lg">
                  <Image 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Rating stars */}
                <div className="mt-4 flex items-center">
                  {Array.from({ length: Math.floor(testimonials[activeTestimonial].rating) }).map((_, i) => (
                    <FaStar key={i} className="text-xl text-yellow-400" />
                  ))}
                  {testimonials[activeTestimonial].rating % 1 !== 0 && (
                    <FaStar className="text-xl text-yellow-400 opacity-50" />
                  )}
                </div>
              </div>
              
              {/* Testimonial text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl italic text-gray-200 mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-yellow-300">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            {/* <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/5 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/5 rounded-full"></div> */}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? "bg-yellow-400 w-8" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional testimonials (small preview) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={`preview-${index}`}
              className={`border border-yellow-500/20 p-6 rounded-xl shadow-lg bg-gray-800/50 transition-all duration-500 hover:opacity-100 ${
                index === activeTestimonial % 3 ? "ring-2 ring-yellow-400/50" : ""
              }`}
            >
              <p className="text-gray-300 line-clamp-3">"{testimonial.text}"</p>
              <div className="mt-4 flex items-center justify-between">
                <h4 className="font-medium">{testimonial.name}</h4>
                <div className="flex items-center">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <FaStar key={i} className="text-sm text-yellow-400" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <FaStar className="text-sm text-yellow-400 opacity-50" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-16 text-center relative z-10">
        <p className="inline-block px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-300 font-medium hover:bg-yellow-500/20 transition-all cursor-pointer">
          Join 10,000+ cricket fans making smarter predictions
        </p>
      </div>
    </div>
  );
}