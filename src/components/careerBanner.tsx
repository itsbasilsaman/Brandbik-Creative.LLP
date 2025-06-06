"use client"

import { useState, useRef, useCallback } from "react"
import { ArrowRight } from "lucide-react"
import CareerHero from "./career/CareerHero"
import DepartmentSection from "./career/DepartmentSection"
import FullDepartmentSection from "./career/FullDepartmentSection"

export default function CareerSection() {
  const [showOpenings, setShowOpenings] = useState(false)
  const [showAllOpenings, setShowAllOpenings] = useState(false)
  const openingsRef = useRef<HTMLDivElement>(null)
  const allOpeningsRef = useRef<HTMLDivElement>(null)

  const handleOpenRoles = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setShowOpenings(true)

    setTimeout(() => {
      openingsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }, [])

  const handleSeeAllOpenings = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setShowAllOpenings(true)

    setTimeout(() => {
      allOpeningsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }, [])

  return (
    <>
      <CareerHero onOpenRoles={handleOpenRoles} showOpenings={showOpenings} />

      {/* Career openings section */}
      <div
        ref={openingsRef}
        className="w-full bg-white transition-all duration-1000 ease-out"
        style={{
          opacity: showOpenings ? 1 : 0,
          maxHeight: showOpenings ? "2000px" : "0",
          overflow: showOpenings ? "visible" : "hidden",
          paddingTop: showOpenings ? "4rem" : "0",
          paddingBottom: showOpenings ? "4rem" : "0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-2">Current Openings</h2>
          <p className="text-[18px] text-center text-gray-600 mb-16">
            Become part of a high-performing & collaborative team
          </p>

          <div className="space-y-6">
            <DepartmentSection title="Operations & Research (1)" />
            <DepartmentSection title="Design (1)" />
          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={handleSeeAllOpenings}
              className="border border-gray-300 px-8 py-4 inline-flex items-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group hover:shadow-md transform hover:-translate-y-1"
            >
              <span className="font-medium">See all openings</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Full job openings section */}
      <div
        ref={allOpeningsRef}
        className="w-full bg-gray-50 transition-all duration-1000 ease-out"
        style={{
          opacity: showAllOpenings ? 1 : 0,
          maxHeight: showAllOpenings ? "3000px" : "0",
          overflow: showAllOpenings ? "visible" : "hidden",
          paddingTop: showAllOpenings ? "4rem" : "0",
          paddingBottom: showAllOpenings ? "4rem" : "0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-medium mb-16">Job Openings</h2>

          <div className="space-y-6">
            <FullDepartmentSection
              title="Operations & Research (1)"
              jobs={[
                { 
                  title: "Operations & Research Coordinator",
                  experience: "2+ Years of experience",
                  description: `Ready to take charge of deadlines, processes, and research? We're looking for a detail-oriented team player to:

• Manage project timelines & deliverables
• Coordinate communication across teams
• Conduct research for course development
• Optimize processes and keep us on track
• Provide regular updates to management

What You Bring:
• Excellent organizational skills
• Strong research & analytical mindset
• Top-notch communication skills
• Experience with project management tools`
                }
              ]}
              defaultOpen={true}
            />
            <FullDepartmentSection
              title="Design (1)"
              jobs={[
                { 
                  title: "Senior Graphic Designer",
                  experience: "4+ Years of experience",
                  description: `We're seeking a talented Senior Graphic Designer with video editing expertise to join our creative team. In this role, you'll be responsible for:

• Creating compelling visual designs for digital and print media
• Producing high-quality video content and animations
• Leading design projects from concept to completion
• Collaborating with cross-functional teams
• Maintaining brand consistency across all platforms

Requirements:
• Strong portfolio showcasing both graphic design and video editing work
• Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
• Experience with motion graphics and animation
• Excellent time management and project coordination skills
• Ability to work under tight deadlines while maintaining quality`
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
