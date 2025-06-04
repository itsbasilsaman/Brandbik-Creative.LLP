"use client"

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.clients-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  return (
    <section 
      id="clients-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24 overflow-hidden"
    >
      <div className="space-y-12">
        <div 
          className={`max-w-[818px] transition-all duration-700 ease-out clients-content ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${language === 'ar' ? 'text-right' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-medium tracking-tight text-black mb-4 leading-tight">
            {t('clients.title')}
          </h2>
          <p className="text-lg md:text-xl lg:text-[20px] text-gray-600">
            {t('clients.subtitle')}
          </p>
        </div>
        

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
  {/* Row 1 */}
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '50ms' : '0ms' }}>
    <Image src="/images/CHRFFFF-logo-1.png" alt="SeaStar International" width={150} height={50} className="object-contain hover:grayscale transition-all duration-300 w-auto" priority />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
    <Image src="/images/genchi-logo-2.png" alt="Genchi Global Limited" width={110} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" priority />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
    <Image src="/images/take-off-logo.png" alt=" " width={110} height={60} className="hover:grayscale transition-all duration-300 w-auto" priority />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
    <Image src="/images/scitor academy-logo-4.png" alt="Cyber Seed" width={240} height={60} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}>
    <Image src="/images/seastar-logo-5.png" alt="SheTalks" width={130} height={40} className="object-cover hover:grayscale transition-all duration-300" />
  </div>

  {/* Row 2 */}
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
    <Image src="/images/WEONWEELS-logo-6.png" alt="Silhouettes" width={140} height={30} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '350ms' : '0ms' }}>
    <Image src="/images/logo-1.png" alt="Financeva" width={130} height={30} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
    <Image src="/images/team-ae-logo-8.png" alt="Tenderoutes" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}>
    <Image src="/images/aes-logo.png" alt="AE's School of Commerce" width={180} height={60} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
    <Image src="/images/cyber-black-logo-10.png" alt="AGTC" width={150} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>

  {/* Row 3 */}
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '550ms' : '0ms' }}>
    <Image src="/images/abu-glumbo-1111.png" alt="Delete" width={180} height={70} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
    <Image src="/images/LOGO-LANDSCAPE-purple-logo-12.png" alt="Kanzul Hind" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '650ms' : '0ms' }}>
    <Image src="/images/teal clr.png" alt="Scitor Academy" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
    <Image src="/images/MATRIXX-MICRONS-logo-14.png" alt="Galaxon" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '750ms' : '0ms' }}>
    <Image src="/images/prozomann-logo-15.png" alt="Tatheer" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>

  {/* Row 4 */}
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
    <Image src="/images/logo-21.png" alt="JamJoom Hypermarket" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '850ms' : '0ms' }}>
    <Image src="/images/MPB-17.png" alt="Wellham Associates" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}>
    <Image src="/images/finan-blue-19.png" alt="Zayior" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '950ms' : '0ms' }}>
    <Image src="/images/shetalks-18.png" alt="Get Your Dubai Visa" width={160} height={60} className="max-h-12 w-auto object-contain hover:grayscale transition-all duration-300" />
  </div>
  <div className={`flex items-center justify-center p-4 bg-white rounded-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
    <Image src="/images/KANZUL-20.png" alt="Matrixx Microns" width={140} height={50} className="object-cover hover:grayscale transition-all duration-300" />
  </div>
</div>
      </div>

      <div className="w-full flex justify-center items-center pt-16">
        <a 
          href="/clients"
          className={`group relative inline-flex items-center justify-center gap-3 px-[2px] py-[2px] rounded-full text-sm font-medium text-black before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-[#2C6BD8] before:to-[#08E6D5] before:content-[''] before:z-0 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: isVisible ? '1050ms' : '0ms' }}
        >
          <span className="relative z-10 bg-white rounded-full px-4 py-3 flex items-center gap-3 text-base sm:text-[16px] text-black transition-all duration-500 hover:bg-transparent hover:text-white">
            {t('clients.viewAll')}
            <FaArrowRight className={`transition-transform duration-500 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
          </span>
        </a>
      </div>
    </section>
    
  );
}