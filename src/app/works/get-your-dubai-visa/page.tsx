import BottomBar from "@/components/bottomBar";
import DubaiVisaBanner from "@/components/work-detail/dubaiVisaBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import DubaiVisaCaseStudy from "@/components/work-detail/dubaiVisaCasestudy";
import DubaiVisaGallery from "@/components/work-detail/dubaiVisaGallery";

export default function DubaiVisa() {
    return (
        <>
         <DubaiVisaBanner/>
         <DubaiVisaCaseStudy/>
         <DubaiVisaGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 