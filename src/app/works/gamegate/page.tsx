import BottomBar from "@/components/bottomBar";
import GamegateBanner from "@/components/work-detail/gamegateBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import GamegateCasestudy from "@/components/work-detail/gamegateCasestudy";
import GamegateGallery from "@/components/work-detail/gamegateGallery";

export default function Gamegate() {
    return (
        <>
         <GamegateBanner/>
         <GamegateCasestudy/>
         <GamegateGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 