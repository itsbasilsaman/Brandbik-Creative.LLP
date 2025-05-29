"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

import { Poppins } from "next/font/google"
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500", // Medium
})

// Add keyframes animation
const cubeAnimation = `
@keyframes slideInCube {
  0% {
    transform: translate(100%, 100%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
`

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.z += delta * 0.05
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.4, 48, 12, 3, 4]} />
      <MeshTransmissionMaterial
        backside
        samples={2}
        resolution={128}
        transmission={0.9}
        roughness={0.2}
        thickness={1.2}
        ior={1.4}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.3}
        temporalDistortion={0.1}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
        attenuationDistance={0.3}
        attenuationColor="#ffffff"
        color="#ffffff"
        metalness={0.6}
        reflectivity={0.6}
      />
    </mesh>
  )
}

export default function ServiceMain() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    banner.style.animation = "slideBackground 20s linear infinite"

    return () => {
      if (banner) {
        banner.style.animation = ""
      }
    }
  }, [])

  // Handle WebGL context loss with memory management
  useEffect(() => {
    if (!renderer) return

    const handleContextLost = (event: Event) => {
      event.preventDefault()
      console.log('WebGL context lost. Attempting to recover...')
      
      // Dispose of the current renderer
      if (renderer) {
        renderer.dispose()
      }
      setRenderer(null)

      // Attempt to recreate the renderer
      setTimeout(() => {
        const canvas = document.querySelector('canvas')
        if (canvas) {
          try {
            const newRenderer = new THREE.WebGLRenderer({
              canvas,
              antialias: false,
              alpha: true,
              powerPreference: "low-power",
              precision: "lowp",
              stencil: false,
              depth: true,
              failIfMajorPerformanceCaveat: false
            })
            newRenderer.setPixelRatio(0.5)
            setRenderer(newRenderer)
          } catch (error) {
            console.error("Failed to create new renderer:", error)
          }
        }
      }, 1000)
    }

    const handleContextRestored = () => {
      console.log('WebGL context restored')
      if (renderer) {
        renderer.setSize(renderer.domElement.width, renderer.domElement.height)
      }
    }

    const canvas = renderer.domElement
    canvas.addEventListener('webglcontextlost', handleContextLost)
    canvas.addEventListener('webglcontextrestored', handleContextRestored)

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      canvas.removeEventListener('webglcontextrestored', handleContextRestored)
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [renderer])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[400px] flex flex-col justify-center sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden md:px-16 lg:px-24 pt-16"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Two copies of the background for seamless looping */}
        <div
          ref={bannerRef}
          className="absolute inset-0 w-[200%] h-full flex"
          style={{
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url('/images/service-banner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url('/images/service-banner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      {/* 3D Rotating Shape decoration */}
      <style jsx global>
        {cubeAnimation}
      </style>
      {isClient && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-[-30px] right-[-40px] sm:bottom-8 sm:right-8 md:bottom-10 md:right-16 lg:bottom-[-60px] lg:right-[-60px] w-48 h-48 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[380px] lg:h-[380px] z-10"
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "low-power",
            preserveDrawingBuffer: true,
            precision: "lowp",
            stencil: false,
            depth: true,
            failIfMajorPerformanceCaveat: false
          }}
          dpr={[0.5, 0.5]}
          frameloop="demand"
          onCreated={({ gl }) => {
            gl.setPixelRatio(0.5)
            setRenderer(gl)
          }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#ffffff" />

          <RotatingShape />

          <Environment preset="studio" />
        </Canvas>
      </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 ${poppins.className}`}
          >
            Our Services
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-5 ">
            Services built to move brands forward.
          </p>

          <button className="flex items-center bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-colors duration-200 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base">
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
