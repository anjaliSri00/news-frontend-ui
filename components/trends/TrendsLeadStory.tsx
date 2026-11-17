import React from 'react';
import { Link } from '@/lib/router';
import { TrendItem } from '@/types/editorial';

export function TrendsLeadStory({ trend }: { trend: TrendItem }) {
  return (
    <section className="w-full px-6 py-8 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <article className="lg:col-span-7 bg-white flex flex-col group cursor-pointer transition-colors">
          
          <Link href={`/trends/${trend.slug}`} className="relative overflow-hidden w-full aspect-[16/10] block">
            {trend.featured_image_url && (
              <img
                src={trend.featured_image_url}
                alt={trend.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute top-4 left-4 bg-[#000615] text-white text-[12px] uppercase px-3 py-1.5 tracking-widest font-medium">
              Featured Dossier
            </div>
          </Link>

          <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
            <div className="space-y-3">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#8C3F2E] font-semibold block">
                {trend.trend_category || 'Colour Forecast'} •
                 {/* {trend.season || 'Pigment Inquiry'} */}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#000615] tracking-tight leading-tight group-hover:text-[#8C3F2E] transition-colors">
                <Link href={`/trends/${trend.slug}`}>{trend.title}</Link>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed line-clamp-3">
                {trend.excerpt}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}