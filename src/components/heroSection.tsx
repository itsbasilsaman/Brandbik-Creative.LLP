// src/components/HeroSection.tsx
'use client';

import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react";
// import { CiDesktopMouse1 } from "react-icons/ci";

export default function Home() {
  const { t, language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // Handle RTL support for this component only
  useEffect(() => {
    const contentContainer = document.querySelector('.hero-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Window width:', window.innerWidth);
      console.log('Is mobile:', mobile);
      setIsMobile(mobile);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0"> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover"
          key={isMobile ? 'mobile' : 'desktop'} // Force video reload when source changes
        >
          <source 
            src={isMobile ? "https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/Website+Video+Preview+Mobile.mp4" : "https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/Website+Video+Preview1.mp4"} 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="absolute bottom-8 left-4 right-4 sm:bottom-12 sm:left-6 sm:right-auto md:bottom-16 md:left-8 lg:bottom-20 lg:left-24 z-10">
        <div className="max-w-[500px] hero-content">
          <h1 className={`font-sans text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[45px] ${language === 'ar' ? 'text-right' : ''}`}>
            <span className="">{t('hero.title.part1')}</span> {t('hero.title.part2')}<span className=""> {t('hero.title.part3')} </span>{t('hero.title.part4')}
          </h1>
          <button 
            onClick={() => window.location.href = '/contact'}
            className={`inline-flex items-center px-4 sm:px-6 mt-4 sm:mt-6 rounded-full cursor-pointer py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 group text-sm sm:text-base md:text-lg`}
          >
           
            <span className="font-medium"> Let's Talk</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer" onClick={scrollToNextSection}>
        <div className="animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>
    </main>
  )
}
