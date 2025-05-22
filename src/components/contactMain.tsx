"use client"

import type React from "react"

import { useState } from "react" 
import { Instagram, Linkedin, Phone, Mail, Twitter } from "lucide-react"

export default function ContactMain() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-5   relative overflow-hidden px-5 md:px-16 lg:px-24">
      {/* Background image */}
      <div className="absolute w-full h-full  ">
        <img 
          src="/images/contact-bg.png" 
          alt="Contact background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl font-bold text-white mb-6">Let's work together.</h1>
          <p className="text-gray-300 text-lg mb-12 max-w-md">
            Whether you're launching something new or reinventing your brand — we'd love to{" "}
            <span className="text-blue-400">hear from you</span>.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-zinc-900/70 p-4 rounded-lg">
              <Phone className="text-white" />
              <div className="text-gray-300">
                <p>+91 90748 51748,</p>
                <p>+91 8075347955</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900/70 p-4 rounded-lg">
              <Mail className="text-white" />
              <div className="text-gray-300">
                <p>info@brandbik.com</p>
                <p>hr@brandbik.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-zinc-800/80 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-white">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Value"
                    className="w-full px-3 py-2 rounded-md bg-gray-400/30 border-0 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-white">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Value"
                    className="w-full px-3 py-2 rounded-md bg-gray-400/30 border-0 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Value"
                    className="w-full px-3 py-2 rounded-md bg-gray-400/30 border-0 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-white">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Value"
                    className="w-full px-3 py-2 rounded-md bg-gray-400/30 border-0 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Tell us more
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full px-3 py-2 rounded-md bg-gray-400/30 border-0 text-white placeholder:text-gray-400 min-h-[120px]"
                />
              </div>

              <button type="submit" className="w-full bg-black hover:bg-zinc-900 text-white py-6 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
