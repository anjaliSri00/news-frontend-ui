'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  read_time: number;
  category: string[];
  featured_image_url: string;
  published_at: string | null;
  layout_type: 'card' | 'featured' | 'compact'; // 👈 Added
}

export function LatestNewsSection() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetchApiResponse<{ news: NewsItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?news_type=latest`
        );
        if (res.meta?.status === 200 && res.data?.news) {
          setArticles(res.data.news);
        }
      } catch (err) {
        console.error('Failed to load latest news:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatest();
  }, []);

  if (isLoading) return <div className="py-12 flex justify-center"><Loader2 className="animate-spin text-navy" /></div>;
  if (articles.length === 0) return null;

  // 🔥 LAYOUT LOGIC: Featured article ko dhundo
  const featuredArticle = articles.find(a => a.layout_type === 'featured') || articles[0];
  
  // Baaki articles jo featured nahi hain
  const sideArticles = articles
    .filter(a => a.id !== featuredArticle?.id)
    .slice(0, 4);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Recent';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="The daily dispatch"
          title="Latest News"
          viewAllHref="/category/latest-news"
          viewAllText="View all news"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT lead feature */}
          {featuredArticle && (
            <div className="lg:col-span-5 flex flex-col group">
              <div className="relative w-full aspect-8/4 overflow-hidden bg-slate-100 mb-5">
                <img
                  src={featuredArticle.featured_image_url}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="text-[11px] uppercase tracking-[0.14em] text-accent-blue mb-2 font-semibold">
                {featuredArticle.category?.[0] || 'News'}
              </div>

              <h3 className="text-2xl sm:text-3xl font-lora text-navy leading-snug mb-3">
                {/* 👈 Fixed: slug use karo, id nahi */}
                <Link href={`/article/${featuredArticle.slug}`} className="hover:text-accent-blue transition-colors">
                  {featuredArticle.title}
                </Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-3 text-xs text-slate-500">
                By Editorial Desk · {formatDate(featuredArticle.published_at)} · {featuredArticle.read_time} min read
              </div>
            </div>
          )}

          {/* RIGHT 2×2 grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {sideArticles.map((article, idx) => {
                const isLastRow = idx >= 2;
                const isRightCol = idx % 2 === 1;

                return (
                  <div
                    key={article.id}
                    className={[
                      'group',
                      !isLastRow ? 'border-b border-slate-200' : '',
                      isRightCol ? 'sm:border-l sm:border-slate-200' : '',
                      'pb-6 sm:pb-7',
                      isLastRow ? 'pt-6 sm:pt-7' : '',
                      isRightCol ? 'sm:pl-6 lg:pl-7' : '',
                      !isRightCol ? 'sm:pr-6 lg:pr-7' : '',
                    ].filter(Boolean).join(' ')}
                  >
                    <Link href={`/article/${article.slug}`} className="flex gap-4 items-start">
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className='flex'>
                          <div className="relative w-27.5 sm:w-30 aspect-4/3 shrink-0 overflow-hidden bg-slate-100">
                            <img
                              src={article.featured_image_url}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                          <div className='flex flex-col py-2 px-4'>
                            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-accent-blue font-semibold mb-1.5">
                              {article.category?.[0] || 'News'}
                            </div>
                            <h4 className="text-base sm:text-lg font-lora text-navy leading-snug mb-2 transition-colors">
                              {article.title}
                            </h4>
                          </div>
                        </div>
                        <div className="mt-auto pt-2 w-full">
                          <p className="hidden sm:block text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5">
                            {article.excerpt}
                          </p>
                          <div className="text-[11px] uppercase tracking-wider text-slate-400 tabular-nums">
                            {formatDate(article.published_at)} · {article.read_time} min
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}