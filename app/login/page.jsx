'use client'

import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    // You can handle login logic here
    alert('Login successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-blue-100 animate-fadein">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">Admin Login</h2>
        <p className="text-center text-gray-500 mb-8">Sign in to your admin account</p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="new-email"
              name="email"
              placeholder="Enter Email"
              className={`appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${errors.email ? 'border-red-400' : 'border-blue-200'}`}
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              name="password"
              placeholder="Enter Password"
              className={`appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${errors.password ? 'border-red-400' : 'border-blue-200'}`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                maxLength: {
                  value: 32,
                  message: 'Password must be at most 32 characters',
                },
                validate: value => !/\s/.test(value) || 'No spaces allowed in password',
              })}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white font-bold rounded-lg shadow-lg hover:from-[#3F5EFB] hover:to-[#FC466B] transition-colors duration-200 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
          </div>
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

export default Login;