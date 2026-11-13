import React from 'react';

export function ShowroomMap() {
  return (
    <section className="w-full bg-[#f6f3f2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <span className="text-[12px] font-semibold text-[#8C3F2E] uppercase tracking-widest">
              Global Coordinates
            </span>
            <h2 className="font-serif text-3xl text-[#000615] mt-1">
              Showroom Locations Atlas
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-sm mt-4 md:mt-0">
            Navigate our global network of partner destinations, architectural flagships, and private material archives.
          </p>
        </div>

        {/* Map Placeholder */}
        <div 
          className="w-full h-[500px] bg-cover bg-center shadow-xl relative overflow-hidden"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')` }}
        >
          <div className="absolute inset-0 bg-[#000615]/15 backdrop-brightness-95 flex items-center justify-center p-6">
            <div className="bg-white/95 backdrop-blur-md p-8 max-w-md w-full shadow-2xl border-l-4 border-[#000615]">
              <span className="text-[11px] font-semibold text-[#8C3F2E] uppercase tracking-widest">
                Featured Hub
              </span>
              <h4 className="font-serif text-xl text-[#000615] mt-1">
                Palazzo Della Materia, Milan
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Via dei Giardini 14, 20121 Milano MI, Italy
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="text-[12px] font-semibold text-gray-800">
                  Open Mon-Fri, 10:00 - 19:00
                </span>
                <button className="bg-[#000615] text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider hover:bg-transparent hover:text-[#000615] hover:outline hover:outline-1 hover:outline-[#000615] transition-all">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}