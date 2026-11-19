"use client";

import React, { useState, useEffect, Suspense } from 'react'; // 👈 Suspense import karo
import { useParams, useSearchParams } from 'next/navigation';
import fetchApiResponse from '@/helper/api_data_store';
import { Loader2, ArrowLeft, Eye } from 'lucide-react';
import { Link } from '@/lib/router';

// Map types to backend API endpoints
const API_MAP: Record<string, string> = {
  news: 'news',
  project: 'projects',
  editorial: 'editorials',
  design_tech: 'design-tech',
  designer: 'designers',
  furniture: 'furniture',
  home_decor: 'home-decor',
  product: 'products',
  event: 'events',
  showroom: 'showrooms',
  trend: 'trends',
};

// 1. Extract the actual content into a child component
function ArticleContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const slug = Array.isArray(params.id) ? params.id[0] : params.id;
  const type = searchParams.get('type') || 'news'; // Default to news

  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchArticle() {
      try {
        const endpoint = API_MAP[type] || 'news';
        
        const responseKey = endpoint === 'projects' ? 'project' 
                         : endpoint === 'editorials' ? 'editorial' 
                         : endpoint === 'trends' ? 'trend' 
                         : endpoint === 'showrooms' ? 'showroom' 
                         : endpoint === 'designers' ? 'designer'
                         : endpoint === 'design-tech' ? 'design_tech'
                         : endpoint === 'furniture' ? 'furniture'
                         : endpoint === 'products' ? 'product'
                         : endpoint === 'events' ? 'event'
                         : 'news';

        const res = await fetchApiResponse<any>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${endpoint}/slug/${slug}`
        );

        const fetchedData = res.data?.[responseKey];
        
        if (res.meta?.status === 200 && fetchedData) {
          setArticle(fetchedData);
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
  }, [slug, type]);

  // Increment Views
  useEffect(() => {
    if (article?.id && type) {
      const endpoint = API_MAP[type] || 'news';
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${endpoint}/${article.id}/views`, {
        method: 'POST',
      }).catch(err => console.error('Failed to increment views', err));
    }
  }, [article?.id, type]);

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

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
    : 'Recent';

  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to insights
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0]">
            {article.category?.[0] || type || 'News'}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {article.news_type || type || 'Article'}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] mb-6">
          {article.title}
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between border-y border-slate-200 py-4">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Editorial Desk</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{article.read_time || 5} min read</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-400">
             <Eye className="w-4 h-4" />
             <span>{article.views || 0} views</span>
          </div>
        </div>
      </section>

      {(article.featured_image_url || article.featured_image) && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="aspect-[5/3] w-full overflow-hidden bg-slate-100">
            <img
              src={article.featured_image_url || article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div 
          className="prose prose-lg prose-slate max-w-none 
                     prose-headings:font-serif prose-headings:text-navy 
                     prose-p:leading-relaxed prose-p:text-slate-700
                     prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                     prose-img:rounded-md prose-blockquote:border-l-navy prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6"
          dangerouslySetInnerHTML={{ __html: article.content || '<p>Content coming soon...</p>' }}
        />

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

// 2. Default export now just wraps the content in Suspense
export default function ArticlePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    }>
      <ArticleContent />
    </Suspense>
  );
}