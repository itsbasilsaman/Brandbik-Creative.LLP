"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

interface Job {
  title: string
  experience: string
  description?: string
}

interface FullDepartmentSectionProps {
  title: string
  jobs: Job[]
  defaultOpen?: boolean
}

export default function FullDepartmentSection({
  title,
  jobs,
  defaultOpen = false,
}: FullDepartmentSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-lg  border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200 group"
      >
        <h3 className="text-xl font-medium group-hover:text-gray-900 transition-colors">{title}</h3>
        <ChevronDown
          className={`h-6 w-6 transition-all duration-300 group-hover:text-gray-900 ${
            isOpen ? "rotate-180 text-gray-900" : "text-gray-600"
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 space-y-1">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 group hover:bg-gray-50 transition-all duration-200 rounded-lg px-4 -mx-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? `slideInUp 0.6s ease-out forwards` : "none",
              }}
            >
              <div>
                <h4 className="font-medium text-lg group-hover:text-gray-900 transition-colors">{job.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{job.experience}</p>
                {job.description && (
                  <div className="mt-2 text-sm text-gray-600 whitespace-pre-line">
                    {job.description}
                  </div>
                )}
              </div>
              <button className="text-gray-600 hover:text-black flex items-center group/apply transition-all duration-200 hover:bg-black hover:text-white px-4 py-2 rounded-md">
                <span className="mr-2 font-medium">Apply now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/apply:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 