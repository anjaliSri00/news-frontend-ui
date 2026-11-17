"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';
import { ShowroomItem } from '../../types/editorial';

export function ShowroomSection() {
  const [showrooms, setShowrooms] = useState<ShowroomItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShowrooms() {
      try {
        // Fetch limit 3 (ya jo bhi dashboard se set hai)
        const res = await fetchApiResponse<{ showrooms: ShowroomItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/showrooms?limit=3`
        );
        if (res.meta?.status === 200 && res.data?.showrooms) {
          setShowrooms(res.data.showrooms);
        }
      } catch (err) {
        console.error('Failed to fetch showrooms:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchShowrooms();
  }, []);

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return 'Recent';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (showrooms.length === 0) return null;

  // Data split
  const firstShowroom = showrooms[0];
  const secondShowroom = showrooms[1];
  const thirdShowroom = showrooms[2];

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Retail as an architectural experience"
          title="Showroom Showcase"
          viewAllHref="/showroom-showcase"
          viewAllText="View all Showrooms"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* 1. First Showroom (Left) */}
          {firstShowroom && (
            <div className="flex flex-col group">
              <div className="relative aspect-20/10 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                {firstShowroom.featured_image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={firstShowroom.featured_image_url}
                    alt={firstShowroom.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {/* 👇 Fix: Agar city null hai to sirf brand dikhao */}
                {firstShowroom.city ? `${firstShowroom.city} / ` : ''}
                {firstShowroom.brand || 'Showroom'}
              </div>
              <h3 className="text-[26px] font-serif text-navy transition-colors leading-snug mb-2">
                <Link href={`/showroom-showcase/${firstShowroom.slug}`}>{firstShowroom.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                {firstShowroom.excerpt}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {formatDate(firstShowroom.published_at)} · {firstShowroom.read_time || 5} min read
              </div>
            </div>
          )}

          {/* 2. Second Showroom (Right) */}
          {secondShowroom && (
            <div className="flex flex-col group">
              <div className="relative aspect-20/10 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                {secondShowroom.featured_image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={secondShowroom.featured_image_url}
                    alt={secondShowroom.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {/* 👇 Fix: Agar city null hai to sirf brand dikhao */}
                {secondShowroom.city ? `${secondShowroom.city} / ` : ''}
                {secondShowroom.brand || 'Showroom'}
              </div>
              <h3 className="text-[26px] font-serif text-navy transition-colors leading-snug mb-2">
                <Link href={`/showroom-showcase/${secondShowroom.slug}`}>{secondShowroom.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                {secondShowroom.excerpt}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {formatDate(secondShowroom.published_at)} · {secondShowroom.read_time || 6} min read
              </div>
            </div>
          )}
        </div>

        {/* 3. Third Showroom (Bottom Strip) */}
        {thirdShowroom && (
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans uppercase tracking-widest text-slate-500 font-semibold">
                Also on our map:
              </span>
              <Link href={`/showroom-showcase/${thirdShowroom.slug}`} className="text-navy hover:text-accent-blue font-serif text-sm">
                {thirdShowroom.title}
              </Link>
            </div>
            <div className="text-slate-400 shrink-0">
              {formatDate(thirdShowroom.published_at || null)} · {thirdShowroom.read_time || 3} min read
            </div>
          </div>
        )}
      </div>
    </section>
  );
}