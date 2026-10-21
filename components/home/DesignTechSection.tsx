"use client";

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';
import { ArrowRight } from 'lucide-react';

export function DesignTechSection() {
  const [imgErr, setImgErr] = useState(false);
  const bestTech = getArticleById('best-tech-dont-notice');
  const aiDesign = getArticleById('ai-can-sketch-designer-decide');
  const agWaste = getArticleById('agricultural-waste-architectural-surface');

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Intelligence, without intrusion"
          title="Design Tech / Technology Hub"
          viewAllHref="/category/design-tech"
          viewAllText="View all Design Tech"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left lead feature (span 5) */}
          {bestTech && (
            <div className="lg:col-span-5 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {!imgErr ? (
                  <img
                    src={bestTech.imageUrl}
                    alt={bestTech.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {bestTech.subCategory || 'Smart interiors'}
              </div>
              <h3 className="text-2xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                <Link href={`/article/${bestTech.id}`}>{bestTech.title}</Link>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {bestTech.deck}
              </p>
              <div className="mt-auto text-xs text-slate-400">
                {bestTech.date} · {bestTech.readTime}
              </div>
            </div>
          )}
          {/* Middle stack (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between divide-y divide-slate-200">
            {aiDesign && (
              <div className="pb-6 group">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {aiDesign.subCategory || 'AI in design'}
                </div>
                <h4 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                  <Link href={`/article/${aiDesign.id}`}>{aiDesign.title}</Link>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {aiDesign.deck}
                </p>
                <div className="text-xs text-slate-400">
                  {aiDesign.date} · {aiDesign.readTime}
                </div>
              </div>
            )}
            {agWaste && (
              <div className="pt-6 group">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {agWaste.subCategory || 'Innovative materials'}
                </div>
                <h4 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-2">
                  <Link href={`/article/${agWaste.id}`}>{agWaste.title}</Link>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {agWaste.deck}
                </p>
                <div className="text-xs text-slate-400">
                  {agWaste.date} · {agWaste.readTime}
                </div>
              </div>
            )}
          </div>
          {/* Right Practical Brief checklist card (span 3) */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
                The practical brief
              </span>
              <h3 className="text-xl font-serif text-navy mb-2 leading-snug">
                Before you specify a smart home
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                Four questions to ask before adding another connected device:
              </p>
              <ol className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400 font-bold shrink-0">01</span>
                  <span>Does it work offline?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400 font-bold shrink-0">02</span>
                  <span>Who owns the data?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400 font-bold shrink-0">03</span>
                  <span>Can it be repaired?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400 font-bold shrink-0">04</span>
                  <span>Will it age gracefully?</span>
                </li>
              </ol>
            </div>
            <div className="pt-6 border-t border-slate-200 mt-6">
              <Link
                href="/category/design-tech"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-navy hover:text-accent-blue transition-colors"
              >
                <span>Read the checklist</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}