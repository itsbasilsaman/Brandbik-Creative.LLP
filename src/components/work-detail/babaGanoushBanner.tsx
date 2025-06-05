import Image from "next/image";

export default function BabaGanoushBanner() {
  return (
    <div className={`w-full h-[60vh] md:h-[80vh] relative font-poppins`}>
      <Image
        src="/images/Digital-Marketing/baba-ganoush.jpg"
        alt="Baba Ganoush Digital Marketing"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">Baba Ganoush</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Digital Marketing Campaign for a Middle Eastern restaurant specializing in authentic dishes, featuring their signature creamy eggplant dip.
          </p>
        </div>
      </div>
    </div>
  );
} 