"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllMedia } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Play } from 'lucide-react';

export function PodcastVideoSection() {
  const { openVideoModal } = useAppState();
  const media = getAllMedia().slice(0, 3);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Listen closer. Look deeper."
          title="Podcast & Video"
          viewAllHref="/media"
          viewAllText="View all episodes"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {media.map((item) => (
            <div
              key={item.id}
              onClick={() => openVideoModal(item)}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Duration badge */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-white text-[11px] font-mono tracking-wider rounded-xs">
                  {item.duration}
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-navy flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-0.5 fill-navy" />
                  </div>
                </div>
              </div>

              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {item.kicker}
              </div>

              <h3 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5">
                {item.title}
              </h3>

              <div className="mt-auto text-xs text-slate-400 font-sans">
                {item.date} · {item.hostOrDirector}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
