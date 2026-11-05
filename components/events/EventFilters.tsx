import React from 'react';

export function EventFilters() {
  return (
    <section className="w-full px-6 py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        <div>
          <h3 className="font-serif text-2xl text-[#000615]">Global Design Calendar</h3>
          <p className="text-[13px] text-gray-500 mt-1">Filter forthcoming symposia, exhibitions, and product launches.</p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <select className="bg-white border border-gray-200 px-4 py-2 text-[13px] text-gray-700 focus:outline-none focus:border-[#000615]">
            <option>All Months</option>
            <option>May 2027</option>
            <option>June 2027</option>
          </select>
          <select className="bg-white border border-gray-200 px-4 py-2 text-[13px] text-gray-700 focus:outline-none focus:border-[#000615]">
            <option>All Cities</option>
            <option>London</option>
            <option>Basel</option>
            <option>Tokyo</option>
          </select>
          <select className="bg-white border border-gray-200 px-4 py-2 text-[13px] text-gray-700 focus:outline-none focus:border-[#000615]">
            <option>All Types</option>
            <option>Symposium</option>
            <option>Exhibition</option>
            <option>Fair</option>
          </select>
        </div>
      </div>
    </section>
  );
}