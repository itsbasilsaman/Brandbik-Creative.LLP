import BottomBar from "@/components/bottomBar";
import ScitorAcademyBanner from "@/components/work-detail/scitorAcademyBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import ScitorAcademyCasestudy from "@/components/work-detail/scitorAcademyCasestudy";
import ScitorAcademyGallery from "@/components/work-detail/scitorAcademyGallery";

export default function ScitorAcademy() {
    return (
        <>
         <ScitorAcademyBanner/>
         <ScitorAcademyCasestudy/>
         <ScitorAcademyGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 