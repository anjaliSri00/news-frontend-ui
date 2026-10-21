"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';

export function FurnitureSection() {
  const sofa = getArticleById('modular-sofa-reconsidered');
  const chair = getArticleById('chair-carries-mark-of-maker');
  const table = getArticleById('what-makes-table-worth-keeping');

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Form, function, staying power"
          title="Furniture"
          viewAllHref="/category/furniture"
          viewAllText="View all Furniture"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sofa && (
            <div className="flex flex-col group">
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={sofa.imageUrl}
                  alt={sofa.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {sofa.subCategory || 'Design evolution'}
              </div>
              <h3 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${sofa.id}`}>{sofa.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {sofa.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {sofa.date} · {sofa.readTime}
              </div>
            </div>
          )}

          {chair && (
            <div className="flex flex-col group">
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={chair.imageUrl}
                  alt={chair.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {chair.subCategory || 'Made by hand'}
              </div>
              <h3 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${chair.id}`}>{chair.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {chair.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {chair.date} · {chair.readTime}
              </div>
            </div>
          )}

          {table && (
            <div className="flex flex-col group">
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                <img
                  src={table.imageUrl}
                  alt={table.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {table.subCategory || 'Design history'}
              </div>
              <h3 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${table.id}`}>{table.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {table.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {table.date} · {table.readTime}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
