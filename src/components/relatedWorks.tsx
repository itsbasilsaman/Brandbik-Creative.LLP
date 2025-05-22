import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})

export default function RelatedWorks() {
  // Sample data for the related works grid
  const relatedWorks = Array(6).fill({
    title: "Gamegate",
    description: "Gamegate, a high-performance, feature-rich platform designed for seamless gaming...",
    imageUrl:
      "",
  })

  return (
    <section className={`container mx-auto px-5 md:px-16 lg:px-24 py-12 md:py-20 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl lg:text-[48px] font-medium">Related Works</h2>
        <Link href="/works" className="text-blue-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {relatedWorks.map((work, index) => (
          <div key={index} className="bg-gray-50 overflow-hidden border border-gray-100">
            <div className="p-4">
              <Image
                src={work.imageUrl || "/placeholder.svg"}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-[24px] ">{work.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}