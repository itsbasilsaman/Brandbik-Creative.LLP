import BottomBar from "@/components/bottomBar";
import BabaGanoushBanner from "@/components/work-detail/babaGanoushBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import BabaGanoushCasestudy from "@/components/work-detail/babaGanoushCasestudy";
import BabaGanoushGallery from "@/components/work-detail/babaGanoushGallery";

export default function BabaGanoush() {
  return (
    <>
      <BabaGanoushBanner />
      <BabaGanoushCasestudy />
      <BabaGanoushGallery />
      <ResultSection />
      <Testimonial />
      <InnerRelatedWorks />
      <BottomBar />
    </>
  );
} 