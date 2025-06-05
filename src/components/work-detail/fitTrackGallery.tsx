import Image from "next/image";

export default function FitTrackGallery() {
  return (
    <div className={`container mx-auto px-4 py-16 md:py-24 font-poppins`}>
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">Project Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative h-[300px]">
          <Image
            src="/images/game-gate.png"
            alt="FitTrack App Interface"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px]">
          <Image
            src="/images/game-gate.png"
            alt="FitTrack Workout Tracking"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px]">
          <Image
            src="/images/game-gate.png"
            alt="FitTrack Nutrition Planning"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 