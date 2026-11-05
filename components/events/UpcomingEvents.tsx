import React from 'react';
import { EventItem } from '@/types/editorial';

export function UpcomingEvents({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;

  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
            Upcoming Events ({events.length})
          </h4>
          <span className="text-[13px] text-gray-500">Showing chronological schedule</span>
        </div>

        <div className="flex flex-col gap-4">
          {events.map((event) => {
            const dateObj = new Date(event.start_date);
            const month = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
            const day = dateObj.getDate().toString().padStart(2, '0');

            return (
              <div key={event.id} className="bg-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:shadow-md border border-gray-100">
                
                <div className="flex items-center gap-6">
                  {/* Date Badge */}
                  <div className="bg-[#000615] text-white p-3 text-center min-w-[70px]">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-200">{month}</span>
                    <span className="block font-serif text-2xl">{day}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-gray-200 text-gray-600 font-bold">
                        {event.category?.[0] || 'Event'}
                      </span>
                      <span className="text-[13px] text-gray-500">• {event.city}, {event.country}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#000615] mb-1">{event.title}</h3>
                    <p className="text-[13px] text-gray-500">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                  {event.ticket_price && (
                    <span className="text-[13px] text-gray-500 hidden xl:inline">{event.ticket_price}</span>
                  )}
                  <a 
                    href={event.registration_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#000615] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#0b1f3a] transition-colors"
                  >
                    Register
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}