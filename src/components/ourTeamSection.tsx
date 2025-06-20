"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

// Custom CSS to hide scrollbar but keep functionality
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

export default function OurTeamSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Fadhil Muhammed",
      role: "Brand Consultant",
      image: "/Photo/fadhi.png",
    },
    {
      id: 2,
      name: "Althaf Shareef",
      role: "Co-Founder",
      image: "/Photo/althh.jpg",
    },
    {
      id: 3,
      name: "Nasih Ameen",
      role: "Senior Flutter Developer",
      image: "/Photo/nasiii.jpg",
    },
    {
      id: 4,
      name: "Muhammed Swalih",
      role: "Senior Graphic Designer",
      image: "/Photo/swalih.jpg",

    },
    {
      id: 5,
      name: "Basil Saman",
      role: "React/NextJS Developer",
      image: "/Photo/basiii.jpg",

    },
    {
      id: 6,
      name: "Muhammed Saleel",
      role: "Full Stack Developer",
      image: "/Photo/saleel.jpg",

    },
    {
      id: 7,
      name: "Adnan Yousuf",
      role: "Flutter Developer",
      image: "/Photo/adnan.jpg",

    },
    {
      id: 8,
      name: "Arshad",
      role: "Digital Marketing Specialist",
      image: "/Photo/arshad.jpg",

    },
    {
      id: 9,
      name: "Amna Abdullah",
      role: "Software Tester",
      image: "/Photo/amna.jpg",

    },
    {
      id: 10,
      name: "Shamna",
      role: "HR Executive",
      image: "/Photo/shamna.jpg",

    },
    {
      id: 11,
      name: "Mohamed Rafi",
      role: "Project Manager",
      image: "/Photo/rafi.jpg",

    },
    
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, cardId]))
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-6 md:pl-16 lg:pl-24">
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="inline-flex items-center rounded-full text-white bg-gray-400 border px-2.5 py-0.5 text-sm  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
              About
            </div>
            <h2 className={`font-poppins text-3xl font-medium tracking-tight py-1 sm:text-4xl md:text-[48px] pb-6 text-center md:text-left`}>Our Creative Minds</h2>
          </div>
          <div className="flex flex-col md:flex-row md:overflow-x-auto md:space-x-6 space-y-8 md:space-y-0 pb-4 scrollbar-hide">
            {teamMembers.map((member, index) => {
              const isVisible = visibleCards.has(member.id)
              return (
                <div
                  key={member.id}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  data-card-id={member.id}
                  className="group relative overflow-hidden w-full h-[380px] md:flex-shrink-0 md:w-[280px] lg:w-[380px] lg:h-[380px] mx-auto md:mx-0 md:mr-6 last:md:mr-0 shadow-2xl transform transition-all duration-700"
                  style={{
                    transform: isVisible ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isVisible ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Decorative elements */}
                  <div 
                    className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  ></div>
                  <div 
                    className="absolute top-8 right-8 w-2 h-2 bg-white/30 rounded-full transition-all duration-500 delay-200"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  ></div>
                  
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: isVisible ? 'scale(1.1)' : 'scale(1)',
                      filter: isVisible ? 'grayscale(0)' : 'grayscale(1)'
                    }}
                  />
                  
                  {/* Content overlay */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-700"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {/* Name */}
                    <h3 
                      className="text-xl font-bold text-white drop-shadow-2xl mb-1 transition-all duration-700"
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p 
                      className="text-sm text-white/80 drop-shadow-lg transition-all duration-700 delay-200"
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {member.role}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div 
                      className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-3 transition-all duration-700 delay-300"
                      style={{
                        width: isVisible ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0
                    }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
