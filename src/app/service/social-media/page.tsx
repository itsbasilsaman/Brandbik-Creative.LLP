import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';


// Dynamically import components with loading fallbacks
const SocialMediaBanner = dynamic(() => import('@/components/socialMediaBanner'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const SocialMediaServicesAccordion = dynamic(() => import('@/components/SocialMediaServicesAccordion'), {
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

export default function SocialMedia() {
  return (
    <div>
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <SocialMediaBanner />
      </Suspense>
      
      <Suspense fallback={<div className="h-[200px] animate-pulse bg-gray-200" />}>
        <SocialMediaServicesAccordion />
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
