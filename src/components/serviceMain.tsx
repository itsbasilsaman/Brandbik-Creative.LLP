"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Poppins } from "next/font/google"
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
})

// Floating animation keyframes
const floatingAnimation = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
`

export default function ServiceMain() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    banner.style.animation = "slideBackground 20s linear infinite"

    return () => {
      if (banner) {
        banner.style.animation = ""
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[300px] flex flex-col justify-center sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] overflow-hidden md:px-16 lg:px-24 pt-16"
    >
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

      {/* Modern decorative elements */}
      <style jsx global>
        {floatingAnimation}
      </style>
      
      {/* Floating circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl"
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 ${poppins.className}`}
          >
            Our Services
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-5">
            Services built to move brands forward.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center cursor-pointer bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-200 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base group ${poppins.className}`}
          >
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
