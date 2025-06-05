"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

interface ContentSection {
  title: string
  description: string
  stats: Array<{
    number: string
    label: string
  }>
  buttonText: string
  buttonLink: string
  hasAnimation?: boolean
  images?: {
    static: string
    animated: string
  }
}

const contentSections: Record<string, ContentSection> = {
  impact: {
    title: "Our Achivements",
    description:
      "At BrandBik, we've been transforming businesses through innovative digital solutions. Our commitment to excellence and client success has led to remarkable achievements in the digital landscape.",
    stats: [
      { number: "200+", label: "Successful digital transformation projects" },
      { number: "95%", label: "Client satisfaction rate" },
      { number: "50+", label: "Enterprise clients served" },
    ],
    buttonText: "View Our Impact",
    buttonLink: "/impact",
    hasAnimation: true,
    images: {
      static: "/images/achievement-bg-1.png",
      animated: "/images/achievement-bg-2.png",
    },
  },
  testimonials: {
    title: "Client Success Stories",
    description:
      "Our clients' success is our success. Hear from businesses that have transformed their digital presence and achieved remarkable growth through our solutions.",
    stats: [
      { number: "4.9/5", label: "Average client satisfaction rating" },
      { number: "85%", label: "Clients who return for additional projects" },
      { number: "60%", label: "Average increase in client engagement" },
    ],
    buttonText: "Read Testimonials",
    buttonLink: "/testimonials",
  },
  clients: {
    title: "Global Reach",
    description:
      "We partner with forward-thinking businesses across various industries, helping them achieve their digital goals through innovative solutions and strategic thinking.",
    stats: [
      { number: "50+", label: "Active enterprise clients" },
      { number: "15+", label: "Industries served" },
      { number: "30+", label: "Countries with our client presence" },
    ],
    buttonText: "Meet Our Clients",
    buttonLink: "/clients",
  },
  partnership: {
    title: "Innovation",
    description:
      "We believe in the power of collaboration. Our strategic partnerships enable us to deliver comprehensive solutions and stay at the forefront of digital innovation.",
    stats: [
      { number: "20+", label: "Technology partners" },
      { number: "10+", label: "Years of partnership excellence" },
      { number: "100+", label: "Joint projects delivered" },
    ],
    buttonText: "Partner With Us",
    buttonLink: "/partnership",
  },
  insights: {
    title: "Digital Insights",
    description:
      "Stay ahead of the curve with our expert insights, industry trends, and thought leadership in digital transformation and innovation.",
    stats: [
      { number: "100+", label: "Expert articles published" },
      { number: "50K+", label: "Monthly readers" },
      { number: "15+", label: "Industry awards" },
    ],
    buttonText: "Explore Insights",
    buttonLink: "/insights",
  },
  contact: {
    title: "Get in Touch",
    description:
      "Ready to transform your digital presence? Our team of experts is here to help you achieve your business goals through innovative solutions.",
    stats: [
      { number: "24/7", label: "Support available" },
      { number: "< 2hrs", label: "Response time" },
      { number: "100%", label: "Client satisfaction" },
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
}

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("impact")
  const { language, setLanguage } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()
  const [isAchievementHovered, setIsAchievementHovered] = useState(false)
  const [animationTimer, setAnimationTimer] = useState<NodeJS.Timeout | null>(null)

  // Add this helper function to check if we're on the works or about route
  const isDarkTextRoute = pathname === '/works' || pathname === '/about' || '/clients'

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

  const handleAchievementHover = (isHovering: boolean) => {
    if (isHovering) {
      if (animationTimer) {
        clearTimeout(animationTimer)
        setAnimationTimer(null)
      }
      setIsAchievementHovered(true)
    } else {
      const timer = setTimeout(() => {
        setIsAchievementHovered(false)
        setAnimationTimer(null)
      }, 3000)
      setAnimationTimer(timer)
    }
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (animationTimer) {
        clearTimeout(animationTimer)
      }
    }
  }, [animationTimer])

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

  const currentContent = contentSections[activeSection]

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
      className={`fixed top-0 left-0 z-50 w-full sm:px-4 md:px-16 lg:px-24 transition-all duration-500 ${
        "bg-transparent"
      }`}
      
    >
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Combined Navigation Container with Logo and CTA */}
          <div className={`flex items-center justify-between w-full space-x-8 transition-all duration-500 ease-in-out bg-white/30 backdrop-blur-md rounded-full px-8 py-3 ${isScrolled ? "shadow-md" : " "}`}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" prefetch>
                {isLargeScreen ? (
                  <Image
                    src={isScrolled || isDarkTextRoute ? "/images/brandbik-blue-logo-.png" : "/images/logo-brandbik.png"}
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/about"
                onClick={handleNavigation}
                className={`font-medium relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white hover:text-gray-800"
                }`}
              >
                <span className="relative">About Us</span>
              </Link>
              <Link
                href="/service"
                onClick={handleNavigation}
                className={`font-medium relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white hover:text-gray-800"
                }`}
              >
                <span className="relative">Services</span>
              </Link>
              <Link
                href="/works"
                onClick={handleNavigation}
                className={`font-medium relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white hover:text-gray-800"
                }`}
              >
                <span className="relative">Works</span>
              </Link>
              <Link
                href="/contact"
                onClick={handleNavigation}
                className={`font-medium relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled || isDarkTextRoute 
                    ? "text-gray-800 hover:bg-gray-800 hover:text-white" 
                    : "text-white hover:bg-white hover:text-gray-800"
                }`}
              >
                <span className="relative">Contact Us</span>
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Switcher for Desktop */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* Get Started Button */}
              <button
                onClick={() => setIsPanelOpen(true)}
                className={`hidden sm:inline-flex items-center gap-2 cursor-pointer ${
                  isScrolled || isDarkTextRoute ? "bg-gray-800 hover:bg-gray-700" : "bg-white/30 hover:bg-white/40"
                } text-white px-4 py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <span className="text-white">Get Started</span>
                <div
                  className={`h-5 w-5 rounded-full ${
                    isScrolled || isDarkTextRoute ? "bg-gray-700 group-hover:bg-gray-600" : "bg-white/30 group-hover:bg-white/50"
                  } flex items-center justify-center transition-colors`}
                >
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu button - positioned outside the container */}
          <div className="md:hidden absolute right-8 flex items-center gap-4">
            <LanguageSwitcher isMobile={true} />
            <button 
              className={`${isScrolled || isDarkTextRoute ? "text-black" : "text-white"}`}
              onClick={() => setIsPanelOpen(true)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay for Large Screens */}
      {isLargeScreen ? (
        <div
          className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
            isPanelOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-opacity duration-700 ${
              isPanelOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Main Content Container */}
          <div
            className={`relative w-full h-full transform transition-transform duration-700 ease-out ${
              isPanelOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPanelOpen(false)}
              className="absolute top-8 right-8 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex h-full">
              {/* Left Content Section */}
              <div className="flex-1 flex flex-col justify-center px-16 lg:px-24 relative">
                {/* Animated Background for Achievements - Now covers entire left area */}
                <AnimatePresence>
                  {activeSection === "impact" && isAchievementHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                    >
                      {/* Flowing Lines Animation */}
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 800 600"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Animated flowing curves - expanded for full left area */}
                          <motion.path
                            d="M50 100 Q400 50 750 150 Q400 250 50 200 Q400 350 750 400 Q400 450 50 500"
                            stroke="url(#gradient1)"
                            strokeWidth="4"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.7 }}
                            transition={{ duration: 2, delay: 0.2 }}
                          />
                          <motion.path
                            d="M100 50 Q500 100 600 300 Q300 450 100 350 Q500 200 700 100"
                            stroke="url(#gradient2)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 2.5, delay: 0.4 }}
                          />
                          <motion.path
                            d="M600 80 Q300 200 400 400 Q700 300 600 500 Q200 400 300 200"
                            stroke="url(#gradient3)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 3, delay: 0.6 }}
                          />

                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>

                      {/* Floating Geometric Shapes - distributed across full left area */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-0"
                      >
                        {/* Circles */}
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={`circle-${i}`}
                            className="absolute w-4 h-4 rounded-full"
                            style={{
                              background: [
                                "#3B82F6",
                                "#8B5CF6",
                                "#06B6D4",
                                "#10B981",
                                "#F59E0B",
                                "#EF4444",
                                "#EC4899",
                                "#6366F1",
                                "#14B8A6",
                                "#F97316",
                                "#84CC16",
                                "#A855F7",
                              ][i],
                              left: `${Math.random() * 90 + 5}%`,
                              top: `${Math.random() * 90 + 5}%`,
                            }}
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                              scale: [0, 1, 0.8, 1],
                              rotate: [0, 180, 360],
                              y: [0, -30, 0],
                              x: [0, Math.random() * 20 - 10, 0],
                            }}
                            transition={{
                              duration: 4,
                              delay: i * 0.2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          />
                        ))}

                        {/* Triangles */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={`triangle-${i}`}
                            className="absolute w-0 h-0"
                            style={{
                              left: `${Math.random() * 80 + 10}%`,
                              top: `${Math.random() * 80 + 10}%`,
                              borderLeft: "8px solid transparent",
                              borderRight: "8px solid transparent",
                              borderBottom: `16px solid ${["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#6366F1"][i]}`,
                              opacity: 0.7,
                            }}
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                              scale: [0, 1, 0.7, 1],
                              rotate: [0, 120, 240, 360],
                              x: [0, 20, -20, 0],
                            }}
                            transition={{
                              duration: 5,
                              delay: i * 0.3,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          />
                        ))}

                        {/* Trophy Icon Animation - positioned in upper area */}
                        <motion.div
                          className="absolute top-1/6 left-1/3 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{
                            scale: [0, 1.2, 1],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: 0.8,
                          }}
                        >
                          <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </motion.div>

                        {/* Additional Award Elements */}
                        <motion.div
                          className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0.9, 1],
                            opacity: [0, 1, 0.8, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            delay: 1.2,
                          }}
                        >
                          <span className="text-white font-semibold text-lg">🏆</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  key={activeSection}
                  className="animate-in slide-in-from-left-8 duration-500 relative z-10"
                  onMouseEnter={() => {
                    if (activeSection === "impact" && isLargeScreen) {
                      handleAchievementHover(true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (activeSection === "impact" && isLargeScreen) {
                      handleAchievementHover(false)
                    }
                  }}
                >
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {currentContent.title}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">{currentContent.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {currentContent.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="text-4xl lg:text-5xl font-semibold text-white mb-2">{stat.number}</div>
                        <div className="text-sm text-white/70 leading-relaxed">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
                    <Link
                      href={currentContent.buttonLink}
                      onClick={() => setIsPanelOpen(false)}
                      className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                    >
                      <span className="text-lg">{currentContent.buttonText}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Navigation Section */}
              <div className="w-80 flex flex-col justify-center pr-16 lg:pr-24 relative">
                <nav className="space-y-2 relative z-10">
                  {Object.entries(contentSections).map(([key, section]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`block w-full text-left text-2xl py-4 transition-all duration-300 hover:translate-x-2 relative ${
                        activeSection === key ? "text-white font-medium" : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
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
                    { href: "/about", label: "About Us" },
                    { href: "/service", label: "Service" },
                    { href: "/works", label: "Works" },
                    { href: "/contact", label: "Contact" }
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
                    Connect Us
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