import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <>
      {/* Header Background Color */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 shadow-md bg-white fixed top-0 left-0 w-full z-50">

        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} alt="Logo" width={112} height={40} className="cursor-pointer" />
        </a>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 font-Outfit text-base lg:text-lg font-medium">
          <li><a href="#top" className="hover:text-gray-700 transition">Home</a></li>
          <li><a href="#About" className="hover:text-gray-700 transition">About me</a></li>
          <li><a href="#Services" className="hover:text-gray-700 transition">Services</a></li>
          <li><a href="#Work" className="hover:text-gray-700 transition">My Work</a></li>
          <li><a href="#Contact" className="hover:text-gray-700 transition">Contact me</a></li>
        </ul>

        {/* Contact Button & Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Icon (Placeholder) */}
          <button>
            <Image src={assets.moon_icon} alt="Dark Mode" className="w-6" />
          </button>

          {/* Contact Button for Large Screens */}
          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-100 transition"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" width={12} height={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src={menuOpen ? assets.close_black : assets.menu_black} alt="Menu" className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40 flex flex-col gap-10 pt-24 px-8 font-Outfit text-lg font-medium transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <li><a href="#top" onClick={() => setMenuOpen(false)} className="hover:text-gray-700 transition">Home</a></li>
        <li><a href="#About" onClick={() => setMenuOpen(false)} className="hover:text-gray-700 transition">About me</a></li>
        <li><a href="#Services" onClick={() => setMenuOpen(false)} className="hover:text-gray-700 transition">Services</a></li>
        <li><a href="#Work" onClick={() => setMenuOpen(false)} className="hover:text-gray-700 transition">My Work</a></li>
        <li><a href="#Contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-700 transition">Contact me</a></li>
      </ul>

      {/* Overlay when menu is open (optional for better UX) */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
