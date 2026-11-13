import React from 'react';
import { Search } from 'lucide-react';

export function ShowroomFilters({ count }: { count: number }) {
  const regions = ['All Showrooms', 'Gurugram', 'Delhi', 'Noida'];

  return (
    <section className="max-w-7xl mx-auto px-6 w-full py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-200">
        
        <div className="flex flex-wrap items-center gap-6">
          {regions.map((region, idx) => (
            <button 
              key={region}
              className={`text-sm pb-1 ${
                idx === 0 
                  ? 'font-bold text-[#000615] border-b-2 border-[#000615]' 
                  : 'text-gray-500 hover:text-[#000615] transition-colors'
              }`}
            >
              {idx === 0 ? `${region} (${count})` : region}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Search className="text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search city, brand, or material..."
            className="bg-[#f6f3f2] px-4 py-2 text-sm text-[#1c1b1b] focus:outline-none focus:ring-1 focus:ring-[#000615] w-full md:w-72"
          />
        </div>

      </div>
    </section>
  );
}