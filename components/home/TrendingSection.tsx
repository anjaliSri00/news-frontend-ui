"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getTrendingArticles } from '../../lib/services';

export function TrendingSection() {
  const trending = getTrendingArticles().slice(0, 4);

  return (
    <section className="py-12 bg-pale-blue">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="What’s shaping the conversation"
          title="Trending Stories"
          viewAllHref="/category/trends"
          viewAllText="Explore trending"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trending.map((item, idx) => {
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div key={item.id} className="group relative flex flex-col pt-2">
                {/* Numbered kicker */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-lora text-3xl font-light text-[#142B4A] transition-colors tabular-nums">
                    {num}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#142B4A] font-inter font-bold">
                    {item.subCategory || item.categoryName}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-lora text-navy transition-colors leading-snug mb-3">
                  <Link href={`/article/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Metadata */}
                <div className="mt-auto text-xs text-slate-400 font-sans">
                  <span>{item.readCount || '8.4k reads'}</span>
                  <span className="mx-1.5">·</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
