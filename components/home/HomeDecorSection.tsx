"use client";

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { getArticleById } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark } from 'lucide-react';

export function HomeDecorSection() {
  const { toggleBookmark, state } = useAppState();
  const [imgErr1, setImgErr1] = useState(false);
  const [imgErr2, setImgErr2] = useState(false);

  const amsterdam = getArticleById('home-room-for-seasons');
  const bedroom = getArticleById('restorative-bedroom-without-cliches');
  const storage = getArticleById('storage-belongs-to-architecture');
  const wall = getArticleById('before-you-remove-that-wall');

  const isAmsterdamSaved = amsterdam ? state.bookmarks.includes(amsterdam.id) : false;

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Spaces for everyday life"
          title="Home Decor"
          viewAllHref="/category/home-decor"
          viewAllText="View all Home Decor"
        />

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-10">
          {/* Main Large Amsterdam Feature (span 6) */}
          {amsterdam && (
            <div className="lg:col-span-4 flex flex-col group">
              <div className="relative aspect-6/3 overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {!imgErr1 ? (
                  <img
                    src={amsterdam.imageUrl}
                    alt={amsterdam.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr1(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : null}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(amsterdam.id, amsterdam.title);
                  }}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 text-navy shadow-xs rounded-xs"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isAmsterdamSaved ? 'fill-navy text-navy' : 'text-slate-600'}`} />
                </button>
              </div>

              <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                {amsterdam.kicker}
              </div>

              <h3 className="text-[27px] font-serif text-navy transition-colors leading-snug mb-2">
                <Link href={`/article/${amsterdam.id}`}>{amsterdam.title}</Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {amsterdam.deck}
              </p>

              <div className="text-xs text-slate-400">
                <span>{amsterdam.date}</span>
                <span className="mx-1.5">·</span>
                <span>{amsterdam.readTime}</span>
              </div>
            </div>
          )}

          {/* Secondary feature with image (span 3) */}
          {bedroom && (
            <div className="lg:col-span-3 flex flex-col group">
              <div className="relative aspect-[10/6.8] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                {!imgErr2 ? (
                  <img
                    src={bedroom.imageUrl}
                    alt={bedroom.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr2(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                {bedroom.kicker}
              </div>
              <h4 className="text-[22px] font-lora text-navy transition-colors leading-snug mb-2">
                <Link href={`/article/${bedroom.id}`}>{bedroom.title}</Link>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                {bedroom.deck}
              </p>
              <div className="text-xs text-slate-400">
                {bedroom.date} · {bedroom.readTime}
              </div>
            </div>
          )}

          {/* Right text-focused stack (span 3) */}
          <div className="lg:col-span-2 flex flex-col justify-start divide-y divide-slate-200">
            {storage && (
              <div className="pb-5 group">
                <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                  {storage.kicker}
                </div>
                <h4 className="text-xl font-lora text-navy transition-colors leading-snug mb-2">
                  <Link href={`/article/${storage.id}`}>{storage.title}</Link>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {storage.deck}
                </p>
                <div className="text-xs text-slate-400">
                  {storage.date} · {storage.readTime}
                </div>
              </div>
            )}

            {wall && (
              <div className="pt-5 group">
                <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                  {wall.kicker}
                </div>
                <h4 className="text-xl font-lora text-navy transition-colors leading-snug mb-2">
                  <Link href={`/article/${wall.id}`}>{wall.title}</Link>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {wall.deck}
                </p>
                <div className="text-xs text-slate-400">
                  {wall.date} · {wall.readTime}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
