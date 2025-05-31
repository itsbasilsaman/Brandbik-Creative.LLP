"use client"

import Image from "next/image"

export default function DubaiVisaBanner() {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
      <Image
        src="/images/Digital-Marketing/dubai-visa.jpg"
        alt="Dubai Visa Services"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Dubai Visa Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Streamlining visa applications for seamless travel to Dubai
          </p>
        </div>
      </div>
    </div>
  )
} 