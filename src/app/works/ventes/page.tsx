import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const VentesBanner = dynamic(() => import('@/components/work-detail/ventesBanner'), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-200" />
});

const VentesCasestudy = dynamic(() => import('@/components/work-detail/ventesCasestudy'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

const VentesGallery = dynamic(() => import('@/components/work-detail/ventesGallery'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200" />
});

export default function Ventes() {
  return (
    <>
      <Suspense fallback={<div className="h-[60vh] animate-pulse bg-gray-200" />}>
        <VentesBanner />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <VentesCasestudy />
      </Suspense>

      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200" />}>
        <VentesGallery />
      </Suspense>
    </>
  );
} 