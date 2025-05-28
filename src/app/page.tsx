import AboutSection from "@/components/aboutSection";
import ClientReviews from "@/components/clientReview";
import ClientsSection from "@/components/clientsSection";
 import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/services";
import Works from "@/components/worksSection";



export default function Home() {
  return (
    <div>
       <HeroSection/>
       <AboutSection/>
       <ServicesSection/>
       <Works/>
       <ClientsSection/>
       <ClientReviews/>
    </div>
  );
}
