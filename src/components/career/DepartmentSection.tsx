"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import JobListing from "./JobListing"

interface DepartmentSectionProps {
  title: string
}

export default function DepartmentSection({ title }: DepartmentSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6   border-b border-gray-200 cursor-pointer transition-colors"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="py-6 px-4 space-y-4 bg-gray-50">
          <JobListing title="Senior Product Designer" location="New York, NY" type="Full-time" />
          <JobListing title="UX Researcher" location="Remote" type="Contract" />
          <JobListing title="UI Designer" location="San Francisco, CA" type="Full-time" />
        </div>
      )}
    </div>
  )
} 