"use client"

import React, { useState } from 'react';
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Medium
  variable: '--font-poppins', // Optional, for Tailwind
})

const services = [
  {
    title: 'E-commerce Website Design',
    content: 'Without personalisation, a website is just a page on the internet. As a proficient website design company in India, we create a unique website aligned with your brand.',
    image:  'https://wallpapercave.com/wp/wp6394392.jpg',
  },
  {
    title: 'Applications & Dashboard',
    content: 'Without personalisation, a website is just a page on the internet. As a proficient website design company in India, we create a unique website aligned with your brand.',
    image:  'https://wallpapercave.com/wp/wp6394392.jpg',
  },
  {
    title: 'Custom Website Design',
    content: 'Without personalisation, a website is just a page on the internet. As a proficient website design company in India, we create a unique website aligned with your brand.',
    image:  'https://wallpapercave.com/wp/wp6394392.jpg',
  },
  {
    title: 'Redesign and Website Revamp',
    content: 'Without personalisation, a website is just a page on the internet. As a proficient website design company in India, we create a unique website aligned with your brand.',
    image:  'https://wallpapercave.com/wp/wp6394392.jpg',
  },
];



export default function WebDevServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(2); // Custom Website Design open by default

  return (
    <div className="w-full   px-5 md:px-16 lg:px-24 py-16">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium   mb-2 ${poppins.className}`}>
        Web Development Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our [Service Name] is crafted to align your business goals with impactful design and storytelling. Whether you&apos;re launching, evolving, or scaling — we help you stand out with purpose.
      </p>
      <div className="border-b border-gray-200">
        {services.map((service, idx) => (
          <div key={service.title}>
            <div
              className="flex items-center justify-between py-3 md:py-5 cursor-pointer text-xl md:text-2xl lg:text-[32px] font-normal border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            >
              <span className="flex-1">{service.title}</span>
              {idx === 0 && (
                <Image 
                  src={service.image} 
                  alt="Service" 
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover mr-4 rounded-lg shadow-md" 
                />
              )}
              <span className="text-3xl font-light ml-4">
                {openIndex === idx ? '−' : '+'}
              </span>
            </div>
            {openIndex === idx && service.content && (
              <div className="text-gray-500 text-base md:text-lg my-4 pl-1">
                {service.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 