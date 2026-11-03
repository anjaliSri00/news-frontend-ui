"use client";

import React, { useEffect, useState } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { useAppState } from '../../lib/state/AppStateProvider';
import { Bookmark } from 'lucide-react';
import fetchApiResponse from '@/helper/api_data_store';

interface NewsItem {
  id: string;
  code: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image: string;
  category: string;
  tags: string[];
  published_at: string | null;
  room_type: string;
  style: string;
  layout_type: 'featured' | 'medium' | 'compact';
  views: number;
  likes: number;
  read_time?: number;
}

interface HomeDecorResponse {
  home_decor: NewsItem[];
}

export function HomeDecorSection() {
  const { toggleBookmark, state } = useAppState();

  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let isMounted = true;

    async function fetchHomeDecor() {
      try {
        const res = await fetchApiResponse<HomeDecorResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/home-decor`
        );

        if (res.meta?.status === 200 && isMounted) {
          setArticles(res.data?.home_decor ?? []);
        }
      } catch (error) {
        console.error('Failed to load home decor articles:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchHomeDecor();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (date: string | null) => {
    if (!date) return '';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return '';

    return parsedDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatCategory = (category: string) =>
    category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const renderArticleImage = (
    article: NewsItem,
    aspectClass: string,
    imageClass: string
  ) => (
    <div
      className={`relative ${aspectClass} overflow-hidden bg-slate-100 border border-slate-100`}
    >
      {!imageErrors[article.id] && article.featured_image ? (
        <img
          src={article.featured_image}
          alt={article.title}
          referrerPolicy="no-referrer"
          onError={() =>
            setImageErrors((prev) => ({
              ...prev,
              [article.id]: true,
            }))
          }
          className={imageClass}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
          Image unavailable
        </div>
      )}

      <button
        type="button"
        aria-label={
          state.bookmarks.includes(article.id)
            ? `Remove bookmark for ${article.title}`
            : `Bookmark ${article.title}`
        }
        aria-pressed={state.bookmarks.includes(article.id)}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleBookmark(article.id, article.title);
        }}
        className="absolute top-3 right-3 p-2 bg-white/90 text-navy shadow-xs rounded-xs"
      >
        <Bookmark
          className={`w-4 h-4 ${
            state.bookmarks.includes(article.id)
              ? 'fill-navy text-navy'
              : 'text-slate-600'
          }`}
        />
      </button>
    </div>
  );

  const renderArticleMeta = (article: NewsItem) => (
    <div className="text-xs text-slate-400">
      {formatDate(article.published_at)}
      {article.read_time ? (
        <>
          <span className="mx-1.5">·</span>
          <span>{article.read_time} min read</span>
        </>
      ) : null}
    </div>
  );
const featured = articles.find(
  (article) => article.layout_type === 'featured'
);

const mediumArticles = articles.filter(
  (article) => article.layout_type === 'medium'
);

const compactArticles = articles.filter(
  (article) => article.layout_type === 'compact'
);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Spaces for everyday life"
          title="Home Decor"
          viewAllHref="/category/home-decor"
          viewAllText="View all Home Decor"
        />

        {isLoading ? (
          <div className="py-12 text-center text-sm text-slate-500">
            Loading home decor articles...
          </div>
        ) : articles.length === 0 ? (
          <div className="py-12 text-center text-sm text-slate-500">
            No home decor articles available right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-10">
            {/* Main featured article */}
            {featured && (
              <div className="lg:col-span-4 flex flex-col group">
                {renderArticleImage(
                  featured,
                  'aspect-[6/3] mb-4',
                  'w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                )}

                <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                  {formatCategory(featured.category)}
                </div>

                <h3 className="text-[27px] font-serif text-navy leading-snug mb-2">
                  <Link href={`/article/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {featured.excerpt}
                </p>

                {renderArticleMeta(featured)}
              </div>
            )}

            {/* Secondary image article */}
           {mediumArticles.map((article) => (
  <div key={article.id} className="lg:col-span-3 flex flex-col group">
                {renderArticleImage(
                  article,
                  'aspect-[10/6.8] mb-3',
                  'w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                )}

                <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                  {formatCategory(article.category)}
                </div>

                <h4 className="text-[22px] font-lora text-navy leading-snug mb-2">
                  <Link href={`/article/${article.slug}`}>
                    {article.title}
                  </Link>
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                  {article.excerpt}
                </p>

                {renderArticleMeta(article)}
              </div>
              )
            )}

            {/* Remaining text-focused articles */}
            <div className="lg:col-span-2 flex flex-col justify-start divide-y divide-slate-200">
              {compactArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`${index === 0 ? 'pb-5' : 'py-5'} group`}
                >
                  <div className="text-xs uppercase tracking-wider text-slate-600 mb-1 font-bold">
                    {formatCategory(article.category)}
                  </div>

                  <h4 className="text-xl font-lora text-navy leading-snug mb-2">
                    <Link href={`/article/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    {article.excerpt}
                  </p>

                  {renderArticleMeta(article)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}