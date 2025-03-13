import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

function Contact() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-4xl mx-auto" id="Contact">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm mb-2 font-semibold">
          Connect with me
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-6 text-black">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300 flex items-center justify-center gap-2"
        >
          Submit Now
          <Image src={assets.right_arrow} alt="arrow" className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

export default Contact;
