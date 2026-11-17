import React from 'react';

export function TrendsPaletteSection() {
  return (
    <section className="w-full px-6 py-12 bg-[#000615] text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[12px] uppercase tracking-[0.28em] text-gray-400 block font-semibold">
              Seasonal Chromatic Study • Autumn / Winter 2026
            </span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight uppercase leading-none">
              The Material Palette Synthesis
            </h2>
          </div>
          <p className="text-[15px] text-gray-400 max-w-md font-light">
            Four distinct chromatic and structural directions documented through current atelier prototypes and architectural finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example Palette 1 */}
          <div className="bg-white/5 p-6 flex flex-col justify-between space-y-6 group hover:bg-white/10 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[12px] uppercase tracking-widest text-gray-400 font-semibold">
                <span>01 • Palette</span>
                <span>Cool Monolith</span>
              </div>
              <h3 className="font-serif text-2xl text-white">Mineral Depths</h3>
              <p className="text-[13px] text-gray-300 font-light">
                Deep oceanic tones meeting basalt greys, used in full-room color drenches to create introspective calm.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2 h-10 w-full">
                <div className="flex-1 bg-[#0b1f3a]"></div>
                <div className="flex-1 bg-[#2C3B4D]"></div>
                <div className="flex-1 bg-[#7E8D9F]"></div>
                <div className="flex-1 bg-[#DCE2E6]"></div>
              </div>
            </div>
          </div>
          
          {/* Baaki 3 palettes same structure me add karo (Raw Earth, Honed Minerals, Tactile Woods) */}
        </div>
      </div>
    </section>
  );
}