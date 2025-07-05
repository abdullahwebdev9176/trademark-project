import React from 'react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 border-t border-blue-200 w-full">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm text-slate-600 mb-4">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="inline-block py-2 px-4 rounded hover:text-blue-700 hover:bg-blue-100 transition-colors duration-150"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <hr className="w-full border-blue-200 my-2" />
        <p className="text-center text-xs text-slate-700 mt-2">&copy; {new Date().getFullYear()} Trademarkers. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;