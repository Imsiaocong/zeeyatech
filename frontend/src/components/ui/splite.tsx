'use client';

import { lazy, Suspense } from 'react';

import { cn } from '@/lib/utils';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center" role="status" aria-label="正在加载 3D 场景">
          <span className="spline-loader" />
        </div>
      }
    >
      <Spline scene={scene} className={cn('h-full w-full', className)} />
    </Suspense>
  );
}
