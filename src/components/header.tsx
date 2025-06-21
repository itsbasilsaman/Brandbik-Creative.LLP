"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import GetStartedPanel from "./GetStartedPanel"

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Add this helper function to check if we're on the works or about route
  const isDarkTextRoute = pathname === '/works' || pathname === '/about' || pathname === '/clients'

  // Close panel when route changes
  useEffect(() => {
    setIsPanelOpen(false)
  }, [pathname])

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle panel open/close
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPanelOpen])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageDropdownOpen(false)
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const handleLanguageChange = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage)
    setIsLanguageDropdownOpen(false)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      setIsPanelOpen(false)
      // Small delay to allow panel to close before navigation
      setTimeout(() => {
        window.location.href = href
      }, 50)
    }
  }

  // Language Switcher Component
  const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <motion.button
        onClick={() => {
          const newLanguage = language === "en" ? "ar" : "en"
          handleLanguageChange(newLanguage)
        }}
        className={`relative inline-flex items-center h-[42px] px-0 rounded-full cursor-pointer transition-all duration-300 ${
          isScrolled 
            ? "bg-gray-100 hover:bg-gray-200" 
            : "bg-white/20 hover:bg-white/30"
        } ${isMobile ? "w-[80px]" : "w-[85px]"}`}
        whileTap={{ scale: 0.95 }}
      >
        {/* Toggle Track */}
        <div className="relative w-full h-full flex items-center justify-between px-1">
          {/* Language Labels */}
          <span className={`text-sm pl-2 font-medium z-10 ${
            isScrolled 
              ? (language === "en" ? "text-white" : "text-gray-300")
              : (language === "en" ? "text-black" : "text-gray-100")
          }`}>
            EN
          </span>
          <span className={`text-sm pr-1 font-medium z-10 ${
            isScrolled 
              ? (language === "ar" ? "text-white" : "text-gray-300")
              : (language === "ar" ? "text-black" : "text-gray-100")
          }`}>
            عربي
          </span>
          
          {/* Toggle Circle */}
          <motion.div
            className={`absolute h-[34px] w-[38px] rounded-full ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } shadow-md`}
            animate={{
              x: language === "en" ? 0 : isMobile ? "36px" : "39px"
            }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          />
        </div>
      </motion.button>
    </div>
  )

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 bg-transparent`}
    >
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-24 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          {/* Combined Navigation Container with Logo and CTA */}
          <div className={`relative flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
            isScrolled || isDarkTextRoute
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-black/20 backdrop-blur-md"
          } rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3`}>

            {/* Left side: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" prefetch>
                {isLargeScreen ? (
                  <Image
                    src={isScrolled || isDarkTextRoute ? "/images/brandbik-blue-logo-.png" : "/images/logo-brandbik.png"}
                    alt="Logo"
                    width={120}
                    height={40}
                    className="w-[100px] sm:w-[110px] md:w-[120px] h-[32px] sm:h-[36px] md:h-[40px] object-contain"
                  />
                ) : (
                  <Image src="/images/brandbik-icon.png" alt="Logo" width={30} height={20} className="w-[32px] sm:w-[36px] md:w-[40px] h-[24px] sm:h-[27px] md:h-[30px] object-contain" />
                )}
              </Link>
            </div>
            
            {/* Centered Navigation */}
            <nav className="hidden lg:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center space-x-1 xl:space-x-2 2xl:space-x-4">
              <Link
                href="/about"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.about')}</span>
              </Link>
              <Link
                href="/service"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.services')}</span>
              </Link>
              <Link
                href="/works"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.works')}</span>
              </Link>
              <Link
                href="/careers"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.career')}</span>
              </Link>
              <Link
                href="/contact"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.contact')}</span>
              </Link>
            </nav>

            {/* Right side: Controls */}
            <div className="flex items-center">
              {/* Desktop Controls */}
              <div className="hidden lg:flex items-center gap-1 sm:gap-2 md:gap-3">
                <LanguageSwitcher />
                <button
                  onClick={() => setIsPanelOpen(true)}
                  className={`inline-flex items-center gap-1 sm:gap-2 cursor-pointer ${
                    isScrolled || isDarkTextRoute 
                      ? "bg-gray-800 hover:bg-gray-700 text-white" 
                      : "bg-white/30 hover:bg-white/40 text-white"
                  } px-2 sm:px-3 md:px-4 py-[8px] sm:py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group`}
                >
                  <span className="text-white text-xs sm:text-sm md:text-base">{t('header.getStarted')}</span>
                  <div
                    className={`h-4 w-4 sm:h-5 sm:w-5 rounded-full ${
                      isScrolled || isDarkTextRoute 
                        ? "bg-gray-700 group-hover:bg-gray-600" 
                        : "bg-white/30 group-hover:bg-white/50"
                    } flex items-center justify-center transition-colors`}
                  >
                    <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                  </div>
                </button>
              </div>

              {/* Mobile and Tablet Controls */}
              <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
                <LanguageSwitcher isMobile={true} />
                <button 
                  className={`${isScrolled || isDarkTextRoute ? "text-gray-800" : "text-white"}`}
                  onClick={() => setIsPanelOpen(true)}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Panel */}
      {isLargeScreen ? (
        <GetStartedPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
      ) : (
        /* Mobile Slide Panel */
        <div
          className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${
            isPanelOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isPanelOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsPanelOpen(false)}
          />

          {/* Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-all duration-500 ease-in-out backdrop-blur-xl ${
              isPanelOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col h-full relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform rotate-12 animate-pulse" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl transform -rotate-12 animate-pulse delay-1000" />
              </div>

              {/* Panel Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 relative z-10">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Link href="/" onClick={() => setIsPanelOpen(false)} prefetch>
                    <Image src="/images/logo-brandbik.png" alt="Logo" width={120} height={40} className="brightness-200" />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPanelOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Panel Navigation */}
              <nav className="flex-1 p-6 relative z-10">
                <div className="space-y-4">
                  {[
                    { href: "/about", label: t('header.about') },
                    { href: "/service", label: t('header.services') },
                    { href: "/works", label: t('header.works') },
                    { href: "/careers", label: t('header.career') },
                    { href: "/contact", label: t('header.contact') }
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavigation}
                      className="block transform hover:translate-x-2 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="group relative py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300">
                        <span className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">
                          {item.label}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Connect Us Button */}
              <div className="p-6 relative z-10">
                <Link
                  href="/contact"
                  onClick={() => setIsPanelOpen(false)}
                  className="group relative block w-full text-white text-center py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t('header.connectUs')}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}