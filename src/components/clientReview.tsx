"use client";

import Image from "next/image"
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 1; // Adjust speed as needed

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
  }, [isPaused]);

  // Animate when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

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

  return (
    <div className="w-full primary-background h-full overflow-x-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <span className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium">Client Reviews</span>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* First Review Card */}
          <motion.div 
            className="bg-zinc-900 rounded-3xl p-8 relative custom-corner-border"
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

            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src="/images/Basil-Saman.jpg"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-[18px]">John Smith</h3>
                <p className="text-gray-400 text-sm">Founder of Cyberseed</p>
              </div>
            </div>
            <p className="text-white text-[20px] font-normal">
              Working with Brandbik was transformative. They understood our vision and brought it to life with precision
              and creativity.
            </p>
            <div className="absolute top-8 right-8 text-gray-600">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9032 0L0 12.9032V32H19.0968V12.9032H6.19355L19.0968 0H12.9032ZM33.8064 0L20.9032 12.9032V32H40V12.9032H27.0968L40 0H33.8064Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>
          </motion.div>

          {/* Second Review Card */}
          <motion.div 
            className="bg-zinc-900 rounded-3xl p-8 relative custom-corner-border"
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
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src="/images/IMG_2913.PNG"
                  alt="John Smith"
                  width={48}
                  height={48}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-[18px]">John Smith</h3>
                <p className="text-gray-400 text-sm">Founder of Cyberseed</p>
              </div>
            </div>
            <p className="text-white text-[20px] font-normal">
              Working with Brandbik was transformative. They understood our vision and brought it to life with precision
              and creativity.
            </p>
            <div className="absolute top-8 right-8 text-gray-600">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9032 0L0 12.9032V32H19.0968V12.9032H6.19355L19.0968 0H12.9032ZM33.8064 0L20.9032 12.9032V32H40V12.9032H27.0968L40 0H33.8064Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Marquee Section */}
      <div 
        className="relative overflow-hidden py-8 w-full rotate-3 mt-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-blue-900 z-0"></div>
        <div className="  mx-auto px-4 relative z-10 overflow-hidden">
          <div 
            className="flex w-max"
            ref={sliderRef}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`}
                className="px-8"
              >
                <div className="group cursor-pointer">
                  <h3 className="text-white text-[48px] font-medium text-center group-hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full px-6 py-20 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Lets work with Us</h1>
              <p className="text-white/90 text-base md:text-lg max-w-2xl">
                Our portfolio tells you why we are the best <span className="underline">app development</span> company,
                why we are the best web development company, why we are the best SEO company, why we are the best
                Digital marketing agency. Our social media pages has some of our recent works and you can understand
                what makes us Unique.
              </p>
            </motion.div>
            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-500 text-white hover:bg-teal-900/30 transition-colors"
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
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}