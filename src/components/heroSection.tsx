// src/components/HeroSection.tsx
'use client';

import Image from "next/image"
// import { CiDesktopMouse1 } from "react-icons/ci";

export default function Home() {
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
          <h1 className="font-sans text-[43px] font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[85px]">
            <span className="font-medium">We build</span> bold brands<span className="font-medium"> and </span>digital experiences.
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">Strategy, identity, and design — elevated.</p>
        </div>
      </div>
    </main>
  )
}
