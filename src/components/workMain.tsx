"use client"

import { useState } from "react"
import Image from "next/image"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Optional, for Tailwind or CSS variables
});

// Define project categories
type Category = "website" | "app" | "branding" | "social" | "advertising"

// Define project interface
interface Project {
  id: number
  title: string
  description: string
  image: string
  category: Category
}

export default function WorkMain() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<Category>("website")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample project data for all categories
  const allProjects: Project[] = [
    // Website Development Projects
    ...Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        title: "Gamegate",
        description: "Gamegate is high-performance, feature-rich platform designed for esports gaming.",
        image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
        category: "website" as Category,
      })),

    // App Development Projects
    ...Array(6)
      .fill(null)
      .map((_, i) => ({
        id: 100 + i,
        title: "FitTrack",
        description: "Mobile fitness application with workout tracking and nutrition planning features.",
        image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
        category: "app" as Category,
      })),

    // Branding Projects
    ...Array(4)
      .fill(null)
      .map((_, i) => ({
        id: 200 + i,
        title: "EcoSmart",
        description: "Complete brand identity for sustainable products company including logo and guidelines.",
        image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
        category: "branding" as Category,
      })),

    // Social Media Projects
    ...Array(5)
      .fill(null)
      .map((_, i) => ({
        id: 300 + i,
        title: "TrendWave",
        description: "Social media campaign strategy and content creation for fashion retailer.",
        image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
        category: "social" as Category,
      })),

    // Advertising Projects
    ...Array(3)
      .fill(null)
      .map((_, i) => ({
        id: 400 + i,
        title: "GourmetDelight",
        description: "Digital advertising campaign for premium food delivery service with measurable ROI.",
        image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
        category: "advertising" as Category,
      })),
  ]

  // Filter projects by active category
  const filteredProjects = allProjects.filter((project) => project.category === activeCategory)

  // Category labels and counts
  const categories = [
    { id: "website", label: "Website Development", count: allProjects.filter((p) => p.category === "website").length },
    { id: "app", label: "App Development", count: allProjects.filter((p) => p.category === "app").length },
    { id: "branding", label: "Branding", count: allProjects.filter((p) => p.category === "branding").length },
    { id: "social", label: "Social Media", count: allProjects.filter((p) => p.category === "social").length },
    { id: "advertising", label: "Advertising", count: allProjects.filter((p) => p.category === "advertising").length },
  ]

  return (
    <main className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 ${poppins.className}`}>
      {/* Navigation - Responsive with horizontal scrolling on mobile */}
      <nav className="w-full mb-6 md:mb-12">
        <div className="flex flex-wrap  justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-3 md:px-7 py-2 md:py-3 cursor-pointer rounded-full text-[12px] md:text-sm whitespace-nowrap border border-gray-300 transition-colors ${
                activeCategory === category.id ? "bg-black text-white" : "text-black hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section Title with Count */}
      <div className="mb-8 md:mb-14">
        <h1 className="text-[25px] md:text-[48px] font-medium inline-flex items-start">
          {categories.find((c) => c.id === activeCategory)?.label}
          <span className="text-xs md:text-[14px] rounded-full h-5 md:h-6 w-5 md:w-6 flex items-center text-gray-700 justify-center ml-1 mt-1">
            ({categories.find((c) => c.id === activeCategory)?.count})
          </span>
        </h1>
      </div>

      {/* Projects Grid - Responsive across all devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card sm:mb-4 border border-gray-200 cursor-pointer">
            <div 
              className="mb-3 md:mb-4 overflow-hidden relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-300"
              />
              {hoveredProjectId === project.id && (
                <div 
                  className="absolute pointer-events-none transition-transform duration-100 ease-out"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                <div
  className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20"
>
  <span className={`text-white text-xs md:text-sm font-light ${poppins.className}`}>View</span>
</div>

                </div>
              )}
            </div>
            <div className="px-3 md:px-4 pb-4 md:pb-5">
              <h3 className={`text-base md:text-lg lg:text-[24px] font-medium ${poppins.className}`}>{project.title}</h3>
              <p className={`text-xs md:text-sm text-gray-600 ${poppins.className}`}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
