import Link from "next/link"
 
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    
    <div className="flex flex-col w-full">
     
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-black to-gray-900 px-6 py-16 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Tagline */}
            <div className="md:col-span-2 space-y-4">
            <div className="relative w-20 h-20">
  <Image
    src="/images/logo.png"
    alt="Logo"
    fill
    priority
    className="object-contain"
  />
</div>

              <p className="text-white/80 text-sm md:text-base">
                Best Advertising Agency in Saudi Arabia, UAE and India
              </p>
            </div>

            {/* Pages */}
            <div className="md:col-span-1">
              <h3 className="text-white text-xl font-semibold mb-6">Pages</h3>
              <ul className="space-y-4">
                {["Home", "About us", "Portfolio", "Blog", "Connect", "Shopify"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-1">
              <h3 className="text-white text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {[
                  "Website Development",
                  "App Development",
                  "Branding",
                  "Digital Marketing",
                  "Social Media",
                  "Marketing",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 Brandbik. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link key={item} href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex justify-end space-x-4 mt-6 md:mt-0">
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
                </Link>
                <FaWhatsapp className="text-white/70 hover:text-white transition-colors h-6 w-6" />
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <FaLinkedinIn className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <FaXTwitter className="h-6 w-6" />
                </Link>
              </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
