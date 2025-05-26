"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isContactPage = pathname === "/contact";
  const isWorksPage = pathname === "/works";
  const isSpecialPage = isContactPage || isWorksPage;

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    router.push(path);
  };

  // Reset loading state when pathname changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-4 md:px-16 lg:px-24 transition-all duration-500 ${isSpecialPage && " "}`}
      style={{
        backgroundImage: isSpecialPage 
          ? "none"
          : `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(5, 24, 24, 0.6)), url('/forest-background.jpg')`,
        backgroundColor: isSpecialPage ? "white" : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" prefetch>
           { isLargeScreen ? (
             isSpecialPage ? (
               <Image src="/images/brandbik-blue-logo-.png" alt="Logo" width={120} height={40} className=" " />
             ) : (
               <Image src="/images/logo-brandbik.png" alt="Logo" width={120} height={40} className=" " />
             )
           ) : (
             (
               <Image src="/images/brandbik-icon.png" alt="Logo" width={30} height={20} className=" " />
             )
           )}
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" prefetch className={`font-medium relative group ${isSpecialPage ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              About
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isSpecialPage ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/service" prefetch className={`font-medium relative group ${isSpecialPage ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Services
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isSpecialPage ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/works" prefetch className={`font-medium relative group ${isSpecialPage ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Works
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isSpecialPage ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/contact" prefetch className={`font-medium relative group ${isSpecialPage ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Contact Us
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isSpecialPage ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
        </nav>                                       

        <div className="flex-shrink-0">
          <Link
            href="/get-started"
            prefetch
            className={`inline-flex items-center gap-2 ${isSpecialPage ? "bg-gray-800 hover:bg-gray-700" : "bg-white/30 hover:bg-white/30"} text-white px-4 py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span>Get Started</span>
            <div className={`h-5 w-5 rounded-full ${isSpecialPage ? "bg-gray-700 group-hover:bg-gray-600" : "bg-white/30 group-hover:bg-white/50"} flex items-center justify-center transition-colors`}>
              <ChevronRight className="h-3 w-3 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}