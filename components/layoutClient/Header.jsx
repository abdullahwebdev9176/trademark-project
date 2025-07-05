
'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Company', href: '#', dropdown: true },
    { name: 'Registration', href: '/trademark-registration' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" width={35} height={35} alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Trademark</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
            <Link href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</Link>
            
            {/* Hamburger for mobile */}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              )}
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="desktop-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.dropdown ? (
                    <>
                      <Link href="#"
                        onClick={() => setDropdownOpen(dropdownOpen === link.name ? false : link.name)}
                        className={
                          'flex items-center block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700' 
                        }
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen === link.name}
                        type="button"
                      >
                        {link.name}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </Link>
                      {dropdownOpen === link.name && (
                        <div className="absolute left-0 z-20 mt-2 w-44 bg-white rounded-md shadow-lg dark:bg-gray-700">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</Link>
                            </li>
                            <li>
                              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Careers</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href} className={
                      link.name === 'Home'
                        ? 'block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white'
                        : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                    } aria-current={link.name === 'Home' ? 'page' : undefined}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="w-full lg:hidden" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === link.name ? false : link.name)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          aria-haspopup="true"
                          aria-expanded={dropdownOpen === link.name}
                          type="button"
                        >
                          {link.name}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {dropdownOpen === link.name && (
                          <div className="mt-2 w-full bg-white rounded-md shadow-lg dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                              <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</Link>
                              </li>
                              <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Careers</Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={link.href} className={
                        link.name === 'Home'
                          ? 'block py-2 pr-4 pl-3 text-white rounded bg-blue-700 dark:text-white'
                          : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700'
                      } aria-current={link.name === 'Home' ? 'page' : undefined}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header