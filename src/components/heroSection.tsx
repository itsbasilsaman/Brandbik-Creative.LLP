// src/components/HeroSection.tsx
'use client';

import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState, useRef } from "react"
import { ChevronDown, ArrowRight, Volume2, VolumeX } from "lucide-react";
// import { CiDesktopMouse1 } from "react-icons/ci";

export default function Home() {
  const { t, language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle RTL support for this component only
  useEffect(() => {
    const contentContainer = document.querySelector('.hero-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  // Handle mobile detection, video preloading, and viewport detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Window width:', window.innerWidth);
      console.log('Is mobile:', mobile);
      setIsMobile(mobile);
    };

    // Initial check
    checkMobile();

    // Preload video
    const preloadVideo = () => {
      if (videoRef.current) {
        videoRef.current.load();
        // Listen for loadeddata event to know when video is ready
        videoRef.current.onloadeddata = () => {
          setVideoLoaded(true);
        };
        // Force play to ensure video starts
        videoRef.current.play().catch(() => {
          // Auto-play was prevented, we'll try again when user interacts
          console.log('Autoplay prevented');
        });
      }
    };

    // Intersection Observer for viewport detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
            // When coming back to viewport, keep it muted initially
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
            }
          } else {
            setIsInViewport(false);
            // When leaving viewport, mute the video
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    // Handle page visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    };

    // Add event listeners
    window.addEventListener('resize', checkMobile);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Preload video when component mounts
    preloadVideo();

    // Cleanup function - mute video when component unmounts
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      
      // Mute video when component unmounts
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.onloadeddata = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current && isInViewport) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Fallback Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Fallback Image */}
        <img
          src="/fullscreen-banner.png"
          alt="Background fallback desktop"
          className={`h-full w-full object-cover absolute transition-opacity duration-500 hidden sm:block ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ pointerEvents: 'none' }}
        />
        {/* Mobile Fallback Image */}
        <img
          src="/mobile-banner.jpg"
          alt="Background fallback mobile"
          className={`h-full w-full object-cover absolute transition-opacity duration-500 block sm:hidden ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ pointerEvents: 'none' }}
        />
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster={isMobile ? "/mobile-banner.jpg" : "/fullscreen-banner.png"}
          className={`absolute h-full w-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          key={isMobile ? 'mobile' : 'desktop'}
        >
          <source 
            src={isMobile ? 
              "https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/Website+Video+Preview+verticle.mp4" : 
              "https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/Website+Video-Preview.mp4"
            } 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
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
           
            <span className="font-medium"> Let&apos;s Talk</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Audio Control Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-16 right-4 sm:bottom-12 sm:right-6 md:bottom-16 md:right-8 lg:bottom-20 lg:right-24 z-10 p-3 rounded-full   transition-colors duration-300  "
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-8 h-8 text-white" />
        ) : (
         <Volume2 className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer" onClick={scrollToNextSection}>
        <div className="animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>
    </main>
  )
}
