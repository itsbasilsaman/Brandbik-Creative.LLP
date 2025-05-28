import React from 'react';
import BrandingBanner from "@/components/brandingBanner";
import BrandingServicesAccordion from "@/components/BrandingServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import FaqAccordion from '@/components/faqAccordion';

export default function Branding() {
  return (
    <div>
      <BrandingBanner/>
      <BrandingServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
}
