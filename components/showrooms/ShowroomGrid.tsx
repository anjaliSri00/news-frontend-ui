import React from 'react';
import { Link } from '@/lib/router';
import { ShowroomItem } from '@/types/editorial';

export function ShowroomGrid({ showrooms }: { showrooms: ShowroomItem[] }) {
  if (showrooms.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 w-full pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {showrooms.map((room) => (
          <Link 
            key={room.id} 
            href={`/showroom-showcase/${room.slug}`}
            className="flex flex-col group cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-80 overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[1.02] bg-gray-100 relative">
              {room.featured_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={room.featured_image_url} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              )}
            </div>

            {/* City & Brand */}
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                {/* 👇 City null handle kiya, warna 'Location' dikhega */}
                {room.city || 'Location'}
              </span>
              <span className="text-[11px] font-semibold text-[#8C3F2E] uppercase text-right">
                {/* 👇 'type' nahi hai API me, isliye 'brand' use kiya */}
                {room.brand || 'Showroom'}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl text-[#000615] group-hover:text-[#8C3F2E] transition-colors mb-2 line-clamp-2">
              {room.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {room.excerpt}
            </p>
          </Link>
        ))}

      </div>
    </section>
  );
}