import React from 'react';
import WebDevServicesAccordion from "@/components/WebDevServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
export default function WebDevelopment() {
  return (
    
    <div>
      <div className='w-full h-screen'></div>
      <WebDevServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
    </div>
  );
} 