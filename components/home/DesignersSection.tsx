"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "../../lib/router";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import fetchApiResponse from "../../helper/api_data_store";

// API Response Type
interface Designer {
  id: string;
  name: string;
  slug: string;
  excerpt: string;
  read_time: number;
  city: string;
  country: string;
  specialization: string;
  featured_image_url: string | null;
  avatar_url: string | null;
  layout_type: string;
}

export function DesignersSection() {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchDesigners() {
      try {
        const res = await fetchApiResponse<{ designers: Designer[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/designers?limit=6`
        );
        if (res.meta?.status === 200 && res.data?.designers) {
          setDesigners(res.data.designers);
        }
      } catch (err) {
        console.error("Failed to fetch designers:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDesigners();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F9FAFB] flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#3B6BB0]" />
      </section>
    );
  }

  if (designers.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-[#F9FAFB]">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8 md:mb-10">
          <div>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[#3B6BB0] block mb-1.5 md:mb-2">
              SECTION 04
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] text-[#1a1a1a] leading-none">
              Designers
            </h2>
          </div>
          <Link
            href="/category/designers"
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a] hover:text-[#3B6BB0] transition-colors flex items-center gap-1 pb-1"
          >
            VIEW ALL <span className="text-[14px] leading-none">→</span>
          </Link>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="relative group/scroll">
          
          <button 
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md border border-gray-200 rounded-full items-center justify-center text-gray-600 hover:text-[#3B6BB0] hover:scale-110 transition-all opacity-0 group-hover/scroll:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide pt-2"
          >
            {designers.map((designer) => {
              // Image fallback: featured_image_url ya avatar_url
              const imageUrl = designer.featured_image_url || designer.avatar_url || '';

              return (
                <div
                  key={designer.id}
                  className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[350px] bg-white p-5 md:p-6 flex flex-col group snap-start transition-all hover:shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 mb-4 md:mb-6">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={designer.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Specialization / Location Tag */}
                  <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B6BB0] mb-2 md:mb-3">
                    {designer.specialization || 'Designer'} • {designer.city}
                  </div>

                  {/* Name as Title (Link to Article) */}
                  <h3 className="text-[18px] md:text-[22px] font-serif text-[#1a1a1a] leading-[1.3] mb-2 md:mb-3 group-hover:text-[#3B6BB0] transition-colors line-clamp-2 md:line-clamp-3">
                    <Link href={`/designers/${designer.slug}`}>{designer.name}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {designer.excerpt}
                  </p>

                  {/* Read Time (Optional - placed at bottom) */}
                  <div className="mt-auto text-[11px] text-slate-400 font-medium">
                    {designer.read_time} min read
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md border border-gray-200 rounded-full items-center justify-center text-gray-600 hover:text-[#3B6BB0] hover:scale-110 transition-all opacity-0 group-hover/scroll:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}