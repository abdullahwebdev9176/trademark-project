'use client'

import React from 'react'
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const brands = [
  {
    name: 'Light & Dark UI',
    icon: (
      <Image src={assets.BrandIcon} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    name: 'Bootstrap 5',
    icon: (
      <Image src={assets.BrandIcon} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    name: 'Validated Code',
    icon: (
      <Image src={assets.BrandIcon} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
];

const BrandSection = () => {
  return (
    <section className="bg-[#eaf2fa] py-12 px-2">

        <div className="flex flex-col items-center justify-center mb-10">
          <span className="uppercase text-xs tracking-widest text-[#1e3a5c] font-semibold">Feature</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5c] mt-2">Benifit Of Tokens</h2>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center w-full md:w-1/3 rounded-lg px-8 py-7 md:py-10 mx-auto shadow-md transition-transform duration-200 backdrop-blur-sm border border-white/30 hover:scale-105 hover:bg-[linear-gradient(120deg,_#f7971e_0%,_#ffd200_100%)] group"
            style={{ background: 'linear-gradient(116.85deg, #FC466B 0%, #3F5EFB 100%)' }}
          >
            <div className="flex-shrink-0 mr-6">{brand.icon}</div>
            <div className="text-white text-2xl font-medium whitespace-nowrap">{brand.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandSection