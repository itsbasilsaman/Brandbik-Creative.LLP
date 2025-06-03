import BottomBar from "@/components/bottomBar";
import IndoArabBanner from "@/components/work-detail/indoArabBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import IndoArabCasestudy from "@/components/work-detail/indoArabCasestudy";
import IndoArabGallery from "@/components/work-detail/indoArabGallery";

export default function IndoArab() {
    return (
        <>
         <IndoArabBanner/>
         <IndoArabCasestudy/>
         <IndoArabGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 