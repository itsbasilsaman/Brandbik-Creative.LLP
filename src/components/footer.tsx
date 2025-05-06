import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-black to-gray-900 px-4 sm:px-6 py-12 md:py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
            {/* Logo and Tagline */}
            <div className="lg:w-1/3 space-y-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                Best Advertising Agency in Saudi Arabia, UAE and India
              </p>
              
              {/* Social Media - Mobile */}
              <div className="flex space-x-4 lg:hidden mt-6">
                <Link href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors">
                  <FaWhatsapp className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
                  <FaXTwitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Pages & Services - Side by Side Row */}
            <div className="lg:w-2/3">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                {/* Pages - Row Layout */}
                <div className="flex-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Pages</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-8">
                    <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Home</Link>
                    <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">About us</Link>
                    <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Portfolio</Link>
                    <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Blog</Link>
                    <Link href="/connect" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Connect</Link>
                    <Link href="/shopify" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Shopify</Link>
                  </div>
                </div>

                {/* Services - Row Layout */}
                <div className="flex-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-8">
                    <Link href="/services/website-development" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Website Development</Link>
                    <Link href="/services/app-development" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">App Development</Link>
                    <Link href="/services/branding" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Branding</Link>
                    <Link href="/services/digital-marketing" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Digital Marketing</Link>
                    <Link href="/services/social-media" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Social Media</Link>
                    <Link href="/services/marketing" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">Marketing</Link>
                  </div>
                </div>
              </div>

              {/* Social Media - Desktop */}
              <div className="hidden lg:flex justify-end space-x-4 mt-8">
                <Link href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                  <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors">
                  <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                  <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
                  <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Brandbik. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}