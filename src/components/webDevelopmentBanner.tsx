 
import { ArrowUpRight } from "lucide-react"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can include multiple weights
  display: 'swap',
  variable: '--font-poppins',
});

export default function Component() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      {/* Floating website mockups */}
      <div className="absolute inset-0 z-0">
        {/* Top left mockup - Hidden on mobile */}
        <div className="hidden sm:block absolute top-2 sm:top-4 left-2 sm:left-4 w-32 sm:w-48 md:w-64 h-20 sm:h-32 md:h-40 bg-slate-800 rounded-lg shadow-2xl transform -rotate-12 opacity-60">
          <div className="p-2 sm:p-3 md:p-4 h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
            <div className="text-white text-[8px] sm:text-xs mb-1 sm:mb-2">Building Value,</div>
            <div className="text-white text-[8px] sm:text-xs mb-1">Providing Quality,</div>
            <div className="text-white text-[8px] sm:text-xs">Delivering Precision</div>
            <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Top center mockup - Smaller on mobile */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-16 sm:h-20 md:h-24 bg-slate-700 rounded-lg shadow-2xl rotate-3 opacity-50">
          <div className="p-2 sm:p-3 h-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg">
            <div className="text-white text-xs sm:text-sm font-semibold">Portfolio Website</div>
          </div>
        </div>

        {/* Top right mockup - Hidden on small mobile */}
        <div className="hidden md:block absolute top-4 lg:top-8 right-2 lg:right-4 w-48 lg:w-72 h-32 lg:h-48 bg-slate-800 rounded-lg shadow-2xl transform rotate-12 opacity-70">
          <div className="p-3 lg:p-4 h-full bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg">
            <div className="text-white text-xs lg:text-sm mb-2">PORTFOLIO</div>
            <div className="text-white text-[10px] lg:text-xs mb-1">The Moodiest Indie</div>
            <div className="text-white text-[10px] lg:text-xs">with List</div>
            <div className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 text-white text-[8px] lg:text-xs">
              Travel For The Best Experience
            </div>
          </div>
        </div>

        {/* Bottom left mockup - Responsive sizing */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-4 md:left-8 w-48 sm:w-64 md:w-80 h-32 sm:h-40 md:h-52 bg-slate-800 rounded-lg shadow-2xl transform -rotate-6 opacity-60">
          <div className="p-2 sm:p-3 md:p-4 h-full bg-gradient-to-br from-teal-600 to-cyan-700 rounded-lg">
            <div className="text-white text-[8px] sm:text-xs mb-1 sm:mb-2">Advancing Your</div>
            <div className="text-white text-[8px] sm:text-xs mb-1 sm:mb-2">Virtual Influence and</div>
            <div className="text-white text-[8px] sm:text-xs mb-2 sm:mb-4">Swift Outcomes</div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 flex space-x-1 sm:space-x-2">
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full" />
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-white/50 rounded-full" />
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>

        {/* Center left mockup - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-2 xl:left-4 transform -translate-y-1/2 w-48 xl:w-64 h-28 xl:h-36 bg-slate-800 rounded-lg shadow-2xl rotate-6 opacity-50">
          <div className="p-2 xl:p-3 h-full bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg">
            <div className="text-white text-[8px] xl:text-xs">WELCOME TO ZONE OF</div>
            <div className="text-white text-lg xl:text-2xl font-bold mt-1 xl:mt-2">STADIUM</div>
          </div>
        </div>

        {/* Bottom center mockup - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 w-64 md:w-96 h-20 md:h-32 bg-slate-700 rounded-lg shadow-2xl -rotate-3 opacity-40">
          <div className="p-2 md:p-4 h-full bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg">
            <div className="text-white text-xs md:text-sm">Building Value,</div>
            <div className="text-white text-xs md:text-sm">Providing Quality,</div>
            <div className="text-white text-xs md:text-sm">Delivering Precision</div>
          </div>
        </div>

        {/* Right side mockup - Mikara Organics - Responsive */}
        <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 w-48 sm:w-64 md:w-80 h-32 sm:h-44 md:h-56 bg-slate-800 rounded-lg shadow-2xl -rotate-12 opacity-75">
          <div className="h-full bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">Mikara</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">Organics</div>
              <div className="text-[8px] sm:text-xs mt-1 sm:mt-2 opacity-80">Organic farming solutions</div>
              <div className="w-6 sm:w-8 md:w-12 h-0.5 sm:h-1 bg-emerald-500 mt-1 sm:mt-2" />
            </div>
          </div>
        </div>

        {/* Bottom right mockup - Hidden on small screens */}
        <div className="hidden lg:block absolute bottom-6 xl:bottom-12 right-4 xl:right-8 w-56 xl:w-72 h-32 xl:h-44 bg-slate-800 rounded-lg shadow-2xl transform rotate-6 opacity-65">
          <div className="p-3 xl:p-4 h-full bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg">
            <div className="text-orange-400 text-[8px] xl:text-xs mb-1 xl:mb-2">● DESIGN</div>
            <div className="text-white text-xs xl:text-sm mb-1">Building Value,</div>
            <div className="text-white text-xs xl:text-sm mb-1">Providing Quality,</div>
            <div className="text-white text-xs xl:text-sm">Delivering Precision</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[88px]  font-medium text-white mb-6 sm:mb-8 tracking-tight leading-tight ${poppins.className}`}>
          Web Development
        </h1>

        <button
         
          className="bg-slate-600 hover:bg-slate-500 flex justify-center items-center gap-2  text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
         <span> Let's Talk</span>
          <ArrowUpRight className="ml-2   h-6 w-6 p-1  border border-gray-100 rounded-full " />
        </button>
      </div>
    </div>
  )
}
