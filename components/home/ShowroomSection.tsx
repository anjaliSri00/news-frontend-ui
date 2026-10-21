"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllShowrooms } from '../../lib/services';
import { ArrowRight } from 'lucide-react';

export function ShowroomSection() {
  const showrooms = getAllShowrooms();
  const milan = showrooms[0];
  const singapore = showrooms[1];
  const antwerp = showrooms[2];

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Retail as an architectural experience"
          title="Showroom Showcase"
          viewAllHref="/showrooms"
          viewAllText="View all Showrooms"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Milan */}
          {milan && (
            <div className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={milan.imageUrl}
                  alt={milan.headline}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {milan.kicker}
              </div>
              <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/showrooms`}>{milan.headline}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {milan.description}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                14 Oct 2026 · 5 min read
              </div>
            </div>
          )}

          {/* Singapore */}
          {singapore && (
            <div className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={singapore.imageUrl}
                  alt={singapore.headline}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {singapore.kicker}
              </div>
              <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/showrooms`}>{singapore.headline}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {singapore.description}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                13 Oct 2026 · 6 min read
              </div>
            </div>
          )}
        </div>

        {/* Antwerp "Also on our map" strip matching screenshot */}
        {antwerp && (
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans uppercase tracking-widest text-slate-500 font-semibold">
                Also on our map:
              </span>
              <Link href="/showrooms" className="text-navy hover:text-accent-blue font-serif text-sm">
                {antwerp.headline}
              </Link>
            </div>
            <div className="text-slate-400 shrink-0">
              12 Oct 2026 · 3 min read
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
