import BottomBar from "@/components/bottomBar";
import TeamAeBrandingBanner from "@/components/work-detail/teamAeBrandingBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import TeamAeBrandingCasestudy from "@/components/work-detail/teamAeBrandingCasestudy";
import TeamAeBrandingGallery from "@/components/work-detail/teamAeBrandingGallery";

export default function TeamAeBranding() {
    return (
        <>
         <TeamAeBrandingBanner/>
         <TeamAeBrandingCasestudy/>
         <TeamAeBrandingGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 