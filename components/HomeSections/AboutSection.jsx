
'use client'

import React from 'react'

import { assets } from '@/Assets/assets';
import Image from 'next/image';


const aboutData = {
  image: assets.AboutUSImage || '/Assets/images/about-us-banner.jpg',
  heading: 'About Our Trademark Services',
  description:
    'We are a team of experienced professionals dedicated to helping you protect your brand identity. Our trademark registration services are designed to make the process simple, secure, and efficient for businesses of all sizes.',
  points: [
    'Expert legal guidance for trademark registration',
    'Transparent process & regular status updates',
    'Confidentiality and data security assured',
    'Fast, reliable, and affordable solutions',
  ],
  button: {
    text: 'Learn More',
    href: '#',
  },
};

const AboutSection = () => {
  return (
    <section className="bg-[#eaf2fa] py-16 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[320px] h-[260px] md:w-[400px] md:h-[320px]">
            <Image
              src={aboutData.image}
              alt="About Trademark"
              fill
              className="object-contain drop-shadow-xl rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-3xl font-bold text-[#1e3a5c] mb-4">{aboutData.heading}</h2>
          <p className="text-[#374151] text-lg mb-5">{aboutData.description}</p>
          <ul className="mb-6 space-y-2">
            {aboutData.points.map((point, idx) => (
              <li key={idx} className="flex items-start text-black gap-2">
                <span className="text-[#FC466B] text-xl">&#10003;</span> {point}
              </li>
            ))}
          </ul>
          <a href={aboutData.button.href}>
            <button className="bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-semibold px-7 py-3 rounded-lg shadow-md hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200">
              {aboutData.button.text}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection