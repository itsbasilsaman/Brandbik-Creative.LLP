import Image from "next/image";

export default function ChefPillaiBanner() {
  return (
    <div className={`w-full h-[60vh] md:h-[80vh] relative font-poppins`}>
      <Image
        src="/images/Digital-Marketing/chef-pillai.jpg"
        alt="Chef Pillai Digital Marketing"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">Chef Pillai</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Digital Marketing Campaign for a culinary brand offering traditional Kerala dishes with a modern twist.
          </p>
        </div>
      </div>
    </div>
  );
} 