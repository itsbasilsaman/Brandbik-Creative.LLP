import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const HandymanBanner = dynamic(() => import('@/components/work-detail/handymanBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const HandymanCasestudy = dynamic(() => import('@/components/work-detail/handymanCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const HandymanGallery = dynamic(() => import('@/components/work-detail/handymanGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function HandymanPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <HandymanBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <HandymanCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <HandymanGallery />
      </Suspense>
    </main>
  );
} 