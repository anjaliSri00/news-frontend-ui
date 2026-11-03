"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';

interface NewsItem {
  id: string;
  slug:string,
  title: string;
  excerpt: string;
  read_time: number;
  category: string[];
  featured_image_url: string;
  published_at: string | null;
}

export function SpecialReportsSection() {
  const [reports, setReports] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetchApiResponse<{ news: NewsItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?news_type=special`
        );
        if (res.meta?.status === 200 && res.data?.news) {
          setReports(res.data.news.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to load special reports:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReports();
  }, []);

  if (isLoading) return <div className="py-12 flex justify-center"><Loader2 className="animate-spin text-white" /></div>;
  if (reports.length === 0) return null;

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Recent';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <section className="bg-navy text-white py-14">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Original research / Deeper understanding"
          title="Special Reports"
          viewAllHref="/reports"
          viewAllText="View all reports"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reports.map((rep) => (
            <div key={rep.id} className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-light mb-4 border border-navy-light/60">
                <img
                  src={rep.featured_image_url}
                  alt={rep.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              <div className="text-xs uppercase tracking-wider text-blue-300 mb-1 font-medium font-sans">
                {rep.category?.[0] || 'Research'}
              </div>

              <h3 className="text-xl font-serif text-white group-hover:text-blue-300 transition-colors leading-snug mb-2">
                <Link href={`/article/${rep.slug}`}>{rep.title}</Link>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {rep.excerpt}
              </p>

              <div className="mt-auto text-xs text-slate-400 font-sans">
                Published {formatDate(rep.published_at)} · {rep.read_time} min read
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-navy-light text-center text-xs text-slate-400">
          Independent analysis from the Form &amp; Field research desk. Designed for architects, interior designers and the curious.
        </div>
      </div>
    </section>
  );
}