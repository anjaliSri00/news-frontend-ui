"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { useAppState } from '../../lib/state/AppStateProvider';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store'; // Path check kar lena

const EVENTS_API = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/events`;

// Types
interface EventWebsitePayload {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  start_date: string;
  end_date: string;
  venue: string;
  city: string;
  country: string;
  registration_url: string;
  article_url: string;
  status: string;
}

interface EventsListResponse {
  events: EventWebsitePayload[];
}

// Formatted type for UI
interface FormattedEvent extends EventWebsitePayload {
  day: string;
  month: string;
  dates: string;
  description: string;
  actionLink: string;
  actionText: string;
}

export function EventsSection() {
  const { openRegisterModal } = useAppState();
  
  const [events, setEvents] = useState<FormattedEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  async function fetchEvents() {
    try {
      const response = await fetchApiResponse<EventsListResponse>(
        `${EVENTS_API}?status=published&limit=3`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      );

      if (response.meta?.status === 200 && response.data?.events) {
        const formatted = response.data.events.map((e) => {
          const startDate = new Date(e.start_date);
          const endDate = new Date(e.end_date || e.start_date);

          const startDay = startDate.getDate().toString().padStart(2, '0');
          const startMonth = startDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
          const startYear = startDate.getFullYear();
          
          const endDay = endDate.getDate().toString().padStart(2, '0');
          const endMonth = endDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
          const endYear = endDate.getFullYear();

          // 🔥 Date Logic Fix
          let datesStr = `${startDay} ${startMonth}`;
          
          if (e.end_date && e.start_date !== e.end_date) {
            if (startYear !== endYear) {
              // Alag saal (e.g., 29 Dec 2026 - 05 Jan 2027)
              datesStr = `${startDay} ${startMonth} ${startYear} – ${endDay} ${endMonth} ${endYear}`;
            } else if (startMonth !== endMonth) {
              // Alag mahina (e.g., 29 OCT – 28 NOV)
              datesStr = `${startDay} ${startMonth} – ${endDay} ${endMonth}`;
            } else {
              // Same mahina (e.g., 29 OCT – 05 NOV)
              datesStr = `${startDay} – ${endDay} ${startMonth}`;
            }
          }

          // Link prioritization: Article > Registration > Internal route
          const link = e.article_url || e.registration_url || '/events';
          const actionText = e.article_url ? 'Read Article' : e.registration_url ? 'Request Pass' : 'View Event';

          return {
            ...e,
            day: startDay,
            month: startMonth, // Calendar block me hamesha start month hi dikhega
            dates: datesStr,   // List me ye naya range dikhega
            description: e.excerpt || e.venue,
            actionLink: link,
            actionText: actionText
          };
        });
        
        setEvents(formatted);
      }
    } catch (err) {
      console.error('Failed to fetch events for section:', err);
    } finally {
      setIsLoading(false);
    }
  }

  fetchEvents();
}, []);

  if (isLoading) {
    return (
      <section className="py-12 border-b border-slate-200 flex justify-center items-center min-h-75">
         <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  // Agar koi event nahi hai to section hide kar do
  if (events.length === 0) return null;

  return (
    <section className="py-12 bg-pale-blue">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Category 02"
          title="Events & Biennials"
          viewAllHref="/category/events"
          viewAllText="View all Events"
        />
        <div className=" gap-8 lg:gap-10 items-stretch">

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
                      <Link href="/category/events">{event.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Action button / Link */}
                <div className="sm:text-right shrink-0">
                  {event.actionLink && (
                    <a
                      href={event.actionLink}
                      target={event.actionLink.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs rounded-sm py-2 px-4 font-medium bg-navy text-white transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      <span>{event.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
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
