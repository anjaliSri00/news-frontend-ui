'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 p-2.5 bg-navy text-white hover:bg-slate-900 border border-navy-light shadow-md rounded-xs transition-all duration-200"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

export function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col h-full animate-pulse">
      <div className="aspect-[16/10] bg-slate-200 mb-3 rounded-xs" />
      <div className="h-3 bg-slate-200 w-1/4 mb-2 rounded-xs" />
      <div className="h-5 bg-slate-200 w-3/4 mb-2 rounded-xs" />
      <div className="h-3 bg-slate-100 w-full mb-1 rounded-xs" />
      <div className="h-3 bg-slate-100 w-2/3 mb-4 rounded-xs" />
      <div className="mt-auto h-3 bg-slate-100 w-1/3 rounded-xs" />
    </div>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ArticleCardSkeleton key={i} />
      ))}
    </div>
  );
}
