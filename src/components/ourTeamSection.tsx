"use client"

import Image from "next/image"

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
      image: "/Photo/swalih.jpg",

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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 pl-5 md:pl-16 lg:pl-24">
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="container pl-4 md:pl-6">
        <div className="space-y-8">
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center rounded-full text-white bg-gray-400 border px-2.5 py-0.5 text-sm  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
              About
            </div>
            <h2 className={`font-poppins text-3xl font-bold tracking-tight py-1 sm:text-4xl md:text-[48px] pb-6`}>Our Creative Minds</h2>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden flex-shrink-0 w-[280px] lg:w-[360px] lg:h-[372px]"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="aspect-square w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-white/30">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md">{member.name}</h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
