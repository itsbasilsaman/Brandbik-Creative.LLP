import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const TenderoutesBanner = dynamic(() => import('@/components/work-detail/tenderoutesBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const TenderoutesCasestudy = dynamic(() => import('@/components/work-detail/tenderoutesCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const TenderoutesGallery = dynamic(() => import('@/components/work-detail/tenderoutesGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function Tenderoutes() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <TenderoutesBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TenderoutesCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <TenderoutesGallery />
      </Suspense>
    </>
  );
} 