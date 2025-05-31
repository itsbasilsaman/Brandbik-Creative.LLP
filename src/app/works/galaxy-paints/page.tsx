import BottomBar from "@/components/bottomBar";
import GalaxyPaintsBanner from "@/components/work-detail/galaxyPaintsBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import GalaxyPaintsCasestudy from "@/components/work-detail/galaxyPaintsCasestudy";
import GalaxyPaintsGallery from "@/components/work-detail/galaxyPaintsGallery";

export default function GalaxyPaints() {
    return (
        <>
         <GalaxyPaintsBanner/>
         <GalaxyPaintsCasestudy/>
         <GalaxyPaintsGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 