import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EventItem } from '@/types/editorial';

export function PastEvents({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;

  return (
    <section className="w-full px-6 py-12 bg-[#F9F8F6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Archive</span>
            <h3 className="font-serif text-2xl text-[#000615]">Past Events & Symposia</h3>
          </div>
          <span className="text-[13px] text-gray-500 hidden md:inline">Access recorded keynotes and session transcripts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-gray-100 mb-4 overflow-hidden">
                  {event.featured_image_url ? (
                    <img src={event.featured_image_url} alt={event.title} className="w-full h-full object-cover opacity-90" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                  )}
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  {event.city} • {new Date(event.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
                <h4 className="font-serif text-lg text-[#000615] mb-2">{event.title}</h4>
                <p className="text-[13px] text-gray-500 mb-4 line-clamp-2">{event.excerpt}</p>
              </div>
              <a href="#" className="text-[11px] font-bold text-[#000615] uppercase tracking-wider flex items-center gap-1 hover:text-gray-600">
                View Proceedings <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}