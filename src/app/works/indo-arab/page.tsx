import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const IndoArabBanner = dynamic(() => import('@/components/work-detail/indoArabBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const IndoArabCasestudy = dynamic(() => import('@/components/work-detail/indoArabCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const IndoArabGallery = dynamic(() => import('@/components/work-detail/indoArabGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function IndoArab() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <IndoArabBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <IndoArabCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <IndoArabGallery />
      </Suspense>
    </>
  );
} 