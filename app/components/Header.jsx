import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="px-6 mt-10 md:px-12 lg:px-20 py-16 flex flex-col items-center text-center max-w-5xl mx-auto">

      {/* Profile Image */}
    <div className="mb-6 overflow-hidden rounded-full">
  <Image
    src={assets.profile_img}
    alt="Profile Image"
    className="rounded-full w-32 h-32 object-cover scale-200" // Zoom in 1.25x
    priority
  />
</div>


      {/* Intro */}
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Vandan Rangani
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          className="w-6 h-6"
          priority // ✅ Quick loading for visual completeness
        />
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight mb-6 capitalize max-w-3xl">
        Full Stack Web Developer based in India.
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
        I am a Full Stack Developer from Gujarat, India with 1+ years of experience working on various projects including E-commerce platforms and Social Media Analytics dashboards.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition font-medium"
        >
          Contact Me
          <Image src={assets.right_arrow} alt="Right Arrow" className="w-4 h-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition font-medium"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4 h-4" />
        </a>
      </div>
      
    </div>
  );
}

export default Header;
