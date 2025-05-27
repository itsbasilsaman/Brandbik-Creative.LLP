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
type Category = "website" | "app" | "branding" | "social" | "digital-marketing"

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
    {
      id: 1,
      title: "Tenderoutes",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/game-gate.png",
      category: "website",
    },
    {
      id: 2,
      title: "Scitor Academy",
      description: "Scitor Academy is a skill-based institute offering courses in digital marketing, development, design, and AI to prepare students for tech careers.",
      image: "/images/scitor-academy.jpg",
      category: "website",
    },
    {
      id: 3,
      title: "AES School of commerce",
      description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
      image: "/images/aes-school-of-commerce.jpg",
      category: "website",
    },
    {
      id: 4,
      title: "TeamAE",
      description: "Team AE is a business consultancy firm based in Perinthalmanna, Kerala, offering services in taxation, auditing, and strategic planning.",
      image: "/images/team-ae.jpg",
      category: "website",
    },
    {
      id: 5,
      title: "Galaxy Paints",
      description: "Galaxy Paints is a premium paint manufacturer based in Pune, India, offering eco-friendly and durable interior and exterior paints",
      image: "/images/galaxey-paints.jpg",
      category: "website",
    },
    {
      id: 6,
      title: "Zayior",
      description: "Zayior Resort is a luxury nature retreat nestled in the scenic village of Kakkadampoyil, Kerala, near Kozhikode.",
      image: "/images/aes-school-of-commerce.jpg",
      category: "website",
    },
     {
      id: 7,
      title: "Gamegate",
      description: "High-performance esports gaming platform with real-time tournaments and streaming capabilities.",
      image: "/images/game-gate.png",
      category: "website",
    },

    // App Development Projects
    {
      id: 101,
      title: "FitTrack",
      description: "Mobile fitness application with workout tracking and nutrition planning features.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "app",
    },
    {
      id: 102,
      title: "MediCare",
      description: "Healthcare app for appointment scheduling and telemedicine consultations.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "app",
    },
    {
      id: 103,
      title: "TravelBuddy",
      description: "Travel planning app with itinerary management and local recommendations.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "app",
    },

    // Branding Projects
    {
      id: 201,
      title: "EcoSmart",
      description: "Complete brand identity for sustainable products company including logo and guidelines.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "branding",
    },
    {
      id: 202,
      title: "TechFlow",
      description: "Modern tech startup branding with minimalist design and dynamic visual elements.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "branding",
    },
    {
      id: 203,
      title: "UrbanBite",
      description: "Restaurant chain rebranding with contemporary urban aesthetic and food photography.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "branding",
    },

    // Social Media Projects
    {
      id: 301,
      title: "TrendWave",
      description: "Social media campaign strategy and content creation for fashion retailer.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "social",
    },
    {
      id: 302,
      title: "FoodieGram",
      description: "Instagram campaign for gourmet food delivery service with influencer partnerships.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "social",
    },
    {
      id: 303,
      title: "TechTalk",
      description: "LinkedIn content strategy for B2B tech company with thought leadership articles.",
      image: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      category: "social",
    },

    // Advertising Projects
    {
      id: 401,
      title: "AES School of commerce",
      description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
      image: "/images/Digital-Marketing/aes-min.jpg",
      category: "digital-marketing",
    },
    {
      id: 402,
      title: "Chef Pillai",
      description: "Chef Pillai offering traditional Kerala dishes with a modern twist ",
      image: "/images/Digital-Marketing/chef-pillai.jpg",
      category: "digital-marketing",
    },
    {
      id: 403,
      title: "Get Your Dubai Visa",
      description: " Get Your Dubai Visa is a travel service provider specializing in facilitating Dubai visa applications for Indian travelers",
      image: "/images/Digital-Marketing/dubai-min.jpg",
      category: "digital-marketing",
    },
     {
      id: 404,
      title: "Galaxon Max",
      description: "Galaxon Max is a construction solutions company based in Kerala, India, specializing in the exhibition, distribution, marketing, and retail of building materials, paints, varnishes, and adhesives used in construction.",
      image: "/images/Digital-Marketing/galaxy-min.jpg",
      category: "digital-marketing",
    },
    {
      id: 405,
      title: "Green Door Organics",
      description: "Green Door Organics is an organic food company based in Kozhikode, Kerala, committed to promoting healthy living through natural and chemical-free products",
      image: "/images/Digital-Marketing/chef-pillai.jpg",
      category: "digital-marketing",
    },
    {
      id: 406,
      title: "INDOARAB",
      description: "INDOARAB company specializes in the manufacture of perfumes and chemical products.",
      image: "/images/Digital-Marketing/indo-min.jpg",
      category: "digital-marketing",
    },
     {
      id: 407,
      title: "Tenderoutes",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/Digital-Marketing/tenderoutes-min.jpg",
      category: "digital-marketing",
    },
    {
      id: 408,
      title: "Ventes",
      description: "Ventes is a Kerala-based brand specializing in frozen fruit products, including tender coconut pulp.",
      image: "/images/Digital-Marketing/chef-pillai.jpg",
      category: "digital-marketing",
    },
    {
      id: 409,
      title: "We Only Wheels",
      description: "We Only Wheels is a Kerala-based automotive accessories brand specializing in alloy wheels for cars and motorcycles.",
      image: "/images/Digital-Marketing/we-only-wheels.jpg",
      category: "digital-marketing",
    },
      {
      id: 410,
      title: "Baba Ganoush",
      description: "Baba Ganoush is a creamy Middle Eastern dip made from roasted eggplant, tahini, olive oil, lemon juice, and garlic.",
      image: "/images/Digital-Marketing/baba-ganoush.jpg",
      category: "digital-marketing",
    },
  ]

  // Filter projects by active category
  const filteredProjects = allProjects.filter((project) => project.category === activeCategory)

  // Category labels and counts
  const categories = [
    { id: "website", label: "Website Development", count: allProjects.filter((p) => p.category === "website").length },
    { id: "app", label: "App Development", count: allProjects.filter((p) => p.category === "app").length },
    { id: "branding", label: "Branding", count: allProjects.filter((p) => p.category === "branding").length },
    { id: "social", label: "Social Media", count: allProjects.filter((p) => p.category === "social").length },
    { id: "digital-marketing", label: "Digital Marketing", count: allProjects.filter((p) => p.category === "digital-marketing").length },
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
