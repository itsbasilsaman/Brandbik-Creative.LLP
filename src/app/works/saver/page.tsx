import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const SaverBanner = dynamic(() => import('@/components/work-detail/saverBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const SaverCasestudy = dynamic(() => import('@/components/work-detail/saverCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const SaverGallery = dynamic(() => import('@/components/work-detail/saverGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function SaverPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <SaverBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SaverCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SaverGallery />
      </Suspense>
    </main>
  );
} 