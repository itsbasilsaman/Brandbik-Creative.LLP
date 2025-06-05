"use client"

import type React from "react"

import { useState } from "react" 
import {   Phone, Mail  } from "lucide-react"
// import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image"

// Add keyframes animation
const gradientAnimation = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

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
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919074851748?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-5 md:px-16 lg:px-24 font-poppins`} style={{
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
    }}>
      <style>{gradientAnimation}</style>
      {/* Background image */}
      <div className="absolute w-full h-full">
        <Image 
          src="/images/contact-bg.webp" 
          alt="Contact background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-12">
        {/* Right side form */}
        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <div className="lg:bg-[#9696961f] backdrop-blur-sm p-0 sm:p-2 md:p-8 rounded-[24px] lg:border lg:border-[#dedddd] lg:shadow-lg">
            <div className="sm:hidden block text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 sm:mb-6">Let&apos;s work together.</h1>
          <p className="text-gray-300 text-[14px] sm:text-[16px] mb-8 sm:mb-12 lg:max-w-[460px] max-w-[300px] font-medium mx-auto lg:mx-0">
            Whether you&apos;re launching something new or reinventing your brand — we&apos;d love to{" "}
            hear from you.
          </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-white font-medium text-left text-sm sm:text-base block">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-white font-medium text-left text-sm sm:text-base block">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium text-left text-sm sm:text-base block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-white font-medium text-left text-sm sm:text-base block">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium text-left text-sm sm:text-base block">
                  Tell us more
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light min-h-[120px] focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-white sm:bg-black hover:bg-zinc-900 sm:text-white py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Left side content */}
        <div className=" w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
         <div className="hidden sm:block">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 sm:mb-6">Let&apos;s work together.</h1>
          <p className="text-gray-300 text-[14px] sm:text-[16px] mb-8 sm:mb-12 lg:max-w-[460px] max-w-[300px] font-medium mx-auto lg:mx-0">
            Whether you&apos;re launching something new or reinventing your brand — we&apos;d love to{" "}
            hear from you.
          </p>
         </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-4 sm:gap-5 bg-[#24242483] border border-[#dedddd] shadow-lg backdrop-blur-sm p-3 sm:p-4 px-6 sm:px-8 rounded-[24px] w-full sm:w-auto">
              <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-gray-300">
                <a href="tel:+919074851748" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">+91 90748 51748,</a>
                <br />
                <a href="tel:+918075347955" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">+91 8075347955</a>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 bg-[#24242483]  border border-[#dedddd] shadow-lg  backdrop-blur-sm p-3 sm:p-4 px-6 sm:px-8 rounded-[24px] w-full sm:w-auto">
              <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-gray-300">
                <a href="mailto:info@brandbik.com" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">info@brandbik.com</a>
                <br />
                <a href="mailto:hr@brandbik.com" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">hr@brandbik.com</a>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-6 sm:mt-8 justify-center lg:justify-start">
            <a href="https://www.instagram.com/brandbik_creatives/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <FaInstagram className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://wa.me/919074851748" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <FaWhatsapp className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://twitter.com/brandbik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <FaXTwitter className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://www.linkedin.com/company/brandbik-creatives" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <FaLinkedin className="text-[20px] sm:text-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
