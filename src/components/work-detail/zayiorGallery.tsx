import Image from 'next/image'

export default function ZayiorGallery() {
    return (
      <div className="w-full px-4 sm:px-5 md:px-16 lg:px-24 py-6 md:py-8 lg:pb-24 h-auto">
        {/* Main Image - Full width on mobile */}
        <div className="w-full rounded-2xl overflow-hidden mb-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative">
          <Image 
            src="/images/Web-development/zayior-interface.png" 
            alt="Cyberseed Header Background"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
   
        {/* Two Images - 50-50 on mobile, 70-30 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
          {/* Left Image - 5 columns on mobile, 7 columns on larger screens */}
          <div className="col-span-1 md:col-span-7 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative bg-white">
            <Image 
              src="/images/Web-development/zayior-banner.png" 
              alt="Cyberseed Billboard Design"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 60vw"
            />
          </div>
  
          {/* Right Image - 5 columns on mobile, 3 columns on larger screens */}
          <div className="col-span-1 md:col-span-3 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative bg-[#083626]">
            <Image 
              src="/images/Web-development/zayior-logo.png" 
              alt="Cyberseed Branding Design"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
            />
          </div>
        </div>
      </div>
    )
  }
  