import BottomBar from "@/components/bottomBar";
import CyberseedBrandingBanner from "@/components/work-detail/cyberseedBrandingBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import CyberseedBrandingCasestudy from "@/components/work-detail/cyberseedBrandingCasestudy";
import CyberseedBrandingGallery from "@/components/work-detail/cyberseedBrandingGallery";

export default function CyberseedBranding() {
    return (
        <>
         <CyberseedBrandingBanner/>
         <CyberseedBrandingCasestudy/>
         <CyberseedBrandingGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 