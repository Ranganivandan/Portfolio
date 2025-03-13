import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <div id='Services' className="px-6 md:px-12 lg:px-20 py-16 max-w-6xl mx-auto">
      {/* Title */}
      <h4 className="text-black-500 text-center uppercase tracking-widest text-sm mb-2 font-semibold">
        What I offer
      </h4>
      <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-Ovo mb-10">
        My Services
      </h2>
      
      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-3xl text-center mx-auto">
        I am a Full Stack Developer from Gujarat, India with 1+ years of experience working on various projects including E-commerce platforms and Social Media Analytics dashboards.
      </p>

      {/* Services List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div 
            key={index}
            className='p-6 border rounded-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[5px_5px_#000] flex flex-col gap-4'
          >
            {/* Icon */}
            <Image src={icon} alt={title} className='w-12 h-12 object-contain' />

            {/* Title */}
            <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>

            {/* Description */}
            <p className='text-sm text-gray-600 flex-1'>{description}</p>

            {/* Read More Link */}
            <a 
              href={link} 
              className='flex items-center gap-2 text-black-600 no-underline hover:underline mt-auto'
            >
              Read more
              <Image src={assets.right_arrow} alt="arrow" className='w-4 h-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
