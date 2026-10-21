"use client"
import React from 'react';
import { Link } from '../../lib/router';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  year: number;
}

export function Footer({year}:FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 text-xs">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 pr-4">
            <Link href="/" className="inline-block group mb-4">
              <h3 className="text-3xl font-serif text-navy tracking-tight group-hover:text-slate-800 transition-colors">
                Form &amp; Field
              </h3>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              An independent international publication exploring architecture, interiors and the ideas shaping the way we live.
            </p>
            <p className="font-serif italic text-navy text-sm">
              Good design. A wider perspective.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Explore */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
                Explore
              </h4>
              <ul className="space-y-2">
                <li><Link href="/category/home-decor" className="hover:text-navy transition-colors">Home Decor</Link></li>
                <li><Link href="/events" className="hover:text-navy transition-colors">Events</Link></li>
                <li><Link href="/category/trends" className="hover:text-navy transition-colors">Trends</Link></li>
                <li><Link href="/designers" className="hover:text-navy transition-colors">Designers</Link></li>
                <li><Link href="/category/design-tech" className="hover:text-navy transition-colors">Design Tech</Link></li>
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
                Discover
              </h4>
              <ul className="space-y-2">
                <li><Link href="/category/furniture" className="hover:text-navy transition-colors">Furniture</Link></li>
                <li><Link href="/category/decor" className="hover:text-navy transition-colors">Decor</Link></li>
                <li><Link href="/showrooms" className="hover:text-navy transition-colors">Showroom Showcase</Link></li>
                <li><Link href="/projects" className="hover:text-navy transition-colors">Projects</Link></li>
                <li><Link href="/products" className="hover:text-navy transition-colors">Products</Link></li>
              </ul>
            </div>

            {/* The publication */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
                The publication
              </h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-navy transition-colors">About us</Link></li>
                <li><Link href="/about#team" className="hover:text-navy transition-colors">Our editorial team</Link></li>
                <li><Link href="/reports" className="hover:text-navy transition-colors">Special Reports</Link></li>
                <li><Link href="/media" className="hover:text-navy transition-colors">Podcast &amp; Video</Link></li>
                <li><Link href="/contact" className="hover:text-navy transition-colors">Contact &amp; submissions</Link></li>
                <li><Link href="/contact#partner" className="hover:text-navy transition-colors">Partner with us</Link></li>
              </ul>
            </div>

            {/* Follow along */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
                Follow along
              </h4>
              <ul className="space-y-2">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-navy transition-colors">Instagram ↗</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-navy transition-colors">LinkedIn ↗</a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-navy transition-colors">Pinterest ↗</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-navy transition-colors">YouTube ↗</a></li>
                <li><Link href="/reports" className="hover:text-navy transition-colors">RSS feed ↗</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {year} Form &amp; Field / Lumen Journal. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="hover:text-navy">Privacy Policy</Link>
            <Link href="/about" className="hover:text-navy">Terms of Use</Link>
            <Link href="/about" className="hover:text-navy">Cookie Policy</Link>
            <Link href="/about" className="hover:text-navy">Accessibility</Link>
            <Link href="/about" className="hover:text-navy">Editorial Standards</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-navy transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
