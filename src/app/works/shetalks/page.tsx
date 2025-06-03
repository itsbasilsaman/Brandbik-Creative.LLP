import BottomBar from "@/components/bottomBar";
import SheTalksBanner from "@/components/work-detail/sheTalksBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import SheTalksCasestudy from "@/components/work-detail/sheTalksCasestudy";
import SheTalksGallery from "@/components/work-detail/sheTalksGallery";

export default function SheTalks() {
    return (
        <>
         <SheTalksBanner/>
         <SheTalksCasestudy/>
         <SheTalksGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 