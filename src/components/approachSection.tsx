import { 
  Lightbulb, 
  Diamond, 
  TrendingUp, 
  Users, 
  Heart, 
  Repeat, 
  MessageSquare, 
  Clock, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Leaf 
} from "lucide-react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
});

const approachItems = [
  { icon: Lightbulb, text: "Innovation" },
  { icon: Diamond, text: "Quality Focused" },
  { icon: TrendingUp, text: "Results-driven" },
  { icon: Users, text: "Skilled Team" },
  { icon: Heart, text: "Customer-Centric" },
  { icon: Repeat, text: "Agile Process" },
  { icon: MessageSquare, text: "Transparent Communication" },
  { icon: Clock, text: "Timely Delivery" },
  { icon: Cpu, text: "Cutting-edge Technology" },
  { icon: BarChart3, text: "Data-Driven Decisions" },
  { icon: ShieldCheck, text: "Security-First Approach" },
  { icon: Leaf, text: "Sustainability" }
];

export default function ApproachSection() {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="w-full ">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-[#1893FF] to-[#00C6F7] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium">Approach</div>
        </div>

        <h1 className={`${poppins.className} text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16`}>
          What Sets us apart
        </h1>

        {/* First row - moving right to left */}
        <div className="relative w-full overflow-hidden mb-6 md:mb-8">
          <div className="animate-marquee-left flex whitespace-nowrap">
            {approachItems.slice(0, 6).map((item, index) => (
              <div key={index} className="flex items-center mx-2 md:mx-4">
                <div className="bg-gradient-to-r from-[#1893FF] to-[#00C6F7] text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full flex items-center space-x-2 md:space-x-4">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                  <span className="text-base md:text-xl lg:text-2xl font-semibold whitespace-nowrap">{item.text}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {approachItems.slice(0, 6).map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center mx-2 md:mx-4">
                <div className="bg-gradient-to-r from-[#1893FF] to-[#00C6F7] text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full flex items-center space-x-2 md:space-x-4">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                  <span className="text-base md:text-xl lg:text-2xl font-semibold whitespace-nowrap">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moving left to right */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right flex whitespace-nowrap">
            {approachItems.slice(6).map((item, index) => (
              <div key={index} className="flex items-center mx-2 md:mx-4">
                <div className="bg-gradient-to-r from-[#1893FF] to-[#00C6F7] text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full flex items-center space-x-2 md:space-x-4">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                  <span className="text-base md:text-xl lg:text-2xl font-semibold whitespace-nowrap">{item.text}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {approachItems.slice(6).map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center mx-2 md:mx-4">
                <div className="bg-gradient-to-r from-[#1893FF] to-[#00C6F7] text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full flex items-center space-x-2 md:space-x-4">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                  <span className="text-base md:text-xl lg:text-2xl font-semibold whitespace-nowrap">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}