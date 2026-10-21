import React from 'react';
import { getAllShowrooms } from '../../lib/services';
import { NewsletterBand } from '../shared/NewsletterBand';
import { MapPin, Clock, Tag } from 'lucide-react';

export function ShowroomsPage() {
  const showrooms = getAllShowrooms();

  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Retail as an architectural experience
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Showroom Showcase &amp; Material Libraries
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Flagships, design galleries and material archives that replace product rows with lived architectural scenarios.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {showrooms.map((showroom) => (
            <div
              key={showroom.id}
              className="border border-slate-200 hover:border-navy transition-colors bg-white flex flex-col overflow-hidden shadow-2xs group"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={showroom.imageUrl}
                  alt={showroom.headline}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {showroom.kicker}
                </div>

                <h3 className="font-serif text-2xl text-navy group-hover:text-accent-blue transition-colors mb-2 leading-snug">
                  {showroom.headline}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {showroom.description}
                </p>

                <div className="mt-auto space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-navy shrink-0" />
                    <span>{showroom.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-navy shrink-0" />
                    <span>{showroom.hours}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Tag className="w-3.5 h-3.5 text-navy shrink-0" />
                    <span>Featured Brands: {showroom.featuredBrands.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
