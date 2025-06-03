import BottomBar from "@/components/bottomBar";
import SilhouettesBanner from "@/components/work-detail/silhouettesBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import SilhouettesCasestudy from "@/components/work-detail/silhouettesCasestudy";
import SilhouettesGallery from "@/components/work-detail/silhouettesGallery";

export default function SilhouettesBySaleena() {
    return (
        <>
         <SilhouettesBanner/>
         <SilhouettesCasestudy/>
         <SilhouettesGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
}
