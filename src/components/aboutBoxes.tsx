'use client'

import Image from 'next/image'
import { Suspense } from 'react';

// Separate client component for interactive cards

const InteractiveCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description,
}: { 
  imageSrc: string; 
  imageAlt: string; 
  title: string; 
  description: string;
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div 
      className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="p-8 lg:p-16 flex justify-center items-center mb-0">
        <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={90}
            height={90}
            className="object-cover"
            priority={true}
            loading="eager"
          />
        </div>
      </div>
      <div className="bg-white p-4 lg:p-4 h-[80px] lg:h-auto flex flex-col justify-center">
        <h3 className={`text-xl lg:text-3xl font-bold text-gray-900 font-poppins`}>{title}</h3>
        <p className="text-sm lg:text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

// Main server component
export default function AboutBoxes() {
  const cards = [
    {
      imageSrc: "/images/work-one.png",
      imageAlt: "Brands We Work With",
      title: "140+",
      description: "Brands We Work With"
    },
    {
      imageSrc: "/images/work-two.png",
      imageAlt: "Projects Completed",
      title: "1000+",
      description: "Projects Completed"
    },
    {
      imageSrc: "/images/work-three.png",
      imageAlt: "Countries we work with",
      title: "14+",
      description: "Countries we work with"
    },
    {
      imageSrc: "/images/work-four.png",
      imageAlt: "Brands scaled with us",
      title: "45+",
      description: "Brands scaled with us"
    },
    {
      imageSrc: "/images/work-five.png",
      imageAlt: "Revenue Generated",
      title: "74M+",
      description: "Revenue Generated"
    },
    {
      imageSrc: "/images/work-one.png",
      imageAlt: "Happy Clients",
      title: "500+",
      description: "Happy Clients",
      className: "block lg:hidden"
    }
  ];

  return (
    <div className="relative py-16 lg:py-28 flex justify-center items-center w-full primary-background px-4 md:px-16 lg:px-24 overflow-hidden">
      {/* Background diagonal stripes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[100px] bg-zinc-900"
            style={{
              left: `${i * 100}px`,
              transform: "skew(-20deg)",
              opacity: i % 2 === 0 ? 0.5 : 0.3,
            }}
          />
        ))}
      </div>

      {/* Shadow effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          <Suspense fallback={<div>Loading...</div>}>
            {cards.map((card, index) => (
              <div key={index} className={index === 5 ? "block lg:hidden" : ""}>
                <InteractiveCard
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}