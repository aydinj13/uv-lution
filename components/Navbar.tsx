"use client"

import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = [
    { href: "/background", label: "Background" },
    { href: "/problem", label: "Problem" },
    { href: "/solution", label: "Solution" },
    { href: "/test", label: "Testing" },
    { href: "/future", label: "Future" },
  ];

  return (
    <header 
      className="sticky right-0 top-0 h-14 w-full transition-[top] duration-500 ease-in-expo z-40 bg-white lg:opacity-95 md:h-16"
    >
      <div className="flex h-full w-full">
        <div className="mx-auto flex h-full w-full max-w-[84rem] items-center justify-between gap-8 px-6 sm:px-8">
          <Link className="flex flex-shrink-0 items-center gap-4" href="/#hero">
          <svg
  version="1.0"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="20px"
  height="20px"
  viewBox="0 0 64 64"
  enableBackground="new 0 0 64 64"
  xmlSpace="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <path
          fill="#394240"
          d="M40,56H24c-2.211,0-4,1.789-4,4s1.789,4,4,4h16c2.211,0,4-1.789,4-4S42.211,56,40,56z"
        />
        <path
          fill="#394240"
          d="M32,0C16.539,0,4,12.539,4,28c0,9.445,4.695,17.781,11.863,22.844C16.438,51.25,17.375,52,20,52 
          s21.812,0,24,0s3.559-0.742,4.133-1.148C55.305,45.781,60,37.445,60,28C60,12.539,47.461,0,32,0z M43.891,44H36V28 
          c0-2.211-1.789-4-4-4s-4,1.789-4,4v16h-7.891C15.215,40.359,12,34.578,12,28c0-11.047,8.953-20,20-20s20,8.953,20,20 
          C52,34.578,48.785,40.359,43.891,44z"
        />
      </g>
      <path
        fill="#ffcc00"
        d="M43.891,44H36V28c0-2.211-1.789-4-4-4s-4,1.789-4,4v16h-7.891C15.215,40.359,12,34.578,12,28 
        c0-11.047,8.953-20,20-20s20,8.953,20,20C52,34.578,48.785,40.359,43.891,44z"
      />
    </g>
  </g>
</svg>
            <span className="font-bold text-md">UV Lution</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center space-x-6 md:flex lg:space-x-8">
            {NavLinks.map((link) => (
              <a 
                key={link.href} 
                className="text-sm font-medium transition-colors hover:text-yellow-600 text-gray-600" 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/team" 
              className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 text-sm font-medium"
            >
              Meet the Team
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-800 hover:text-yellow-600"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-14 bg-white/90 backdrop-blur-sm md:hidden"
          onClick={toggleMobileMenu}
        >
          <nav className="flex flex-col items-center space-y-6 pt-8">
            {NavLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg font-medium text-gray-600 hover:text-yellow-600"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/team"
              className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-lg font-medium"
              onClick={toggleMobileMenu}
            >
              Meet the Team
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;