"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { NewsArticle } from '@/types/editorial';
import fetchApiResponse from '@/helper/api_data_store';
import { Loader2, ArrowLeft, Eye } from 'lucide-react';
import { Link } from '@/lib/router';

export default function ArticlePage() {
  const params = useParams();
  
  // Folder name [id] hai, to params.id aayega (jo actual slug hai)
  const slug = Array.isArray(params.id) ? params.id[0] : params.id;

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // 1. Fetch Article Data
  useEffect(() => {
    if (!slug) return;

    async function fetchArticle() {
      try {
        const res = await fetchApiResponse<{ news: NewsArticle }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news/slug/${slug}`
        );

        if (res.meta?.status === 200 && res.data?.news) {
          setArticle(res.data.news);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch article:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  // 2. Increment Views (Bonus: Jaise hi article load ho, views badhao)
  useEffect(() => {
    if (article?.id) {
      // Background me API hit karo (await mat karo taaki UI block na ho)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/news/${article.id}/views`, {
        method: 'POST',
      }).catch(err => console.error('Failed to increment views', err));
    }
  }, [article?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-serif text-navy mb-4">Article not found</h1>
        <Link href="/" className="text-accent-blue hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  // Format Date
  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
    : 'Recent';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to insights
        </Link>

        {/* Category & Type */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0]">
            {article.category?.[0] || 'News'}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {article.news_type || 'Article'}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] mb-6">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
          {article.excerpt}
        </p>

        {/* Author & Meta Info */}
        <div className="flex items-center justify-between border-y border-slate-200 py-4">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Editorial Desk</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{article.read_time} min read</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-400">
             <Eye className="w-4 h-4" />
             <span>{article.views || 0} views</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featured_image_url && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <img
              src={article.featured_image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* 
          HTML content render ho raha hai. 
          Ensure karo backend isko sanitize karta ho (XSS attacks se bachne ke liye).
        */}
        <div 
          className="prose prose-lg prose-slate max-w-none 
                     prose-headings:font-serif prose-headings:text-navy 
                     prose-p:leading-relaxed prose-p:text-slate-700
                     prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                     prose-img:rounded-md prose-blockquote:border-l-navy prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6"
          dangerouslySetInnerHTML={{ __html: article.content || '<p>Content coming soon...</p>' }}
        />

        {/* Source Link */}
        {article.source_url && (
          <div className="mt-12 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Source: <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">{article.source || article.source_url}</a>
            </p>
          </div>
        )}
      </section>
    </div>
  );
}