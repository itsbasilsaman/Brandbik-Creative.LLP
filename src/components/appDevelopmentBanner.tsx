import { ArrowUpRight } from "lucide-react"
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const images = [
  {
    src: "/images/Web-development/GENCHI.jpg",
    alt: "GENCHI Project"
  },
  {
    src: "/images/game-gate.png",
    alt: "Game Gate Project"
  },
  {
    src: "/images/scitor-academy.jpg",
    alt: "Scitor Academy"
  },
  {
    src: "/images/aes-school-of-commerce.jpg",
    alt: "AES School of Commerce"
  },
  {
    src: "/images/team-ae.jpg",
    alt: "Team AE"
  },
  {
    src: "/images/galaxey-paints.jpg",
    alt: "Galaxey Paints"
  },
  {
    src: "/images/Web-development/jn-.jpg",
    alt: "JN Project"
  }
];

export default function AppDevelopmentBanner() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      {/* Image Grid */}
      <div className="absolute inset-0 z-0 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 h-full">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-medium text-white mb-6 sm:mb-8 tracking-tight leading-tight ${poppins.className}`}>
          App Development
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          We&apos;re passionate about creating mobile applications that make a difference.
        </p>

        <button
          className="bg-slate-600 hover:bg-slate-500 flex justify-center items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="ml-2 h-6 w-6 p-1 border border-gray-100 rounded-full" />
        </button>
      </div>
    </div>
  )
} 