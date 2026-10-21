import React from 'react';
import { Link } from '../../lib/router';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  viewAllHref?: string;
  viewAllText?: string;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  viewAllHref,
  viewAllText,
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-2 pb-4 mb-6 border-b ${dark ? 'border-navy-light text-white' : 'border-slate-200 text-navy'} ${className}`}>
      <div>
        {kicker && (
          <p className={`text-xs tracking-wider uppercase font-bold mb-1 ${dark ? 'text-blue-300' : 'text-slate-600'}`}>
            {kicker}
          </p>
        )}
        <h2 className={`text-2xl md:text-3xl font-lora font-normal tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>
      </div>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className={`inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium transition-colors group ${
            dark ? 'text-blue-300 hover:text-white' : 'text-navy'
          }`}
        >
          <span>{viewAllText || `View all ${title}`}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}
