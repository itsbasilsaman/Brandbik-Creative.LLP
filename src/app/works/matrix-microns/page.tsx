import BottomBar from "@/components/bottomBar";
import MatrixMicronsBanner from "@/components/work-detail/matrixMicronsBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import MatrixMicronsCasestudy from "@/components/work-detail/matrixMicronsCasestudy";
import MatrixMicronsGallery from "@/components/work-detail/matrixMicronsGallery";

export default function MatrixMicrons() {
    return (
        <>
         <MatrixMicronsBanner/>
         <MatrixMicronsCasestudy/>
         <MatrixMicronsGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 