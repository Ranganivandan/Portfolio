import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Work() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-6xl mx-auto" id="Work">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm mb-2 font-semibold">
          My Portfolio
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-6">
          My Latest Work
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in Full Stack Development.
        </p>
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group h-64 flex items-end"
            style={{
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-6 text-white w-full">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>

              {/* View More Icon */}
              <div className="flex justify-end">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Image src={assets.send_icon} alt="View Project" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
