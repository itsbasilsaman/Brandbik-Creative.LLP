"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500', // Medium
});

export default function ServiceMain() {


    const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    // Create a CSS animation instead of using JS for smoother performance
    banner.style.animation = "slideBackground 20s linear infinite"

    return () => {
      if (banner) {
        banner.style.animation = ""
      }
    }
  }, [])

  return (
    <section className="relative w-full min-h-[400px] flex flex-col justify-center sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden md:px-16 lg:px-24 pt-16">
      {/* Gradient background */}
    <div className="absolute inset-0 w-full h-full">
        {/* Two copies of the background for seamless looping */}
        <div
          ref={bannerRef}
          className="absolute inset-0 w-[200%] h-full flex"
          style={{
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url('/images/service-banner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
          
            }}
          />
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url('/images/service-banner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>


      {/* 3D Cube decoration */}
      <div className="cube-tilt absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-16 lg:top-20 lg:right-[-35px] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-44 lg:h-44 z-10">
        <Image src="/images/service-cube.png" alt="Decorative cube" width={196} height={196} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 ${poppins.className}`} >
            Our Services
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-5 ">
            Services built to move brands forward.
          </p>

          <button className="flex items-center bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-colors duration-200 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base">
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
