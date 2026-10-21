"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';
import { ArrowUpRight } from 'lucide-react';

export function TrendsSection() {
  const blueArticle = getArticleById('blue-is-back-depth');
  const luxuryArticle = getArticleById('new-luxury-room-with-purpose');
  const imperfectArticle = getArticleById('imperfect-finishes-considered-spaces');

  const threads = [
    { label: 'Adaptive reuse', href: '/category/projects' },
    { label: 'Quiet technology', href: '/category/design-tech' },
    { label: 'Circular materials', href: '/reports' },
    { label: 'New domestic rituals', href: '/category/home-decor' },
  ];

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Beyond the moodboard"
          title="Trends"
          viewAllHref="/category/trends"
          viewAllText="View all Trends"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {blueArticle && (
            <div className="flex flex-col group">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {blueArticle.subCategory || 'Colour forecast'}
              </div>
              <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${blueArticle.id}`}>{blueArticle.title}</Link>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {blueArticle.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {blueArticle.date} · {blueArticle.readTime}
              </div>
            </div>
          )}

          {luxuryArticle && (
            <div className="flex flex-col group">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {luxuryArticle.subCategory || 'Spatial shifts'}
              </div>
              <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${luxuryArticle.id}`}>{luxuryArticle.title}</Link>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {luxuryArticle.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {luxuryArticle.date} · {luxuryArticle.readTime}
              </div>
            </div>
          )}

          {imperfectArticle && (
            <div className="flex flex-col group">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {imperfectArticle.subCategory || 'Material culture'}
              </div>
              <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${imperfectArticle.id}`}>{imperfectArticle.title}</Link>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {imperfectArticle.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {imperfectArticle.date} · {imperfectArticle.readTime}
              </div>
            </div>
          )}
        </div>

        {/* Follow the thread bar matching screenshot */}
        <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <span className="font-sans uppercase tracking-widest text-slate-400 font-semibold">
            Follow the thread
          </span>
          {threads.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-navy font-medium transition-colors"
            >
              <span>{t.label}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
