"use client";

 
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

type Service = {
  name: string;
  id: string;
};

export default function BottomBar() {
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

 

  

  return (
    <div className="w-full  h-full overflow-x-hidden" ref={containerRef}>
     

      {/* Services Marquee Section */}
      <div 
        className="relative overflow-hidden z-50 py-6 md:py-8 w-full rotate-3 mt-8 md:mt-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0  bg-gradient-to-r from-teal-800 to-blue-900 z-0"></div>
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
      <div className="relative primary-background w-full px-4 sm:px-6 py-12 md:py-20 lg:px-8 overflow-hidden">
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