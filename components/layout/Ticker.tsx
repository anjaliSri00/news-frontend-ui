'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TickerItem {
  id: string;
  label: string;      // e.g. "BREAKING NEWS"
  title: string;
  time: string;
  href: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    id: 't1',
    label: 'BREAKING NEWS',
    title: "Design's next material frontier: our 2026 circular interiors report is here",
    time: '09:30 GMT',
    href: '/reports',
  },
  {
    id: 't2',
    label: 'NEW DISPATCH',
    title: 'Copenhagen courtyard residences establish new standard for collective daylight',
    time: '08:45 GMT',
    href: '/article/copenhagen-courtyard-homes',
  },
  {
    id: 't3',
    label: 'DEVELOPING',
    title: 'ETH Zurich material lab confirms unstabilized clay achieves C25 load bearing ratings',
    time: '08:15 GMT',
    href: '/article/can-clay-become-concrete',
  },
  {
    id: 't4',
    label: 'EXHIBITION',
    title: 'Open Materials Forum Rotterdam opens delegate registration for autumn 2026',
    time: '07:50 GMT',
    href: '/events',
  },
];

export function Ticker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TICKER_ITEMS[currentIndex];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + TICKER_ITEMS.length) % TICKER_ITEMS.length);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length);

  return (
    <div
      className="bg-white border-b w-screen overflow-x-hidden border-slate-200 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-screen-3xl w-full mx-auto px-4 lg:px-18 py-2.5 flex items-center gap-4 text-xs">
        {/* Label: black square + uppercase text */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 bg-navy rounded-full" aria-hidden="true" />
          <span className="uppercase tracking-[0.14em] font-semibold text-navy whitespace-nowrap">
            {current.label}
          </span>
        </div>

        {/* Headline */}
        <Link
          href={current.href}
          className="flex-1 truncate font-inter text-slate-800 hover:text-navy transition-colors leading-none"
        >
          {current.title}
        </Link>

        {/* Time */}
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-slate-400 shrink-0 tabular-nums">
          {current.time}
        </span>

        {/* Prev / Next */}
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous headline"
            className="p-1 text-slate-400 hover:text-navy transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next headline"
            className="p-1 text-slate-400 hover:text-navy transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}