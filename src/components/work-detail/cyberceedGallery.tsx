export default function CyberceedGallery() {
    return (
      <div className="w-full px-4 sm:px-5 md:px-16 lg:px-24 py-6 md:py-8 lg:pb-24 h-auto">
        {/* Main Image - Full width on mobile */}
        <div className="w-full rounded-2xl overflow-hidden mb-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative">
          <img 
            src="/images/cyberceed-logo.png" 
            alt="Cyberseed Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
  
        {/* Two Images - 50-50 on mobile, 70-30 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
          {/* Left Image - 5 columns on mobile, 7 columns on larger screens */}
          <div className="col-span-1 md:col-span-7 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img 
              src="/images/brandbik-banner.jpg" 
              alt="Cyberseed Billboard Design"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Image - 5 columns on mobile, 3 columns on larger screens */}
          <div className="col-span-1 md:col-span-3 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img 
              src="/images/CYBERBRANDD.jpg" 
              alt="Cyberseed Branding Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  }
  