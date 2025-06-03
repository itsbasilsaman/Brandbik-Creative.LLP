import BottomBar from "@/components/bottomBar";
import FinancevaBanner from "@/components/work-detail/financevaBanner";
import InnerRelatedWorks from "@/components/innerRelatedWorks";
import ResultSection from "@/components/resultSection";
import Testimonial from "@/components/Testimonial";
import FinancevaCasestudy from "@/components/work-detail/financevaCasestudy";
import FinancevaGallery from "@/components/work-detail/financevaGallery";

export default function Financeva() {
    return (
        <>
         <FinancevaBanner/>
         <FinancevaCasestudy/>
         <FinancevaGallery/>
         <ResultSection/>
         <Testimonial/>
         <InnerRelatedWorks/>
         <BottomBar/>
        </>
    )
} 