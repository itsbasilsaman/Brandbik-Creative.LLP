// src/components/HeroSection.tsx
'use client';

import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect } from "react"
// import { CiDesktopMouse1 } from "react-icons/ci";

export default function Home() {
  const { t, language } = useLanguage();

  // Handle RTL support for this component only
  useEffect(() => {
    const contentContainer = document.querySelector('.hero-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0"> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover"
        >
          <source src="/banner-video-one.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="absolute top-68 left-2 lg:top-48 lg:left-7 z-10 flex h-full flex-col justify-center px-5 md:px-16 lg:px-24">
        <div className="max-w-[500px] hero-content">
          <h1 className={`font-sans text-[23px] font-light leading-tight tracking-tight text-white md:text-6xl lg:text-[45px] ${language === 'ar' ? 'text-right' : ''}`}>
            <span className="">{t('hero.title.part1')}</span> {t('hero.title.part2')}<span className=""> {t('hero.title.part3')} </span>{t('hero.title.part4')}
          </h1>
          {/* <p className={`mt-6 text-lg text-white/90 md:text-xl ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.subtitle')}</p> */}
        </div>
      </div>
    </main>
  )
}
