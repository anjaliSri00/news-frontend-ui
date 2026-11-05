import React from 'react';

interface DesignerHeroProps {
  totalDesigners: number;
}

export function DesignerHero({ totalDesigners }: DesignerHeroProps) {
  return (
    <section className="w-full bg-[#F9F8F6] py-20 border-b border-[#E2DFD8]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <div className="md:col-span-8 flex flex-col items-start">
          <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Global Collective
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary tracking-tight">
            Global Architectural & Interior Visionaries
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl leading-relaxed">
            Curating the defining voices of contemporary spatial design. Explore the portfolios, philosophies, and methodologies of world-renowned architects and interior pioneers.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-1 md:border-l border-gray-200 md:pl-8">
          <span className="font-serif text-4xl text-primary">{totalDesigners}</span>
          <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
            Featured Studios Worldwide
          </span>
        </div>

      </div>
    </section>
  );
}