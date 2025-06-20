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
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/BRANDING.jpg",
      alt: "Business Person",
    },
    {
      id: 2,
      title: "Developed Comprehensive Brand Identity Solutions",
      category: "Brand Strategy & Identity",
      number: "1",
      type: "text",
    },
    {
      id: 3,
      title: "Spearheaded End-to-End App Development Initiatives",
      category: "Mobile & Web Application Development",
      number: "2",
      alt: "App Developer",
      type: "text",
    },
    {
      id: 4,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/APP.jpg",
      alt: "Business Person",
    },
    {
      id: 5,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/GENCHI.jpg",
      alt: "Business Person",
    },
    {
      id: 6,
      title: "Engineered and Launched Robust Full-Stack Web Platforms",
      category: "Full-Stack Web Development",
      number: "3",
      type: "text",
    },
    {
      id: 7,
      title: "Designed and Executed High-Impact Digital Marketing Campaigns",
      category: "Digital Marketing Solutions",
      number: "4",
      alt: "Gaming Website",
      type: "text",
    },
  ],
  // Second set of projects
  [
    {
      id: 8,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/tenderoutes-min.jpg",
      alt: "Business Person",
    },
    {
      id: 9,
      title: "Delivered Bespoke App Development Services",
      category: "Custom Application Solutions",
      number: "",
      type: "image",
      src: "/images/SOCIAL.jpg",
      alt: "Business Person",
    },
    {
      id: 10,
      title: "Managed Strategic Social Media Campaigns for Brand Growth",
      category: "Social Media Management",
      number: "5",
      alt: "Social Media Manager",
      type: "text",
    },
    {
      id: 11,
      title: "Developed and Launched Targeted Advertising Campaigns",
      category: "Advertising & Promotions",
      number: "6",
      alt: "Advertising Specialist",
      type: "text",
    },
    {
      id: 12,
      title: "",
      category: "",
      number: "",
      type: "image",
      src: "/images/chef-pillai.jpg",
      alt: "Business Person",
    },
    {
      id: 13,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/FINANCEVA.jpg",
      alt: "Business Person",
    },
    {
      id: 2,
      title: "Developed Comprehensive Brand Identity Solutions",
      category: "Brand Strategy & Identity",
      number: "1",
      type: "text",
    },
    {
      id: 3,
      title: "Spearheaded End-to-End App Development Initiatives",
      category: "Mobile & Web Application Development",
      number: "2",
      alt: "App Developer",
      type: "text",
    },
    {
      id: 4,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/WE ON WHEELS-min.jpeg",
      alt: "Business Person",
    },
    {
      id: 5,
      title: " ",
      category: "",
      number: "",
      type: "image",
      src: "/images/CYBERBRANDD.jpg",
      alt: "Business Person",
    },
    {
      id: 6,
      title: "Crafted and Implemented Holistic Branding Strategies",
      category: "Brand Development",
      number: "3",
      type: "text",
    },
  ],
]

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeSet, setActiveSet] = useState(0)
  const animationRef = useRef<number>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [bgColor, setBgColor] = useState("bg-[#262527]")

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 771)
    }

    // Set initial state
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startAutoScroll = () => {
              stopAutoScroll()

              const scrollInterval = isMobile ? 3000 : 2000

              animationRef.current = window.setInterval(() => {
                setActiveSet((prev) => {
                  const nextIndex = direction === "forward" ? prev + 1 : prev - 1

                  if (nextIndex >= projects.length) {
                    setDirection("backward")
                    setBgColor("bg-[#3a393a]") // Change to alternate color
                    return prev - 1 // go backward
                  } else if (nextIndex < 0) {
                    setDirection("forward")
                    setBgColor("bg-[#262527]") // Change back to original color
                    return prev + 1 // start forward again
                  } else {
                    // Toggle background color based on direction
                    setBgColor(direction === "forward" ? "bg-[#2f282f]" : "bg-[#262527]")
                    return nextIndex
                  }
                })
              }, scrollInterval)
            }

            startAutoScroll()
            const upElements = document.querySelectorAll(".animate-up")
            const downElements = document.querySelectorAll(".animate-down")
            upElements.forEach((el) => {
              el.classList.add("animate-floating-up")
            })
            downElements.forEach((el) => {
              el.classList.add("animate-floating-down")
            })
          } else {
            stopAutoScroll()
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      stopAutoScroll()
    }
  }, [isMobile, direction])

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
            <p className=" text-[12px] md:text-[16px]">{project.title}</p>
            <p className="text-[14px] text-gray-400 font-medium">{project.category}</p>
          </div>
        )
      case "image":
        return (
          <Image
            src={project.src || "/placeholder.svg"}
            alt={project.alt}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      className={`lg:h-screen h-auto pb-4 pt-2 lg:pb-0 ${bgColor} text-white px-5 md:pl-0 md:pr-20 transition-colors duration-1000 ease-in-out`}
      ref={sectionRef}
    >
      <div className="container mx-auto h-full">
        {/* Mobile Header - Only visible on small screens */}
        <div className="lg:hidden py-8">
          <h1 className="text-5xl md:text-7xl font-medium">Works</h1>
          <p className="text-lg max-w-[350px] mt-4">Explore our work where creativity made a difference.</p>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 w-fit mt-6 hover:bg-gray-900 transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Column - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-around h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
              <div
                className="absolute top-[-30px] right-[-180px] transform -translate-x-1/2 w-[180px] h-[180px] md:w-[200px] md:h-[220px] transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-50%) rotate(${activeSet * 30}deg)`,
                }}
              >
                <Image src="/images/work-ring.png" alt="Rotating ring" fill className="object-contain" />
              </div>
            </div>
            {/* Abstract image - bottom left, only on desktop */}
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
              <div
                className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `rotate(${activeSet * 30}deg)`,
                }}
              >
                <Image
                  src="/images/shape-blurred.png"
                  alt="Abstract decoration"
                  fill
                  className="object-contain opacity-60"
                />
              </div>
            </div>

            <div className="relative z-10 space-y-4 md:space-y-6 h-screen py-4 flex justify-around flex-col pl-20">
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

          {/* Right Column - Project Grid (Full width on mobile) */}
          <div className="col-span-1 lg:col-span-7 h-[50vh] lg:h-full w-full overflow-hidden relative">
            <div
              className="absolute inset-0 grid grid-cols-2 auto-rows-[1fr] gap-1 border-l border-t border-gray-800 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${activeSet * (isMobile ? 100 : 70)}%)`,
                height: `${projects.length * 100}%`,
              }}
            >
              {projects.flatMap((projectSet, setIndex) =>
                projectSet.map((project, index) => (
                  <div
                    key={`${setIndex}-${project.id}`}
                    className={`border-r border-b border-gray-800 relative h-full
                              ${index % 2 === 0 ? "animate-up" : "animate-down"}
                              ${project.type === "image" ? "p-0" : "p-4"}`}
                  >
                    {renderProject(project)}
                    {project.number && (
                      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-6xl md:text-9xl font-bold opacity-80">
                        {isLargeScreen && project.number}
                      </div>
                    )}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
