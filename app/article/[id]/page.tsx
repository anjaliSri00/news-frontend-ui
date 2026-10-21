import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleById, getAllArticles } from '@/lib/services';
import { ArticleDetailPage } from '@/components/pages/ArticleDetailPage';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((art) => ({ id: art.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return { title: 'Story Not Found · Form & Field' };
  }

  return {
    title: `${article.title} · Form & Field | Lumen Journal`,
    description: article.deck,
    openGraph: {
      title: article.title,
      description: article.deck,
      images: [article.imageUrl],
    },
  };
}

// ✅ Child resolves params inside Suspense
async function ArticleContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) notFound();

  return <ArticleDetailPage article={article} />;
}

// ✅ Route passes the promise, does NOT await it
export default function ArticleRoute({ params }: PageProps) {
  return (
    <Suspense fallback={<ArticleShell />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}

// ✅ Deterministic fallback — approximates the article header layout
function ArticleShell() {
  return (
    <article className="bg-white">
      <div className="border-b border-slate-200 py-3 bg-slate-50 text-xs">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="h-3 w-32 bg-slate-200" />
          <div className="h-3 w-20 bg-slate-200" />
        </div>
      </div>

      <header className="max-w-4xl mx-auto px-4 pt-10 pb-8">
        <div className="h-3 w-40 bg-slate-200 mb-3" />
        <div className="h-12 w-full bg-slate-200 mb-3" />
        <div className="h-12 w-3/4 bg-slate-200 mb-6" />
        <div className="h-5 w-full bg-slate-200 mb-2" />
        <div className="h-5 w-5/6 bg-slate-200 mb-6" />
        <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
          <div className="h-3 w-24 bg-slate-200" />
          <div className="h-3 w-20 bg-slate-200" />
          <div className="h-3 w-16 bg-slate-200" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="aspect-16/10 bg-slate-100 border border-slate-200" />
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <div className="h-4 w-full bg-slate-200" />
        <div className="h-4 w-full bg-slate-200" />
        <div className="h-4 w-11/12 bg-slate-200" />
        <div className="h-4 w-full bg-slate-200" />
        <div className="h-4 w-10/12 bg-slate-200" />
      </div>
    </article>
  );
}