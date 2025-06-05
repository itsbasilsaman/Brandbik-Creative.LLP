import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins', // optional: for using with Tailwind
});

export default function DubaiVisaCaseStudy() {
    const services = [
      ["Social Media Marketing", "Content Creation", "Community Management"],
      ["Paid Advertising", "Lead Generation"],
    ]
  
    return (
      <div className={`h-auto lg:h-screen bg-white px-5 md:px-16 lg:px-24 py-12 lg:py-28 lg:pb-0 ${poppins.className}`}>
        <div className="mx-auto space-y-8 md:space-y-16 lg:space-y-20">
          {/* Scope Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">Scope</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Developed and executed a comprehensive social media marketing strategy for Get Your Dubai Visa,
                focusing on building trust and credibility in the visa services market. Created engaging content
                that simplifies the visa application process and highlights the company's expertise in UAE visa services.
              </p>
            </div>
          </div>
  
          {/* The Challenge Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">The Challenge</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                The client needed to establish a strong online presence and build trust in a market where visa
                services are often viewed with skepticism. The goal was to position Get Your Dubai Visa as a
                reliable and transparent service provider while increasing lead generation through social media.
              </p>
            </div>
          </div>
  
          {/* Services Provided Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-[34px] font-medium text-gray-900">Services Provided</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {services.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4">
                    {row.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-gray-800 font-medium text-base md:text-lg border border-gray-300 rounded-full px-4 py-2 md:px-8 md:py-3">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom divider line */}
          <div className="border-b border-gray-200"></div>
        </div>
      </div>
    )
  }
  