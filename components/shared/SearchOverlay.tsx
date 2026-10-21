'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useAppState } from '../../lib/state/AppStateProvider';
import { useRouter, Link } from '../../lib/router';
import { searchAllData } from '../../lib/services/articlesService';
import { getAllDesigners, getAllProducts, getAllProjects } from '../../lib/services';

export function SearchOverlay() {
  const { state, closeSearch } = useAppState();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.searchOverlayOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [state.searchOverlayOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.searchOverlayOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.searchOverlayOpen, closeSearch]);

  if (!state.searchOverlayOpen) return null;

  const q = query.trim().toLowerCase();
  const matchedArticles = q ? searchAllData(q).slice(0, 5) : [];
  const matchedDesigners = q
    ? getAllDesigners()
        .filter((d) => d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q) || d.discipline.toLowerCase().includes(q))
        .slice(0, 3)
    : [];
  const matchedProducts = q
    ? getAllProducts()
        .filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.materials.toLowerCase().includes(q))
        .slice(0, 3)
    : [];
  const matchedProjects = q
    ? getAllProjects()
        .filter((p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.architect.toLowerCase().includes(q))
        .slice(0, 3)
    : [];

  const totalMatches = matchedArticles.length + matchedDesigners.length + matchedProducts.length + matchedProjects.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q) {
      closeSearch();
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-navy/95 backdrop-blur-md text-white animate-in fade-in duration-200">
      {/* Top search bar */}
      <div className="max-w-4xl w-full mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center justify-between pb-4 border-b border-navy-light mb-6">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-sans">
            Search Form & Field / Lumen Journal
          </span>
          <button
            onClick={closeSearch}
            aria-label="Close search overlay"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>Close (ESC)</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <Search className="w-6 h-6 absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, materials, designers, projects..."
            className="w-full pl-10 pr-12 py-3 bg-transparent text-xl sm:text-2xl font-serif text-white placeholder-slate-500 focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>

        {/* Suggested keywords when query is empty */}
        {!q && (
          <div className="pt-6">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Copenhagen courtyard',
                'Unfired clay',
                'Amara Okafor',
                'Modular sofa',
                'Tokyo compact home',
                'Acoustic felt',
                'Adaptive reuse',
                'Paper pendants',
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-navy-light/60 hover:bg-navy-light text-slate-200 hover:text-white text-xs border border-slate-700/50 rounded-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results view */}
      {q && (
        <div className="max-w-4xl w-full mx-auto px-4 flex-grow overflow-y-auto pb-12">
          {totalMatches === 0 ? (
            <div className="py-16 text-center text-slate-400">
              <p className="font-serif text-lg text-slate-300 mb-1">No results matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs">Try searching for keywords like &ldquo;timber&rdquo;, &ldquo;clay&rdquo;, &ldquo;curtains&rdquo; or a designer&apos;s name.</p>
            </div>
          ) : (
            <div className="space-y-8 pt-4">
              {/* Articles */}
              {matchedArticles.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-blue-300 font-sans pb-2 border-b border-navy-light mb-3">
                    Editorial Stories ({matchedArticles.length})
                  </h4>
                  <div className="divide-y divide-navy-light/60">
                    {matchedArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        onClick={closeSearch}
                        className="flex items-start gap-4 py-3 group hover:bg-navy-light/30 px-2 rounded-sm transition-colors"
                      >
                        <div className="w-16 h-14 bg-slate-800 shrink-0 overflow-hidden">
                          <img
                            src={article.imageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-0.5">
                            {article.kicker || article.categoryName}
                          </div>
                          <h5 className="font-serif text-white group-hover:text-blue-300 text-sm sm:text-base leading-snug">
                            {article.title}
                          </h5>
                          <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                            {article.deck}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Designers */}
              {matchedDesigners.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-blue-300 font-sans pb-2 border-b border-navy-light mb-3">
                    Designers & Studios ({matchedDesigners.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {matchedDesigners.map((designer) => (
                      <Link
                        key={designer.id}
                        href={`/designers/${designer.id}`}
                        onClick={closeSearch}
                        className="p-3 bg-navy-light/40 hover:bg-navy-light border border-slate-700/50 rounded-sm transition-colors group"
                      >
                        <div className="text-xs text-slate-400">{designer.city}, {designer.country}</div>
                        <div className="font-serif text-white group-hover:text-blue-300 font-medium mt-0.5">
                          {designer.name}
                        </div>
                        <div className="text-xs text-slate-300 line-clamp-2 mt-1">{designer.tagline}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Products & Projects */}
              {(matchedProducts.length > 0 || matchedProjects.length > 0) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {matchedProducts.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-blue-300 font-sans pb-2 border-b border-navy-light mb-3">
                        Products ({matchedProducts.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedProducts.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products`}
                            onClick={closeSearch}
                            className="block p-2.5 bg-navy-light/40 hover:bg-navy-light rounded-sm text-xs"
                          >
                            <span className="text-slate-400 uppercase text-[10px]">{p.category}</span>
                            <p className="text-white font-serif text-sm mt-0.5">{p.title}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {matchedProjects.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-blue-300 font-sans pb-2 border-b border-navy-light mb-3">
                        Built Projects ({matchedProjects.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedProjects.map((proj) => (
                          <Link
                            key={proj.id}
                            href={`/projects`}
                            onClick={closeSearch}
                            className="block p-2.5 bg-navy-light/40 hover:bg-navy-light rounded-sm text-xs"
                          >
                            <span className="text-slate-400 uppercase text-[10px]">{proj.location}</span>
                            <p className="text-white font-serif text-sm mt-0.5">{proj.title}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* View all button */}
              <div className="pt-4 text-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase tracking-wider font-medium rounded-sm transition-colors"
                >
                  <span>View all results for &ldquo;{query}&rdquo;</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
