import React from 'react';
import DigitalMarketingBanner from "@/components/digitalMarketingBanner";
import DigitalMarketingServicesAccordion from "@/components/DigitalMarketingServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import FaqAccordion from '@/components/faqAccordion';

export default function DigitalMarketing() {
  return (
    <div>
      <DigitalMarketingBanner/>
      <DigitalMarketingServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
}
