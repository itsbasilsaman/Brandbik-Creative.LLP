"use client"

import {   Users, Award, Globe, Zap } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: "500", // Medium weight
  subsets: ["latin"],
  display: "swap",
})

// Statistics data
 

// Core values data
const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge solutions to deliver exceptional results.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships through trust and transparency.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Driven",
    description: "Excellence isn't negotiable. Every project reflects our commitment to superior craftsmanship.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Perspective",
    description: "We think globally while acting locally, creating brands that resonate across cultures.",
  },
]

export default function AboutBanner() {
  return (
    <section className="w-full pt-24 lg:pt-32 mx-auto px-4 lg:pb-0 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="bg-gray-200 text-gray-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${poppins.className}`}>
              We build brands that move with purpose.
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Brandbik is a creative agency crafting modern brands, digital experiences, and growth strategies for the
              ambitious.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From early-stage startups to global companies, we design stories that connect and endure.
            </p>
          </div>
        </div>

       

        {/* Core Values Section */}
        <div className="mb-12 sm:mb-16">
           

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg sm:text-xl font-semibold text-gray-900 mb-2 ${poppins.className}`}>
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
