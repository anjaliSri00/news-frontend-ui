import React from 'react';

export function DesignerFilter() {
  const styles = ['All Styles', 'Minimalism', 'Brutalism', 'Biophilic', 'Adaptive Reuse'];

  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-2">
          {styles.map((style, idx) => (
            <button 
              key={style}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                idx === 0 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-500 uppercase">Location:</span>
          <select className="bg-white border border-gray-200 text-sm px-2 py-1.5 focus:outline-none focus:border-primary">
            <option>All Regions</option>
            <option>London</option>
            <option>Lagos</option>
            <option>Tokyo</option>
          </select>
        </div>

      </div>
    </section>
  );
}