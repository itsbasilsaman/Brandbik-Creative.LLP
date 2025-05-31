"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500', // Medium weight
  subsets: ['latin'],
  display: 'swap',
});

// Move images to a separate constant file or environment variables in production
const images = [
  "/images/about-two.jpg",
  "/images/about-one.jpg",
  "/images/about-three.jpg",
  "/images/about-image-one.jpg",
  "/images/about-image-one.jpg",
];

// Client component for scroll functionality
function ImageScroll({ images }: { images: string[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 380
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 380
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative pt-6">
      <div className="overflow-hidden">
        <div
          className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollBehavior: "smooth" }}
          ref={scrollContainerRef}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-none w-[250px] sm:w-[320px] md:w-[480px] aspect-[4/3] rounded-sm overflow-hidden"
            >
              <Image
                src={src}
                alt={`Team member ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                priority={index < 2} // Prioritize loading first two images
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 sm:mt-6">
        <div className="flex items-center space-x-2">
          <p className="text-gray-600 text-sm sm:text-base">Our team in action</p>
          <div className="flex items-center space-x-1">
            <button
              onClick={scrollLeft}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main server component
export default function AboutBanner() {
  return (
    <section className="w-full pt-24 lg:pt-32 mx-auto px-4 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16 md:h-screen">
      <div className="inline-block mb-4 sm:mb-6">
        <span className="bg-gray-200 text-gray-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
        <div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${poppins.className}`}>
            We build brands that move with purpose.
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Brandbik is a creative agency crafting modern brands, digital experiences, and growth strategies for the
            ambitious.
          </p>

          <p className="text-gray-600 text-sm sm:text-base">
            From early-stage startups to global companies, we design stories that connect  and endure.
          </p>
        </div>
      </div>

      <ImageScroll images={images} />
    </section>
  )
}