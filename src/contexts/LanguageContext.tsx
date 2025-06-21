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
      'results.contact': 'Contact Us',
      
      // Header Navigation
      'header.about': 'About Us',
      'header.services': 'Services',
      'header.works': 'Works',
      'header.career': 'Career',
      'header.contact': 'Contact Us',
      'header.getStarted': 'Get Started',
      'header.connectUs': 'Connect Us',
      
      // GetStartedPanel Navigation
      'panel.impact': 'Impact',
      'panel.testimonials': 'Testimonials',
      'panel.clients': 'Clients',
      'panel.partnership': 'Partnership',
      'panel.insights': 'Insights',
      'panel.getInTouch': 'Get in Touch',
      
      // Footer Navigation
      'footer.tagline': 'Empowering Brands with Creative Excellence Across Saudi Arabia, UAE & India',
      'footer.pages': 'Pages',
      'footer.home': 'Home',
      'footer.aboutUs': 'About us',
      'footer.services': 'Services',
      'footer.works': 'Works',
      'footer.contactUs': 'Contact Us',
      'footer.contactInfo': 'Contact Us',
      'footer.copyright': '© {year} Brandbik. All rights reserved.',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'footer.cookiePolicy': 'Cookie Policy',
      
      // Team Description
      'team.contactUs': 'Contact Us',
      
      // About Banner
      'about.banner.badge': 'About',
      'about.banner.title': 'We build brands that move with purpose.',
      'about.banner.subtitle1': 'Brandbik specializes in building impactful brands, innovative digital experiences, and strategic growth solutions for forward-thinking businesses.',
      'about.banner.subtitle2': "Whether you're an emerging startup or an established global enterprise, we craft compelling narratives and design enduring connections that drive success.",
      'about.banner.gallery.title': 'Our team in action',
      
      // Team Description
      'team.description.text': "We're a cross-disciplinary team of strategists, designers, developers, and storytellers. What brings us together is a shared belief",
      
      // About Boxes
      'about.boxes.brands': 'Brands We Work With',
      'about.boxes.projects': 'Projects Completed',
      'about.boxes.countries': 'Countries we work with',
      'about.boxes.scaled': 'Brands scaled with us',
      'about.boxes.revenue': 'Revenue Generated',
      'about.boxes.clients': 'Happy Clients',
      
      // Approach Section
      'approach.badge': 'Approach',
      'approach.title': 'What Sets us apart',
      'approach.innovation': 'Innovation',
      'approach.quality': 'Quality Focused',
      'approach.results': 'Results-driven',
      'approach.skilled': 'Skilled Team',
      'approach.customer': 'Customer-Centric',
      'approach.agile': 'Agile Process',
      'approach.transparent': 'Transparent Communication',
      'approach.timely': 'Timely Delivery',
      'approach.technology': 'Cutting-edge Technology',
      'approach.data': 'Data-Driven Decisions',
      'approach.security': 'Security-First Approach',
      'approach.sustainability': 'Sustainability',
      
      // Our Team Section
      'team.badge': 'About',
      'team.title': 'Our Creative Minds',
      
      // Client Reviews
      'reviews.badge': 'Client Reviews',
      'reviews.cta.title': 'Lets work with Us',
      'reviews.cta.description': 'Discover how we turn ideas into impact. From App development to Web Design, SEO, and Digital Marketing, our work speaks for itself. Explore our latest projects on social media and see what sets us apart.',
      'reviews.cta.button': 'Connect Us',
      
      // Services in Reviews
      'reviews.services.branding': 'Branding',
      'reviews.services.app': 'App Development',
      'reviews.services.social': 'Social Media',
      'reviews.services.website': 'Website Design',
      'reviews.services.uxui': 'UX/UI Design',
      'reviews.services.marketing': 'Digital Marketing',
      
      // Service Main Banner
      'service.main.title': 'Empowering Brands with Next-Gen Solutions',
      'service.main.subtitle': 'Discover a full spectrum of services designed to elevate your brand, drive growth, and create lasting impact in the digital era.',
      'service.main.button': 'Start Your Project',
      
      // Service Content
      'service.content.text': 'From strategy to execution — we help businesses grow through clarity, creativity, and design.',
      'service.content.highlight.strategy': 'strategy',
      'service.content.highlight.execution': 'execution',
      'service.content.highlight.clarity': 'clarity',
      'service.content.highlight.creativity': 'creativity',
      'service.content.highlight.design': 'design',
      'service.content.highlight.growth': 'growth',
      'service.content.highlight.businesses': 'businesses',
      'service.content.highlight.impact': 'impact',
      
      // Bottom Bar
      'bottom.bar.title': 'Lets work with Us',
      'bottom.bar.description': 'Discover how we turn ideas into impact. From App development to Web Design, SEO, and Digital Marketing, our work speaks for itself. Explore our latest projects on social media and see what sets us apart.',
      'bottom.bar.button': 'Connect',
      
      // Service Banners
      'service.banner.web.title': 'Web Development',
      'service.banner.web.subtitle': 'We\'re committed to delivering exceptional web solutions that drive results.',
      'service.banner.web.button': 'Let\'s Talk',
      
      'service.banner.app.title': 'App Development',
      'service.banner.app.subtitle': 'We\'re committed to delivering exceptional mobile solutions that drive results.',
      'service.banner.app.button': 'Let\'s Talk',
      
      'service.banner.branding.title': 'Brand Strategy',
      'service.banner.branding.subtitle': 'We\'re committed to delivering exceptional branding solutions that drive results.',
      'service.banner.branding.button': 'Let\'s Talk',
      
      'service.banner.digital.title': 'Digital Marketing',
      'service.banner.digital.subtitle': 'We\'re committed to delivering exceptional digital marketing solutions that drive results.',
      'service.banner.digital.button': 'Let\'s Talk',
      
      'service.banner.social.title': 'Social Media Management',
      'service.banner.social.subtitle': 'We\'re committed to delivering exceptional social media solutions that drive results.',
      'service.banner.social.button': 'Let\'s Talk',
      
      'service.banner.advertising.title': 'Performance Advertising',
      'service.banner.advertising.subtitle': 'We\'re committed to delivering exceptional advertising solutions that drive results.',
      'service.banner.advertising.button': 'Let\'s Talk',
      
      // Work Banner
      'work.banner.title': 'Work that speaks louder than words.',
      
      // Work Main
      'work.main.categories.website': 'Website Development',
      'work.main.categories.app': 'App Development',
      'work.main.categories.branding': 'Branding',
      'work.main.categories.social': 'Social Media',
      
      // Work Projects - Website Development
      'work.projects.cyberseed.title': 'Cyberseed',
      'work.projects.cyberseed.description': 'Crafted a sleek business consultancy website with seamless UX for Cyberseed\'s digital transformation.',
      'work.projects.scitor.title': 'Scitor Academy',
      'work.projects.scitor.description': 'Built an engaging educational platform powering Scitor Academy\'s digital marketing and tech courses.',
      'work.projects.zayior.title': 'Zayior',
      'work.projects.zayior.description': 'Designed a luxurious resort website with stunning visuals and seamless booking for Zayior\'s retreat experience.',
      'work.projects.teamae.title': 'TeamAE',
      'work.projects.teamae.description': 'Launched a professional business consultancy website showcasing Team AE\'s comprehensive services.',
      'work.projects.galaxy.title': 'Galaxy Paints',
      'work.projects.galaxy.description': 'Engineered a modern e-commerce platform with intuitive shopping for Galaxy Paints\' premium products.',
      'work.projects.aes.title': 'AES School of commerce',
      'work.projects.aes.description': 'Developed an educational website platform for AES School of Commerce to showcase their expertise.',
      'work.projects.gamegate.title': 'Gamegate',
      'work.projects.gamegate.description': 'Built a high-performance esports platform with real-time tournaments and streaming capabilities.',
      'work.projects.genchi.title': 'Genchi Global',
      'work.projects.genchi.description': 'Created a corporate website showcasing Genchi Global\'s diverse projects and global reach.',
      'work.projects.mikara.title': 'Mikara Organics',
      'work.projects.mikara.description': 'Launched an e-commerce platform featuring Mikara Organics\' premium organic products.',
      'work.projects.tenderoutes.title': 'Tenderoutes',
      'work.projects.tenderoutes.description': 'Built a travel agency website with comprehensive booking features for Tenderoutes\' global adventures.',
      'work.projects.algharafa.title': 'Al Gharafa',
      'work.projects.algharafa.description': 'Crafted a professional corporate website reflecting Al Gharafa\'s construction expertise and heritage.',
      'work.projects.aboglumbo.title': 'Abo Glumbo',
      'work.projects.aboglumbo.description': 'Developed a smart home services platform connecting customers with trusted professionals.',
      
      // Work Projects - App Development
      'work.projects.handyman.title': 'Handyman',
      'work.projects.handyman.description': 'Developed a comprehensive home services app connecting customers with skilled professionals.',
      'work.projects.mrcars.title': 'Mr Cars',
      'work.projects.mrcars.description': 'Built a car rental platform with advanced booking and fleet management capabilities.',
      'work.projects.saver.title': 'Saver',
      'work.projects.saver.description': 'Created a student-focused savings app promoting financial literacy and smart spending habits.',
      
      // Work Projects - Branding
      'work.projects.financeva.title': 'Financeva',
      'work.projects.financeva.description': 'Designed a comprehensive brand identity for Financeva\'s financial services platform.',
      'work.projects.shetalks.title': 'SheTalks',
      'work.projects.shetalks.description': 'Crafted a distinctive brand identity empowering women\'s voices and community building.',
      'work.projects.teamae.branding.title': 'TeamAE Branding',
      'work.projects.teamae.branding.description': 'Developed a professional brand identity reflecting TeamAE\'s business consultancy expertise.',
      'work.projects.cyberseed.branding.title': 'Cyberseed Branding',
      'work.projects.cyberseed.branding.description': 'Created a modern brand identity for Cyberseed\'s digital transformation services.',
      'work.projects.matrix.title': 'Matrix Microns',
      'work.projects.matrix.description': 'Designed a corporate brand identity for Matrix Microns\' technology solutions.',
      'work.projects.mpbg.title': 'MPB Group',
      'work.projects.mpbg.description': 'Crafted a professional brand identity for MPB Group\'s diverse business portfolio.',
      
      // Work Projects - Social Media
      'work.projects.babaganoush.title': 'Baba Ganoush',
      'work.projects.babaganoush.description': 'Managed comprehensive social media campaigns for Baba Ganoush\'s culinary brand.',
      'work.projects.chefpillai.title': 'Chef Pillai',
      'work.projects.chefpillai.description': 'Developed engaging social media strategies for Chef Pillai\'s restaurant brand.',
      'work.projects.greensdoor.title': 'Greens Door Organics',
      'work.projects.greensdoor.description': 'Created organic-focused social media content for Greens Door Organics.',
      'work.projects.indoarab.title': 'Indo Arab',
      'work.projects.indoarab.description': 'Managed social media presence for Indo Arab\'s cultural exchange platform.',
      'work.projects.urbanbite.title': 'Urban Bite',
      'work.projects.urbanbite.description': 'Developed food-focused social media campaigns for Urban Bite\'s culinary brand.',
      'work.projects.ventes.title': 'Ventes',
      'work.projects.ventes.description': 'Created engaging social media content for Ventes\' retail brand.',
      'work.projects.weonlywheels.title': 'We Only Wheels',
      'work.projects.weonlywheels.description': 'Managed automotive-focused social media for We Only Wheels.',
      'work.projects.aes.digital.title': 'AES School Digital',
      'work.projects.aes.digital.description': 'Developed educational social media strategies for AES School\'s digital presence.',
      'work.projects.dubai.title': 'Dubai Visa Services',
      'work.projects.dubai.description': 'Created travel-focused social media content for Dubai visa services.',
      'work.projects.galaxy.social.title': 'Galaxy Paints Social',
      'work.projects.galaxy.social.description': 'Managed paint industry social media campaigns for Galaxy Paints.',
      
      // Additional missing project translations
      'work.projects.silhouettes.title': 'Silhouettes By Saleena',
      'work.projects.silhouettes.description': 'Crafted a complete brand identity and logo reflecting Silhouettes By Saleena\'s fashion sophistication.',
      'work.projects.biriyani.title': 'The Biriyani & Beyond Co',
      'work.projects.biriyani.description': 'Designed a vibrant brand identity capturing the emotion and tradition of authentic biryani culture.',
      'work.projects.aes.branding.title': 'AES School of Commerce',
      'work.projects.aes.branding.description': 'Designed a visionary brand identity symbolizing AES School of Commerce\'s progress and connectivity.',
      'work.projects.galaxon.title': 'Galaxon Max',
      'work.projects.galaxon.description': 'Developed digital marketing campaigns highlighting Galaxon Max\'s innovative construction solutions.',
      
      // Client Reviews
      'reviews.soumya.name': 'Soumya Chandran',
      'reviews.soumya.role': 'Founder of SheTalks',
      'reviews.soumya.text': 'Brandbik built a safe and empowering platform for SheTalks that truly reflects our vision of inspiring and connecting women.',
      'reviews.soumya.longText': 'Brandbik built a safe and empowering platform for SheTalks that truly reflects our vision of inspiring and connecting women. Their attention to detail and understanding of our community\'s needs made all the difference in creating a space where women can freely express themselves and grow together.',
      
      'reviews.ahmad.name': 'Ahmad Al Munif',
      'reviews.ahmad.role': 'CEO, Abu Glumbo',
      'reviews.ahmad.text': 'Brandbik transformed our idea into a smooth, real-time service app with great design and technical skill.',
      'reviews.ahmad.longText': 'Brandbik transformed our idea into a smooth, real-time service app with great design and technical skill. Their team\'s expertise in both frontend and backend development ensured we got a scalable solution that perfectly matches our business requirements and user expectations.',
      
      'reviews.sahal.name': 'Sahal Muhammed',
      'reviews.sahal.role': 'Founder of Cyberseed',
      'reviews.sahal.text': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals.',
      'reviews.sahal.longText': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals. Their strategic approach to design and development helped us establish a strong online presence, resulting in increased engagement and better conversion rates.',
      
      'reviews.majed.name': 'Majed alkuwayki',
      'reviews.majed.role': 'CEO, Khibra App',
      'reviews.majed.text': 'They built a secure and intuitive legal consultation app, showing deep understanding and high-quality execution.',
      'reviews.majed.longText': 'They built a secure and intuitive legal consultation app, showing deep understanding and high-quality execution. The platform\'s robust security features and user-friendly interface have made it easier for our clients to access legal services while maintaining complete confidentiality.',
      
      'reviews.esraa.name': 'Al Esraa School',
      'reviews.esraa.role': 'Saver App',
      'reviews.esraa.text': 'Brandbik delivered a creative savings app that helps students reduce waste and make smarter choices.',
      'reviews.esraa.longText': 'Brandbik delivered a creative savings app that helps students reduce waste and make smarter choices. Their innovative approach to gamification and user engagement has made financial literacy fun and accessible for our students, leading to positive behavioral changes.',
      
      // Contact Page Translations
      'contact.title': 'Let\'s work together.',
      'contact.subtitle': 'Whether you\'re launching something new or reinventing your brand — we\'d love to hear from you.',
      'contact.form.firstName': 'First Name',
      'contact.form.firstNamePlaceholder': 'First name',
      'contact.form.lastName': 'Last Name',
      'contact.form.lastNamePlaceholder': 'Last name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'Email address',
      'contact.form.mobile': 'Mobile Number',
      'contact.form.mobilePlaceholder': 'Mobile number',
      'contact.form.message': 'Tell us more',
      'contact.form.messagePlaceholder': 'Your message',
      'contact.form.submit': 'Submit',
      'contact.whatsapp.message': 'New Contact Form Submission:\n\nName: {firstName} {lastName}\nEmail: {email}\nMobile: {mobile}\nMessage: {message}',
      
      // Location Section Translations
      'location.title': 'Our Locations',
      'location.india.name': 'India',
      'location.india.address': 'Rajiv Gandhi Bypass, opposite Farsa Restaurant, Karuvambram, Manjeri, Kerala 676121',
      'location.saudi.name': 'Saudi Arabia',
      'location.saudi.address': 'Batha, Riyadh, Saudi Arabia – KSA +966571961404',
      'location.uk.name': 'UK',
      'location.uk.address': 'Coventry, West Midlands County, England, United Kingdom (UK)\n+44 7384021507',
      'location.map.attribution': 'Map data ©2023 Google'
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
      'results.contact': 'اتصل بنا',
      
      // Header Navigation
      'header.about': 'من نحن',
      'header.services': 'خدماتنا',
      'header.works': 'أعمالنا',
      'header.career': 'وظائف',
      'header.contact': 'اتصل بنا',
      'header.getStarted': 'ابدأ الآن',
      'header.connectUs': 'تواصل معنا',
      
      // GetStartedPanel Navigation
      'panel.impact': 'التأثير',
      'panel.testimonials': 'آراء العملاء',
      'panel.clients': 'العملاء',
      'panel.partnership': 'الشراكة',
      'panel.insights': 'الرؤى',
      'panel.getInTouch': 'تواصل معنا',
      
      // Footer Navigation
      'footer.tagline': 'تمكين العلامات التجارية بالتميز الإبداعي عبر المملكة العربية السعودية والإمارات والهند',
      'footer.pages': 'الصفحات',
      'footer.home': 'الرئيسية',
      'footer.aboutUs': 'من نحن',
      'footer.services': 'خدماتنا',
      'footer.works': 'أعمالنا',
      'footer.contactUs': 'اتصل بنا',
      'footer.contactInfo': 'معلومات الاتصال',
      'footer.copyright': '© {year} براندبيك. جميع الحقوق محفوظة.',
      'footer.privacyPolicy': 'سياسة الخصوصية',
      'footer.termsOfService': 'شروط الخدمة',
      'footer.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
      
      // Team Description
      'team.contactUs': 'اتصل بنا',
      
      // About Banner
      'about.banner.badge': 'من نحن',
      'about.banner.title': 'نحن نبني علامات تجارية تتحرك بهدف.',
      'about.banner.subtitle1': 'تتخصص براندبيك في بناء العلامات التجارية المؤثرة والتجارب الرقمية المبتكرة وحلول النمو الاستراتيجية للشركات المتقدمة.',
      'about.banner.subtitle2': 'سواء كنت شركة ناشئة ناشئة أو مؤسسة عالمية راسخة، نصمم قصصًا مقنعة وروابط دائمة تدفع النجاح.',
      'about.banner.gallery.title': 'فريقنا في العمل',
      
      // Team Description
      'team.description.text': 'نحن فريق متعدد التخصصات من الاستراتيجيين والمصممين والمطورين ورواة القصص. ما يجمعنا هو إيمان مشترك',
      
      // About Boxes
      'about.boxes.brands': 'العلامات التجارية التي نعمل معها',
      'about.boxes.projects': 'المشاريع المكتملة',
      'about.boxes.countries': 'البلدان التي نعمل معها',
      'about.boxes.scaled': 'العلامات التجارية التي نمت معنا',
      'about.boxes.revenue': 'الإيرادات المحققة',
      'about.boxes.clients': 'العملاء السعداء',
      
      // Approach Section
      'approach.badge': 'النهج',
      'approach.title': 'ما يميزنا',
      'approach.innovation': 'الابتكار',
      'approach.quality': 'التركيز على الجودة',
      'approach.results': 'التركيز على النتائج',
      'approach.skilled': 'فريق ماهر',
      'approach.customer': 'التركيز على العملاء',
      'approach.agile': 'عملية رشيقة',
      'approach.transparent': 'تواصل شفاف',
      'approach.timely': 'تسليم في الوقت المحدد',
      'approach.technology': 'تقنية متطورة',
      'approach.data': 'قرارات مدعومة بالبيانات',
      'approach.security': 'نهج الأمان أولاً',
      'approach.sustainability': 'الاستدامة',
      
      // Our Team Section
      'team.badge': 'من نحن',
      'team.title': 'عقولنا الإبداعية',
      
      // Client Reviews
      'reviews.badge': 'آراء العملاء',
      'reviews.cta.title': 'دعنا نعمل معاً',
      'reviews.cta.description': 'اكتشف كيف نحول الأفكار إلى تأثير. من تطوير التطبيقات إلى تصميم المواقع وتحسين محركات البحث والتسويق الرقمي، عملنا يتحدث عن نفسه. استكشف أحدث مشاريعنا على وسائل التواصل الاجتماعي وانظر ما يميزنا.',
      'reviews.cta.button': 'تواصل معنا',
      
      // Services in Reviews
      'reviews.services.branding': 'العلامة التجارية',
      'reviews.services.app': 'تطوير التطبيقات',
      'reviews.services.social': 'وسائل التواصل الاجتماعي',
      'reviews.services.website': 'تصميم المواقع',
      'reviews.services.uxui': 'تصميم تجربة المستخدم',
      'reviews.services.marketing': 'التسويق الرقمي',
      
      // Service Main Banner
      'service.main.title': 'تمكين العلامات التجارية بحلول الجيل القادم',
      'service.main.subtitle': 'اكتشف مجموعة كاملة من الخدمات المصممة لرفع مستوى علامتك التجارية ودفع النمو وإنشاء تأثير دائم في العصر الرقمي.',
      'service.main.button': 'ابدأ مشروعك',
      
      // Service Content
      'service.content.text': 'من الاستراتيجية إلى التنفيذ — نساعد الشركات على النمو من خلال الوضوح والإبداع والتصميم.',
      'service.content.highlight.strategy': 'استراتيجية',
      'service.content.highlight.execution': 'تنفيذ',
      'service.content.highlight.clarity': 'وضوح',
      'service.content.highlight.creativity': 'إبداع',
      'service.content.highlight.design': 'تصميم',
      'service.content.highlight.growth': 'نمو',
      'service.content.highlight.businesses': 'شركات',
      'service.content.highlight.impact': 'تأثير',
      
      // Bottom Bar
      'bottom.bar.title': 'دعنا نعمل معاً',
      'bottom.bar.description': 'اكتشف كيف نحول الأفكار إلى تأثير. من تطوير التطبيقات إلى تصميم المواقع وتحسين محركات البحث والتسويق الرقمي، عملنا يتحدث عن نفسه. استكشف أحدث مشاريعنا على وسائل التواصل الاجتماعي وانظر ما يميزنا.',
      'bottom.bar.button': 'تواصل',
      
      // Service Banners
      'service.banner.web.title': 'تطوير المواقع',
      'service.banner.web.subtitle': 'نحن ملتزمون بتقديم حلول ويب استثنائية تحقق النتائج.',
      'service.banner.web.button': 'تحدث معنا',
      
      'service.banner.app.title': 'تطوير التطبيقات',
      'service.banner.app.subtitle': 'نحن ملتزمون بتقديم حلول جوال استثنائية تحقق النتائج.',
      'service.banner.app.button': 'تحدث معنا',
      
      'service.banner.branding.title': 'استراتيجية العلامة التجارية',
      'service.banner.branding.subtitle': 'نحن ملتزمون بتقديم حلول علامة تجارية استثنائية تحقق النتائج.',
      'service.banner.branding.button': 'تحدث معنا',
      
      'service.banner.digital.title': 'التسويق الرقمي',
      'service.banner.digital.subtitle': 'نحن ملتزمون بتقديم حلول تسويق رقمي استثنائية تحقق النتائج.',
      'service.banner.digital.button': 'تحدث معنا',
      
      'service.banner.social.title': 'إدارة وسائل التواصل الاجتماعي',
      'service.banner.social.subtitle': 'نحن ملتزمون بتقديم حلول وسائل التواصل الاجتماعي الاستثنائية التي تحقق النتائج.',
      'service.banner.social.button': 'تحدث معنا',
      
      'service.banner.advertising.title': 'الإعلان الأدائي',
      'service.banner.advertising.subtitle': 'نحن ملتزمون بتقديم حلول إعلانية استثنائية تحقق النتائج.',
      'service.banner.advertising.button': 'تحدث معنا',
      
      // Work Banner
      'work.banner.title': 'عمل يتحدث بصوت أعلى من الكلمات.',
      
      // Work Main
      'work.main.categories.website': 'تطوير المواقع',
      'work.main.categories.app': 'تطوير التطبيقات',
      'work.main.categories.branding': 'العلامة التجارية',
      'work.main.categories.social': 'وسائل التواصل الاجتماعي',
      
      // Work Projects - Website Development
      'work.projects.cyberseed.title': 'سايبرسيد',
      'work.projects.cyberseed.description': 'صممنا موقع استشارات أعمال أنيق مع تجربة مستخدم سلسة لتحول سايبرسيد الرقمي.',
      'work.projects.scitor.title': 'أكاديمية سيتور',
      'work.projects.scitor.description': 'بنينا منصة تعليمية جذابة تدعم دورات التسويق الرقمي والتكنولوجيا في أكاديمية سيتور.',
      'work.projects.zayior.title': 'زايور',
      'work.projects.zayior.description': 'صممنا موقع منتجع فاخر مع صور مذهلة وحجز سلس لتجربة زايور الاستجمامية.',
      'work.projects.teamae.title': 'فريق إي إي',
      'work.projects.teamae.description': 'أطلقنا موقع استشارات أعمال احترافي يعرض خدمات فريق إي إي الشاملة.',
      'work.projects.galaxy.title': 'جالاكسي بينتس',
      'work.projects.galaxy.description': 'صممنا منصة تجارة إلكترونية حديثة مع تسوق بديهي لمنتجات جالاكسي بينتس المميزة.',
      'work.projects.aes.title': 'مدرسة إي إي إس التجارية',
      'work.projects.aes.description': 'طورنا منصة موقع تعليمي لمدرسة إي إي إس التجارية لعرض خبراتهم.',
      'work.projects.gamegate.title': 'جيم جيت',
      'work.projects.gamegate.description': 'بنينا منصة رياضات إلكترونية عالية الأداء مع بطولات فورية وقدرات بث.',
      'work.projects.genchi.title': 'جنشي جلوبال',
      'work.projects.genchi.description': 'أنشأنا موقع شركة يعرض مشاريع جنشي جلوبال المتنوعة والوصول العالمي.',
      'work.projects.mikara.title': 'ميكارا أورجانيكس',
      'work.projects.mikara.description': 'أطلقنا منصة تجارة إلكترونية تعرض منتجات ميكارا أورجانيكس العضوية المميزة.',
      'work.projects.tenderoutes.title': 'تيندر روتس',
      'work.projects.tenderoutes.description': 'بنينا موقع وكالة سفر مع ميزات حجز شاملة لمغامرات تيندر روتس العالمية.',
      'work.projects.algharafa.title': 'الغرفة',
      'work.projects.algharafa.description': 'صممنا موقع شركة احترافي يعكس خبرة الغرفة في البناء والتراث.',
      'work.projects.aboglumbo.title': 'أبو جلومبو',
      'work.projects.aboglumbo.description': 'طورنا منصة خدمات منزل ذكية تربط العملاء بالمحترفين الموثوقين.',
      
      // Work Projects - App Development
      'work.projects.handyman.title': 'هاندي مان',
      'work.projects.handyman.description': 'طورنا تطبيق خدمات منزل شامل يربط العملاء بالمحترفين المهرة.',
      'work.projects.mrcars.title': 'مستر كارز',
      'work.projects.mrcars.description': 'بنينا منصة تأجير سيارات مع ميزات حجز متقدمة وإدارة أسطول.',
      'work.projects.saver.title': 'سيفر',
      'work.projects.saver.description': 'أنشأنا تطبيق توفير يركز على الطلاب ويعزز الثقافة المالية والعادات الذكية للإنفاق.',
      
      // Work Projects - Branding
      'work.projects.financeva.title': 'فاينانسفا',
      'work.projects.financeva.description': 'صممنا هوية علامة تجارية شاملة لمنصة فاينانسفا للخدمات المالية.',
      'work.projects.shetalks.title': 'شي توكس',
      'work.projects.shetalks.description': 'صممنا هوية علامة تجارية مميزة تمكّن أصوات النساء وبناء المجتمع.',
      'work.projects.teamae.branding.title': 'هوية فريق إي إي',
      'work.projects.teamae.branding.description': 'طورنا هوية علامة تجارية احترافية تعكس خبرة فريق إي إي في استشارات الأعمال.',
      'work.projects.cyberseed.branding.title': 'هوية سايبرسيد',
      'work.projects.cyberseed.branding.description': 'أنشأنا هوية علامة تجارية حديثة لخدمات تحول سايبرسيد الرقمي.',
      'work.projects.matrix.title': 'ماتريكس مايكرونز',
      'work.projects.matrix.description': 'صممنا هوية علامة تجارية للشركات لحلول ماتريكس مايكرونز التكنولوجية.',
      'work.projects.mpbg.title': 'مجموعة إم بي بي',
      'work.projects.mpbg.description': 'صممنا هوية علامة تجارية احترافية لمحفظة مجموعة إم بي بي المتنوعة للأعمال.',
      
      // Work Projects - Social Media
      'work.projects.babaganoush.title': 'بابا غنوش',
      'work.projects.babaganoush.description': 'أدرنا حملات وسائل التواصل الاجتماعي الشاملة للعلامة التجارية الطهي بابا غنوش.',
      'work.projects.chefpillai.title': 'شيف بيلاي',
      'work.projects.chefpillai.description': 'طورنا استراتيجيات وسائل التواصل الاجتماعي الجذابة للعلامة التجارية للمطعم شيف بيلاي.',
      'work.projects.greensdoor.title': 'غرينز دور أورجانيكس',
      'work.projects.greensdoor.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي المركّز على العضوية لغرينز دور أورجانيكس.',
      'work.projects.indoarab.title': 'إندو عرب',
      'work.projects.indoarab.description': 'أدرنا وجود وسائل التواصل الاجتماعي لمنصة التبادل الثقافي إندو عرب.',
      'work.projects.urbanbite.title': 'أوربان بايت',
      'work.projects.urbanbite.description': 'طورنا حملات وسائل التواصل الاجتماعي المركّزة على الطعام للعلامة التجارية الطهي أوربان بايت.',
      'work.projects.ventes.title': 'فينتس',
      'work.projects.ventes.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي الجذاب للعلامة التجارية للبيع بالتجزئة فينتس.',
      'work.projects.weonlywheels.title': 'وي أونلي ويلز',
      'work.projects.weonlywheels.description': 'أدرنا وسائل التواصل الاجتماعي المركّزة على السيارات لوي أونلي ويلز.',
      'work.projects.aes.digital.title': 'المدرسة الرقمية إي إي إس',
      'work.projects.aes.digital.description': 'طورنا استراتيجيات وسائل التواصل الاجتماعي التعليمية للوجود الرقمي لمدرسة إي إي إس.',
      'work.projects.dubai.title': 'خدمات تأشيرة دبي',
      'work.projects.dubai.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي المركّز على السفر لخدمات تأشيرة دبي.',
      'work.projects.galaxy.social.title': 'وسائل التواصل الاجتماعي جالاكسي بينتس',
      'work.projects.galaxy.social.description': 'أدرنا حملات وسائل التواصل الاجتماعي لصناعة الطلاء لجالاكسي بينتس.',
      
      // Additional missing project translations
      'work.projects.silhouettes.title': 'سيلويتس باي سالينا',
      'work.projects.silhouettes.description': 'صممنا هوية علامة تجارية كاملة وشعار يعكس أناقة سيلويتس باي سالينا في الأزياء.',
      'work.projects.biriyani.title': 'شركة البيرياني وما بعده',
      'work.projects.biriyani.description': 'صممنا هوية علامة تجارية حيوية تجسد العاطفة والتقاليد لثقافة البيرياني الأصيلة.',
      'work.projects.aes.branding.title': 'مدرسة إي إي إس التجارية',
      'work.projects.aes.branding.description': 'صممنا هوية علامة تجارية رؤيوية تجسد تقدم مدرسة إي إي إس التجارية والاتصال.',
      'work.projects.galaxon.title': 'جالاكسون ماكس',
      'work.projects.galaxon.description': 'طورنا حملات تسويق رقمي تسلط الضوء على حلول جالاكسون ماكس المبتكرة في البناء.',
      
      // Client Reviews
      'reviews.soumya.name': 'سوميا تشاندران',
      'reviews.soumya.role': 'مؤسسة شي توكس',
      'reviews.soumya.text': 'بنى براندبيك منصة آمنة وتمكينية لشي توكس تعكس حقاً رؤيتنا في إلهام وربط النساء.',
      'reviews.soumya.longText': 'بنى براندبيك منصة آمنة وتمكينية لشي توكس تعكس حقاً رؤيتنا في إلهام وربط النساء. اهتمامهم بالتفاصيل وفهم احتياجات مجتمعنا أحدث كل الفرق في إنشاء مساحة يمكن للنساء فيها التعبير عن أنفسهن بحرية والنمو معاً.',
      
      'reviews.ahmad.name': 'أحمد المنيف',
      'reviews.ahmad.role': 'الرئيس التنفيذي، أبو جلومبو',
      'reviews.ahmad.text': 'حول براندبيك فكرتنا إلى تطبيق خدمة سلس وفوري مع تصميم رائع ومهارة تقنية.',
      'reviews.ahmad.longText': 'حول براندبيك فكرتنا إلى تطبيق خدمة سلس وفوري مع تصميم رائع ومهارة تقنية. خبرة فريقهم في تطوير الواجهة الأمامية والخلفية ضمنت لنا حلاً قابلاً للتوسع يتطابق تماماً مع متطلبات أعمالنا وتوقعات المستخدمين.',
      
      'reviews.sahal.name': 'سحال محمد',
      'reviews.sahal.role': 'مؤسس سايبرسيد',
      'reviews.sahal.text': 'أنشأ براندبيك موقعاً حديثاً واحترافياً يتطابق تماماً مع علامتنا التجارية وأهداف أعمالنا.',
      'reviews.sahal.longText': 'أنشأ براندبيك موقعاً حديثاً واحترافياً يتطابق تماماً مع علامتنا التجارية وأهداف أعمالنا. نهجهم الاستراتيجي في التصميم والتطوير ساعدنا في إنشاء وجود قوي على الإنترنت، مما أدى إلى زيادة التفاعل ومعدلات تحويل أفضل.',
      
      'reviews.majed.name': 'ماجد الكويكي',
      'reviews.majed.role': 'الرئيس التنفيذي، تطبيق خبرة',
      'reviews.majed.text': 'بنوا تطبيق استشارات قانونية آمن وبديهي، يظهر فهماً عميقاً وتنفيذاً عالي الجودة.',
      'reviews.majed.longText': 'بنوا تطبيق استشارات قانونية آمن وبديهي، يظهر فهماً عميقاً وتنفيذاً عالي الجودة. ميزات الأمان القوية للمنصة والواجهة سهلة الاستخدام جعلت من السهل على عملائنا الوصول إلى الخدمات القانونية مع الحفاظ على السرية التامة.',
      
      'reviews.esraa.name': 'مدرسة الإسراء',
      'reviews.esraa.role': 'تطبيق سيفر',
      'reviews.esraa.text': 'قدم براندبيك تطبيق توفير إبداعي يساعد الطلاب على تقليل الهدر واتخاذ خيارات أكثر ذكاءً.',
      
      // Contact Page Translations
      'contact.title': 'دعنا نعمل معاً.',
      'contact.subtitle': 'سواء كنت تطلق شيئاً جديداً أو تعيد اختراع علامتك التجارية — نود أن نسمع منك.',
      'contact.form.firstName': 'الاسم الأول',
      'contact.form.firstNamePlaceholder': 'الاسم الأول',
      'contact.form.lastName': 'اسم العائلة',
      'contact.form.lastNamePlaceholder': 'اسم العائلة',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.emailPlaceholder': 'عنوان البريد الإلكتروني',
      'contact.form.mobile': 'رقم الجوال',
      'contact.form.mobilePlaceholder': 'رقم الجوال',
      'contact.form.message': 'أخبرنا المزيد',
      'contact.form.messagePlaceholder': 'رسالتك',
      'contact.form.submit': 'إرسال',
      'contact.whatsapp.message': 'تقديم نموذج اتصال جديد:\n\nالاسم: {firstName} {lastName}\nالبريد الإلكتروني: {email}\nالجوال: {mobile}\nالرسالة: {message}',
      
      // Location Section Translations
      'location.title': 'مواقعنا',
      'location.india.name': 'الهند',
      'location.india.address': 'طريق راجيف غاندي الالتفافي، مقابل مطعم فارسا، كاروفامبرام، مانجيري، كيرالا 676121',
      'location.saudi.name': 'المملكة العربية السعودية',
      'location.saudi.address': 'البطحاء، الرياض، المملكة العربية السعودية – السعودية +966571961404',
      'location.uk.name': 'المملكة المتحدة',
      'location.uk.address': 'كوفنتري، مقاطعة ويست ميدلاندز، إنجلترا، المملكة المتحدة (المملكة المتحدة)\n+44 7384021507',
      'location.map.attribution': 'بيانات الخريطة ©2023 جوجل'
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