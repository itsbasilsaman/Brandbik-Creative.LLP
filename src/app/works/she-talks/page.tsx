import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const SheTalksBanner = dynamic(() => import('@/components/work-detail/sheTalksAppBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const SheTalksAppCasestudy = dynamic(() => import('@/components/work-detail/sheTalksAppCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const SheTalksAppGallery = dynamic(() => import('@/components/work-detail/sheTalksAppGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function SheTalksAppPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <SheTalksBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SheTalksAppCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <SheTalksAppGallery />
      </Suspense>
    </main>
  );
} 