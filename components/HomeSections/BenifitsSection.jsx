'use client'

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react'


const features = [
  {
    title: 'Early Bonus',
    color: 'bg-[#ea6c7d]',
    icon: (
        <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
    
  },
  {
    title: 'Low Cost',
    color: 'bg-[#f6a04d]',
    icon: (
      <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    title: 'Univarsal Access',
    color: 'bg-[#6edc7b]',
    icon: (
      <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    title: 'Money Transfer',
    color: 'bg-[#c97cf6]',
    icon: (
      <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    title: 'Secure Transfer',
    color: 'bg-[#6d6cf6]',
    icon: (
      <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
  {
    title: 'Several Profit',
    color: 'bg-[#6ed3e6]',
    icon: (
      <Image src={assets.smCardImg} width={50} height={50} className='object-contain' alt=''/>
    ),
  },
];

const BrandSection = () => {
  return (
    <section className="bg-[#eaf2fa] py-12 md:py-16 lg:py-20 px-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="uppercase text-xs tracking-widest text-[#1e3a5c] font-semibold">Feature</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5c] mt-2">Benifit Of Tokens</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-lg ${feature.color} shadow-lg flex flex-col items-center justify-center py-10 px-4 hover:scale-105 transition-transform duration-200`}
            >
              {feature.icon}
              <h3 className="text-white text-lg font-semibold text-center mt-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSection