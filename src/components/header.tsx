"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { RiCloseLargeLine } from "react-icons/ri"
import { motion, AnimatePresence } from "framer-motion"

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

interface Language {
  code: string
  name: string
  flag: string
  dir: "ltr" | "rtl"
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "http://clipart-library.com/new_gallery/644232_english-flag-png.png", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "https://static.vecteezy.com/system/resources/previews/003/094/399/large_2x/saudi-arabia-national-flag-illustration-editable-image-vector.jpg", dir: "rtl" },
]

const contentSections: Record<string, ContentSection> = {
  impact: {
    title: "Our Achivements",
    description:
      "Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.",
    stats: [
      { number: "700+", label: "Projects launched successfully across the globe" },
      { number: "10M", label: "Daily customer engagement through our projects" },
      { number: "100+", label: "Digital transformation stories that made a difference" },
    ],
    buttonText: "Our Impact",
    buttonLink: "/impact",
    hasAnimation: true,
    images: {
      static: "/images/achievement-bg-1.png",
      animated: "/images/achievement-bg-2.png",
    },
  },
  testimonials: {
    title: "Client Testimonials",
    description:
      "Hear from our satisfied clients who have experienced transformational growth through our innovative solutions and dedicated partnership approach.",
    stats: [
      { number: "98%", label: "Client satisfaction rate across all projects" },
      { number: "4.9/5", label: "Average rating from client feedback" },
      { number: "85%", label: "Clients who return for additional projects" },
    ],
    buttonText: "View Testimonials",
    buttonLink: "/testimonials",
  },
  clients: {
    title: "Our Clients",
    description:
      "We partner with industry leaders and emerging businesses to create meaningful digital experiences that drive growth and innovation.",
    stats: [
      { number: "250+", label: "Global clients across various industries" },
      { number: "50+", label: "Fortune 500 companies trust our solutions" },
      { number: "30+", label: "Countries where our clients operate" },
    ],
    buttonText: "Our Clients",
    buttonLink: "/clients",
  },
  partnership: {
    title: "Partnership",
    description:
      "Building lasting relationships through strategic partnerships that create mutual value and drive innovation in the digital landscape.",
    stats: [
      { number: "40+", label: "Strategic technology partnerships worldwide" },
      { number: "15+", label: "Years of partnership excellence" },
      { number: "200+", label: "Collaborative projects delivered successfully" },
    ],
    buttonText: "Partner With Us",
    buttonLink: "/partnership",
  },
  insights: {
    title: "Insights",
    description:
      "Stay ahead with our latest research, industry trends, and thought leadership that shapes the future of digital transformation.",
    stats: [
      { number: "500+", label: "Research articles and insights published" },
      { number: "1M+", label: "Monthly readers of our insights" },
      { number: "25+", label: "Industry awards for thought leadership" },
    ],
    buttonText: "Explore Insights",
    buttonLink: "/insights",
  },
  contact: {
    title: "Contact",
    description:
      "Ready to start your digital transformation journey? Get in touch with our team of experts to discuss your project requirements.",
    stats: [
      { number: "24/7", label: "Support available for all clients" },
      { number: "< 2hrs", label: "Average response time to inquiries" },
      { number: "100%", label: "Commitment to client success" },
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
}

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("impact")
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()
  const [isAchievementHovered, setIsAchievementHovered] = useState(false)
  const [animationTimer, setAnimationTimer] = useState<NodeJS.Timeout | null>(null)

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

  // Reset loading state on pathname change
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])

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
      // Clear any existing timer
      if (animationTimer) {
        clearTimeout(animationTimer)
        setAnimationTimer(null)
      }
      setIsAchievementHovered(true)
    } else {
      // Set timer to hide animation after 3 seconds
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

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    setIsLanguageDropdownOpen(false)
    // Here you would typically update your i18n context or call your translation service
    console.log("Language changed to:", language.code)
  }

  const currentContent = contentSections[activeSection]

  // Language Switcher Component
  const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <motion.button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className={`inline-flex items-center gap-2 cursor-pointer ${
          isScrolled ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-white/20 hover:bg-white/30 text-white"
        } ${isMobile ? "px-3 py-2" : "px-4 py-2.5"} rounded-[8px] transition-all duration-300 hover:transform hover:scale-105 group ${
          isLoading ? "opacity-50 pointer-events-none" : ""
        } shadow-sm hover:shadow-md`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* <span className={`${isMobile ? "text-base" : "text-lg"}`}>{currentLanguage.flag}</span> */}
        <Image
          src={currentLanguage.flag} 
          alt={currentLanguage.name}
          width={20}
          height={20}
          className={`${isMobile ? "h-4 w-4" : "h-5 w-5"}`}
        />
        <span className={`${isMobile ? "text-xs" : "text-sm"} font-medium hidden sm:block`}>
          {currentLanguage.name}
        </span>
        <span className={`${isMobile ? "text-xs" : "text-sm"} font-medium sm:hidden`}>
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.div
          animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-1"
        >
          <ChevronDown className={`${isMobile ? "h-3 w-3" : "h-4 w-4"} opacity-70`} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isLanguageDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute ${isMobile ? "top-full mt-2 right-0" : "top-full mt-2 left-0"} z-50 min-w-[160px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm`}
          >
            <div className="py-2">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200 relative ${
                    currentLanguage.code === language.code
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    backgroundColor: currentLanguage.code === language.code ? "#dbeafe" : "#f9fafb",
                    x: 4,
                  }}
                >
                   <Image
          src={currentLanguage.flag} 
          alt={currentLanguage.name}
          width={20}
          height={20}
          className={`${isMobile ? "h-4 w-4" : "h-5 w-5"}`}
        />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-medium truncate">{language.name}</span>
                    <span className="text-xs text-gray-500 truncate">
                      {language.code === "en" ? "English" : "العربية"}
                    </span>
                  </div>
                  {currentLanguage.code === language.code && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

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
          <Link
            href="/about"
            prefetch
            className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="relative">
              About
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </span>
          </Link>
          <Link
            href="/service"
            prefetch
            className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="relative">
              Services
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </span>
          </Link>
          <Link
            href="/works"
            prefetch
            className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="relative">
              Works
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </span>
          </Link>
          <Link
            href="/contact"
            prefetch
            className={`font-medium relative group ${isScrolled ? "text-gray-800" : "text-white"} ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="relative">
              Contact Us
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </span>
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
            className={`inline-flex items-center gap-2 cursor-pointer ${
              isScrolled ? "bg-gray-800 hover:bg-gray-700" : "bg-white/30 hover:bg-white/40"
            } text-white px-4 py-[10px] rounded-full transition-all duration-300 hover:transform hover:scale-105 group ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <span className="text-white">Get Started</span>
            <div
              className={`h-5 w-5 rounded-full ${
                isScrolled ? "bg-gray-700 group-hover:bg-gray-600" : "bg-white/30 group-hover:bg-white/50"
              } flex items-center justify-center transition-colors`}
            >
              <ChevronRight className="h-3 w-3 text-white" />
            </div>
          </button>
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
              <RiCloseLargeLine className="w-6 h-6" />
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
                          <span className="text-white font-bold text-lg">🏆</span>
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
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
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
            className={`absolute top-0 right-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out ${
              isPanelOpen ? "translate-x-0" : "translate-x-full"
            }`}
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
                  {/* Language Switcher for Mobile */}
                  <LanguageSwitcher isMobile={true} />
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
                  <Link
                    href="/about"
                    onClick={() => setIsPanelOpen(false)}
                    className="text-xl text-gray-700 hover:text-black transition-colors"
                  >
                    <div className="py-4 border-b border-gray-200 w-full">About</div>
                  </Link>
                  <Link
                    href="/service"
                    onClick={() => setIsPanelOpen(false)}
                    className="text-xl text-gray-700 hover:text-black transition-colors"
                  >
                    <div className="py-4 border-b border-gray-200 w-full">Service</div>
                  </Link>
                  <Link
                    href="/works"
                    onClick={() => setIsPanelOpen(false)}
                    className="text-xl text-gray-700 hover:text-black transition-colors"
                  >
                    <div className="py-4 border-b border-gray-200 w-full">Works</div>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsPanelOpen(false)}
                    className="text-xl text-gray-700 hover:text-black transition-colors"
                  >
                    <div className="py-4 border-b border-gray-200 w-full">Contact</div>
                  </Link>
                </div>
              </nav>

              {/* Connect Us Button */}
              <div className="p-6">
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
      )}
    </header>
  )
}
