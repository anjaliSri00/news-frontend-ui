'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Link, usePathname, useRouter } from '../../lib/router';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Search, Menu, X, ArrowUpRight, ChevronDown, LayoutDashboard, User, LogOut } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { signOut, useSession } from 'next-auth/react';

export function Header() {
  const { openSearch } = useAppState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, status } = useSession();
  const isAuthed = status === 'authenticated';
  const isLoading = status === 'loading';

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
    router.refresh();
  };
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
  {isLoading && (
              <span
                aria-hidden
                className="hidden sm:inline-block w-20 h-4 rounded bg-slate-100 animate-pulse"
              />
            )}

            {!isLoading && !isAuthed && (
              <Link
                href="/signin"
                className="hidden sm:inline text-xs uppercase tracking-[0.12em] font-medium text-slate-700 hover:text-navy transition-colors"
              >
                Sign in
              </Link>
            )}

            {!isLoading && isAuthed && (
              <AccountMenu
                email={session.user.email}
                onSignOut={handleSignOut}
              />
            )}
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
             {/* Account row — mobile */}
            {isAuthed && (
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-semibold shrink-0">
                    {initialsFromEmail(session.user.email)}
                  </span>
                  <span className="truncate text-sm text-slate-700">
                    {session.user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-xs uppercase tracking-wider text-slate-600 hover:text-navy"
                >
                  Sign out
                </button>
              </div>
            )}

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


function AccountMenu({
  email,
  onSignOut,
}: {
  email: string;
  onSignOut: () => void | Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-medium text-slate-700 hover:text-navy transition-colors"
      >
        <span className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-semibold tracking-wider">
          {initialsFromEmail(email)}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 shadow-lg z-50"
        >
          <div className="px-4 py-3 border-b border-slate-100">
            <p className="text-[10px] uppercase tracking-widest text-slate-400">
              Signed in as
            </p>
            <p className="text-sm text-slate-800 truncate">{email}</p>
          </div>

          <Link
            href="/dashboard"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>

          <Link
            href="/account"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            <User className="w-4 h-4" />
            Account
          </Link>

          <button
            role="menuitem"
            onClick={() => {
              setOpen(false);
              void onSignOut();
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 border-t border-slate-100"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

function initialsFromEmail(email?: string | null): string {
  if (!email) return '?';
  const name = email.split('@')[0];
  const parts = name.split(/[._-]+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '');
  return letters.join('') || name.slice(0, 2).toUpperCase();
}
