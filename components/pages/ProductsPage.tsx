'use client';

import React, { useState } from 'react';
import { getAllProducts } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Heart, ArrowUpDown } from 'lucide-react';

export function ProductsPage() {
  const products = getAllProducts();
  const { toggleWishlist, state } = useAppState();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'category'>('featured');

  const categories = ['All', 'Lighting', 'Surfaces', 'Bath', 'Hardware', 'Seating', 'Textiles'];

  const filtered = products
    .filter((p) => {
      if (activeCategory === 'All') return true;
      return p.category === activeCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            New &amp; noteworthy / Independently selected
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Products &amp; Material Specifications
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Independently audited luminaires, reclaimed mineral surfaces, water-saving bath fittings, and precision hardware designed for architectural durability.
          </p>
        </div>
      </section>

      {/* Filter and Sort bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium mr-1">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors rounded-xs ${
                  activeCategory === cat
                    ? 'bg-navy text-white font-medium'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-300 py-1 px-2.5 rounded-xs text-xs focus:outline-hidden focus:border-navy"
            >
              <option value="featured">Editorial Selection</option>
              <option value="name">Product Name (A–Z)</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {filtered.map((prod) => {
            const inWishlist = state.wishlist.includes(prod.id);

            return (
              <div
                key={prod.id}
                className="group flex flex-col bg-white border border-slate-200 hover:border-navy transition-colors overflow-hidden shadow-2xs"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <button
                    onClick={() => toggleWishlist(prod.id, prod.title)}
                    aria-label="Toggle wishlist"
                    className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 text-navy rounded-xs transition-colors shadow-2xs"
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                    <span className="uppercase tracking-wider">{prod.category}</span>
                    {prod.price && <span className="font-mono text-navy font-semibold">{prod.price}</span>}
                  </div>

                  <h3 className="font-serif text-base text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1">
                    {prod.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-mono mb-2">
                    {prod.materials}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {prod.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{prod.designer}</span>
                    <span>{prod.featureBadge}</span>
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
