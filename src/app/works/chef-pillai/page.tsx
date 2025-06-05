import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const ChefPillaiBanner = dynamic(() => import("@/components/work-detail/chefPillaiBanner"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const ChefPillaiCasestudy = dynamic(() => import("@/components/work-detail/chefPillaiCasestudy"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const ChefPillaiGallery = dynamic(() => import("@/components/work-detail/chefPillaiGallery"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function ChefPillai() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <ChefPillaiBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <ChefPillaiCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <ChefPillaiGallery />
      </Suspense>
    </>
  );
} 