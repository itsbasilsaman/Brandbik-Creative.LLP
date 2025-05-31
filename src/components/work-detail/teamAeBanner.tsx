import Image from "next/image";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function TeamAeBanner() {
  return (
    <div className={`w-full h-[60vh] md:h-[80vh] relative ${poppins.className}`}>
      <Image
        src="/images/team-ae.jpg"
        alt="TeamAE Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">TeamAE</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            A business consultancy firm based in Perinthalmanna, Kerala, offering services in taxation, auditing, and strategic planning.
          </p>
        </div>
      </div>
    </div>
  );
} 