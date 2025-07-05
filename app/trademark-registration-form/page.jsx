
'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { countryFlags, countryNames, countryKeys } from "../../components/utils/country";
export default function TrademarkRegistrationForm() {
  const [selectedCountry, setSelectedCountry] = useState("UnitedStates");
  const [trademarkClasses, setTrademarkClasses] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    trigger
  } = useForm({
    mode: "onTouched"
  });

  // Controlled radios
  const trademarkType = watch("trademarkType", "");
  const usedInCommerce = watch("usedInCommerce", "");
  const filedInOtherCountry = watch("filedInOtherCountry", "");

  // Example class list for demo
  const classList = [
    "Class 1 - Chemicals", "Class 2 - Paints", "Class 3 - Cosmetics", "Class 5 - Pharmaceuticals", "Class 9 - Electronics", "Class 25 - Clothing", "Class 35 - Advertising", "Class 41 - Education", "Class 42 - Technology"
  ];

  const handleClassChange = (cls) => {
    let updated;
    if (trademarkClasses.includes(cls)) {
      updated = trademarkClasses.filter((c) => c !== cls);
    } else {
      updated = [...trademarkClasses, cls];
    }
    setTrademarkClasses(updated);
    setValue("trademarkClasses", updated, { shouldValidate: true });
    trigger("trademarkClasses");
  };

  // --- MODAL LOGIC CLEANUP ---
  // Only one showModal state at root, controls both modal types
  const [showModal, setShowModal] = useState(null); // null | 'study' | 'registration'

  // Modal content for both flows
  const renderModalContent = () => {
    if (showModal === 'study') {
      return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Order Trademark Study</h2>
          <p className="mb-4 text-gray-700">A trademark study helps you assess the registrability and risks before filing. Our experts will review your brand and provide a detailed report for <b>{countryNames[selectedCountry]}</b>.</p>
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
          <p className="mb-4 text-gray-700">Ready to register your trademark in <b>{countryNames[selectedCountry]}</b>? Proceed to the registration form to submit your details and start the process.</p>
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

  const onSubmit = (data) => {
    // You can handle the valid form data here (e.g., send to API)
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-8 px-2 relative">
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

      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 mt-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl mr-2" aria-label={countryNames[selectedCountry]}>{countryFlags[selectedCountry]}</span>
          <span className="text-lg font-semibold text-blue-700">{countryNames[selectedCountry]}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center">Trademark Registration in {countryNames[selectedCountry]}</h1>
        <p className="text-base text-gray-700 mb-4 text-center">In order to proceed with Trademark Registration in <b>{countryNames[selectedCountry]}</b> please fill out the following form. You'll have to provide information about the Trademark, the Administrative contact and the Owner.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <Link href="/trademark-registration">
            <button className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#FC466B] hover:to-[#3F5EFB] transition-colors duration-200">
              Back to Registration
            </button>
          </Link>
          {/* Order Study Button */}
          <button
            className="bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200"
            onClick={() => setShowModal('study')}
          >
            Order Study
          </button>
          {/* Order Registration Button */}
          <button
            className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#FC466B] hover:to-[#3F5EFB] transition-colors duration-200"
            onClick={() => setShowModal('registration')}
          >
            Order Registration
          </button>
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
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Order Your Trademark Registration</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Trademark Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Trademark Type <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-black">
                <input type="radio" value="Word-Only" {...register("trademarkType", { required: "Please select a trademark type" })} className="accent-blue-600" />
                <span className="text-black">Word-Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-black">
                <input type="radio" value="Design-Only" {...register("trademarkType", { required: "Please select a trademark type" })} className="accent-blue-600" />
                <span className="text-black">Design-Only / Stylized</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-black">
                <input type="radio" value="Combined" {...register("trademarkType", { required: "Please select a trademark type" })} className="accent-blue-600" />
                <span className="text-black">Combined Word & Design</span>
              </label>
            </div>
            {errors.trademarkType && <p className="text-red-500 text-sm mt-1">{errors.trademarkType.message}</p>}
          </div>
          {/* Trademark Classes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Trademark Classes <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-2">
              {classList.map(cls => (
                <label key={cls} className="flex items-center gap-2 cursor-pointer border border-blue-200 rounded px-2 py-1 text-black">
                  <input
                    type="checkbox"
                    checked={trademarkClasses.includes(cls)}
                    onChange={() => handleClassChange(cls)}
                    className="accent-blue-600"
                  />
                  <span className="text-black">{cls}</span>
                </label>
              ))}
            </div>
            {/* Hidden input for react-hook-form validation */}
            <input type="hidden" {...register("trademarkClasses", {
              validate: v => (trademarkClasses.length > 0) || "Select at least one class"
            })} value={trademarkClasses.join(",")} />
            {errors.trademarkClasses && <p className="text-red-500 text-sm mt-1">{errors.trademarkClasses.message}</p>}
          </div>
          {/* Used in Commerce */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Is your trademark being used in commerce in {countryNames[selectedCountry]}? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="Yes" {...register("usedInCommerce", { required: "Please select an option" })} className="accent-blue-600" />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="No" {...register("usedInCommerce", { required: "Please select an option" })} className="accent-blue-600" />
                No
              </label>
            </div>
            {errors.usedInCommerce && <p className="text-red-500 text-sm mt-1">{errors.usedInCommerce.message}</p>}
          </div>
          {/* Filed in Other Country */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Have you filed your trademark application in any other country within the last 6 months? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="Yes" {...register("filedInOtherCountry", { required: "Please select an option" })} className="accent-blue-600" />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="No" {...register("filedInOtherCountry", { required: "Please select an option" })} className="accent-blue-600" />
                No
              </label>
            </div>
            {errors.filedInOtherCountry && <p className="text-red-500 text-sm mt-1">{errors.filedInOtherCountry.message}</p>}
          </div>
          {/* Admin Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Admin Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-black"
                placeholder="Admin Name"
                {...register("adminName", {
                  required: "Admin name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                  maxLength: { value: 50, message: "Name must be less than 50 characters" }
                })}
              />
              {errors.adminName && <p className="text-red-500 text-sm mt-1">{errors.adminName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Admin Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-black"
                placeholder="admin@email.com"
                {...register("adminEmail", {
                  required: "Admin email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address"
                  }
                })}
              />
              {errors.adminEmail && <p className="text-red-500 text-sm mt-1">{errors.adminEmail.message}</p>}
            </div>
          </div>
          {/* Owner Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Owner Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400"
                placeholder="Owner Name"
                {...register("ownerName", {
                  required: "Owner name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                  maxLength: { value: 50, message: "Name must be less than 50 characters" }
                })}
              />
              {errors.ownerName && <p className="text-red-500 text-sm mt-1">{errors.ownerName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Owner Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400"
                placeholder="owner@email.com"
                {...register("ownerEmail", {
                  required: "Owner email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address"
                  }
                })}
              />
              {errors.ownerEmail && <p className="text-red-500 text-sm mt-1">{errors.ownerEmail.message}</p>}
            </div>
          </div>
          {/* Additional Notes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Additional Notes (optional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder-gray-400"
              rows={2}
              placeholder="Any specific requirements or questions"
              {...register("notes", {
                maxLength: { value: 300, message: "Notes must be less than 300 characters" }
              })}
            ></textarea>
            {errors.notes && <p className="text-red-500 text-sm mt-1">{errors.notes.message}</p>}
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg px-6 py-3 shadow hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 mt-4 text-lg">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}