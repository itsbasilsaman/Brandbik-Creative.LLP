"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/contexts/LanguageContext"

// Define project categories
type Category = "website" | "app" | "branding" | "social" 

// Define project interface
interface Project {
  id: number
  title: string 
  description: string
  image: string
  category: Category
}

export default function WorkMain() {
  const router = useRouter();
  const { t, language } = useLanguage();
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<Category>("website")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.work-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Add useEffect to handle initial category from URL and history state
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('category') as Category;
    
    // Check URL parameters first
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Store in history state
      window.history.replaceState({ category: categoryParam }, '');
    } else {
      // If no URL param, check history state
      const historyState = window.history.state;
      if (historyState?.category) {
        setActiveCategory(historyState.category);
      }
    }
  }, []); // Remove categories dependency since it's not used in the effect

  const handleCategoryChange = (category: Category) => {
    setIsLoading(true)
    setActiveCategory(category);
    // Update history state when category changes
    window.history.replaceState({ category }, '');
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleProjectClick = (projectTitle: string) => {
    // Map project titles to their corresponding folder names
    const routeMap: { [key: string]: string } = {
      "The Biriyani & Beyond Co": "biriyani-and-beyond",
      // Add other mappings as needed
    };

    const folderName = routeMap[projectTitle] || projectTitle.toLowerCase().replace(/\s+/g, '-');
    const route = `/works/${folderName}?category=${activeCategory}`;
    router.push(route);
  };

  // Sample project data for all categories
  const allProjects: Project[] = [
    // Website Development Projects
    {
      id: 1,
      title: "Cyberseed",
      description: "Cyberseed is a business consultancy firm offering tailored solutions to help companies overcome challenges and achieve sustainable growth.",
      image: "/images/Web-development/cyberceed-background.jpg",
      category: "website",
    },
    {
      id: 2,
      title: "Scitor Academy",
      description: "Scitor Academy is a skill-based institute offering courses in digital marketing, development, design, and AI to prepare students for tech careers.",
      image: "/images/Web-development/scitor-background.jpg",
      category: "website",
    },
    {
      id: 3,
      title: "Zayior",
      description: "Zayior Resort is a luxury nature retreat nestled in the scenic village of Kakkadampoyil, Kerala, near Kozhikode.",
      image: "/images/Web-development/zayior-background.jpg",
      category: "website",
    },
    {
      id: 4,
      title: "TeamAE",
      description: "Team AE is a business consultancy firm based in Perinthalmanna, Kerala, offering services in taxation, auditing, and strategic planning.",
      image: "/images/Web-development/teamae-bg.jpg",
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
      title: "AES School of commerce",
      description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
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
    {
      id: 8,
      title: "Galaxy Paints",
      description: "Galaxy Paints is a premium paint manufacturer based in Pune, India, offering eco-friendly and durable interior and exterior paints",
      image: "/images/Web-development/GENCHI.jpg",
      category: "website",
    },
    {
      id: 9,
      title: "Zayior",
      description: "Zayior Resort is a luxury nature retreat nestled in the scenic village of Kakkadampoyil, Kerala, near Kozhikode.",
      image: "/images/Web-development/jn-.jpg",
      category: "website",
    },
     {
      id: 10,
      title: "Mikara Organics",
      description: "High-performance esports gaming platform with real-time tournaments and streaming capabilities.",
      image: "/images/Web-development/MIKARA-.jpg",
      category: "website",
    },
    {
      id: 11,
      title: "Tenderoutes",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/Web-development/tenderoutes.jpg",
      category: "website",
    },
    {
      id: 12,
      title: "Al Gharafa",
      description: "High-performance esports gaming platform with real-time tournaments and streaming capabilities.",
      image: "/images/Web-development/al-gharafa.jpg",
      category: "website",
    },
    {
      id: 13,
      title: "Abo Glumbo",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/Web-development/abu-glumbo-banner.jpg",
      category: "website",
    },


    // App Development Projects
    {
      id: 1,
      title: "Abo Glumbo  ",
      description: "Connect with trusted professionals for home repairs, installations, and maintenance—all in one easy-to-use app.",
      image: "/images/app-development/abo-glumbo-banner.jpg",
      category: "app",
    },
    {
      id: 2,
      title: "Handyman",
      description: "Trusted Electrical & Plumbing Services Fast, safe support from certified pros across Saudi Arabia. Easy booking through our simple app.",
      image: "/images/app-development/handyman-banner.jpg",
      category: "app",
    },
    {
      id: 3,
      title: "Mr Cars",
      description: "A comprehensive car service app designed to simplify vehicle care across Saudi Arabia",
      image: "/images/app-development/mr-cars-banner.jpg",
      category: "app",
    },
    {
      id: 4,
      title: "Saver",
      description: "Smart food-saving app designed to reduce waste and promote sustainable living.",
      image: "/images/app-development/saver-banner.jpg",
      category: "app",
    },
    {
      id: 5,
      title: "She Talks",
      description: "A space for women to connect, share stories, and access expert advice on life, career, and wellness—all in one place.",
      image: "/images/app-development/she-talks.jpg",
      category: "app",
    },
   

    // Branding Projects
    {
      id: 201,
      title: "Silhouettes By Saleena",
      description: "Crafted the brand identity and logo for Silhouettes By Saleena, a modern, elegant fashion label.",
      image: "/images/Branding/sihouettes.png",
      category: "branding",
    },
    {
      id: 202,
      title: "The Biriyani & Beyond Co",
      description: "Crafted a vibrant brand identity capturing the emotion, tradition, and flavor of authentic biryani.",
      image: "/images/Branding/bandb.png",
      category: "branding",
    },
    {
      id: 203,
      title: "Team AE",
      description: "Built a dynamic brand website for Team AE, showcasing innovation in events, education, and entertainment.",
      image: "/images/Branding/team-ae-work.png",
      category: "branding",
    },
    {
      id: 204,
      title: "Matrix Microns",
      description: "Matrix Microns delivers high-quality, sustainably sourced quartz lumps for global industrial applications.",
      image: "/images/Branding/matrix-microns.png",
      category: "branding",
    },
    {
      id: 205,
      title: "Cyberseed",
      description: "We crafted Cyberseed's bold, modern branding to reflect innovation, growth, and digital excellence.",
      image: "/images/Branding/CYBERBRANDD.jpg",
      category: "branding",
    },
    {
      id: 206,
      title: "Financeva",
      description: "Financeva: A logo symbolizing financial growth and guidance with a sleek, navigation-inspired design.",
      image: "/images/Branding/FINANCEVA.jpg",
      category: "branding",
    },
    {
      id: 207,
      title: "IndoArab",
      description: "We crafted IndoArab's bold, elegant branding to reflect its luxurious fusion of Indian and Arab aromas.",
      image: "/images/Branding/INDO.jpg",
      category: "branding",
    },
    {
      id: 208,
      title: "MPB Group",
      description: "We developed MPB Group's branding to unify its diverse ventures in quarry, petroleum, and more.",
      image: "/images/Branding/MPB.jpg",
      category: "branding",
    },
    {
      id: 209,
      title: "SheTalks",
      description: "We crafted the bold, empowering brand identity for SheTalks – celebrating women's voices worldwide.",
      image: "/images/Branding/SHETALKS.jpg",
      category: "branding",
    },
    {
      id: 210,
      title: "AES School of Commerce",
      description: "Crafted a visionary brand identity for AES School of Commerce, symbolizing progress, energy, and connectivity.",
      image: "/images/Branding/aes-school.png",
      category: "branding",
    },

    

    // Advertising Projects
    {
      id: 401,
      title: "AES School of commerce",
      description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
      image: "/images/Digital-Marketing/aes-min.jpg",
      category: "social",
    },
    {
      id: 402,
      title: "Chef Pillai",
      description: "Chef Pillai offering traditional Kerala dishes with a modern twist ",
      image: "/images/Digital-Marketing/chef-pillai.jpg",
      category: "social",
    },
    {
      id: 403,
      title: "Get Your Dubai Visa",
      description: " Get Your Dubai Visa is a travel service provider specializing in facilitating Dubai visa applications for Indian travelers",
      image: "/images/Digital-Marketing/dubai-min.jpg",
      category: "social",
    },
     {
      id: 404,
      title: "Galaxon Max",
      description: "Galaxon Max is a construction solutions company based in Kerala, India, specializing in the exhibition, distribution, marketing, and retail of building materials, paints, varnishes, and adhesives used in construction.",
      image: "/images/Digital-Marketing/galaxy-min.jpg",
      category: "social",
    },
    {
      id: 405,
      title: "Green Door Organics",
      description: "Green Door Organics is an organic food company based in Kozhikode, Kerala, committed to promoting healthy living through natural and chemical-free products",
      image: "/images/Digital-Marketing/greensdoor-min.jpg",
      category: "social",
    },
    {
      id: 406,
      title: "INDOARAB",
      description: "INDOARAB company specializes in the manufacture of perfumes and chemical products.",
      image: "/images/Digital-Marketing/indo-min.jpg",
      category: "social",
    },
     {
      id: 407,
      title: "Tenderoutes",
      description: "Tenderoutes is a Kerala-based travel agency specializing in personalized travel experiences across India and international destinations.",
      image: "/images/Digital-Marketing/tenderoutes-min.jpg",
      category: "social",
    },
    {
      id: 408,
      title: "Ventes",
      description: "Ventes is a Kerala-based brand specializing in frozen fruit products, including tender coconut pulp.",
      image: "/images/Digital-Marketing/ventes-min.jpg",
      category: "social",
    },
    {
      id: 409,
      title: "We Only Wheels",
      description: "We Only Wheels is a Kerala-based automotive accessories brand specializing in alloy wheels for cars and motorcycles.",
      image: "/images/Digital-Marketing/we-only-wheels.jpg",
      category: "social",
    },
      {
      id: 410,
      title: "Baba Ganoush",
      description: "Baba Ganoush is a creamy Middle Eastern dip made from roasted eggplant, tahini, olive oil, lemon juice, and garlic.",
      image: "/images/Digital-Marketing/baba-ganoush.jpg",
      category: "social",
    },
  ]

  // Filter projects by active category
  const filteredProjects = allProjects.filter((project) => project.category === activeCategory)
  
  // Get current projects (all projects in the category)
  const currentProjects = filteredProjects

  // Category labels and counts
  const categories = [
    { id: "website", label: t('works.categories.website'), count: allProjects.filter((p) => p.category === "website").length },
    { id: "app", label: t('works.categories.app'), count: allProjects.filter((p) => p.category === "app").length },
    { id: "branding", label: t('works.categories.branding'), count: allProjects.filter((p) => p.category === "branding").length },
    { id: "social", label: t('works.categories.social'), count: allProjects.filter((p) => p.category === "social").length },
  ]

  return (
    <main className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 font-poppins work-content ${language === 'ar' ? 'text-right' : ''}`}>
      {/* Navigation - Responsive with horizontal scrolling on mobile */}
      <nav className="w-full mb-6 md:mb-12">
        <div className="flex flex-wrap  justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id as Category)}
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

      {/* Projects Grid - Strict 3x3 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {isLoading ? (
          // Loading skeleton - 9 items for 3x3 grid
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-[200px] md:h-[250px] mb-4"></div>
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          ))
        ) : (
          currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card sm:mb-4 border border-gray-200 cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
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
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={60}
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
                    <div className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                      <span className={`text-white text-xs md:text-sm font-light`}>View</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-3 md:px-4 pb-4 md:pb-5">
                <h3 className={`text-base md:text-lg lg:text-[24px] font-medium`}>{project.title}</h3>
                <p className={`text-xs md:text-sm text-gray-600`}>{project.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
