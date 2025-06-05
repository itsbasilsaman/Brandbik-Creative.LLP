"use client"

import Image from "next/image"

export default function DubaiVisaBanner() {
  return (
    <div 
      className="h-[600px] relative flex items-center px-5 md:px-16 lg:px-24"
      style={{
        backgroundImage: 'url(/images/social/dubai-visa-banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with gradient for left side darkness */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0) 80%)',
        }}
      />
      
      <div className="max-w-xl w-full space-y-6 relative z-10 text-white">
        <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
          Social Media Marketing for Get Your Dubai Visa, making visa services accessible and trustworthy
        </h1>

        <div className="space-y-4 text-white text-lg">
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Industry:</span>
            <span className="text-base sm:text-lg text-gray-200">Travel & Immigration</span>
          </div>

          <div className="flex flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium text-base sm:text-lg">Location:</span>
            <span className="text-base sm:text-lg text-gray-200">UAE</span>
          </div>
        </div>
      </div>
    </div>
  )
} 