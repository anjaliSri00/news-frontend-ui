'use client';

import React, { useState } from 'react';
import { getAllMedia, getAllReports } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Play, Headphones, Film, Download, CheckCircle, Clock } from 'lucide-react';

export function MediaPage() {
  const media = getAllMedia();
  const { openVideoModal, showToast } = useAppState();
  const [filterType, setFilterType] = useState<'all' | 'podcast' | 'video'>('all');

  const filtered = media.filter((m) => {
    if (filterType === 'all') return true;
    return m.type === filterType;
  });

  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Listen closer. Look deeper.
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Field Notes: Podcasts &amp; Video Documentaries
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Long-form audio dialogues with master craftsmen, acoustic recordings, and studio cinematography documenting material transformation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Filter controls */}
        <div className="flex items-center gap-2 pb-6 mb-8 border-b border-slate-200">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-xs transition-colors font-medium ${
              filterType === 'all' ? 'bg-navy text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Broadcasts
          </button>
          <button
            onClick={() => setFilterType('podcast')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider rounded-xs transition-colors font-medium ${
              filterType === 'podcast' ? 'bg-navy text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Podcasts</span>
          </button>
          <button
            onClick={() => setFilterType('video')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider rounded-xs transition-colors font-medium ${
              filterType === 'video' ? 'bg-navy text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Films</span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => openVideoModal(item)}
              className="group border border-slate-200 hover:border-navy transition-colors bg-white flex flex-col overflow-hidden shadow-2xs cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/85 text-white font-mono text-xs rounded-xs">
                  {item.duration}
                </span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-0.5 fill-navy" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="uppercase tracking-wider font-medium">{item.kicker}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-serif text-lg text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span>{item.hostOrDirector}</span>
                  <span className="text-navy font-medium group-hover:underline">Play broadcast →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}

export function ReportsPage() {
  const reports = getAllReports();
  const { showToast } = useAppState();

  const handleDownload = (title: string) => {
    showToast(`Downloading "${title}" executive briefing PDF`, 'info');
  };

  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-blue-300 font-medium block mb-2 font-sans">
            Original research / Deeper understanding
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-4">
            Special Research Reports &amp; Whitepapers
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            Rigorous, empirical analysis from the Form &amp; Field research desk examining circular construction standards, lifecycle embodied carbon, and the future of domestic typologies.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-12">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border border-slate-200 p-6 sm:p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-2xs"
            >
              <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={report.imageUrl}
                  alt={report.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="uppercase tracking-wider font-medium text-navy">{report.kicker}</span>
                    <span className="font-mono">{report.publishedDate} · {report.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-navy mb-3 leading-tight">
                    {report.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {report.description}
                  </p>

                  <h4 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
                    Key Executive Takeaways
                  </h4>
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                    {report.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleDownload(report.title)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Monograph (PDF)</span>
                  </button>
                  <span className="text-xs text-slate-400">
                    Includes verified lifecycle data tables
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
