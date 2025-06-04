import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function AboGlumboCasestudy() {
  const services = [
    ["App Development", "UI/UX Design", "Branding"],
    ["Maintenance Integration", "Booking System"],
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
              Abo Glumbo is a mobile app designed to connect users with trusted professionals for home repairs, installations, and maintenance. The app streamlines the process of finding, booking, and managing service requests, ensuring convenience and reliability for users in Saudi Arabia.
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
              The main challenge was to create a seamless and intuitive user experience that simplifies the process of booking home services, while ensuring the reliability and quality of professionals listed on the platform.
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