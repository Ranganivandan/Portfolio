import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-6xl mx-auto" id="About">

      {/* Section Title */}
      <div className="text-center">
        <h4 className="text-black-500 uppercase tracking-widest text-sm mb-2 font-semibold">
          Introduction
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-10">
          About Me
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 my-16">

        {/* Left Side Image */}
        <div className="w-64 sm:w-80 rounded-3xl overflow-hidden flex-shrink-0">
          <Image src={assets.user_image} alt="User Image" className="w-full h-auto rounded-3xl object-cover" />
        </div>

        {/* Right Side Description */}
        <div className="flex-1">

          {/* About Text */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            I'm a passionate <span className="font-semibold text-black">Full Stack Web Developer</span> from Gujarat, India, 
            with over <span className="font-semibold text-black">1+ years of experience</span> in building dynamic, responsive, and user-friendly websites and applications.
            I specialize in both front-end and back-end development, focusing on creating seamless user experiences and robust functionality.
            My expertise lies in developing <span className="font-semibold text-black">E-commerce platforms, Social Media Analytics Dashboards, and Business Websites</span>.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <li 
                key={index} 
                className="flex flex-col justify-center items-center gap-4 p-4 border rounded-xl w-full transition-all duration-500 hover:bg-[#fcf4ff] hover:shadow-[5px_5px_#000]"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <Image src={icon} alt={title} className="w-10 h-10 object-contain cursor-pointer" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className='my-6 text-gray-700 font-Ovo text-xl'>Tools I use</h4>
          <ul className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {toolsData.map((tool, index) => (
              <li 
                key={index} 
                className="transition-all duration-500 hover:-translate-y-2" // Lift effect on hover
              >
                <Image src={tool} alt={`Tool ${index + 1}`} className="w-8 sm:w-10 object-contain" />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default About;
