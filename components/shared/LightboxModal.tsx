'use client';

import React, { useEffect } from 'react';
import { useAppState } from '../../lib/state/AppStateProvider';
import { X } from 'lucide-react';

export function LightboxModal() {
  const { state, closeLightbox } = useAppState();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.activeLightbox) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.activeLightbox, closeLightbox]);

  if (!state.activeLightbox) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <button
        onClick={closeLightbox}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-6xl max-h-[85vh] flex flex-col items-center">
        <img
          src={state.activeLightbox.currentImage}
          alt={state.activeLightbox.title}
          className="max-w-full max-h-[75vh] object-contain shadow-2xl"
        />
        <div className="mt-4 text-center">
          <p className="font-serif text-white text-lg">
            {state.activeLightbox.title}
          </p>
          <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 block">
            Lumen Journal Architecture Gallery
          </span>
        </div>
      </div>
    </div>
  );
}
