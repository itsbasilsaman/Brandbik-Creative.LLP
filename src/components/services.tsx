"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect } from "react"

export default function ServicesSection() {
  const { t, language } = useLanguage();

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.services-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  return (
    <div className={`container mx-auto px-5 md:px-16 lg:px-24 py-[80px] w-full services-content ${language === 'ar' ? 'text-right' : ''}`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 sm:mb-12 md:mb-16">{t('services.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Web Development */}
        <Link href="/service/web-development" className="block">
          <div className="rounded-lg cursor-pointer bg-blue-50 border border-blue-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-blue-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/web.png"
                  alt="Web Development"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.web.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.web.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>

        {/* App Development */}
        <Link href="/service/app-development" className="block">
          <div className="rounded-lg cursor-pointer bg-amber-50 border border-amber-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-amber-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/app-development.png"
                  alt="App Development"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.app.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.app.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>

        {/* Branding */}
        <Link href="/service/branding" className="block">
          <div className="rounded-lg cursor-pointer bg-emerald-50 border border-emerald-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-emerald-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/branding.png"
                  alt="Branding"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.branding.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.branding.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>

        {/* Digital Marketing */}
        <Link href="/service/digital-marketing" className="block">
          <div className="rounded-lg cursor-pointer bg-pink-50 border border-pink-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-pink-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/digital-marketing.png"
                  alt="Digital Marketing"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.digital.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.digital.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>

        {/* Social Media */}
        <Link href="/service/social-media" className="block">
          <div className="rounded-lg cursor-pointer bg-purple-50 border border-purple-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-purple-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/social-media.png"
                  alt="Social Media"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.social.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.social.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>

        {/* Advertising */}
        <Link href="/service/advertising" className="block">
          <div className="rounded-lg cursor-pointer bg-gray-50 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:bg-gray-100/70 group">
            <div className="mb-4">
              <div className="relative w-full h-28 sm:h-36 rounded-lg flex items-center justify-center transition-all duration-300">
                <Image
                  src="/images/advertising.png"
                  alt="Advertising"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-start px-5 sm:px-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('services.advertising.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t('services.advertising.description')}
                </p>
              </div>
              <ArrowRight className={`text-black transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
