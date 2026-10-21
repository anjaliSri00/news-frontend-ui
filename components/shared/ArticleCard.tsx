'use client';

import React, { useState } from 'react';
import { Article } from '../../lib/models';
import { Link } from '../../lib/router';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'large' | 'medium' | 'small' | 'horizontal' | 'text-only';
  showDeck?: boolean;
  showAuthor?: boolean;
  className?: string;
}

export function ArticleCard({
  article,
  variant = 'medium',
  showDeck = true,
  showAuthor = true,
  className = '',
}: ArticleCardProps) {
  const { state, toggleBookmark } = useAppState();
  const [imageError, setImageError] = useState(false);
  const isBookmarked = state.bookmarks.includes(article.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id, article.title);
  };

  const imageFallback = (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center p-4 text-slate-400 text-xs text-center border border-slate-200">
      <span className="font-serif italic">{article.title}</span>
    </div>
  );

  if (variant === 'large') {
    return (
      <article className={`group flex flex-col h-full ${className}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
          {!imageError ? (
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            imageFallback
          )}
          <button
            onClick={handleBookmarkClick}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-navy shadow-sm transition-colors rounded-sm"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-navy text-navy' : 'text-slate-600'}`} />
          </button>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
            {article.kicker || `${article.categoryName}${article.location ? ` / ${article.location.split(',')[0]}` : ''}`}
          </div>

          <h3 className="text-2xl lg:text-3xl font-serif text-navy group-hover:text-accent-blue transition-colors leading-tight mb-2.5">
            <Link href={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h3>

          {showDeck && article.deck && (
            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {article.deck}
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              {showAuthor && article.author && <span>By {article.author.name}</span>}
              {showAuthor && <span>·</span>}
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            <Link
              href={`/article/${article.id}`}
              className="inline-flex items-center gap-1 text-navy font-medium hover:text-accent-blue transition-colors"
            >
              <span>Read story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className={`group flex flex-col sm:flex-row gap-4 py-4 border-b border-slate-200 last:border-b-0 ${className}`}>
        <div className="sm:w-1/3 shrink-0 relative aspect-[4/3] overflow-hidden bg-slate-100">
          {!imageError ? (
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            imageFallback
          )}
          <button
            onClick={handleBookmarkClick}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
            className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm text-navy shadow-sm transition-colors rounded-sm"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-navy text-navy' : 'text-slate-600'}`} />
          </button>
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
              {article.kicker || article.categoryName}
            </div>
            <h4 className="text-base sm:text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5">
              <Link href={`/article/${article.id}`}>
                {article.title}
              </Link>
            </h4>
            {showDeck && article.deck && (
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-2">
                {article.deck}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            {showAuthor && article.author && <span>{article.author.name}</span>}
            {showAuthor && <span>·</span>}
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'small') {
    return (
      <article className={`group flex gap-3 items-start py-3 border-b border-slate-100 last:border-b-0 ${className}`}>
        <div className="w-20 h-20 shrink-0 relative overflow-hidden bg-slate-100">
          {!imageError ? (
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            imageFallback
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-0.5">
            {article.kicker || article.categoryName}
          </div>
          <h4 className="text-sm font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug line-clamp-2 mb-1">
            <Link href={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h4>
          <div className="text-[11px] text-slate-400">
            <span>{article.date}</span>
            <span className="mx-1">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'text-only') {
    return (
      <article className={`group py-3.5 border-b border-slate-200 last:border-b-0 ${className}`}>
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-500 mb-1">
          <span>{article.kicker || article.categoryName}</span>
          <button
            onClick={handleBookmarkClick}
            aria-label="Bookmark"
            className="text-slate-400 hover:text-navy transition-colors"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-navy text-navy' : ''}`} />
          </button>
        </div>

        <h4 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5">
          <Link href={`/article/${article.id}`}>
            {article.title}
          </Link>
        </h4>

        {showDeck && article.deck && (
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-2">
            {article.deck}
          </p>
        )}

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </article>
    );
  }

  // Default: medium card
  return (
    <article className={`group flex flex-col h-full ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
        {!imageError ? (
          <img
            src={article.imageUrl}
            alt={article.imageAlt || article.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          imageFallback
        )}
        <button
          onClick={handleBookmarkClick}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
          className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 backdrop-blur-sm text-navy shadow-sm transition-colors rounded-sm opacity-90 group-hover:opacity-100"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-navy text-navy' : 'text-slate-600'}`} />
        </button>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
          {article.kicker || article.categoryName}
        </div>

        <h3 className="text-lg font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5">
          <Link href={`/article/${article.id}`}>
            {article.title}
          </Link>
        </h3>

        {showDeck && article.deck && (
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
            {article.deck}
          </p>
        )}

        <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs text-slate-500">
          {showAuthor && article.author && <span>{article.author.name}</span>}
          {showAuthor && <span>·</span>}
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
