import Image from "next/image";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function AesSchoolDigitalGallery() {
  return (
    <div className={`container mx-auto px-4 py-16 md:py-24 ${poppins.className}`}>
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">Campaign Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative h-[300px]">
          <Image
            src="/images/Digital-Marketing/aes-min.jpg"
            alt="AES School Social Media Campaign"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px]">
          <Image
            src="/images/Digital-Marketing/aes-min.jpg"
            alt="AES School Content Marketing"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px]">
          <Image
            src="/images/Digital-Marketing/aes-min.jpg"
            alt="AES School Digital Ads"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 