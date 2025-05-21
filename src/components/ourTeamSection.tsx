"use client"

import Image from "next/image"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '500', // 500 = Medium
  subsets: ['latin'],
});

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
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Fadhil Muhammed",
      role: "Brand Consultant",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Althaf Shareef",
      role: "AI Chief",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Fadhil Muhammed",
      role: "Brand Consultant",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Althaf Shareef",
      role: "AI Chief",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-5 md:px-16 lg:px-24">
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              About
            </div>
            <h2 className={`${poppins.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl pb-6`}>Our Creative Minds</h2>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg bg-gray-100 flex-shrink-0 w-[280px]"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover grayscale"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
