export default function Testimonial() {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="relative">
          {/* Large decorative quote mark */}
          <div className="absolute top-0 right-0 text-gray-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-none select-none">
            <svg width="30" height="24" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-8">
              <path
                d="M12.9032 0L0 12.9032V32H19.0968V12.9032H6.19355L19.0968 0H12.9032ZM33.8064 0L20.9032 12.9032V32H40V12.9032H27.0968L40 0H33.8064Z"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
  
          {/* Profile section */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
              <img src="/images/Basil-Saman.jpg" alt="John Smith" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">John Smith</h3>
              <p className="text-xs sm:text-sm text-gray-600">Founder of Cyberseed</p>
            </div>
          </div>
  
          {/* Testimonial text */}
          <div className="pr-8 sm:pr-12 md:pr-16 lg:pr-24">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-relaxed font-normal">
              Working with Brandbik was transformative. They understood our vision and brought it to life with precision
              and creativity.
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
  