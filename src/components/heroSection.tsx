// src/components/HeroSection.tsx
'use client';

import Image from "next/image"
// import { CiDesktopMouse1 } from "react-icons/ci";

import { useState, useEffect } from 'react';


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position to move the mouse icon
  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position as percentage (0-100)
      const scrollPercentage = Math.min(
        100, 
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      setScrollPosition(scrollPercentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate mouse position based on scroll
  // At 0% scroll, mouse is centered (translate 0%)
  // At 100% scroll, mouse moves toward bottom (translate 50%)
  const mouseTranslateY = `${scrollPosition / 2}%`;

  
  return (
    
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-bg.png"
          alt="Green ivy growing on wall with billboard"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-[800px]">
          <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[85px]">
            <span className="font-medium">We build</span > bold  brands<span className="font-medium"> and </span>digital experiences.
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">Strategy, identity, and design — elevated.</p>
        </div>
      </div>

      {/* Circular Badge */}
      <div className="fixed bottom-8 right-8 z-20 md:bottom-12 md:right-12">
      {/* Circle with rotating text */}
      <div className="relative h-24 w-24 animate-slow-spin md:h-32 md:w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text fontSize="13">
            <textPath href="#circle" className="fill-white font-normal">
              Together scroll down • for work  
            </textPath>
          </text>
        </svg>
      </div>
      
      {/* Non-rotating mouse container */}
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center  rounded-full border border-white/10 bg-white/10 backdrop-blur-sm md:h-20 md:w-20">
        {/* Position the mouse icon in the center initially, then move based on scroll */}
        <div 
          className="absolute left-[74%] top-[60%]   flex justify-center items-center   -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
          style={{ transform: `translate(-50%, calc(-50% + ${mouseTranslateY}))` }}
        >
          {/* Custom mouse SVG icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="3" width="12" height="18" rx="6" />
            <line x1="12" y1="7" x2="12" y2="11" />
          </svg>
        </div>
      </div>
    </div>
    </main>
  )
}
