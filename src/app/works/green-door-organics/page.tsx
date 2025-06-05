import BottomBar from "@/components/bottomBar";
import GreenDoorBanner from "@/components/work-detail/greenDoorBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import GreenDoorCaseStudy from "@/components/work-detail/greenDoorCasestudy";
import GreenDoorGallery from "@/components/work-detail/greenDoorGallery";

export default function GreenDoor() {
    return (
        <>
         <GreenDoorBanner/>
         <GreenDoorCaseStudy/>
         <GreenDoorGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 