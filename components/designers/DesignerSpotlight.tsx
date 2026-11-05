import React from 'react';
import { Link } from '@/lib/router';
import { Designer } from '@/types/editorial';

export function DesignerSpotlight({ designer }: { designer: Designer }) {
  const image = designer.featured_image_url || designer.avatar_url;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Spotlight Profile</span>
        <span className="text-sm text-gray-500">Interview Series Vol. XII</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F9F8F6] p-8 md:p-12">
        
        {/* Left Image */}
        <div className="lg:col-span-5 h-[500px] relative overflow-hidden bg-gray-200">
          {image && (
            <img src={image} alt={designer.name} className="w-full h-full object-cover" />
          )}
          <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Featured Visionary
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2 text-xs font-semibold text-gray-500 uppercase">
            <span>{designer.city} & {designer.country}</span>
            <span>•</span>
            <span>{designer.specialization}</span>
          </div>

          <h2 className="font-serif text-4xl text-primary mb-6">{designer.name}</h2>

          <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">
           {` "${designer.excerpt}"`}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-gray-200">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase block mb-1">Specialty</span>
              <span className="text-base font-bold text-primary">{designer.specialization}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase block mb-1">Location</span>
              <span className="text-base font-bold text-primary">{designer.city}</span>
            </div>
          </div>

          <div>
            <Link 
              href={`/designers/${designer.slug}`}
              className="inline-block px-8 py-3 bg-primary text-white text-xs font-semibold uppercase tracking-widest border border-primary hover:bg-transparent hover:text-primary transition-colors"
            >
              Read Full Monograph
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}