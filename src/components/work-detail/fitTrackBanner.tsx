import Image from "next/image";

export default function FitTrackBanner() {
  return (
    <div className={`w-full h-[60vh] md:h-[80vh] relative font-poppins`}>
      <Image
        src="/images/game-gate.png"
        alt="FitTrack Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">FitTrack</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            A comprehensive mobile fitness application with workout tracking and nutrition planning features to help users achieve their fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
} 