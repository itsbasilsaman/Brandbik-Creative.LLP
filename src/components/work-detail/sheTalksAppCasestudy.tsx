import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function SheTalksAppCasestudy() {
  const services = [
    ["App Development", "UI/UX Design", "Branding"],
    ["Community Building", "Expert Content"],
  ];

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
              She Talks is a mobile app designed to empower women by providing a safe space to connect, share stories, and access expert advice on life, career, and wellness. The app fosters a supportive community and delivers valuable resources for personal growth.
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
              The challenge was to create a welcoming and engaging platform that encourages women to participate, share, and seek guidance, while maintaining privacy and safety.
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
  );
} 