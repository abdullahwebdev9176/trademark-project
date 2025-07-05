'use client'

import Link from 'next/link';
import React from 'react'
 import { useState } from 'react';


const plans = [
  {
    name: 'Basic',
    price: '$2,999',
    duration: 'One Time',
    features: [
      'Trademark Search',
      'Application Filing',
      'Govt. Fee Included',
      'Status Updates',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$4,999',
    duration: 'One Time',
    features: [
      'Everything in Basic',
      'Objection Handling',
      'Dedicated Support',
      'Faster Processing',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$7,999',
    duration: 'One Time',
    features: [
      'Everything in Standard',
      'Hearing Representation',
      'Free Consultation',
      'Priority Service',
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  const [selected, setSelected] = React.useState(1); // default center card
  return (
    <section className="bg-[#eaf2fa] pb-12 md:pb-16 lg:pb-20 px-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="uppercase text-xs tracking-widest text-[#1e3a5c] font-semibold text-center">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5c] mt-2 mb-2 text-center">Trademark Registration Pricing</h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto text-center">Choose the plan that best fits your business needs. All plans include government fees and expert support for a smooth trademark registration process.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl ${plan.highlight && selected !== idx ? 'md:scale-105 md:z-10' : ''} flex flex-col shadow-xl p-8 bg-white border-2 transition-all duration-200 ${selected === idx ? 'border-[#FC466B] scale-105 z-10' : 'border-transparent'} hover:scale-105 hover:shadow-2xl`}
              onClick={() => setSelected(idx)}
            >
              <h3 className="text-xl font-semibold text-[#1e3a5c] mb-2 text-center">{plan.name}</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-[#FC466B]">{plan.price}</span>
                <span className="block text-sm text-[#374151]">{plan.duration}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#374151]">
                    <span className="text-[#3F5EFB] text-lg">&#10003;</span> {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className={`text-center w-full py-3 rounded-lg font-semibold mt-auto transition-colors duration-200 ${selected === idx ? 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white shadow-lg hover:from-[#3F5EFB] hover:to-[#FC466B]' : 'bg-[#eaf2fa] text-[#1e3a5c] hover:bg-[#3F5EFB] hover:text-white'}`}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection