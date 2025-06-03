"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState } from "react"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})


export default function RelatedWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const pathname = usePathname()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample data for different service types
  const serviceWorks = {
    "web-development": [
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
      }
    ],
    "app-development": [
      {
        id: 1,
        title: "Food Delivery App",
        description: "A comprehensive food delivery application with real-time tracking and payment integration.",
        image: "/images/app-development.png",
      },
      {
        id: 2,
        title: "Fitness Tracker",
        description: "Mobile application for tracking workouts, nutrition, and health metrics.",
        image: "/images/app-development.png",
      },
      {
        id: 3,
        title: "E-commerce App",
        description: "Feature-rich mobile shopping application with AR product visualization.",
        image: "/images/app-development.png",
      }
    ],
    "branding": [
      {
        id: 1,
        title: "Silhouettes By Saleena",
        description: "Crafted the brand identity and logo for Silhouettes By Saleena, a modern, elegant fashion label.",
        image: "/images/Branding/sihouettes.png",
        category: "branding",
      },
      {
        id: 2,
        title: "The Biriyani & Beyond Co",
        description: "Crafted a vibrant brand identity capturing the emotion, tradition, and flavor of authentic biryani.",
        image: "/images/Branding/bandb.png",
        category: "branding",
      },
      {
        id: 3,
        title: "Team AE",
        description: "Built a dynamic brand website for Team AE, showcasing innovation in events, education, and entertainment.",
        image: "/images/Branding/team-ae-work.png",
        category: "branding",
      },
      {
        id: 4,
        title: "Matrix Microns",
        description: "Matrix Microns delivers high-quality, sustainably sourced quartz lumps for global industrial applications.",
        image: "/images/Branding/matrix-microns.png",
        category: "branding",
      },
      {
        id: 5,
        title: "Cyberseed",
        description: "We crafted Cyberseed's bold, modern branding to reflect innovation, growth, and digital excellence.",
        image: "/images/Branding/CYBERBRANDD.jpg",
        category: "branding",
      },
      {
        id: 6,
        title: "Financeva",
        description: "Financeva: A logo symbolizing financial growth and guidance with a sleek, navigation-inspired design.",
        image: "/images/Branding/FINANCEVA.jpg",
        category: "branding",
      },
    ],
    "digital-marketing": [
      {
        id: 1,
        title: "AES School of commerce",
        description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
        image: "/images/Digital-Marketing/aes-min.jpg",
        category: "digital-marketing",
      },
      {
        id: 2,
        title: "Chef Pillai",
        description: "Chef Pillai offering traditional Kerala dishes with a modern twist ",
        image: "/images/Digital-Marketing/chef-pillai.jpg",
        category: "digital-marketing",
      },
      {
        id: 3,
        title: "Get Your Dubai Visa",
        description: " Get Your Dubai Visa is a travel service provider specializing in facilitating Dubai visa applications for Indian travelers",
        image: "/images/Digital-Marketing/dubai-min.jpg",
        category: "digital-marketing",
      },
       {
        id: 4,
        title: "Galaxon Max",
        description: "Galaxon Max is a construction solutions company based in Kerala, India, specializing in the exhibition, distribution, marketing, and retail of building materials, paints, varnishes, and adhesives used in construction.",
        image: "/images/Digital-Marketing/galaxy-min.jpg",
        category: "digital-marketing",
      },
      {
        id: 5,
        title: "Green Door Organics",
        description: "Green Door Organics is an organic food company based in Kozhikode, Kerala, committed to promoting healthy living through natural and chemical-free products",
        image: "/images/Digital-Marketing/greensdoor-min.jpg",
        category: "digital-marketing",
      },
      {
        id: 6,
        title: "INDOARAB",
        description: "INDOARAB company specializes in the manufacture of perfumes and chemical products.",
        image: "/images/Digital-Marketing/indo-min.jpg",
        category: "digital-marketing",
      },
    ],
    "social-media": [
      {
        id: 1,
        title: "Fashion Brand",
        description: "Social media management and influencer marketing campaign.",
        image: "/images/social-media.png",
      },
      {
        id: 2,
        title: "Tech Company",
        description: "LinkedIn and Twitter strategy for B2B tech company.",
        image: "/images/social-media.png",
      },
      {
        id: 3,
        title: "Food & Beverage",
        description: "Instagram and TikTok campaign for a restaurant chain.",
        image: "/images/social-media.png",
      }
    ],
    "advertising": [
      {
        id: 1,
        title: "Automotive Brand",
        description: "Multi-channel advertising campaign for a car manufacturer.",
        image: "/images/advertising.png",
      },
      {
        id: 2,
        title: "Retail Chain",
        description: "Holiday season advertising campaign with TV and digital integration.",
        image: "/images/advertising.png",
      },
      {
        id: 3,
        title: "Tech Product",
        description: "Product launch campaign across traditional and digital media.",
        image: "/images/advertising.png",
      }
    ]
  }

  // Get the current service type from the pathname
  const currentService = pathname.split('/').pop() || 'web-development'
  const relatedWorks = serviceWorks[currentService as keyof typeof serviceWorks] || serviceWorks['web-development']

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