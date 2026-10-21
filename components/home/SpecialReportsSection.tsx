"use client";

import React from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getAllReports } from '../../lib/services';

export function SpecialReportsSection() {
  const reports = getAllReports().slice(0, 3);

  return (
    <section className="bg-navy text-white py-14">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Original research / Deeper understanding"
          title="Special Reports"
          viewAllHref="/reports"
          viewAllText="View all reports"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reports.map((rep) => (
            <div key={rep.id} className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-light mb-4 border border-navy-light/60">
                <img
                  src={rep.imageUrl}
                  alt={rep.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              <div className="text-xs uppercase tracking-wider text-blue-300 mb-1 font-medium font-sans">
                {rep.kicker}
              </div>

              <h3 className="text-xl font-serif text-white group-hover:text-blue-300 transition-colors leading-snug mb-2">
                <Link href="/reports">{rep.title}</Link>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {rep.description}
              </p>

              <div className="mt-auto text-xs text-slate-400 font-sans">
                Published {rep.publishedDate} · {rep.readTime}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-navy-light text-center text-xs text-slate-400">
          Independent analysis from the Form &amp; Field research desk. Designed for architects, interior designers and the curious.
        </div>
      </div>
    </section>
  );
}
