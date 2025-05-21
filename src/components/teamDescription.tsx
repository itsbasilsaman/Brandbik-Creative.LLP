"use client"

import { useState, useEffect } from "react"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500', // Medium weight
  subsets: ['latin'],
  display: 'swap',
});
 

export default function TeamDescription() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
      <div className="max-w-[957px] w-full">
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-[40px] ${poppins.className} leading-tight`}>
          We&apos;re a cross-disciplinary team of strategists, designers, developers, and storytellers.{" "}
          What brings us together is a shared belief: good design is good business
        </h2>
      </div>
      <div className="flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
        <div className="flex items-center justify-center w-full">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center group">
            {/* Outer Circle */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 scale-105 group-hover:scale-110 transition-transform duration-300"></div>

            {/* Inner Circle (button) */}
            <button className="relative z-10 w-[90%] h-[90%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm sm:text-base font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}