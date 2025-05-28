"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState } from "react"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})

export default function RelatedWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample data for the related works grid - using website development projects
  const relatedWorks = [
    {
      id: 1,
      title: "Tenderoutes",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/game-gate.png",
    },
    {
      id: 2,
      title: "Scitor Academy",
      description: "Scitor Academy is a skill-based institute offering courses in digital marketing, development, design, and AI to prepare students for tech careers.",
      image: "/images/scitor-academy.jpg",
    },
    {
      id: 3,
      title: "AES School of commerce",
      description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
      image: "/images/aes-school-of-commerce.jpg",
    },
    {
      id: 4,
      title: "TeamAE",
      description: "Team AE is a business consultancy firm based in Perinthalmanna, Kerala, offering services in taxation, auditing, and strategic planning.",
      image: "/images/team-ae.jpg",
    },
    {
      id: 5,
      title: "Galaxy Paints",
      description: "Galaxy Paints is a premium paint manufacturer based in Pune, India, offering eco-friendly and durable interior and exterior paints",
      image: "/images/galaxey-paints.jpg",
    },
    {
      id: 6,
      title: "Gamegate",
      description: "High-performance esports gaming platform with real-time tournaments and streaming capabilities.",
      image: "/images/game-gate.png",
    },
  ]

  return (
    <section className={`container mx-auto px-5 md:px-16 lg:px-24 py-12 md:py-20 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl lg:text-[48px] font-medium mb-2">Related Works</h2>
        <Link href="/works" className="text-blue-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {relatedWorks.map((work) => (
          <div key={work.id} className="project-card sm:mb-4 border border-gray-200 cursor-pointer">
            <div 
              className="mb-3 md:mb-4 overflow-hidden relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredProjectId(work.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                width={400}
                height={250}
                className="w-full h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-300"
              />
              {hoveredProjectId === work.id && (
                <div 
                  className="absolute pointer-events-none transition-transform duration-100 ease-out"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                    <span className={`text-white text-xs md:text-sm font-light ${poppins.className}`}>View</span>
                  </div>
                </div>
              )}
            </div>
            <div className="px-3 md:px-4 pb-4 md:pb-5">
              <h3 className={`text-base md:text-lg lg:text-[24px] font-medium ${poppins.className}`}>{work.title}</h3>
              <p className={`text-xs md:text-sm text-gray-600 ${poppins.className}`}>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}