"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllEvents } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { ArrowUpRight } from 'lucide-react';

export function EventsSection() {
  const { openRegisterModal } = useAppState();
  const events = getAllEvents().filter((e) => e.isEditorSelection).slice(0, 3);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Category 02"
          title="Events & Biennials"
          viewAllHref="/events"
          viewAllText="View all Events"
        />
        <div className="grid grid-cols-1  gap-8 lg:gap-10 items-stretch">
          {/* Left editor's selection callout box (span 4) */}
          <div className="lg:col-span-4 hidden bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
                Our calendar / Editor&apos;s selection
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-navy leading-tight mb-4">
                Where design&apos;s next conversations begin
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                From material research symposia in Rotterdam to collectible design launches in Lisbon, our editors select the key gatherings shaping international spatial practice.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
              <span>Updated 14 Oct 2026</span>
              <span>Dates subject to change</span>
            </div>
          </div>
          {/* Right 3 events list with date blocks (span 8) */}
          <div className="divide-y divide-slate-200 flex flex-col justify-between">
            {events.map((event) => (
              <div
                key={event.id}
                className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                {/* Date block + info */}
                <div className="flex items-start gap-5">
                  {/* Calendar block */}
                  <div className="w-14 h-14 bg-white border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center shadow-2xs">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">
                      {event.month}
                    </span>
                    <span className="text-xl font-lora font-bold text-navy leading-none tabular-nums">
                      {event.day}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 mt-1">
                      {event.city}, {event.country} · {event.dates}
                    </p>
                    <h4 className="text-2xl font-lora text-navy transition-colors leading-snug">
                      <Link href={`/events`}>{event.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Action button */}
                {/* <div className="sm:text-right shrink-0">
                  <button
                    onClick={() => openRegisterModal(event)}
                    className="inline-flex items-center gap-1 text-xs font-medium bg-navy rounded-sm px-3 py-2  text-white transition-colors cursor-pointer"
                  >
                    <span>{event.status}</span>
                  </button>
                </div> */}
                <div className="sm:text-right shrink-0">
  {event.link ? (
    <a
      href={event.link}
      target={event.link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-navy hover:text-accent-blue transition-colors cursor-pointer"
    >
      <span>{event.status}</span>
      <ArrowUpRight className="w-3.5 h-3.5" />
    </a>
  ) : (
    <button
      onClick={() => openRegisterModal(event)}
      className="inline-flex items-center gap-1 text-xs font-medium text-navy hover:text-accent-blue transition-colors cursor-pointer"
    >
      <span>{event.status}</span>
      <ArrowUpRight className="w-3.5 h-3.5" />
    </button>
  )}
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import React, { useEffect, useState } from "react";
// import { Link } from "../../lib/router";
// import { SectionHeader } from "../shared/SectionHeader";
// import { useAppState } from "../../lib/state/AppStateProvider";
// import { ArrowUpRight } from "lucide-react";
// import type { EventItem } from "../../lib/models";
// // interface EventItem {
// //   id: string;
// //   title: string;
// //   category: string;
// //   day: string;
// //   month: string;
// //   dates: string;
// //   year: number;
// //   location: string;
// //   city: string;
// //   country: string;
// //   description: string;
// //   status: string;
// //   imageUrl: string;
// //   isEditorSelection: boolean;
// // }

// const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

// export function EventsSection() {
//   const { openRegisterModal } = useAppState();
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${BASE}/events`, { cache: "no-store" })
//       .then((r) => (r.ok ? r.json() : []))
//       .then((rows: EventItem[]) => {
//         setEvents(rows.filter((e) => e.isEditorSelection).slice(0, 3));
//       })
//       .catch(() => setEvents([]))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-12 border-b border-slate-200">
//         <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
//           <div className="h-8 w-64 animate-pulse rounded bg-slate-100" />
//         </div>
//       </section>
//     );
//   }

//   if (!events.length) return null;

//   return (
//     <section className="py-12 border-b border-slate-200">
//       <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
//         <SectionHeader
//           kicker="The international design calendar"
//           title="Events & Industry Updates"
//           viewAllHref="/events"
//           viewAllText="View all Events"
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
//           {/* Left editor's selection callout box (span 4) */}
//           <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
//             <div>
//               <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
//                 Our calendar / Editor&apos;s selection
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-serif text-navy leading-tight mb-4">
//                 Where design&apos;s next conversations begin
//               </h3>
//               <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
//                 From material research symposia in Rotterdam to collectible design launches in Lisbon, our editors select the key gatherings shaping international spatial practice.
//               </p>
//             </div>

//             <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
//               <span>Updated 14 Oct 2026</span>
//               <span>Dates subject to change</span>
//             </div>
//           </div>

//           {/* Right 3 events list with date blocks (span 8) */}
//           <div className="lg:col-span-8 divide-y divide-slate-200 flex flex-col justify-between">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
//               >
//                 <div className="flex items-start gap-5">
//                   <div className="w-14 h-14 bg-white border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center shadow-2xs">
//                     <span className="text-xl font-serif font-bold text-navy leading-none tabular-nums">
//                       {event.day}
//                     </span>
//                     <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">
//                       {event.month}
//                     </span>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug">
//                       <Link href={`/events/${event.id}`}>{event.title}</Link>
//                     </h4>
//                     <p className="text-xs text-slate-500 mt-1">
//                       {event.city}, {event.country} · {event.dates}
//                     </p>
//                     <p className="text-xs text-slate-400 mt-0.5">
//                       {event.category}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="sm:text-right shrink-0">
//                   <button
//                     onClick={() => openRegisterModal(event)}
//                     className="inline-flex items-center gap-1 text-xs font-medium text-navy hover:text-accent-blue transition-colors cursor-pointer"
//                   >
//                     <span>{event.status}</span>
//                     <ArrowUpRight className="w-3.5 h-3.5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }