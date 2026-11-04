"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import fetchApiResponse from '../../helper/api_data_store';
import { Loader2 } from 'lucide-react';

// Types for API Response
interface NewsItem {
  id: string;
  slug:string;
  title: string;
  excerpt: string;
  read_time: number;
  category: string[];
  news_type: string;
  featured_image_url: string;
  published_at: string | null;
  views: number;
}

export function TrendingSection() {
  const [trending, setTrending] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetchApiResponse<{ news: NewsItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?news_type=trending`
        );
        if (res.meta?.status === 200 && res.data?.news) {
          setTrending(res.data.news.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to load trending stories:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrending();
  }, []);

  if (isLoading) return <div className="py-12 flex justify-center"><Loader2 className="animate-spin text-navy" /></div>;
  if (trending.length === 0) return null;

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
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-lora text-3xl font-light text-[#2563EB] transition-colors tabular-nums">
                    {num}
                  </span>
                <div className='flex flex-col gap-1'>
 <span className="text-xs uppercase tracking-wider text-[#2563EB] font-inter font-bold">
                    {item.category?.[0] || 'TRENDS'}
                  </span>
                <h3 className="text-xl font-lora text-navy transition-colors leading-snug mb-2">
                  <Link href={`/article/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
<div className="text-xs text-slate-400 font-sans">
                  <span>{item.views ? `${item.views} reads` : '8.4k reads'}</span>
                  <span className="mx-1.5">·</span>
                  <span>{item.read_time} min</span>
                </div>
</div>
</div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}