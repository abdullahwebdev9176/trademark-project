
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { countryFlags, countryNames, countryKeys } from "../../components/utils/country";

export default function TrademarkStudy() {
  const [selectedCountry, setSelectedCountry] = useState("UnitedStates");
  const [trademarkType, setTrademarkType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-8 px-2">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 mt-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl mr-2" aria-label={countryNames[selectedCountry]}>{countryFlags[selectedCountry]}</span>
          <span className="text-lg font-semibold text-blue-700">{countryNames[selectedCountry]}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center">Trademark Study in {countryNames[selectedCountry]}</h1>
        <p className="text-base text-gray-700 mb-4 text-center">In order to proceed with Trademark Study in <b>{countryNames[selectedCountry]}</b> please fill out the following form. You'll have to provide information about the Trademark, the Administrative contact and the Owner.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <Link href="/trademark-registration">
            <button className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#FC466B] hover:to-[#3F5EFB] transition-colors duration-200">
              Back to Registration
            </button>
          </Link>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="country-select" className="block text-gray-700 font-semibold mb-1">Select Country</label>
          <select
            id="country-select"
            className="w-full max-w-xs px-4 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 text-base text-gray-700"
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
          >
            {countryKeys.map(key => (
              <option key={key} value={key}>{countryNames[key]}</option>
            ))}
          </select>
        </div>
      </div>
      <div id="order-form" className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 mt-8 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Order Your Trademark Study</h2>
        <form className="space-y-6">
          {/* Trademark Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Trademark Type <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="trademarkType" value="Word-Only" checked={trademarkType === 'Word-Only'} onChange={() => setTrademarkType('Word-Only')} className="accent-blue-600" />
                <span className="text-black">Word-Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="trademarkType" value="Design-Only" checked={trademarkType === 'Design-Only'} onChange={() => setTrademarkType('Design-Only')} className="accent-blue-600" />
                <span className="text-black">Design-Only / Stylized</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="trademarkType" value="Combined" checked={trademarkType === 'Combined'} onChange={() => setTrademarkType('Combined')} className="accent-blue-600" />
                <span className="text-black">Combined Word & Design</span>
              </label>
            </div>
          </div>
          {/* Trademark Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Trademark Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" placeholder="Trademark to Study" required />
          </div>
          {/* Description of Goods/Services */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description of Goods/Services <span className="text-red-500">*</span></label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" rows={3} placeholder="Describe the goods/services for this trademark" required></textarea>
          </div>
          {/* Admin Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Admin Full Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" placeholder="Admin Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Admin Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" placeholder="admin@email.com" required />
            </div>
          </div>
          {/* Owner Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Owner Full Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" placeholder="Owner Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Owner Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" placeholder="owner@email.com" required />
            </div>
          </div>
          {/* Additional Notes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Additional Notes (optional)</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400" rows={2} placeholder="Any specific requirements or questions"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 mt-4 text-lg">
            Submit Request
          </button>
        </form>
      </div>
      {/* Removed fadein animation to prevent jump effect */}
    </div>
  );
}
