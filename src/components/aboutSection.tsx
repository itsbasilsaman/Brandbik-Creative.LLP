"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

import Image from "next/image"
import StatCounter from "./stat-counter"
import { Onest } from 'next/font/google';

const onest = Onest({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function AboutSection() {
  const controls = useAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })
  const [highlightedTextIndex, setHighlightedTextIndex] = useState(0)

  const shapeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: shapeRef,
    offset: ["start end", "end start"],
  })

  const isMobile = useMediaQuery({ maxWidth: 640 })
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 })

  const shapeSizes = isMobile
    ? { width: "560px", height: "560px", scale: 1.2 }
    : isTablet
    ? { width: "500px", height: "500px", scale: 1.3 }
    : { width: "650px", height: "650px", scale: 1.5 }

  const shapeTargetSizes = isMobile
    ? { width: "540px", height: "540px", scale: 1.1, y: "28%" }
    : isTablet
    ? { width: "480px", height: "480px", scale: 1.2, y: "25%" }
    : { width: "630px", height: "630px", scale: 1.3, y: "32%" }

  const leftStatY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const middleStatY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"])
  const rightStatY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  
  const leftStatScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const middleStatScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const rightStatScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const highlightedPhrases = [
    "We're Brandbik",
    "A creative studio",
    "visionary brands",
    "We partner with",
    "ambitious teams",
    "shape brands",
    "design experiences",
    "bring ideas to life",
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedTextIndex((prev) => (prev + 1) % highlightedPhrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [highlightedPhrases.length])

  const renderTextWithHighlights = () => {
    const currentHighlight = highlightedPhrases[highlightedTextIndex]
    const parts = []
    let remainingText = text

    while (remainingText.length > 0) {
      const highlightIndex = remainingText.indexOf(currentHighlight)

      if (highlightIndex >= 0) {
        if (highlightIndex > 0) {
          parts.push({
            text: remainingText.substring(0, highlightIndex),
            highlight: false
          })
        }

        parts.push({
          text: remainingText.substring(highlightIndex, highlightIndex + currentHighlight.length),
          highlight: true
        })

        remainingText = remainingText.substring(highlightIndex + currentHighlight.length)
      } else {
        parts.push({
          text: remainingText,
          highlight: false
        })
        break
      }
    }

    return parts.map((part, index) => {
      if (part.highlight) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gradient-text"
          >
            {part.text}
          </motion.span>
        )
      }
      return <span key={index}>{part.text}</span>
    })
  }

  const text = `We're Brandbik. A creative studio for visionary brands. We partner with ambitious teams to shape brands, design experiences, and bring ideas to life.`

  return (
    <div className="relative min-h-screen w-full primary-background px-5 md:px-16 lg:px-32 overflow-hidden">
      {/* Background diagonal stripes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[100px] bg-zinc-900"
            style={{
              left: `${i * 100}px`,
              transform: "skew(-20deg)",
              opacity: i % 2 === 0 ? 0.5 : 0.3,
            }}
          />
        ))}
      </div>

   {/* ===== SHADOW EFFECTS ===== */}
{/* Top black shadow */}
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10"></div>

{/* Bottom black shadow */}
<div className="absolute bottom-0 left-0 right-0 h-32 z-40 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

{/* Left side WHITE shadow */}
<div className="absolute left-0 top-0 bottom-0 w-32 z-10">
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
</div>

{/* Right side WHITE shadow */}
<div className="absolute right-0 top-0 bottom-0 w-32 z-10">
  <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
</div>


      {/* Abstract 3D shape */}
      <motion.div
        ref={shapeRef}
        initial={{
          scale: shapeSizes.scale,
          height: shapeSizes.height,
          width: shapeSizes.width,
          y: shapeTargetSizes.y,
          opacity: 0.8,
        }}
        animate={
          isInView
            ? {
                scale: shapeTargetSizes.scale,
                height: shapeTargetSizes.height,
                width: shapeTargetSizes.width,
                y: shapeTargetSizes.y,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-[0px] left-1/2 -translate-x-1/2 z-20 w-full pointer-events-none origin-bottom"
        style={{ overflow: "hidden" }}
      >
        {/* Main shape */}
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/about-shape.png"
            alt="Abstract shape"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>
        
        {/* Duplicate shapes */}
        <motion.div
          initial={{ opacity: 0.6, scale: 1.3, y: "20%" }}
          animate={isInView ? {
            opacity: 0,
            scale: 0.9,
            y: "-10%",
            transition: { duration: 1, delay: 0.2 }
          } : {}}
          className="absolute inset-0"
        >
          <Image
            src="/images/about-shape.png"
            alt="Abstract shape duplicate"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.4, scale: 1.5, y: "30%" }}
          animate={isInView ? {
            opacity: 0,
            scale: 0.8,
            y: "-20%",
            transition: { duration: 1, delay: 0.3 }
          } : {}}
          className="absolute inset-0"
        >
          <Image
            src="/images/about-shape.png"
            alt="Abstract shape duplicate"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-30 container mx-auto px-1 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col min-h-screen">
        {/* About button */}
        <div className="mb-12">
          <button className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm">About</button>
        </div>

        {/* Main text content */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="max-w-4xl">
            <h1 className="text-[28px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-medium text-white leading-tight">
              {renderTextWithHighlights()}
            </h1>
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pb-8 sm:pb-0">
          {/* Left item */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              backgroundColor: 'rgba(70, 70, 70, 0.441)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              y: isMobile ? 0 : leftStatY,
              scale: isMobile ? 1 : leftStatScale
            }}
            className={`w-full md:h-[60px] h-[50px] sm:w-auto lg:px-5 px-3 py-1 rounded-xl flex items-center justify-center gap-2 border border-gray-600 ${onest.className}`}
          >
            <StatCounter end={1000} suffix="+" className="text-[22px] sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Projects</span>
          </motion.div>

          {/* Middle item */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              backgroundColor: 'rgba(70, 70, 70, 0.441)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              y: isMobile ? 0 : middleStatY,
              scale: isMobile ? 1 : middleStatScale
            }}
            className={`w-full sm:w-auto lg:px-5 md:h-[60px] h-[50px] px-10 md:px-3 md:py-1 py-2 rounded-xl flex items-center justify-center gap-2 border border-gray-600 ${onest.className} sm:mb-0 lg:mb-32`}
          >
            <StatCounter end={14} suffix="+" className="text-[22px] sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Countries</span>
          </motion.div>

          {/* Right item */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              backgroundColor: 'rgba(70, 70, 70, 0.441)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              y: isMobile ? 0 : rightStatY,
              scale: isMobile ? 1 : rightStatScale
            }}
            className={`w-full sm:w-auto lg:px-5 md:h-[60px] h-[50px] px-3 py-1 rounded-xl flex items-center justify-center gap-2 border border-gray-600 ${onest.className}`}
          >
            <StatCounter end={200} suffix="+" className="text-[22px] sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Clients</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}