'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

// Hero image and card assets (replace with your own if needed)
import heroPhone from '@/Assets/images/hero-man.png';
import heroCard from '@/Assets/images/in-profit-content-1.jpg';

// Acorns-style hero content
const heroContent = {
  heading: 'Trademarkers helps you protect your brand',
  subheading: '',
  description: 'Take control with all-in-one trademark registration, research, and protection services.',
  button: {
    text: 'Register Trademark',
    href: '#register',
  },
};

const HeroSection = () => {
  return (
    <section className="relative bg-[#eaf2fa] from-blue-50 to-blue-100 min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-blue-100">
      {/* Decorative acorn/leaf SVGs (optional, for style) */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="100" rx="60" ry="20" fill="#a7f3d0" />
        <ellipse cx="1200" cy="400" rx="40" ry="14" fill="#60a5fa" />
        <ellipse cx="900" cy="120" rx="30" ry="10" fill="#34d399" />
      </svg>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-10 lg:gap-0">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {heroContent.heading}
          </h1>
          {heroContent.subheading && (
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">{heroContent.subheading}</h2>
          )}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            {heroContent.description}
          </p>
          <Link
            href={heroContent.button.href}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-semibold text-lg shadow-md hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            {heroContent.button.text}
          </Link>
        </div>
        {/* Right: Phone and Card Images, with floating effect */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[340px]">
          {/* Card shadow */}
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-56 h-16 bg-green-200 rounded-full blur-2xl opacity-40 z-0" />
          {/* Card */}
          <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-10 rotate-[-15deg] animate-bounce-slow">
            <Image
              src={heroCard}
              alt="Trademark Card"
              width={180}
              height={120}
              className="rounded-xl shadow-2xl border-4 border-white object-cover"
              priority
            />
          </div>
          {/* Phone */}
          <div className="relative z-20 animate-float-up">
            <Image
              src={heroPhone}
              alt="Trademark App"
              width={260}
              height={520}
              className="object-contain rounded-2xl shadow-2xl border-4 border-white"
              priority
            />
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-float-up {
          animation: float-up 3.5s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
          100% { transform: translateY(0) rotate(-15deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection