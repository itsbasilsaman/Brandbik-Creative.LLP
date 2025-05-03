import Image from "next/image"
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function ClientsSection() {
  const clients = [
    { name: "SeaStar International", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Genchi Global Limited", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Chef Pillai", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Cyber Seed", logo: "/placeholder.svg?height=60&width=160" },
    { name: "SheTalks", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Silhouettes", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Financeva", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Tenderoutes", logo: "/placeholder.svg?height=60&width=160" },
    { name: "AE's School of Commerce", logo: "/placeholder.svg?height=60&width=160" },
    { name: "AGTC", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Indoarab", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Kanzul Hind", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Scitor Academy", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Galaxon", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Tatheer", logo: "/placeholder.svg?height=60&width=160" },
    { name: "SeaStar International (2)", logo: "/placeholder.svg?height=60&width=160" },
    { name: "JamJoom Hypermarket", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Wellham Associates", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Zayior", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Get Your Dubai Visa", logo: "/placeholder.svg?height=60&width=160" },
  ]

  return (

    <section className="max-w-7xl mx-auto px-4 py-16 pb-24 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="max-w-[818px]">
          <h2 className="text-[88px] font-medium tracking-tight text-black mb-4">Clients</h2>
          <p className="text-[20px] secondary-color">
            We collaborate with brands across industries — from startups to global leaders —
            <br className="hidden md:inline" />
            to craft experiences that resonate and endure.
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center  pt-16 ">
      <button className="group relative inline-flex items-center justify-center gap-3 px-[2px] py-[2px] rounded-full text-sm font-medium text-black before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-[linear-gradient(90deg,#2C6BD8,#08E6D5)] before:content-[''] before:z-0 transition-all duration-500 cursor-pointer">
  <span className="relative z-10 bg-white rounded-full px-4 py-3 flex items-center gap-3 text-[16px] text-black transition-all duration-500    ">
    View all clients
    <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
  </span>
</button>

      </div>

    </section>
  )
}
