"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllProducts } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Heart } from 'lucide-react';

export function ProductsSection() {
  const { toggleWishlist, state } = useAppState();
  const products = getAllProducts().slice(0, 4);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="New & noteworthy / Independently selected"
          title="Products"
          viewAllHref="/products"
          viewAllText="View all Products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => {
            const inWishlist = state.wishlist.includes(prod.id);

            return (
              <div key={prod.id} className="flex flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(prod.id, prod.title);
                    }}
                    aria-label="Add to wishlist"
                    className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 text-navy rounded-xs transition-colors shadow-2xs"
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
                  </button>
                </div>

                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {prod.category}
                </div>

                <h3 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5">
                  <Link href="/products">{prod.title}</Link>
                </h3>

                <p className="text-xs text-slate-500 mb-2 font-mono">
                  {prod.materials}
                </p>

                <div className="mt-auto text-[11px] text-slate-400">
                  {prod.dateAdded} · {prod.featureBadge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
