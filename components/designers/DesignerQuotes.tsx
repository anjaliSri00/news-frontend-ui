import { Quote } from 'lucide-react';
import React from 'react';

export function DesignerQuotes() {
  const quotes = [
    { text: "The future belongs to structures that breathe. If a building cannot adapt to thermal shifts without mechanical intervention, it has already failed its environment.", author: "Amara Okafor" },
    { text: "We spend billions on sterile perfection while organic decay holds genuine beauty. Embracing patina is the ultimate act of architectural maturity.", author: "Kenji Sato, Tokyo" },
    { text: "Interior design is psychological scaffolding. The layout of a room dictates the cadence of thought and the depth of human connection within it.", author: "Helena Vane, Stockholm" },
  ];

  return (
    <section className="bg-[#000615] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Discourse</span>
            <h2 className="font-serif text-4xl text-white mt-2">Interview Highlights</h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md mt-4 md:mt-0">
            Excerpts from our recent symposium on sustainable material futures and urban density.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <div key={idx} className="bg-[#0b1f3a] p-8 flex flex-col justify-between">
  <Quote className="mb-6 text-white" fill="currentColor" />
              <p className="text-lg text-white mb-6 leading-relaxed">{`"${q.text}"`}</p>
              <div className="pt-4 border-t border-white/20 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {q.author}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}