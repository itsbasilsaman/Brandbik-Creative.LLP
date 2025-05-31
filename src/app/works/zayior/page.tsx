import BottomBar from "@/components/bottomBar";
import ZayiorBanner from "@/components/work-detail/zayiorBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import ZayiorCasestudy from "@/components/work-detail/zayiorCasestudy";
import ZayiorGallery from "@/components/work-detail/zayiorGallery";

export default function Zayior() {
    return (
        <>
         <ZayiorBanner/>
         <ZayiorCasestudy/>
         <ZayiorGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 