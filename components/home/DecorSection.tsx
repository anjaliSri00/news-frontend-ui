"use client";
import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark, ArrowRight } from 'lucide-react';

export function DecorSection() {
  const { toggleBookmark, state } = useAppState();
  const [imgErr, setImgErr] = useState(false);

  const textiles = getArticleById('rooms-character-in-details');
  const ceramics = getArticleById('expressive-power-ordinary-vessel');
  const lighting = getArticleById('softer-light-paper-pendants');
  const artAtHome = getArticleById('one-well-placed-work-change-room');

  const isTextilesSaved = textiles ? state.bookmarks.includes(textiles.id) : false;

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Objects with a point of view"
          title="Decor"
          viewAllHref="/category/decor"
          viewAllText="View all Decor"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left large feature (span 6) */}
          {textiles && (
            <div className="lg:col-span-6 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {!imgErr ? (
                  <img
                    src={textiles.imageUrl}
                    alt={textiles.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : null}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(textiles.id, textiles.title);
                  }}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 text-navy shadow-xs rounded-xs"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isTextilesSaved ? 'fill-navy text-navy' : 'text-slate-600'}`} />
                </button>
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {textiles.subCategory || 'Textile stories'}
              </div>

              <h3 className="text-2xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${textiles.id}`}>{textiles.title}</Link>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {textiles.deck}
              </p>
              <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {textiles.author.name} · {textiles.date} · {textiles.readTime}</span>
                <Link
                  href={`/article/${textiles.id}`}
                  className="font-medium text-navy hover:text-accent-blue inline-flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
          {/* Right 3 items (span 6) */}
          <div className="lg:col-span-6 divide-y divide-slate-200 flex flex-col justify-between">
            {[ceramics, lighting, artAtHome].filter(Boolean).map((art) => (
              <div key={art!.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group">
                <div className="w-24 h-20 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                  <img
                    src={art!.imageUrl}
                    alt={art!.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-0.5 font-medium">
                    {art!.subCategory || art!.categoryName}
                  </div>
                  <h4 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug line-clamp-2 mb-1">
                    <Link href={`/article/${art!.id}`}>{art!.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400">
                    {art!.date} · {art!.readTime}
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