import React from 'react';

export function ShowroomHero() {
  return (
    <section className="relative w-full bg-[#F9F8F6] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[12px] font-semibold text-[#8C3F2E] uppercase tracking-widest">
              Global Flagship Showcase
            </span>
            <span className="w-8 h-px bg-gray-300"></span>
            <span className="text-[12px] font-semibold text-gray-500 uppercase">
              Edition 04
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-[#000615] mb-6 leading-tight">
            The Architecture of Display: Spaces That Define Modern Materiality
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            An exclusive curatorial review of world-class architectural showrooms. Where monolithic concrete, precise joinery, and expansive glass converge to elevate furniture and material curation into high art.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="bg-[#0b1f3a] text-white px-6 py-3 text-[12px] font-semibold uppercase tracking-wider hover:bg-transparent hover:text-[#000615] hover:outline hover:outline-1 hover:outline-[#000615] transition-all duration-300">
              Explore Curated Atlas
            </button>
            <button className="border border-[#000615] text-[#000615] px-6 py-3 text-[12px] font-semibold uppercase tracking-wider hover:bg-[#000615] hover:text-white transition-all duration-300">
              Book Private Tour
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">
          <div 
            className="w-full h-112.5 bg-cover bg-center overflow-hidden shadow-2xl relative"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200')` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#000615]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Milan, Italy</span>
              <p className="font-serif text-xl mt-1">Palazzo Della Materia</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}