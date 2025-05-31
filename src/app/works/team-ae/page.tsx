import BottomBar from "@/components/bottomBar";
import TeamAeBanner from "@/components/work-detail/teamAeBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import TeamAeCasestudy from "@/components/work-detail/teamAeCasestudy";
import TeamAeGallery from "@/components/work-detail/teamAeGallery";

export default function TeamAe() {
    return (
        <>
         <TeamAeBanner/>
         <TeamAeCasestudy/>
         <TeamAeGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 