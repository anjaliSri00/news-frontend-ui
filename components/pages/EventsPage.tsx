// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { useAppState } from '../../lib/state/AppStateProvider';
// import { NewsletterBand } from '../shared/NewsletterBand';
// import { Calendar as CalendarIcon, List, MapPin, ArrowUpRight, CheckCircle2, Loader2, Search } from 'lucide-react';
// import fetchApiResponse from '../../helper/api_data_store';

// // --- Types ---
// export interface EventWebsitePayload {
//   id: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   start_date: string;
//   end_date: string;
//   venue: string;
//   city: string;
//   country: string;
//   registration_url: string;
//   article_url: string;
//   status: string;
//   featured_image?: string;
// }

// export interface EventsListResponse {
//   events: EventWebsitePayload[];
// }

// interface FormattedEvent extends EventWebsitePayload {
//   day: string;
//   month: string;
//   year: string;
//   fullDate: string;
//   dates: string;
//   location: string;
//   description: string;
//   actionText: string;
//   actionLink: string;
// }

// const EVENTS_API = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/internal-dashboard/events`;

// export default function EventsPage() {
//   const { state } = useAppState();

//   const [events, setEvents] = useState<FormattedEvent[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
//   const [filterCity, setFilterCity] = useState<string>('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Fetch Data
//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const response = await fetchApiResponse<EventsListResponse>(
//           `${EVENTS_API}?status=published`, 
//           { method: 'GET', headers: { 'Content-Type': 'application/json' } }
//         );

//         if (response.meta?.status === 200 && response.data?.events) {
//           const formatted = response.data.events.map((e) => {
//             const startDate = new Date(e.start_date);
//             const endDate = new Date(e.end_date || e.start_date);

//             const startDay = startDate.getDate().toString().padStart(2, '0');
//             const startMonth = startDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
//             const startYear = startDate.getFullYear();
//             const endDay = endDate.getDate().toString().padStart(2, '0');
//             const endMonth = endDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();

//             let datesStr = `${startDay} ${startMonth}`;
//             if (e.end_date && e.start_date !== e.end_date) {
//               if (startMonth !== endMonth) {
//                 datesStr = `${startDay} ${startMonth} – ${endDay} ${endMonth}`;
//               } else {
//                 datesStr = `${startDay} – ${endDay} ${startMonth}`;
//               }
//             }

//             return {
//               ...e,
//               day: startDay,
//               month: startMonth,
//               year: startYear.toString(),
//               fullDate: `${startDay} ${startMonth} ${startYear}`,
//               dates: datesStr,
//               location: e.venue,
//               description: e.excerpt || '',
//               actionLink: e.article_url || e.registration_url || '/events',
//               actionText: e.article_url ? 'Read Article' : e.registration_url ? 'Request Pass' : 'View Details',
//             };
//           });
//           setEvents(formatted);
//         }
//       } catch (err) {
//         console.error('Failed to fetch events:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchEvents();
//   }, []);

//   // Filter Logic
//   const cities = ['All', ...Array.from(new Set(events.map((e) => e.city).filter(Boolean)))];

//   const filtered = events.filter((e) => {
//     const matchesCity = filterCity === 'All' || e.city === filterCity;
//     const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           e.city.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCity && matchesSearch;
//   });

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <Loader2 className="w-8 h-8 animate-spin text-navy" />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* Hero Header */}
//       <section className="bg-white border-b border-slate-200 pt-16 pb-12">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
//           <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-3">
//             The International Design Calendar
//           </span>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-navy tracking-tight mb-4">
//             Design Fairs, Symposia &amp; Salons
//           </h1>
//           <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
//             Key gatherings across European, Asian, and Americas design capitals exploring materials, collective housing, and regenerative spatial practice.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 py-10">
        
//         {/* Controls Bar */}
//         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto">
//             {/* Search Bar */}
//             <div className="relative w-full sm:w-64">
//               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
//               <input 
//                 type="text"
//                 placeholder="Search events..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors bg-white"
//               />
//             </div>

//             {/* City Filter */}
//             <div className="flex items-center gap-2 w-full sm:w-auto">
//               <span className="text-xs uppercase tracking-wider text-slate-500 font-medium shrink-0">
//                 City:
//               </span>
//               <select
//                 value={filterCity}
//                 onChange={(e) => setFilterCity(e.target.value)}
//                 className="w-full sm:w-auto px-3 py-2 text-sm border border-slate-300 rounded-sm focus:outline-none focus:border-navy bg-white cursor-pointer"
//               >
//                 {cities.map((c) => (
//                   <option key={c} value={c}>{c}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* View Toggle */}
//           <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-sm border border-slate-200 shrink-0">
//             <button
//               onClick={() => setViewMode('list')}
//               className={`flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-sm font-semibold ${
//                 viewMode === 'list'
//                   ? 'bg-white text-navy shadow-sm'
//                   : 'text-slate-500 hover:text-navy'
//               }`}
//             >
//               <List className="w-4 h-4" />
//               <span>List</span>
//             </button>
//             <button
//               onClick={() => setViewMode('calendar')}
//               className={`flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-sm font-semibold ${
//                 viewMode === 'calendar'
//                   ? 'bg-white text-navy shadow-sm'
//                   : 'text-slate-500 hover:text-navy'
//               }`}
//             >
//               <CalendarIcon className="w-4 h-4" />
//               <span>Calendar</span>
//             </button>
//           </div>
//         </div>

//         {/* --- LIST VIEW --- */}
//         {viewMode === 'list' && (
//           <div className="space-y-4">
//             {filtered.length === 0 && (
//               <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
//                 <p className="text-slate-500 text-sm">No events found matching your criteria.</p>
//               </div>
//             )}
            
//             {filtered.map((event) => {
//               const isRegistered = state?.registeredEvents?.some(
//                 (r: { eventId: string }) => r.eventId === event.id
//               );

//               return (
//                 <div
//                   key={event.id}
//                   className="group bg-white border border-slate-200 hover:border-navy transition-all duration-300 flex flex-col md:flex-row items-stretch overflow-hidden shadow-sm hover:shadow-md rounded-sm"
//                 >
//                   {/* Left Side: Image (Optional, if exists) */}
//                   {event.featured_image && (
//                     <div className="w-full md:w-72 h-48 md:h-auto shrink-0 bg-slate-100 relative">
//                       <img 
//                         src={event.featured_image} 
//                         alt={event.title} 
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   )}

//                   {/* Middle: Content */}
//                   <div className="flex-1 p-6 flex flex-col justify-center">
//                     <div className="flex items-center gap-3 mb-2">
//                        {/* Date Block */}
//                       <div className="w-14 h-14 bg-navy text-white flex flex-col items-center justify-center shrink-0 rounded-sm">
//                         <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-200">
//                           {event.month}
//                         </span>
//                         <span className="text-xl font-serif font-bold leading-none tabular-nums mt-0.5">
//                           {event.day}
//                         </span>
//                       </div>
                      
//                       <div>
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue mb-1 block">
//                           {event.category}
//                         </span>
//                         <h3 className="text-xl md:text-2xl font-serif text-navy leading-snug group-hover:text-accent-blue transition-colors">
//                           {event.title}
//                         </h3>
//                       </div>
//                     </div>

//                     <p className="text-xs text-slate-500 font-medium mt-3 mb-2 flex items-center gap-1.5">
//                       <MapPin className="w-3.5 h-3.5 text-slate-400" />
//                       <span>{event.location}, {event.city}, {event.country} · {event.dates}</span>
//                     </p>
                    
//                     <p className="text-sm text-slate-600 leading-relaxed max-w-3xl line-clamp-2">
//                       {event.description}
//                     </p>
//                   </div>

//                   {/* Right Side: Action */}
//                   <div className="p-6 flex items-center justify-start md:justify-center border-t md:border-t-0 md:border-l border-slate-100 bg-slate-50/50 w-full md:w-48 shrink-0">
//                     {isRegistered ? (
//                       <div className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 rounded-sm w-full justify-center">
//                         <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//                         <span>Registered</span>
//                       </div>
//                     ) : (
//                       <a
//                         href={event.actionLink}
//                         target={event.actionLink.startsWith("http") ? "_blank" : "_self"}
//                         rel="noopener noreferrer"
//                         className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-navy hover:bg-navy text-navy hover:text-white text-xs uppercase tracking-wider font-bold rounded-sm transition-colors"
//                       >
//                         <span>{event.actionText}</span>
//                         <ArrowUpRight className="w-3.5 h-3.5" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* --- CALENDAR VIEW --- */}
//         {viewMode === 'calendar' && (
//           <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-sm shadow-sm">
//             <h3 className="font-serif text-3xl text-navy mb-8">
//               Upcoming Schedule
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
//               {Array.from(new Set(filtered.map(e => `${e.month} ${e.year}`))).map((monthKey) => {
//                 const monthEvents = filtered.filter((e) => `${e.month} ${e.year}` === monthKey);

//                 return (
//                   <div key={monthKey} className="relative">
//                     <div className="sticky top-0 bg-white z-10 text-sm uppercase tracking-widest text-navy font-bold pb-3 mb-4 border-b-2 border-navy/10">
//                       {monthKey}
//                     </div>

//                     <div className="space-y-6">
//                       {monthEvents.map((ev) => (
//                         <div key={ev.id} className="group relative pl-5">
//                           {/* Timeline dot */}
//                           <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-navy bg-white group-hover:bg-navy transition-colors" />
                          
//                           <span className="text-xs font-mono text-slate-500 font-bold block mb-1">
//                             {ev.dates}
//                           </span>
//                           <h4 className="font-serif text-navy text-lg font-medium group-hover:text-accent-blue leading-snug mb-1">
//                             {ev.title}
//                           </h4>
//                           <p className="text-xs text-slate-500 mb-2">
//                             {ev.city}, {ev.country}
//                           </p>
//                           <a
//                             href={ev.actionLink}
//                             target={ev.actionLink.startsWith("http") ? "_blank" : "_self"}
//                             className="inline-flex items-center text-[11px] uppercase tracking-wider text-navy hover:text-accent-blue font-semibold group/link"
//                           >
//                             {ev.actionText} 
//                             <ArrowUpRight className="w-3 h-3 ml-1 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
//                           </a>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>

//       <NewsletterBand />
//     </div>
//   );
// }


import React from 'react';
import fetchApiResponse from '@/helper/api_data_store';
import { EventItem } from '@/types/editorial';
import { EventFilters } from '@/components/events/EventFilters';
import { UpcomingEvents } from '@/components/events/UpcomingEvents';
import { PastEvents } from '@/components/events/PastEvents';
import { EventHero } from '../events/EventHero';

export default async function EventsPage() {
  let events: EventItem[] = [];

  try {
    const res = await fetchApiResponse<{ events: EventItem[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/events?limit=20`,
      { cache: 'no-store' }
    );
    if (res.meta?.status === 200 && res.data?.events) {
      events = res.data.events;
    }
  } catch (error) {
    console.error('Failed to load events:', error);
  }

  // Separate events based on date and layout
  const now = new Date();
  const featuredEvent = events.find(e => e.layout_type === 'banner') || events[0];
  const upcomingEvents = events.filter(e => new Date(e.start_date) >= now && e.id !== featuredEvent?.id);
  const pastEvents = events.filter(e => new Date(e.start_date) < now).slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* 1. Hero Section (Featured Banner) */}
      {featuredEvent && <EventHero event={featuredEvent} />}

      {/* 2. Filters */}
      <EventFilters />

      {/* 3. Upcoming Events List */}
      {upcomingEvents.length > 0 && <UpcomingEvents events={upcomingEvents} />}

      {/* 4. Past Events Grid */}
      {pastEvents.length > 0 && <PastEvents events={pastEvents} />}
    </div>
  );
}