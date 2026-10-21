'use client';

import React, { useState } from 'react';
import { Link, usePathname } from '../../lib/router';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export function Header() {
  const { openSearch } = useAppState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Masthead zone */}
      <div className="lg:max-w-screen-3xl w-full mx-auto px-4 lg:px-18 py-6 sm:py-4">
        <div className="flex items-center justify-between gap-6">
          {/* LEFT: Brand (icon + wordmark + tagline) */}
          <Link href="/" className="group flex flex-col shrink-0">
            <div className="flex items-center gap-3">
              {/* Building glyph */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#142B4A] group-hover:text-slate-800 transition-colors leading-none">
                Form &amp; Field
              </h1>
            </div>

            <p className="text-[9px] max-sm:hidden sm:text-[10px] font-sans tracking-[0.28em] uppercase text-slate-500 mt-2 font-medium">
              The World of Spaces, Ideas &amp; Objects
            </p>
          </Link>

          {/* RIGHT: Search, Sign in, CTA, mobile menu */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-700 hover:text-navy transition-colors"
            >
              <Search className="w-4 h-4 text-navy" />
              <span className="hidden sm:inline font-medium">Search</span>
            </button>

            <Link
              href="/login"
              className="hidden sm:inline text-xs uppercase tracking-[0.12em] font-medium text-slate-700 hover:text-navy transition-colors"
            >
              Sign in
            </Link>

            <Link
              href="/subscribe"
              className="hidden md:inline-flex rounded-sm items-center gap-1.5 px-4 py-2 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-[0.12em] font-medium transition-colors"
            >
              <span>The Daily Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-navy md:hidden lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-4 py-6">
          <div className="space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Categories
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 px-2 font-serif ${
                      pathname === `/category/${cat.slug}`
                        ? 'bg-navy text-white'
                        : 'text-slate-700 hover:bg-slate-200/60'
                    }`}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-navy">About the Journal</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-navy">Editorial Submissions</Link>
              <Link href="/reports" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-navy">Special Reports</Link>
              <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-navy">Podcast &amp; Video</Link>
            </div>

            <div className="pt-2">
              <Link
                href="/subscribe"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 bg-navy text-white text-xs uppercase tracking-[0.12em] font-medium"
              >
                Subscribe to The Daily Brief
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}