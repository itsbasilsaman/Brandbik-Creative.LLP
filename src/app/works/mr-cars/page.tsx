import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const MrCarsBanner = dynamic(() => import('@/components/work-detail/mrCarsBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const MrCarsCasestudy = dynamic(() => import('@/components/work-detail/mrCarsCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const MrCarsGallery = dynamic(() => import('@/components/work-detail/mrCarsGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function MrCarsPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <MrCarsBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <MrCarsCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <MrCarsGallery />
      </Suspense>
    </main>
  );
} 