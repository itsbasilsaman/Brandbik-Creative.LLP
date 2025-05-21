import ClientsSection from "@/components/clientsSection";
import ServiceContent from "@/components/serviceContent";
import ServiceMain from "@/components/serviceMain";
import ServicesSection from "@/components/services";
import BottomBar from '../../components/bottomBar';
import FaqAccordion from "@/components/faqAccordion";


export default function About() {
  return (
    <div>
       <ServiceMain/>
       <ServicesSection/>
       <ServiceContent/>
       <ClientsSection/>
      <BottomBar/>
      <FaqAccordion/>
    </div>
  );
};