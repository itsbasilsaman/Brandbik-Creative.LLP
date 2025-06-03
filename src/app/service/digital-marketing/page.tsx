import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with loading fallbacks
const DigitalMarketingBanner = dynamic(() => import('@/components/digitalMarketingBanner'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const DigitalMarketingServicesAccordion = dynamic(() => import('@/components/DigitalMarketingServicesAccordion'), {
  loading: () => <div className="h-[200px] animate-pulse bg-gray-200" />
});

const ProcessSection = dynamic(() => import('@/components/processSection'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const RelatedWorks = dynamic(() => import('@/components/relatedWorks'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const FaqAccordion = dynamic(() => import('@/components/faqAccordion'), {
  loading: () => <div className="h-[200px] animate-pulse bg-gray-200" />
});

export default function DigitalMarketing() {
  return (
    
    <div>
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <DigitalMarketingBanner />
      </Suspense>
      
      <Suspense fallback={<div className="h-[200px] animate-pulse bg-gray-200" />}>
        <DigitalMarketingServicesAccordion />
      </Suspense>
      
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <RelatedWorks />
      </Suspense>
      
      <Suspense fallback={<div className="h-[200px] animate-pulse bg-gray-200" />}>
        <FaqAccordion />
      </Suspense>
    </div>
  );
}
