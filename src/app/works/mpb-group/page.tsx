import BottomBar from "@/components/bottomBar";
import MPBGroupBanner from "@/components/work-detail/mpbGroupBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import MPBGroupCasestudy from "@/components/work-detail/mpbGroupCasestudy";
import MPBGroupGallery from "@/components/work-detail/mpbGroupGallery";

export default function MPBGroup() {
    return (
        <>
         <MPBGroupBanner/>
         <MPBGroupCasestudy/>
         <MPBGroupGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 