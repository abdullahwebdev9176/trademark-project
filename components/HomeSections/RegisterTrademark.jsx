'use client'

import React from 'react'


const cards = [
  {
    title: (
      <>
        Timely<br />information
      </>
    ),
    desc: 'Register faster',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="22" fill="#fbbf24" stroke="#e5e7eb" strokeWidth="4"/><text x="24" y="32" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold">i</text></svg>
    ),
  },
  {
    title: (
      <>
        Deal with<br />Trademark
      </>
    ),
    desc: 'Objections as required',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="22" fill="#fbbf24" stroke="#e5e7eb" strokeWidth="4"/><path d="M16 24l6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 24l-4-4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 18l4 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: (
      <>
        Transparent<br />status updates
      </>
    ),
    desc: 'Objections as required',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="22" fill="#fbbf24" stroke="#e5e7eb" strokeWidth="4"/><path d="M16 24h16M24 16v16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: (
      <>
        Absolute<br />confidentiality
      </>
    ),
    desc: 'Through online portal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="22" fill="#fbbf24" stroke="#e5e7eb" strokeWidth="4"/><path d="M24 16a8 8 0 100 16 8 8 0 000-16z" fill="#fff"/><path d="M24 20v4l2 2" stroke="#1e3a5c" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: (
      <>
        Competent<br />professionals
      </>
    ),
    desc: 'Register Lawyers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12"><circle cx="24" cy="24" r="22" fill="#fbbf24" stroke="#e5e7eb" strokeWidth="4"/><path d="M24 18l2.5 5.1 5.6.8-4 3.9.9 5.6L24 30.2l-5-2.6.9-5.6-4-3.9 5.6-.8L24 18z" fill="#fff"/><circle cx="24" cy="24" r="3" fill="#fbbf24"/></svg>
    ),
  },
];

const RegisterTrademark = () => {
  return (
    <section className="bg-[#eaf2fa] pt-12 md:pt-16 lg:pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <span className="text-2xl md:text-3xl text-[#1e3a5c] font-bold mr-2">&laquo;</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1e3a5c]">Trademark Registration Experience</h2>
          <span className="text-2xl md:text-3xl text-[#1e3a5c] font-bold ml-2">&raquo;</span>
        </div>
        <p className="text-center text-[#5a6e85] mb-10 max-w-2xl mx-auto text-base md:text-lg">We have a team of lawyers, with years of experience in Trademark Registrations, which allows us to assure you:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
            >
              <div className="bg-[#1e3a5c] rounded-full p-4 mb-3">{card.icon}</div>
              <h3 className="text-lg font-bold text-[#1e3a5c] text-center">{card.title}</h3>
              <p className="text-[#5a6e85] text-center text-sm mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RegisterTrademark