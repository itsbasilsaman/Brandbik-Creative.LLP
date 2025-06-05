import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const WeOnlyWheelsBanner = dynamic(() => import('@/components/work-detail/weOnlyWheelsBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const WeOnlyWheelsCasestudy = dynamic(() => import('@/components/work-detail/weOnlyWheelsCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const WeOnlyWheelsGallery = dynamic(() => import('@/components/work-detail/weOnlyWheelsGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function WeOnlyWheels() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <WeOnlyWheelsBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <WeOnlyWheelsCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <WeOnlyWheelsGallery />
      </Suspense>
    </>
  );
} 