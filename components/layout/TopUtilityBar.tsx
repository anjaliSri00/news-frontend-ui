'use client';

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { Globe, ChevronDown, Sun, Moon } from 'lucide-react';

interface TopUtilityBarProps {
  /** ISO date string, computed server-side to avoid hydration mismatch */
  dateLabel: string;
}

export function TopUtilityBar({ dateLabel }: TopUtilityBarProps) {
  const [editionDropdown, setEditionDropdown] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="bg-pale-blue text-[10px] sm:text-[11px] font-lora overflow-x-hidden w-screen uppercase tracking-[0.12em] text-slate-500">
      <div className="w-screen mx-auto px-4 lg:px-18 py-2 flex items-center justify-between gap-4">
        {/* Left: Date */}
        <div className="font-medium text-slate-700 whitespace-nowrap">
          {dateLabel}
        </div>

        {/* Center: tagline (hidden on small) */}
        <div className="hidden lg:block text-slate-400 tracking-[0.18em]">
          Independent Perspectives. Interior Design.
        </div>

        {/* Right: edition + theme */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setEditionDropdown(!editionDropdown)}
              className="flex items-center gap-1 hover:text-navy transition-colors cursor-pointer"
              aria-haspopup="listbox"
              aria-expanded={editionDropdown}
            >
              <span>Global Edition / EN</span>
              {/* <ChevronDown className="w-3 h-3" /> */}
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
}