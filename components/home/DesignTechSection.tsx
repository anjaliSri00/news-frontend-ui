"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowRight, Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';

interface DesignTechItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  read_time: number;
  category: string[];
  featured_image_url: string | null;
  layout_type: 'featured' | 'card' | 'compact';
  extra?: {
    checklistTitle?: string;
    checklistDesc?: string;
    checklistItems?: string[];
    buttonText?: string;
    buttonUrl?: string;
  };
}

export function DesignTechSection() {
  const [articles, setArticles] = useState<DesignTechItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDesignTech() {
      try {
        const res = await fetchApiResponse<{ design_tech: DesignTechItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/design-tech`
        );
        if (res.meta?.status === 200 && res.data?.design_tech) {
          setArticles(res.data.design_tech);
        }
      } catch (err) {
        console.error('Failed to fetch design tech articles:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDesignTech();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F3F8FF] flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (articles.length === 0) return null;

  // 🔥 LAYOUT LOGIC: Type ke hisaab se data filter karo
  const featuredArticle = articles.find(a => a.layout_type === 'featured');
  const cardArticles = articles.filter(a => a.layout_type === 'card').slice(0, 2); // Max 2 cards
  const compactArticle = articles.find(a => a.layout_type === 'compact'); // Right side box

  return (
    <section className="py-12 bg-[#F3F8FF]">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Intelligence, without intrusion"
          title="Design Tech / Technology Hub"
          viewAllHref="/category/design-tech"
          viewAllText="View all Design Tech"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-10">
          
          {/* 1. LEFT: Featured Article */}
          {featuredArticle ? (
            <div className="lg:col-span-4 flex flex-col group">
              <div className="relative aspect-[6/2.5] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {featuredArticle.featured_image_url && (
                  <img
                    src={featuredArticle.featured_image_url}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {featuredArticle.category?.[0] || 'Smart interiors'}
              </div>
              <h3 className="text-2xl font-serif text-navy transition-colors leading-snug mb-2">
                <Link href={`/article/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {featuredArticle.read_time} min read
              </div>
            </div>
          ) : (
             <div className="lg:col-span-4 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm min-h-[300px]">
               Left Featured Slot (No Data)
             </div>
          )}

          {/* 2. MIDDLE: 2 Cards Stack */}
          <div className="lg:col-span-4 flex flex-col justify-start divide-slate-200">
            {cardArticles.length > 0 ? (
              cardArticles.map((article, idx) => (
                <div key={article.id} className={`${idx !== 0 ? 'pt-6 border-t border-slate-200' : ''} pb-6 group`}>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                    {article.category?.[0] || 'AI in design'}
                  </div>
                  <h4 className="text-xl font-serif text-navy transition-colors leading-snug mb-2">
                    <Link href={`/article/${article.slug}`}>{article.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="text-xs text-slate-400">
                    {article.read_time} min read
                  </div>
                </div>
              ))
            ) : (
              <div className="text-slate-400 text-sm italic p-4">No middle cards available</div>
            )}
          </div>

          {/* 3. RIGHT: Practical Brief (Compact Box) */}
          <div className="lg:col-span-3 h-auto bg-white border border-slate-200 p-6 flex flex-col justify-start shadow-sm rounded-sm">
            {compactArticle ? (
              <>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#3B6BB0] font-bold block mb-3">
                    THE PRACTICAL BRIEF
                  </span>
                  
                  <h3 className="text-[22px] font-serif text-[#0b1f3a] mb-3 leading-snug">
                    {compactArticle.extra?.checklistTitle || "Before you specify a smart home"}
                  </h3>
                  
                  <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                    {compactArticle.extra?.checklistDesc || "Four questions to ask before adding another connected device:"}
                  </p>
                  
                  <ol className="space-y-3 text-[13px] text-slate-700">
                    {(compactArticle.extra?.checklistItems || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-[#3B6BB0] mt-0.5 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="pt-5 border-t border-slate-200 mt-6">
                  <Link 
                    href={compactArticle.extra?.buttonUrl || "/category/design-tech"} 
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#3B6BB0] hover:text-accent-blue transition-colors"
                  >
                    <span>{compactArticle.extra?.buttonText || "Read the checklist"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-slate-400 text-sm italic">No compact box available</div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}