"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

type Service = {
  name: string;
  id: string;
};

export default function ClientReviews() {
  const services: Service[] = [
    { name: "Branding", id: "branding" },
    { name: "App Development", id: "app-dev" },
    { name: "Social Media", id: "social" },
    { name: "Website Design", id: "website" },
    { name: "UX/UI Design", id: "ux-ui" },
    { name: "Digital Marketing", id: "marketing" },
  ];

  // Duplicate the services for seamless looping
  const duplicatedServices = [...services, ...services];
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Animation controls for review cards
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  // Arrow animation state
  const [isHovered, setIsHovered] = useState(false);

  // Responsive adjustments
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let position = 0;
    // Adjust speed based on screen size
    const speed = windowWidth < 768 ? 0.5 : 1;

    const animate = () => {
      if (!isPaused) {
        position -= speed;
        
        // Reset position when we've scrolled one full set of services
        if (position <= -slider.scrollWidth / 2) {
          position = 0;
        }
        
        slider.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, windowWidth]);

  // Animate when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const reviews = [
    {
      name: "Soumya Chandran",
      role: "Founder of SheTalks",
      image: "/images/Basil-Saman.jpg",
      text: "Brandbik truly captured the essence of what SheTalks stands for—empowering women and building a community of inspiration and support. The app they developed is more than just a digital platform; it's a safe, nurturing space where women can connect, share, and grow together. Their dedication to our vision has made all the difference."
    },
    {
      name: "Hamad A.",
      role: "CEO, Abu Glumbo",
      image: "/images/IMG_2913.PNG",
      text: "Brandbik turned our idea for an on-demand services app into a seamless, user-friendly platform that connects customers with the help they need in real time. Their team's creativity, technical expertise, and commitment to excellence made the process smooth and inspiring."
    },
    {
      name: "Sahal Muhammed",
      role: "Founder of Cyberseed",
      image: "/images/Basil-Saman.jpg",
      text: "Working with Brandbik on our new website was a game-changer. They perfectly captured our brand's identity and designed a sleek, modern site that reflects our commitment to excellence in business consultancy. Their professionalism, creativity, and strategic guidance made the entire process effortless."
    },
    {
      name: "Sarah N.",
      role: "CEO, LegalEase App",
      image: "/images/IMG_2913.PNG",
      text: "Brandbik's team brought our vision for a legal consultation app to life with exceptional skill and creativity. They developed a secure, intuitive platform that makes accessing legal advice easier than ever. Their commitment to quality and understanding of the legal industry's needs truly set them apart."
    },
    {
      name: "Fatima A",
      role: "ALESRAA School",
      image: "/images/Basil-Saman.jpg",
      text: "Brandbik's team delivered an outstanding savings app that's transforming how our students manage food waste and make responsible choices. Their creativity, technical skills, and collaborative approach made the process smooth and inspiring."
    }
  ];

  // Auto-scroll animation
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    let currentPosition = 0;

    const scroll = () => {
      currentPosition += 0.5; // Adjust speed here
      if (currentPosition >= scrollWidth / 2) {
        currentPosition = 0;
      }
      setScrollPosition(currentPosition);
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full primary-background h-full overflow-x-hidden" ref={containerRef}>
      <div className=" py-12 md:py-20 ">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <span className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium max-w-7xl   mx-24  sm:px-6 lg:px-8">Client Reviews</span>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-6"
            style={{
              x: -scrollPosition,
              width: 'fit-content'
            }}
          >
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                className="bg-zinc-900 rounded-2xl md:rounded-3xl p-6 md:p-8 relative custom-corner-border min-w-[380px] md:w-[700px]"
                variants={itemVariants}
              >
                <svg
                  className="absolute top-0 left-0 z-10"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1,22 A21,21 0 0 1 22,1"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="flex items-center mb-4 md:mb-6">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                    <div className="w-full h-full rounded-full bg-teal-600 flex items-center justify-center text-white text-lg font-semibold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base md:text-[18px]">{review.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{review.role}</p>
                  </div>
                </div>
                <p className="text-white text-base md:text-[20px] font-normal">
                  {review.text}
                </p>
                <div className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-600">
                  <svg width="30" height="24" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-8">
                    <path
                      d="M12.9032 0L0 12.9032V32H19.0968V12.9032H6.19355L19.0968 0H12.9032ZM33.8064 0L20.9032 12.9032V32H40V12.9032H27.0968L40 0H33.8064Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Marquee Section */}
      <div 
        className="relative overflow-hidden py-6 md:py-8 w-full rotate-3 mt-8 md:mt-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-blue-900 z-0"></div>
        <div className="mx-auto px-4 relative z-10 overflow-hidden">
          <div 
            className="flex w-max"
            ref={sliderRef}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`}
                className="px-4 sm:px-6 md:px-8"
              >
                <div className="group cursor-pointer">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-[48px] font-medium text-center group-hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full px-4 sm:px-6 py-12 md:py-20 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Lets work with Us
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl">
                Our portfolio tells you why we are the best <span className="underline">app development</span> company,
                why we are the best web development company, why we are the best SEO company, why we are the best
                Digital marketing agency. Our social media pages has some of our recent works and you can understand
                what makes us Unique.
              </p>
            </motion.div>
            <motion.div 
              className="flex md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-teal-500 text-white hover:bg-teal-900/30 transition-colors w-full md:w-auto justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Connect 
                <motion.span
                  animate={{
                    x: isHovered ? [0, 4, 0] : 0
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}