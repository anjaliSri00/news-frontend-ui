'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { getCategoryBySlug, getArticlesByCategory, getTrendingArticles } from '../../lib/services';
import { CategorySlug } from '../../lib/models';
import { ArticleCard } from '../shared/ArticleCard';
import { FilterChips, Pagination } from '../shared/FilterChips';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Link } from '../../lib/router';

const ITEMS_PER_PAGE = 6;

interface CategoryPageProps {
  slug: CategorySlug;
}

export function CategoryPage({ slug }: CategoryPageProps) {
  const categoryInfo = getCategoryBySlug(slug);

  const [selectedTag, setSelectedTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset filter when slug changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedTag('All');
    setCurrentPage(1);
  }, [slug]);

  const allArticles = useMemo(() => {
    return getArticlesByCategory(slug);
  }, [slug]);

  const tags = useMemo(() => {
    const set = new Set<string>();
    set.add('All');
    allArticles.forEach((a) => {
      if (a.subCategory) set.add(a.subCategory);
      a.tags.forEach((t) => set.add(t));
    });
    return Array.from(set).slice(0, 7);
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    if (selectedTag === 'All') return allArticles;
    return allArticles.filter(
      (a) => a.subCategory === selectedTag || a.tags.includes(selectedTag)
    );
  }, [allArticles, selectedTag]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featured = allArticles[0];
  const trending = getTrendingArticles().slice(0, 4);

  if (!categoryInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif text-navy mb-2">Category Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The design category you requested does not exist.</p>
        <Link href="/" className="px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Category Hero Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
              {categoryInfo.kicker}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
              {categoryInfo.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Story in Category (if on page 1 and no sub-filter) */}
        {featured && selectedTag === 'All' && currentPage === 1 && (
          <div className="pb-12 mb-12 border-b border-slate-200">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-4">
              Featured Story
            </span>
            <ArticleCard article={featured} variant="large" />
          </div>
        )}

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium shrink-0">
              Filter by topic:
            </span>
            <FilterChips
              options={tags}
              selected={selectedTag}
              onSelect={(tag) => {
                setSelectedTag(tag);
                setCurrentPage(1);
              }}
            />
          </div>

          <span className="text-xs text-slate-400 font-sans">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'story' : 'stories'}
          </span>
        </div>

        {/* Grid and Sidebar layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Articles Grid (span 8) */}
          <div className="lg:col-span-8">
            {paginatedArticles.length === 0 ? (
              <div className="py-16 text-center text-slate-400 border border-dashed border-slate-200 p-8">
                <p className="font-serif text-lg text-slate-700 mb-1">No stories found</p>
                <p className="text-xs">No articles currently match &ldquo;{selectedTag}&rdquo; in {categoryInfo.title}.</p>
                <button
                  onClick={() => setSelectedTag('All')}
                  className="mt-4 px-3 py-1.5 bg-navy text-white text-xs uppercase tracking-wider"
                >
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {paginatedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="medium" />
                ))}
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(p) => {
                setCurrentPage(p);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Curated Sidebar (span 4) */}
          <div className="lg:col-span-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0">
            <div className="sticky top-20 space-y-8">
              {/* Trending Stories */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-navy font-semibold pb-3 mb-4 border-b border-navy">
                  Most Read Across Categories
                </h3>
                <div className="space-y-4">
                  {trending.map((item, idx) => (
                    <div key={item.id} className="flex gap-3 group items-start">
                      <span className="font-serif text-xl font-light text-slate-300 group-hover:text-navy tabular-nums shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                          {item.categoryName}
                        </span>
                        <h4 className="text-sm font-serif text-navy leading-snug">
                          <Link href={`/article/${item.id}`}>{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Callout in Sidebar */}
              <div className="p-6 bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block mb-1">
                  The Daily Brief
                </span>
                <h4 className="font-serif text-navy text-lg leading-snug mb-2">
                  Stay updated on {categoryInfo.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Essential dispatches delivered directly to your inbox every weekday morning.
                </p>
                <Link
                  href="/subscribe"
                  className="block text-center py-2 bg-navy text-white text-xs uppercase tracking-wider font-medium hover:bg-slate-900 transition-colors"
                >
                  Subscribe free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}