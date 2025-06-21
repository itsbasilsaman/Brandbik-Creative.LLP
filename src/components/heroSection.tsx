// src/components/HeroSection.tsx
'use client';

import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState, useRef } from "react"
import { ChevronDown, ArrowRight, ArrowLeft, VolumeOff } from "lucide-react";
import Image from "next/image";
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
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.muted = true;
        videoElement.onloadeddata = null;
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
        <Image
          src="/fullscreen-banner.png"
          alt="Background fallback desktop"
          fill
          className={`object-cover absolute transition-opacity duration-500 hidden sm:block ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ pointerEvents: 'none' }}
        />
        {/* Mobile Fallback Image */}
        <Image
          src="/mobile-banner.jpg"
          alt="Background fallback mobile"
          fill
          className={`object-cover absolute transition-opacity duration-500 block sm:hidden ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
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
            onClick={() => {
              const phoneNumber = '+919074851748';
              const whatsappUrl = `https://wa.me/${phoneNumber}`;
              window.open(whatsappUrl, '_blank');
            }}
            className={`inline-flex items-center px-4 sm:px-6 mt-4 sm:mt-6 rounded-full cursor-pointer py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 group text-sm sm:text-base md:text-lg`}
          >
            {language === 'ar' ? (
              <>
                <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-x-1 order-first" />
                <span className="font-medium order-last">{t('hero.letsTalk')}</span>
              </>
            ) : (
              <>
                <span className="font-medium">{t('hero.letsTalk')}</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Audio Control Button */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-16 z-10 flex items-center justify-center
          transition-all duration-300
          bg-white/10 backdrop-blur-md shadow-md
          hover:bg-white/20
          rounded-full
          p-1.5 sm:p-2
          border border-white/20
          ${language === 'ar'
            ? 'left-4 sm:left-6 md:left-8 lg:left-24 right-auto'
            : 'right-4 sm:right-6 md:right-8 lg:right-24 left-auto'}
        `}
        style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeOff className="w-5 h-5 text-white" />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
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
