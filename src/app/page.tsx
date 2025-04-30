import AboutSection from "@/components/aboutSection";
import ClientReviews from "@/components/clientReview";
import ClientsSection from "@/components/clientsSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/services";



export default function Home() {
  return (
    <div  >
    
      <HeroSection/>
      <AboutSection/>
       <ServicesSection/>
       <ClientsSection/>
       <ClientReviews/>
       <Footer/>
    </div>

  );
}
