import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-5 md:px-16 lg:px-24 py-[80px] w-full ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 sm:mb-12 md:mb-16">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Web Development */}
        <Link href="/service/web-development" className="block">
          <div className="rounded-lg cursor-pointer   bg-blue-50 border border-blue-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-blue-100/70 group">
            <div className="mb-4">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/web.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        className="object-cover rounded-lg"
      />
            </div>

            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Unique and high performing web designs suitable to attract your customers.
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* App Development */}
        <Link href="/service/app-development" className="block">
          <div className="rounded-lg cursor-pointer   bg-amber-50 border border-amber-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-amber-100/70 group">
            <div className="mb-4">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/app-development.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-lg"
      />
            </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">App Development</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  High quality mobile apps with best user interface to transform your thoughts to business
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Branding */}
        <Link href="/service/branding" className="block">
          <div className="rounded-lg cursor-pointer   bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-emerald-100/70 group">
            <div className="mb-4">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/branding.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-lg"
      />
            </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Branding</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  We make you the Brand that outshines in the digital world.
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Digital Marketing */}
        <Link href="/service/digital-marketing" className="block">
          <div className="rounded-lg cursor-pointer   bg-pink-50 border border-pink-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-pink-100/70 group">
            <div className="mb-4">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/digital-marketing.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        className="object-cover rounded-lg"
      />
            </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Digital Marketing</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Outstanding Solutions to elevate your presence in the modern world.
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Social Media */}
        <Link href="/service/social-media" className="block">
          <div className="rounded-lg cursor-pointer   bg-purple-50 border border-purple-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-purple-100/70 group">
            <div className="mb-4">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/social-media.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        className="object-cover rounded-lg"
      />
            </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Maximise your reach with our expertised ad campaigns and lead generations.
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Advertising */}
        <Link href="/service/advertising" className="block">
          <div className="rounded-lg cursor-pointer   bg-gray-50 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-gray-100/70 group">
            <div className="mb-4 ">
            <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/advertising.png"
        alt="Green ivy growing on wall with billboard"
        fill
        priority
        className="object-cover rounded-lg"
      />
            </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Advertising</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Maximize Your Reach with Targeted Advertising Campaigns.
                </p>
              </div>
              <ArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </div>


    
    </div>
  )
}
