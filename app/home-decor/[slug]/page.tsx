"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/lib/router";
import fetchApiResponse from "@/helper/api_data_store";
import { Loader2, ArrowLeft, Eye, Heart } from "lucide-react";

interface HomeDecorArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  category: string;
  read_time?: number;
  published_at: string | null;
  views: number;
  likes: number;
}

export default function HomeDecorDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [article, setArticle] = useState<HomeDecorArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchArticle() {
      try {
        // 🔥 Home Decor API hit
        const res = await fetchApiResponse<{ home_decor: HomeDecorArticle }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/home-decor/slug/${slug}`
        );

        if (res.meta?.status === 200 && res.data?.home_decor) {
          setArticle(res.data.home_decor);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch home decor article:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticle();
  }, [slug]);

  // Increment Views
  useEffect(() => {
    if (article?.id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/home-decor/${article.id}/views`, {
        method: "POST",
      }).catch(err => console.error(err));
    }
  }, [article?.id]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="w-8 h-8 animate-spin text-navy" /></div>;
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
            {article.category || 'Home Decor'}
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
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {article.views || 0}</div>
            <div className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> {article.likes || 0}</div>
          </div>
        </div>
      </section>

      {article.featured_image && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-slate-700 prose-a:text-accent-blue prose-img:rounded-md"
          dangerouslySetInnerHTML={{ __html: article.content || '<p>Content coming soon...</p>' }}
        />
      </section>
    </div>
  );
}