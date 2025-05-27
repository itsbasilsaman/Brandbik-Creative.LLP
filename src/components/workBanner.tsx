"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Poppins } from 'next/font/google';
import { Onest } from 'next/font/google'
import { motion, useInView } from "framer-motion"

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add other weights if needed
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Optional, for Tailwind or CSS variables
});

export default function WorkBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isMobile, setIsMobile] = useState(false)
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const interval = setInterval(() => {
      if (isMobile) {
        setShowFirst(prev => !prev)
      }
    }, 1500)

    return () => {
      window.removeEventListener('resize', checkMobile)
      clearInterval(interval)
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} className="relative w-full h-[420px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/work-banner.png"
          alt="Wavy background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left mb-8 md:mb-0">
            <h1 className={`text-4xl md:text-5xl pl-0  lg:pl-20 lg:text-[48px] font-medium text-black leading-tight ${poppins.className}`}>
              Work that speaks louder
              <br />
              than words.
            </h1>
          </div>

          {/* Right side - Sphere and Stats */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Stats */}
            <div className="absolute sm:bottom-[55%] sm:right-[2%] z-20">
              <motion.div 
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0.5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-[9px] sm:rounded-xl px-4 sm:px-6 py-2 border border-gray-300 shadow-lg flex justify-center items-center gap-2 w-[190px]"
              >
                <motion.div
                  key={showFirst ? "countries" : "projects"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center gap-2"
                >
                  <div className={`text-2xl lg:text-[32px] text-gray-700 font-semibold ${onest.className}`}>
                    {isMobile ? (showFirst ? "14+" : "1000+") : "14+"}
                  </div>
                  <div className={`text-gray-600 sm:text-[20px] font-extralight ${poppins.className}`}>
                    {isMobile ? (showFirst ? "Countries" : "Projects") : "Countries"}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute sm:bottom-[11%] sm:right-[16%] z-20">
              <motion.div 
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0.5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-sm rounded-[9px] sm:rounded-xl px-4 sm:px-6 py-2 border border-gray-300 shadow-lg flex justify-center items-center gap-2  w-[210px]"
              >
                <motion.div
                  key={showFirst ? "projects" : "countries"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center gap-2"
                >
                  <div className={`text-2xl lg:text-[32px] text-gray-700 font-semibold ${onest.className}`}>
                    {isMobile ? (showFirst ? "1000+" : "14+") : "1000+"}
                  </div>
                  <div className={`text-gray-600 sm:text-[20px] font-extralight ${poppins.className}`}>
                    {isMobile ? (showFirst ? "Projects" : "Countries") : "Projects"}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sphere Container */}
            <div className="w-full h-full">
              {/* Main Sphere */}
              <motion.div 
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1]
                }}
        className="
  absolute bottom-[-500px] left-1/2 transform -translate-x-1/2
  sm:bottom-[-350px] sm:left-auto sm:right-[-300px] sm:translate-x-0 sm:transform-none
  w-[820px] h-[820px] md:w-[800px] md:h-[800px]
"
              >
                <Image
                  src="/images/about-shape.png"
                  alt="3D Sphere"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
