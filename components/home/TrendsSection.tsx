"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';
import { TrendItem } from '../../types/editorial';

export function TrendsSection() {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrends() {
      try {
        // Fetch top 3 trends from public API
        const res = await fetchApiResponse<{ trends: TrendItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/trends?limit=3`
        );
        if (res.meta?.status === 200 && res.data?.trends) {
          setTrends(res.data.trends);
        }
      } catch (err) {
        console.error('Failed to fetch trends:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrends();
  }, []);

  // Static threads (ya future me API se aayen)
  const threads = [
    { label: 'Adaptive reuse', href: '/category/projects' },
    { label: 'Quiet technology', href: '/category/design-tech' },
    { label: 'Circular materials', href: '/reports' },
    { label: 'New domestic rituals', href: '/category/home-decor' },
  ];

  // Format date helper
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Recent';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 bg-white flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (trends.length === 0) return null;

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
          {trends.map((trend) => (
            <div key={trend.id} className="flex flex-col group cursor-pointer">
              
              {/* 1. Image Container (Fixed Aspect Ratio) */}
              <div className="aspect-[2/1] w-full overflow-hidden bg-slate-100 mb-5">
                {trend.featured_image_url ? (
                  <img
                    src={trend.featured_image_url}
                    alt={trend.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>

              {/* 2. Category Tag (Uses trend_category) */}
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0] mb-2">
                {trend.trend_category || trend.category?.[0] || 'Trend'}
              </div>

              {/* 3. Title */}
              <h3 className="text-[26px] font-serif text-[#1a1a1a] group-hover:text-[#3B6BB0] transition-colors leading-tight mb-3">
                <Link href={`/article/${trend.slug}`}>{trend.title}</Link>
              </h3>

              {/* 4. Excerpt */}
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {trend.excerpt}
              </p>

              {/* 5. Meta (Date & Read Time) */}
              <div className="mt-auto text-[13px] text-slate-400">
                {formatDate(trend.published_at)} {trend.read_time ? `· ${trend.read_time} min read` : ''}
              </div>
            </div>
          ))}
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