'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter, Link } from '../../lib/router';
import { searchAllData, getAllProducts, getAllDesigners, getAllProjects, getArticleById } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { ArticleCard } from '../shared/ArticleCard';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Search, Bookmark, Heart, Trash2, ArrowRight } from 'lucide-react';

export function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const router = useRouter();

  const [inputVal, setInputVal] = useState(query);

  const articles = searchAllData(query);
  const q = query.trim().toLowerCase();

  const designers = q
    ? getAllDesigners().filter((d) => d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q) || d.discipline.toLowerCase().includes(q))
    : [];

  const products = q
    ? getAllProducts().filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.materials.toLowerCase().includes(q))
    : [];

  const projects = q
    ? getAllProjects().filter((p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.architect.toLowerCase().includes(q))
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputVal.trim())}`);
    }
  };

  return (
    <div className="bg-white">
      {/* Search Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Search Archive
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-navy tracking-tight mb-4">
            {query ? `Results for “${query}”` : 'Search Form & Field'}
          </h1>

          <form onSubmit={handleSearchSubmit} className="relative mt-4">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search stories, designers, materials, projects..."
              className="w-full pl-10 pr-28 py-3 bg-white border border-slate-300 text-sm rounded-xs focus:outline-hidden focus:border-navy"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider font-medium rounded-xs"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {!query ? (
          <div className="text-center py-12 text-slate-500">
            <p className="font-serif text-lg mb-2">Enter a query above to explore the archives.</p>
          </div>
        ) : articles.length === 0 && designers.length === 0 && products.length === 0 && projects.length === 0 ? (
          <div className="text-center py-16 text-slate-500 max-w-md mx-auto">
            <p className="font-serif text-xl text-navy mb-2">No matching items found</p>
            <p className="text-xs leading-relaxed mb-6">
              We couldn&apos;t find any stories, designers, or projects matching &ldquo;{query}&rdquo;. Check your spelling or try broader terms like &ldquo;timber&rdquo;, &ldquo;clay&rdquo;, or &ldquo;lighting&rdquo;.
            </p>
            <Link href="/" className="px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider">
              Browse Homepage
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Articles */}
            {articles.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-navy font-semibold pb-3 mb-6 border-b border-navy">
                  Editorial Stories ({articles.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((art) => (
                    <ArticleCard key={art.id} article={art} variant="medium" />
                  ))}
                </div>
              </div>
            )}

            {/* Designers */}
            {designers.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-navy font-semibold pb-3 mb-6 border-b border-navy">
                  Designers &amp; Studios ({designers.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {designers.map((d) => (
                    <Link
                      key={d.id}
                      href={`/designers/${d.id}`}
                      className="border border-slate-200 p-5 hover:border-navy transition-colors bg-white group"
                    >
                      <div className="text-xs text-slate-500">{d.city}, {d.country}</div>
                      <h4 className="font-serif text-lg text-navy group-hover:text-accent-blue font-medium mt-1">
                        {d.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{d.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products & Projects */}
            {(products.length > 0 || projects.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-navy font-semibold pb-3 mb-4 border-b border-navy">
                      Products ({products.length})
                    </h3>
                    <div className="space-y-3">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          href="/products"
                          className="block p-4 border border-slate-200 hover:border-navy transition-colors"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">{p.category}</span>
                          <h4 className="font-serif text-base text-navy">{p.title}</h4>
                          <p className="text-xs text-slate-500 font-mono mt-0.5">{p.materials}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {projects.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-navy font-semibold pb-3 mb-4 border-b border-navy">
                      Built Projects ({projects.length})
                    </h3>
                    <div className="space-y-3">
                      {projects.map((proj) => (
                        <Link
                          key={proj.id}
                          href="/projects"
                          className="block p-4 border border-slate-200 hover:border-navy transition-colors"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">{proj.location}</span>
                          <h4 className="font-serif text-base text-navy">{proj.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{proj.architect} · {proj.year}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <NewsletterBand />
    </div>
  );
}

export function SavedItemsPage() {
  const { state, toggleBookmark, toggleWishlist } = useAppState();

  const savedArticles = state.bookmarks
    .map((id) => getArticleById(id))
    .filter(Boolean);

  const wishlistedProducts = state.wishlist
    .map((id) => getAllProducts().find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Your Personal Library
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Saved Stories &amp; Wishlist
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Bookmarked editorial essays, monographic studies, and product specifications saved for your architectural practice.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Saved Stories */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-navy">
            <h2 className="text-xl font-serif text-navy flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-navy fill-navy" />
              <span>Saved Editorial Stories ({savedArticles.length})</span>
            </h2>
            <Link href="/" className="text-xs text-slate-500 hover:text-navy uppercase tracking-wider">
              Browse More Stories →
            </Link>
          </div>

          {savedArticles.length === 0 ? (
            <div className="p-10 border border-dashed border-slate-200 text-center text-slate-500">
              <p className="font-serif text-base mb-2">No saved stories yet</p>
              <p className="text-xs">Click the bookmark icon on any article to save it here for offline reading.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedArticles.map((art) => (
                <div key={art!.id} className="relative">
                  <ArticleCard article={art!} variant="medium" />
                  <button
                    onClick={() => toggleBookmark(art!.id, art!.title)}
                    className="mt-2 text-xs text-rose-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove from saved</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wishlisted Products */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-navy">
            <h2 className="text-xl font-serif text-navy flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span>Specification Wishlist ({wishlistedProducts.length})</span>
            </h2>
            <Link href="/products" className="text-xs text-slate-500 hover:text-navy uppercase tracking-wider">
              Explore Products Catalog →
            </Link>
          </div>

          {wishlistedProducts.length === 0 ? (
            <div className="p-10 border border-dashed border-slate-200 text-center text-slate-500">
              <p className="font-serif text-base mb-2">No products in your specification wishlist</p>
              <p className="text-xs">Click the heart icon on any product in the catalog to save it for project specification.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistedProducts.map((prod) => (
                <div key={prod!.id} className="border border-slate-200 p-4 bg-white">
                  <div className="aspect-[4/3] bg-slate-100 mb-3 overflow-hidden">
                    <img src={prod!.imageUrl} alt={prod!.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">{prod!.category}</span>
                  <h4 className="font-serif text-base text-navy leading-snug mt-0.5">{prod!.title}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-1">{prod!.materials}</p>
                  <button
                    onClick={() => toggleWishlist(prod!.id, prod!.title)}
                    className="mt-4 text-xs text-rose-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
