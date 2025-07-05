'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

const actions = [
  'REGISTER TRADEMARK',
  'REGISTER US TRADEMARK',
  'REGISTER TRADEMARK IN MAJOR MARKETS',
  'TRADEMARK RESEARCH',
  'TRADEMARK OPPOSITION/CANCELLATION',
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* SVG Pattern BG */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,320 C480,480 960,160 1440,320" stroke="#60a5fa" strokeWidth="2" fill="none" />
      </svg>
      <div className="px-6 xl:px-0 relative z-10 mx-w-full xl:max-w-[85%] flex flex-col-reverse lg:flex-row items-center justify-center mx-auto w-full px-4 py-12">
        {/* Left Content */}
        <div className="w-full lg:w-[60%] text-center lg:text-left animate-fadein">
          <h1 className="text-2xl sm:text-3xl lg:text-2xl lg:text-2xl font-extrabold text-gray-800 leading-tight mb-6 drop-shadow-xl">
            The <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded animate-pulse shadow">Trademarkers</span> network of
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent px-2 lg:px-0">Experienced Intellectual Property Attorneys</span>
          </h1>
          <p className="mb-2 text-gray-700 text-lg">
            <span className="font-bold text-blue-800">in 195 Countries</span> <span className="text-gray-500">and Treaty Regions can provide you with fast, simple, and cost-efficient trademark filing services</span>
          </p>
          {/* Action Buttons (Grid) */}
          <div className="my-8 w-full flex justify-center lg:justify-start flex-wrap gap-4">
            {actions.map((action, idx) => (
              <Link href="#"
                key={idx}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-blue-700 font-semibold text-base rounded-full shadow-lg border-2 border-blue-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 group relative overflow-hidden"
              >
                
                <span className="relative z-10 transition-all duration-300">{action}</span>
                <span className="absolute left-0 top-0 w-full h-full bg-blue-100 opacity-0 group-hover:opacity-20 transition-all duration-300" />
              </Link>
            ))}
          </div>
          <div className="mb-2 text-gray-600 text-sm">If you have an existing case number you can enter it here:</div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <input
              type="text"
              placeholder="Search Serial Number"
              className="w-full max-w-xs px-5 py-3 rounded-full bg-white/60 shadow-inner border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none backdrop-blur-md placeholder-gray-400 text-gray-800 transition"
            />
          </div>
        </div>
        {/* Right Image with Swiper overlay and animated slider */}
        <div className="pb-10 lg:pb-0 w-full lg:w-[40%] flex items-center justify-center animate-fadein delay-200 relative">
          <Image
            src={assets.HeroMan}
            alt="Trademark Expert"
            width={400}
            height={500}
            className="object-contain drop-shadow-2xl rounded-xl animate-hero-img-effect"
            priority
          />
          
        </div>
      </div>
      {/* Custom Animations - moved to global to avoid nested styled-jsx error */}
      <style jsx global>{`
        @keyframes hero-img-effect {
          0% { filter: brightness(0.95) drop-shadow(0 0 0 #60a5fa); transform: scale(0.98) rotate(-2deg); }
          30% { filter: brightness(1.05) drop-shadow(0 8px 32px #60a5fa55); transform: scale(1.03) rotate(2deg); }
          60% { filter: brightness(1.08) drop-shadow(0 12px 40px #60a5fa33); transform: scale(1.01) rotate(-1deg); }
          100% { filter: brightness(0.95) drop-shadow(0 0 0 #60a5fa); transform: scale(0.98) rotate(-2deg); }
        }
        .animate-hero-img-effect {
          animation: hero-img-effect 3.5s ease-in-out infinite;
        }
        .swiper-fade .swiper-slide {
          transition-property: opacity, transform;
        }
        @keyframes bubble {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          50% { transform: scale(1.05); box-shadow: 0 8px 32px 0 rgba(59,130,246,0.15); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
        }
        .animate-bubble {
          animation: bubble 2s infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1s ease; }
        .animate-fadein-up { animation: fadein 0.7s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </section>
  );
};

export default HeroSection