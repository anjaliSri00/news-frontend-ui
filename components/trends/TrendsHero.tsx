import React from 'react';

export function TrendsHero({ totalTrends }: { totalTrends: number }) {
  return (
    <section className="w-full px-6 pt-8 pb-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-[#8C3F2E] uppercase mb-4">
          <span>Category</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 font-medium">Spatial Forecast & Materiality</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] tracking-tight text-[#000615] uppercase leading-none">
              Trends: Beyond the Moodboard
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
              Investigating cyclical aesthetics, emerging pigment science, bio-circular materiality, and adaptive spatial shifts shaping global interiors and architecture.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="bg-[#F9F8F6] px-5 py-4 w-full lg:w-auto flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-widest text-[#000615] font-semibold">
                Editorial Registry
              </span>
              <div className="text-[11px] text-gray-500 tracking-wider uppercase flex items-center gap-2">
                <span>{totalTrends} Forecast Reports</span>
                <span className="text-gray-300">•</span>
                <span>Updated Bi-Weekly</span>
              </div>
              <span className="text-[11px] text-[#8C3F2E] tracking-widest uppercase font-semibold">
                Autumn / Winter 2026 Edition
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}