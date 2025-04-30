"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
// import StatCounter from "./stat-counter"

export default function AboutSection() {
  const controls = useAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })
  const [highlightedTextIndex, setHighlightedTextIndex] = useState(0)

  const shapeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: shapeRef,
    offset: ["start end", "end start"], // from bottom of screen to top
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

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

  const text =
    `We're Brandbik. A creative studio for visionary brands. We partner with ambitious teams to shape brands, design experiences, and bring ideas to life.`

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

  return (
    <div className="relative min-h-screen w-full primary-background px-8 md:px-16 lg:px-32 overflow-hidden">
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
        style={{ y, scale }}
        className="absolute bottom-[-100px] right-0 z-10 w-full h-[300px] pointer-events-none"
      >
        <Image
          src="/images/abstract5g.png"
          alt="Abstract shape"
          fill
          className="object-contain object-center"
          priority
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col min-h-screen">
        {/* About button */}
        <div className="mb-12">
          <button className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm">About</button>
        </div>

        {/* Main text content */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-medium text-white leading-tight">
            {renderTextWithHighlights()}
          </h1>
        </div>

        {/* Stats section */}
        {/* <div ref={statsRef} className="mt-auto flex flex-wrap justify-start gap-4 sm:gap-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/80 backdrop-blur-sm px-6 py-3 rounded-xl flex flex-col items-center"
          >
            <StatCounter end={1000} suffix="+" className="text-3xl sm:text-4xl font-bold text-white" />
            <span className="text-zinc-400 text-sm">Projects</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-900/80 backdrop-blur-sm px-6 py-3 rounded-xl flex flex-col items-center"
          >
            <StatCounter end={14} suffix="+" className="text-3xl sm:text-4xl font-bold text-white" />
            <span className="text-zinc-400 text-sm">Countries</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-zinc-900/80 backdrop-blur-sm px-6 py-3 rounded-xl flex flex-col items-center"
          >
            <StatCounter end={200} suffix="+" className="text-3xl sm:text-4xl font-bold text-white" />
            <span className="text-zinc-400 text-sm">Clients</span>
          </motion.div>
        </div> */}
      </div>
    </div>
  )
}
