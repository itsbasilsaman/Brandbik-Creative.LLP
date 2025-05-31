import BottomBar from "@/components/bottomBar";
import CyberceedBanner from "@/components/work-detail/cyberceedBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import CyberceedCaseStudy from "@/components/work-detail/cyberceedCasestudy";
import CyberceedGallery from "@/components/work-detail/cyberceedGallery";

export default function Cyberceed() {
    return (
        <>
         <CyberceedBanner/>
         <CyberceedCaseStudy/>
         <CyberceedGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
}