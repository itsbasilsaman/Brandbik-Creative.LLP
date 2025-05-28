import React from 'react';
import SocialMediaBanner from "@/components/socialMediaBanner";
import SocialMediaServicesAccordion from "@/components/SocialMediaServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import FaqAccordion from '@/components/faqAccordion';

export default function SocialMedia() {
  return (
    <div>
      <SocialMediaBanner/>
      <SocialMediaServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
}
