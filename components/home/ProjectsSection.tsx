"use client";

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllProjects, getArticleById } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark, ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const { toggleBookmark, state } = useAppState();
  const [imgErr, setImgErr] = useState(false);

  const barcelonaProject = getAllProjects().find((p) => p.id === 'barcelona-workshop-living');
  const mexicoCity = getAllProjects().find((p) => p.id === 'mexico-city-courtyard-hotel');
  const melbourne = getAllProjects().find((p) => p.id === 'melbourne-neighbourhood-office');
  const helsinki = getAllProjects().find((p) => p.id === 'helsinki-civic-reading-room');

  const isSaved = barcelonaProject ? state.bookmarks.includes(barcelonaProject.id) : false;

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Built ideas, around the world"
          title="Projects"
          viewAllHref="/projects"
          viewAllText="View all Projects"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left lead project (span 6) */}
          {barcelonaProject && (
            <div className="lg:col-span-6 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {!imgErr ? (
                  <img
                    src={barcelonaProject.imageUrl}
                    alt={barcelonaProject.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : null}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(barcelonaProject.id, barcelonaProject.title);
                  }}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 text-navy shadow-xs rounded-xs"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-navy text-navy' : 'text-slate-600'}`} />
                </button>
              </div>

              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {barcelonaProject.category} / {barcelonaProject.location.split(',')[0]}
              </div>

              <h3 className="text-2xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/projects`}>{barcelonaProject.title}</Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {barcelonaProject.summary}
              </p>

              <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {barcelonaProject.architect} · 14 Oct 2026 · 9 min read</span>
                <Link
                  href={`/projects`}
                  className="font-medium text-navy hover:text-accent-blue inline-flex items-center gap-1"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Right 3 projects (span 6) */}
          <div className="lg:col-span-6 divide-y divide-slate-200 flex flex-col justify-between">
            {[mexicoCity, melbourne, helsinki].filter(Boolean).map((proj) => (
              <div key={proj!.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group">
                <div className="w-28 h-20 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                  <img
                    src={proj!.imageUrl}
                    alt={proj!.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-0.5 font-medium">
                    {proj!.category} / {proj!.location.split(',')[0]}
                  </div>
                  <h4 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug line-clamp-2 mb-1">
                    <Link href={`/projects`}>{proj!.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400">
                    {proj!.year} · {proj!.architect}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
