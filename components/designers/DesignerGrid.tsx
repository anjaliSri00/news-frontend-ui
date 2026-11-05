import React from 'react';
import { Link } from '@/lib/router';
import { Designer } from '@/types/editorial';

export function DesignerGrid({ designers }: { designers: Designer[] }) {
  if (designers.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      <div className="flex justify-between items-center mb-10">
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Directory</span>
          <h2 className="font-serif text-4xl text-primary mt-2">The Visionaries</h2>
        </div>
        <span className="text-sm text-gray-500">Showing 1–{designers.length} designers</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designers.map((designer) => {
          const image = designer.featured_image_url || designer.avatar_url;

          return (
            <Link 
              key={designer.id} 
              href={`/designers/${designer.slug}`}
              className="bg-white flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="h-80 relative overflow-hidden bg-gray-100">
                {image ? (
                  <img 
                    src={image} 
                    alt={designer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 text-[10px] font-bold text-primary uppercase">
                  {designer.city}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-gray-500 uppercase mb-1">{designer.specialization}</span>
                <h3 className="font-serif text-2xl text-primary mb-2">{designer.name}</h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500 line-clamp-1">{designer.excerpt}</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-12 py-3 bg-primary text-white text-xs font-semibold uppercase tracking-widest border border-primary hover:bg-transparent hover:text-primary transition-colors">
          Load More Visionaries
        </button>
      </div>

    </section>
  );
}