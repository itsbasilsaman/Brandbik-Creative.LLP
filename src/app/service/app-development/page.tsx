import React from 'react';
import AppDevelopmentBanner from "@/components/appDevelopmentBanner";
import AppDevServicesAccordion from "@/components/AppDevServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import FaqAccordion from '@/components/faqAccordion';

export default function AppDevelopment() {
  return (
    <div>
      <AppDevelopmentBanner/>
      <AppDevServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
}
