import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const AboGlumboBanner = dynamic(() => import('@/components/work-detail/aboGlumboBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const AboGlumboCasestudy = dynamic(() => import('@/components/work-detail/aboGlumboCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const AboGlumboGallery = dynamic(() => import('@/components/work-detail/aboGlumboGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function AboGlumboPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <AboGlumboBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AboGlumboCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <AboGlumboGallery />
      </Suspense>
    </main>
  );
} 