import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with loading fallbacks
const BrandingBanner = dynamic(() => import('@/components/brandingBanner'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const BrandingServicesAccordion = dynamic(() => import('@/components/BrandingServicesAccordion'), {
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

export default function Branding() {
  return (
    <div>
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <BrandingBanner />
      </Suspense>
      
      <Suspense fallback={<div className="h-[200px] animate-pulse bg-gray-200" />}>
        <BrandingServicesAccordion />
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
