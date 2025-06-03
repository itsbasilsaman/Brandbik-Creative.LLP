import BottomBar from "@/components/bottomBar";
import BiriyaniBanner from "@/components/work-detail/biriyaniBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import BiriyaniCasestudy from "@/components/work-detail/biriyaniCasestudy";
import BiriyaniGallery from "@/components/work-detail/biriyaniGallery";

export default function BiriyaniAndBeyond() {
    return (
        <>
         <BiriyaniBanner/>
         <BiriyaniCasestudy/>
         <BiriyaniGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 