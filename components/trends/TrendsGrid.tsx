import React from 'react';
import { Link } from '@/lib/router';
import { TrendItem } from '@/types/editorial';

export function TrendsGrid({ trends }: { trends: TrendItem[] }) {
  if (trends.length === 0) return null;

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between pb-6">
          <div>
            <span className="text-[12px] tracking-[0.2em] text-[#8C3F2E] uppercase font-semibold">Field Investigations</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#000615] uppercase tracking-tight mt-1">
              Curatorial Dossiers & Reports
            </h2>
          </div>
          <span className="text-[12px] text-gray-500 tracking-widest uppercase">
            Showing {trends.length} of {trends.length} Documented Shifts
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <article key={trend.id} className="flex flex-col group cursor-pointer">
              <Link href={`/trends/${trend.slug}`} className="aspect-[4/3] w-full overflow-hidden bg-[#F9F8F6] mb-4 block">
                {trend.featured_image_url ? (
                  <img
                    src={trend.featured_image_url}
                    alt={trend.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
              </Link>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[12px] text-[#8C3F2E] uppercase tracking-wider font-semibold">
                  <span>{trend.trend_category || 'Materiality'}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 font-normal">{trend.category?.[0] || 'Forecast'}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#000615] leading-snug group-hover:text-[#8C3F2E] transition-colors">
                  <Link href={`/trends/${trend.slug}`}>{trend.title}</Link>
                </h3>
                <p className="text-[15px] text-gray-500 font-light line-clamp-2">
                  {trend.excerpt}
                </p>
                <div className="pt-3 flex items-center justify-between text-[13px] text-gray-500">
                  <span>Editorial Desk •
                     {/* {trend.year || '2026'} */}
                     </span>
                  <span className="text-[12px] tracking-wider uppercase text-[#000615] font-semibold">{trend.read_time || 6} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}