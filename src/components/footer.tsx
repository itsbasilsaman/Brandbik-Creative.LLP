import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter , MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-black to-gray-900 px-4 sm:px-6 py-12 md:py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">
            {/* Logo and Tagline */}
            <div className="lg:w-1/3 space-y-5">
              <div className="relative w-28 h-10 sm:w-24 sm:h-14">
                <Image
                  src="/images/logo-brandbik.png"
                  alt="Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Best Advertising Agency in Saudi Arabia, UAE and India
              </p>
              
              {/* Social Media - Mobile */}
              <div className="flex space-x-5 lg:hidden mt-6">
              <Link href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Pages & Services */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                {/* Pages - Column Layout */}
                <div className="col-span-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-5 pb-2 border-b border-white/10">Pages</h3>
                  <div className="flex flex-col space-y-3">
                    <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Home</Link>
                    <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">About us</Link>
        
                    <Link href="/service" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Services</Link>
                    <Link href="/works" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Works</Link>
                    <Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contack Us</Link>
                  </div>
                </div>

                {/* Services - Column Layout */}
                <div className="col-span-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-5 pb-2 border-b border-white/10">Services</h3>
                  <div className="flex flex-col space-y-3">
                    <Link href="/service/web-development" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Website Development</Link>
                    <Link href="/service/app-development" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">App Development</Link>
                    <Link href="/service/branding" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Branding</Link>
                    <Link href="/service/digital-marketing" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Digital Marketing</Link>
                    <Link href="/service/social-media" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Social Media</Link>
                    <Link href="/service/advertising" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Advertising</Link>
                  </div>
                </div>

                {/* Contact Info - Only visible on md and larger screens */}
                <div className="hidden md:block col-span-2">
  <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-5 pb-2 border-b border-white/10">Contact Us</h3>
  <div className="flex flex-col space-y-3 text-white/70 text-sm sm:text-base">
    <p>+966 12 345 6789</p>
    <p>+91 90748 51748</p>
    <p>+91 80753 47955</p>
    <p>info@brandbik.com</p>
    <p>Batha, Riyadh, Saudi Arabia</p>
  </div>
</div>

              </div>

              {/* Social Media - Desktop */}
              <div className="hidden lg:flex justify-end space-x-5 mt-8">
                <Link href="https://www.instagram.com/brandbik_creatives/" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me/919074851748" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/brandbik-creatives" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://twitter.com/brandbik" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Brandbik. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}