// "use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllDesigners } from '../../lib/services';
import { ArrowRight } from 'lucide-react';

export function DesignersSection() {
  const designers = getAllDesigners().slice(0, 3);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="The people behind the places"
          title="Designers"
          viewAllHref="/designers"
          viewAllText="View all Designers"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left studio spotlight box (span 4) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
                Studio to watch
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-navy leading-tight mb-4">
                Different cities. A shared sense of care.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Meet three independent designers making a case for slower practice, local knowledge and architecture that lasts.
              </p>
              <Link
                href="/designers"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-navy hover:text-accent-blue transition-colors"
              >
                <span>Explore the studio directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="pt-6 border-t border-slate-200 text-[11px] text-slate-400">
              Profiles by the Form &amp; Field editorial team
            </div>
          </div>
          {/* Right 3 designer profile cards (span 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <div key={designer.id} className="flex flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  <img
                    src={designer.imageUrl}
                    alt={designer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs text-slate-500 mb-0.5">
                  {designer.city}, {designer.country}
                </div>
                <h4 className="text-base font-serif font-medium text-navy mb-1">
                  {designer.name}
                </h4>
                <p className="text-sm font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                  <Link href={`/designers/${designer.id}`}>
                    {designer.tagline}
                  </Link>
                </p>
                <div className="mt-auto text-xs text-slate-400">
                  13 Oct 2026 · 6 min read
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}