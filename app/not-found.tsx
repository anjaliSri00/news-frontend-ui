import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold block mb-3">
        404 · PAGE NOT FOUND
      </span>
      <h1 className="text-4xl sm:text-5xl font-serif text-navy mb-4">
        This Room Does Not Exist
      </h1>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
        The architectural record or dispatch you requested could not be located in our archives. It may have been moved or renamed.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="px-5 py-2.5 bg-navy text-white text-xs uppercase tracking-wider font-medium">
          Return to Front Page
        </Link>
        <Link href="/projects" className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:border-navy text-xs uppercase tracking-wider font-medium">
          Browse Projects
        </Link>
      </div>
    </div>
  );
}
