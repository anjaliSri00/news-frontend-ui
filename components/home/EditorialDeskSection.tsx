"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById, getDesignerById } from '../../lib/services';
import { ArrowUpRight } from 'lucide-react';

export function EditorialDeskSection() {
  const iconic = getArticleById('dont-need-iconic-buildings');
  const feedCost = getArticleById('hidden-cost-designing-for-feed');
  const cityHome = getArticleById('who-gets-to-feel-at-home-in-city');

  const amara = getDesignerById('amara-okafor');
  const noah = getDesignerById('noah-haddad');

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Editorial Desk (span 7) */}
          <div className="lg:col-span-7">
            <SectionHeader
              kicker="Ideas with a point of view"
              title="Editorial Desk"
              viewAllHref="/category/trends"
              viewAllText="View all editorials"
            />
            {iconic && (
              <div className="pb-8 mb-6 border-b border-slate-200 group">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {iconic.subCategory || 'The editor’s column'}
                </div>
                <h3 className="text-2xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-3">
                  <Link href={`/article/${iconic.id}`}>{iconic.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {iconic.deck}
                </p>
                <div className="text-xs text-slate-500 font-sans">
                  <span className="font-medium text-navy">{iconic.author.name}</span>, {iconic.author.role} · {iconic.date} · {iconic.readTime}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {feedCost && (
                <div className="group">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                    {feedCost.subCategory}
                  </div>
                  <h4 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                    <Link href={`/article/${feedCost.id}`}>{feedCost.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400">
                    {feedCost.author.name} · {feedCost.date} · {feedCost.readTime}
                  </div>
                </div>
              )}
              {cityHome && (
                <div className="group">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                    {cityHome.subCategory}
                  </div>
                  <h4 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                    <Link href={`/article/${cityHome.id}`}>{cityHome.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400">
                    {cityHome.author.name} · {cityHome.date} · {cityHome.readTime}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Right Column: Designer Interviews (span 5) */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="text-2xl md:text-3xl font-serif text-navy font-normal">
                Designer Interviews
              </h2>
              <Link
                href="/designers"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-slate-600 hover:text-navy transition-colors"
              >
                <span>View all interviews</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="divide-y divide-slate-200">
              {amara && (
                <div className="pb-6 first:pt-0 group flex gap-4 items-start">
                  <div className="w-20 h-24 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                    <img
                      src={amara.imageUrl}
                      alt={amara.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-navy">{amara.name}</h4>
                    <p className="text-xs text-slate-500 mb-1.5">{amara.discipline} / {amara.city}</p>
                    <p className="font-serif italic text-navy text-sm leading-snug mb-2 group-hover:text-accent-blue transition-colors">
                      <Link href={`/designers/${amara.id}`}>&ldquo;{amara.quote}&rdquo;</Link>
                    </p>
                    <div className="text-xs text-slate-400">
                      Interview by Clara Voss · 13 Oct 2026 · 7 min read
                    </div>
                  </div>
                </div>
              )}
              {noah && (
                <div className="pt-6 group flex gap-4 items-start">
                  <div className="w-20 h-24 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                    <img
                      src={noah.imageUrl}
                      alt={noah.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-navy">{noah.name}</h4>
                    <p className="text-xs text-slate-500 mb-1.5">{noah.discipline} / {noah.city}</p>
                    <p className="font-serif italic text-navy text-sm leading-snug mb-2 group-hover:text-accent-blue transition-colors">
                      <Link href={`/designers/${noah.id}`}>&ldquo;{noah.quote}&rdquo;</Link>
                    </p>
                    <div className="text-xs text-slate-400">
                      Interview by Sofia Reyes · 12 Oct 2026 · 8 min read
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}