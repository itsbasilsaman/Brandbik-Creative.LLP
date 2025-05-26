"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500', // Medium
});

// Add keyframes animation
const cubeAnimation = `
@keyframes slideInCube {
  0% {
    transform: translate(100%, 100%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
`;

export default function ServiceMain() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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
    <section ref={sectionRef} className="relative w-full min-h-[400px] flex flex-col justify-center sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden md:px-16 lg:px-24 pt-16">
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
      <style jsx global>{cubeAnimation}</style>
      <motion.div 
        initial={{ opacity: 0, x: "100%", y: "100%", scale: 0 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="absolute bottom-[-30px] right-[-40px] sm:bottom-8 sm:right-8 md:bottom-10 md:right-16 lg:bottom-[-60px] lg:right-[-60px] w-48 h-48 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[380px] lg:h-[380px] z-10"
      >
        <Image src="/images/service-cube.png" alt="Decorative cube" width={296} height={296} className="w-full h-full" />
      </motion.div>

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
