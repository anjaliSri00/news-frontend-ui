"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface TrendsFilterBarProps {
  onSearch?: (query: string) => void;
  onSort?: (sortType: string) => void;
}

export function TrendsFilterBar({ onSearch, onSort }: TrendsFilterBarProps) {
  // Static filters (inhe API se dynamic bhi kar sakte hain)
  const filters = [
    { label: 'All Forecasts (38)', value: 'all' },
    { label: 'Colour Narratives (8)', value: 'colour' },
    // { label: 'Materiality & Surfaces (11)', value: 'materiality' },
    { label: 'Spatial Layouts (7)', value: 'spatial' },
    // { label: 'Bio-Circularity (6)', value: 'bio' },
    // { label: 'Acoustic Ecologies (6)', value: 'acoustic' },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterClick = (value: string) => {
    setActiveFilter(value);
    // API call logic yahan aayega (e.g., fetch trends by category)
  };

  return (
    <section className="w-full px-6 py-6 bg-white z-30 shadow-sm backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterClick(filter.value)}
              className={`text-[12px] uppercase tracking-wider px-4 py-2 font-semibold whitespace-nowrap transition-colors ${
                activeFilter === filter.value
                  ? 'bg-[#000615] text-white'
                  : 'bg-[#F9F8F6] text-[#1c1b1b] hover:bg-gray-200 hover:text-black'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* RIGHT: Search & Sort */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
         
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch?.(e.target.value);
              }}
              placeholder="Search trend archives..."
              className="w-full bg-[#F9F8F6] text-[13px] px-3 py-2 pl-9 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-gray-200 transition-colors"
            />
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
          </div>

       
          <div className="relative">
            <select
              onChange={(e) => onSort?.(e.target.value)}
              className="appearance-none bg-[#F9F8F6] text-[12px] uppercase tracking-wider px-4 py-2 pr-8 text-[#000615] font-semibold focus:outline-none cursor-pointer"
            >
              <option value="latest">Latest Forecasts</option>
              <option value="most-read">Most Read</option>
              <option value="material-index">Material Index</option>
              <option value="editorial-choice">Editorial Choice</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-[#000615] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}