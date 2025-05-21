"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500', // Medium
});

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const faqItems: FaqItem[] = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      answer: "Craft a unique mark that helps you differentiate you from the market.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      answer: "Craft a unique mark that helps you differentiate you from the market.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      answer: "Craft a unique mark that helps you differentiate you from the market.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      answer: "Craft a unique mark that helps you differentiate you from the market.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full px-4 md:px-16 lg:px-32 bg-[#efefef] py-8 lg:py-20">
      <h1 className={`text-3xl lg:text-[48px] font-bold mb-8 ${poppins.className}`}>FAQ</h1>
      <div className="space-y-1">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-base md:text-lg pr-4">{item.question}</span>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-gray-600">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}