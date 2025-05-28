import React from 'react';
import AdvertisingBanner from "@/components/advertisingBanner";
import AdvertisingServicesAccordion from "@/components/AdvertisingServicesAccordion";
import ProcessSection from '@/components/processSection';
import RelatedWorks from '@/components/relatedWorks';
import FaqAccordion from '@/components/faqAccordion';

export default function Advertising() {
  return (
    <div>
      <AdvertisingBanner/>
      <AdvertisingServicesAccordion />
      <ProcessSection/>
      <RelatedWorks/>
      <FaqAccordion/>
    </div>
  );
}
