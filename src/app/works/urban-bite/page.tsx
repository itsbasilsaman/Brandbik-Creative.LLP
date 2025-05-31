import BottomBar from "@/components/bottomBar";
import UrbanBiteBanner from "@/components/work-detail/urbanBiteBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import UrbanBiteCasestudy from "@/components/work-detail/urbanBiteCasestudy";
import UrbanBiteGallery from "@/components/work-detail/urbanBiteGallery";

export default function UrbanBite() {
    return (
        <>
         <UrbanBiteBanner/>
         <UrbanBiteCasestudy/>
         <UrbanBiteGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 