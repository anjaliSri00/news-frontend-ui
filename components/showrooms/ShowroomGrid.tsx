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
            href={`/showroom/${room.slug}`}
            className="flex flex-col group cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-80 overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[1.02] bg-gray-100">
              {room.featured_image_url && (
                <img 
                  src={room.featured_image_url} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* City & Type */}
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                {room.city}
              </span>
              <span className="text-[11px] font-semibold text-[#8C3F2E] uppercase">
                {room.type || 'Showroom'}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl text-[#000615] group-hover:text-[#8C3F2E] transition-colors mb-2">
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