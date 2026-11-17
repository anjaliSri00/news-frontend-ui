"use client";

import React from 'react';

export function TrendsNewsletter() {
  return (
    <section className="w-full px-6 py-16 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Newsletter Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 space-y-6">
          <div className="space-y-2">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#8C3F2E] font-semibold block">
              Bi-Weekly Research Dossier
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-[#000615] tracking-tight">
              Trend Intelligence in Your Atelier
            </h3>
            <p className="text-[15px] text-gray-500 font-light max-w-xl">
              Receive confidential chromatic palettes, material spec audits, and sociological interior forecasts.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 pt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-[#F9F8F6] text-[13px] px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black transition-all" 
              placeholder="atelier@architecturedesk.com" 
              type="email" 
            />
            <button className="bg-[#000615] text-white text-[12px] uppercase tracking-widest px-8 py-3.5 hover:bg-[#8C3F2E] transition-colors font-semibold whitespace-nowrap" type="submit">
              Request Access
            </button>
          </form>
        </div>

        {/* Archival Links */}
        <div className="lg:col-span-5 bg-white p-8 md:p-10 space-y-6">
          <div className="space-y-1">
            <span className="text-[12px] uppercase tracking-widest text-[#000615] font-semibold block">
              Published Forecast Monographs
            </span>
            <span className="text-[13px] text-gray-500">
              Exhaustive 80-page print volumes available in slipcase
            </span>
          </div>
          <ul className="space-y-4 text-[15px]">
            <li className="flex items-start justify-between pb-3.5 border-b border-gray-100">
              <div>
                <a className="font-serif text-lg text-[#000615] hover:text-[#8C3F2E] transition-colors block" href="#">
                  Volume IV: The Vernacular Tactile
                </a>
                <span className="text-[13px] text-gray-500">Autumn / Winter 2026 Edition</span>
              </div>
              <span className="text-[12px] text-[#8C3F2E] uppercase font-semibold">Available</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}