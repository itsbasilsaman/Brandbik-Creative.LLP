"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface GetStartedPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedPanel({ isOpen, onClose }: GetStartedPanelProps) {
  const [activeSection, setActiveSection] = useState("impact")
  const { t } = useLanguage()

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main Content Container */}
      <div
        className={`relative w-full h-full transform transition-transform duration-700 ease-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex h-full">
          {/* Left Content Section */}
          <div className="flex-1 flex flex-col justify-center px-16 lg:px-24 relative">
            <div
              key={activeSection}
              className="animate-in slide-in-from-left-8 duration-500 relative z-10"
            >
              {activeSection === "impact" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Transforming Digital Landscapes
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    At BrandBik, we&apos;re not just building digital solutions – we&apos;re crafting experiences that drive real business growth. Our approach combines technical excellence with creative innovation to deliver results that matter.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Strategic Innovation</h3>
                      <p className="text-white/70">We blend cutting-edge technology with strategic thinking to create solutions that give your business a competitive edge.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Proven Excellence</h3>
                      <p className="text-white/70">Our track record of successful projects demonstrates our commitment to delivering exceptional results.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-3">Client-Centric Approach</h3>
                      <p className="text-white/70">We put your business goals at the center of everything we do, ensuring solutions that truly serve your needs.</p>
                    </div>
                  </div>

                  <Link
                    href="/impact"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Discover Our Impact</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "testimonials" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Client Success Stories
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    Our clients&apos; success is our greatest achievement. Each project represents a unique journey of transformation and growth.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Enterprise Transformation</h3>
                      <p className="text-white/70">Leading global enterprises trust us to deliver innovative solutions that drive their digital evolution.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Startup Success</h3>
                      <p className="text-white/70">We&apos;ve helped numerous startups establish their digital presence and scale their operations effectively.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Industry Recognition</h3>
                      <p className="text-white/70">Our work has been consistently recognized for excellence in digital innovation and client satisfaction.</p>
                    </div>
                  </div>

                  <Link
                    href="/testimonials"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Read Success Stories</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "clients" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Global Reach
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    Our influence extends across borders, serving clients worldwide with innovative digital solutions that transcend geographical boundaries.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">International Presence</h3>
                      <p className="text-white/70">We serve clients across multiple continents, bringing global best practices to every project.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Industry Diversity</h3>
                      <p className="text-white/70">Our expertise spans across various sectors, from technology to healthcare, finance to retail.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Cultural Understanding</h3>
                      <p className="text-white/70">We adapt our solutions to respect and enhance local business practices and cultural contexts.</p>
                    </div>
                  </div>

                  <Link
                    href="/clients"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Meet Our Clients</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "partnership" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Innovation Through Partnership
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    We believe in the power of collaboration. Our strategic partnerships enable us to deliver comprehensive solutions that drive innovation.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Technology Partners</h3>
                      <p className="text-white/70">We collaborate with leading technology providers to deliver cutting-edge solutions.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Industry Experts</h3>
                      <p className="text-white/70">Our network of industry specialists ensures we stay ahead of emerging trends and technologies.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Research Collaborations</h3>
                      <p className="text-white/70">We partner with research institutions to develop innovative solutions for tomorrow&apos;s challenges.</p>
                    </div>
                  </div>

                  <Link
                    href="/partnership"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Partner With Us</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "insights" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Digital Insights
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    Stay ahead of the curve with our expert insights, industry trends, and thought leadership in digital transformation.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Industry Analysis</h3>
                      <p className="text-white/70">Deep dives into emerging trends and their impact on business transformation.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Expert Perspectives</h3>
                      <p className="text-white/70">Insights from our team of specialists on the future of digital innovation.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Success Strategies</h3>
                      <p className="text-white/70">Practical guidance on implementing successful digital transformation initiatives.</p>
                    </div>
                  </div>

                  <Link
                    href="/insights"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Explore Insights</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "contact" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    Let&apos;s Create Together
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    Ready to transform your digital presence? Our team of experts is here to help you achieve your business goals through innovative solutions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Dedicated Support</h3>
                      <p className="text-white/70">Our team is available to assist you at every step of your digital journey.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Quick Response</h3>
                      <p className="text-white/70">We prioritize your needs and ensure timely communication throughout our engagement.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">Tailored Solutions</h3>
                      <p className="text-white/70">Every project is unique, and we customize our approach to meet your specific requirements.</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">Get in Touch</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Navigation Section */}
          <div className="w-64 lg:w-80 border-l border-white/10 flex flex-col justify-center px-8 lg:px-12">
            <nav className="space-y-2">
              {[
                { key: "impact", label: t('panel.impact') },
                { key: "testimonials", label: t('panel.testimonials') },
                { key: "clients", label: t('panel.clients') },
                { key: "partnership", label: t('panel.partnership') },
                { key: "insights", label: t('panel.insights') },
                { key: "contact", label: t('panel.getInTouch') }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.key
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}