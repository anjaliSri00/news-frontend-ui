import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { EventItem } from '@/types/editorial';

export function EventBanner({ event }: { event: EventItem }) {
  if (!event) return null;

  // Format dates
  const start = new Date(event.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const end = event.end_date ? new Date(event.end_date).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' }) : '';

  return (
    <section className="w-full px-6 pt-8 pb-12">
      <div className="relative w-full overflow-hidden bg-[#000615] text-white min-h-[500px] flex flex-col justify-between p-8 md:p-12 shadow-xl">
        
        {/* Background Image */}
        {/* {event.featured_image_url && (
          <> */}
            <div 
              className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity bg-cover bg-center" 
            //   style={{ backgroundImage: `url(${event.featured_image_url})` }} 
            style={{backgroundImage:`url(${"https://lh3.googleusercontent.com/aida-public/AB6AXuAuG8eE3iooExHvunb0Pq82vneYH9YWJqiOTz32PND1UZ7v-FS8fVqWH_YdTldEKK9us3_IlLdmjKdN5OKQDZS1ObY5LYNQqbuvNRKUCVKRZIQ3m4TXy1IttRogc_oTpQs2MyaUaLUoujqAizSZbuk_Xs81vYsgfGlZ13i_3zlqGO1qXdXDoXRv3kbN8TQkQeYopFKz4GD9A3sd44b3eU3_itGwcLImKxdiRlA3NG0tFiDm8WVxKwT3"})`}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000615] via-[#000615]/50 to-transparent z-0" />
          {/* </>
        )} */}

        {/* Top Bar */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-200" fill="currentColor" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">Featured Global Event</span>
          </div>
          <div className="flex items-center gap-2 border border-white/20 px-3 py-1.5 bg-white/10 backdrop-blur-md">
            <Calendar className="w-4 h-4" />
            <span className="text-[11px] font-bold text-white">{start} {end && `— ${end}`}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mt-16 md:mt-24">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200 block mb-2">
            {event.city}, {event.country}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            {event.title}
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mb-8 font-light leading-relaxed">
            {event.excerpt}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#000615] text-white border border-blue-200 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-blue-200 hover:text-[#000615] transition-all">
              Register for {event.title.split(':')[0]}
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#000615] transition-all">
              Download Press Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}