import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo and Email */}
        <div className="flex flex-col items-center w-full md:items-start gap-4">
          <Image src={assets.logo} alt="Logo" width={150} height={60} className="object-contain" />
          <div className="flex items-center gap-3 text-gray-700">
            <Image src={assets.mail_icon} alt="Email Icon" width={20} height={20} />
            <span>vandanrangani21@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <ul className="flex gap-6 text-gray-700 text-lg">
          <li>
            <a
              href="https://github.com/Ranganivandan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vandanrangani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>

      </div>

      {/* Copyright */}
      <p className="text-center text-gray-600 text-sm mt-8">
        © 2025 Vandan Rangani. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
