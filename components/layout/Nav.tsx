'use client';

import React from 'react';
import { Link, usePathname } from '../../lib/router';
import { CATEGORIES } from '../../data/categories';

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white max-sm:hidden border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 lg:px-18">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-8 sm:gap-10 lg:gap-14 py-3">
          {CATEGORIES.map((cat) => {
            const href = `/category/${cat.slug}`;
            const isActive =
              pathname === href || pathname.startsWith(`/category/${cat.slug}`);

            return (
              <Link
                key={cat.slug}
                href={href}
                className={`text-xs uppercase tracking-[0.12em] whitespace-nowrap transition-colors relative py-1 ${
                  isActive
                    ? 'text-navy font-semibold'
                    : 'text-slate-700 hover:text-navy'
                }`}
              >
                <span>{cat.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}