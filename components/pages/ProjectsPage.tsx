'use client';

import React, { useState } from 'react';
import { getAllProjects } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Maximize2, MapPin, Bookmark } from 'lucide-react';

export function ProjectsPage() {
  const projects = getAllProjects();
  const { openLightbox, toggleBookmark, state } = useAppState();

  const [activeTypology, setActiveTypology] = useState('All');

  const typologies = ['All', 'Residential', 'Hospitality', 'Workplace', 'Public space', 'Adaptive reuse'];

  const filtered = projects.filter((p) => {
    if (activeTypology === 'All') return true;
    return p.category === activeTypology;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Built ideas, around the world
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Architectural Projects &amp; Monographs
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            A global masonry gallery of completed residential, civic, cultural, and adaptive reuse architecture. Click any photograph to view high-resolution details.
          </p>
        </div>
      </section>

      {/* Filter Chips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-medium mr-2">
            Typology:
          </span>
          {typologies.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTypology(t)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-xs ${
                activeTypology === t
                  ? 'bg-navy text-white font-medium'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Asymmetric Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => {
            const isBookmarked = state.bookmarks.includes(proj.id);

            return (
              <div
                key={proj.id}
                className="group flex flex-col bg-white border border-slate-200 hover:border-navy transition-colors overflow-hidden shadow-2xs"
              >
                {/* Image with zoom affordance */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    onClick={() => openLightbox(proj.imageUrl, proj.title)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <span className="p-2.5 bg-white/90 text-navy rounded-full shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(proj.id, proj.title);
                    }}
                    className="absolute top-3 right-3 p-1.5 bg-white/90 text-navy rounded-xs shadow-xs"
                    aria-label="Bookmark project"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-navy text-navy' : 'text-slate-600'}`} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="uppercase tracking-wider font-medium">{proj.category}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {proj.location}
                    </span>
                  </div>

                  <h3
                    onClick={() => openLightbox(proj.imageUrl, proj.title)}
                    className="font-serif text-lg text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2 cursor-pointer"
                  >
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{proj.architect} · {proj.year}</span>
                    {proj.area && <span>{proj.area}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
