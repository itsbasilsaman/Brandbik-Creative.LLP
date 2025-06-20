"use client"

import Image from "next/image"

export default function AboutBanner() {
  // Array of image sources for the gallery
  const galleryImages = [
   
    { src: "/images/about-four.jpg", alt: "Team member 4" },
    { src: "/images/about-three.jpg", alt: "Team member 3" },
    { src: "/images/about-two.jpg", alt: "Team member 2" },
    { src: "/images/about-five.jpg", alt: "Team member 5" },
    { src: "/images/about-six.jpg", alt: "Team member 6" },
  ]

  return (
    <section className="w-full pt-24 lg:pt-32 mx-auto px-4 lg:pb-0 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="bg-gray-200 text-gray-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight font-poppins`}>
              We build brands that move with purpose.
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Brandbik specializes in building impactful brands, innovative digital experiences, and strategic growth solutions for forward-thinking businesses.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether you&apos;re an emerging startup or an established global enterprise, we craft compelling narratives and design enduring connections that drive success.
            </p>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-gray-700 text-sm sm:text-[19px] font-medium mb-6 sm:mb-8">Our team in action</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-32px)] sm:w-[calc(50vw-32px)] md:w-[calc(33.33vw-32px)] lg:w-[calc(33.33vw-32px)] aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
