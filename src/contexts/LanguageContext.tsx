"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Handle document direction for all components except header
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  const translations: Translations = {
    en: {
      'hero.title.part1': 'We build',
      'hero.title.part2': 'bold brands',
      'hero.title.part3': '&',
      'hero.title.part4': 'digital experiences.',
      'hero.subtitle': 'Strategy, identity, and design — elevated.',
      'hero.letsTalk': "Let's Talk",
      
      // About Section
      'about.title': 'Building Brands with Purpose.',
      'about.subtitle': 'Brandbik transforms bold ideas into digital realities, blending creativity, strategy, and technology for next-level impact.',
      'about.description': "From startups to global icons, we craft unforgettable experiences and measurable results. Let's create something remarkable together.",
      
      // Services Section
      'services.title': 'Our Services',
      'services.subtitle': 'Strategic solutions, creative execution, and measurable results for ambitious brands.',
      'services.web.title': 'Web Development',
      'services.web.description': 'Robust, scalable websites engineered for performance and growth.',
      'services.app.title': 'App Development',
      'services.app.description': 'Intuitive mobile solutions that drive engagement and deliver value.',
      'services.branding.title': 'Brand Strategy',
      'services.branding.description': 'Distinctive brand identities that inspire trust and recognition.',
      'services.digital.title': 'Digital Marketing',
      'services.digital.description': 'Data-driven campaigns that accelerate your brand\'s online impact.',
      'services.social.title': 'Social Media Management',
      'services.social.description': 'Strategic content and community building for maximum reach.',
      'services.advertising.title': 'Performance Advertising',
      'services.advertising.description': 'Targeted ad solutions designed to maximize ROI and brand visibility.',
      
      // Works Section
      'works.title': 'Our Work',
      'works.subtitle': 'Discover our latest projects and creative solutions.',
      'works.categories.website': 'Website Development',
      'works.categories.app': 'App Development',
      'works.categories.branding': 'Branding',
      'works.categories.social': 'Social Media',
      
      // Clients Section
      'clients.title': 'Clients',
      'clients.subtitle': 'We collaborate with brands across industries — from startups to global leaders — to craft experiences that resonate and endure.',
      'clients.viewAll': 'View all clients',
      
      // Process Section
      'process.title': 'Our Process',
      'process.step1.title': 'Discover',
      'process.step1.description': 'We start with deep research to understand your audience, competitors, and goals.',
      'process.step2.title': 'Design',
      'process.step2.description': 'We craft systems — not just logos — that scale across all touchpoints.',
      'process.step3.title': 'Deliver',
      'process.step3.description': 'Every file, asset, and guide you need. Ready to launch and grow.',
      
      // Results Section
      'results.title': 'The Result',
      'results.description': 'A cohesive, elevated identity that helped increase brand recall. The new site saw a 28% lift in conversion within the first quarter post-launch.',
      'results.contact': 'Contact Us'
    },
    ar: {
      'hero.title.part1': 'نحن نبني',
      'hero.title.part2': 'علامات تجارية جريئة',
      'hero.title.part3': 'و',
      'hero.title.part4': 'تجارب رقمية.',
      'hero.subtitle': 'استراتيجية، هوية، وتصميم — متطور.',
      'hero.letsTalk': 'تحدث معنا',
      
      // About Section
      'about.title': 'نحن نبني علامات تجارية تتحرك بهدف.',
      'about.subtitle': 'براندبيك هي وكالة إبداعية تصنع العلامات التجارية الحديثة والتجارب الرقمية واستراتيجيات النمو للطموحين.',
      'about.description': 'من الشركات الناشئة إلى الشركات العالمية، نصمم قصصًا تتصل وتدوم.',
      
      // Services Section
      'services.title': 'خدماتنا',
      'services.subtitle': 'نقدم حلولاً شاملة لمساعدة علامتك التجارية على الازدهار في العصر الرقمي.',
      'services.web.title': 'تطوير المواقع',
      'services.web.description': 'تصاميم مواقع فريدة وعالية الأداء مناسبة لجذب عملائك.',
      'services.app.title': 'تطوير التطبيقات',
      'services.app.description': 'تطبيقات جوال عالية الجودة مع واجهة مستخدم لتحويل الأفكار إلى أعمال.',
      'services.branding.title': 'العلامة التجارية',
      'services.branding.description': 'نحن نجعل علامتك التجارية تبرز في العالم الرقمي.',
      'services.digital.title': 'التسويق الرقمي',
      'services.digital.description': 'حلول متميزة لتعزيز وجودك في العالم الحديث.',
      'services.social.title': 'وسائل التواصل الاجتماعي',
      'services.social.description': 'تعظيم وصولك من خلال حملاتنا الإعلانية المتخصصة وتوليد العملاء المحتملين.',
      'services.advertising.title': 'الإعلان',
      'services.advertising.description': 'تعظيم وصولك من خلال حملات إعلانية مستهدفة.',
      
      // Works Section
      'works.title': 'أعمالنا',
      'works.subtitle': 'اكتشف أحدث مشاريعنا وحلولنا الإبداعية.',
      'works.categories.website': 'تطوير المواقع',
      'works.categories.app': 'تطوير التطبيقات',
      'works.categories.branding': 'العلامة التجارية',
      'works.categories.social': 'وسائل التواصل الاجتماعي',
      
      // Clients Section
      'clients.title': 'العملاء',
      'clients.subtitle': 'نحن نتعاون مع العلامات التجارية عبر الصناعات — من الشركات الناشئة إلى القادة العالميين — لتصميم تجارب تتردد صدى وتدوم.',
      'clients.viewAll': 'عرض جميع العملاء',
      
      // Process Section
      'process.title': 'عملنا',
      'process.step1.title': 'اكتشاف',
      'process.step1.description': 'نبدأ بأبحاث عميقة لفهم جمهورك ومنافسيك وأهدافك.',
      'process.step2.title': 'تصميم',
      'process.step2.description': 'نحن نصمم أنظمة — وليس مجرد شعارات — تتوسع عبر جميع نقاط الاتصال.',
      'process.step3.title': 'تسليم',
      'process.step3.description': 'كل الملفات والأصول والأدلة التي تحتاجها. جاهز للإطلاق والنمو.',
      
      // Results Section
      'results.title': 'النتيجة',
      'results.description': 'هوية متماسكة ومتطورة ساعدت في زيادة تذكر العلامة التجارية. شهد الموقع الجديد زيادة بنسبة 28٪ في التحويل خلال الربع الأول بعد الإطلاق.',
      'results.contact': 'اتصل بنا'
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 