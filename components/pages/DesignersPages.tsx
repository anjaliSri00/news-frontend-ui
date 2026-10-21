'use client';

import React from 'react';
import { useRouter, Link } from '../../lib/router';
import { getAllDesigners, getDesignerById, getArticlesByCategory } from '../../lib/services';
import { ArticleCard } from '../shared/ArticleCard';
import { NewsletterBand } from '../shared/NewsletterBand';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Compass } from 'lucide-react';
import { Designer } from '@/lib/models';

export function DesignersListPage() {
  const designers = getAllDesigners();

  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            The people behind the places
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy tracking-tight mb-4">
            Designers &amp; Studios Directory
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            In-depth profiles, monographic studio visits, and candid dialogues with independent architects and craft practitioners shaping our built world.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <div
              key={designer.id}
              className="group border border-slate-200 p-6 flex flex-col justify-between hover:border-navy transition-colors bg-white shadow-2xs"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={designer.imageUrl}
                    alt={designer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {designer.city}, {designer.country}
                  </span>
                  <span>Est. {designer.foundedYear}</span>
                </div>

                <h3 className="text-xl font-serif text-navy group-hover:text-accent-blue transition-colors mb-1">
                  <Link href={`/designers/${designer.id}`}>{designer.name}</Link>
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                  {designer.discipline}
                </p>

                <p className="font-serif italic text-navy text-sm mb-4 leading-snug">
                  &ldquo;{designer.quote}&rdquo;
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {designer.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {designer.featuredProjects.length} key projects
                </span>
                <Link
                  href={`/designers/${designer.id}`}
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-navy hover:text-accent-blue transition-colors"
                >
                  <span>View profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
// ─── Detail page — now takes `designer` as a prop ──────────────────────
interface DesignerDetailPageProps {
  designer: Designer;
}
export function DesignerDetailPage({ designer }: DesignerDetailPageProps) {
  const relatedArticles = getArticlesByCategory('designers').slice(0, 3);

  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 py-3 bg-slate-50 text-xs">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <Link
            href="/designers"
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-navy font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Designers Directory</span>
          </Link>
          <span className="text-slate-400 uppercase tracking-widest text-[11px]">
            {designer.city}, {designer.country}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-14">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={designer.imageUrl}
                alt={designer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
              {designer.discipline} · Founded {designer.foundedYear}
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-navy mb-3">
              {designer.name}
            </h1>
            <p className="text-slate-500 text-sm font-sans mb-6">
              {designer.studio} · {designer.city}, {designer.country}
            </p>

            <div className="p-6 bg-slate-50 border-l-2 border-navy mb-6">
              <p className="font-serif italic text-navy text-lg sm:text-xl leading-relaxed">
                &ldquo;{designer.quote}&rdquo;
              </p>
            </div>

            <h3 className="text-xs uppercase tracking-widest text-navy font-semibold mb-2">
              Studio Philosophy
            </h3>
            <p className="text-slate-700 text-base leading-relaxed mb-6">
              {designer.bio}
            </p>

            <h3 className="text-xs uppercase tracking-widest text-navy font-semibold mb-3">
              Selected Projects
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {designer.featuredProjects.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-navy rounded-full" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200">
          <h3 className="text-2xl font-serif text-navy mb-6">
            Related Dialogues &amp; Studio Interviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <ArticleCard key={art.id} article={art} variant="medium" />
            ))}
          </div>
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
