"use client"

import Image from 'next/image'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400', // Regular
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutBoxes() {
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
    <div className="relative py-16 lg:py-28 flex justify-center items-center w-full primary-background px-5 md:px-16 lg:px-32 overflow-hidden">
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

      {/* ===== SHADOW EFFECTS ===== */}
      

      {/* Left side WHITE shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      {/* Right side WHITE shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div 
            className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="  p-16 flex justify-center items-center   mb-0">
              <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/work-one.png"
                alt="Team"
                width={70}
                height={70}
                className="object-cover"
              />
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className={`text-3xl font-bold text-gray-900 ${poppins.className}`}>140+</h3>
              <p className="text-gray-500">Brands We Work With</p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className=" p-16 flex justify-center items-center   mb-0">
              <div className="w-16 h-16 flex items-center justify-center">
               
              <Image
                src="/images/work-two.png"
                alt="Team"
                width={90}
                height={90}
                className="object-cover"
              />
      
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className={`text-3xl font-bold text-gray-900  ${poppins.className}`}>1000+</h3>
              <p className="text-gray-500">Projects Completed</p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="  p-16 flex justify-center items-center rounded-md mb-0">
              <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/work-three.png"
                alt="Team"
                width={90}
                height={90}
                className="object-cover"
              />
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className={`text-3xl font-bold text-gray-900 ${poppins.className}`}>14+</h3>
              <p className="text-gray-500">Countries we work with</p>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="  p-16 flex justify-center items-center rounded-md mb-0">
              <div className="w-16 h-16 flex items-center justify-center">  <Image
                src="/images/work-four.png"
                alt="Team"
                width={90}
                height={90}
                className="object-cover"
              />   
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className={`text-3xl font-bold text-gray-900 ${poppins.className}`}>45+</h3>
              <p className="text-gray-500">Brands scaled with us</p>
            </div>
          </div>

          {/* Card 5 */}
          <div 
            className="flex flex-col relative z-30 border-2 border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="  p-16 flex justify-center items-center rounded-md mb-0">
              <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/work-five.png"
                alt="Team"
                width={90}
                height={90}
                className="object-cover"
              />
              </div>
            </div>
            <div className="bg-white p-4">
                <h3 className={`text-3xl font-bold text-gray-900 ${poppins.className}`}>74M+</h3>
              <p className="text-gray-500">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  )
}