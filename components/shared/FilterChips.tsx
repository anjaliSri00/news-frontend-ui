'use client';

import React from 'react';

interface FilterChipsProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  className?: string;
}

export function FilterChips({ options, selected, onSelect, className = '' }: FilterChipsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-sm ${className}`}>
      {options.map((option) => {
        const active = selected.toLowerCase() === option.toLowerCase();
        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors rounded-sm whitespace-nowrap ${
              active
                ? 'bg-navy text-white shadow-xs'
                : 'text-slate-600 hover:text-navy hover:bg-slate-100'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 pt-8 pb-4 border-t border-slate-200 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider border border-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 transition-colors"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNum = idx + 1;
          const active = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 flex items-center justify-center text-xs font-medium transition-colors ${
                active
                  ? 'bg-navy text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider border border-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 transition-colors"
      >
        Next
      </button>
    </div>
  );
}
