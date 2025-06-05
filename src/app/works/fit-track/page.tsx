import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const FitTrackBanner = dynamic(() => import("@/components/work-detail/fitTrackBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const FitTrackCasestudy = dynamic(() => import("@/components/work-detail/fitTrackCasestudy"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const FitTrackGallery = dynamic(() => import("@/components/work-detail/fitTrackGallery"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function FitTrack() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <FitTrackBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <FitTrackCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <FitTrackGallery />
      </Suspense>
    </>
  );
} 