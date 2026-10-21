'use client';

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { getRelatedArticles } from '../../lib/services';
import { useAppState } from '../../lib/state/AppStateProvider';
import type { Article } from '../../lib/models';
import { ArticleCard } from '../shared/ArticleCard';
import { NewsletterBand } from '../shared/NewsletterBand';
import {
  Bookmark,
  Share2,
  MessageSquare,
  ArrowLeft,
  Check,
  Clock,
  Calendar,
} from 'lucide-react';

interface ArticleDetailPageProps {
  article: Article;
}

export function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const { state, toggleBookmark, addComment, showToast } = useAppState();

  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [copied, setCopied] = useState(false);

  const isBookmarked = state.bookmarks.includes(article.id);
  const articleComments = state.comments[article.id] || [];
  const related = getRelatedArticles(article.id, article.category, 3);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast('Article link copied to clipboard', 'info');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName.trim() && commentText.trim()) {
      addComment(
        article.id,
        commentName.trim(),
        commentEmail.trim() || 'reader@studio.com',
        commentText.trim()
      );
      setCommentText('');
    }
  };

  return (
    <article className="bg-white">
      {/* Top back breadcrumb */}
      <div className="border-b border-slate-200 py-3 bg-slate-50 text-xs">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link
            href={`/category/${article.category}`}
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-navy transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {article.categoryName}</span>
          </Link>

          <span className="text-slate-400 uppercase tracking-widest text-[11px]">
            {article.kicker || article.categoryName}
          </span>
        </div>
      </div>

      {/* Header section */}
      <header className="max-w-4xl mx-auto px-4 pt-10 pb-8 text-center sm:text-left">
        <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
          {article.kicker ||
            `${article.categoryName}${article.location ? ` · ${article.location}` : ''}`}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy leading-[1.15] mb-4 text-balance">
          {article.title}
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl font-serif leading-relaxed mb-6 max-w-3xl">
          {article.deck}
        </p>

        {/* Byline bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-navy">By {article.author.name}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(article.id, article.title)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs font-medium uppercase tracking-wider transition-colors rounded-xs ${
                isBookmarked
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-navy'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-white' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Save story'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 hover:border-navy text-slate-700 text-xs font-medium uppercase tracking-wider transition-colors rounded-xs"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="aspect-16/10 overflow-hidden bg-slate-100 border border-slate-200">
          <img
            src={article.imageUrl}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover"
          />
        </div>
        {article.caption && (
          <p className="text-xs font-serif italic text-slate-500 mt-2.5 max-w-3xl">
            {article.caption}
          </p>
        )}
      </div>

      {/* Main Reading Column */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Editorial Body Prose */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
          {article.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-navy leading-relaxed'
                  : 'leading-relaxed'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pull Quote */}
        {article.pullQuote && (
          <div className="my-10 py-8 px-6 bg-slate-50 border-y border-slate-200 text-center">
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-navy leading-relaxed mb-3">
              &ldquo;{article.pullQuote.quote}&rdquo;
            </blockquote>
            <cite className="text-xs uppercase tracking-widest text-slate-500 not-italic font-medium">
              — {article.pullQuote.attribution}
            </cite>
          </div>
        )}

        {/* Additional narrative expansion */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            When we evaluate contemporary architecture through the lens of lived
            experience rather than fleeting photographs, different values emerge.
            Spatial proportion, natural acoustics, thermal comfort, and tactile
            surfaces dictate human well-being far more than geometric spectacle.
          </p>
          <p>
            The projects documented here represent a deliberate shift toward
            longevity: structures engineered for deconstruction, materials that
            gain dignity with human use, and spaces designed around the quiet
            rituals of daily assembly.
          </p>
        </div>

        {/* Tags */}
        <div className="pt-8 mt-10 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2">
            Topics:
          </span>
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/search?q=${encodeURIComponent(tag)}`}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-xs transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="my-12 p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center font-serif text-xl shrink-0">
            {article.author.name[0]}
          </div>
          <div>
            <h4 className="font-serif text-navy text-lg font-medium">
              {article.author.name}
            </h4>
            <p className="text-xs text-slate-500 mb-2">{article.author.role}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {article.author.bio ||
                'Writer and researcher documenting sustainable urbanism, architectural craft, and contemporary interior typologies for Form & Field.'}
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <section className="pt-8 pb-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-navy flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>Conversation ({articleComments.length})</span>
            </h3>
            <span className="text-xs text-slate-500">Moderated editorial comments</span>
          </div>

          {/* New Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="mb-10 p-5 bg-slate-50 border border-slate-200 space-y-4"
          >
            <h4 className="text-xs uppercase tracking-wider text-navy font-semibold">
              Add your perspective to this story
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="sr-only">Your Name</label>
                <input
                  type="text"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="Your Name *"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
                />
              </div>
              <div>
                <label className="sr-only">Email (not published)</label>
                <input
                  type="email"
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  placeholder="Your Email (not published)"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
                />
              </div>
            </div>
            <div>
              <label className="sr-only">Comment Content</label>
              <textarea
                required
                rows={3}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your architectural insight or question..."
                className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider font-medium hover:bg-slate-900 transition-colors"
            >
              Post perspective
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {articleComments.map((c) => (
              <div key={c.id} className="p-4 border border-slate-200 bg-white">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold text-navy">{c.authorName}</span>
                  <span className="font-mono text-[11px]">{c.createdAt}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {c.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Related Stories */}
      {related.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl font-serif text-navy mb-6">
              Related Stories in {article.categoryName}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="medium" />
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterBand />
    </article>
  );
}