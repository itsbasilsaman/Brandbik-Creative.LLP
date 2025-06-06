"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

interface CareerHeroProps {
  onOpenRoles: (e: React.MouseEvent) => void
  showOpenings: boolean
}

const slideInUpKeyframes = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function CareerHero({ onOpenRoles, showOpenings }: CareerHeroProps) {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Reset visibility when pathname changes
    setIsVisible(true)
  }, [pathname])

  useEffect(() => {
    // Handle showOpenings state
    setIsVisible(!showOpenings)
  }, [showOpenings])

  return (
    <>
      <style jsx>{slideInUpKeyframes}</style>
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transition: "none",
          }}
        >
          <Image
            src="https://images.pexels.com/photos/4623310/pexels-photo-4623310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Modern office environment with professionals collaborating"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 "
        >
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl absolute bottom-12 sm:bottom-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 sm:mb-6 leading-tight">
              Explore your passion,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Create change 
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl pr-2">
              Transform your career while transforming lives.
            </p>
            <button
              onClick={onOpenRoles}
              className="inline-flex items-center px-4 sm:px-6 cursor-pointer py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 group text-sm sm:text-base md:text-lg"
              disabled={!isVisible}
              style={{
                opacity: isVisible ? 1 : 0.3,
                pointerEvents: isVisible ? "auto" : "none",
                transform: isVisible ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.8s, transform 0.8s"
              }}
            >
              <span className="font-medium">Search our open roles</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {showOpenings && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        )}
      </section>
    </>
  )
} 