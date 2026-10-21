"use client";

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark, ArrowRight } from 'lucide-react';
import { getArticleById } from '../../lib/services';

export function FeaturedHeroSection() {
  const { toggleBookmark, state } = useAppState();
  const [imgErr1, setImgErr1] = useState(false);
  const [imgErr2, setImgErr2] = useState(false);
  const [imgErr3, setImgErr3] = useState(false);

  const heroArticle = getArticleById('copenhagen-courtyard-homes');
  const clayArticle = getArticleById('can-clay-become-concrete');
  const amaraArticle = getArticleById('amara-okafor-belonging');
  const smartHome = getArticleById('smart-home-disappear');
  const modularSofa = getArticleById('modular-sofa-growing-up');
  const autumnFairs = getArticleById('five-conversations-autumn-fairs');

  const isHeroBookmarked = heroArticle ? state.bookmarks.includes(heroArticle.id) : false;

  return (
    <section className="pt-6 pb-12">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        {/* Section header kicker */}
        <div className="pb-3 mb-6 flex items-center justify-between text-xs  uppercase tracking-widest font-inter">
            <span className='text-[#142B4A] font-bold '>Featured editorial stories / The Wednesday edit</span>
          <span className="hidden sm:inline text-slate-500">Architecture. Interiors. A wider perspective.</span>
        </div>
        {/* 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Lead Hero Story (span 6) */}
          {heroArticle && (
            <div className="lg:col-span-6 flex flex-col group">
              <div className="relative aspect-10/5 overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {!imgErr1 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={heroArticle.imageUrl}
                    alt={heroArticle.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr1(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 text-slate-400 font-lora italic text-center">
                    {heroArticle.title}
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(heroArticle.id, heroArticle.title);
                  }}
                  aria-label="Bookmark lead story"
                  className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm text-navy shadow-sm transition-colors rounded-xs"
                >
                  <Bookmark className={`w-4 h-4 ${isHeroBookmarked ? 'fill-navy text-navy' : 'text-slate-600'}`} />
                </button>
              </div>
              <div className="text-xs uppercase tracking-wider text-[#142B4A] font-inter mb-2 font-bold">
                {heroArticle.kicker}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-lora font-normal text-navy transition-colors leading-[1.18] mb-3">
                <Link href={`/article/${heroArticle.id}`}>
                  {heroArticle.title}
                </Link>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                {heroArticle.deck}
              </p>
              <div className="mt-auto flex flex-col items-start justify-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span>By {heroArticle.author.name}</span>
                  <span>·</span>
                  <span>{heroArticle.date}</span>
                  <span>·</span>
                  <span>{heroArticle.readTime}</span>
                </div>
                <Link
                  href={`/article/${heroArticle.id}`}
                  className="inline-flex font-inter font-bold items-center gap-1 text-navy transition-colors"
                >
                  <span className="text-xs">Read the full story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
          {/* Column 2: Secondary Features (span 3) */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-slate-200">
            {/* Top secondary */}
            {clayArticle && (
              <div className="pb-6 group">
                <div className="relative aspect-10/5 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  {!imgErr2 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={clayArticle.imageUrl}
                      alt={clayArticle.title}
                      referrerPolicy="no-referrer"
                      onError={() => setImgErr2(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#142B4A] font-inter font-bold mb-1">
                  {clayArticle.kicker}
                </div>
                <h3 className="text-[23px] font-lora text-navy transition-colors leading-snug mb-1.5">
                  <Link href={`/article/${clayArticle.id}`}>
                    {clayArticle.title}
                  </Link>
                </h3>
                <div className="text-xs text-slate-400">
                  <span>{clayArticle.date}</span>
                  <span className="mx-1.5">·</span>
                  <span>{clayArticle.readTime}</span>
                </div>
              </div>
            )}
            {/* Bottom secondary */}
            {amaraArticle && (
              <div className="pt-6 group">
                <div className="relative aspect-10/5 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  {!imgErr3 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={amaraArticle.imageUrl}
                      alt={amaraArticle.title}
                      referrerPolicy="no-referrer"
                      onError={() => setImgErr3(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#142B4A] font-inter mb-1 font-bold">
                  {amaraArticle.kicker}
                </div>
                <h3 className="text-xl font-lora text-[#142B4A] transition-colors leading-snug mb-1.5">
                  <Link href={`/article/${amaraArticle.id}`}>
                    {amaraArticle.title}
                  </Link>
                </h3>
                <div className="text-xs text-slate-400">
                  <span>{amaraArticle.date}</span>
                  <span className="mx-1.5">·</span>
                  <span>{amaraArticle.readTime}</span>
                </div>
              </div>
            )}
          </div>
          {/* Column 3: On our radar & Editor's note (span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div>
              <div className="text-2xl text-[#142B4A] font-normal pb-2 font-lora">
                On our radar
              </div>

              <div className="divide-y divide-slate-100">
                {smartHome && (
                  <div className="py-3 group">
                    <span className="text-[11px] uppercase tracking-wider text-[#142B4A] font-bold font-inter block mb-0.5">
                      {smartHome.categoryName}
                    </span>
                    <h4 className="text-xl font-lora text-[#142B4A] transition-colors leading-snug">
                      <Link href={`/article/${smartHome.id}`}>{smartHome.title}</Link>
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {smartHome.date} · {smartHome.readTime}
                    </span>
                  </div>
                )}
                {modularSofa && (
                  <div className="py-3 group">
                    <span className="text-[11px] uppercase tracking-wider text-[#142B4A] font-inter font-bold block mb-0.5">
                      {modularSofa.categoryName}
                    </span>
                    <h4 className="text-xl font-lora text-[#142B4A] transition-colors leading-snug">
                      <Link href={`/article/${modularSofa.id}`}>{modularSofa.title}</Link>
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {modularSofa.date} · {modularSofa.readTime}
                    </span>
                  </div>
                )}
                {autumnFairs && (
                  <div className="py-3 group">
                    <span className="text-[11px] uppercase tracking-wider text-[#142B4A] font-inter font-bold block mb-0.5">
                      {autumnFairs.categoryName}
                    </span>
                    <h4 className="text-xl font-lora text-[#142B4A] transition-colors leading-snug">
                      <Link href={`/article/${autumnFairs.id}`}>{autumnFairs.title}</Link>
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {autumnFairs.date} · {autumnFairs.readTime}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* Note from the editor box matching screenshot */}
            <div className="mt-6 pt-5 pb-4 px-4 bg-pale-blue">
              <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#142B4A] block mb-1.5">
                A note from the editor
              </span>
              <p className="font-lora italic text-slate-body text-sm leading-relaxed mb-3">
                &ldquo;Good design isn&apos;t just what we see. It&apos;s how we choose to live.&rdquo;
              </p>
              <div className="text-xs text-[#142B4A] font-playfair italic font-medium">
                Isabel Hart, <span className="font-normal text-slate-500">Editor-in-chief</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}