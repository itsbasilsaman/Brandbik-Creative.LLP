"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
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

  // Transformations for the abstract shape
  const shapeY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const shapeScale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

  // Transformations for the stats items with parallax effect
  const leftStatY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const middleStatY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"])
  const rightStatY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  
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
  }, [])

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

      {/* Abstract 3D shape with scroll animation */}
      <motion.div
        ref={shapeRef}
        style={{ y: shapeY, scale: shapeScale }}
        className="absolute bottom-[-200px] right-0 z-10 w-full h-[420px] pointer-events-none"
      >
        <Image
          src="/images/abstract5g.png"
          alt="Abstract shape"
          fill
          className="object-contain object-center"
          priority
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-1 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col min-h-screen">
        {/* About button */}
        <div className="mb-12">
          <button className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm">About</button>
        </div>

        {/* Main text content */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="max-w-4xl">
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[40px] font-medium text-white leading-tight">
              {renderTextWithHighlights()}
            </h1>
          </div>
        </div>

        {/* Stats section with enhanced parallax effect */}
        <div ref={statsRef} className="mt-auto flex flex-wrap items-end justify-center gap-4 sm:gap-8 relative z-30">
          {/* Left item - moves down and back */}
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
              y: leftStatY,
              scale: leftStatScale
            }}
            className={`px-6 py-2 rounded-xl flex items-center gap-2 border border-gray-600 ${onest.className}`}
          >
            <StatCounter end={1000} suffix="+" className="text-3xl sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Projects</span>
          </motion.div>

          {/* Middle item - moves up and forward (more prominent) */}
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
              y: middleStatY,
              scale: middleStatScale
            }}
            className={`px-6 py-2 rounded-xl flex items-center gap-2 border border-gray-600 ${onest.className} mb-40`}
          >
            <StatCounter end={14} suffix="+" className="text-3xl sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Countries</span>
          </motion.div>

          {/* Right item - moves down and back */}
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
              y: rightStatY,
              scale: rightStatScale
            }}
            className={`px-6 py-2 rounded-xl flex items-center gap-2 border border-gray-600 ${onest.className}`}
          >
            <StatCounter end={200} suffix="+" className="text-3xl sm:text-[32px] font-normal text-white" />
            <span className="text-gray-300 text-sm font-extralight text-[20px]">Clients</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}