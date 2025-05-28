import { ArrowUpRight } from "lucide-react"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function DigitalMarketingBanner() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      {/* Floating marketing elements */}
      <div className="absolute inset-0 z-0">
        {/* Top left mockup */}
        <div className="hidden sm:block absolute top-2 sm:top-4 left-2 sm:left-4 w-32 sm:w-48 md:w-64 h-20 sm:h-32 md:h-40 bg-slate-800 rounded-lg shadow-2xl transform -rotate-12 opacity-60">
          <div className="p-2 sm:p-3 md:p-4 h-full bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg">
            <div className="text-white text-[8px] sm:text-xs mb-1 sm:mb-2">SEO & SEM,</div>
            <div className="text-white text-[8px] sm:text-xs mb-1">Content Marketing,</div>
            <div className="text-white text-[8px] sm:text-xs">Social Media</div>
          </div>
        </div>

        {/* Top right mockup */}
        <div className="hidden md:block absolute top-4 lg:top-8 right-2 lg:right-4 w-48 lg:w-72 h-32 lg:h-48 bg-slate-800 rounded-lg shadow-2xl transform rotate-12 opacity-70">
          <div className="p-3 lg:p-4 h-full bg-gradient-to-br from-rose-600 to-pink-700 rounded-lg">
            <div className="text-white text-xs lg:text-sm mb-2">DIGITAL GROWTH</div>
            <div className="text-white text-[10px] lg:text-xs mb-1">Data-Driven</div>
            <div className="text-white text-[10px] lg:text-xs">Marketing Solutions</div>
          </div>
        </div>

        {/* Bottom left mockup */}
        <div className="hidden lg:block absolute bottom-4 left-4 w-48 lg:w-64 h-32 lg:h-40 bg-slate-800 rounded-lg shadow-2xl transform -rotate-6 opacity-50">
          <div className="p-3 lg:p-4 h-full bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg">
            <div className="text-white text-xs lg:text-sm mb-2">ANALYTICS</div>
            <div className="text-white text-[10px] lg:text-xs">Performance Tracking</div>
          </div>
        </div>

        {/* Bottom right mockup */}
        <div className="hidden lg:block absolute bottom-4 right-4 w-48 lg:w-64 h-32 lg:h-40 bg-slate-800 rounded-lg shadow-2xl transform rotate-6 opacity-50">
          <div className="p-3 lg:p-4 h-full bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg">
            <div className="text-white text-xs lg:text-sm mb-2">STRATEGY</div>
            <div className="text-white text-[10px] lg:text-xs">ROI-Focused Campaigns</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-medium text-white mb-6 sm:mb-8 tracking-tight leading-tight ${poppins.className}`}>
          Digital Marketing
        </h1>

        <p className="text-lg text-gray-600 mb-8">We&apos;re experts in driving growth through strategic digital marketing solutions.</p>

        <button
          className="bg-slate-600 hover:bg-slate-500 flex justify-center items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="ml-2 h-6 w-6 p-1 border border-gray-100 rounded-full" />
        </button>
      </div>
    </div>
  )
} 