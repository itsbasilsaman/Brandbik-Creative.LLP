"use client"

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
  description: string;
  industry: string;
  website?: string;
}

const clients: Client[] = [
  {
    name: "CHRFFFF",
    logo: "/images/CHRFFFF-logo-1.png",
    description: "Leading provider of innovative solutions in the technology sector.",
    industry: "Technology",
  },
  {
    name: "Genchi Global",
    logo: "/images/genchi-logo-2.png",
    description: "Global consulting firm specializing in business transformation.",
    industry: "Consulting",
  },
  {
    name: "Take Off",
    logo: "/images/take-off-logo.png",
    description: "Pioneering solutions in the aviation and travel industry.",
    industry: "Aviation",
  },
  {
    name: "Scitor Academy",
    logo: "/images/scitor academy-logo-4.png",
    description: "Educational institution focused on technology and innovation.",
    industry: "Education",
  },
  {
    name: "SeaStar International",
    logo: "/images/seastar-logo-5.png",
    description: "International trading and logistics solutions provider.",
    industry: "Logistics",
  },
  {
    name: "We On Wheels",
    logo: "/images/WEONWEELS-logo-6.png",
    description: "Revolutionizing transportation and mobility solutions.",
    industry: "Transportation",
  },
  {
    name: "Financeva",
    logo: "/images/logo-1.png",
    description: "Innovative financial technology solutions provider.",
    industry: "FinTech",
  },
  {
    name: "Team AE",
    logo: "/images/team-ae-logo-8.png",
    description: "Professional services and consulting firm.",
    industry: "Professional Services",
  },
  {
    name: "AE's School of Commerce",
    logo: "/images/aes-logo.png",
    description: "Leading educational institution in business and commerce.",
    industry: "Education",
  },
  {
    name: "Cyber Seed",
    logo: "/images/cyber-black-logo-10.png",
    description: "Cybersecurity and digital protection solutions.",
    industry: "Cybersecurity",
  },
  {
    name: "Abu Glumbo",
    logo: "/images/abu-glumbo-1111.png",
    description: "Innovative solutions in the manufacturing sector.",
    industry: "Manufacturing",
  },
  {
    name: "Kanzul Hind",
    logo: "/images/LOGO-LANDSCAPE-purple-logo-12.png",
    description: "Traditional and modern business solutions provider.",
    industry: "Business Services",
  },
  {
    name: "Matrixx Microns",
    logo: "/images/MATRIXX-MICRONS-logo-14.png",
    description: "Advanced materials and manufacturing solutions.",
    industry: "Manufacturing",
  },
  {
    name: "Prozomann",
    logo: "/images/prozomann-logo-15.png",
    description: "Creative solutions in design and branding.",
    industry: "Design",
  },
  {
    name: "JamJoom Hypermarket",
    logo: "/images/logo-21.png",
    description: "Leading retail and hypermarket chain.",
    industry: "Retail",
  },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-6">
              Our Clients
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with innovative companies across various industries to create
              lasting impact and drive growth through strategic solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-300 flex items-center justify-center aspect-square"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="object-contain w-full h-full max-h-16 sm:max-h-20 md:max-h-24 hover:grayscale transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-black mb-6">
            Ready to Join Our Client Family?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Partner with us to transform
            your business and achieve remarkable results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-base font-medium text-white bg-black hover:bg-gray-800 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
} 