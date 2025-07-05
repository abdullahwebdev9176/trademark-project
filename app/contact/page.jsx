'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    // You can handle contact form logic here
    alert('Message sent!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 animate-fadein flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">Contact Us</h2>
        <p className="text-center text-gray-500 mb-8">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              name="name"
              placeholder="Enter Full Name"
              className={`appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${errors.name ? 'border-red-400' : 'border-blue-200'}`}
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                maxLength: {
                  value: 40,
                  message: 'Name must be at most 40 characters',
                },
              })}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              name="email"
              placeholder="Enter Email"
              className={`appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${errors.email ? 'border-red-400' : 'border-blue-200'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              className={`appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition resize-none ${errors.message ? 'border-red-400' : 'border-blue-200'}`}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
                maxLength: {
                  value: 1000,
                  message: 'Message must be at most 1000 characters',
                },
              })}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg shadow-lg hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1s ease; }
      `}</style>
    </div>
  );
};

export default ContactPage;