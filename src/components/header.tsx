"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full px-8 md:px-16 lg:px-24 transition-colors duration-300 ${
        scrolled ? "bg-[#20629b40]" : ""
      }`}
      style={!scrolled ? {
        backgroundImage: "url('/forest-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : {}}
    >
      <div className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="w-auto h-8" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white font-medium relative group">
            <span className="relative">
              About
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>
          <Link href="/services" className="text-white font-medium relative group">
            <span className="relative">
              Services
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>
          <Link href="/portfolio" className="text-white font-medium relative group">
            <span className="relative">
              Portfolio
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>
          <Link href="/contact" className="text-white font-medium relative group">
            <span className="relative">
              Contact Us
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>
        </nav>

        <div className="flex-shrink-0">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-white/30 hover:bg-white/30 text-white px-4 py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <span>Get Started</span>
            <div className="h-5 w-5 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/50 transition-colors">
              <ChevronRight className="h-3 w-3 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}