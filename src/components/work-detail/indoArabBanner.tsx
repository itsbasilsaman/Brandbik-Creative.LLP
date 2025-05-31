import Image from "next/image";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function IndoArabBanner() {
  return (
    <div className={`w-full h-[60vh] md:h-[80vh] relative ${poppins.className}`}>
      <Image
        src="/images/Digital-Marketing/indo-min.jpg"
        alt="INDOARAB Digital Marketing"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">INDOARAB</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Digital Marketing Campaign for a company specializing in the manufacture of perfumes and chemical products.
          </p>
        </div>
      </div>
    </div>
  );
} 