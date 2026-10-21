'use client';

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark } from 'lucide-react';

export function LatestNewsSection() {
  const { toggleBookmark, state } = useAppState();
  const [imgErr, setImgErr] = useState(false);

  const tokyoArticle = getArticleById('less-floor-area-more-possibilities');
  const portoArticle = getArticleById('porto-neighbourhood-library');
  const kitchenArticle = getArticleById('kitchen-island-family-table');
  const acousticArticle = getArticleById('acoustic-lighting-double-duty');
  const collectiveArticle = getArticleById('rise-of-design-collective');

  const isTokyoBookmarked = tokyoArticle ? state.bookmarks.includes(tokyoArticle.id) : false;

  // Right-column cells, in display order: TL, TR, BL, BR
  const sideArticles = [portoArticle, acousticArticle, kitchenArticle, collectiveArticle].filter(
    Boolean
  ) as NonNullable<ReturnType<typeof getArticleById>>[];

  // Timestamps kept as data here since the source articles only carry a date string
  const timestamps: Record<string, string> = {
    'porto-neighbourhood-library': '14 Oct 2026 · 08:45 GMT',
    'acoustic-lighting-double-duty': '14 Oct 2026 · 08:10 GMT',
    'kitchen-island-family-table': '14 Oct 2026 · 07:30 GMT',
    'rise-of-design-collective': '13 Oct 2026 · 16:20 GMT',
  };

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="The daily dispatch"
          title="Latest News"
          viewAllHref="/category/home-decor"
          viewAllText="View all news"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ── LEFT lead feature (span 5) ─────────────────────────── */}
          {tokyoArticle && (
            <div className="lg:col-span-4 flex flex-col group">
              <div className="relative w-full aspect-8/4 overflow-hidden bg-slate-100 mb-5">
                {!imgErr && (
                  <img
                    src={tokyoArticle.imageUrl}
                    alt={tokyoArticle.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(tokyoArticle.id, tokyoArticle.title);
                  }}
                  aria-label="Bookmark article"
                  className="absolute top-3 right-3 p-1.5 bg-white/90 text-navy shadow-xs rounded-xs"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      isTokyoBookmarked ? 'fill-navy text-navy' : 'text-slate-600'
                    }`}
                  />
                </button>
              </div>

              <div className="text-[11px] uppercase tracking-[0.14em] text-accent-blue mb-2 font-semibold">
                {tokyoArticle.kicker || 'Urban Living / Tokyo'}
              </div>

              <h3 className="text-2xl sm:text-3xl font-lora text-navy leading-snug mb-3">
                <Link href={`/article/${tokyoArticle.id}`} className="hover:text-accent-blue transition-colors">
                  {tokyoArticle.title}
                </Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {tokyoArticle.deck}
              </p>

              <div className="pt-3 text-xs text-slate-500">
                By {tokyoArticle.author.name} · {tokyoArticle.date} · {tokyoArticle.readTime}
              </div>
            </div>
          )}

          {/* ── RIGHT 2×2 grid with hairline separators (span 7) ───── */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {sideArticles.map((article, idx) => {
                const isLastRow = idx >= 2;
                const isRightCol = idx % 2 === 1;

                return (
                  <div
                    key={article.id}
                    className={[
                      'group',
                      // Horizontal hairline between rows
                      !isLastRow ? 'border-b border-slate-200' : '',
                      // Vertical hairline between columns (sm+ only)
                      isRightCol ? 'sm:border-l sm:border-slate-200' : '',
                      // Padding so text doesn't touch the lines
                      'pb-6 sm:pb-7',
                      isLastRow ? 'pt-6 sm:pt-7' : '',
                      isRightCol ? 'sm:pl-6 lg:pl-7' : '',
                      !isRightCol ? 'sm:pr-6 lg:pr-7' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Link href={`/article/${article.id}`} className="flex gap-4 items-start">
                      {/* Text column */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className='flex'>
                           <div className="relative w-27.5 sm:w-30 aspect-4/3 shrink-0 overflow-hidden bg-slate-100">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                        <div className='flex flex-col py-2 px-4'>
                        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-accent-blue font-semibold mb-1.5">
                          {article.subCategory || article.categoryName}
                        </div>

                        <h4 className="text-base sm:text-lg font-lora text-navy leading-snug mb-2 transition-colors">
                          {article.title}
                        </h4>
                         </div>
                         </div>
                        <div className="mt-auto pt-2 w-full">
                        <p className="hidden sm:block text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5">
                          {article.deck}
                        </p>
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 tabular-nums">
                          {timestamps[article.id] ?? article.date}
                        </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}