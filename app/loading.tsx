import React from 'react';
import { GridSkeleton } from '@/components/shared/SkeletonsAndUtils';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="h-8 bg-slate-200 w-1/3 mb-8 animate-pulse rounded-xs" />
      <GridSkeleton count={6} />
    </div>
  );
}
