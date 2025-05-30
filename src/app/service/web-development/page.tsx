import React from 'react';
import WebDevServicesAccordion from "@/components/WebDevServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import WebDevelopmentBanner from '@/components/webDevelopmentBanner';
import FaqAccordion from '@/components/faqAccordion';

export default function WebDevelopment() {
  return (
    <div>
      <WebDevelopmentBanner/>
      <WebDevServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
} 