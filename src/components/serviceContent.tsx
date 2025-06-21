"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useAnimation, motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

// Define types for our animations
type AnimationType = "fade" | "scale" | "slide" | "bounce" | "rotate3d"
type TransitionType = "spring" | "tween" | "bounce"

interface AnimationVariant {
  initial: Record<string, number>
  animate: Record<string, number | number[]>
  exit: Record<string, number>
}

interface Transition {
  type: string
  stiffness?: number
  damping?: number
  duration?: number
  ease?: string
}

interface HighlightSet {
  words: string[]
  color: string
  animation: AnimationType
  transition: TransitionType
}

export default function ServiceContent() {
  const { t, language } = useLanguage();
  const controls = useAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Animation variants for different effects
  const animationVariants: Record<AnimationType, AnimationVariant> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    scale: {
      initial: { scale: 0.8 },
      animate: { scale: 1 },
      exit: { scale: 0.8 }
    },
    slide: {
      initial: { x: -20 },
      animate: { x: 0 },
      exit: { x: 20 }
    },
    bounce: {
      initial: { y: 0 },
      animate: { 
        y: [-10, 0, -5, 0]
      },
      exit: { y: 0 }
    },
    rotate3d: {
      initial: { 
        rotateX: 90,
        rotateY: 0,
        rotateZ: 0,
        opacity: 0
      },
      animate: { 
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 1
      },
      exit: { 
        rotateX: -90,
        rotateY: 0,
        rotateZ: 0,
        opacity: 0
      }
    }
  }

  // Transition types
  const transitions: Record<TransitionType, Transition> = {
    spring: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
    tween: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut"
    },
    bounce: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }

  const highlightedSets: HighlightSet[] = [
    { 
      words: [t('service.content.highlight.strategy'), t('service.content.highlight.execution')], 
      color: "text-teal-400",
      animation: "rotate3d",
      transition: "spring"
    },
    { 
      words: [t('service.content.highlight.clarity'), t('service.content.highlight.creativity')], 
      color: "text-blue-400",
      animation: "rotate3d",
      transition: "tween"
    },
    { 
      words: [t('service.content.highlight.design'), t('service.content.highlight.growth')], 
      color: "text-purple-400",
      animation: "rotate3d",
      transition: "bounce"
    },
    { 
      words: [t('service.content.highlight.businesses'), t('service.content.highlight.impact')], 
      color: "text-emerald-400",
      animation: "rotate3d",
      transition: "spring"
    }
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentHighlightIndex((prev) => (prev + 1) % highlightedSets.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isPaused, highlightedSets.length])

  const renderText = () => {
    const text = t('service.content.text')
    const currentSet = highlightedSets[currentHighlightIndex]
    
    return text.split(' ').map((word, index) => {
      const isHighlighted = currentSet.words.includes(
        word.toLowerCase().replace(/[.,—]/g, '')
      )
      
      return (
        <motion.span
          key={index}
          initial={isHighlighted ? animationVariants[currentSet.animation].initial : {}}
          animate={isHighlighted ? animationVariants[currentSet.animation].animate : {}}
          exit={isHighlighted ? animationVariants[currentSet.animation].exit : {}}
          transition={isHighlighted ? transitions[currentSet.transition] : {}}
          className={`inline-block ${isHighlighted ? currentSet.color : 'text-white'} ${index !== 0 ? (language === 'ar' ? 'mr-1' : 'ml-1') : ''}`}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
          whileHover={isHighlighted ? {
            scale: 1.1,
            rotateX: 10,
            rotateY: 10,
            transition: { duration: 0.2 }
          } : {}}
          onClick={() => {
            if (isHighlighted) {
              setIsPaused(!isPaused)
            }
          }}
        >
          {word}
        </motion.span>
      )
    })
  }

  return (

    <div className={`relative py-16 md:h-[50vh] flex justify-center items-center w-full primary-background px-5 md:px-16 lg:px-32 overflow-hidden ${language === 'ar' ? 'text-right' : ''}`}>
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
      <div className="absolute bottom-0 left-0 right-0 h-32 z-40 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Left side WHITE shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      {/* Right side WHITE shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <div className="relative">
        <h1 
          className="text-white text-[22px] lg:text-[40px] max-w-[900px] text-center leading-relaxed"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {renderText()}
        </h1>
        
        {/* Animation Controls */}
      
      </div>
    </div>
  )
}