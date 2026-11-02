"use client";

import React, { useRef } from "react";
import { Link } from "../../lib/router";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Make sure you have lucide-react

// MOCK DATA (6 Designers for testing)
const mockDesigners = [
  {
    id: "1",
    category: "STUDIO PROFILE",
    title: "Studiolise: Human-Centric Spaces for Living",
    excerpt: "An in-depth conversation on sensory design, emotional connection, and material honesty in public and private commissions.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    category: "ATELIER VISIT",
    title: "Pierre Yovanovitch: Sculptural Proportion",
    excerpt: "Inside the Paris atelier where bespoke wooden furniture and playful architectural curves take form.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    category: "VISIONARY",
    title: "Tatiana Bilbao on Socially Engaged Architecture",
    excerpt: "Rethinking housing models and community infrastructure through sustainable local materials in Mexico.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    category: "MATERIAL CULTURE",
    title: "The Art of Imperfection in Modern Spaces",
    excerpt: "Why handcrafted finishes and organic textures are defining the new wave of luxury interiors.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    category: "DESIGN TECH",
    title: "Innovation meets Tradition in Digital Craft",
    excerpt: "How studios are using 3D printing and AI to reimagine historical architectural techniques.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    category: "URBAN LIVING",
    title: "Redefining Compact Living in Tokyo",
    excerpt: "A look inside micro-apartments that prioritize light, texture, and smart spatial layouts.",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  },
];

export function DesignersSection() {
  const designers = mockDesigners;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Logic for Desktop Buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#F9FAFB]">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header - Responsive */}
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
          
          {/* Desktop Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md border border-gray-200 rounded-full items-center justify-center text-gray-600 hover:text-[#3B6BB0] hover:scale-110 transition-all opacity-0 group-hover/scroll:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide pt-2"
          >
            {designers.map((designer) => (
              <div
                key={designer.id}
                // Width logic: 1 card on mobile, 2 on tablet, 3 on desktop, 3.5 on large desktop
                className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[350px] bg-white p-5 md:p-6 flex flex-col group snap-start transition-all hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 mb-4 md:mb-6">
                  <img
                    src={designer.imageUrl}
                    alt={designer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Category Tag */}
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B6BB0] mb-2 md:mb-3">
                  {designer.category}
                </div>

                {/* Title */}
                <h3 className="text-[18px] md:text-[22px] font-serif text-[#1a1a1a] leading-[1.3] mb-2 md:mb-3 group-hover:text-[#3B6BB0] transition-colors line-clamp-2 md:line-clamp-3">
                  <Link href={`/designers/${designer.id}`}>{designer.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed line-clamp-3">
                  {designer.excerpt}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md border border-gray-200 rounded-full items-center justify-center text-gray-600 hover:text-[#3B6BB0] hover:scale-110 transition-all opacity-0 group-hover/scroll:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}