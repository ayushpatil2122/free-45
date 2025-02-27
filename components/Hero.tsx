"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars, PerspectiveCamera } from "@react-three/drei";
import { useRef, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three" 

function Stadium() {
  const { scene } = useGLTF("/cricket_stadium.glb");
  const stadiumRef = useRef<THREE.Object3D | null>(null);
  
  useFrame(() => {
    if (stadiumRef.current) {
      stadiumRef.current.rotation.y += 0.002; 
    }
  });

  useEffect(() => {
    window.dispatchEvent(new Event('model-loaded'));
  }, []);

  return <primitive ref={stadiumRef} object={scene} scale={1.7} position={[0, -3.5, 0]} />;
}

function EnhancedStars() {
  return (
    <>
      <Stars 
        radius={120} 
        depth={60} 
        count={3000} 
        factor={4} 
        saturation={0.5} 
        fade
        speed={0.5}
      />
      
      <Stars 
        radius={100} 
        depth={40} 
        count={1000} 
        factor={6} 
        saturation={0.8}
        fade
        speed={0.3}
      />
      <Stars 
        radius={80} 
        depth={30} 
        count={500} 
        factor={10} 
        saturation={1}
        fade
        speed={0.2}
      />
    </>
  );
}

function FallbackObject() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#6b7280" wireframe />
    </mesh>
  );
}

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gray-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-gray-600 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="star-field absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          ></div>
        ))}
        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>

      <div className="absolute top-0 w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center z-30">
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-2 md:mr-3">
            <span className="font-bold text-black text-sm md:text-lg">MP</span>
          </div>
          <span className="font-semibold text-lg md:text-xl">Midnight Predictions</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {["Home", "Features", "Pricing", "About"].map((item, index) => (
            <button key={index} className="text-white/80 hover:text-white transition">
              {item}
            </button>
          ))}
        </div>
      
        <div className="flex items-center">
          <button className="hidden md:block bg-white/10 backdrop-blur-md px-4 md:px-5 py-1.5 md:py-2 rounded-lg border border-white/20 hover:bg-white/20 transition">
            Sign In
          </button>
          <button 
            className="md:hidden relative z-30 p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-20 flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center space-y-6">
          {["Home", "Features", "Pricing", "About"].map((item, index) => (
            <button key={index} className="text-white text-xl font-medium hover:text-yellow-400 transition">
              {item}
            </button>
          ))}
          <button className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition">
            Sign In
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/4 md:top-1/3 left-4 md:left-16 z-10 max-w-xs sm:max-w-sm md:max-w-xl px-4 md:px-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Cricket
          </span> Predictions
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-200 leading-relaxed">
          Stay ahead of the game with AI-powered match predictions and real-time analytics that give you the winning edge.
        </p>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="px-5 sm:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-base md:text-lg rounded-xl hover:shadow-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:-translate-y-1">
            Get Predictions
          </button>
          <button className="px-5 sm:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-base md:text-lg rounded-xl hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="mt-8 md:mt-12 flex flex-wrap items-center space-x-2">
          <div className="flex -space-x-3 mb-2 sm:mb-0">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-xs font-bold">
                {["MS", "VK", "SR", "JB"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-white/80">Join <span className="text-yellow-400 font-bold">10,000+</span> cricket fans</p>
        </div>
      </motion.div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center z-10 stadium-loader">
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-gray-600 border-t-transparent rounded-full animate-spin stadium-loading-spinner"></div>
          <style jsx>{`
            .stadium-loader {
              opacity: 1;
              transition: opacity 0.5s ease-out;
            }
            .stadium-loader.hidden {
              opacity: 0;
              pointer-events: none;
            }
          `}</style>
        </div>

        <Canvas dpr={[1, 2]} shadows>
          <PerspectiveCamera makeDefault position={[0, 5, 22]} fov={40} />
          <color attach="background" args={["#0f0f12"]} />
          <fog attach="fog" args={["#0f0f12", 5, 30]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, 5]} intensity={0.5} color="#6b7280" />
  
          <Suspense fallback={<FallbackObject />}>
            <Stadium />
            <EnhancedStars />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2.2}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-4 md:bottom-10 w-full px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center"
      >
        {[
          {
            title: "Match Predictions",
            icon: "🏏",
            desc: "AI-powered predictions with 90%+ accuracy"
          },
          {
            title: "Player Analytics",
            icon: "📊",
            desc: "Performance insights across all tournaments"
          },
          {
            title: "Live Updates",
            icon: "⚡",
            desc: "Real-time match insights and analytics"
          },
          {
            title: "Historical Data",
            icon: "📚",
            desc: "Comprehensive reports with detailed statistics"
          },
        ].map((service, index) => (
          <div 
            key={index} 
            className="bg-white/10 backdrop-blur-lg p-3 md:p-6 rounded-xl border border-white/10 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-xl md:text-3xl mb-1 md:mb-3">{service.icon}</div>
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">{service.title}</h3>
            <p className="text-xs md:text-sm text-white/70 mb-2 md:mb-4 hidden sm:block">{service.desc}</p>
            <button className="w-full px-2 md:px-4 py-2 md:py-3 text-xs md:text-base bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg hover:from-gray-500 hover:to-gray-600 transition">
              Try Demo
            </button>
          </div>
        ))}
      </motion.div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            // Add event listener for when the model is loaded
            window.addEventListener('model-loaded', () => {
              const loader = document.querySelector('.stadium-loader');
              if (loader) loader.classList.add('hidden');
            });
            
            // Fallback timeout to hide loader after 8 seconds regardless
            setTimeout(() => {
              const loader = document.querySelector('.stadium-loader');
              if (loader) loader.classList.add('hidden');
            }, 8000);

            // Adjust camera position based on screen size
            const handleResize = () => {
              const isMobile = window.innerWidth < 768;
              // You would need to add logic to update camera position
              // This is just a placeholder as we can't directly manipulate THREE.js objects here
              window.dispatchEvent(new CustomEvent('resize-camera', { 
                detail: { isMobile }
              }));
            };
            
            window.addEventListener('resize', handleResize);
            handleResize(); // Initial call
          });
        `
      }} />
    </div>
  );
}