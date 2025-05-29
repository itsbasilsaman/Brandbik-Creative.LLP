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
      <div className="relative z-10 flex h-full flex-col justify-center px-5 md:px-16 lg:px-24">
        <div className="max-w-[800px]">
          <h1 className="font-sans text-[43px]   font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[85px]">
            <span className="font-medium">We build</span > bold  brands<span className="font-medium"> and </span>digital experiences.
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl ">Strategy, identity, and design — elevated.</p>
        </div>
      </div>

     
    </main>
  )
}
