'use client'

import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 animate-fadein">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">About Trademarkers</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        Trademarkers is dedicated to making trademark registration, research, and protection simple and accessible for everyone. Our global network of experienced intellectual property attorneys helps you secure your brand in over 195 countries and treaty regions, providing fast, cost-effective, and reliable trademark services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to empower entrepreneurs, startups, and established businesses to protect their brands worldwide. We believe that every business, regardless of size, deserves access to expert trademark services and global protection.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Comprehensive trademark search and registration</li>
            <li>Expert legal support for oppositions and cancellations</li>
            <li>Transparent, affordable pricing</li>
            <li>Personalized guidance at every step</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Global reach: 195+ countries and treaty regions</li>
            <li>Network of experienced IP attorneys</li>
            <li>Fast, simple, and secure online process</li>
            <li>Dedicated customer support</li>
            <li>Trusted by thousands of brands worldwide</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;