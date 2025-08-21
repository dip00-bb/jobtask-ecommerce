import Image from 'next/image';
import React from 'react';
import { allImages } from '../assets/asset';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-9/11 mx-auto px-3 lg:px-3 flex flex-col-reverse lg:flex-row-reverse items-center gap-5 py-10 ">
        
        {/* Left Side Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Wear Your <span className="text-[var(--highlight-color)]">Style</span>,  
            Own Your <span className="text-[var(--highlight-color)]">Vibe</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto lg:mx-0 font-bold">
            Discover premium T-shirts designed for comfort and confidence.  
            Shop the latest collections and upgrade your wardrobe today!
          </p>


          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-[var(--button-color)] text-white font-semibold hover:bg-[#4c9671] cursor-pointer transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-[var(--button-color)] text-[var(--button-color)] font-semibold hover:bg-[#74C69D] hover:text-white cursor-pointer transition">
              Explore Collection
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center">
          <Image
            src={allImages.bannerImg}
            alt="Hero Banner"
            className="w-full  lg:max-w-lg h-[35rem] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
