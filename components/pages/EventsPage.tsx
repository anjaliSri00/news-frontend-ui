'use client';

import React, { useState } from 'react';
import { getAllEvents } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Calendar as CalendarIcon, List, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function EventsPage() {
  const events = getAllEvents();
  const { openRegisterModal, state } = useAppState();

  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [filterCity, setFilterCity] = useState<string>('All');

  const cities = ['All', ...Array.from(new Set(events.map((e) => e.city)))];

  const filtered = events.filter((e) => {
    if (filterCity !== 'All' && e.city !== filterCity) return false;
    return true;
  });

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            The international design calendar
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Design Fairs, Symposia &amp; Salons
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Key gatherings across European, Asian, and Americas design capitals exploring materials, collective housing, and regenerative spatial practice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          {/* City filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
              City:
            </span>
            <div className="flex flex-wrap gap-1">
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCity(c)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors rounded-xs ${
                    filterCity === c
                      ? 'bg-navy text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* List / Calendar View Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xs border border-slate-200">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-xs font-medium ${
                viewMode === 'list'
                  ? 'bg-white text-navy shadow-xs'
                  : 'text-slate-600 hover:text-navy'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-xs font-medium ${
                viewMode === 'calendar'
                  ? 'bg-white text-navy shadow-xs'
                  : 'text-slate-600 hover:text-navy'
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Calendar</span>
            </button>
          </div>
        </div>

        {/* View Mode: List */}
        {viewMode === 'list' && (
          <div className="space-y-6">
            {filtered.map((event) => {
              const isRegistered = state.registeredEvents.some((r) => r.eventId === event.id);

              return (
                <div
                  key={event.id}
                  className="p-6 border border-slate-200 hover:border-navy transition-colors bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs"
                >
                  <div className="flex items-start gap-6">
                    {/* Date Block */}
                    <div className="w-16 h-16 bg-navy text-white flex flex-col items-center justify-center shrink-0 text-center rounded-xs">
                      <span className="text-2xl font-serif font-bold leading-none tabular-nums">
                        {event.day}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold mt-1 text-blue-200">
                        {event.month}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                        {event.category}
                      </div>
                      <h3 className="text-xl font-serif text-navy leading-snug mb-1">
                        {event.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.location}, {event.city}, {event.country} · {event.dates}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    {isRegistered ? (
                      <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200 rounded-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Registered Delegate</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => openRegisterModal(event)}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
                      >
                        <span>{event.status}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode: Calendar */}
        {viewMode === 'calendar' && (
          <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-xs">
            <h3 className="font-serif text-2xl text-navy mb-6">
              Autumn 2026 / Winter 2027 Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['OCT 2026', 'NOV 2026', 'DEC 2026', 'JAN 2027', 'FEB 2027'].map((monthKey) => {
                const monthEvents = events.filter((e) => `${e.month} ${e.year}` === monthKey);

                return (
                  <div key={monthKey} className="bg-white border border-slate-200 p-5 rounded-xs">
                    <div className="text-xs uppercase tracking-widest text-navy font-bold pb-2 mb-3 border-b border-navy">
                      {monthKey}
                    </div>

                    {monthEvents.length === 0 ? (
                      <p className="text-xs text-slate-400 py-4 italic">No symposia scheduled</p>
                    ) : (
                      <div className="space-y-4">
                        {monthEvents.map((ev) => (
                          <div key={ev.id} className="group border-l-2 border-slate-300 pl-3 py-1">
                            <span className="text-[11px] font-mono text-slate-500 font-bold block">
                              {ev.dates}
                            </span>
                            <h4 className="font-serif text-navy text-sm font-medium group-hover:text-accent-blue leading-snug">
                              {ev.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {ev.city}, {ev.country}
                            </p>
                            <button
                              onClick={() => openRegisterModal(ev)}
                              className="mt-2 text-[11px] uppercase tracking-wider text-navy hover:underline font-semibold"
                            >
                              {ev.status} →
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <NewsletterBand />
    </div>
  );
}
