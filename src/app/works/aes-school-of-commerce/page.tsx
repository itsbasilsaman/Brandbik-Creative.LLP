import BottomBar from "@/components/bottomBar";
import AesSchoolBanner from "@/components/work-detail/aesSchoolBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import AesSchoolCaseStudy from "@/components/work-detail/aesSchoolCasestudy";
import AesSchoolGallery from "@/components/work-detail/aesSchoolGallery";

export default function AesSchool() {
    return (
        <>
         <AesSchoolBanner/>
         <AesSchoolCaseStudy/>
         <AesSchoolGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 