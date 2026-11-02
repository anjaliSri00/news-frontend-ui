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

  const trendsData = [
    { 
      article: blueArticle, 
      defaultCat: 'COLOUR FORECAST',
      image: blueArticle?.image || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    },
    { 
      article: luxuryArticle, 
      defaultCat: 'SPATIAL SHIFTS',
      image: luxuryArticle?.image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      article: imperfectArticle, 
      defaultCat: 'MATERIAL CULTURE',
      image: imperfectArticle?.image || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const threads = [
    { label: 'Adaptive reuse', href: '/category/projects' },
    { label: 'Quiet technology', href: '/category/design-tech' },
    { label: 'Circular materials', href: '/reports' },
    { label: 'New domestic rituals', href: '/category/home-decor' },
  ];

  return (
    <section className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        
        <SectionHeader
          kicker="Beyond the moodboard"
          title="Trends"
          viewAllHref="/category/trends"
          viewAllText="View all Trends"
        />

        {/* 3-Column Grid for Trends */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-6">
          {trendsData.map(({ article, defaultCat, image }, idx) => {
            if (!article) return null;

            return (
              <div key={idx} className="flex flex-col group cursor-pointer">
                
                {/* 1. Image Container (Fixed Aspect Ratio) */}
                <div className="aspect-[2/1] w-full overflow-hidden bg-slate-100 mb-5">
                  <img
                    src={image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 2. Category Tag */}
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0] mb-2">
                  {article.subCategory || defaultCat}
                </div>

                {/* 3. Title */}
                <h3 className="text-[26px] font-serif text-[#1a1a1a] group-hover:text-[#3B6BB0] transition-colors leading-tight mb-3">
                  <Link href={`/article/${article.id}`}>{article.title}</Link>
                </h3>

                {/* 4. Excerpt */}
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {article.deck}
                </p>

                {/* 5. Meta (Date & Read Time) */}
                <div className="mt-auto text-[13px] text-slate-400">
                  {article.date} · {article.readTime}
                </div>
              </div>
            );
          })}
        </div>

        {/* Follow the thread bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px]">
          <span className="font-sans uppercase tracking-[0.15em] text-slate-500 font-bold">
            Follow the thread
          </span>
          {threads.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="inline-flex items-center gap-1 text-[#3B6BB0] hover:text-[#1a1a1a] font-semibold transition-colors"
            >
              <span>{t.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}