import Image from "next/image" 
import { Plus, Minus } from "lucide-react"

export default function LocationsSection() {
  return (
    <div className="container mx-auto px-5 md:px-16 lg:px-24 md:py-20 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Locations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* India Location Card */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-6 relative">
                <Image src="/india-flag.svg" alt="India Flag" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold">India</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Rajiv Gandhi Bypass, opposite Farsa Restaurant, Karuvambram, Manjeri, Kerala 676121
            </p>
          </div>
        </div>

        {/* Saudi Arabia Location Card */}
        <div className="bg-gray-50 rounded-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-6 relative">
                <Image src="/saudi-flag.svg" alt="Saudi Arabia Flag" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold">Saudi Arabia</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Rajiv Gandhi Bypass, opposite Farsa Restaurant, Karuvambram, Manjeri, Kerala 676121
            </p>
          </div>
        </div>

        {/* UAE Location Card */}
        <div className="bg-gray-50 rounded-lg">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-6 relative">
                <Image src="/uae-flag.svg" alt="UAE Flag" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold">UAE</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Rajiv Gandhi Bypass, opposite Farsa Restaurant, Karuvambram, Manjeri, Kerala 676121
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-200">
        {/* Map Placeholder - In a real implementation, you would use Google Maps API */}
        <div className="absolute inset-0 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.945519479!2d76.10872!3d11.11667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5803b9e5c7b%3A0x3b7f8b8f8b8f8b8f!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="grayscale"
          ></iframe>
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 bottom-16 flex flex-col">
          <button className="bg-white w-8 h-8 flex items-center justify-center shadow-md">
            <Plus className="w-4 h-4" />
          </button>
          <button className="bg-white w-8 h-8 flex items-center justify-center shadow-md border-t border-gray-200">
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Map Attribution */}
        <div className="absolute bottom-0 left-0 right-0 bg-white text-[10px] text-gray-500 px-2 py-1">
          <span>Map data ©2023 Google</span>
        </div>
      </div>
    </div>
  )
}
