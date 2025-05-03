/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  // First set of projects (original ones)
  [
    {
      id: 1,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/BRANDING.jpg",
      alt: "Business Person"
    },
    {
      id: 2,
      title: "Helped with the App Development from scratch",
      category: "App Development",
      number: "0",
      type: "text"
    },
    {
      id: 3,
      title: "",
      category: "",
      number: "",
      alt: "Business Person"
    },
    {
      id: 4,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/SOCIAL.jpg",
      alt: "Business Person"
    },
    {
      id: 5,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/CYBERBRANDD.jpg",
      alt: "Business Person"
    },
    {
      id: 6,
      title: "",
      category: "",
      number: "",
    },
    {
      id: 7,
      title: "",
      category: "",
      number: "",
      alt: "Gaming Website"
    }
  ],
  // Second set of projects (you can add more)
  [
    {
      id: 8,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/BRANDING.jpg",
      alt: "Business Person"
    },
    {
      id: 9,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/BRANDING.jpg",
      alt: "Business Person"
    },
    {
      id: 10,
      title: "",
      category: "",
      number: "",
      alt: "Business Person"
    },
    {
      id: 11,
      title: "",
      category: "",
      number: "",
      alt: "Business Person"
    },
    {
      id: 4,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/SOCIAL.jpg",
      alt: "Business Person"
    },
    {
      id: 11,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/SOCIAL.jpg",
      alt: "Business Person"
    },
    {
      id: 14,
      title: "",
      category: "",
      number: "",
      alt: "Gaming Website"
    }
  ]
];

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeSet, setActiveSet] = useState(0)
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation when section is in view
            startAutoScroll()
            
            // Add animation classes when section is in view
            const upElements = document.querySelectorAll(".animate-up")
            const downElements = document.querySelectorAll(".animate-down")

            upElements.forEach((el) => {
              el.classList.add("animate-floating-up")
            })

            downElements.forEach((el) => {
              el.classList.add("animate-floating-down")
            })
          } else {
            // Stop the animation when section is out of view
            stopAutoScroll()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      stopAutoScroll()
    }
  }, [])

  const startAutoScroll = () => {
    stopAutoScroll() // Clear any existing animation
    
    const scrollInterval = 4000 // Change every 4 seconds
    animationRef.current = window.setInterval(() => {
      setActiveSet(prev => (prev + 1) % projects.length)
    }, scrollInterval)
  }

  const stopAutoScroll = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
      animationRef.current = null
    }
  }

  const renderProject = (project: any) => {
    switch (project.type) {
      case "text":
        return (
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm">{project.title}</p>
            <p className="text-xs text-gray-400">{project.category}</p>
          </div>
        )
      case "image":
        return (
          <Image
            src={project.src}
            alt={project.alt}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        )
      case "green-stripes":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-9xl font-bold text-white">{project.number}</span>
            </div>
            <div className="absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute h-full w-4 bg-green-400" style={{ left: `${i * 10}%` }} />
              ))}
            </div>
          </>
        )
      case "blue-stripes":
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-9xl font-bold text-white">{project.number}</span>
            </div>
            <div className="absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute h-full w-4 bg-blue-400" style={{ left: `${i * 10}%` }} />
              ))}
            </div>
          </>
        )
      case "phone-icon":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-5xl md:text-7xl">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )
      case "laptop-icon":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-5xl md:text-7xl">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7H4V6z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#262527] text-white px-5 md:px-20" ref={sectionRef}>
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-around h-full relative overflow-hidden">
  {/* Rotating Image instead of sliding */}
  <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
  <div
    className="absolute top-[-30px] right-[-180px] transform -translate-x-1/2 w-[180px] h-[180px] md:w-[200px] md:h-[220px] transition-transform duration-1000 ease-in-out"
    style={{
      transform: `translateX(-50%) rotate(${activeSet * 30}deg)`
    }}
  >
    <Image
      src="/images/work-ring.png"
      alt="Rotating ring"
      fill
      className="object-contain "
    />
  </div>
</div>


  {/* Content overlay */}
  <div className="relative z-10 space-y-4 md:space-y-6 h-screen py-4 flex justify-around flex-col">
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-5xl md:text-7xl font-medium mt-8 md:mt-16">Works</h1>
      <p className="text-lg max-w-[350px]">Explore our work where creativity made a difference.</p>
    </div>
    <Link
      href="/works"
      className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 md:px-6 md:py-3 w-fit mt-8 md:mt-12 hover:bg-gray-900 transition-colors"
    >
      <span>View All</span>
      <ArrowRight size={16} />
    </Link>
  </div>
</div>

          {/* Right Column - Project Grid */}
          <div className="lg:col-span-7 h-full overflow-hidden relative">
            <div 
              className="absolute inset-0 grid grid-cols-2 auto-rows-[1fr] gap-1 border-l border-t border-gray-800 transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateY(-${activeSet * 70}%)`,
                height: `${projects.length * 100}%`
              }}
            >
              {projects.flatMap((projectSet, setIndex) => (
                projectSet.map((project, index) => (
                  <div 
                    key={`${setIndex}-${project.id}`}
                    className={`border-r border-b border-gray-800 relative h-full
                              ${index % 2 === 0 ? 'animate-up' : 'animate-down'}
                              ${project.type === 'image' || project.type === 'green-stripes' || 
                                project.type === 'phone-icon' || project.type === 'blue-stripes' || 
                                project.type === 'laptop-icon' ? 'p-0' : 'p-4'}`}
                  >
                    {renderProject(project)}
                    {project.number && project.type !== 'green-stripes' && project.type !== 'blue-stripes' && (
                      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-6xl md:text-9xl font-bold opacity-80">
                        {project.number}
                      </div>
                    )}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}