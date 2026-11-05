// "use client";

// import React from 'react';
// import { Link } from '../../lib/router';
// import { SectionHeader } from '../shared/SectionHeader';
// import { getArticleById } from '../../lib/services';

// export function FurnitureSection() {
//   const sofa = getArticleById('modular-sofa-reconsidered');
//   const chair = getArticleById('chair-carries-mark-of-maker');
//   const table = getArticleById('what-makes-table-worth-keeping');

//   return (
//     <section className="py-12 border-b border-slate-200">
//       <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
//         <SectionHeader
//           kicker="Form, function, staying power"
//           title="Furniture"
//           viewAllHref="/category/furniture"
//           viewAllText="View all Furniture"
//         />
//         <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
//           {sofa && (
//             <div className="flex-shrink-0 w-[85vw] sm:w-[330px] lg:w-[340px] bg-white hover:bg-[#F3F8FF] p-6 sm:p-8 flex flex-col group transition-shadow hover:shadow-md snap-start">
//               <div className="relative aspect-[10/12] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
//                 <img
//                   src={sofa.imageUrl}
//                   alt={sofa.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
//                 {sofa.subCategory || 'Design evolution'}
//               </div>
//               <h3 className="text-lg font-serif text-navy transition-colors leading-snug mb-2">
//                 <Link href={`/article/${sofa.id}`}>{sofa.title}</Link>
//               </h3>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
//                 {sofa.deck}
//               </p>
//               <div className="mt-auto text-xs text-slate-400">
//                 {sofa.date} · {sofa.readTime}
//               </div>
//             </div>
//           )}

//           {chair && (
//             <div className="shrink-0 w-[85vw] sm:w-82.5 lg:w-85 bg-white hover:bg-pale-blue p-6 sm:p-8 flex flex-col group transition-shadow hover:shadow-md snap-start">
//               <div className="relative aspect-10/12 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
//                 <img
//                   src={chair.imageUrl}
//                   alt={chair.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
//                 {chair.subCategory || 'Made by hand'}
//               </div>
//               <h3 className="text-lg font-serif text-navy transition-colors leading-snug mb-2">
//                 <Link href={`/article/${chair.id}`}>{chair.title}</Link>
//               </h3>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
//                 {chair.deck}
//               </p>
//               <div className="mt-auto text-xs text-slate-400">
//                 {chair.date} · {chair.readTime}
//               </div>
//             </div>
//           )}

//           {table && (
//             <div className="shrink-0 w-[85vw] sm:w-82.5 lg:w-85 bg-white hover:bg-pale-blue p-6 sm:p-8 flex flex-col group transition-shadow hover:shadow-md snap-start">
//               <div className="relative aspect-10/12 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
//                 <img
//                   src={table.imageUrl}
//                   alt={table.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
//                 {table.subCategory || 'Design history'}
//               </div>
//               <h3 className="text-lg font-serif text-navy transition-colors leading-snug mb-2">
//                 <Link href={`/article/${table.id}`}>{table.title}</Link>
//               </h3>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
//                 {table.deck}
//               </p>
//               <div className="mt-auto text-xs text-slate-400">
//                 {table.date} · {table.readTime}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';
import { FurnitureItem } from '../../types/editorial';

export function FurnitureSection() {
  const [items, setItems] = useState<FurnitureItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFurniture() {
      try {
        // API Call with limit to fetch top 3-4 items
        const res = await fetchApiResponse<{ furniture: FurnitureItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/furniture?limit=4`
        );
        if (res.meta?.status === 200 && res.data?.furniture) {
          setItems(res.data.furniture);
        }
      } catch (err) {
        console.error('Failed to fetch furniture articles:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFurniture();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Form, function, staying power"
          title="Furniture"
          viewAllHref="/category/furniture"
          viewAllText="View all Furniture"
        />
        
        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[85vw] sm:w-[330px] lg:w-[340px] bg-white hover:bg-[#F3F8FF] shadow p-6 sm:p-8 flex flex-col group transition-shadow hover:shadow-md snap-start"
            >
              {/* Image Container */}
              <div className="relative aspect-[10/12] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                {item.featured_image_url ? (
                  <img
                    src={item.featured_image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>
              
              {/* Category/Tag */}
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {item.category?.[0] || 'Design evolution'}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-serif text-navy transition-colors leading-snug mb-2 line-clamp-2">
                <Link href={`/article/${item.slug}`}>{item.title}</Link>
              </h3>
              
              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              
              {/* Read Time */}
              <div className="mt-auto text-xs text-slate-400">
                {item.read_time} min read
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}