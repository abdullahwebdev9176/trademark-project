'use client'

import React, { useState } from 'react';
import Link from 'next/link';


// Add flag URLs for each country (use public domain or emoji for demo)
const countryFlags = {
    UnitedStates: '🇺🇸',
    Canada: '🇨🇦',
    UnitedKingdom: '🇬🇧',
    Australia: '🇦🇺',
    Germany: '🇩🇪',
    France: '🇫🇷',
    India: '🇮🇳',
    China: '🇨🇳',
    Brazil: '🇧🇷',
};

const countryData = {
    UnitedStates: {
        name: 'United States',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '$90',
                description: 'Get a detailed attorney analysis and search report to check if your brand can be registered. This step is optional but highly recommended to avoid future issues.',
                benefits: [
                    'Identify pre-existing claims or conflicts',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in your target market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '$500',
                description: 'Confident about your brand? Start the official application process. Our licensed agency will handle your request and file with the USPTO.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 9-16 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '$90', total: '$160' },
            { step: 'Trademark Registration Request', perClass: '$500', total: '$500' },
            { step: 'Each Additional Class', perClass: '$470', total: '$470' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    Canada: {
        name: 'Canada',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '$95',
                description: 'Get a detailed attorney analysis and search report for Canada. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in Canada',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the Canadian market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '$520',
                description: 'Start the official application process for Canada. Our licensed agency will handle your request and file with CIPO.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 12-18 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '$95', total: '$170' },
            { step: 'Trademark Registration Request', perClass: '$520', total: '$520' },
            { step: 'Each Additional Class', perClass: '$480', total: '$480' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    UnitedKingdom: {
        name: 'United Kingdom',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '£80',
                description: 'Get a detailed attorney analysis and search report for the UK. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in the UK',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the UK market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '£450',
                description: 'Start the official application process for the UK. Our licensed agency will handle your request and file with the UKIPO.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 6-12 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '£80', total: '£150' },
            { step: 'Trademark Registration Request', perClass: '£450', total: '£450' },
            { step: 'Each Additional Class', perClass: '£400', total: '£400' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    Australia: {
        name: 'Australia',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: 'A$120',
                description: 'Get a detailed attorney analysis and search report for Australia. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in Australia',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the Australian market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: 'A$600',
                description: 'Start the official application process for Australia. Our licensed agency will handle your request and file with IP Australia.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 7-12 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: 'A$120', total: 'A$200' },
            { step: 'Trademark Registration Request', perClass: 'A$600', total: 'A$600' },
            { step: 'Each Additional Class', perClass: 'A$550', total: 'A$550' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    Germany: {
        name: 'Germany',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '€85',
                description: 'Get a detailed attorney analysis and search report for Germany. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in Germany',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the German market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '€400',
                description: 'Start the official application process for Germany. Our licensed agency will handle your request and file with the DPMA.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 6-10 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '€85', total: '€150' },
            { step: 'Trademark Registration Request', perClass: '€400', total: '€400' },
            { step: 'Each Additional Class', perClass: '€350', total: '€350' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    France: {
        name: 'France',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '€90',
                description: 'Get a detailed attorney analysis and search report for France. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in France',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the French market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '€420',
                description: 'Start the official application process for France. Our licensed agency will handle your request and file with the INPI.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 6-12 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '€90', total: '€160' },
            { step: 'Trademark Registration Request', perClass: '€420', total: '€420' },
            { step: 'Each Additional Class', perClass: '€370', total: '€370' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    India: {
        name: 'India',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '₹5,000',
                description: 'Get a detailed attorney analysis and search report for India. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in India',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the Indian market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '₹18,000',
                description: 'Start the official application process for India. Our licensed agency will handle your request and file with the Indian Trademark Office.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 12-24 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '₹5,000', total: '₹8,000' },
            { step: 'Trademark Registration Request', perClass: '₹18,000', total: '₹18,000' },
            { step: 'Each Additional Class', perClass: '₹15,000', total: '₹15,000' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    China: {
        name: 'China',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: '¥700',
                description: 'Get a detailed attorney analysis and search report for China. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in China',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the Chinese market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: '¥3500',
                description: 'Start the official application process for China. Our licensed agency will handle your request and file with the CNIPA.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 12-18 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: '¥700', total: '¥1,200' },
            { step: 'Trademark Registration Request', perClass: '¥3,500', total: '¥3,500' },
            { step: 'Each Additional Class', perClass: '¥3,000', total: '¥3,000' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
    Brazil: {
        name: 'Brazil',
        steps: [
            {
                title: 'Step 1: Trademark Study',
                price: 'R$400',
                description: 'Get a detailed attorney analysis and search report for Brazil. Highly recommended before filing.',
                benefits: [
                    'Identify pre-existing claims or conflicts in Brazil',
                    'Professional analysis of trademark similarities',
                    'Avoid accidental infringement',
                    'Snapshot of potential brands in the Brazilian market',
                ],
                button: 'Order Study',
            },
            {
                title: 'Step 2: File Your Trademark Application',
                price: 'R$1,800',
                description: 'Start the official application process for Brazil. Our licensed agency will handle your request and file with the INPI.',
                benefits: [
                    'Deters copycats and protects your brand',
                    'Reduces risk of infringement claims',
                    'Status updates and support throughout the process',
                    'Expected registration in 14-24 months (if no opposition)',
                ],
                button: 'Order Registration',
            },
        ],
        pricing: [
            { step: 'Trademark Study', perClass: 'R$400', total: 'R$700' },
            { step: 'Trademark Registration Request', perClass: 'R$1,800', total: 'R$1,800' },
            { step: 'Each Additional Class', perClass: 'R$1,500', total: 'R$1,500' },
            { step: 'Trademark Certificate Request', perClass: 'Free', total: 'Free' },
        ],
    },
};

const countryKeys = [
    'UnitedStates',
    'Canada',
    'UnitedKingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'China',
    'Brazil',
];


const TrademarkRegistration = () => {
    // --- MODAL LOGIC CLEANUP ---
    // Only one showModal state at root, controls both modal types
    const [showModal, setShowModal] = useState(null); // null | 'study' | 'registration'
    const [selectedCountry, setSelectedCountry] = useState('UnitedStates');
    const country = countryData[selectedCountry];

    // Modal content for both flows
    const renderModalContent = () => {
        if (showModal === 'study') {
            return (
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Order Trademark Study</h2>
                    <p className="mb-4 text-gray-700">A trademark study helps you assess the registrability and risks before filing. Our experts will review your brand and provide a detailed report for <b>{country.name}</b>.</p>
                    <button
                        className="w-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 mt-2 text-lg"
                        onClick={() => {
                            setShowModal(null);
                            window.location.href = '/trademark-study';
                        }}
                    >
                        Proceed to Study Form
                    </button>
                </div>
            );
        }
        if (showModal === 'registration') {
            return (
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Order Trademark Registration</h2>
                    <p className="mb-4 text-gray-700">Ready to register your trademark in <b>{country.name}</b>? Proceed to the registration form to submit your details and start the process.</p>
                    <button
                        className="w-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 mt-2 text-lg"
                        onClick={() => {
                            setShowModal(null);
                            window.location.href = '/trademark-registration-form';
                        }}
                    >
                        Proceed to Registration Form
                    </button>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-2 flex flex-col items-center relative">
            {/* Modal Overlay (root-level, only one instance) */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    {renderModalContent()}
                    <button
                        className="absolute top-4 right-4 text-3xl text-white hover:text-blue-200 focus:outline-none"
                        onClick={() => setShowModal(null)}
                        aria-label="Close Modal"
                    >
                        &times;
                    </button>
                </div>
            )}
            {/* Select Country Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 text-center">Select Country</h2>
            {/* Flag and Select Box */}
            <div className="flex flex-col items-center mb-8 w-full">
                <div className="flex items-center justify-center mb-3">
                    <span className="text-4xl mr-2" aria-label={country.name}>{countryFlags[selectedCountry]}</span>
                    <span className="text-lg font-semibold text-blue-700">{country.name}</span>
                </div>
                <select
                    id="country-select"
                    className="w-full max-w-xs px-4 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 text-base text-gray-700"
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                >
                    {countryKeys.map(key => (
                        <option key={key} value={key}>{countryData[key].name}</option>
                    ))}
                </select>
            </div>
            <section className="w-full max-w-5xl mx-auto mb-12 px-2 sm:px-4">
                <h1 className="text-4xl md:text-4xl font-bold text-blue-700 mb-4 text-center">Trademark Registration in {country.name}</h1>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                    Secure your brand in {country.name} with a simple, attorney-backed process. Get a professional study or file your application directly—our experts guide you every step of the way.
                </p>
            </section>
            <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 px-2 sm:px-0">
                {country.steps.map((step, idx) => (
                    <div key={step.title} className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <h2 className="text-2xl font-bold text-blue-700 mb-2">{step.title}</h2>
                            <div className="text-3xl font-extrabold text-green-500 mb-2">{step.price}</div>
                            <p className="text-gray-600 mb-4">{step.description}</p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                                {step.benefits.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        </div>
                        {step.button === 'Order Study' ? (
                            <button
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg shadow-lg hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                onClick={() => setShowModal('study')}
                            >
                                {step.button}
                            </button>
                        ) : (
                            <button
                                className="w-full py-3 px-4 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] text-white font-bold rounded-lg shadow-lg hover:from-[#FC466B] hover:to-[#3F5EFB] transition-colors duration-200 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                onClick={() => setShowModal('registration')}
                            >
                                {step.button}
                            </button>
                        )}
                    </div>
                ))}
            </section>
            <section className="w-full max-w-4xl mx-auto mb-16 px-2 sm:px-0">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Pricing Table</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-xl shadow border border-blue-100">
                        <thead>
                            <tr className="bg-blue-50">
                                <th className="py-3 px-4 text-left text-black font-semibold">Step</th>
                                <th className="py-3 px-4 text-left text-black font-semibold">Per Class</th>
                                <th className="py-3 px-4 text-left text-black font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {country.pricing.map((row, i) => (
                                <tr key={i} className="border-t border-blue-100">
                                    <td className="py-3 px-4 text-black">{row.step}</td>
                                    <td className="py-3 px-4 text-black">{row.perClass}</td>
                                    <td className="py-3 px-4 text-black">{row.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Prices include all official and professional fees. Legal defenses, admin, and courier fees are not included. Timeframes are estimates and may vary if objections or oppositions occur.
                </p>
            </section>
            <section className="w-full max-w-3xl mx-auto mb-12 text-center px-2 sm:px-0">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Questions? Need Help?</h4>
                <p className="text-gray-700 mb-4">Contact our team for personalized guidance or to start your trademark journey today.</p>
                <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-semibold text-lg shadow-md hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200">Contact Us</Link>
            </section>
            {/* Removed fadein animation to prevent jump effect */}
        </div>
    );
};

export default TrademarkRegistration;
