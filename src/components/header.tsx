"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation" 
import { RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle panel open/close
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPanelOpen]);

  // Reset loading state on pathname change
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-4 md:px-16 lg:px-24 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{
        backgroundImage: !isScrolled 
          ? `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(5, 24, 24, 0.6)), url('/forest-background.jpg')`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" prefetch>
            {isLargeScreen ? (
              <Image 
                src={isScrolled ? "/images/brandbik-blue-logo-.png" : "/images/logo-brandbik.png"} 
                alt="Logo" 
                width={120} 
                height={40} 
                className="" 
              />
            ) : (
              <Image src="/images/brandbik-icon.png" alt="Logo" width={30} height={20} className="" />
            )}
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" prefetch className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              About
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/service" prefetch className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Services
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/works" prefetch className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Works
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
          <Link href="/contact" prefetch className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            <span className="relative">
              Contact Us
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </span>
          </Link>
        </nav>

        <div className="flex-shrink-0">
          <button
            onClick={() => setIsPanelOpen(true)}
            className={`inline-flex items-center gap-2 cursor-pointer ${
              isScrolled 
                ? "bg-gray-800 hover:bg-gray-700" 
                : "bg-white/30 hover:bg-white/40"
            } text-white px-4 py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="text-white">Get Started</span>
            <div className={`h-5 w-5 rounded-full ${
              isScrolled 
                ? "bg-gray-700 group-hover:bg-gray-600" 
                : "bg-white/30 group-hover:bg-white/50"
            } flex items-center justify-center transition-colors`}>
              <ChevronRight className="h-3 w-3 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${isPanelOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${isPanelOpen ? "opacity-50" : "opacity-0"}`}
          onClick={() => setIsPanelOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Panel Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <Link href="/" onClick={() => setIsPanelOpen(false)} prefetch>
                  <Image src="/images/brandbik-blue-logo-.png" alt="Logo" width={120} height={40} className="" />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 text-[20px] hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <RiCloseLargeLine />
                </button>
              </div>
            </div>

            {/* Panel Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-8">
                <div className="py-4 border-b border-gray-200">
                  <Link href="/about" onClick={() => setIsPanelOpen(false)} className="text-xl text-gray-700 hover:text-black transition-colors">
                    About
                  </Link>
                </div>

                <div className="py-4 border-b border-gray-200">
                  <Link href="/service" onClick={() => setIsPanelOpen(false)} className="text-xl text-gray-700 hover:text-black transition-colors">
                    Service
                  </Link>
                </div>

                <div className="py-4 border-b border-gray-200">
                  <Link href="/works" onClick={() => setIsPanelOpen(false)} className="text-xl text-gray-700 hover:text-black transition-colors">
                    Works
                  </Link>
                </div>

                <div className="py-4 border-b border-gray-200">
                  <Link href="/contact" onClick={() => setIsPanelOpen(false)} className="text-xl text-gray-700 hover:text-black transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>

            {/* Connect Us Button */}
            <div className="p-6  ">
            <Link 
  href="/contact" 
  onClick={() => setIsPanelOpen(false)}
  className="relative block w-full text-white text-center py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl before:absolute before:inset-0 before:rounded-lg before:z-[-1] before:bg-gradient-to-r before:from-[#2C6BD8] before:to-[#08E6D5] before:content-['']"
>
  Connect Us
</Link>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}