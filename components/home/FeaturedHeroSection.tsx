"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { ArrowRight, Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';

// API Response Type (Strictly matching your JSON)
interface OverviewResponse {
  header: {
    badge: string;
    subtitle: string;
  };
  hero_left: {
    type: string;
    category: string;
    location?: string;
    image_url: string | null;
    title: string;
    excerpt: string;
    author: string;
    date: string | null;
    read_time: string;
    link: string;
  } | null;
  middle_grid: {
    type: string;
    category: string;
    image_url: string | null;
    title: string;
    date: string | null;
    read_time: string;
    link: string;
  }[];
  right_radar: {
    type: string;
    category: string;
    title: string;
    date: string | null;
    read_time: string;
    link: string;
  }[];
  editor_note: {
    quote: string;
    author_name: string;
  } | null;
}

export function FeaturedHeroSection() {
  const [data, setData] = useState<OverviewResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fallback for broken images
  const [imgErr, setImgErr] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchOverview() {
      try {
        const res = await fetchApiResponse<OverviewResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/overview`
        );
        
        if (res.meta?.status === 200 && res.data) {
          setData(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch overview data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOverview();
  }, []);

  // 🔥 FIX: Extract slug from link and append type
  const getArticleUrl = (link: string | undefined | null, type: string) => {
    if (!link) return "#";
    
    // Agar link /article/ se start hota hai (for safety)
    if (link.startsWith("/article/")) {
      return `${link}?type=${type}`;
    }

    // Extract the last part of the URL as slug
    // e.g. "/project/my-slug" -> "my-slug"
    const segments = link.split("/").filter(Boolean);
    const slug = segments[segments.length - 1];

    return `/article/${slug}?type=${type}`;
  };

  const formatType = (type: string) => {
    if (!type) return "";
    return type.replace(/_/g, " "); // "design_tech" -> "design tech"
  };

  if (isLoading) {
    return (
      <section className="pt-6 pb-12 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (!data) return null;

  const { header, hero_left, middle_grid, right_radar, editor_note } = data;

  return (
    <section className="pt-6 pb-12">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        
        {/* Header Section */}
        <div className="pb-3 mb-6 flex items-center justify-between text-xs uppercase tracking-widest font-inter">
          <span className='text-[#142B4A] font-bold'>
            {header.badge || 'Featured editorial stories'}
          </span>
          <span className="hidden sm:inline text-slate-500">
            {header.subtitle || 'Architecture. Interiors. A wider perspective.'}
          </span>
        </div>

        {/* 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Lead Hero Story (span 6) */}
          {hero_left && (
            <div className="lg:col-span-6 flex flex-col group">
              <Link 
                href={getArticleUrl(hero_left.link, hero_left.type)} 
                className="relative aspect-10/5 overflow-hidden bg-slate-100 mb-4 border border-slate-100 block"
              >
                {hero_left.image_url && !imgErr[hero_left.image_url] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={hero_left.image_url}
                    alt={hero_left.title}
                    onError={() => setImgErr((prev) => ({ ...prev, [hero_left.image_url!]: true }))}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 text-slate-400 font-lora italic text-center">
                    {hero_left.title}
                  </div>
                )}
              </Link>
              
              <div className="text-xs uppercase tracking-wider text-[#142B4A] font-inter mb-2 font-bold">
               {formatType(hero_left.type)}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-lora font-normal text-navy transition-colors leading-[1.18] mb-3">
                {/* 🔥 FIX: Using getArticleUrl instead of slug */}
                <Link href={getArticleUrl(hero_left.link, hero_left.type)}>
                  {hero_left.title}
                </Link>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
                {hero_left.excerpt}
              </p>
              <div className="mt-auto flex flex-col items-start justify-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span>By {hero_left.author}</span>
                  {hero_left.date && (
                    <>
                      <span>·</span>
                      <span>{hero_left.date}</span>
                    </>
                  )}
                  <span>·</span>
                  <span>{hero_left.read_time}</span>
                </div>
                <Link 
                  href={getArticleUrl(hero_left.link, hero_left.type)} 
                  className="inline-flex font-inter font-bold items-center gap-1 text-navy transition-colors hover:text-accent-blue"
                >
                  <span className="text-xs">Read the full story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Column 2: Middle Grid (span 3) */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-slate-200">
            {middle_grid?.map((article, idx) => (
              <div key={idx} className={`group ${idx !== 0 ? 'pt-6' : 'pb-6'}`}>
                {article.image_url && (
                  <Link 
                    href={getArticleUrl(article.link, article.type)}
                    className="relative aspect-10/5 overflow-hidden bg-slate-100 mb-3 border border-slate-100 block"
                  >
                    {!imgErr[article.image_url] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.image_url}
                        alt={article.title}
                        onError={() => setImgErr((prev) => ({ ...prev, [article.image_url!]: true }))}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : null}
                  </Link>
                )}
                <div className="text-xs uppercase tracking-wider text-[#142B4A] font-inter font-bold mb-1">
                  {formatType(article.type)}
                </div>
                <h3 className="text-[23px] font-lora text-navy transition-colors leading-snug mb-1.5 group-hover:text-accent-blue">
                  {/* 🔥 FIX: Using getArticleUrl instead of slug */}
                  <Link href={getArticleUrl(article.link, article.type)}>
                    {article.title}
                  </Link>
                </h3>
                <div className="text-xs text-slate-400">
                  {article.date && <span>{article.date}</span>}
                  {article.date && <span className="mx-1.5">·</span>}
                  <span>{article.read_time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Radar & Editor Note (span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div>
              <div className="text-2xl text-[#142B4A] font-normal pb-2 font-lora">
                On our radar
              </div>

              <div className="divide-y divide-slate-100">
                {right_radar?.map((radar, idx) => (
                  <div key={idx} className="py-3 group">
                    <span className="text-[11px] uppercase tracking-wider text-[#142B4A] font-bold font-inter block mb-0.5">
                      {formatType(radar.type)}
                    </span>
                    <h4 className="text-xl font-lora text-[#142B4A] transition-colors leading-snug group-hover:text-accent-blue">
                      {/* 🔥 FIX: Using getArticleUrl instead of link directly */}
                      <Link href={getArticleUrl(radar.link, radar.type)}>
                        {radar.title}
                      </Link>
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {radar.date && `${radar.date} · `} {radar.read_time}
                    </span>
                  </div>
                ))}
              </div>
            </div>       
            
            {/* Editor's Note */}
            {editor_note && (
              <div className="mt-6 pt-5 pb-4 px-4 bg-pale-blue">
                <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#142B4A] block mb-1.5">
                  A note from the editor
                </span>
                <p className="font-lora italic text-slate-body text-sm leading-relaxed mb-3">
                  &ldquo;{editor_note.quote}&rdquo;
                </p>
                <div className="text-xs text-[#142B4A] font-playfair italic font-medium">
                  {editor_note.author_name}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}